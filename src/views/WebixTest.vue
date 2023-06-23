<!-- PageAbout.vue -->
<template>
<div class="about">
    <h1>webix test page(form)</h1>
    <div>
      <div class="group_row" style="width: 40%;">
        <webixForm :formData="form" formId="formTest1" />
      </div>
      <div class="group_row" style="width: 40%;">
        <webixForm :formData="form1" formId="formTest2" />
      </div>
    </div>
</div>
</template>

<script>
import webixForm from './webixComponents/WebixForm.vue';

export default {
  setup() {
    const form = [
      { view:"text", label:"Username", name:"name", placeholder:"(John Smith)", bottomLabel:"* spaces are allowed"},
      { view:"text", label:"E-mail address", name:"email", placeholder:"(abc@defgh.com)"},
      { view:"text", type:"password", label:'비밀번호', name:"pass1",
        bottomPadding:35, bottomLabel:"* The password must have at least 6 characters" },
      { view:"text", type:"password", label:'비밀번호 확인', name:"pass2" },
      { view:"button", align: "center", value:"비밀번호 확인", 
        click:function(){this.getParentView().validate();}
      },
      {
        view:"checkbox", 
        name: "checkbox",
        labelRight:"동의", 
        labelWidth:0, 
        value:1, 
      },
      {
        view:"radio",
        label:"Filter",
        name: "radio",
        required:true,
        labelPosition:"top",
        options:[
          { id:"1", value:"Disabled" }, 
          { id:"2", value:"Enabled" }, 
          { id:"3", value:"Per column" },
          { id:"4", value:"A" },
          { id:"5", value:"B" },
        ],
        value:"1"
      },
      { 
        view:"switch",
        name: "switch1",
        label:"Light", 
        labelWidth:60,
        labelRight:"Darkness",
        value:1
      },
      { 
        view:"switch",
        name: "switch2",
        label:"Theme", 
        labelWidth:60,
        value:0,
        onLabel:"DARK",
        offLabel:"LIGHT"
      },
      { 
        view:"combo", 
        label: 'Fruit',  
        name:"fruit",
        value:1,
        options:[ 
          { id:1, value:"Banana" },
          { id:2, value:"Papaya" }, 
          { id:3, value:"Apple" }
        ]
      },
      { 
        view:"combo", 
        label: 'Fruit',  
        name:"fruit1",
        value:1,
        options:[ 
          { id:1, value:"Banana" },
          { id:2, value:"Papaya" }, 
          { id:3, value:"Apple" }
        ]
      },
      { 
        view:"combo", 
        label: 'Fruit',  
        name:"fruit2",
        value:2,
        options:[ 
          { id:1, value:"Banana" },
          { id:2, value:"Papaya" }, 
          { id:3, value:"Apple" }
        ]
      },
      { view:"button", align: "center", value:"Submit data", 
        click: handleSubmit
      }
    ]
    const form1 = [
        { view:"text", label:'Login', name:"login" },
        { view:"text", label:'Email', name:"email" },
        { view:"button", css:"webix_primary",
          value: "Submit",
          click: handleLogin
        }
    ]

    function handleSubmit() {
      // webixForm에 있는 유효성 검사(rules) 진행
      if(this.getParentView().validate()){
        const formData = window.webix.$$("formTest1").getValues();
        console.log("받은 데이터?: ", formData)
      }

    }

    function handleLogin() {
      const formData2 = window.webix.$$("formTest2").getValues();
      const loginId = formData2.login;
      const loginEmail = formData2.email;
      if(loginId == "hi" && loginEmail == "mmm@aaa"){
        alert("로그인되었습니다.")
      } else {
        alert("아이디 혹은 이메일이 올바르지 않습니다.")
      }
    }

    return {
      form,
      form1,
      handleLogin,
      handleSubmit
    }
  },

  components: {
    webixForm,
  }
};
</script>