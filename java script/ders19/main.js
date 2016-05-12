// console.log(5*5>24&&5!=6);
// console.log(5*5>24&&5==6);

// console.log(5*5>24||5==6);

// console.log(null||null||5*5>30);
// console.log(null||null||'shefteli');
// console.log('karl'||'user');


//2-ci

// var x=30;
// console.log("the value of x is",x);

// var en_boyuk=Math.min(2,8,10,5);
// console.log(en_boyuk*100);
// 3-cu
// alert("sur emoglu!");

// confirm("sur sur");
// prompt("ne isdiyirsen yaz","...");

// var reqem=prompt("reqem yaz :", "");
// var kv=reqem * reqem/2;
// alert("girdiyiniz ededin kv :" + kv);
// 4-cu
// var reqem=prompt('reqem yaz :' , '');
// if(reqem>=18)

// alert('imtahana gire bilersen');
// 5ci
// var number=prompt('reqemi girin : ','');

// if(number <= 10) {
// 	var netice= number * number ;
// 	var novu= ' Girdiyiniz reqem 10- dan balacadir ve reqem= ' +number;
// }
// else{
// 	var netice= number * number * number;
// 	var nov='Girdiyiniz reqem 10-dan boyukdur ve reqem = '+number
// }
// console.log(novu+ 'neticesi : '+netice);
// 6-ci
 // var netice=prompt('sur');
// if(netice < 35){
// 	console.log('get ishinle meshgul ol');
// }
// if(netice >35 && netice <=60 ){
// 	console.log('babat yoo ');
// }
// if(netice >60 && netice <=85){
// 	console.log('tekniyin iyi amma gelishdirmen lazim');
// }
// if(netice >85 && netice <= 100){
// 	console.log(' ejdahasan ');
// }

// if(netice >=0 && netice <= 100){

// }else{

// }


// 	console.log('ay qa shitddeshme');
// 7-ci
var g=prompt('ishlediyiniz gunu girin :' ,'');

if(g > 0 && g <= 31){
	var gg=prompt('Gunluk qazancinizi girin :', '');
	var bt=g * gg;
	if(bt < 1000){
		var fa=bt * 0.2;
	}
else{
	var fa=bt * 0.25;
}
var ng = bt -fa ;
console.log('Sizin ayliq net qazanciz :'+ ng + 'AZN-dir');
}else{
	console.log('Girdiyiniz gun sayi sertleri odemir');
}