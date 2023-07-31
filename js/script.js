function addNewSField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("sField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let sOb=document.getElementById("s");
    let sAddButton=document.getElementById('sAddButton');
    
    sOb.insertBefore(newNode,sAddButton);

}


function addNewWEField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb=document.getElementById("we");
    let weAddButton=document.getElementById('weAddButton');
    
    weOb.insertBefore(newNode,weAddButton);

}

function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb=document.getElementById("aq");
    let weAddButton=document.getElementById('aqAddButton');
    
    aqOb.insertBefore(newNode,aqAddButton);

}

function generateCV(){

    let nameField= document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=nameField;

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("emailT").innerHTML=document.getElementById("emailField").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedinField").value;
    document.getElementById("ghT").innerHTML=document.getElementById("githubField").value;

    

    let ss= document.getElementsByClassName("sField");
   let strr="";
for(let e of ss)
{
    strr=strr+ `<li> ${e.value} </li>`;
}
document.getElementById("sT").innerHTML=strr;



   let wes= document.getElementsByClassName("weField");
   let str="";
for(let e of wes)
{
    str=str+ `<li> ${e.value} </li>`;
}
document.getElementById("weT").innerHTML=str;


let aqs= document.getElementsByClassName("eqField");
   let str1="";
for(let e of aqs)
{
    str1=str1+ `<li> ${e.value} </li>`;
}
document.getElementById("aqT").innerHTML=str1;

let file=document.getElementById("imgField").files[0];
console.log(file);
let reader=new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);

reader.onloadend=function(){
    document.getElementById("imgTemplate").src=reader.result;
}

}