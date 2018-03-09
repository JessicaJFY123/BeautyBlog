<template>
	<div>
		
		<h1>详情页</h1>
		<p>{{artical.articlename}}</p>
		<p>{{artical.articlecontent}}</p>
		<p>{{artical.articleclassify}}</p>
		<p>{{artical.createtime}}</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				artical:{}
			}
		},
		mounted(){
			console.log(this.$route.query)
			this.artical=this.$route.query
		}
	}
</script>

<style>
</style>