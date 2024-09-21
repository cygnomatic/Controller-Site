const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const { title, description } = req.body;

  const fileName = `${title.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.md`;
  const markdownContent = `---
title: ${title}
date: ${new Date().toISOString()}
description: ${description}
---

# ${title}

${description}
  `;

  const filePath = path.join(__dirname, 'questions', fileName);

  fs.writeFile(filePath, markdownContent, (err) => {
    if (err) {
      console.error('Error writing file', err);
      return res.status(500).send('Error writing file');
    }

    console.log(`Markdown file generated: ${fileName}`);

    // Git 自动提交并推送
    exec('git add . && git commit -m "Auto add new question" && git push', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error during git push: ${error}`);
        return res.status(500).send('Error during git push');
      }

      console.log(`Git push result: ${stdout}`);
      res.status(200).send('Markdown file created and pushed successfully');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Webhook server running on port ${PORT}`);
});
