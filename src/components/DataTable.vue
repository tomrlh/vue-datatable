<template>
	<div>
		<table class="table table-bordered table-hover-imp table-striped dataTable" :id="id">
			<thead>
				<tr>
					<th v-for="c in columns">
						{{c}}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="d in data">
					<td v-for="c in d">
						{{c}}
					</td>
				</tr>
			</tbody>
		</table>
		<div class="row">
			{{id}}
			<br>
			{{columns}}
			<br>
			{{data}}
		</div>
	</div>
</template>

<script>
export default {
	props: ['id', 'columns', 'data'],
	data () {
		return {

		}
	},
	watch: {
		data: function(newValue) {
			if($.fn.dataTable.isDataTable('#' + this.id)) {
				console.log('foi iniciada')
				let datatable = this.initDataTable()
				console.log('antes limpar')
				datatable.clear()
				datatable.draw()

				datatable.rows.add(newValue).draw()
				console.log(datatable.data)
			}
			else {
				console.log('false')
			}
		}
	},
	methods: {
		clear() {
			console.log('clear method')
			let datatable = this.initDataTable()
			console.log('antes')
			console.log('columns', datatable.columns())
			console.log('columns', datatable.columns().indexes())
			console.log('rows', datatable.rows().data())
			// datatable.clear()
			// datatable.draw()
			console.log('depois')
			datatable.rows.add([{
				'col1': 'ADICIONADO1',
				'col2': 'ADICIONADO2'
			}]).draw()
			// console.log('columns', datatable.columns())
			// datatable.rows().invalidate().draw()
				// datatable.rows.add([
				// 	{
				// 		'col1': 'NOVO2',
				// 		'col2': 'NOVO2'
				// 	},
				// 	{
				// 		'col1': 'NOVO3',
				// 		'col2': 'NOVO4'
				// 	},
				// 	{
				// 		'col1': 'NOVO3',
				// 		'col2': 'NOVO4'
				// 	},
				// ]).draw()
			// console.log('depois', datatable.rows().data())
		},
		initDataTable() {
			return $('#' + this.id).DataTable({
				'retrieve': true
			})
		}
	},
	mounted() {
		console.log(this.initDataTable())
	}
}
</script>

<style lang="css" scoped>
</style>