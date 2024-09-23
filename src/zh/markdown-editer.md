<!-- ---
title: Markdown 编辑器
---

<template>
  <div>
    <markdown-editor v-model="markdownContent"></markdown-editor>
    <button @click="submitContent">提交</button>
  </div>
</template>

<script>
import { MarkdownEditor } from 'vue-markdown-editor';
import axios from 'axios';

export default {
  components: { MarkdownEditor },
  data() {
    return {
      markdownContent: '',
    };
  },
  methods: {
    submitContent() {
      // 使用 Axios 提交数据到后台
      axios.post('/api/submit', { content: this.markdownContent })
        .then(response => {
          console.log('提交成功', response);
        })
        .catch(error => {
          console.error('提交失败', error);
        });
    },
  },
};
</script> -->
