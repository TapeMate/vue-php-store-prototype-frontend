<template>
  <div class="shopping-card-container">
    <div class="upper-container">
      <div class="delivery-container">
        <h5>DELIVERY ADDRESS</h5>
        <div class="input-container">
          <label for="firstname">Firstname:</label>
          <input
            name="firstname"
            type="text"
            v-model="dummyAddressData[0].firstname"
            disabled
          />
        </div>
        <div class="input-container">
          <label for="lastname">Lastname:</label>
          <input
            name="lastname"
            type="text"
            v-model="dummyAddressData[0].lastname"
            disabled
          />
        </div>
        <div class="input-container">
          <label for="street">Street:</label>
          <input
            name="street"
            type="text"
            v-model="dummyAddressData[0].street"
            disabled
          />
        </div>
        <div class="input-container">
          <label for="housenumber">Housenumber:</label>
          <input
            name="housenumber"
            type="text"
            v-model="dummyAddressData[0].houseNumber"
            disabled
          />
        </div>
        <div class="input-container">
          <label for="areacode">Area Code:</label>
          <input
            name="areacode"
            type="text"
            v-model="dummyAddressData[0].areaCode"
            disabled
          />
        </div>
        <div class="input-container">
          <label for="state">State:</label>
          <input
            name="state"
            type="text"
            v-model="dummyAddressData[0].state"
            disabled
          />
        </div>
      </div>
      <div class="payment-delivery-container">
        <h5>PAYMENT METHOD</h5>
        <div class="input-container">
          <input id="banktransfer" type="radio" name="payment" />
          <label for="banktransfer">Bank Transfer</label>
        </div>
        <div class="input-container">
          <input id="paypal" type="radio" name="payment" />
          <label for="paypal">Paypal</label>
        </div>
        <div class="input-container">
          <input id="creditcard" type="radio" name="payment" />
          <label for="creditcard">Credit Card</label>
        </div>

        <h5>DELIVERY TYPE</h5>
        <div class="input-container">
          <input id="delivery-standard" type="radio" name="delivery" />
          <label for="delivery-standard">Standard Shipping</label>
        </div>
        <div class="input-container">
          <input id="delivery-express" type="radio" name="delivery" />
          <label for="delivery-express">Express Shipping</label>
        </div>
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
          </div>
          <div class="ctrl-container">
            <button @click="removeItem(item.product_id)" class="btn-remove">
              REMOVE <i class="fa-solid fa-trash"></i>
            </button>
            <span class="product-amount"
              >AMOUNT:<span class="count">{{
                item.product_order_amount
              }}</span></span
            >
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
          <button class="btn-order">Order now!</button>
          <span class="total">{{ calcTotalPrice() }},- EUR</span>
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

export default {
  name: "ShoppingCard",
  props: {
    cartItems: Array,
  },
  data() {
    return {
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
    ...mapGetters(["getShoppingCart"]),
  },
  methods: {
    ...mapMutations(["removeFromCart"]),

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
      console.log(id);
      this.removeFromCart(id);
      console.log("remove item.");
    },
  },
};
</script>
