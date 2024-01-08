<template>
  <div class="delivery-container">
    <h5>DELIVERY ADDRESS</h5>
    <div class="input-container">
      <label for="firstname">Firstname:</label>
      <input
        name="firstname"
        type="text"
        :value="addressData[0].firstname"
        disabled
      />
    </div>
    <div class="input-container">
      <label for="lastname">Lastname:</label>
      <input
        name="lastname"
        type="text"
        :value="addressData[0].lastname"
        disabled
      />
    </div>
    <div class="input-container">
      <label for="street">Street:</label>
      <input
        name="street"
        type="text"
        :value="addressData[0].street"
        disabled
      />
    </div>
    <div class="input-container">
      <label for="housenumber">Housenumber:</label>
      <input
        name="housenumber"
        type="text"
        :value="addressData[0].houseNumber"
        disabled
      />
    </div>
    <div class="input-container">
      <label for="areacode">Area Code:</label>
      <input
        name="areacode"
        type="text"
        :value="addressData[0].areaCode"
        disabled
      />
    </div>
    <div class="input-container">
      <label for="state">State:</label>
      <input name="state" type="text" :value="addressData[0].state" disabled />
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderDelivery",
  props: {
    addressData: Array,
  },
};
</script>

<style></style>
