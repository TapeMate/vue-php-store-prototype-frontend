<template>
  <div class="payment-delivery-container">
    <h5>PAYMENT METHOD</h5>
    <div class="input-container">
      <input
        @change="setPaymentMethod"
        id="banktransfer"
        type="radio"
        name="payment"
      />
      <label for="banktransfer">Bank Transfer</label>
    </div>
    <div class="input-container">
      <input
        @change="setPaymentMethod"
        id="paypal"
        type="radio"
        name="payment"
      />
      <label for="paypal">Paypal</label>
    </div>
    <div class="input-container">
      <input
        @change="setPaymentMethod"
        id="creditcard"
        type="radio"
        name="payment"
      />
      <label for="creditcard">Credit Card</label>
    </div>

    <h5>DELIVERY TYPE</h5>
    <div class="input-container">
      <input
        @change="setDeliveryMethod"
        id="standard"
        type="radio"
        name="delivery"
      />
      <label for="standard">Standard Shipping</label>
    </div>
    <div class="input-container">
      <input
        @change="setDeliveryMethod"
        id="express"
        type="radio"
        name="delivery"
      />
      <label for="express">Express Shipping</label>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "OrderPayment",
  methods: {
    ...mapMutations(["updatePaymentMethod", "updateDeliveryMethod"]),

    setPaymentMethod(e) {
      if (e.target.value === "on") {
        this.updatePaymentMethod(e.target.id);
      } else {
        return;
      }
    },

    setDeliveryMethod(e) {
      if (e.target.value === "on") {
        this.updateDeliveryMethod(e.target.id);
      } else {
        return;
      }
    },
  },
};
</script>

<style></style>
