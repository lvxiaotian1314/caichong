<template>
    <header>
        <i></i>
        <form action="" method="post">
            <i></i>
            <input type="text" placeholder="商品查找">
        </form>
        <i></i>
    </header>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
    header{
        height: 46px;
        background:#1e2427;
        padding:0 .375rem;
        position: fixed;
        top:0;
        z-index: 9999;
        width:100%;
        >i{
            display: inline-block;
            width:56px;
            height: 40px;
            line-height: 40px;
            background:url('./images/logo.png') no-repeat center center;
            background-size:100%; 
            vertical-align: top;
            margin-top:3px;
        }
        >i:nth-last-child(1){
            background-image: url('./images/msg-icon.png');
            width:25px;
            height:19px;
            margin-top:14px;
            margin-left:20px;
        }
        form{
            display: inline-block;
            margin-top:9px;
            border-radius: 3px;
            margin-left:.266667rem;
            background:rgb(55,62,66);
            width:5.733333rem;
            i{
                display: inline-block;
                width:15px;
                height: 15px;
                vertical-align: top;
                background:url('./images/search-icon.png') no-repeat 0 center;
                background-size:100%;
                margin-left:10px;
                margin-top:8px;
            }
            input{
                outline: none;
                background:red;
                border:0;
                height: 28px;
                margin-left:10px;
                color:#fff;
                background-color:transparent;
            }
            ::-webkit-input-placeholder{
                color:rgb(195,195,186)
            }
            
        }
    }
</style>
