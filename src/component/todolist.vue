<template>
    <div id="todolist">
        <header>
            <h1 class="display-3">TODO LIST</h1>
            <hr></header>
            <link href="http://apps.bdimg.com/libs/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet">
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
                <li class="list-group-item" v-for="item in items">
                <button type="button" class="close" aria-label="close">
                    <span aria-hidden="true">&times;</span>
                    <span class="sr-only">Close</span>
                </button>
                
                    {{item.msg}}
                </li>
            </ul>
            <p>
                总共 <strong></strong>
                个任务，已完成 <strong></strong>
                个
            </p>
        </section>
    </div>
</template>
    
    <style>
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
                items:[]
            }
        },
        methods: {
            go:function(){
                alert(1);
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
        }
    }
</script>