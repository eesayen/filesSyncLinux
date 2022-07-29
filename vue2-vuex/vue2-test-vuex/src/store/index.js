import Vuex from "vuex";
import Vue from "vue";
import persistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },

  //state中的数据只能有mutation中的方法去更改，而mutation中只是提前声明一些方式更改state中某个数据， 是通过store的commit函数执行mutation中的声明
  //mutation中不能存在异步操作->异步操作是在回调中，多个回调无法控制时机， 防止出现脏数据，所以又出现了了一个action配置对象（由store的dispatch函数触发），里面传入函数配置，可以异步然后调用mutation中的方法

  mutations: {
    increment(state, val = false) {
      if (typeof val === "number") {
        state.count += val;
      } else {
        state.count++;
      }
    },
    empty(state) {
      /*eslint-disable*/
      state.count = undefined;
    },
  },

  plugins: [
    persistedState({
      //默认使用localStorage来固化数据，也可使用sessionStorage，配置一样
      storage: window.localStorage,
      reducer(val) {
        return {
          // 只储存state中的值
          count: val.count,
        };
      },
    }),
  ],
});
