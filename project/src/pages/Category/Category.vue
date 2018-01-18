<template>
  <div class="category">
      <div class="main">
        <div class="search">
          <input type="text" placeholder="商品查找">
        </div>
        <ul class="card_box">
          <li>
            <img src="./images/icon1.png" alt="">
            <p class="title">海鲜生产</p>
            <p class="describe">海鲜的滋味震撼你的味觉</p>
            <span>&gt;</span>
          </li>
          <li>
            <img src="./images/icon2.png" alt="">
            <p class="title">特色农产</p>
            <p class="describe">这样的农产，怎么舍得辜负</p>
            <span>&gt;</span>
          </li>
          <li>
            <img src="./images/icon3.png" alt="">
            <p class="title">鲜冻肉类</p>
            <p class="describe">快来抱走你的小鲜肉</p>
            <span>&gt;</span>
          </li>
          <li>
            <img src="./images/icon4.png" alt="">
            <p class="title">农场畅销</p>
            <p class="describe">带你吃在好源头</p>
            <span>&gt;</span>
          </li>
          <li>
            <img src="./images/icon5.png" alt="">
            <p class="title">农场预定</p>
            <p class="describe">优惠留给有准备的人</p>
            <span>&gt;</span>
          </li>
          <li>
            <img src="./images/icon6.png" alt="">
            <p class="title">农场体验</p>
            <p class="describe">带你遨游带你飞</p>
            <span>&gt;</span>
          </li>
          <li>
            <img src="./images/icon7.png" alt="">
            <p class="title">发起团购</p>
            <p class="describe">发得起你就赢了</p>
            <span>&gt;</span>
          </li>
          <li>
            <img src="./images/icon8.png" alt="">
            <p class="title">积分兑换</p>
            <p class="describe">积够分，统统都是你的</p>
            <span>&gt;</span>
          </li>
          <li>
            <img src="./images/icon9.png" alt="">
            <p class="title">秒杀11点</p>
            <p class="describe">"秒"不可言，错过悔三年</p>
            <span>&gt;</span>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
  .main{
    top:0;
    background:#fff;
  }
  .search{
    height:35px;
    border:1px solid #ccc;
    margin:10px;
    margin-bottom:0;
    background:url('./images/search-icon.png')  10px center no-repeat#f5f5f5;
    background-size:15px 15px;
    border-radius:3px;
    input{
      outline: none;
      border:0;
      height: 30px;
      width:70%;
      margin-left:.8rem;
      background:transparent;
    }
  }
  .card_box{
    padding:20px 10px;
    padding-bottom:1.253333rem;
    li{
      height: 81px;
      border-top:1px solid #ccc;
      padding:23px 0;
      position: relative;
      img{
        width:35px;
        height:35px;
        float:left;
        margin-left:.8rem;
      }
      p{
        text-indent: .533333rem;
      }
      .title{
        font-size:16px;
        color:#333;
      }
      .describe{
        font-size:14px;
        color:#999;
        margin-top:.266667rem;
      }
      span{
        position: absolute;
        right:.266667rem;
        top:0;
        bottom:0;
        line-height: 80px;
        font-size:20px;
        color:#999;
      }
    }
  }
</style>

