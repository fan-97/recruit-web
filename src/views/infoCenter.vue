<template>
  <div>
    <el-card class="infocard" v-if="isShow">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524746733938&di=9ae24b5205e97c2876b48d3ff26f1c23&imgtype=0&src=http%3A%2F%2Fwww.snlfjx.com%2Fforum%2FSkin%2Fimgs%2Fno-data.png"
      />
      <p>暂时没有消息哦</p>
    </el-card>
    <el-card class="infocard" v-for="(item, key) in infoList" :key="key" v-show="!isShow">
      <i class="el-icon-message myMsg"></i>
      <div class="infoTitle" @click="info(item.content, item.id)">
        <p>{{item.title}}</p>
      </div>
      <p class="time">{{item.createTime}}</p>
      <el-tag v-if="item.status == 1" class="haveRead">已读</el-tag>
      <el-tag v-else type="warning" class="haveRead">未读</el-tag>
    </el-card>
    <el-dialog title="系统通知" :visible.sync="dialogVisible" width="30%">
      <span>{{content}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmClick">确定</el-button>
      </span>
    </el-dialog>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.number+1"
        :page-size="page.size"
        layout="total,sizes, prev, pager, next, jumper"
        :total="page.totalElements"
        background
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import fetch from "../api/fetch";
import ElCard from "../../node_modules/element-ui/packages/card/src/main.vue";
export default {
  data() {
    return {
      num: 0,
      infoList: [],
      dialogVisible: false,
      page: {},
      content: "",
      isShow: true,
      count: localStorage.getItem("count"),
      params:{
        "receiverId":sessionStorage.getItem("userId"),
        "pageSize":10,
        "currentPage":1,
        "status":null
      }
    };
  },
  components: {
    ElCard
  },
  mounted() {
    this.getMessage(1, 10, null);
  },
  watch: {
    num() {
      location.reload();
    },
    count() {
      location.reload();
    }
  },
  methods: {
    handleSizeChange(val) {
      this.getMessage(this.params.currentPage, val, this.params.status);
    },
    handleCurrentChange(val) {
      this.getMessage(val, this.params.size, this.params.status);
    },
    confirmClick() {
      this.dialogVisible = false;
      this.num++;
    },
    getMessage(currentPage, pageSize, status) {
      this.params.pageSize = pageSize === null ? this.params.pageSize : pageSize;
      this.params.currentPage = currentPage === null ? this.params.currentPage : currentPage;
      this.params.status = status;
      fetch
        .getMessage(this.params)
        .then(res => {
          if (res.status === 200) {
            if (res.data.code === "000000") {
              this.infoList = res.data.data.content;
              this.page = res.data.data;

              if (this.infoList.length !== 0) {
                this.isShow = false;
              }
            } else {
              this.$message({
                message: res.data.msg,
                type: "error"
              });
            }
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    info(msg, num) {
      this.dialogVisible = true;
      this.content = msg;
      fetch
        .readMessage(num)
        .then(res => {
          console.log("已读", res);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style>
.infocard {
  width: 1000px;
  margin: 20px auto auto auto;
}
.infoTitle {
  text-align: center;
  line-height: 90px;
  height: 90px;
  margin: auto auto auto 70px;
}
.infoTitle p {
  float: left;
  margin-top: 8px;
}
.time {
  float: right;
  margin-top: -28px;
}
.myMsg {
  margin-top: 14px;
  font-size: 65px;
  float: left;
  color: #5e9fa3;
}
.haveRead {
  float: right;
  margin-top: -70px;
}
</style>
