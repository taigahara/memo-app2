import Vue from 'vue'
import Vuex from 'vuex'
import createdPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins:[createdPersistedState()],
      state:{
          memos:[
              {id:1, body:'サンプルのメモです'}
          ]
      },
      mutations:{
        //   変化させる時に使われる処理
           save(state,memo){
            //    メソッド
            var max = state.memos[state.memos.length - 1].id;
            memo.id = max + 1;
            // 新しいidを割り振る
               state.memos.push(memo);
           },
           update(state,data){
               let x = state.memos.find(memo => memo.id == data.id);
               x.body = data.body;
           }
      }
})