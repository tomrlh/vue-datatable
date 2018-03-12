<template>
	<div>
		<table class="table table-bordered table-hover-imp table-striped dataTable" :id="id">
			<thead>
				<tr>
					<th v-for="col in columns">
						{{col}}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td v-for="d in data">
						{{d}}
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
				console.log('true')
				let datatable = this.initDataTable()
				console.log(datatable)
				datatable.clear()
				datatable.draw()
			}
			else {

				console.log('false')
			}
		}
	},
	methods: {
		clear() {
			let datatable = this.initDataTable()
			datatable.clear()
			datatable.draw()
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