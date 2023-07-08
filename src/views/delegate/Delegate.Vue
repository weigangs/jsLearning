<template>
    <div >
        <el-row>
  <el-button type="primary" icon="el-icon-edit-outline" @click="createEuroBird" >创建EuropeanSwallowDelegate</el-button>
</el-row>

<el-dialog title="欧洲燕子" :visible.sync="dialogFormVisible" :before-close="handleClose">
  <el-form :model="form">
    <el-form-item label="初始化数据" :label-width="formLabelWidth">
      <el-input autocomplete="off" v-model="form.data" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="名称" :label-width="formLabelWidth">
      <el-input autocomplete="off" v-model="form.name" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="羽毛" :label-width="formLabelWidth">
      <el-input autocomplete="off" v-model="form.plumage" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="飞行速度" :label-width="formLabelWidth">
      <el-input autocomplete="off" v-model="form.airSpeedVelocity" :disabled="true"></el-input>
    </el-form-item>
    
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" plain @click="getBirdName">获取燕子名称</el-button>
    <el-button type="primary" plain @click="getBirdPlumage">获取燕子羽毛参数</el-button>
    <el-button type="primary" plain @click="getBirdAirSpeedVelocity">获取燕子飞行速度</el-button>
  </div>
</el-dialog>
   </div>
 </template>
 
 <script>
 
 import {createBird} from '../../reconstruct/erashextend/bird.js'

 export default {


   name: 'Delegate',
   data () {
     return {
        dialogFormVisible: false,
       statusOptions: [
         {
           code: '0',
           msg: '待生效'
         },
         {
           code: '1',
           msg: '生效中'
         },
         {
           code: '2',
           msg: '已失效'
         }
       ],
       form: {
        data: {},
        name: '',
        plumage: '',
        airSpeedVelocity: 0
       },
       bird: undefined,
       formLabelWidth: '120px'
     }
   },
   created () {
 
   },
  methods: {
    createEuroBird() {
        this.resetForm();
        const data = {
            type: "EuropeanSwallow",
            name: '欧洲燕子',
            plumage: '还行',
        }
        this.form.data = JSON.stringify(data);
        this.dialogFormVisible = true;
        this.bird = createBird(data);
    },
    getBirdName() {
        this.form.name = this.bird.name;

    },
    getBirdPlumage() {
        this.form.plumage = this.bird.plumage;

    },
    getBirdAirSpeedVelocity() {
        this.form.airSpeedVelocity = this.bird.airSpeedVelocity;

    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    resetForm() {
        this.form = {
        data: {},
        name: '',
        plumage: '',
        airSpeedVelocity: 0
       }
    }
  }
}
</script>
 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
 h1, h2 {
   font-weight: normal;
 }
 ul {
   list-style-type: none;
   padding: 0;
 }
 li {
   display: inline-block;
   margin: 0 10px;
 }
 a {
   color: #42b983;
 }
 </style>
