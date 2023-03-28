<template>
  <div class="overlay">

    <el-form ref="formRef" :model="numberValidateForm" class="demo-ruleForm">
      <header class="head-form">
        <h2>Log In</h2>
        <p>login here using your username and password</p>
      </header>
      <el-form-item class="from-item" prop="userName" :rules="[
        { required: true, message: 'userName is required' },
      ]">
        <el-input v-model="numberValidateForm.userName" type="text" autocomplete="off" placeholder="UserName" />
      </el-form-item>
      <el-form-item class="from-item" prop="passWord" :rules="[
        { required: true, message: 'passWord is required' },
      ]">
        <el-input v-model="numberValidateForm.passWord" type="password" autocomplete="off" placeholder="passWord"
          show-password />
      </el-form-item>
      <el-form-item class="from-item">
        <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
        <!-- <el-button @click="resetForm(formRef)">Reset</el-button> -->
      </el-form-item>
    </el-form>


    <!-- <form>
      <div class="con">
        <header class="head-form">
          <h2>Log In</h2>
          <p>login here using your username and password</p>
        </header>
        <div class="field-set">
          <div class="input-body">
            <div class="icon-body"></div>
            <input class="form-input" v-model="input" type="text" placeholder="UserName" required>
          </div>
          <div class="input-body">
            <div class="icon-body"></div>
            <input class="form-input" type="password" v-model="password" placeholder="Password"  name="password"
              required>
          </div>
          <button class="log-in">Log In</button>
        </div>

        <div class="other">
          <button class="btn submits frgt-pass">Forgot Password</button>
          <button class="btn submits sign-up">Sign Up
            <i class="fa fa-user-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </form> -->
  </div>
</template>
<script setup lang='ts'>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()

const numberValidateForm = reactive({
  userName: '',
  passWord: ''
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}




let input = '' as any
let password = '' as any
function show() {
  var p: any = document.getElementById('pwd')
  p.setAttribute('type', 'text')
}

function hide() {
  var p: any = document.getElementById('pwd')
  p.setAttribute('type', 'password')
}



</script>
<style lang="scss">
.overlay {
  .el-input {
    &>.el-input__wrapper {
      padding-left: 30px !important;
      // &:focus{
        // transform: translateX(-19px);
      // }
    }
  }
}
</style>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Abel|Abril+Fatface|Alegreya|Arima+Madurai|Dancing+Script|Dosis|Merriweather|Oleo+Script|Overlock|PT+Serif|Pacifico|Playball|Playfair+Display|Share|Unica+One|Vibur');

.overlay {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-45deg, #000000 50%, #92e1ea 50%);
  background-attachment: fixed;
  background-repeat: no-repeat;
  font-family: 'Vibur', cursive;
  font-family: 'Abel', sans-serif;
  opacity: .95;
  position: relative;

  form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    min-height: 500px;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
    background-image: linear-gradient(-225deg, #000000 50%, #92e1ea 50%);

    .from-item {
      width: 254px;
      margin: 0px auto 20px auto;

      .el-input {
        height: 50px;

        &>.el-input__wrapper {
          padding-left: 30px !important;
        }
      }
    }
  }
}

header {
  text-align: center;
  color: white;

  h2 {
    font-size: 250%;
    font-family: 'Playfair Display', serif;
  }

  p {
    letter-spacing: 0.05em;
  }
}


// .con {
//   display: -webkit-flex;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }




// #eye {
//   background: #fff;
//   color: #333;
//   margin: 5.9px 0 0 0;
//   margin-left: -20px;
//   padding: 15px 9px 19px 0px;
//   border-radius: 0px 5px 5px 0px;
//   float: right;
//   position: relative;
//   right: 1%;
//   top: -.2%;
//   z-index: 5;
//   cursor: pointer;
// }

// .input-body {
//   padding-left: 30px;
//   width: fit-content;
//   height: fit-content;
//   margin-top: 10px;
//   background-color: white;
//   border-radius: 5px;

//   .form-input {
//     width: 220px;
//     height: 50px;
//     font-size: 16px;
//     font-family: 'Abel', sans-serif;
//     color: #5E6472;
//     outline: none;
//     border: none;
//     border-radius: 0px 5px 5px 0px;
//     transition: 0.2s linear;
//     border-color: transparent;

//     &:focus {
//       transform: translateX(-4px);
//     }
//   }
// }

// /* inputs form  */

// // button {
// //   display: inline-block;
// //   color: #252537;
// //   width: 254px;
// //   height: 50px;
// //   padding: 0 20px;
// //   background: #fff;
// //   border-radius: 5px;
// //   outline: none;
// //   border: none;
// //   cursor: pointer;
// //   text-align: center;
// //   transition: all 0.2s linear;
// //   margin: 7% auto;
// //   letter-spacing: 0.05em;

// //   &:hover {
// //     transform: translatey(3px);
// //     box-shadow: none;
// //     animation: ani9 0.4s ease-in-out infinite alternate;
// //   }
// // }

// .submits {
//   width: 48%;
//   display: inline-block;
//   margin-left: 2%;
// }

// .frgt-pass {
//   background: transparent;
// }

// .sign-up {
//   background: #000000;
//   color: white;
// }


// @keyframes ani9 {
//   0% {
//     transform: translateY(3px);
//   }

//   100% {
//     transform: translateY(5px);
//   }
// }
</style>