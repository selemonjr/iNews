<template>
<nav>
  <div class="NewsLogo">
    <h1 class="NewsTitle"><span class="NewsRed">i</span>News</h1>
  </div>
  <div class="NewsLink">
    <ul v-show="!mobile" class="navbarLinks">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/business">Business</router-link></li>
        <li><router-link to="/technology">Tech</router-link></li>
          <li><router-link to="/entertainment">Entertainment</router-link></li>
            <li><router-link to="/sports">Sports</router-link></li>
            <li><a href="https://github.com/selemonjr" target="_blank"><i class="fab fa-github"></i></a></li>
    </ul>
  </div>
      <div v-show="mobile" class="barButton" @click="toggle" :class="{'bar-rotate':mobileNav}">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    <transition name="mobileNav">
      <ul v-show="mobileNav" class="sidebar">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/business">Business</router-link></li>
        <li><router-link to="/technology">Tech</router-link></li>
          <li><router-link to="/entertainment">Entertainment</router-link></li>
            <li><router-link to="/sports">Sports</router-link></li>
              <li><a href="https://github.com/selemonjr" target="_blank"><i class="fab fa-github"></i></a></li>
            </ul>
    </transition>
</nav>
</template>
<script>
export default {
  name:"Navbar",
   data() {
    return {
      mobileNav:null,
      mobile:false,
      windowWidth:null,
    }
  },
  created() {
    window.addEventListener("resize",this.checkScreen);
    return this.checkScreen();
  },
  methods: {
    toggle() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 768) {
        return this.mobile = true;
      } else {
        this.mobile = false;
        this.mobileNav = false;
      }
    }
  }
}
</script>
<style scoped>
nav {
  width:100%;
  height:10vh;
  background: #000;
  padding:1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.NewsTitle {
  color: #fff;
  font-size:30px;
}
.NewsRed{
  color: #ff0000;
}
.navbarLinks {
  display:inline-flex;
  list-style: none;
}
.navbarLinks li {
  margin: 10px;
}
.fab {
  color:#fff;
  font-size:20px;
}
.navbarLinks li a {
  text-decoration: none;
  font-size: 20px;
  color: #fff;
}
.navbarLinks li a.router-link-active{
  border-bottom: 3px solid #ff0000;
}
.bar1,.bar2,.bar3 {
    margin: 5px;
    width: 35px;
    z-index:10;
    height: 3px;
    background-color: red;
    transition: all 300ms cubic-bezier(.84,.06,.52,1.8);
}
.bar-rotate .bar1{
  transform: rotate(40deg) translate(10px,3px);
}
.bar-rotate .bar2 {
  opacity:0;
}
.bar-rotate .bar3{
  transform: rotate(-45deg) translate(9px,-2px);
}
.sidebar {
  height:100%;
  width:250px;
  top:0;
  right:0;
  z-index:-5%;
  position:fixed;
  background:#000;
  display:inline-block;
  padding-top:50px;
}
.barButton {
  z-index:20;
}
.sidebar li {
  list-style:none;
  padding: 10px;
  margin:10px;
}
.sidebar li a {
  text-decoration:none;
  color: #fff;
}
.sidebar li a.router-link-active{
  border-bottom: 3px solid #ff0000;
}
@media(max-width:896px) and (orientation:landscape) {
  nav {
    height:15vh;
  }
}
</style>