<template>
  <div>
    <!-- 容器页面 -->
    <!-- 头部 -->
    <div class="top" :style="{backgroundImage:'url('+data.avatar+')'}">
      <!-- 商家信息 -->
      <div class="message">
        <div class="img">
          <img :src="data.avatar" alt />
        </div>
        <div class="txt">
          <p>
            <span class="pp">品牌</span>
            <span class="title">{{data.name}}</span>
          </p>
          <p>
            <span>{{data.description}}</span> /
            <span>{{data.deliveryTime}}分钟送达</span>
          </p>
          <p>
            <span class="jian">减</span>
            {{data.supports?data.supports[0].description:''}}
          </p>
        </div>
        <div class="picture">5个></div>
      </div>
      <!-- 公告 -->
      <div class="ad">
        <span class="ad_box">公告</span>
        {{data.bulletin}}
      </div>
    </div>

    <div class="router-link-div">
      <div>
        <router-link to="/goods">商品</router-link>
      </div>
      <div>
        <router-link to="/evaluate">评价</router-link>
      </div>
      <div>
        <router-link to="/merchant">商家</router-link>
      </div>
    </div>
    <!-- 二路由出口 -->
    <router-view></router-view>
    <transition name="slide-fade">
      <div v-show="shopcarShow" class="shopcar-board">购物车板子</div>
    </transition>
    <div @click="shopcarShow = !shopcarShow" class="shopcar-bar">
      <div class="shopcar-box1">
        <img src="../assets/imgs/car.png" />
        <span class="price">￥0</span>
        <span class="song">另需配送费￥4元</span>
      </div>
      <div class="shopcar-box2">￥20起送</div>
    </div>
  </div>
</template>

<script>
import { getSeller } from "../api/apis.js";
export default {
  data() {
    return {
      data: {
        id: 156220,
        name: "粥品香坊（天府新谷）",
        description: "蜂鸟专送",
        deliveryTime: 38,
        score: 4.2,
        serviceScore: 4.1,
        foodScore: 4.3,
        rankRate: 69.2,
        minPrice: 20,
        deliveryPrice: 4,
        ratingCount: 24,
        sellCount: 90,
        bulletin:
          "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
        supports: [
          {
            type: 0,
            description: "在线支付满28减5"
          },
          {
            type: 1,
            description: "VC无限橙果汁全场8折"
          },
          {
            type: 2,
            description: "单人精彩套餐"
          }
        ],
        avatar:
          "http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
        pics: [
          "http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180",
          "http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180",
          "http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180",
          "http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"
        ],
        infos: [
          "该商家支持发票,请下单写好发票抬头",
          "品类:其他菜系,包子粥店",
          "北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340",
          "营业时间:10:00-20:30"
        ]
      },
      shopcarShow: false
    };
  },
  created() {
    getSeller().then(res => {
      this.data = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.top {
  .message {
    width: 100%;
    height: 120px;
    padding: 20px 30px 20px 20px;
    display: flex;
    justify-content: space-around;
    background: rgba(15, 10, 10, 0.7);
    position: relative;
    .img {
      img {
        width: 70px;
        height: 70px;
        margin-top: 5px;
      }
    }
    .txt {
      color: white;
      margin-left: 5px;
      .title {
        font-size: 18px;
        font-weight: bold;
      }
      .pp {
        display: inline-block;
        background: red;
        color: white;
        font-weight: bold;
        font-size: 13px;
        width: 34px;
        height: 20px;
        text-align: center;
        margin-right: 10px;
      }
      p:nth-last-of-type(2) {
        margin: 5px 0px;
      }
      p:last-of-type {
        font-size: 13px;
      }
      .jian {
        display: inline-block;
        background: white;
        color: red;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        margin-right: 5px;
      }
    }
    .picture {
      width: 50px;
      height: 30px;
      background: rgba(15, 10, 10, 0.4);
      color: white;
      text-align: center;
      line-height: 30px;
      border-radius: 25px;
      font-size: 12px;
      margin-top: 55px;
      position: absolute;
      bottom: 10px;
      right: 20px;
    }
  }
  .ad {
    width: 100%;
    height: 30px;
    padding: 0px 10px;
    color: white;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    background: rgba(5, 4, 4, 0.7);
    .ad_box {
      display: inline-block;
      width: 26px;
      height: 14px;
      font-weight: bold;
      text-align: center;
      line-height: 14px;
      font-size: 11px;
      background: white;
      color: black;
      margin-right: 4px;
    }
  }
}

.router-link-div {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  div {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    color: black;
  }
}
.shopcar-bar {
  position: fixed;
  width: 100%;
  height: 60px;
  bottom: 0;
  background: #141c27;
  display: flex;
  justify-content: space-between;
  .shopcar-box1 {
    width: 70%;
    height: 30px;
    padding: 15px 0px;
    font-weight: bold;
    text-align: center;
    line-height: 30px;
    position: relative;
    img {
      width: 50px;
      height: 50px;
      position: absolute;
      left: 20px;
      top: -10px;
    }
    .price {
      display: inline-block;
      width: 50px;
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      border-right: 1px solid gray;
      margin-left: 50px;
    }
    .song {
      display: inline-block;
      width: 100px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 13px;
      margin-left: 10px;
    }
  }
  .shopcar-box2 {
    width: 30%;
    height: 60px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    line-height: 60px;
    color: rgb(146, 146, 146);
    background: rgb(58, 57, 57);
  }
}
.shopcar-board{
  position: fixed;
  height: 60px;
  width: 1000%;
  bottom: 60px;
  background-color: pink;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(200px);
  opacity: 0;
}
</style>