<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <data-table :id="ide":columns="cols" :data="data" ref="filho"></data-table>
    <button @click="limparTabela()">Limpar tabela</button>
    <button @click="gerarDados()">Novas linhas</button>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable'

export default {
  components: {
    'DataTable': DataTable
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ide: 'id_tabela',
      cols: [
        { 'name': 'col1' },
        { 'name': 'col2' },
      ],
      data: [
        {
          'col1': 'NOVO2',
          'col2': 'NOVO2'
        },
        {
          'col1': 'NOVO3',
          'col2': 'NOVO4'
        },
        {
          'col1': 'NOVO2',
          'col2': 'NOVO2'
        },
        {
          'col1': 'NOVO3',
          'col2': 'NOVO4'
        },
        {
          'col1': 'NOVO2',
          'col2': 'NOVO2'
        },
        {
          'col1': 'NOVO3',
          'col2': 'NOVO4'
        },
        {
          'col1': 'NOVO2',
          'col2': 'NOVO2'
        },
        {
          'col1': 'NOVO3',
          'col2': 'NOVO4'
        },
        {
          'col1': 'NOVO2',
          'col2': 'NOVO2'
        },
        {
          'col1': 'NOVO3',
          'col2': 'NOVO4'
        },
        {
          'col1': 'NOVO2',
          'col2': 'NOVO2'
        },
        {
          'col1': 'NOVO3',
          'col2': 'NOVO4'
        },
      ],
    }
  },
  methods: {
    limparTabela() {
      this.$refs.filho.clear()
    },
    gerarDados() {
      this.data = [
        {
          'col1': 'NOVO2',
          'col2': 'NOVO2'
        },
        {
          'col1': 'NOVO3',
          'col2': 'NOVO4'
        },
      ]
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
