<template>
  <div v-if="isOrderPlaced === true" class="order-success-message">
    <div class="success-message">
      Thank you for your purchase!
      <br />
      <br />
      Your order has been successfully placed.
      <br />
      <br />
      <i class="fa-solid fa-truck"></i>
    </div>
  </div>
  <div class="shopping-card-container">
    <div class="upper-container">
      <OrderDelivery v-if="isloginSuccessful" :addressData="dummyAddressData" />
      <OrderPayment v-if="isloginSuccessful" />
      <LoginForm v-if="!isloginSuccessful" />
    </div>
    <div class="lower-container">
      <img :src="background" alt="" />
      <div class="selected-products-container">
        <h5>ORDER SUMMARY</h5>
        <div
          v-for="(item, index) in cartItems"
          :key="index"
          class="product-container"
        >
          <img
            class="product-image"
            :src="item.product_img"
            alt="Product Image"
          />
          <div class="info-container">
            <h5 class="product-name">{{ item.product_name }}</h5>
            <p class="product-description">{{ item.product_description }}</p>
            <p class="stock-amount">
              STOCK AMOUNT<span class="amount">{{
                item.product_stock_amount
              }}</span>
            </p>
          </div>
          <div class="ctrl-container">
            <button @click="removeItem(item.product_id)" class="btn-remove">
              REMOVE <i class="fa-solid fa-trash"></i>
            </button>
            <div class="product-amount">
              <span>AMOUNT:</span>
              <input
                @change="updateAmountOnChange(item)"
                type="text"
                class="order-amount"
                :id="'order-amount' + item.product_id"
                :value="item.product_order_amount"
              />
            </div>
            <span class="product-price-unit"
              >{{ item.product_price }},- EUR</span
            >
            <span class="product-price-total"
              >{{
                calcTotalProductPrice(
                  item.product_price,
                  item.product_order_amount
                )
              }},- EUR</span
            >
          </div>
        </div>
        <div v-if="getShoppingCart.length > 0" class="price-container">
          <button
            :disabled="!isloginSuccessful"
            @click="sendOrder"
            class="btn-order"
          >
            ORDER NOW
          </button>
          <span class="total">{{ calcTotalPrice() }},- <span>EUR</span></span>
        </div>
        <p v-if="getShoppingCart == 0" class="empty-cart">
          There are no items on your shopping cart.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import img from "@/assets/img/background3.jpg";
import { mapGetters, mapMutations } from "vuex";
import OrderDelivery from "@/components/OrderDelivery.vue";
import OrderPayment from "@/components/OrderPayment.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "ShoppingCard",
  components: {
    OrderDelivery,
    OrderPayment,
    LoginForm,
  },
  props: {
    cartItems: Array,
  },
  data() {
    return {
      isOrderPlaced: false,
      background: img,
      dummyAddressData: [
        {
          firstname: "Tony",
          lastname: "Example",
          street: "First Avenue West",
          houseNumber: "1234-E",
          areaCode: "0123456789",
          state: "Bavaria",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getShoppingCart", "isloginSuccessful"]),
  },
  methods: {
    ...mapMutations(["removeFromCart", "resetCart", "updateCartAmount"]),

    updateAmountOnChange(item) {
      const input = document.querySelector("#order-amount" + item.product_id);
      let newAmount = Number(input.value);
      if (newAmount > item.product_stock_amount) {
        input.value = item.product_stock_amount;
        newAmount = item.product_stock_amount;
      }
      const payload = { item: item, amount: newAmount };
      this.updateCartAmount(payload);
    },

    calcTotalProductPrice(price, amount) {
      const result = price * amount;
      return result;
    },

    calcTotalPrice() {
      const products = this.getShoppingCart;
      let total = 0;
      products.forEach((product) => {
        total = total + product.product_price * product.product_order_amount;
        return total;
      });
      return total;
    },

    removeItem(id) {
      this.removeFromCart(id);
      this.quickReload();
    },

    sendOrder() {
      this.isOrderPlaced = true;
      this.resetCart();
      this.reload();
    },

    reload() {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    },

    quickReload() {
      window.location.reload();
    },
  },
};
</script>
