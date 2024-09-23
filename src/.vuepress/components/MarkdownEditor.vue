<!-- <template>
    <div>
      <markdown-editor v-model="markdownContent"></markdown-editor>
      <button @click="submitContent">提交</button>
    </div>
  </template>
  
  <script>
  import { MarkdownEditor } from '@kangc/v-md-editor';
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
  </script>
   -->