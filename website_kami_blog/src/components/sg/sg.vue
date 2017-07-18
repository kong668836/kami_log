<template>
    <div>
        <div v-for='item in 6'>
            <div :class='[sgBox1,animateIns]'>
                {{item}}
            </div>
        </div>
        <input type="submit" value='点击' @click="cb">
    </div>
</template>
<style>
    .sgBox{height:40px;width:400px;  background:#fff; border:1px solid red; margin:0 auto; margin-top:10px;}
</style>
<script>
import {animateIn,animateOut} from '@/components/sg/sg.js'
export default {
  name:'sg',
  data(){
      return {
        sgBox1:"sgBox",
        animateIns:[],
        isact:false,
      }
  },
  methods:{
        cb(){
            this.animateIns=animateIn()
        }
  },
  created(){
      for(var i =0;i<6;i++){
        this.animateIns[i]= animateIn();
      }
  },
  mouthed(){
      
  }
}
</script>

