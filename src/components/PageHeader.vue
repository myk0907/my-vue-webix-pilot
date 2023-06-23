<!-- PageHeader.vue -->
<template>
    <header>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">webix-table/chart</router-link> |
        <router-link to="/test">webix-form</router-link> |
        <router-link to="/test2">webix-tree</router-link> |
        <!-- <router-link to="/board/list">게시판</router-link> -->
      </div>
    </header>
    <hr/>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
    #nav {
      text-align: center;

    }
  </style>