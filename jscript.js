const info = document.querySelector("#info");
    const btn1 = document.querySelector("#btn1");
    const main = document.querySelector("#main");
    const table = document.querySelector("#table");
    const abt = document.querySelector("#abt");
    const amount = document.querySelector("#amount");
    const sub = document.querySelector("#sub");
     const close = document.querySelector("#close");
     const content = document.querySelector("#content");
     const kswitch = document.querySelector("#kswitch");
     const kill = document.querySelector("#kill");
     const serial = document.querySelector("#serial");
     const bcard = document.querySelector("#bcard");
     const bstatus = document.querySelector("#bstatus");
     const slide = document.querySelector("#slide");
     const hbc = document.querySelector("#hbc");
     const sbc = document.querySelector("#sbc");
     slide.style.display = "none";
     bcard.style.display = "none";
     info.style.marginTop = "20vw";
     info.style.marginBottom = "20vw";
    table.style.display = "none";
     main.style.display = "none";
     kswitch.style.marginBottom = "10vw";
     kswitch.style.display ="none";
     let description = [];
     let total = [];
     let timer = [];
     let prse = 0;
    btn1.addEventListener("click" , function(){
        
        let data = prompt("Please enter your budget" , 5000);
    if(parseFloat(data) > 100 && data != null){
     prse = parseFloat(data);
    bstatus.innerHTML = "Balance: "+prse;
    bcard.style.display = "table-row";
    slide.style.display = "flex";
    }
    else{
        alert("Error... failed to execute, budget must be a positive integer, greater than 100");
    return;
    }
   
        info.style.display = "none";
        main.style.display = "flex";
        main.click();
    });
    sub.addEventListener("click" , function(){
    let arr2 = [];
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        if(abt.value.length > 0 && amount.value !== ""){
        if(amount.value <= 0){
        alert("Please input a valid amount of money");
    return;
    }
    
    table.style.display = "table-row";
    
    function lister(inp){
let ml1;
    if(inp[inp.length-1] === "-"){
        ml1 = inp;
    }
    if(inp[inp.length-1] !== "-"){
        ml1 = inp+"-";
    }
    let arr1 = [];
    arr2 = [];
    let arr3 = [];
    for(j = 0; j < ml1.length; j++){
        if(ml1[j]==="-"){
            arr1.push(j);
        }
    }
    for(j = 0; j < inp.length; j++){
        if(inp[j]==="-"){
            arr3.push(j);
        }
        }
    if(arr3.length == 0){
         arr2.push(inp);
        return arr2;
    }
    let k = 0;
    let m = 0;
    let l = 0;
    while(k < ml1.length){
        str="";
        for(k;k<arr1[l];k++){
            str+=ml1[k];
        }
        arr2.push(str);
        k = arr1[l]+1;
        l++;
    }
    return arr2;
    
}
    let relister = [];
    for(xn = 0; xn < lister(abt.value).length;xn++){
        relister.push(lister(abt.value)[xn]);
    }
    for(yn = 0; yn < lister(amount.value).length;yn++){
        relister.push(lister(amount.value)[yn]);
    }
    

    for(alpha=0;alpha<lister(amount.value).length; alpha++){
        if(isNaN(lister(amount.value)[alpha])){
            alert("Amount must be a number");
            return;
        }
    }
    
    
    if(lister(abt.value).length !== lister(amount.value).length){
        alert("Error, For each description, there must be an spending amount assigned to it...");
    }
    if(lister(abt.value).length === lister(amount.value).length){
    for(zn = 0; zn < relister.length/2; zn++){
    description.push(relister[zn]);
    total.push(relister[(relister.length/2)+zn]);
    timer.push(h+":"+m);
    content.innerHTML += "<tr><th scope=\"row\">"+total.length+"</th><td>"+h+":"+m+"</td><td>"+relister[zn]+"</td><td>"+relister[(relister.length/2)+zn]+"</td></tr>";
    }
    close.click();
    }
     let loop = 0;
      let looptotal = 0;
    for(loop = 0; loop < total.length; loop++){
        looptotal += parseFloat(total[loop]);
    }
    looptotal = prse - looptotal;
    bstatus.innerHTML = "Balance: "+looptotal;

    kswitch.style.display = "flex";
    }
    else{
        alert("Either description or amount entry is invalid...");
    close.click();
        return;
    }
    });
    kill.addEventListener("click" , function(){
        let i = 0;
    if(parseFloat(serial.value) === parseInt(serial.value) && serial.value > 0 && serial.value <= total.length){
        description.splice(serial.value - 1,1);
    total.splice(serial.value - 1,1);
    timer.splice(serial.value - 1,1);
    content.innerHTML = "";
    for(i = 0; i < total.length; i++){
        content.innerHTML += "<tr><th scope=\"row\">"+(eval(i+1))+"</th><td>"+timer[i]+"</td><td>"+description[i]+"</td><td>"+total[i]+"</td></tr>";
    }
        let loop = 0;
      let looptotal = 0;
    for(loop = 0; loop < total.length; loop++){
        looptotal += parseFloat(total[loop]);
    }
    looptotal = prse - looptotal;
    bstatus.innerHTML = "Balance: "+looptotal;

    }
    else{
        alert("Invalid entry, serial must be a positive integer and inside index range...");
    }
    });
    sbc.addEventListener("click" , function(){
        bcard.style.display = "table-row";
    });
    hbc.addEventListener("click" , function(){
        bcard.style.display = "none";
    });
