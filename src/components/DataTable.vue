<template>
	<div class="table-responsive">
		<table class="table table-bordered table-hover-imp table-striped dataTable text-center" :id="id" style="width: 100%">
			<thead>
				<tr>
					<th v-for="c in columns">
						{{c.label}}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="row in rows">
					<td v-for="prop in row">
						{{row.prop}}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	props: ['id', 'columns', 'rows'],
	data () {
		return {
		}
	},
	watch: {
		rows: function(newValue) {
			if(newValue instanceof Array) {
				let datatable = this.initDataTable()
				datatable.destroy()
				this.initDataTable(newValue)
			}
			else console.log('data is not an array')
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



		formatData(rows, columns) {
			if(rows instanceof Array && columns instanceof Array) {
				rows.forEach((row) => {
					var formattedItem = {}
					columns.forEach((col) => {
						if(row[col.data]) { // se a coluna informada existir
						formattedItem[col.data] = row[col.data]
						}
						else row[col.data] = ''
					})
				})
			}
		},



		applyFilters() {
			if(this.rows instanceof Array && this.columns instanceof Array) {
				this.columns.forEach(function(col) {
					if(col.filter) {
						this.rows.forEach(function(row) {
							let filteredValue = this.$options.filters[col.filter](row[col.data])
							row[col.data] = filteredValue
						}, this)
					}
				}, this)
			}
		},



		initDataTable(data = null) {
			if($.fn.DataTable.isDataTable(this.id))
				return $('#' + this.id).DataTable()

			if(!this.columns) {
				console.log('columns not passed')
				return
			}
			if(!this.rows && data) {
				console.log('data not passed')
				return
			}

			if(data) this.rows = data

			this.applyFilters()
			this.formatData(this.rows, this.columns)

			return $('#' + this.id).DataTable({
				retrieve: true,
				autoWidth: true,
				ordering: true,
				order: [[1, 'desc']],
				language: {
					url: '//cdn.datatables.net/plug-ins/1.10.13/i18n/English.json'
				},
				columns: this.columns,
				data: this.rows,
			})
		}
	},
	mounted() {
		this.initDataTable()
	}
}
</script>

<style lang="css" scoped>
</style>