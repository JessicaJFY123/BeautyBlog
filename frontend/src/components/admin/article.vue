<template>

	<el-container>

		<el-header style="text-align: right; font-size: 12px">
			<el-button @click="addArticle()" align="left">添加文章</el-button>
		</el-header>

		<el-main>
			<el-table :data="tableData">
				<el-table-column type=index label="#" width="140" align="left">
				</el-table-column>
				<el-table-column prop="createtime" label="创建时间" width="140" align="left">
				</el-table-column>
				<el-table-column prop="articleclassify" label="分类名称" width="120" align="left">
				</el-table-column>
				<el-table-column prop="articlename" label="文章名称" width="120" align="left">
				</el-table-column>
				<el-table-column prop="address" label="操作" align="left">
					<template slot-scope="scope">
						<el-button size="mini" @click="articleCheck(scope.$index, scope.row)">查看</el-button>
						<el-button size="mini" @click="articleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button size="mini" type="danger" @click="articleDelete(scope.$index, scope.row)">删除</el-button>
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
			this.$store.dispatch('getArticle')
				.then((res) => {
					this.tableData = res.data
					//console.log(res)
				})
		},
		methods: {
			addArticle() {
				this.$router.push('/admin/createArticle')
			},
			articleCheck(index, row) {
				this.$router.push({path:'/customer/home',query:row})

			},
			//更新数据
			articleEdit(index, row) {
				console.log(row)
				this.$router.push({path:'/admin/modArticle',query:row})
			},
			//删除文章
			articleDelete(index, row) {
				console.log(index)
				this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'

					});
					this.$store.dispatch('delArticle', row)
						.then((res) => {
							console.log(res.data)
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