<template>
  <div class="home position-relative">
    <!-- HEAD -->
    <b-navbar toggleable="lg" type="white" variant="white" class="navicon">
      <b-navbar-brand href="#">
        <img src="@/assets/img/logo.svg" class="d-inline-block align-top" />
      </b-navbar-brand>
    </b-navbar>
    <div class="steps">
      <b-container class="h-100">
        <b-row align-v="center" class="h-100">
          <b-col cols="4" class="text-center text-green">
            <img src="@/assets/img/icon_done.svg" alt="" />
            確認購物車
            <img
              src="@/assets/img/icon_arrow.svg"
              alt=""
              class="position-absolute"
              style="right:0"
            />
          </b-col>
          <b-col cols="4" class="text-center">
            <img src="@/assets/img/step2.svg" alt="" />
            選擇配送付款方式
            <img
              src="@/assets/img/icon_arrow.svg"
              alt=""
              class="position-absolute"
              style="right:0"
            />
          </b-col>
          <b-col cols="4" class="text-center text-grey">
            <img src="@/assets/img/step3.svg" alt="" />
            確認訂購
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- TITLE -->
    <b-container fluid class="title">
      <b-container class="text-white h-100">
        <b-row class="h-100" align-v="center">
          <b-col cols="3" class="border-left border-white">
            <h1>訂單明細</h1>
            <h5>(JC293016)</h5>
          </b-col>
          <b-col cols="9" class="text-right">
            商品小計&nbsp;NT$ 880&emsp;&emsp;運費&nbsp;NT$ 60&emsp;&emsp;總金額
            &nbsp;
            <h3 class="d-inline">NT$ 940</h3>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container class="mt-3">
      <b-row>
        <b-col cols="6" class="my-3">
          <b-row class="item selected w-100" align-v="center">
            <b-col cols="2">
              <img src="@/assets/img/Group 40.svg" alt="" />
            </b-col>
            <b-col cols="3">
              <img src="@/assets/img/icon_store.svg" alt="" />
            </b-col>
            <b-col cols="7">
              超商取貨 付款 <br />
              <span class="text-grey">24隔日取貨說明</span>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="6" class="my-3">
          <b-row class="item w-100" align-v="center">
            <b-col cols="2">
              <img src="@/assets/img/Ellipse2.svg" alt="" />
            </b-col>
            <b-col cols="3">
              <img src="@/assets/img/icon_card.svg" alt="" />
            </b-col>
            <b-col cols="7">
              信用卡 付款 <br />
              <span class="text-grey">VISA, Master, JCB, 聯合信用卡</span>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="6" class="my-3">
          <b-row class="item w-100" align-v="center">
            <b-col cols="2">
              <img src="@/assets/img/Ellipse2.svg" alt="" />
            </b-col>
            <b-col cols="3">
              <img src="@/assets/img/line_pay.svg" alt="" />
            </b-col>
            <b-col cols="7">
              LINE Pay 付款 <br />
              <span class="text-grey">使用line point折抵消費</span>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="6" class="my-3">
          <b-row class="item w-100" align-v="center">
            <b-col cols="2">
              <img src="@/assets/img/Ellipse2.svg" alt="" />
            </b-col>
            <b-col cols="3">
              <img src="@/assets/img/unionpay.png" alt="" class="w-100" />
            </b-col>
            <b-col cols="7">
              銀聯卡 付款 <br />
              <span class="text-grey">
                支付成功頁面僅為銀聯卡回覆訊息，交易是否完成請需以本商店通知為準
              </span>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="6" class="my-3">
          <b-row class="item w-100" align-v="center">
            <b-col cols="2">
              <img src="@/assets/img/Ellipse2.svg" alt="" />
            </b-col>
            <b-col cols="3">
              <img src="@/assets/img/icon_atm.svg" alt="" class="w-100" />
            </b-col>
            <b-col cols="7">
              Web ATM 付款 <br />
              <span class="text-grey">
                網路銀行ATM操作說明
              </span>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" class="warning text-grey mt-4">
          <ul>
            <li>
              請確認您填寫的資料是否正確，一旦訂單完成後，付款與物流方式皆無法修改。
            </li>
            <li>使用ATM轉帳，將依據銀行入帳日，依序進行出貨/排貨。</li>
            <li>
              每筆訂單所提供的「ATM專屬虛擬帳號」皆不同，若您欲使用本項服務，敬請放心進行匯款作業，安全又便利！
            </li>
            <li>
              若訂單內含預購、無庫存商品調貨時間請參考「商品平均調貨時間」。
            </li>
            <li>若您對取貨或付款的方式有疑問，請詳閱「購買說明」。</li>
            <li>
              請確認您已詳閱並瞭解本站「購買說明」內容，訂單完成即表示您已同意其中的各項說明。
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
.warning {
  font-size: 12px;
}
.text-grey {
  color: #909399;
}
.text-green {
  color: rgb(75, 201, 201);
}
.item {
  height: 120px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
}
.item.selected {
  border: 1px solid #4bc9c9;
  background: #f5f7fa;
}
.steps {
  position: absolute;
  height: 54px;
  width: 70%;
  background: #f5f7fa;
  border-radius: 0px 4px 4px 0px;
  top: 66px;
  left: 15%;
}
.navicon {
  margin-bottom: 27px;
}
.title {
  background-image: linear-gradient(270deg, #82d6d6, #8bc1ef);
  height: 130px;
  padding-top: 27px;
}
</style>

<script>
export default {
  name: "home"
};
</script>
