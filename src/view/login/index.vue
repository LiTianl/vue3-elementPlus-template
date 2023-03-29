<template>
  <div class="overlay">
    <el-form ref="formRef" :model="numberValidateForm" class="demo-ruleForm" >
      <header class="head-form">
        <h2>Log In</h2>
        <p>login here using your username and password</p>
      </header>
      <el-form-item class="from-item" prop="userName" :rules="[
        { required: true, message: 'userName is required' },
      ]">
        <el-input v-model="numberValidateForm.userName" type="text" autocomplete="off" placeholder="admin or editor" />
      </el-form-item>
      <el-form-item class="from-item" prop="passWord" :rules="[
        { required: true, message: 'passWord is required' },
      ]">
        <el-input v-model="numberValidateForm.passWord" type="password" autocomplete="off" placeholder="123456"
          show-password />
      </el-form-item>
      <el-form-item class="from-item">
        <el-button class="login" @click="submitForm(formRef)" v-loading="loading">log in</el-button>
      </el-form-item>
      <el-form-item class="from-item-ots">
        <el-button class="btn submits frgt-pass">Forgot Password</el-button>
        <el-button class="btn submits sign-up">Sign Up </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang='ts'>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { userAccount } from '../../pinia/modules'
import { useRouter } from 'vue-router'

const formRef = ref<FormInstance>()
const store = userAccount()
const router = useRouter()

const loading = ref(false)
const numberValidateForm = reactive({
  userName: 'admin',
  passWord: '123456'
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  loading.value = true
  formEl.validate(async (valid) => {
    if (valid) {
      store.log_in(numberValidateForm).then((res: any) => {
        if (res.code === 200) {
          router.push({ path: router.currentRoute.value.query.redirect as string || '/' })
          ElMessage.success('Log in Success')
        } else {
          ElMessage.error(res.message)
        }
        loading.value = false
      })
    } else {
      console.log('error submit!')
      loading.value = false
      return false
    }
  })
}
</script>
<style lang="scss">
.overlay {
  .el-input {
    &>.el-input__wrapper {
      padding-left: 30px !important;

      .el-input__inner {
        transition: transform 0.2s linear;

        &:focus {
          transform: translateX(-6px);
        }
      }
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
      margin: 0px auto 18px auto;

      .el-input {
        height: 50px;

        &>.el-input__wrapper {
          padding-left: 30px !important;
        }
      }

      .login {
        height: 50px;
        width: 100%;
      }
    }

    .from-item-ots {
      width: 254px;
      margin: 0px auto 18px auto;

      .submits {
        width: 48%;
        display: inline-block;
        margin-left: 2%;
      }

      .frgt-pass {
        background: transparent;
        white-space: inherit;
      }

      .sign-up {
        background: #000000;
        color: white;
      }
    }
  }
}

header {
  text-align: center;
  color: white;
  margin: 10% auto 6%;

  h2 {
    font-size: 250%;
    font-family: 'Playfair Display', serif;
    margin: 0;
  }

  p {
    letter-spacing: 0.05em;
    margin: 0;
  }
}

button {
  display: inline-block;
  color: #252537;
  width: 254px;
  height: 50px;
  background: #fff;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s linear;
  letter-spacing: 0.05em;

  &:hover {
    transform: translatey(3px);
    box-shadow: none;
  }
}
</style>