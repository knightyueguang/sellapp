import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



//使用
//1创建一个vuex的数据仓库
var store=new Vuex.Store({
    //存放所有交互数据
    state:{
        goodslist:[]
    },
    //改变state的唯一方式
    mutations:{
        initGoodslist(state,newarr){
            state.goodslist=newarr
        },
        addnum(state,payload){
            //state.goodslist[payload.index].num+=payload.val
            for(let i of state.goodslist){
                for(let j of i.foods){
                    if(j.name==payload.name){
                        j.num+=payload.val
                    }
                }
            }
        }
    }
})


export  default store