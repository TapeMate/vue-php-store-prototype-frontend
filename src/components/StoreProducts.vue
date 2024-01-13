<template>
  <h2>GET PROFESSIONAL GEAR</h2>
  <section class="store-products-section">
    <img :src="img" alt="Background" />
    <div
      v-for="(product, index) in productData.product"
      :key="index"
      class="product-container"
    >
      <div class="product-image-container">
        <img :src="product.product_img" alt="Product Image" />
      </div>

      <div class="product-data-container">
        <h5 class="product-name">
          {{ product.product_name }}
        </h5>
        <p class="product-description">{{ product.product_description }}</p>
        <p class="product-price">{{ product.product_price }},- EUR</p>
      </div>

      <div class="product-info-container">
        <span
          v-if="isProductOnWishList(this.productData.product[index]) === true"
          class="on-cart-amount"
          >ON WISH LIST</span
        >
        <span
          v-if="product.product_stock_amount - setAmountAvailable(product) > 0"
          class="on-cart-amount"
          >IN CART
          <span class="amount">{{
            product.product_stock_amount - setAmountAvailable(product)
          }}</span></span
        >
        <p v-if="product.product_stock_amount == 0" class="amount-header-oos">
          OUT OF STOCK
        </p>
        <p v-else class="amount-header">SELECT AMOUNT</p>
        <p class="product-stock-amount">
          <span v-if="product.product_stock_amount == 0" class="out-of-stock"
            >OUT OF STOCK</span
          >
          <span
            v-if="
              product.product_stock_amount >= 1 &&
              product.product_stock_amount < 10
            "
            class="stock-amount"
            >LOW STOCK:</span
          >
          <span
            v-else-if="product.product_stock_amount >= 10"
            class="stock-amount"
            >IN STOCK:
          </span>

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
        <div class="select-container">
          <select
            class="product-select-amount"
            name="select-amount"
            id="select-amount"
            :disabled="
              product.product_stock_amount == 0 ||
              setAmountAvailable(product) === 0
            "
            v-model="selectedAmount[product.product_id]"
          >
            <option
              v-for="n in setAmountAvailable(product)"
              :key="n"
              :value="n"
            >
              {{ n }}
            </option>
          </select>
        </div>

        <button
          v-if="product.product_stock_amount > 0"
          @click="
            onClickAddToCart(
              this.productData.product[index],
              selectedAmount[product.product_id]
            )
          "
          :disabled="
            product.product_stock_amount == 0 ||
            !selectedAmount[product.product_id] > 0
          "
          class="btn-add-to-card"
        >
          <i class="fa-solid fa-cart-shopping"></i>Add to Shopping Card
        </button>
        <button
          v-if="product.product_stock_amount === 0"
          @click="onClickAddToWishList(this.productData.product[index])"
          class="btn-add-to-wish"
          :disabled="
            isProductOnWishList(this.productData.product[index]) ||
            getUserId === 'null'
          "
        >
          <i class="fa-solid fa-heart"></i>Add to Wish List
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import background from "../assets/img/background2.jpg";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "StoreProducts",
  props: {
    productData: Object,
  },
  data() {
    return {
      img: background,
      checkAmount: null,
      selectedAmount: {},
    };
  },

  computed: {
    ...mapGetters(["getWishList", "getShoppingCart", "getUserId"]),
  },

  methods: {
    ...mapMutations(["addToCart"]),
    ...mapActions(["addWishListItem"]),

    onClickAddToCart(product, amount) {
      console.log(product, amount);
      const modifiedProduct = this.setProductData(product, amount);
      this.addToCart(modifiedProduct);
      // this.reload();
    },

    async onClickAddToWishList(product) {
      const payload = { product: product, userId: this.getUserId };
      try {
        const response = await this.addWishListItem(payload);
        if (response && response.success) {
          this.triggerAnimation();
          this.reloadDelayed();
        } else {
          console.error("Item was not added to the wish list!");
        }
      } catch (error) {
        console.error("Error adding item to wishlist:", error);
      }
    },

    setProductData(product, amount) {
      const newProductData = { ...product };
      newProductData.product_order_amount = amount;
      return newProductData;
    },

    setAmountAvailable(product) {
      let availableAmount = product.product_stock_amount;

      this.getShoppingCart.forEach((el) => {
        if (el.product_id === product.product_id) {
          return (availableAmount =
            product.product_stock_amount - el.product_order_amount);
        }
      });
      return availableAmount;
    },

    isProductOnWishList(product) {
      let result = false;

      this.getWishList.forEach((el) => {
        if (el.product_id === product.product_id) {
          return (result = true);
        }
      });
      return result;
    },

    triggerAnimation() {
      document
        .querySelector("#navbar-wishlist-icon")
        .classList.add("navbar-wishlist-icon-animate");
    },

    reload() {
      window.location.reload();
    },

    reloadDelayed() {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
  },
};
</script>
