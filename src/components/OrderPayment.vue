<template>
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
</template>

<script>
export default {
  name: "OrderPayment",
};
</script>

<style></style>
