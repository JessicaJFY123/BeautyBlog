//定义组件
//import HelloWorld from '@/components/customer/HelloWorld'
import customer from '@/components/customer/customer'
import Home from '@/components/customer/home'
import Classify from '@/components/customer/classify'
import About from '@/components/customer/about'
import Detial from '@/components/customer/detial'

export default [
	 {
      path: '/customer',
      component:customer ,
      children:[
      	{
      		path: '/customer/home',
     		component: Home
      	},
      	{
      		path: '/customer/classify',
     		component: Classify
      	},
      	{
      		path: '/customer/about',
     		component: About
      	},
      	{
      		path: '/customer/detial',
     		component: Detial

      	}
      ]
    }

]
