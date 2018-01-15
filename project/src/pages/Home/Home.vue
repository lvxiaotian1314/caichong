<template>
  <div class="Home">
      <header-search></header-search>
      <div class="main">
        <div class="swiper">
          <mt-swipe :auto="4000">
            <mt-swipe-item>
              <img src="./images/bannar1.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="./images/bannar2.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="./images/bannar3.jpeg" alt="">
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      
      
  </div>
</template>
<script>
import HeaderSearch from "@/components/Header/Header-search/Header-search";
export default {
  components: {
    HeaderSearch
  }
};
</script>
<style lang="less" scoped>
.swiper {
  height: 4.933333rem;
  img {
    width: 100%;
  }
}
</style>

