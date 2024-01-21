let str = "";
let sels = document.querySelectorAll(".sel");
let inp = document.querySelector("input");

for (let sel of sels) {
    sel.addEventListener("click", function() {
        str = str + sel.innerText;
        inp.value = str;
    });
}
let btn=document.querySelector(".but");
btn.addEventListener("click",function(){
    str=str.substring(0,str.length-1);
    inp.value=str;
});
btn.addEventListener("dblclick",function(){
    str="";
    inp.value=str;
});
let eq=document.querySelector(".eq");
eq.addEventListener("click",function(){
    try{
    let ans=eval(str);
    inp.value=""+ans;
    str=inp.value;
    }
    catch(err){

    }
});

function flash1(btn1){
    btn1.classList.add("flash");
    setTimeout(function(){
        btn1.classList.remove("flash");
    },50);
}

let lis=document.querySelectorAll(".btn");

for(let i of lis){
    i.addEventListener("click",function(){
        flash1(this);
    });
}