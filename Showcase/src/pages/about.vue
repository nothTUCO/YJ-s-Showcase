<template>
    <div class="all">
        <div class="top-title">
            <h1>作品展示页</h1>
        </div>
        <div class="nav-list">
            <router-link to="/jd"><button>静态网页</button></router-link>
            <router-link to="/jd"><button>静态网页</button></router-link>
            <router-link to="/jd"><button>静态网页</button></router-link>
            <router-link to="/jd"><button>静态网页</button></router-link>
            <router-link to="/jd"><button>静态网页</button></router-link>
        </div>
        <div class="box">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang='ts' name='about'>

</script>

<style scoped>
.all{
    height: 100vh;
}
.top-title {
    background-image: url('../assets/photos/about.jpg');
    height: 10%;
    display: flex;
    justify-content: center;
    /* text-align: center; */
    
}

.top-title h1 {
    height: 100%;
    font-size: 20px;
    align-items: center;
}

.nav-list {
    background-color: red;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

}
.nav-list router-link{
    /* display: inline-block; */
    border: 1 solid black;
}

.box {
    border: 1px solid black;
    height: 85%;
    width: 100%;
}
</style>