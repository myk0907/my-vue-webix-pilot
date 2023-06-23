<!-- PageAbout.vue -->
<template>
<div class="about">
    <h1>webix test page(tree)</h1>
    <webixTree :treeData="smalltreedata"/>
</div>
</template>

<script>
import webixTree from './webixComponents/WebixTree.vue';

export default {
  setup() {
    const smalltreedata = [
        {id:"root", value:"Films data", open:true, data:[
        { id:"1", open:true, value:"The Shawshank Redemption", data:[
          { id:"1.1", value:"Part 1" },
          { id:"1.2", value:"Part 2", data:[
            { id:"1.2.1", value:"Page 1" },
            { id:"1.2.2", value:"Page 2" },
            { id:"1.2.3", value:"Page 3" },
            { id:"1.2.4", value:"Page 4" },
            { id:"1.2.5", value:"Page 5" }
          ]},
          { id:"1.3", value:"Part 3" }
        ]},
        { id:"2", open:true, value:"The Godfather", data:[
          { id:"2.1", value:"Part 1" },
          { id:"2.2", value:"Part 2" }
        ]}
      ]}
    ]
    return {
      smalltreedata
    };
  },
  components: {
    webixTree,
  }
};
</script>