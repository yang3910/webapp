<template>
 <Header title="篮球专区">
    <template v-slot>
              <p>&lt;</p>
    </template>
 </Header>
</template>
<script>
import {sports_api_basketball} from "../../api/goods"
export default {
    name:"Sports",
    async created(){
    let data=await sports_api_basketball()
    console.log(data.data);
    //   this.basketballList = data.data
    },
    // data(){
    //     return{
    //           basketballList:[],
    //     }
    // }
}
</script>
<style>

</style>

