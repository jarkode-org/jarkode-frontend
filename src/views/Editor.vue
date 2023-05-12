<template>
  <div class="">
    <div class="wrapper" style="display: block;">
      <div class="input-wrapper border border-light border-top-0 border-bottom-0">
        <div class="input-header">
          <div class="tab-header">
            <div
              v-for="tab in tabs"
              :key="tab.id"
              class="tab"
              :class="{ active: activeTab === tab.id }"
              @click="setActiveTab(tab.id)"
            >
              {{ tab.label }}
            </div>
            <div class="ml-auto">
              <input type="button" class="btn btn-success mt-1" value="Run" @click="getData(code)"/>
              <button class="btn btn-primary ml-2 mr-2  mt-1" @click="downloadCode"><i class="bi bi-download"></i></button>
            </div>
          </div>
        </div>
        <div class="input-content">
          <form>
              <MonacoEditor ref="editor" v-show="activeTab === 'editor'"
              theme="vs-light"
              :options="options"
              :style="{ width: '100%', height: '510px' }"
              @change="onDidChangeModelContent"
              />
          </form>
        </div>
      </div>
      <div class="output-wrapper">
        <div class="output-header">
          <div class="tab-header">
            <div
              v-for="tab in tabs"
              :key="tab.id"
              class="tab"
              :class="{ active: activeTab === tab.id }"
              @click="setActiveTab(tab.id)"
            >
              Output
            </div>
          </div>
        </div>
        <div class="output_content p-2">
          <p class="card-text">{{ hasil }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MonacoEditor from 'monaco-editor-vue3'
// import { onMounted, ref } from 'vue';
import axios from "axios";

export default {
  //el: '#app',
  components: {
    MonacoEditor
  },
  data() {
    return {
      apiEndPoint : 'http://localhost:8000/api/code-glot',
      apiData: '',
      code: '',
      hasil: '',
      label: 'main.py',
      options: {
        language: 'python',
        filename: 'main.py',
        value: '# Python code\nprint("Hello, world!")',
        readOnly: false,
        colorDecorators: true,
        minimap: { enabled: false },
        automaticLayout: true,
        scrollBeyondLastLine: false,
        label: 'main.py'
      },
      tabs: [
        { id: 'editor', label: 'main.py' },
      ],
      activeTab: 'editor'
    }
  },
  methods: {
    getData(c) {
      this.code = c,
      axios
      .post(this.apiEndPoint, {
        "files": [
          {
            "name": "main.py",
            "content": c,
          }
        ]
      }, 
      {
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        //console.log(res.data);
        if (res.data.stdout != '') {
        this.hasil = res.data.stdout
        } else if (res.data.stderr != '') {
        this.hasil = res.data.stderr
        } else {
        this.hasil = res.data.error
        }
      });
    },
    setActiveTab(tabId) {
      this.activeTab = tabId;
    },
    onDidChangeModelContent(value) {
      this.code = value
    },
    downloadCode() {
      const code = this.$refs.editor.editor.getValue();
      const blob = new Blob([code], { type: 'text/x-python' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'code.py';
      link.click();
      URL.revokeObjectURL(url);
    },
  },
}
</script>

<style>
.input-wrapper {
  background-color: #dddddd;
}

.output-header {
  background-color: #dddddd;
}

.tab-header {
  display: flex;
}

.tab {
  padding: 10px;
  cursor: pointer;
}

.active {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}

.input-wrapper {
  width: 50%;
  float: left;
  /* margin-right: 10px; */
}

.output-wrapper {
  width: 50%;
  float: right;
}
</style>