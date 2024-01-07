<template>
  <section class="store-products-section">
    <div
      v-for="(product, index) in productData"
      :key="index"
      class="product-container"
    >
      <div class="product-image-container">
        <img :src="product.product_img" alt="Product Image" />
      </div>

      <div class="product-data-container">
        <h5 class="product-name">{{ product.product_name }}</h5>
        <p class="product-description">{{ product.product_description }}</p>
        <p class="product-price">{{ product.product_price }} EUR</p>
      </div>

      <div class="product-info-container">
        <p class="product-stock-amount">
          Stock amount: <span>{{ product.product_stock_amount }}</span>
        </p>
        <select
          class="product-select-amount"
          name="select-amount"
          id="select-amount"
          :disabled="product.product_stock_amount == 0"
        >
          <option value="0">0</option>
          <option v-for="n in product.product_stock_amount" :key="n" :value="n">
            {{ n }}
          </option>
        </select>
        <button
          :disabled="product.product_stock_amount == 0"
          class="btn-add-to-card"
        >
          Add to Shopping Card
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StoreProducts",
  props: {
    productData: Object,
  },
};
</script>
