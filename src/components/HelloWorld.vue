<template>
  <div>
    <h1>{{ msg }}</h1>
    <h3>Repositories of: {{userName}} <img :src="rows[0].owner.avatar_url" alt="" v-if="rows[0]" width="5%" style="border-radius: 50px"></h3>

    <br>
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <data-table :id="id" :columns="cols" :rows="rows" ajaxDS="ajaxDS" ref="table"></data-table>
      </div>
    </div>
    <br>
    GitHub User to search: <input type="text" v-model="userName">
    <button @click="loadData()">Load Data</button>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable'

export default {
  components: {
    'DataTable': DataTable
  },
  data () {
    return {
      msg: 'Example of use of Vue DataTables component',
      userName: '',
      id: 'id',
      rows: [],
      cols: [
        {data: 'id', label: 'ID'},
        {data: 'name', label: 'Name'},
        {data: 'full_name', label: 'Full Name'},
      ],
    }
  },
  methods: {
    loadData() {
      this.$axios.get(`https://api.github.com/users/${this.userName}/repos`)
      .then((response) => this.rows = response.data)
      .catch(error => {console.log(error)})
    }
  },
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
