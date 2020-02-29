<template>
  <div class="goods_div">
    <div class="goods_left">
      <ul class="content">
        <div class="goods_name">
          <div
            :class="{goods_name_title:true,active:i==goodsIndex}"
            v-for="(v,i) in this.data"
            :key="i"
            @click="activename(i)"
          >{{v.name}}</div>
        </div>
      </ul>
    </div>
    <div class="goods-right">
      <ul class="content">
        <div :id="i" v-for="(v,i) in this.data" :key="i">
          <p class="tit">{{v.name}}</p>
          <div  v-for="(x,y) in data[i].foods" :key="y" class="goods-r">
            <div class="goodsimg">
              <img :src="x.image" alt />
            </div>
            <div class="gootstxt">
              <p class="goots-tit">{{x.name}}</p>
              <p class="goods-num">月售{{x.sellCount}}份 好评率{{x.rating}}%</p>
              <p class="pay">
                <span class="money01">￥{{x.price}}</span>
                <span class="money02">{{x.oldPrice}}</span>
                <span class="add">
                  <Icon type="md-add-circle" />>
                </span>
              </p>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { getGoods } from "../api/apis.js";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      data: {},
      goodsIndex: 0
    };
  },
  created() {
    getGoods().then(res => {
      this.data = res.data.data;
    });
  },
  mounted() {
    new BScroll(document.querySelector(".goods_left"), {
      click: true
    });
    this.goodsright =  new BScroll(document.querySelector(".goods-right"), {
      click: true
    });
  },
  methods: {
    activename(i) {
      this.goodsIndex = i;
      this.goodsright.scrollToElement(document.getElementById(i), 600);
    }
  }
};
</script>

<style lang="less" scoped>
.active {
  background-color: #fff;
}
.goods_div {
  display: flex;
  height: 100%;
  .goods_left {
    width: 80px;
    background-color: pink;
    height: 400px;
    overflow: auto;
    .goods_name {
      height: 100%;
      .goods_name_title {
        line-height: 40px;
        text-align: center;
      }
    }
  }
  .goods-right {
    flex: 1;
    overflow: auto;
    height: 500px;
    // padding-left: 80px;
    position: relative;
    .tit {
      background: #f3f6f6;
    }
    .goods-r {
      flex: 1;
      margin: 7px;
      padding: 7px;
      display: flex;
      border-bottom: 1px solid #ccc;
      .goodsimg {
        width: 80px;
        height: 80px;
        margin-right: 5px;
        img {
          width: 80px;
          height: 80px;
        }
      }
      .gootstxt {
        .goots-tit {
          color: #000;
          font-size: 18px;
          font-weight: 600;
        }
        .goods-num {
          min-width: 120px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pay {
          .money01 {
            font-size: 20px;
            font-weight: 600;
            color: red;
          }
          .money02 {
            padding-left: 6px;
            text-decoration: line-through;
          }
          .add {
            font-size: 24px;
            color: #00a1dc;
            position: absolute;
            right: 14px;
          }
        }
      }
    }
  }
}
</style>