import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { id: '1', name: "Product 1", price: 200 },
      { id: '2', name: "Product 2", price: 299 },
      { id: '3', name: "Product 3", price: 500 },
      { id: '4', name: "Product 4", price: 100 },
      { id: '5', name: "Product 5", price: 2020 },
      { id: '6', name: "Product 6", price: 200 },
      { id: '7', name: "Product 7", price: 260 },
      { id: '8', name: "Product 8", price: 200 },
      { id: '9', name: "Product 9", price: 290 },
      { id: '10', name: "Product 10", price: 200 },
      { id: '11', name: "Product 11", price: 899 },
      { id: '12', name: "Product 12", price: 200 },
      { id: '13', name: "Product 13", price: 99 },
      { id: '14', name: "Product 14", price: 2500 },
      { id: '15', name: "Product 15", price: 699 },
    ],
    searchVal: '',
    product: null,
    comp: 'List'
  },
  getters: {
    products: state => state.products,
    product: state => state.product,
    taxedProducts: (state) => {
      let taxedProducts = state.products.map((product) => {
        return {
          id: product.id,
          name: product.name + " + tax",
          price: Math.round(product.price + product.price * 0.2),
        };
      });
      return taxedProducts;
    },
    filterdProducts: (state, getters) => {
      return getters.taxedProducts.filter(product => product.name.toLowerCase().match(state.searchVal.toLowerCase()))
    },
    comp: state => state.comp
  },
  mutations: {
    ADD: (state, amount) => {
      state.products.forEach((product) => {
        product.price += amount;
      });
    },
    // SUB_ASYNC: (state, amount) => {
    //   setTimeout(() => {
    //     state.products.forEach((product) => {
    //       product.price -= amount;
    //     });
    //   }, 3000);
    // },
    SUB: (state, amount) => {
      state.products.forEach((product) => {
        product.price -= amount;
      });
    },
    SEARCH: (state, val) => {
      state.searchVal = val;
    },
    SET_PRODUCT: (state, id) => {
      let prod = state.products.filter(p => p.id === id)[0]
      state.product = {
        ...prod,
        taxPrice: Math.round(prod.price + prod.price * 0.2)
      }
    },
    SET_COMP: (state, val) => {
      state.comp = val;
    }
  },
  actions: {
    // subAsync: (context, amount) => {
    //   setTimeout(() => {
    //     context.commit('SUB', amount)
    //   }, 4000);
    // },
    subAsync: ({ commit }, amount) => {
      setTimeout(() => {
        commit("SUB", amount);
      }, 4000);
    },
    addToPrice: ({commit}, amount) => {
      commit("ADD", amount)
    },
    search: ({ commit }, val) => {
      commit('SEARCH', val)
    },
    getProduct: ({ commit }, id) => {
      commit('SET_PRODUCT', id)
    },
    setComp: ({ commit }, val) => {
      commit('SET_COMP', val)
    }
  }
});
