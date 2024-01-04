<template>
  <div class="navbar-wrapper">
    <nav class="navbar-main">
      <div class="navbar-main-logo">
        <img src="https://dummyimage.com/200x50/000/fff" alt="" />
      </div>
      <div class="navbar-main-container">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">PRODCUTS</a></li>
          <li><a href="#">CURRENT SALES</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </div>
      <div class="navbar-secondary-container">
        <ul>
          <li>
            <button>Shopping Card <span>0</span></button>
          </li>
          <li><button>SIGN UP</button></li>
          <li><button>LOGIN</button></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarMain",
};
</script>
