<template>
  <div class="shopping-card-container">
    <div class="upper-container">
      <div class="delivery-container">
        <h5>Enter Delivery address here:</h5>
        <div class="input-container">
          <label for="firstname">Firstname:</label>
          <input name="firstname" type="text" />
        </div>
        <div class="input-container">
          <label for="lastname">Lastname:</label>
          <input name="lastname" type="text" />
        </div>
        <div class="input-container">
          <label for="street">Street:</label>
          <input name="street" type="text" />
        </div>
        <div class="input-container">
          <label for="housenumber">Housenumber:</label>
          <input name="housenumber" type="text" />
        </div>
        <div class="input-container">
          <label for="areacode">Area Code:</label>
          <input name="areacode" type="text" />
        </div>
        <div class="input-container">
          <label for="state">State:</label> <input name="state" type="text" />
        </div>
      </div>
      <div class="payment-container">
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
      </div>
    </div>

    <div class="lower-container">
      <div class="selected-products-container">
        <h3>Selected Products will appear here!</h3>
        <p>dummy product PLACEHOLDER</p>
        <p>dummy product PLACEHOLDER</p>
        <p>dummy product PLACEHOLDER</p>
        <p>TOTAL PRICE</p>
        <button class="btn-order" type="submit">ORDER NOW</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCard",
};
</script>
