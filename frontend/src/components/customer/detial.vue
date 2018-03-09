<template>
	<div class="detial">
		<!--<h1>{{detialcontent.articlename}}</h1>
		<h1 v-html='detialcontent.articlecontent'>{{detialcontent.articlecontent}}</h1>
		-->
		<h3>{{detialcontent.articlename}}</h3>
		<ul class="d-header">
			<li class="d-img"><img style="width: 100%;border-radius:50% ;" src="../../../static/jing.jpeg" /></li>
			<li>
				<ul class="d-author" style="margin-left: 10px;">
					<li style="text-align: left;font-weight: 500;font-size: 20px;">author</li>
					<li>
						<ul class="d-time">
							<li style="padding: 5px 0;">{{detialcontent.createtime|data}}</li>
							<!--<li>字数</li>
							<li>阅读量</li>-->
						</ul>
					</li>
				</ul>
			</li>
		</ul>
		<p class="image"><img style="width: 100%;height: 100%;" src="../../../static/timg.jpeg" /></p>
		<p class="d-content" v-html='detialcontent.articlecontent'>{{detialcontent.articlecontent}}</p>
		<p style="margin-bottom: 40px;">
			<el-button style='float: left;' @click="good">👍{{num}}</el-button>
		</p>
		<p class="d-com">
			<h3>发布评论:</h3>
			<el-input style="margin-bottom:10px;" type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
			</el-input>
			<el-button style="width: 80px;height: 30px;line-height: 8px;float: right;" type="success" round @click='send'>发布</el-button>
		</p>

		<div class="comment" v-for='p in comments' style="margin: 30px 0;">
			<p>
				<span>{{p.author}}</span>
				<span style="padding: 20px;">{{p.createtime|data}}</span>
			</p>
			<p>{{p.content}}</p>

		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				detialcontent: {},
				textarea: '',
				comments: [],
				bool:'喜欢',
				num:0
			}
		},
		mounted() {
			this.detialcontent = this.$route.query;
			var obj = {
				author: "",
				articleid: this.detialcontent._id,
				content: this.textarea
			}
			this.$store.dispatch('getComment', obj)
				.then(res => {
					this.comments = res.data
				})
		},
		methods: {
			send() {
				var obj = {
					author: "",
					articleid: this.detialcontent._id,
					content: this.textarea,

				}
				console.log(obj)
				this.$store.dispatch('addComment', obj)
					.then(res => {
						console.log(res.data)
						this.comments = res.data
					})
				this.textarea = '';
			},
			good() {
				if (this.bool=='喜欢') {
					this.bool='已赞';
					this.num++
				} else{
					this.bool='喜欢';
					this.num--
				}
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
	
	.detial {
		width: 100%;
	}
	
	.detial h3 {
		text-align: left;
		height: 40px;
		line-height: 40px;
	}
	
	.detial .d-header {
		width: 100%;
		display: flex;
		/*border: solid 1px;*/
		font-size: 12px;
	}
	
	.d-header .d-img {
		width: 50px;
		height: 50px;
		/*border: solid 1px;*/
	}
	
	.d-time {
		display: flex;
	}
	
	.image {
		width: 100%;
		height: 200px;
		/*border: solid 1px;*/
	}
	
	.d-content {
		width: 100%;
		height: auto;
		/*border: solid 1px;*/
	}
	
	.d-com {
		width: 80%;
	}
	
	.d-com textarea {
		display: block;
		width: 100%;
		height: 200px;
	}
	
	.d-com button {
		background: lightpink;
	}
	
	.comment {
		width: 100%;
		border-bottom: solid 1px #FFB6C1;
		text-align: left;
		padding: 10px 20px;
	}
	
	.comment:hover {
		background: #EEFFFF;
	}
</style>