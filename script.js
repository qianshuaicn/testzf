let currentPay=""

const payData={

alipay:{
title:"支付宝打赏",
qr:"images/alipay_qr.jpg",
url:"https://qr.alipay.com/fkx123456"
},

wechat:{
title:"微信打赏",
qr:"images/wechat_qr.jpg",
url:""
},

qq:{
title:"QQ打赏",
qr:"images/qq_qr.jpg",
url:"https://i.qianbao.qq.com/wallet/sqrcode.htm"
}

}


function isWeChat(){
return /MicroMessenger/i.test(navigator.userAgent)
}


function openPay(type){

currentPay=type

const modal=document.getElementById("modal")
const title=document.getElementById("payTitle")
const qr=document.getElementById("qr")
const btn=document.getElementById("openBtn")

title.innerText=payData[type].title
qr.src=payData[type].qr

if(type==="alipay" && isWeChat()){

btn.style.display="none"
title.innerText="请长按二维码使用支付宝扫码"

}else{

btn.style.display="inline-block"
btn.href=payData[type].url

}

modal.style.display="block"

}


function pay(amount){

if(currentPay!=="alipay") return

const scheme=`alipays://platformapi/startapp?appId=09999988&amount=${amount}`

window.location.href=scheme

}


function closeModal(){
document.getElementById("modal").style.display="none"
}


window.onclick=function(e){

if(e.target.id==="modal"){
closeModal()
}

}


if(isWeChat()){
document.getElementById("wechatTip").style.display="block"
}
