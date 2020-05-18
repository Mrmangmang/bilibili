import Vue from "vue";
import VueRouter from "vue-router";
import register  from "../views/register";
import Login from "../views/Login";
import Userinfo from "../views/Userinfo";

Vue.use(VueRouter);

const routes = [
  {
    path:'/register',
    component:register
  },
  {
    path:'/login',
    component: Login
  },
  {
    path:'/userinfo',
    component: Userinfo
  }
];

const router = new VueRouter({
  routes
});

export default router;
