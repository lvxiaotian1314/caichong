<template>
  <div class="Home">
      <header-search></header-search>
      <div class="main">
        <!--轮播图-->
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
        <!-----nav小图导航区---->
        <nav>
          <div>
            <div>
              <i>
                <img src="./images/nav-small1.png" alt="">
              </i>
            </div>
            <p>预约提货</p>
          </div>
           <div>
            <div>
              <i>
                <img src="./images/nav-small2.png" alt="">
              </i>
            </div>
            <p>限量秒杀</p>
          </div>
           <div>
            <div>
              <i>
                <img src="./images/nav-small3.png" alt="">
              </i>
            </div>
            <p>积分兑换</p>
          </div>
           <div>
            <div>
              <i>
                <img src="./images/nav-small4.png" alt="">
              </i>
            </div>
            <p>充值有礼</p>
          </div>
        </nav>
        <!------nav中图导航区-------------->
        <ul class="nav-mid">
          <li v-for="(item,index) in computedCategories" :key="item.id"><img :src="item.category_img" alt=""></li>
        </ul>
        <!-----------nav大图导航区---------------------->
        <ul class="nav-max">
            <li><img src="./images/nav-max1.jpeg" alt=""></li>
            <li><img src="./images/nav-max2.jpeg" alt=""></li>
            <li><img src="./images/nav-max3.jpeg" alt=""></li>
            <li><img src="./images/nav-max4.jpeg" alt=""></li>
            <li><img src="./images/nav-max5.jpeg" alt=""></li>
        </ul>
      </div>
      
  </div>
</template>
<script>
import HeaderSearch from "@/components/Header/Header-search/Header-search";
export default {
  components: {
    HeaderSearch
  },
  computed:{
      computedCategories(){
        console.info(this.$store.state.categories)
        return this.$store.state.categories;
      }
  }
};
</script>
<style lang="less" scoped>
//轮播图
.swiper {
  height: 4.933333rem;
  img {
    width: 100%;
  }
}
//小图导航
nav{
  height: 76px;
  display:flex;
  background:#fff;
  padding:10px 0;
  >div{
    flex:76px;
    i{
      display: block;
      width:40px;
      height: 40px;
      border-radius: 50%;
      margin:0 auto;
      line-height: 40px;
      text-align: center;
      >img{
        width:65%;
        vertical-align: middle;
      }
    }
    &:nth-of-type(1){
      i{
        background:rgb(210,151,255);
      }
    }
    &:nth-of-type(2){
      i{
        background:rgb(135,231,92);
        >img{
          width:75%;
        }
      }
    }
    &:nth-of-type(3){
      i{
        background:rgb(147,222,227);
      }
    }
    &:nth-of-type(4){
      i{
        background:rgb(255,103,103);
        >img{
          width:52%;
        }
      }
    }
  }
  p{
    text-align: center;
    margin-top:8px;
  }
}
//中图导航
.nav-mid{
  margin-right:0;
  overflow: hidden;
  padding:0 .133333rem .266667rem;
  >li{
    float: left;
    width:50%;
    padding:0 .133333rem;
    padding-top:.266667rem;
    img{
      width:100%;
      vertical-align: middle;
    }
  }
}
//大图导航
.nav-max{
  padding:.266667rem;
  padding-bottom:1.253333rem;
  li{
    margin-bottom:.266667rem;
    img{
      width:100%;
    }
  }
}
</style>

