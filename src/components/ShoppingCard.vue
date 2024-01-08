<template>
  <div class="shopping-card-container">
    <div class="upper-container">
      <div class="delivery-container">
        <h5>Enter Delivery address here:</h5>
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
        <h5>Select Payment Method:</h5>
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
        <h5>Select Delivery Type:</h5>
        <div class="input-container">
          <input id="delivery-standard" type="radio" name="delivery" />
          <label for="delivery-standard">Bank Transfer</label>
        </div>
        <div class="input-container">
          <input id="delivery-express" type="radio" name="delivery" />
          <label for="delivery-express">Paypal</label>
        </div>
      </div>
    </div>

    <div class="lower-container">
      <div class="selected-products-container">
        <h3>Selected Products will appear here!</h3>
        <div
          v-for="(item, index) in cartItems"
          :key="index"
          class="product-container"
        >
          <img
            class="product-image"
            :src="item.product_image"
            alt="Product Image"
          />
          <div class="info-container">
            <h5 class="product-name">{{ item.product_name }}</h5>
            <p class="product-description">{{ item.product_description }}</p>
          </div>
          <div class="ctrl-container">
            <button class="btn-remove">
              REMOVE <i class="fa-solid fa-trash"></i>
            </button>
            <span class="product-amount"
              >AMOUNT:<span class="count">{{
                item.product_order_amount
              }}</span></span
            >
            <span class="product-price">{{ item.product_price }},- EUR</span>
          </div>
        </div>
        <p class="total-price">TOTAL PRICE</p>
        <button class="btn-order">ORDER NOW</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCard",
  props: {
    cartItems: Array,
  },
  data() {
    return {
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
};
</script>
