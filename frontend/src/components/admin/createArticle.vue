<template>
	<el-form ref="form" :model="form" label-width="80px">
		<el-form-item label="文章名称">
			<el-input v-model="form.articleName"></el-input>
		</el-form-item>
		<el-form-item label="文章分类">
			<el-select v-model="form.articleClassify" placeholder="请选择文章分类">
				<el-option v-for='p in classify' :label="p.name" :value="p.name"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item>
			<!-- Or manually control the data synchronization（或手动控制数据流） -->
			<quill-editor :content="content" :options="editorOption" @change="onEditorChange($event)">
			</quill-editor>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">发布</el-button>
			<el-button>取消</el-button>
		</el-form-item>

	</el-form>

</template>

<script>
	export default {
		data() {
			return {
				form: {
					articleName: '',
					articleClassify: ''

				},
				content: '',
				editorOption: {},
				classify: []
			}
		},
		mounted() {
			this.$store.dispatch('getClass')
				.then(res => {
					console.log(res)
					this.classify = res.data
				})
		},
		methods: {
			onEditorChange(e) {
				this.content = e.html;

			},
			onSubmit() {
			   var obj = {
					articlename: this.form.articleName,
					articleclassify: this.form.articleClassify,
					articlecontent: this.content
				};
				this.$store.dispatch('publishClass', obj)
					.then(res => {
						console.log(res.data.msg)
						if(res.data.msg == 'success') {
							this.$router.push('/admin/article')
						} else {
							console.log('error')
						}
					})

			}

		}

	}
</script>

<style>

</style>