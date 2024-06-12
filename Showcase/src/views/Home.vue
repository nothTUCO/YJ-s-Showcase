<template>
<div class="all">
    <header>
        <a class="logo"><img src="../assets/logo.png" alt="logo"></a>
        <nav class="nav-list">
            <ul class="nav-ul">
                <li class="nav-li">Home</li>
                <li class="nav-li">About</li>
                <li class="nav-li">Contact</li>
            </ul>
        </nav>
    </header>
    <h1>Hello World</h1>
</div>
</template>
<script>

</script>
<style>
body{
    margin:0;
    padding: 0;
    background-image: url(../assets/first.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
}
header{

    display:flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(249, 246, 246,0.5);
    height:72px;
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
/* 
.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 10px;
}

.bar {
    height: 3px;
    width: 25px;
    background-color: #333;
    margin: 4px 0;
}

.show-nav .nav-list {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 72px;
    left: 0;
    width: 100%;
    background-color: rgba(249, 246, 246, 0.9); /* 背景色稍微深一点 */
/* }

.show-nav .nav-li {
    padding: 15px 0; /* 调整padding */
/* } */ 
</style>