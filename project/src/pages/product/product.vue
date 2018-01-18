<template>
    <div class="product">
        <header-search></header-search>
        <div class="main">
            <!-----------导航------------>
            <nav>
                <div>
                    <span :class="{active:navIndex===0}" @click="changeNavIndex(0)">默认排序</span>
                </div>
                <div>
                    <span class="sort" :class="{active:navIndex===1}" @click="changeNavIndex(1)">价格</span>
                </div>
                <div>
                    <span class="sort" :class="{active:navIndex===2}" @click="changeNavIndex(2)">人气</span>
                </div>
            </nav>
            <!------------轮播图-------------->
            <div class="swiper">
                <mt-swipe>
                    <mt-swipe-item v-for="(item,index) in bannars" :key="index">
                        <img v-lazy.container="item.img" alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <!-------------商品列表-------------------->
            <ul class="product_list">
                <li v-for="(item,index) in newProducts" :key="item.id">
                    <img v-lazy="item.product_img" alt="">
                    <p>{{item.product_name}}</p>
                    <p class="redFont">{{"￥"+item.product_price}}</p>
                    <p>{{item.product_unit+"斤"}}</p>
                    <span class="collect">收藏</span>
                    <span class="addCart"></span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import HeaderSearch from '@/components/Header/Header-search/Header-search'
import api from '@/api'
export default {
    created(){
        let id=this.$router.currentRoute.params.id;
        let that=this;
        this.$loading.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        });
        async function getData(){
            //获取bannar图
           let result_bannar=await that.$http.get(api.host+"/categories/"+id+"/bannars");
           that.bannars=result_bannar.data;
           //获取商品列表
           let result_product=await that.$http.get(api.host+"/categories/"+id+"/products");
           that.products=result_product.data;
           that.newProducts=result_product.data;
           that.$loading.close();
        }
        getData();
       
    },
    data(){
        return {
            bannars:[],
            products:[],
            navIndex:0,
            newProducts:[]
        }
    },
    methods:{
        changeNavIndex(index){
            //价格
            if(index===1){
                this.newProducts=JSON.parse(JSON.stringify(this.products));
                this.newProducts.sort((a,b)=>{
                    return a.product_price-b.product_price;
                })
            }
            else if(index===2){
                this.newProducts=JSON.parse(JSON.stringify(this.products));
                this.newProducts.sort((a,b)=>{
                    return a.product_hot-b.product_hot;
                })
            }
            else{
                this.newProducts=this.products
            }
            this.navIndex=index;
        }
    },
    components:{
      HeaderSearch
    }
}
</script>
<style lang="less" scoped>
    nav{
        display: flex;
        padding:10px 0;
        background:#fff;
    }
    nav>div{
        flex:1;
        height: 21px;
        text-align: center;
        border-right:1px solid #ccc;
        >span{
            height:100%;
            line-height: 21px;
            font-family: "微软雅黑";
        }
        >span.active{
            color:rgb(119,204,52);
        }
        &:nth-last-of-type(1){
            border-right:0;
        }
    }
    .sort{
         &:after{
            content:"";
            display:inline-block;
            width:13px;
            height: 13px;
            background:url('./images/sort-icon.png') 0 0 no-repeat;
            background-size:70%; 
            vertical-align: middle;
            margin-left:.266667rem;
            transition:all .5s;
        }
    }
    .sort.active{
        &::after{
            transform: rotate(180deg);
        }
    }
    .swiper{
        .mint-swipe{
            height: 4.933333rem;
            img{
                width:100%;
                height:4.933333rem;
            }
        }
    }
    .product_list{
        li{
            height:3.706667rem;
            border-bottom:1px solid #ccc;
            padding:.213333rem .213333rem 0;
            position: relative;
            background:#fff;
            img{
                width:3.28rem;
                float: left;
            }
            p{
                font-size:14px;
                margin:0 0 .213333rem 0;
                text-indent: .266667rem;
                color:#333;
                &:nth-last-of-type(1){
                    font-size:12px;
                }
            }
            .collect{
                position: absolute;
                width:51px;
                height: 17px;
                bottom:.32rem;
                right:1.6rem;
                line-height: 17px;
                padding-left:20px;
                background:url("./images/collect-icon.png") left center no-repeat;
                background-size: 40%;
            }
            .addCart{
                position: absolute;
                width:28px;
                height: 25px;
                background:url("./images/addCart-icon.png") 0 0 no-repeat;
                background-size:100%;
                bottom:.32rem;
                right:.533333rem;
            }
        }
        padding-bottom:1.333333rem;
    }
</style>



