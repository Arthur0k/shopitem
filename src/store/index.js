import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var car = JSON.parse(localStorage.getItem('car') || '[]');
const store = new Vuex.Store({
  state: {
    car: car,
  },
  getters: {
    sumCount(state) {
      let sum = 0;
      if (state.car) {
        state.car.forEach((item) => {
          let intcount = parseInt(item.count);
          sum += intcount;
        });
      }
      return sum;
    },
    getGoodsCount(state) {
      let c = {};
      state.car.forEach((i) => {
        c[i.id] = i.count;
      });
      return c;
    },
    getGoodsSelected(state) {
      let o = {};
      state.car.forEach((item) => {
        o[item.id] = item.selected;
      });
      return o;
    },
    getTotalAmountAndPrice(state) {
      // let o = {
      //   selected: 0,
      //   totalPrice: 0,
      // }
      let selected = 0;
      let totalPrice = 0;
      state.car.forEach((item) => {
        if (item.selected) {
          selected += item.count;
          totalPrice += item.count * item.price;
        }
      });
      return {selected, totalPrice};
    },
  },
  mutations: {
    addToCart(state, goodsInfo) {
      let flag = false;
      state.car.some((item) => {
        if (item.id == goodsInfo.id) {
          item.count += parseInt(goodsInfo.count);
          flag = true;
          return;
        }
      });
      if (!flag) {
        state.car.push(goodsInfo);
        console.log(`push---state.car--${state.car}`);
      }
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    updateGoodsCount(state, goodsInfo) {
      state.car.some((item) => {
        if (item.id == goodsInfo.id) {
          item.count = parseInt(goodsInfo.count);
          console.log('update');
        }
      });
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    removeCartList(state, id) {
      state.car.some((item, i) => {
        if (item.id == id) {
          state.car.splice(i, 1);
        }
      });
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    updateCartSelected(state, goodsInfo) {
      state.car.forEach((item) => {
        if (item.id == goodsInfo.id) {
          item.selected = goodsInfo.selected;
        }
      });
      localStorage.setItem('car', JSON.stringify(state.car));
    },
  },
});

export default store;
