<template>
    <div class="editor">
        <Header>Edit memo</Header>
        <textarea name="memo" v-model="memoBody"></textarea>
        <button @click="save">保存</button>
    </div>
</template>



<script>
import Header from "@/components/Header.vue"

export default {
    name:'edit',
    components:{
        Header
    },
    data:function(){
        return{
           memoBody:''
        }
    },
    mounted:function(){
        let id = this.$route.params["id"];
        let memo = this.$store.state.memos.slice().find(memo => memo.id == id);
        this.memoBody = memo.body;
    },
    methods:{
        save:function(){
            this.$store.commit("update",{
                id:this.$route.params["id"],
                body:this.memoBody
            });
            this.$router.push('/');
            // 新しいメモの内容を保存してトップページに戻ってくる
        }
    }
}
</script>