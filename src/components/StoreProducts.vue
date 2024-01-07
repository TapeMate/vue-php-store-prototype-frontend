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
        <p class="product-price">{{ product.product_price }},- EUR</p>
      </div>

      <div class="product-info-container">
        <p v-if="product.product_stock_amount == 0" class="amount-header-oos">
          OUT OF STOCK
        </p>
        <p v-else class="amount-header">SELECT AMOUNT</p>
        <p class="product-stock-amount">
          <span v-if="product.product_stock_amount == 0" class="out-of-stock"
            >OUT OF STOCK</span
          >
          <span v-else class="stock-amount">IN STOCK: </span>

          <span
            v-if="
              product.product_stock_amount > 0 &&
              product.product_stock_amount <= 4
            "
            class="low-stock"
            >{{ product.product_stock_amount }}</span
          >
          <span
            v-else-if="product.product_stock_amount > 4"
            class="good-stock"
            >{{ product.product_stock_amount }}</span
          >
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
