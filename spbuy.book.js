var ver="11.7.6";function dd(a){indebug&&console.log(a)}function tt(a){document.title=a}function getCookie(a){a+="=";for(var b=decodeURIComponent(document.cookie).split(";"),d=0;d<b.length;d++){for(var c=b[d];" "==c.charAt(0);)c=c.substring(1);if(0==c.indexOf(a))return c.substring(a.length,c.length)}return""}function clickBtn(a){document.querySelectorAll("button").forEach(function(b){(new RegExp(a)).test(b.innerText)&&b.click()})}
function thouand(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function getlocalv(a,b){b=void 0===b?"":b;return localStorage.getItem(a)?localStorage.getItem(a):b}
function run(){if(0<stopkeep)dd("stopkeep");else{dd("run start");var a=setInterval(function(){0<$("._38DBn-._1ylw6p._3a1SMG").length&&(clearInterval(master),clearInterval(a),keepbuy&&(dd("keepbuy"),stopall=0,clearmodal(),setTimeout(function(){stopkeep++},1E3*timelimit),setTimeout(run,1E3)),clickBtn("\u4e0b\u8a02\u55ae"))},10);master=setInterval(launch,5);setTimeout(function(){clearInterval(master);stopall++},1E3*timelimit)}}
function launch(){if(!(0<stopall||0<document.querySelectorAll(".shopee-popup-form").length)){dd("try launch"+document.querySelectorAll("._uyiyo").length);$("button.-z1FfD._2IvuTa").click();var a=setInterval(function(){0<stopall&&clearInterval(a);0<$("._1x7rzD").length&&(dd("voucher modal loaded"),clearInterval(a),setvoucher())},10)}}
function setvoucher(){dd("setvoucher");var a=setInterval(function(){if(0<$(".shopee-popup-form__title").length&&1>$("button.btn-solid-primary--disabled").length){dd("voucher api loaded");if(typemin){if(0<$("div._3tO06v._2oHLwQ:contains('\u6700\u4f4e\u6d88\u8cbb$"+thouand(vcode)+"')").closest(".uKqFae").find("div._22DmGV").length){clearInterval(master);stopall++;1>$("div._3tO06v._2oHLwQ:contains('\u6700\u4f4e\u6d88\u8cbb$"+thouand(vcode)+"')").closest(".uKqFae").find("div._22DmGV._1Vir4l").length&&
$("div._3tO06v._2oHLwQ:contains('\u6700\u4f4e\u6d88\u8cbb$"+thouand(vcode)+"')").closest(".uKqFae").find("div._22DmGV").click();clickBtn("\u597d");return}}else if(0<$("a[href*="+vcode+"]").closest(".uKqFae").find("div._22DmGV").length){clearInterval(master);stopall++;1>$("a[href*="+vcode+"]").closest(".uKqFae").find("div._22DmGV._1Vir4l").length&&$("a[href*="+vcode+"]").closest(".uKqFae").find("div._22DmGV").click();clickBtn("\u597d");return}dd("close voucher modal");clickBtn("\u53d6\u6d88")}clearInterval(a)},
10)}
function addcart(a){fetch("https://shopee.tw/api/v2/item/get?itemid="+prod.itemid+"&shopid="+prod.shopid).then(function(a){return a.json()}).then(function(b){prod.itemname=b.item.name;prod.itemid=b.item.itemid;prod.shopid=b.item.shopid;prod.modelid=0<b.item.models.length?b.item.models.find(function(a){return 0<a.stock}).modelid:null;console.log(prod);postbody={quantity:parseInt(qty),checkout:!0,update_checkout_only:!1,donot_add_quantity:!1,source:'{"refer_urls":[]}',shopid:prod.shopid,itemid:prod.itemid};prod.modelid&&
(postbody.modelid=prod.modelid);fetch("https://shopee.tw/api/v2/cart/add_to_cart",{credentials:"include",headers:{accept:"application/json","accept-language":"zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7","content-type":"application/json","if-none-match-":"55b03-7368423e82746fc7956d93990205342f","sec-fetch-mode":"cors","sec-fetch-site":"same-origin","x-api-source":"pc","x-csrftoken":a,"x-requested-with":"XMLHttpRequest"},referrer:""+srcurl,referrerPolicy:"no-referrer-when-downgrade",body:JSON.stringify(postbody),
method:"POST",mode:"cors"}).then(function(a){return a.json()}).then(function(a){console.log(a);location.href="https://shopee.tw/cart/?itemIds="+prod.itemid+"&shopId="+prod.shopid})});throw 9;}function clearmodal(){0<$(".shopee-popup-form__title").length&&clickBtn("\u53d6\u6d88")}var XCSRFTOKEN=getCookie("csrftoken");
if(/(\-i\.\d+\.\d+)|(product\/\d+\/\d+)/.test(location.href)){var qty=prompt("qty",getlocalv("myqty",1));localStorage.myqty=qty;var delimiter=".",srcurl=window.location.href;/product/.test(srcurl)&&(delimiter="/");var tmpshop=srcurl.split(delimiter);if(1>tmpshop.length)throw"cant find shopid,itemid";var prod={itemid:tmpshop[tmpshop.length-1],shopid:tmpshop[tmpshop.length-2],modelid:null};addcart(XCSRFTOKEN);throw"goto addcart";}
if(/cart/.test(location.href))throw clickBtn("\u53bb\u8cb7\u55ae"),"addcart ok";
if(/checkout/.test(window.location)){var typemin=!1,vcode=prompt(ver+":\u6578\u5b57=\u6700\u4f4e\u6d88\u8cbb, \u4ee3\u78bc=\u6298\u6263\u78bc?",getlocalv("mylastvcode"));if(null===vcode)throw"force quit";/^\d+$/.test(vcode.trim())?typemin=!0:vcode=vcode.trim().toUpperCase();var now=new Date,timemod=now.getHours()/6,stopall=0,stopkeep=0,indebug=!0,keepbuy=!1,worktime="235950";worktime=3.83>timemod?"225950":worktime;worktime=3.66>timemod?"212950":worktime;worktime=3>timemod?"175950":worktime;worktime=
2>timemod?"115950":worktime;worktime=1.6>timemod||10==now.getHours()?"105950":worktime;worktime=prompt("\u958b\u59cb\u6642\u9593HHMM",worktime);if(null===worktime)throw"force quit";var timelimit=prompt("\u57f7\u884c\u5e7e\u79d2","120");1<timelimit.split(" ").length&&(keepbuy=!0,timelimit=timelimit.split(" ")[0]);clearmodal();if(vcode){localStorage.mylastvcode=vcode;tt([vcode,worktime,document.title].join("-"));now=new Date;var timer=new Date(now.getFullYear(),now.getMonth(),now.getDate(),worktime.substr(0,
2),worktime.substr(2,2),worktime.substr(4,2)||0,0)-now;setTimeout(run,timer)||run()}}else alert("\u5207\u63db\u5230\u7d50\u5e33\u5340");
