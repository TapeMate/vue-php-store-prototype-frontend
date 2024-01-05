<template>
  <section class="store-products-section">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="product-container"
    >
      <div class="product-image-container">
        <img :src="product.img" alt="img" />
      </div>

      <div class="product-data-container">
        <h5 class="product-name">{{ product.name }}</h5>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">{{ product.price }} EUR</p>
      </div>

      <div class="product-info-container">
        <p class="product-stock-amount">
          Stock amount: <span>{{ product.stockAmount }}</span>
        </p>
        <select
          class="product-select-amount"
          name="select-amount"
          id="select-amount"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button>Add to Shopping Card</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StoreProducts",
  props: {
    products: Array,
  },
};
</script>
