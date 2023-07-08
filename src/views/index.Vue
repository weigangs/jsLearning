<template>
   <div >
    <el-form :model='form' ref='myForm'>
      <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>以委托取代继承</span>
    <el-button style="float: right; padding: 3px 0" type="text" icon='el-icon-right' @click='goDelegate'>详情</el-button>
  </div>
  <div v-for="o in delegateList" :key='o' class="text item">
    {{o.label }}
  </div>
</el-card>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      delegateList: [
        {
          value: '1',
          label: '创建EuropeanSwallowDelegate'
        }, {
          value: '2',
          label: '创建AfricanSwallowDelegate'
        }, {
          value: '3',
          label: '创建NarrowEuropeanSwallowDelegate'
        }
      ],
      form: {
        deptName: '',
        status: ''
      }
    }
  },
  created () {

  },

  methods: {

    goDelegate () {
      this.$router.push('/delegate')
    },

    reset () {
      this.form = {
        deptName: '',
        status: ''
      }
      this.resetForm('form')
    },

  }

}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
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
