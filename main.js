import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/global.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import { Link, Message, Container, Header, Aside, Main, Button, Menu, Col, Submenu, MenuItem, MenuItemGroup, Row, Divider, Card, Table, TableColumn, Switch, Pagination, PageHeader, Breadcrumb, BreadcrumbItem, Input, Form, FormItem, Option, Select, MessageBox, Dialog, Icon, RadioButton, RadioGroup, TabPane, Tabs, Badge } from 'element-ui'
import mavonEditor from 'mavon-editor'
import Highlight from 'highlight.js'
import 'mavon-editor/dist/css/index.css'
import 'highlight.js/styles/default.css'
import moment from 'moment'
Vue.filter('dateFormat', function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dateStr).format(pattern)
})
Vue.use(Highlight)
Vue.use(VueAxios, axios)
Vue.use(Link)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Button)
Vue.use(Menu)
Vue.use(Col)
Vue.use(Row)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Divider)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Pagination)
Vue.use(PageHeader)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Option)
Vue.use(Select)
Vue.use(Dialog)
Vue.use(Icon)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Badge)
Vue.use(mavonEditor)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.config.productionTip = false
axios.interceptors.request.use(config => {
  config.headers.Authorization = 'Bearer ' + window.sessionStorage.getItem('token')
  console.log(config.headers.Authorization)
  return config
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
