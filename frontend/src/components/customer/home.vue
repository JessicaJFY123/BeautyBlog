<template>
	<!--<div>
		<h1>详情页</h1>
		<p>{{artical.articlename}}</p>
		<p>{{artical.articlecontent}}</p>
		<p>{{artical.articleclassify}}</p>
		<p>{{artical.createtime}}</p>
	</div>-->
	<div id="container">
		<!--<router-link :to='/customer/detial'>-->
		<div class="h-container" v-for='item in artical' @click="homedetial(item)">
			<div class="h-left">
				<ul class="h-header">
					<li><img style="width: 34%;border-radius:17px ;" src="../../../static/jing.jpeg"/></li>
					<li>{{item.articleclassify}}</li>
					<li style="width: 160px;">{{item.createtime|data}}</li>
				</ul>
				<ul class="h-title">
					<li>{{item.articlename}}</li>
					<li v-html='item.articlecontent'>{{item.articlecontent}}</li>
				</ul>
				<ul class="h-list">
					<li>浏览量</li>
					<li>评论</li>
					<li>点赞</li>
					<li>money</li>
				</ul>
			</div>
			<div class="h-right">
				<img src="../../../static/timg.jpeg"/>
			</div>
		</div>
		<!--</router-link>-->
	</div>

</template>

<script>
	export default {
		data() {
			return {
				artical: []
			}
		},
		mounted() {
			this.$store.dispatch('getArticle')
				.then(res => {
					console.log(res)
					this.artical = res.data
				})
		},
		methods: {
			homedetial(item) {
				console.log(item)
				this.$router.push({
					path: '/customer/detial',
					query: item
				})
			}
		},
		filters: {
			data: function(val) {
				var d = new Date(val);
				var year = d.getFullYear();
				var month = d.getMonth() + 1;
				var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
				var hour = d.getHours();
				var minutes = d.getMinutes();
				var seconds = d.getSeconds();
				return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	ul {
		list-style: none;
	}
	
	a {
		text-decoration: none;
	}
	
	.h-container {
		width: 100%;
		height: auto;
		display: flex;
		align-items: center;
		border-bottom: solid 1px lightpink;
		margin: 20px 0;
	}
	.h-container:hover{
		background: #eff;
	}
	.h-container .h-left {
		flex: 3;
		/*border: solid 1px;*/
	}
	
	.h-container .h-left .h-header {
		display: flex;
		align-items: center;
		height: 50px;
		/*border: solid 1px;*/
	}
	
	.h-header li {
		height: 100%;
		line-height: 50px;
		width: 15%;
		/*border: solid 1px;*/
	}
	
	.h-title {
		width: 100%;
		/*height: 25vh;*/
		/*border: solid 1px;*/
		text-align: left;
	}
	
	.h-title li:first-child {
		width: 30%;
		height: 30px;
		line-height: 30px;
		text-decoration: underline;
	}
	
	.h-title li:last-child {
		/*white-space: wrap;
		overflow: hidden;
		text-overflow: ellipsis;*/
		width: 100%;
		height: auto;
		/*border: solid 1px;*/
	}
	
	.h-list {
		display: flex;
		height: 30px;
		line-height: 30px;
	}
	
	.h-list li {
		font-size: 10px;
		width: 20%;
	}
	
	.h-container .h-right {
		flex: 1;
		/*border: solid 1px;*/
	}
	
	.h-right img {
		width: 100%;
	}
</style>