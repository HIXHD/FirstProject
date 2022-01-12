/*for(let i=1; i<=30; i+=5)
    alert(i);
 */

/*const streets = ['jakas','dzbanow','głąbów','jp'];
for(let i=0; i<streets.length; i++)
    alert(streets[i]);*/

const shoeSize = [37,38,39,40,41,42];
let n=false; k=false;
const colorsOfShoes=['red','blue','orange','black'];
let answerColor = prompt('jaki chcesz kolor');
let answerSize = prompt('jaki chcesz rozmiar buta');
for(let i = 0; i < colorsOfShoes.length; i++)
    if(colorsOfShoes[i] === answerColor) n = false;
for(let i = 0; i < shoeSize.length; i++)
    if(shoeSize[i] === +answerSize) k = true;
if(n && k) alert('mamy twoj kolor i rozmiar')
if(n && !k) alert('mamy twoj kolor ale rozmiar uz ni')
if(n==false && k==true) alert('mamy twoj rozmiar ale koloru ni')
if(n==false && k==false) alert('nie ma ani rozmiaru ani koloru')
