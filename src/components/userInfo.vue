<template>
  <div>
    <table v-if="!isEdit" class="container">
      <th> 个人信息</th>
      <tr>
        <td>昵称：</td>
        <td>{{list.nickName}}</td>
      </tr>
      <tr>
        <td>姓名：</td>
        <td>{{list.name}}</td>
      </tr>
      <tr>
        <td>性别：</td>
        <td v-if="list.sex==2">女</td>
        <td v-if="list.sex==1">男</td>
      </tr>
      <tr>
        <td>地址：</td>
        <td>{{list.address}}</td>
      </tr>
      <tr>
        <td>我的简介：</td>
        <td>{{list.introduce}}</td>
      </tr>
      <tr>
        <td>毕业年份：</td>
        <td>{{list.endTime}}</td>
      </tr>
      <tr>
        <td>学历：</td>
        <td v-if="list.education==4">大专</td>
        <td v-if="list.education==1">本科</td>
        <td v-if="list.education==2">硕士</td>
        <td v-if="list.education==3">博士及以上</td>
      </tr>
      <tr>
        <td>学校：</td>
        <td>{{list.school}}</td>
      </tr>
      <tr>
        <td>我想去的公司：</td>
        <td>{{list.intentionCompany}}</td>
      </tr>
      <tr>
        <td> 我感兴趣的工作：</td>
        <td>{{list.intentionJob}}</td>
      </tr>
      <el-button class="edit" @click="changeEdit">编辑</el-button>
    </table>
    <el-form  :model="list" status-icon :rules="rules2" ref="list" label-width="100px" class="formWrap"
             v-if="isEdit">
      <el-form-item label="昵称" prop="nickName">
        <el-input v-model="list.nickName" auto-complete="off"></el-input>
      </el-form-item>
       <el-form-item label="姓名" prop="name">
        <el-input v-model="list.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select v-model="list.sex" placeholder="请选择性别" style="width: 100%">
          <el-option label="男" :value="1"></el-option>
          <el-option label="女" :value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="list.address"></el-input>
      </el-form-item>
      <el-form-item label="我的简介" prop="introduce">
        <el-input v-model="list.introduce"></el-input>
      </el-form-item>
      <el-form-item label="毕业年份" prop="endTime">
        <el-select v-model="list.endTime" style="width: 100%">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学历" prop="education">
        <el-select v-model="list.education" placeholder="请选择学历" style="width: 100%">
          <el-option label="大专" :value="4"></el-option>
          <el-option label="本科" :value="1"></el-option>
          <el-option label="硕士" :value="2"></el-option>
          <el-option label="博士及以上" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学校" prop="school">
        <el-input v-model="list.school"></el-input>
      </el-form-item>
      <el-form-item label="我想去的公司" prop="intentionCompany">
        <el-select v-model="intentionCompany" multiple placeholder="请选择" style="width: 100%">
          <el-option
            v-for="item in companyOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
       </el-select>
      </el-form-item>
      <el-form-item label="感兴趣的工作" prop="intentionJob">
        <el-select v-model="intentionJob" multiple placeholder="请选择" style="width: 100%">
          <el-option
            v-for="item in jobOptions"
            :key="item.value.name"
            :label="item.label.name"
            :value="item.value.name">
        </el-option>
       </el-select>
      </el-form-item>
      <el-form-item>
        <el-button class='editor' @click="changeEdit">返回</el-button>
        <el-button  @click="submitInfo('list')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style>
  table {
   width: 600px;
   font-size: 16px
  }

  table tr td {
    padding: 11.2px;
    text-align: left;
  }

  .formWrap {
    width: 500px;
    font-size: 18px;
  }

  .edit {
    margin:10px auto auto 40px;
  }
</style>

