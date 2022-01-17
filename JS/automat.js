class automat {
    ser = 0;
    peperoni = 0;
    krewetki = 0;
}
pizza=new automat;
pizza.ser=parseInt(prompt('podaj ilość sera do pizzy max 100% z calosci(ser, peperoni, krewetki )'));
pizza.peperoni=parseInt(prompt('podaj ilość pepperoni do pizzy zostało z 100%' ));
pizza.krewetki=parseInt(prompt('podaj ilość krewetek do pizzy w %'));
let rak=(pizza.ser + pizza.peperoni + pizza.krewetki);

if(rak>100)
    alert('przekroczono dopuszczalną ilość składników');
else if (pizza.ser<-0|| pizza.peperoni<-0|| pizza.krewetki<-0)
    alert('dane nie mogą być na minusie')
else if(rak<0)
    alert('...');
else{

    if(pizza.peperoni>0 || pizza.krewetki>0)
        document.write('Pizza jest zwykła <br>');
    else
        document.write('Pizza jest wegetariańska <br>');

    let kalorie = 228+54+(2.54*pizza.ser)+(4.935*pizza.peperoni)+(0.85*pizza.krewetki);
    document.write(               'wartość kaloryczna pizzy: '+kalorie+' kcal<br>');
    let cena = 4.89+1.6+(0.10*pizza.ser)+(0.14*pizza.peperoni)+(0.6*pizza.krewetki);
    document.write('Cena pizzy wynosi: '+cena+' zł<br>');
}