<template>
	<div>
		<table class="table table-bordered table-hover-imp table-striped dataTable" :id="id">
			<thead>
				<tr>
					<th  v-for="c in columns">
						{{c.label}}
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
	</div>
</template>

<script>
export default {
	props: ['id', 'columns', 'data', 'ajax', 'ajaxDS'],
	data () {
		return {
		}
	},
	watch: {
		data: function(newValue) {
			let datatable = this.initDataTable()
			datatable.rows().remove().draw()
			datatable.rows.add(newValue).draw()
		}
	},
	methods: {
		addRow(newRow) {
			let datatable = this.initDataTable()
			datatable.rows.add([newRow]).draw()
		},
		


		clear() {
			let datatable = this.initDataTable()
			datatable.rows().remove().draw()
		},



		ajaxReload() {
			let datatable = this.initDataTable()
			datatable.ajax.reload()
		},



		initDataTable() {
			return $('#' + this.id).DataTable({
				retrieve: true,
				autoWidth: true,
				ordering: true,
				language: {
					url: '//cdn.datatables.net/plug-ins/1.10.13/i18n/Portuguese-Brasil.json'
				},
				columns: this.columns,
				ajax: this.ajax
			})
		}
	},
	mounted() {
		this.initDataTable()
		this.initDataTable().order([1, 'asc']).draw()
	}
}
</script>

<style lang="css" scoped>
</style>