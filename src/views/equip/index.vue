<template>
    <div id="equip">
        <div class="sousuo">
            <div class="search">
                <form>
                    <input type="search" placeholder="搜索全网低价好券" class="input" />
                </form>
            </div>
            <div class="dian">
                <img
                    src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/widget/header/head_list_4a4f511.png">
            </div>
        </div>

        <div class="menu-area">
            <ul>
                <li><a href="#">热销排行</a></li>
                <li><a href="#">好价精选</a></li>
                <li><a href="#">当季新款</a></li>
            </ul>
        </div>
        <div class="zs" v-for="(item,index) in zs" :key="index">
            <div class="banner-area">
                <div class="bg-img">
                    <img
                        :src="item.img"
                        class="bg-loding-img">
                </div>
                <a class="click" href="#">
                    <div class="bg-color"></div>
                    <div class="ban-txt">
                        <div class="h2"><s>{{item.name}}</s>{{item.info}}<img
                                src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png"></div>
                        <div class="txt">

                            <p>{{item.text}}</p>
                            <p>{{item.text1}}</p>
                        </div>
                        <div class="list clearfix" style="margin-top:0;">
                        </div>
                        <div class="left"><img
                                src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png"></div>
                        <div class="right"><img
                                src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png"></div>
                    </div>
                </a>
            </div>
            <div class="tag-area">
                <div class="tag-list">
                    <a href="#">{{item.type1}}</a>
                    <a href="#">{{item.type2}}</a>
                    <a href="#">{{item.type3}}</a>
                    <a href="#">{{item.type4}}
                        <img
                            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"></a>
                </div>
                <div class="tag-list">
                    <a href="#">{{item.pai1}}</a>
                    <a href="#">{{item.pai2}}</a>
                    <a href="#">{{item.pai3}}</a>
                    <a href="#">{{item.pai4}}
                        <img
                            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"></a>
                </div>
                <div class="bg-area"></div>
            </div>
        </div>
        <div class="list">
            <div class="h2">最新推荐</div>
            <ul class="introduce" v-for="(item, index) in list" :key="index">
                <li>
                    <a href="#">
                        <div class="imgs">
                            <img
                                :src="item.data.img">
                        </div>
                        <div class="txt-area">
                            <div class="title">{{item.data.title}}</div>
                            <div class="txt">
                                <img style="margin-right:10px;"
                                    src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-1_5297253.png">{{item.data.intro}}<img
                                    style="margin-left:10px;"
                                    src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/quote_right_711acf3.png">
                            </div>
                            <div class="price clearfix">
                                <div class="t1">
                                    {{item.data.merchant}}
                                    <s>¥{{item.data.price}}</s>
                                </div>
                                <div class="t2">
                                    <img
                                        src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-2_2bc8bc4.png">
                                    {{item.data.hits}}
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>

        </div>


    </div>
</template>

<script>
    import {
        goods_api
    } from "api/equip"
    export default {
        name: "Equip",
        async created() {
            let data = await goods_api();
            this.list = data.data;
            console.log(this.list)
        },
        data() {
            return {
                list: [],
                zs: [{
                    type1: "篮球鞋",
                    type2: "篮球服饰",
                    type3: "篮球配件",
                    type4: "篮球",
                    pai1: "Nike",
                    pai2: "adidas",
                    pai3: "Jordan",
                    pai4: "全部",
                    name: "篮球",
                    info: "BASKETBALL",
                    text: "帕克7代评测",
                    path: "/sports",
                    img: "http://shihuo.hupucdn.com/appZones/201701/1815/18dad2cc843300a3560cca54886957e5.png"
                }, {

                    name: "跑步",
                    info: "RUNNING",
                    text: "户外跑鞋选购",
                    path: "/sports",
                    img: "http://shihuo.hupucdn.com/appZones/201701/1815/fa1b657f6d267f5ccb6c3213ba7cebd3.png",
                    type1: "跑步鞋",
                    type2: "跑步服饰",
                    type3: "跑步配件",
                    type4: "运动补给",
                    pai1: "adidas",
                    pai2: "asics",
                    pai3: "New Balance",
                    pai4: "全部"
                }, {

                    name: "潮流",
                    info: "CASUAL",
                    text: "Fairplay 慢跑束脚裤 等8款超低价",
                    text1: "年度鞋款回顾",
                    path: "/sports",
                    img: "http://shihuo.hupucdn.com/appZones/201701/1815/d5bdeb4f9dee46e6cf24e239da707bc3.png",
                    type1: "鞋类",
                    type2: "服装",
                    type3: "配件",
                    type4: "耳机",
                    pai1: "Converse",
                    pai2: "CASIO",
                    pai3: "Vans",
                    pai4: "全部"
                }, {
                    name: "健身",
                    info: "FITNESS",
                    text: "adidas 运动短袖T恤 DN7389,adidas运动",
                    text1: "战斗绳狂塑",
                    path: "/sports",
                    img: "http://shihuo.hupucdn.com/appZones/201701/1815/f08e00fd62f3e0b2561e45c9f5db0272.png",
                    type1: "健身装备",
                    type2: "健身用品",
                    type3: "营养补给",
                    type4: "全部类别",
                    pai1: "Converse",
                    pai2: "CASIO",
                    pai3: "Vans",
                    pai4: "全部"
                }]
            }
        }
    }
