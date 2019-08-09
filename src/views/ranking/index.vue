<template>
    <div id="ranking">
        <div class="top">
            <div class="top_bar">
                <div class="goback"><img
                        src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png"></div>
                <div class="d-title">热销排行</div>
                <div class="ico_list">
                    <img
                        src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png">
                </div>
            </div>
        </div>
        <div class="ban">
            <div class="menu-bar">
                <div class="menu-inner">
                    <ul>
                        <li><a href="#">篮球鞋</a></li>
                        <li><a href="#">休闲鞋</a></li>
                        <li><a href="#">跑鞋</a></li>
                        <li><a href="#">拖鞋</a></li>
                        <li><a href="#">滑板鞋</a></li>
                        <li><a href="#">凉鞋</a></li>
                        <li><a href="#">足球鞋</a></li>
                        <li><a href="#">训练鞋</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="rank">
            <ul>
                <li class="clearfix">
                    <a
                        href="#">
                        <div class="img">
                            <img
                                src="http://shihuo.hupucdn.com/def/20180417/8a3f8c14ab273ee7f70039ea2c65fd5a1523936620.jpg?imageView2/0/w/300/h/300/interlace/1">
                        </div>
                        <div class="info">
                            <div class="sort"> <span>1</span></div>
                            <p class="title"> 李宁 枭龙 ABAN031</p>
                            <p class="size"> 黑白</p>
                            <p class="price">¥199.00 ~ ¥408.00</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    import {
        rank_api
    } from "api/equip"
    export default {
        name: "Ranking",
        async created() {
            let data = await rank_api();
            this.list = data;
            console.log(this.list, 111)
        },
        data() {
            return {
                list: [],
            }
        }
    }
</script>
<style lang="scss" scoped>
    #ranking {
        display: flex;
        flex-direction: column;
        background: #f1f1f1;
    }
    
    .top {
        height: 1.25rem;
    }
    
    .top_bar {
        background-color: #f7f7f7;
        height: 1.25rem;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center
    }
    
    .top_bar .goback {
        position: absolute;
        left: 0;
        width: 1.25rem;
        top: 0;
        height: 1.25rem;
        align-items: center;
        justify-content: center;
        display: flex;
    }
    
    .top_bar .goback img {
        display: block;
        height: 82%;
    }
    
    .top_bar .d-title {
        font-size: .5rem;
        font-family: Helvetica, sans-serif;
        color: #333;
        font-weight: 800;
    }
    
    .top_bar .ico_list {
        position: absolute;
        right: 0;
        top: 0;
        width: 1.25rem;
        height: 1.25rem;
        align-items: center;
        justify-content: center;
        display: flex;
    }
    
    .top_bar .ico_list img {
        height: 82%;
    }
    
    .ban {
        height: 1.15rem;
    }
    
    .menu-bar {
        height: 1.15rem;
        position: fixed;
        background: #fff;
    }
    
    .menu-bar .menu-inner {
        width: 10rem;
    }
    
    .menu-bar .menu-inner ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        width: 100%;
        overflow: auto;
    }
    
    .menu-bar .menu-inner a {
        font-size: .45rem;
        color: #222;
        width: 1.5rem;
        display: block;
        margin: 0 .213333rem;
        text-decoration: none;
        font-family: Helvetica, sans-serif;
        line-height: 1.15rem;
    }
    
    .rank {
        background-color: #FFF;
        min-height: 100px;
        margin-top: .15rem;
    }
    
    .rank ul {
        list-style: none;
    }
    
    .rank ul li {
        padding: 10px 30px;
        border-bottom: 1px solid #e2e2e2;
        position: relative;
        padding-left: 10px;
    }
    
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
        line-height: 0;
    }
    
    .rank ul li a {
        display: flex;
        justify-content: space-between;
        color: #444;
        text-decoration: none;
    }
    
    .rank ul li a .img {
        width: 28%;
        float: left;
    }
    
    .rank ul li a .img img {
        width: 100%;
        display: block;
    }
    
    .rank ul li .info {
        width: 68%;
        float: right;
        color: #333;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .rank ul li .info .sort {
        position: absolute;
        right: 12px;
        top: 0;
        background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/sales/sort_kanqiu_358afba.png) no-repeat;
        color: #fff;
        width: 20px;
        height: 26px;
        line-height: 20px;
        text-align: center;
        background-size: 100% auto;
    }
    
    .rank ul li .info .title {
        font-size: 15px;
        line-height: 20px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .rank ul li .info .size {
        color: #999;
        font-size: 14px;
    }
    
    .rank ul li .info .price {
        font-size: 15px;
        color: #c01e2f;
        font-family: HelveticaNeue-CondensedBold;
        margin: 0;
    }
</style>