const productDisplay = {
    template:
    `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="image" :class="{ 'out-of-stock-image': !inStock }" alt="Product Image">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <p>Shipping: {{shipping}}</p>
                <p v-if="onSale && inStock">On Sale! {{ brand }} {{ product }} is on sale</p>
                <product-details :details="details"></product-details>
                <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{ backgroundColor: variant.color }"></div>
                <button class="button" :disabled="!inStock" @click="addToCart" :class="{ disabledButton: !inStock }">Add To Cart</button>
                <button class="button" @click="toggleInStock">Toggle In Stock</button>
                <button class="button" @click="removeFromCart">Remove From Cart</button>
                <p>Sizes: <span v-for="(size, index) in sizes" :key="index">{{ size }}<span v-if="index < sizes.length - 1">, </span></span></p>
            </div>
            <review-form @review-submitted="addReview"></review-form>
        </div>
    </div>
    `,
    props: {
        premium: Boolean
    },
    setup(props, { emit }) {
    const shipping = computed(() =>{
      if(props.premium){
          return 'Free'
      } else {
          return 30
      }
  })
        const product = ref('Boots');
        const brand = ref('SE 331');
        const description = ref('Boots is a cosmetics shop');
        const productName = ref('http://www.camt.cmu.ac.th');
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
        const sizes = ref(['S', 'M', 'L']);
        const selectedVariant = ref(0);
        const cart = ref(0);

        const reviews = ref([]);

        const image = computed(() => {
            return variants.value[selectedVariant.value].image;
        });

        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity > 0;
        });

        const title = computed(() => {
            return brand.value + ' ' + product.value;
        });

        function updateVariant(index) {
            selectedVariant.value = index;
        }

        function addToCart() {
            emit('add-to-cart' , variants.value[selectedVariant.value].id);
        }

        function removeFromCart() {

            emit('remove-from-cart', variants.value[selectedVariant.value].id);

    }
 

        function toggleInStock() {
            variants.value[selectedVariant.value].quantity = !variants.value[selectedVariant.value].quantity;
            onSale.value = variants.value[selectedVariant.value].quantity > 0;
        }

        function addReview(review){
            reviews.value.push(review);
            console.log('Review added:', review); // 添加这行来记录日志
        }

        return {
            product,
            title,
            brand,
            description,
            productName,
            inventory,
            onSale,
            details,
            variants,
            selectedVariant,
            cart,
            image,
            inStock,
            sizes,
            shipping,
            reviews,
            updateVariant,
            addToCart,
            removeFromCart,
            toggleInStock,
            addReview
        };
    }
};
