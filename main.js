const { createApp, ref, computed } = Vue;

const app = createApp({
  setup() {
    const cart = ref([]);
    const premium = ref(false);//9.9

    function updateCart(id) {
      cart.value.push(id);
    }

const cartItemCount = computed(() => {
      const itemCount = {};
      cart.value.forEach(id => {
        if (!itemCount[id]) {
          itemCount[id] = 1;
        } else {
          itemCount[id]++;
        }
      });
      return itemCount;
    });
 

    return {
      cart,
      premium,
      cartItemCount,
      updateCart
    };
  }
});

app.component('product-display', productDisplay);
app.component('product-details', productDetails);
app.mount('#app');
