<template>
  <div class="shopping-card-container">
    <div class="delivery-container">
      <h5>Enter Delivery address here:</h5>
      <label for="firstname">Firstname:</label>
      <input name="firstname" type="text" />
      <label for="lastname">Lastname:</label>
      <input name="lastname" type="text" />
      <label for="street">Street:</label>
      <input name="street" type="text" />
      <label for="housenumber">Housenumber:</label>
      <input name="housenumber" type="text" />
      <label for="areacode">Area Code:</label>
      <input name="areacode" type="text" />
      <label for="state">State:</label>
      <input name="state" type="text" />
    </div>
    <div class="payment-container">
      <label for="banktransfer">Bank Transfer</label>
      <input id="banktransfer" type="radio" name="payment" />
      <label for="paypal">Paypal</label>
      <input id="paypal" type="radio" name="payment" />
      <label for="creditcard">Credit Card</label>
      <input id="creditcard" type="radio" name="payment" />
    </div>
  </div>

  <div class="selected-products-container">
    <p>Selected Products will appear here!</p>
    <p>dummy product PLACEHOLDER</p>
    <p>dummy product PLACEHOLDER</p>
    <p>dummy product PLACEHOLDER</p>
    <p>TOTAL PRICE</p>
    <button class="btn-order">ORDER NOW</button>
  </div>
</template>

<script>
export default {
  name: "ShoppingCard",
};
</script>
