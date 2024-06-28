// main.js
const { createApp, ref } = Vue;

createApp({
  setup() {
    const product = ref('Boots');
    const image = ref('./assets/images/socks_green.jpg');
    const productLink = ref('https://www.camt.cmu.ac.th');
    const inStock = ref(true);
    const inventory = ref(100);
    const onSale = ref(true);
    const details = ref([
      '50% cotton',
      '30% wool',
      '20% polyester'
    ]);
    const variants = ref([
      { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
      { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
    ]);
    const sizes = ref(['S', 'M', 'L']);
    
    const cart = ref(0);
    function addToCart() {
      cart.value += 1;
    }
    function updateImage(variantImage) {
      image.value = variantImage;
    }
    function toggleInStock() {
      inStock.value = !inStock.value;
      if (!inStock.value) {
        inventory.value = 0; // 将库存设为0以显示“Out of Stock”
      } else {
        inventory.value = 100; // 重置库存
      }
    }

    return {
      product,
      image,
      productLink,
      inStock,
      inventory,
      onSale,
      details,
      variants,
      sizes,
      cart,
      addToCart,
      updateImage,
      toggleInStock
    };
  }
}).mount('#app');
