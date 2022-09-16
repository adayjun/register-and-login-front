<template>
  <div class="about">
    <h1>This is an about page</h1>
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
