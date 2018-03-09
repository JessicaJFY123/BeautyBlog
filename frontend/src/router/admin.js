//定义组件
import Admin from '@/components/admin/admin';
import Classify from '@/components/admin/classify'
import Article from '@/components/admin/article'
import CreateArticle from '@/components/admin/createArticle'
import DetialArticle from '@/components/admin/detialArticle'
import ModArticle from '@/components/admin/modArticle'
import Regist from '@/components/admin/regist'
import Login from '@/components/admin/login'

export default [{
		path: '/admin',
		name: 'Admin',
		component: Admin,
		children: [{
				path: '/admin/classify',
				component: Classify
			},
			{
				path: '/admin/article',
				component: Article
			},
			{
				path: '/admin/createArticle',
				component: CreateArticle
			},
			{
				path: '/admin/detialArticle',
				component: DetialArticle
			},
			{
				path: '/admin/modArticle',
				component: ModArticle
			}
		],
	},
	{
		path: '/regist',
		component: Regist
	},
	{
		path: '/login',
		component: Login
	}

]