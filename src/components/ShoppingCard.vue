<template>
  <div v-if="getLoginMessage" class="login-success-message">
    <p class="success-message">
      Hi <span class="username">{{ getUser }}</span>
    </p>
    <p class="success-message">You have been logged in successful!</p>
  </div>
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
      <span
        class="username-intro"
        v-if="isloginSuccessful && getShoppingCart.length === 0"
        >Hello <span class="username">{{ getUser }}</span
        >. Currently there are no Products in your Shopping Cart.</span
      >

      <OrderDelivery
        v-if="isloginSuccessful && getShoppingCart.length > 0"
        :addressData="dummyAddressData"
      />
      <OrderPayment v-if="isloginSuccessful && getShoppingCart.length > 0" />
      <LoginForm v-if="!isloginSuccessful" />

      <div v-if="getShoppingCart.length > 0" class="checkout-warning">
        <p v-if="!isloginSuccessful" class="error">
          Please login to your account to checkout your order!
        </p>
        <p v-if="isloginSuccessful && !isOrderEnabled" class="error">
          Please select delivery and payment method to proceed
        </p>
      </div>
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
            <div class="price-container">
              <span class="product-price-unit"
                ><span>UNIT</span>{{ item.product_price }},- EUR</span
              >
              <span class="product-price-total"
                ><span>TOTAL</span
                >{{
                  calcTotalProductPrice(
                    item.product_price,
                    item.product_order_amount
                  )
                }},- EUR</span
              >
            </div>
          </div>
        </div>

        <div v-if="getShoppingCart.length > 0" class="checkout-container">
          <button
            :disabled="!isOrderEnabled"
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
      isOrderEnabled: false,

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

  mounted() {
    this.enableOrder();
    // console.log(this.isOrderEnabled);
  },

  computed: {
    ...mapGetters([
      "getShoppingCart",
      "isloginSuccessful",
      "getPaymentMethod",
      "getDeliveryMethod",
      "getUser",
      "getLoginMessage",
    ]),
  },
  methods: {
    ...mapMutations([
      "removeFromCart",
      "unsetCart",
      "updateCartAmount",
      "updatePaymentMethod",
      "unsetPaymentMethod",
      "unsetDeliveryMethod",
      "updateDeliveryMethod",
    ]),

    enableOrder() {
      // console.log(this.getDeliveryMethod);
      // console.log(this.getPaymentMethod);

      if (
        this.getDeliveryMethod !== "null" &&
        this.getPaymentMethod !== "null"
      ) {
        // console.log("success.");
        this.isOrderEnabled = true;
      } else {
        this.isOrderEnabled = false;
      }
    },

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
      this.unsetCart();
      this.unsetDeliveryMethod();
      this.unsetPaymentMethod();
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

  watch: {
    getDeliveryMethod() {
      this.enableOrder();
    },
    getPaymentMethod() {
      this.enableOrder();
    },
  },
};
</script>
