/*class Phone
{
    brand='samsung';
    color='black';
    price=123.23;
    usbC= false;
    user='Marcin ';
    sendSms= function (text)
    {
        this.sms =
this.user + 'wysłal sms: '+ text;

    }
}
//let komora = new Phone;
//let text = prompt ('podaj tresc sms-a');
//komora.user = 'Jakub '
//komora.sendSms(text)
//document.write(komora.sms)
//alert(komora);
//komora.brand='iphone';
//alert(komora.brand);
telefony = new Array(25);
for (let x=0;x<telefony.length;x++)
{
    telefony[x] = new Phone
}
telefony[4].user = "david"
alert(telefony[4].user);
let telefony = new Array(20);
for(let i=3; i<telefony.length; i++)
{
    telefony[i]=new Phone
    telefony[i].brand=prompt('podaj telefony: ')
    telefony[i].color=prompt('kolor telefony: ')
    telefony[i].price=prompt('cena telefonuw: ')
}
let kasa = parseInt(prompt('jaka gotowke posiadasz'));

let = spierdalaj = 0;

document.write('<br>Tefony : </br>');
for (let i = 0;i < telefony.length;i++) {
    if (telefony[i].price <= kasa) {
        spierdalaj++;
        document.write('Firm' + telefony[i].brand + "kolor: " + telefony[i].color + 'price ' + telefony[i].price)
    }
}
if (spierdalaj == 0) {
    alert('Nie stac cie ')
}



//telefony [0]= new Phone;
//telefony [0].user = "bon";
//alert(telefony[0].user)*/
class Phone
{
    brand='Samsung';
    color='black';
    price= 123.21;
    usbC = false;
    user = 'Marcin';
    sendSms = function(text){
        this.sms = this.user + "Wyslal sms:" + text;
    }

}


phones = new Array(3);
for (let x=0;x<phones.length;x++)
{
    phones[x] = new Phone
    phones[x].brand = prompt("podej marke telefonu");
    phones[x].color = prompt("podej kolor telefonu");
    phones[x].price = prompt("podej cene telefonu");
}

let siano = prompt("podej mi ilosc twoich piniędzy ");

document.write("mozesz kupic te telefony: ")
document.write("<br><br>")

for (let i=0;i<phones.length;i++) {
    if (siano >= phones[i].price) {
        document.write("model:");
        document.write(phones[i].brand + "<br>");
        document.write("kolor:");
        document.write(phones[i].color + "<br>");
        document.write("cena:");
        document.write(phones[i].price + "<br>" + "<br>");

    }
}