<script>/* eslint-disable indent */

  import fetch from '../api/fetch'

  export default {
    props: ['list', 'imageUrl'],
    data () {
      var checknickname = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('昵称不能为空'))
        } else {
          callback()
        }
      }
      var checkname = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('姓名不能为空'))
        } else {
          callback()
        }
      }
      var checksex = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('性别不能为空'))
        } else {
          callback()
        }
      }
      var checkintroduce = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('简介不能为空'))
        } else {
          callback()
        }
      }
      var checkendTime = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('毕业年份不能为空'))
        } else {
          callback()
        }
      }
      var checkschool = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('学校不能为空'))
        } else {
          callback()
        }
      }
      // var checkcompany = (rule, value, callback) => {
      //   if (this.intentionCompany.length === 0) {
      //     return callback(new Error('想去的公司不能为空'))
      //   } else {
      //     callback()
      //   }
      // }
      var checkaddress = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('地址不能为空'))
        } else {
          callback()
        }
      }
      // var checkjob = (rule, value, callback) => {
      //   if (this.intentionJob.length === 0) {
      //     return callback(new Error('感兴趣的工作不能为空'))
      //   } else {
      //     callback()
      //   }
      // }
      var checkeducation = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('学历不能为空'))
        } else {
          callback()
        }
      }
      return {
        isEdit: true,
        rules2: {
          nickName: [{validator: checknickname, trigger: 'blur'}],
          name: [{validator: checkname, trigger: 'blur'}],
          sex: [{validator: checksex, trigger: 'blur'}],
          address: [{validator: checkaddress, trigger: 'blur'}],
          introduce: [{validator: checkintroduce, trigger: 'blur'}],
          endTime: [{validator: checkendTime, trigger: 'blur'}],
          education: [{validator: checkeducation, trigger: 'blur'}],
          school: [{validator: checkschool, trigger: 'blur'}]
          // intentionCompany: [{validator: checkcompany, trigger: 'blur'}],
          // intentionJob: [{validator: checkjob, trigger: 'blur'}]
        },
        options: [
          {
            value: '2018',
            label: '2018'
          },
          {
            value: '2019',
            label: '2019'
          },
          {
            value: '2020',
            label: '2020'
          },
          {
            value: '2021',
            label: '2021'
          },
          {
            value: '2022',
            label: '2022'
          }
        ],
        companyOptions: [],
        jobOptions: [],
        intentionCompany: [],
        intentionJob: []
      }
    },
    mounted() {
      this.getCompanyName()
      this.getJobName()
    },
    watch: {
      list(val, oldVal) {
        if (val !== oldVal) {
           this.intentionCompany = this.list.intentionCompany?this.list.intentionCompany.split(','):null
           this.intentionJob = this.list.intentionJob?this.list.intentionJob.split(','):null
        }
      }
    },
    methods: {
      changeEdit () {
        // alert(this.isEdit)
        this.isEdit = !this.isEdit
      },
      // 提交个人信息
      submitInfo (formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.list.intentionCompany = this.intentionCompany.toString();
            this.list.intentionJob = this.intentionJob.toString();
            this.list.userId = sessionStorage.getItem("userId");
            fetch
              .putUserInfo(this.list)
              .then(res => {
                console.log('list', this.list)
                if (res.data.code=='000000') {
                  this.$message({
                    message: '保存成功',
                    type: 'success'
                  })
                }else {
                  this.$message({
                    message:'保存失败'+res.data.msg,
                    type:'error'
                  })
                }
              })
              .catch(e => {
                console.log(e)
              })
          } else {
            console.log('error submit!!')
          }
        })
      },
      // 获取公司名称
      getCompanyName () {
        fetch.getComName().then(res => {
          if(res.status === 200) {
            const companyList = res.data.data;
            for(let i = 0; i < companyList.length; i++) {
              const object = {};
              object.value = companyList[i].name;
              object.label = companyList[i].name;
              this.companyOptions.push(object);
            }
          }
        }).catch(e => {
          console.log('err', e)
        })
      },
      // 获取职位名称
      getJobName () {
        var param = {};
        param.currentPage = 1;
        param.pageSize = 10;
        fetch.getRecommandJob(param).then(res => {
          if(res.status === 200 && res.data.code=='000000') {
            const nameList = res.data.data.content;
            for (let i = 0; i < nameList.length; i++) {
              const object = [];
              object.value = nameList[i];
              object.label = nameList[i];
              this.jobOptions.push(object);
            }
          }
        })
      }
    }
  }
</script>
