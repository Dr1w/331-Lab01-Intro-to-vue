const { createApp, ref } = Vue
 
createApp({

  setup() {

    const product = ref('Boots')

    const description = ref('This course is really hard.')

    return { product, description }

  }

}).mount('#app')

 