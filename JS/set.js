let clothes = new Set();
clothes.add ('cweter');
clothes.add ('kalesony');
clothes.delete ('cweter');
alert(clothes.has('cweter'));
alert(clothes.size);
clothes.add('cweter');
clothes.add(5);
for(let item of clothes){
    document.write(item + "\n" )
}
 alert(clothes)