<template>
    <div id="todolist">
        <header>
            <h1 class="display-3">TODO LIST</h1>
            <hr></header>
        
        <!-- 内容部分-->
        <section>
            <!--为了实现好看的界面，所以用了表单控制-->
            <form class="input-group input-group-lg" action="#">
                <input type="text" class="form-control" name="">
                <span class="input-group-btn">
                    <input type="submit" class="btn btn-secondary" @click="go">Add</input>
                </span>
            </form>
            <ul class="list-group" style="padding:12px;">
                <li class="list-group-item" v-for="(item,index) in items" v-on:click="todo(index)">
                <button type="button" class="close" aria-label="close">
                    <span aria-hidden="true" @click="close(index)">&times;</span>
                    <span class="sr-only" >Close</span>
                </button>
                <span style="color:green" v-if="item.do==1">★</span>
                <span style="color:red" v-if="item.do==2">X</span>
                    {{item.msg}}
                </li>
            </ul>
            <p v-show="items.length">
                总共 <strong>{{items.length}}</strong>
                个任务，已完成 <strong>{{items | todolists}}</strong>
                个
            </p>
            <p v-if="items.length">
                无任务
            </p>
        </section>
    </div>
</template>
    
    <style>
        @import url('http://apps.bdimg.com/libs/bootstrap/3.3.0/css/bootstrap.min.css');
        .container {
            max-width: 720px;
        }
        .done {
            color: #cca;
        }
        .checkbox {
            margin-right: 12px;
            margin-bottom: 0;
        }
        .done > .checkbox > label > span {
            text-decoration: line-through;
        }
    </style>
<script>
    export default{
        name:'todolist',
        data(){
            return{
                items:[],
                cunt:0
            }
        },
        methods: {
            go:function(){
                alert(1);
            },
            todo:function(index){
                if(this.items[index].do==2){
                    this.items[index].do=1;
                    this.cunt++;
                }else{
                    this.items[index].do=2
                    --this.cunt>=0?this.cunt:this.cunt=0;
                }
            },
            close(index){
                this.items.splice(index,1);
                window.event.cancelBubble = true;
            }
        },
        mounted () {
            this.$http.get('/vue/getitems',{},{
                headers: {
                    
                },
                 emulateJSON: true
            }).then((Response)=>{
                this.items=Response.body.items;
            },(Response)=>{

            });
        },
        filters:{
            todolists:function(value){
                var pushArr=0;
                for(var i=0;i<value.length;i++){
                    if(value[i].do==1){
                        pushArr++;
                    }
                }
                return pushArr;
            }
        }
    
    }
</script>