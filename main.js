const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const product = ref('Boots');
    const brand = ref('SE 331');
    const inventory = ref(100);
    const onSale = ref(true);
    const details = ref([
      '50% cotton',
      '30% wool',
      '20% polyester'
    ]);
    const variants = ref([
      { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
      { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
    ]);
    const selectedVariant = ref(0);
    const sizes = ref(['S', 'M', 'L']);
    const cart = ref(0);

    function addToCart() {
      cart.value += 1;
    }
    function updateVariant(index) {
      selectedVariant.value = index;
    }

    const title = computed(() => {
      return brand.value + ' ' + product.value;
    });

    const currentImage = computed(() => {
      return variants.value[selectedVariant.value].image;
    });

    const currentInStock = computed(() => {
      return variants.value[selectedVariant.value].quantity > 0;
    });

    const saleMessage = computed(() => { // 8.5
      return onSale.value ? brand.value + ' ' + product.value + ' is on sale' : '';
    });

    return {
      product,
      brand,
      title,
      image: currentImage,
      inStock: currentInStock,
      inventory,
      onSale,
      saleMessage, // 8.5
      details,
      variants,
      selectedVariant,
      sizes,
      cart,
      addToCart,
      updateVariant
    };
  }
}).mount('#app');
