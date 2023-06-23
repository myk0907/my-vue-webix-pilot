<template>
  <!-- 폼을 표시할 div 요소 -->
  <div ref="chart_div"></div>
</template>

<script>
import { ref, watch, onBeforeMount, onMounted } from 'vue';

export default {
  props: {
    // 차트에 사용될 데이터 배열
    chartData: {
      type: Array,
      default: () => []
    },
    // 차트의 종류 (line, bar, radar, pie, donut)
    chartType: {
      type: String,
      default: "line"
    },
    // 차트 ID
    chartId: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
  },
  setup(props) {
    const chart_div = ref(null);

    onBeforeMount(() => {
      // 기존에 생성된 웹릭스(Webix) 컴포넌트가 있을 경우 삭제
      if (window.webix.$$(props.chartId) != undefined) {
        window.webix.$$(props.chartId).destructor();
      }
    });

    onMounted(() => {
      // 컴포넌트가 마운트된 후 init 메서드 호출
      init();
    });

    function init() {
      window.webix.ui({
        container: chart_div.value, // 차트를 표시할 요소
        id: props.chartId,
        view: 'chart', // 차트 뷰 타입
        type: props.chartType, // 차트의 종류 (line, bar, radar, pie, donut)
        value: '#'+props.value+'#', // 차트에서 사용할 값 필드 이름
        label: '#'+props.value+'#', // 차트에서 사용할 레이블 필드 이름
        xAxis: {
          template: '#'+props.label+'#' // X축 레이블 템플릿
        },
        yAxis: {

        },
        data: props.chartData, // 차트에 사용할 데이터
      });
    }

    watch(
      () => props.chartData,
      (newValue) => {
        // chartData 변경되었을 때 실행될 로직
        window.webix.$$(props.chartId).clearAll(); // 기존 테이블 내용 클리어
        window.webix.$$(props.chartId).define("data", newValue); // 데이터 새로 정의
        window.webix.$$(props.chartId).refresh(); // 새로고침
      }
    );

    return {
      chart_div,
      init
    };
  }
};
</script>