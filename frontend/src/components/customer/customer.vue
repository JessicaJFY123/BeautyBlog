<template>
	<div class="home">
			<div class="header">
				<ul>
					<li>BeautyBlog</li>
					<li>
						<router-link to="/customer/home">主页</router-link>
						<router-link to="/customer/classify">分类</router-link>
						<router-link to="/customer/about">关于</router-link>
						<router-link to='/regist'>注册</router-link>
						<router-link to='/login'>登录</router-link>
					</li>
					
				</ul>
			</div>
			<div class="main">
				<router-view></router-view>
			</div>
		</el-container>
	</div>
	
	
</template>

<script>
	export default{}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.home{
		width: 100%;
	}
	.home .header{
		width: 100%;
		height: 80px;
		line-height: 80px;
		padding: 0 5%;
		background:lightpink;
	}
	.header ul{
		display: flex;
		list-style: none;
		height: 100%;
	}
	.header ul li:first-child{
		/*flex: 1;*/
		width: 40%;
		height: 80px;
		line-height: 80px;
		color: white;
		
		font-size: 25px;
		font-weight: 600;
	}
	
	.header ul li:last-child{
		/*flex: 1;*/
		width: 60%;
		list-style: none;
	}
	.header ul li:last-child a{
		padding: 0 1%;
		font-size:16px;
		text-decoration: none;
	}
	.router-link-exact-active{
		color: lightcoral;
	}
	.home .main{
		width: 100%;
		height: auto;
		padding: 5% 10%;
	}
	
</style>