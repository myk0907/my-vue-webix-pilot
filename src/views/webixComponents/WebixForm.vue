<template>
  <!-- 폼을 표시할 div 요소 -->
  <div ref="form"></div>
</template>

<script>
import { ref, onBeforeMount, onMounted } from 'vue';

export default {
  // 전달받은 데이터
  props: {
    // 폼에 사용될 데이터 배열
    formData: {
      type: Array,
      default: () => []
    },
    // 폼의 고유한 id
    formId: {
      type: String,
      default: ""
    },
  },
  setup(props) {
    const form = ref(null);

    onBeforeMount(() => {
      // 기존에 생성된 웹릭스(Webix) 컴포넌트가 있을 경우 삭제
      if (window.webix.$$(props.formId) != undefined) {
        window.webix.$$(props.formId).destructor();
      }
    });

    onMounted(() => {
      // 컴포넌트가 마운트된 후 init 메서드 호출
      init();
    });

    function init() {
      // 웹릭스(Webix) 폼 초기화
      window.webix.ui({
        id: props.formId, // 폼 id
        container: form.value, // 폼을 표시할 요소
        view: "form", // 폼 뷰 타입
        scroll: false, // 스크롤바 여부
        elements: props.formData, // 폼에 사용될 데이터 요소들
        rules: {
          $obj: function (data) {
            // 이메일 형식 확인
            if (data.email != undefined) {
              const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
              if(!emailRegex.test(data.email)){
                alert("이메일 형식이 올바르지 않습니다.")
                return false;
              } else {
                return true;
              }
            }

            // 비밀번호 확인
            if (data.pass1 != undefined) {
              // 비밀번호가 비어있는지 확인
              if (!data.pass1) {
                alert("비밀번호를 입력해 주세요.");
                return false;
              }
              // 비밀번호가 일치하는지 확인
              if (data.pass1 != data.pass2) {
                alert("비밀번호가 일치하지 않습니다.");
                return false;
              }
              return true;
            }
          }
        },
        elementsConfig: {
          labelPosition: "top" // 레이블 위치 (위쪽)
        }
      });
    }

    return {
      form,
      init,
    };
  }
};
</script>