const { createApp, ref } = Vue;

createApp({
  setup() {
    const product = ref('Boots');
    const image = ref('./assets/images/socks_green.jpg');
    const productLink = ref('https://www.camt.cmu.ac.th');
    const inStock = ref(true);
    const inventory = ref(5);
    const onSale = ref(true);

    return { product, image, productLink, inStock, inventory, onSale };
  }
}).mount('#app');
