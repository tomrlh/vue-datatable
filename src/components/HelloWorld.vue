<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <data-table :id="ide" :columns="cols" :ajax="ajaxUrl" ajaxDS="ajaxDS" ref="filho"></data-table>
    <button @click="limparTabela()">Limpar tabela</button>
    <button @click="gerarDados()">Novos dados</button>
    <button @click="novaLinha()">Adicionar linha</button>
    <button @click="ajaxReload()">Ajax Reload</button>
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
      msg: 'DataTables as Component (Implementing)',
      ide: 'id_tabela',
      cols: [
        { data: 'id', label: 'ID' },
        { data: 'attributes.ano', label: 'Ano' },
        { data: 'attributes.valor', label: 'Valor' },
      ],
      ajaxUrl: 'http://localhost:8000/api/v1/pessoas/2/consignacoes',
      ajaxDS: 'data',
      dados: [
        {
          'col1': 'prop1',
          'col2': 'prop1'
        },
        {
          'col1': 'prop2',
          'col2': 'prop2'
        },
        {
          'col1': 'prop3',
          'col2': 'prop3'
        },
        {
          'col1': 'prop4',
          'col2': 'prop4'
        },
        {
          'col1': 'prop5',
          'col2': 'prop5'
        },
        {
          'col1': 'prop6',
          'col2': 'prop6'
        },
        {
          'col1': 'prop7',
          'col2': 'prop7'
        },
        {
          'col1': 'prop8',
          'col2': 'prop8'
        },
        {
          'col1': 'prop9',
          'col2': 'prop9'
        },
        {
          'col1': 'prop10',
          'col2': 'prop10'
        },
        {
          'col1': 'prop11',
          'col2': 'prop11'
        },
        {
          'col1': 'prop12',
          'col2': 'prop12'
        },
      ],
    }
  },
  methods: {
    novaLinha() {
      this.$refs.filho.addRow({'col1': 'novaLinha1', 'col2': 'novaLinha2'})
    },
    limparTabela() {
      this.$refs.filho.clear()
    },
    gerarDados() {
      this.dados = [
        {
          'col1': 'NOVO1',
          'col2': 'NOVO1'
        },
        {
          'col1': 'NOVO2',
          'col2': 'NOVO2'
        },
      ]
    },
    ajaxReload() {
      this.$refs.filho.ajaxReload()
    }
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
