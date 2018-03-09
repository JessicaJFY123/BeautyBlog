import vue from 'vue';
import Vuex from 'vuex';
vue.use(Vuex);
import axios from 'axios';

export default new Vuex.Store({
	state:{},
	mutations:{},
	actions:{
		//获取分类
		getClass(){
		 	return axios.get('http://localhost:3000/getclass')	
		},
		//添加分类
		addClass(store,params){
			return axios.post('http://localhost:3000/addclass',{classify:params.classify})
		},
		//删除分类
		delClass(store,params){
			return axios.get('http://localhost:3000/delclass?id='+params._id)	
		},
		//更新分类
		updateClass(store,params){
			return axios.get("http://localhost:3000/updateclass?id="+params.id+"&name="+params.name)
		},
		//发表文章
		publishClass(store,params){
			console.log(params)
			return axios.post("http://localhost:3000/publishclass",{
					articlename:params.articlename,
					articleclassify:params.articleclassify,
					articlecontent:params.articlecontent,
			})
		},
		//获取文章
		getArticle(){
			return axios.get('http://localhost:3000/getarticle')
		},
		//删除文章
		delArticle(store,params){
			return axios.get('http://localhost:3000/delarticle?id='+params._id)	
		},
		//更新文章
		updateArticle(store,params){
			//console.log(params)
			return axios.post("http://localhost:3000/updatearticle",{
				obj:params
			})
		},
		//查看文章
	    checkArticle(store,params){
	    	    console.log(params)
	    		return axios.post('http://localhost:3000/checkarticle',{
	    			articlename:params.articlename,
				articleclassify:params.articleclassify,
				articlecontent:params.articlecontent,
				author:params.author
	    		})
	    },
	    //添加发布
	    addComment(store,params){
	    		console.log(params)
	    		return axios.post('http://localhost:3000/addcomment',{
	    			content:params.content,
	    			articleid:params.articleid,
	    			author:params.author
	    		})
	    },
	    //获取发布的数据
	    getComment(store,params){
	    		console.log(params.articleid)
	    		return axios.get('http://localhost:3000/getcomment?articleid='+params.articleid)
	    },
	    //注册接口
	    Regist(store,params){
	    		return axios.post('http://localhost:3000/regist',{
	    			name:params.name,
	    			pass:params.pass
	    		})
	    },
	    //注册时判断用户名是否重复
	    Confirm(){
	    		 return axios.get('http://localhost:3000/confirm')
	    },
	},
	getters:{}
})
