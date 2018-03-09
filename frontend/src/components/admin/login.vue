<template>
	<div class="regist">
		<h1>BeautyBlog</h1>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
			<p>
				<router-link to="/regist"><span>注册</span></router-link>
				<router-link to="/login"><span>登录</span></router-link>
			</p>
			<el-form-item prop="name">
				<el-input v-model="ruleForm.name" placeholder='你的昵称' auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item prop="pass">
				<el-input type="password" v-model="ruleForm.pass" placeholder='密码' auto-complete="off"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="success" round @click="submitForm('ruleForm')">登录</el-button>
				<span v-if='bool'>用户名或密码错误</span>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
				} else {
					if(this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.ruleForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				bool:false,
				ruleForm: {
					name: '',
					pass: ''
				},
				rules: {
					name: [{
							required: true,
							message: '请输入用户名',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 5,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						}
					],
					pass: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						//alert('submit!');
						var obj = {
							name: this.ruleForm.name,
							pass: this.ruleForm.pass,
						}
						this.$store.dispatch('Confirm')
							.then(res => {
								var arr = res.data;
								for(var i = 0; i < arr.length; i++) {
									if(arr[i].name == obj.name && arr[i].pass == obj.pass) {
										this.$router.push('/customer/home')
									} else  {
										this.bool=true;
									}
								}
							})

					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	.regist {
		width: 100%;
		height: 100vh;
		background: #eee;
		/*padding: 10% 0;*/
	}
	
	.regist h1 {
		width: 100%;
		height: 90px;
		line-height: 90px;
		text-align: left;
		padding: 0 10%;
		color: lightcoral;
		font-style: italic;
	}
	
	.regist p {
		width: 100%;
		height: 50px;
		font-size: 23px;
		font-weight: 500;
	}
	
	.regist p span {
		padding: 10px;
	}
	
	.router-link-exact-active {
		color: lightcoral;
		border-bottom: solid 1px lightcoral;
	}
	
	a {
		text-decoration: none;
	}
	
	.el-form {
		width: 300px;
		height: 80%;
		margin: 0 auto;
		background: white;
		padding: 5%;
	}
	
	.el-form-item {
		text-align: center;
		padding: 0;
	}
	
	.el-button {
		width: 100%;
	}
</style>