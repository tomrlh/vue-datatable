<template>
	<div>
		<table class="table table-bordered table-hover-imp table-striped dataTable" :id="id">
			<thead>
				<tr>
					<th  v-for="c in columns">
						<span v-for="prop in c">
							{{prop}}
						</span> 
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
			{{initDataTable().data()[0]}}
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
			let datatable = this.initDataTable()
			datatable.clear()
			datatable.rows.add(newValue).draw()
			console.log(datatable.data)
		}
	},
	methods: {
		addRow(newRow) {
			let datatable = this.initDataTable()
			datatable.rows.add([newRow]).draw()
		},
		clear() {
			let datatable = this.initDataTable()
			datatable.clear().draw()
		},
		initDataTable() {
			if(!$.fn.dataTable.isDataTable('#' + this.id)) {
				return $('#' + this.id).DataTable({
					retrieve: true,
					columns: this.columns,
					language: {
						url: '//cdn.datatables.net/plug-ins/1.10.13/i18n/Portuguese-Brasil.json'
					},
					autoWidth: true
				})
			}
			else {
				return $('#' + this.id).DataTable()
			}
		}
	},
	mounted() {
		console.log(this.initDataTable())
	}
}
</script>

<style lang="css" scoped>
</style>