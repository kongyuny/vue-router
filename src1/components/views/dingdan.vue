<template>
  <div>
  <!-- 定义路由插座 -->
    <div class="box">
      <div class="content">
        <section class="status">
          <h3>订单取消<i class=""></i></h3>
          <div>
            <span>订单已取消，如有需要您可以重新下单</span>
            <i>2019-03-05 21:32</i>
          </div>
      </section>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dingdan',
  data(){
    return {

    }
  }
}
</script>
<style scoped>
.box .content {
    width: 100%;
    height: 3.2rem;
    background-image: -webkit-linear-gradient(bottom,#ff9659,#ff6c4f);
     background-image: linear-gradient(0deg,#ff9659,#ff6c4f);
}
.box .content .status h3 {
    font-family: PingFangSC-Semibold;
    font-size: 18px;
    color: #fff;
    letter-spacing: 0;
}
.box .content .status h3 i {
    margin-left: .266667rem;
    display: inline-block;
    width: .186667rem;
    height: .32rem;
    background: url(//gfs11.gomein.net.cn/T1ioW_BgWv1RCvBVdK.png) no-repeat;
    background-size: 100%;
    vertical-align: middle;
}
.box .content .status {
    padding: .533333rem .4rem .266667rem;
}
.box .content .status div {
    display: -webkit-box;
    /* display: -webkit-flex; */
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: .213333rem;
}
.box .content .status div span {
    font-family: PingFangSC-Semibold;
    font-size: 12px;
    color: #fff;
    letter-spacing: 0;
    width: 6.346667rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.box .content .status div i {
    font-family: PingFang-SC-Medium;
    font-size: 11px;
    color: #fff;
    letter-spacing: 0;
    font-style: normal;
}
</style>
