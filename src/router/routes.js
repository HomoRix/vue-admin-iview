import Home from '@/components/layout/Home'
import Index from '@/components/views/Index'

const Chart = () => import('@/components/views/Chart')
const NotFound = () => import('@/components/pages/NotFound')
const Register = () => import('@/components/pages/Register')
const E404 = () => import('@/components/pages/E404')
const Icon = () => import('@/components/pages/Icon')
const Login = () => import('@/components/pages/Login')
const Table = () => import('@/components/views/Table')
const UserInfo = () => import('@/components/views/UserInfo')
const UserList = () => import('@/components/views/UserList')
const List = () => import('@/components/views/List')
const Filter = () => import('@/components/pages/Filter')
const Lock = () => import('@/components/layout/base/Lock')

const DappInfoList = () => import('@/components/views/DappInfoList')
const CategoryList = () => import('@/components/views/CategoryList')
const TagList = () => import('@/components/views/TagList')
const DappUpdateApplicationList = () => import('@/components/views/DappUpdateApplicationList')
const DappPromotedApplicationList = () => import('@/components/views/DappPromotedApplicationList')
const SubscriberList = () => import('@/components/views/SubscriberList')
const SuggestionSubmitList = () => import('@/components/views/SuggestionSubmitList')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // redirect: '/index',
    redirect: '/dappInfoList',
    children: [
      {
        path: '/dappInfoList',
        name: 'DAPP列表', // 'dappInfoList',
        component: DappInfoList,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/categoryList',
        name: '分类', // 'categoryList',
        component: CategoryList,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/tagList',
        name: '标签', // 'tagList',
        component: TagList,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/dappUpdateApplicationList',
        name: 'DAPP更新申请', // 'dappUpdateApplicationList',
        component: DappUpdateApplicationList,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/dappPromotedApplicationList',
        name: 'DAPP推广申请', // 'dappPromotedApplicationList',
        component: DappPromotedApplicationList,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/subscriberList',
        name: '邮件订阅', // 'subscriberList',
        component: SubscriberList,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/suggestionSubmitList',
        name: 'DAPP修改申请', // 'suggestionSubmitList',
        component: SuggestionSubmitList,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/index',
        name: 'index',
        component: Index,
        icon: 'icon-wujiaoxing',
        level: 1,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/chart',
        name: 'chart',
        component: Chart,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/list',
        name: 'list',
        component: List,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/userInfo',
        name: 'userInfo',
        component: UserInfo,
        icon: 'icon-addpeople_fill',
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/userList',
        name: 'userList',
        component: UserList,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/table',
        name: 'table',
        component: Table,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/icon',
        name: 'icon',
        component: Icon,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/filter',
        name: 'filter',
        component: Filter,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/notFound',
        name: 'notFound',
        component: NotFound,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/error404',
    name: 'error404',
    component: E404
  },
  {
    path: '/lock',
    name: 'lock',
    component: Lock
  },
  {
    path: '*',
    redirect: '/notFound'
  }

]

export default routes
