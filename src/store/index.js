import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      {
        id: 0,
        info: "Racing car sprays burning fuel into crowd.",
        done: false,
      },
      {
        id: 1,
        info: " Japanese princess to wed commoner.",
        done: false,
      },
      {
        id: 2,
        info: "Australian walks 100km after outback crash.",
        done: true,
      },
      {
        id: 3,
        info: "Man charged over missing wedding girl.",
        done: false,
      },
      {
        id: 4,
        info: "Los Angeles battles huge wildfires.",
        done: false,
      },
    ],
    nextId:5,
    Marked:'all',
  },
  getters: {
  },
  mutations: {
    updatanextId(state){
      state.nextId++;
    },
    updatalist(state,value)
    {
      state.list.push(value);
    },
    updatadone(state,id){
      let index=state.list.findIndex(x=>x.id===id);
      if(index===-1){
        return 
      }else{
        state.list[index].done=!state.list[index].done;
      }
    },
    updatacleanlist(state){
      state.list=state.list.filter(x=>!x.done)
    },
    updatadelete(state,id){
      let i=state.list.findIndex(x=>x.id===id);
      state.list.splice(i,1);
    },
    updataMarked(state,value){
      state.Marked=value;
    },
  },
  actions: {
  },
  modules: {
  },
  getters:{
    undonelist(state){
      return state.list.filter(x=>!x.done).length;
    },
    ShowList(state){
      if(state.Marked==='all')
      {
        return state.list;
      }else if(state.Marked==='undone'){
        return state.list.filter(x=>!x.done);
      }else if(state.Marked==='done'){
        return state.list.filter(x=>x.done);
      }
    }
  }
})
