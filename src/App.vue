<template>
  <div id="app">
<!--    <h2>app</h2>-->
<!--    <router-link to="/">home</router-link>-->
<!--    <router-link to="/category">category</router-link>-->
<!--    <router-link to="/cart">cart</router-link>-->
<!--    <router-link to="/mine">mine</router-link>-->
   <router-view></router-view>
        <bar>
          <baritem path="/">
            <img slot="img1" src="./assets/baritem-img/home-n.jpg" alt="">
            <img slot="img2" src="./assets/baritem-img/home.jpg" alt="">
            <div slot="text">首页</div>
          </baritem>
          <baritem path="/category">
            <img slot="img1" src="./assets/baritem-img/cate-n.jpg" alt="">
            <img slot="img2" src="./assets/baritem-img/cate.jpg" alt="">
            <div slot="text">分类</div>
          </baritem>
          <baritem path="/cart">
            <img slot="img1" src="./assets/baritem-img/cart-n.jpg" alt="">
            <img slot="img2" src="./assets/baritem-img/cart.jpg" alt="">
            <div slot="text">购物车</div>
          </baritem>
          <baritem path="/mine">
            <img slot="img1" src="./assets/baritem-img/mine-n.jpg" alt="">
            <img slot="img2" src="./assets/baritem-img/mine.jpg" alt="">
            <div slot="text">我的</div>
          </baritem>
        </bar>

    <!--    <div @click="click()">button</div>-->
  </div>
</template>

<script>
import bar from "./components/bar"
import baritem from "./components/baritem"
export default {
name:"app",
components:{
  bar,baritem
}


}
</script>


<style>
body{
  margin: 0;
  padding: 0;

}
img {
  width:24px;
  height: 24px;

}

</style>
