<template>
  <div ref="preview"></div>
  <div ref="pager" style="text-align: center;"></div>
</template>

<script>
import { ref, watch, onBeforeMount, onMounted } from 'vue';

export default {
  // 전달받은 데이터
  props: {
    tableListData: {
      type: Array,
      default: () => []
    },
    tableColumns: {
      type: Array,
      default: () => []
    },
    tableId: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const preview = ref(null);
    const pager = ref(null);
    let tabledata;

    onBeforeMount(() => {
      // 기존에 생성된 webix가 있을 경우 삭제
      if (window.webix.$$(props.tableId) != undefined) {
        window.webix.$$(props.tableId).destructor();
      }
    });

    onMounted(() => {
      tabledata = props.tableListData;
      init();
    });

    function init() {
      window.webix.ui({
        container: preview.value,
        id: props.tableId,
        view: 'datatable',
        select: "row", // cell, row
        navigation: true,
        columns: props.tableColumns,
        data: tabledata,
        // resizeColumn: true,
        editable: true,
        editaction: "dblclick",
        yCount: 10,
        scroll: false,
        pager: {
          container: pager.value,
          template: "{common.prev()} {common.pages()} {common.next()}",
          size: 10,
          group: 5
        },
        on: {
          onAfterLoad: function () {
            if (!this.count())
              this.showOverlay("<span>No Data</span>");
            else
              this.hideOverlay();
          }
        }
      });
    }

    // tableListData 변경 감지
    watch(
      () => props.tableListData,
      (newValue) => {
        window.webix.$$(props.tableId).clearAll(); // 기존 테이블 내용 클리어
        window.webix.$$(props.tableId).define("data", newValue); // 데이터 새로 정의
        window.webix.$$(props.tableId).refresh(); // 새로고침
      }
    );

    // tableColumns 변경 감지
    watch(
      () => props.tableColumns,
      (newValue) => {
        console.log('tableColumns 변경됨 : ', newValue);
      }
    );

    return {
      preview,
      pager,
      init
    };
  }
};
</script>