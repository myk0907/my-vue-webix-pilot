<template>
  <!-- 트리를 표시할 div 요소 -->
  <div ref="tree"></div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  // 전달받은 데이터
  props: {
    // 트리에 사용될 데이터 배열
    treeData: {
      type: Array,
      default: () => []
    },
    // 트리의 고유한 id
    treeId: {
      type: String,
      default: ""
    },
  },
  setup(props) {
    const tree = ref(null);

    onMounted(() => {
      // 컴포넌트가 마운트된 후 init 메서드 호출
      init();
    });

    function init() {
      // 웹릭스(Webix) 트리 초기화
      window.webix.ui({
        id: props.treeId, // 트리의 고유한 id
        container: tree.value, // 트리를 표시할 요소
        rows: [
          {
            cols: [
              {
                view: "tree", // 트리 뷰 타입
                select: true, // 선택 가능 여부
                ready: function () {
                  this.select("1.2"); // 초기 선택 설정
                },
                data: window.webix.copy(props.treeData) // 트리에 사용될 데이터
              },
              {
                view: "tree", // 트리 뷰 타입
                type: "lineTree", // 트리의 타입 설정
                select: true, // 선택 가능 여부
                ready: function () {
                  this.select("1.2"); // 초기 선택 설정
                },
                data: window.webix.copy(props.treeData) // 트리에 사용될 데이터
              }
            ]
          }
        ]
      });
    }

    return {
      tree,
      init
    };
  }
};
</script>