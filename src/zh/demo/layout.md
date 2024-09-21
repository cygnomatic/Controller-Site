---
title: Q&A功能块
permalink: /zh/Q&A.html
icon: object-group
order: 2
category:
  - 指南
tag:
  - 布局
---

<!-- 布局包括:

- [导航栏](https://theme-hope.vuejs.press/zh/guide/layout/navbar.html)
- [侧边栏](https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html)
- [页脚](https://theme-hope.vuejs.press/zh/guide/layout/footer.html)

同时每个页面包含:

- [路径导航](https://theme-hope.vuejs.press/zh/guide/layout/breadcrumb.html)
- [标题和页面信息](https://theme-hope.vuejs.press/zh/guide/feature/page-info.html)
- [TOC (文章标题列表)](https://theme-hope.vuejs.press/zh/guide/layout/page.html#标题列表)
- [贡献者、更新时间等页面元信息](https://theme-hope.vuejs.press/guide/feature/meta.html)
- [评论](https://theme-hope.vuejs.press/zh/guide/feature/comment.html)

主题也带有以下元素:

- [夜间模式按钮](https://theme-hope.vuejs.press/zh/guide/interface/darkmode.html)
- [返回顶部按钮](https://theme-hope.vuejs.press/guide/interface/others.html#返回顶部按钮)
- [打印按钮](https://theme-hope.vuejs.press/guide/interface/others.html#打印按钮)

你可以在主题选项和页面的 frontmatter 中自定义它们。 -->

<VPCard
    title="我要提问"
    desc="世间一切问题：是什么，为什么，怎么做"
    logo=""
    link="/zh/Question"
    background="rgba(30, 180, 255, 0.3)"
    />

<VPCard
    title="我要回答"
    desc="慷慨解囊为学识，胜过一切闭门造车"
    logo=""
    link="/zh/Answer"
    background="rgba(30, 180, 255, 0.3)"
    />


<style scoped>
  /* 调整表单容器的布局 */
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem; /* 增加间距 */
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #2c2c2c;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* 设置表单标签的样式 */
  label {
    font-size: 1.1rem;
    color: #fff;
    margin-left: 5%; /* 对齐标签 */
  }

  /* 优化输入框的样式，调整为一致宽度，且居中 */
  input[type="text"]{
    width: 90%; /* 保证输入框和文本框的宽度一致 */
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
    background-color: #3c3c3c;
    color: #fff;
    font-size: 1rem;
    margin: 0 auto; /* 确保输入框居中 */
  }

textarea {
    width: 90%; /* 保证输入框和文本框的宽度一致 */
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
    background-color: #3c3c3c;
    color: #fff;
    font-size: 1rem;
    margin: 0 auto; /* 确保输入框居中 */
    resize:none;
    justify-self:center;
    margin-left:2.5%;
  }
  
  form p{
    margin:0;
  }

  /* 输入框聚焦时的样式 */
  input[type="text"]:focus,
  textarea:focus {
    outline: none;
    border-color: #42b983;
    box-shadow: 0 0 5px rgba(66, 185, 131, 0.5);
  }

  /* 提交按钮的样式 */
  button {
    width: 50%; /* 保持按钮宽度一致 */
    padding: 12px;
    border-radius: 6px;
    border: none;
    background-color: #42b983;
    color: #fff;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-left: 24.5%; /* 向右偏移 */

  }

  /* 提交按钮悬停时的效果 */
  button:hover {
    background-color: #359d6d;
  }

</style>

<form action="https://formspree.io/f/xblrvydz" method="POST">
  <label for="title">问题标题:</label>
  <input type="text" name="title" id="title" placeholder="请输入问题标题" required>
  
  <div>
    <label for="description">问题描述:</label>
  </div>
  
  <textarea  name="description" id="description" rows="4" placeholder="请输入问题详细描述" required></textarea>
  
  <button type="submit">提交问题</button>
</form>




<!-- <FormSubmit /> -->