const { createApp, ref, computed , reactive } = Vue;

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

function removeFromCart(id) {

      const index = cart.value.indexOf(id);

      if (index > -1) {

        cart.value.splice(index, 1);

      }

    }
 
 

    return {
      cart,
      premium,
      cartItemCount,
      removeFromCart,
      updateCart
    };
  }
});

app.component('product-display', productDisplay);
app.component('product-details', productDetails);
app.component('review-form', reviewForm);
app.component('review-list', reviewList);
app.mount('#app');
