<template>
  <div id="contentVue">
    <a>{{author}} </a>
    <ul>
        <li v-for="lb in msg">{{lb}}</li>
    </ul>
  </div>
</template>
<script>
    export default{
        data(){
            return{
                author:"Hello content In Vue!",
                msg:[]
            }
        },
        mounted () {
            this.$http.get('/vue/getindex',{},{
                headers: {
                    
                },
                 emulateJSON: true
            }).then((Response)=>{
                this.msg=Response.body;
            },(Response)=>{

            });
        }
    }
</script>