<template>
  <div class="home">
  这是后台管理页面

  <el-table
    :data="tableData"
    border:none
    style="width: 100%">
    
    <el-table-column
      prop="id"
      label="id"
      width="120">
    </el-table-column>

    <el-table-column
      prop="loginName"
      label="用户名"
      width="120">
    </el-table-column>

    <el-table-column
      prop="name"
      label="网名"
      width="120">
    </el-table-column>
    
    <el-table-column
      prop="password"
      label="密码"
      width="120">
    </el-table-column>

  </el-table>
  </div>
  
</template>

<script>

  export default {
    name:"HomeView",
    created(){
      // this.axios.post('http://127.0.0.1:8081/sys-user/ppp').then((resp)=>
      //前端开全局代理
      this.axios.post('/api/sys-user/ppp').then((resp)=>
        {

          let data=resp.data
            if(data.success){
              console.log(data)
           this.tableData=resp.data.content
          
            // this.tableRowClassName.length=this.data1.content.lengthss
              // console.log(ss)
              // for(let i=0;i<ss;i++){
              //   this.tableData[i].loginname=this.data1.content[i].loginName
              //   this.tableData[i].name=this.data1.content[i].name
              // }

            
            }
        });
       
    },
    data() {
      return {
        tableData:""
      }
    }

  }
</script>