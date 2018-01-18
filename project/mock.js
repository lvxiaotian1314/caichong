let fs=require("fs");
let Mock=require("mockjs");
var data=new Mock.mock({
    'categories|4':[{
        //分类id
        'id|+1':1,
        //分类的图片
        'category_img':'@image(349x349,@color,@cword)'
    }],
    'products|30-50':[{
        //商品id
        'id|+1':1,
        //商品分类id（属于哪一类商品）
        'categoryId|1-4':3,
        //商品的价格
        'product_price|20-500.2':4,
        //商品的名称
        'product_name':'@ctitle(3,5)',
        //数量
        'num':0,
        //商品的图片
        'product_img':'@image(122x122,@color,@cname)',
        //商品容量
        'product_unit|3-20':3,
        //人气
        'product_hot|10-1000':2
    }],
    //商品列表轮播图bannar
    'bannars|12-16':[{
        //bannarid
        'id|+1':1,
        //商品分类id
        'categoryId|1-4':3,
        //图片
        'img':'@image(720x355,@color,@cword)'
    }]
})

fs.writeFile('db.json',JSON.stringify(data,null,2),function(){
    console.log("写入成功");
})