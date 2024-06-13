<template>
<div class="home-page">
    <header>
        <a class="logo"><img src="../assets/photos/logo.png" alt="logo"></a>
        <nav class="nav-list">
            <ul class="nav-ul">
                <li class="nav-li">Home</li>
                <li class="nav-li">About</li>
                <li class="nav-li">Contact</li>
            </ul>
        </nav>
    </header>
    <h1>Hello World</h1>
    <div class="content">
        <p>Welcome to Neo-Elysium, where classical architecture meets cyberpunk aesthetics. Explore marble columns with neon lights and cobblestone streets with high-tech paths.</p>
        <p>The city blends past and future, offering unique experiences and a diverse community of artists and engineers.</p>
        <p>Be cautious; shadows lurk amidst the beauty. Embrace the harmony of the ancient and futuristic. Welcome, and enjoy your journey.</p>
    </div>
        <!-- 轮播效果 -->
    <div class="carousel-box">
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in arrImg" :key="item">
                <el-image :src="getImagePath(item)" class="carousel-image"></el-image>
            </el-carousel-item>
        </el-carousel>    
    </div>
    <!-- 轮播效果 -->
    <Router-Link to="/">回到登录</Router-Link>
</div>
</template>
<script>
import photo1 from "@/assets/photos/1.png";
import photo2 from "@/assets/photos/2.png";
import photo3 from "@/assets/photos/3.png";
import photo4 from "@/assets/photos/4.png";

export default {
    data() {
        return {
            arrImg: [
                photo1,
                photo2,
                photo3,
                photo4
            ]
        };
    },
    methods: {
        getImagePath(image) {
            return image;
        }
    }
};
</script>
<style>

.home-page{
    margin:0;
    padding:0;
    background-image: url(../assets/photos/first.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    background-attachment: fixed;
}
header{

    display:flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(249, 246, 246,0.5);
    height:72px;
}
h1{
    font-size: 50px;
    font-style:oblique;
    color: rgba(48, 1, 34, 0.9);
    margin: 0;
    padding: 0;
    padding-left: 10%;
}
.content{
            width: 40%;
            padding: 20px;
            font-family: Arial, sans-serif;
            color: rgba(206, 17, 172, 0.8);
            font-weight:bold;
            margin: 0;
            padding: 0;
}
.content p{
    text-indent: 2em;
    margin-top: 3px;
    padding-left: 2px;
}
.logo img{
    width:auto;
    height:auto;
    margin: 0;
    /* overflow: hidden; */
    opacity: 0.6;
    height: 100%;
}
.nav-list {
    display: flex;
    flex-grow: 1;
    height:100%;
}
.nav-ul{
    margin: 0;
    padding:0;
    list-style-type: none;
    display:flex;
    width:100%;
    height:100%;
}
.nav-li{
    display: flex;
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    flex-grow: 1;
    padding: 15px; /* 调整 padding 来适应更大的可点击区域 */
    text-align: center;
    transition: background-color 0.3s; 
    height:100%;
    box-sizing: border-box; /* 确保 padding 不会影响高度 */
    font-size: 25px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
.nav-li:hover{
    background-color:rgb(231, 200, 200,0.5);
    height: 100%;
}
@media (max-width: 768px) {
    .nav-list {
        display: none; /* 隐藏导航列表 */
    }
    .menu-toggle {
        display: block;
    }
}
/* 轮播图效果 */
.carousel-box{
    width: 40%;
    height: 50%;
}
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* 轮播图效果 */
</style>