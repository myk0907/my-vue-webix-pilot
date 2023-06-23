<template>
  <div class="about">
    <div id="test">
      <h1>This is an about page</h1>
      <button @click="updateData">데이터 바꾸기</button>
      <webixTable tableId="tableTest1" :tableListData="tableListData" :tableColumns="tableColumns"/>
      <webixChart chartId="chartId1" :chartData="tableListData" chartType="line" value="age" label="name" style="height: 400px;"/>
      <webixChart chartId="chartId2" :chartData="chartData" chartType="bar" value="value" label="label" style="height: 400px;"/>
      <webixChart chartId="chartId3" :chartData="chartData" chartType="radar" value="value" label="label" style="height: 400px;"/>
      <webixChart chartId="chartId4" :chartData="chartData" chartType="pie" value="value" label="label" style="height: 400px;"/>
      <webixChart chartId="chartId5" :chartData="chartData" chartType="donut" value="value" label="label" style="height: 400px;"/>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import webixTable from './webixComponents/WebixDatatable.vue';
import webixChart from './webixComponents/WebixChart.vue';

let cnt = 0;

export default {
  setup() {
    const ageData = [];
    onBeforeMount(() => {
      for (let i = 1; i < 100; i++) {
        ageData.push(i);
      }
      tableColumns[2].collection = ageData;
    });

    const tableListData1 = [
      { id: 1, name: 'John Doe', age: 25 },
      { id: 2, name: 'Jane Smith', age: 30 },
      { id: 3, name: 'ABC', age: 26 },
      { id: 4, name: 'DEF', age: 29 },
      { id: 5, name: 'GHI', age: 8 },
      { id: 6, name: 'JKL', age: 45 },
      { id: 7, name: 'MNO', age: 56 },
      { id: 8, name: 'PQR', age: 14 },
      { id: 9, name: 'STU', age: 44 },
      { id: 10, name: 'VWX', age: 51 },
      { id: 11, name: 'YZ', age: 7 },
      { id: 12, name: '가나다', age: 17 },
      { id: 13, name: '라마바', age: 23 },
      { id: 14, name: '사아자', age: 35 },
      { id: 15, name: '차카타', age: 30 },
      { id: 16, name: '파하하', age: 33 },
      { id: 17, name: '하나', age: 13 },
      { id: 18, name: '둘', age: 14 },
      { id: 19, name: 'Bob Johnson', age: 35 }
    ]

    const tableListData2 = [
      { id: 1, name: '안녕', age: 25 },
      { id: 2, name: '하이하이', age: 30 },
      { id: 3, name: '호호', age: 26 },
      { id: 4, name: '히히', age: 29 },
      { id: 5, name: '하하', age: 8 },
    ];

    const chartData = [
      { value: 20, label: 'Item 1' },
      { value: 30, label: 'Item 2' },
      { value: 15, label: 'Item 3' },
      { value: 25, label: 'Item 4' },
      { value: 10, label: 'Item 5' }
    ];

    const tableListData = ref(tableListData1);
    
    const tableColumns = [
      { id: 'id', header: 'ID', fillspace: true },
      { id: 'name', header: 'Name', editor: 'text', fillspace: true },
      { id: 'age', header: 'Age', editor: 'richselect', collection: ageData, fillspace: true }
    ];
    
    function updateData() {
      if (cnt % 2 === 0) {
        tableListData.value = tableListData2;
      } else {
        tableListData.value = tableListData1;
      }
      cnt += 1;
      console.log(tableListData)
    }

    return {
      tableListData,
      tableColumns,
      chartData,
      ageData,
      updateData
    };
  },

  components: {
    webixTable,
    webixChart
  }
};
</script>