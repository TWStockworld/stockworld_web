<template>
    <nav>
        <router-link to="/home">
            <div class="group1">
                <a>
                    <span class="txt">学部・学科
                        <span class="bar" style="left: auto; right: 0px;">
                        </span>
                    </span>
                </a>
            </div>
        </router-link>
        
        <router-link to="/calculate">
            <div class="group1">
                <a>
                    <span class="txt">入試情報
                        <span class="bar" style="left: auto; right: 0px;">
                        </span>
                    </span>
                </a>
            </div>
        </router-link>

        <router-link to="/pm25">
            <div class="group1">
                <a>
                    <span class="txt">イベント情報
                        <span class="bar" style="left: auto; right: 0px;">
                        </span>
                    </span>
                </a>
            </div>
        </router-link>

        <router-link to="/aboutstock">
            <div class="group1">
                <a>
                    <span class="txt">キャンパスライフ
                        <span class="bar" style="left: auto; right: 0px;">
                        <!--為甚麼沒有width才會有黑色底線-->
                        </span>
                    </span>
                </a>
            </div>
        </router-link>

        <router-link to="/headertest">
            <div class="group1">
                <a>
                    <span class="txt">スペシャル
                        <span class="bar" style="left: auto; right: 0px;">
                        </span>
                    </span>
                </a>
            </div>
        </router-link>
    </nav>
</template>

<script>
</script>

<style>

/* .group1 {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: 0 0;
} */
.txt {
  position: relative;
  display: block;
}

.bar {
    display: block;
    background-color: #000;
    height: 5px;
    position: absolute;
    bottom: -10px;
    margin: auto;
    width: 0%;
}
nav a :hover .bar {
  width: 100%;
  transition: all 1s linear;
}

a {
  text-decoration: none;
  color: #000000;
  font-weight: 700;
  font-size: 14px;
  line-height: 60px;
  
}
nav {
  border-bottom: 2px solid;
  padding: 10px;
  background-color: white;
}

nav a {
  display: inline-block;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #000000;
}

nav a.router-link-exact-active {
  color: #000000;
}

</style>