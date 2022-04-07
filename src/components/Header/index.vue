<template>
  <div>
    <header class="header">
      <!-- 头部的第一行 -->
      <div class="top">
        <div class="container">
          <div class="loginList">
            <p>尚品汇欢迎您！</p>
            <p>
              <span>请</span>
              <router-link to="/login">登录</router-link>
              <router-link to="/register" class="register"
                >免费注册</router-link
              >
            </p>
          </div>
          <div class="typeList">
            <a href="###">我的订单</a>
            <a href="###">我的购物车</a>
            <a href="###">我的尚品汇</a>
            <a href="###">尚品汇会员</a>
            <a href="###">企业采购</a>
            <a href="###">关注尚品汇</a>
            <a href="###">合作招商</a>
            <a href="###">商家后台</a>
          </div>
        </div>
      </div>
      <!--头部第二行 搜索区域-->
      <div class="bottom">
        <h1 class="logoArea">
          <router-link class="logo" title="尚品汇" to="/home">
            <img src="./images/logo.png" alt="" />
          </router-link>
        </h1>
        <div class="searchArea">
          <form action="###" class="searchForm">
            <input
              type="text"
              id="autocomplete"
              class="input-error input-xxlarge"
              v-model="keyWords"
            />
            <button
              class="sui-btn btn-xlarge btn-danger"
              type="button"
              @click="goSearch"
            >
              搜索
            </button>
          </form>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyWords: "",
    };
  },
  methods: {
    goSearch() {
      //路由传递参数
      // 1、es5写法
      // this.$router.push(
      //   "/search/" + this.keyWords + "?k=" + this.keyWords.toUpperCase()
      // );

      // 2、es6写法
      // console.log(this.keyWords);
      // this.$router.push(
      //   `/search/${this.keyWords}?k=${this.keyWords.toUpperCase()}`
      // );
      // 3、对象写法
      this.$router.push({
        name: "search",
        params: { keyword: this.keyWords },
        query: { k: this.keyWords.toUpperCase() },
      });
      // console.log(this);
      // console.log(this.$router);
      /******************************************** */
      // 路由传参面试题
      // 1、路由传递参数（对象写法），path是否可以结合params一起使用？
      // 答：能跳转，但是获取不到params参数
      // 2、如何制定params参数可传不可传
      // 答：在path路径后面加'?'
      // 3、params参数可以传递也可以不传递，但是如果是空串，如何解决？（空串不会显示search）
      //       this.$router.push({
      //   name: "search",
      //   params: { keyword: "" || undefined },
      //   query: { k: this.keyWords.toUpperCase() },
      // });
      // 4、路由组件能不能传递props参数？(可以，有三种方式)
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>