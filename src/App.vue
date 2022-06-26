<template>
  <div id="app">
    <div style="margin-left:100px;">
    <a-input placeholder="请输入任务" class="my_ipt" v-model="Eventlist" @keyup.enter="addlist"/>
    <a-button type="primary" @click="addlist">添加事项</a-button>
    </div>
    <a-list bordered :dataSource="ShowList" class="dt_list">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框 -->
        <a-checkbox :checked="item.done" @click="updatadone(item.id)">{{ item.info }}</a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions" @click="updatadelete(item.id)">删除</a>
      </a-list-item>

      <!-- footer区域 -->
      <div class="footer" slot="footer">
        <span>{{undonelist}}条剩余</span>
        <a-button-group>
          <a-button :type="Marked==='all'?'primary':'default'" @click="showlist('all')">全部</a-button>
          <a-button :type="Marked==='undone'?'primary':'default'" @click="showlist('undone')">未完成</a-button>
          <a-button :type="Marked==='done'?'primary':'default'" @click="showlist('done')">已完成</a-button>
        </a-button-group>
        <a @click="updatacleanlist">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>
<script>
import { mapMutations, mapState ,mapGetters} from 'vuex';
export default {
  name: "app",
  data() {
    return {
      Eventlist:'',
    };
  },
  computed:{
    ...mapState(['list','nextId','Marked']),
    ...mapGetters(['undonelist',"ShowList"])
  },
  methods:{
    addlist(){
      if(this.Eventlist.trim().length<=0)
      {
        return this.$message.warning('请输入任务的信息！');
      }
      let param={
        info:this.Eventlist.trim(),
        done:false,
        id:this.nextId,
      }
      this.updatanextId();
      this.updatalist(param);
      this.Eventlist='';
    },
    showlist(value){
      this.updataMarked(value);
    },
    ...mapMutations(["updatanextId","updatalist","updatadone","updatacleanlist","updatadelete","updataMarked"])
  }
};
</script>
<style scoped>
#app {
  width:100%;
  padding: 10px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.my_ipt {
  width: 500px;
  margin:0 auto;
  margin-right: 10px;
}
.dt_list {
  width: 500px;
  margin-top: 10px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
