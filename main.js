const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const product = ref('Boots');
    const brand = ref('SE 331');
    const productLink = ref('https://www.camt.cmu.ac.th');
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
    const sizes = ref(['S', 'M', 'L']);
    const selectedVariant = ref(0);
    const cart = ref(0);

    function updateVariant(index) {
      selectedVariant.value = index;
    }

    function toggleInStock() {
      variants.value[selectedVariant.value].quantity = !variants.value[selectedVariant.value].quantity;

      // Update onSale based on new quantity
      onSale.value = variants.value[selectedVariant.value].quantity > 0;
    }

    const title = computed(() => {
      return brand.value + ' ' + product.value;
    });

    const image = computed(() => {
      return variants.value[selectedVariant.value].image;
    });

    const inStock = computed(() => {
      return variants.value[selectedVariant.value].quantity > 0;
    });

    return {
      product,
      title,
      brand,
      image,
      productLink,
      onSale,
      details,
      variants,
      sizes,
      cart,
      updateVariant,
      toggleInStock,
      inStock
    };
  }
}).mount('#app');
