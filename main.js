const { createApp, ref, computed } = Vue;

const app = createApp({
  setup() {
    const cart = ref([]);
    const premium = ref(false);//9.9

    function updateCart(id) {
      cart.value.push(id);
    }

    return {
      cart,
      premium,
      updateCart
    };
  }
});

app.component('product-display', productDisplay);
app.component('product-details', productDetails);
app.mount('#app');
