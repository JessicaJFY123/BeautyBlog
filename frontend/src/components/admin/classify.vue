<template>

	<el-container>

		<el-header style="text-align: right; font-size: 12px">
			<el-button @click="addClass()" align="left">添加分类</el-button>
		</el-header>

		<el-main>
			<el-table :data="tableData">
				<el-table-column type=index label="#" width="140" align="left">
				</el-table-column>
				<el-table-column prop="createtime" label="创建时间" width="140" align="left">
				</el-table-column>
				<el-table-column prop="name" label="分类名称" width="120" align="left">
				</el-table-column>
				<el-table-column prop="address" label="操作" align="left">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-main>
	</el-container>

</template>

<script>
	export default {
		data() {
			return {
				tableData: []
			}
		},
		mounted() {
			this.$store.dispatch('getClass')
				.then((res) => {
					this.tableData = res.data
				})
		},
		methods: {
			addClass() {
				this.$prompt('请输入分类名称', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					inputPattern: /\S/,
					//inputErrorMessage: '邮箱格式不正确'
				}).then(({
					value
				}) => {
					this.$message({
						type: 'success',
						message: '输入的分类名称是: ' + value
					});
					this.$store.dispatch('addClass', {
							classify: value
						})
						.then((res) => {
							console.log(res)
							//添加成功之后，赋值
							this.tableData = res.data
						})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '取消输入'
					});
				});
			},
			//更新数据
			handleEdit(index, row) {
				this.$prompt('请输入分类名称', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					inputPattern: /\S/,
					//inputErrorMessage: '邮箱格式不正确'
				}).then(({
					value
				}) => {
					this.$message({
						type: 'success',
						message: '输入的分类名称是: ' + value
					});
					var obj={
						name:value,
						id:row._id
					}
					this.$store.dispatch("updateClass",obj)
					.then((res)=>{
						this.tableData = res.data
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '取消输入'
					});
				});

			},
			handleDelete(index, row) {
				console.log(index)
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'

					});
					this.$store.dispatch('delClass', row)
						.then((res) => {
							//console.log(res.data)
							this.tableData = res.data
						})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});

			}

		}
	}
</script>

<style>
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}
	
	.el-aside {
		color: #333;
	}
</style>