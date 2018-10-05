<template>
<div>
  <h1 v-show="value"> Vujs show</h1>
  <MyButton   v-on:click="execute" displayName="Click aqui" > <!--value:{{value}} --></MyButton>
</div>
 
</template>

<script>

import MyButton from'./components/Button'
export default {
  name: 'app',
  components:{
     MyButton,
  },
  data: ()=>{
    return{ value: true};
  },
  methods:{
    execute:function(){
      this.value =! this.value;
    }
  }
  
}

</script>

<style>


</style>