</script>
<style lang="scss" scoped>
    #equip {
        display: flex;
        flex-direction: column;
    }
    
    .sousuo {
        width: 100%;
        height: 1.15rem;
        position: relative;
        z-index: 10;
        border: 0;
        background: #f7f7f7!important;
        top: 0;
        text-align: center;
    }
    
    .search {
        width: 8.8rem;
        float: left;
        padding-left: .26667rem;
        position: absolute;
        display: block;
        text-align: center;
        font-size: .32rem;
    }
    
    .search .input {
        width: 8.53333rem;
        border-radius: .10667rem;
        margin: .2rem 0;
        height: .73333rem;
        line-height: .73333rem;
        border: 0;
        padding-left: .6rem;
        color: #666;
        font-size: .32rem;
        background: #ebebeb url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/widget/header/search_0b8e800.png) .13333rem center no-repeat;
        background-size: .34667rem;
        overflow: hidden;
    }
    
    .dian {
        height: 100%;
        width: 10%;
        position: absolute;
        right: 0;
        top: 0;
    }
    
    .dian img {
        width: 100%;
        height: 1.15rem;
        border: 0;
        outline: 0;
    }
    
    .menu-area li {
        width: 33.33%;
        padding: .33333rem 0;
        float: left;
        list-style: none;
    }
    
    .menu-area li a {
        font-size: .373333rem;
        display: block;
        text-align: center;
        color: #333;
        border-right: 1px solid #d4d4d4;
        text-decoration: none;
        font-family: Helvetica Neue, Helvetica, serif;
    }
    
    .menu-area li a:before {
        content: "";
        display: block;
        margin: 0 auto .2rem;
    }
    
    .menu-area li:nth-child(1) a:before {
        margin-left: 40%;
        width: 1.14667rem;
        height: .58667rem;
        background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-1_f79f337.png) no-repeat center center transparent;
        background-size: contain;
    }
    
    .menu-area li:nth-child(2) a:before {
        width: .58667rem;
        height: .58667rem;
        background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-2_4b3ef21.png) no-repeat center center transparent;
        background-size: contain;
    }
    
    .menu-area li:nth-child(3) a:before {
        width: .56rem;
        height: .50667rem;
        background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-3_680282c.png) no-repeat center center transparent;
        background-size: contain;
    }
    
    .banner-area {
        height: 5.2rem;
        position: relative;
        overflow: hidden;
        background-color: aqua;
    }
    
    .banner-area .bg-img img {
        height: 5.2rem;
        width: 100%;
        border: 0;
        outline: 0;
    }
    
    .banner-area a.click {
        display: block;
        color: #fff;
    }
    
    .banner-area .bg-color {
        height: 5.2rem;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        background-color: #000;
        opacity: .5;
    }
    
    .banner-area .ban-txt {
        position: absolute;
        left: 0;
        width: 100%;
        top: .53333rem;
        text-align: center;
        color: #fff;
    }
    
    .banner-area .ban-txt .h2 {
        font-size: .67rem;
        ;
        text-shadow: 1px 1px 3px #666;
    }
    
    .banner-area .ban-txt .h2 s {
        font-weight: 700;
        text-decoration: none;
    }
    
    .banner-area .ban-txt .h2 img {
        height: .59rem;
        width: .59rem;
        display: inline-block;
        margin: .06667rem 0 0 .13333rem;
        border: 0;
        outline: 0;
    }
    
    .banner-area .ban-txt .txt p {
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0 auto;
    }
    
    .banner-area .ban-txt .txt {
        font-size: .373rem;
        text-align: center;
    }
    
    .banner-area .ban-txt .list {
        position: relative;
        z-index: 8;
    }
    
    .banner-area .ban-txt .left {
        position: absolute;
        left: .53333rem;
        top: .4rem;
    }
    
    .banner-area .ban-txt .left img {
        height: 3.2rem;
        width: .63rem;
    }
    
    .banner-area .ban-txt .right {
        position: absolute;
        right: .53333rem;
        top: .4rem;
    }
    
    .banner-area .ban-txt .right img {
        height: 3.2rem;
        width: .44rem;
    }
    
    .tag-area .tag-list {
        display: -webkit-box;
    }
    
    .tag-area .tag-list a {
        font-size: .373333rem;
        color: #444;
        text-decoration: none;
        border-bottom: 1px #ececec solid;
        border-right: 1px #ececec solid;
        padding: .33333rem 0;
        text-align: center;
        flex: 1;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    
    .tag-area .tag-list a img {
        width: .133333rem;
        vertical-align: middle;
        margin-left: .26667rem;
        border: 0;
        outline: 0;
    }
    
    .tag-area .tag-list {
        display: flex;
    }
    
    .tag-area .tag-list a {
        font-size: .373333rem;
        width: 100%;
        flex: 1;
        border-bottom: 1px #ececec solid;
        border-right: 1px #ececec solid;
        padding: .33333rem 0;
        text-align: center;
        color: #444;
        text-decoration: none;
    }
    
    .bg-area {
        background-color: #f0f3f5;
        height: .26667rem;
    }
    
    .list {
        padding: .26667rem 0 0 .26667rem;
    }
    
    .list .h2 {
        font-size: .426667rem;
        font-family: Helvetica Neue, Helvetica, serif;
    }
    
    .list ul {
        list-style: none;
    }
    
    .list ul li {
        padding: .26667rem 0;
        border-bottom: 1px #e6e6e6 solid;
        position: relative;
    }
    
    .list ul li a {
        display: block;
        color: #444;
        text-decoration: none;
    }
    
    .list ul li a .imgs {
        float: left;
        text-align: center;
        width: 3.33333rem;
    }
    
    .list ul li a .imgs img {
        max-width: 100%;
    }
    
    .list ul li a .txt-area {
        padding: 0rem .2rem 0 .33333rem;
        margin-left: 3.46667rem;
        font-family: Helvetica Neue, Helvetica, serif;
    }
    
    .list ul li a .txt-area .title {
        font-size: .4rem;
        height: 1.13333rem;
        overflow: hidden;
        word-break: break-all;
        word-wrap: break-word;
    }
    
    .list ul li a .txt-area .txt {
        height: 1.066667rem;
        font-size: .346667rem;
        margin-top: .33333rem;
        overflow: hidden;
        font-family: Helvetica Neue, Helvetica, serif;
    }
    
    .list ul li a .txt-area .txt img {
        width: .293333rem;
        position: relative;
        margin-top: -0.026667rem;
    }
    
    .list ul li a .txt-area .txt img {
        width: .293333rem;
        position: relative;
        margin-top: -0.026667rem;
        margin-right: .066667rem;
    }
    
    .list ul li a .txt-area .price {
        margin-top: .33333rem;
    }
    
    .list ul li a .txt-area .price .t1 {
        font-size: .346667rem;
        float: left;
    }
    
    .list ul li a .txt-area .price .t1 s {
        color: #FF4338;
        font-weight: 700;
        text-decoration: none;
    }
    
    .list ul li a .txt-area .price .t2 {
        font-size: .32rem;
        float: right;
    }
    
    .list ul li a .txt-area .price .t2 img {
        width: .333333rem;
        vertical-align: middle;
        position: relative;
        margin: -0.026667rem .06667rem 0 0;
    }
</style>