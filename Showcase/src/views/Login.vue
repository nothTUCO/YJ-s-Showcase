<template>
<div class="login-page">
    <div class="form">
        <div class="form_warp">
            <el-form
                ref="formRef"
                :model="loginData"
                label-width="100px"
                class="demo-dynamic"
                >
                <el-form-item
                    prop="username"
                    label="用户名"
                    :rules="[{
                        required: true,
                        message: '此项为必填项',
                        trigger: 'blur',
                        },]"
                        >
                    <el-input v-model="loginData.username" />
                </el-form-item>
                <el-form-item
                    prop="password"
                    label="密码"
                    :rules="[{
                        required: true,   
                        message: '此项为必填项',
                        trigger: 'blur',
                        },]"
                            >
                    <el-input type="password" v-model="loginData.password" />
                </el-form-item>
            </el-form>
            <el-button type="primary" class="login_button" @click="handleLogin">登录</el-button>
</div>
</div>
</div>
</template>
<script>
import { reactive,toRefs } from "vue";
import { useStore } from 'vuex'
import {useRouter} from 'vue-router'
export default{
    name:'login',
    setup(){
        const store=useStore()
        const router=useRouter()
        const count=store.state.count
        const data=reactive({
            loginData:{
                username:'',
                password:'',
            },
                num:count,
                
        })
        const handleLogin=()=>{
            // data.loginData
            store.commit('setUserInfo',data.loginData)
            localStorage.setItem('loginData',JSON.stringify(data.loginData))
            // 跳转到/user
            router.push({
                path:'/home'
            })
        }
        return{
           ...toRefs(data),
           handleLogin
        }
    }
}
</script>
<style>
.login-page{
    margin:0;
    padding: 0;
    background-image: url(../assets/photos/login.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    background-attachment: fixed;
}
.form{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
}
.form_warp{
    position: fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%) ;
    background:rgb(247, 245, 245,0.7) ;
    padding: 30px 50px;
    border-radius:5px ;
}
.login_button{
    display: block;
    margin: 10px auto;
}
</style>