jQuery(document).ready(function($) {
document.body.style.backgroundColor= 'red';
	var s, i = 0
s = confirm ("2+2=4 ?");
if (s == true){
	alert("Good!"); i++} 
else alert("No!");
s = confirm ("2 + 3 = 6 ?");
if (s == false){ 
	alert("Good!"); i++}
else alert("No!");
s = prompt("2 + 2 = ?", " ");
if (s == 4){
	alert("Good!"); i++}
else alert("No!");

let k = prompt("Скільки хромосом в здорової людини (Це повинен знати навіть кодер) ?:)", "")
if (k > 46){
	alert('Навіть не знаю що сказати...'); i--;
}	else if (k < 46){
	alert('Правильно, але не зовсім :)'); i--;
}	else if (k == 46){
	alert('Гарні знання !'); ++i
} 
s = prompt('5 + 5 = ?', ' ');
if (s == 10){
	alert('Good!'); i++}
else alert('No!');
alert("Сума ваших балів="+ i);
});