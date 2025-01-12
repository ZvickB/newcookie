const formContainer=document.getElementById("formContainer");
//const imgContainer=document.getElementById("img-container");
const inputHeb1=document.getElementById("hebName1");
const btn1=document.getElementById("btn1");
const writeHeb1=document.getElementsByClassName("hebName1");
const aaa=document.getElementById("aaa");
const chngHebName1=()=>{
    for(let i=0;i<writeHeb1.length;i++){
writeHeb1[i].innerHTML= inputHeb1.value;}
};
//btn1.onclick=()=>chngHebName1();
inputHeb1.oninput=()=>chngHebName1();


const inputHeb2=document.getElementById("hebName2");
const btn2=document.getElementById("btn2");
const writeHeb2=document.getElementsByClassName("hebName2");
const chngHebName2=()=>{
    for(let i=0;i<writeHeb2.length;i++){
        writeHeb2[i].innerHTML= inputHeb2.value;}
}
//btn2.onclick=()=>chngHebName2();
inputHeb2.oninput=()=>chngHebName2();

const inputEng1=document.getElementById("english");
const btn3=document.getElementById("btn3");
const writeEng1=document.getElementsByClassName("english");
const chngEngName1=()=>{
    for(let i=0;i<writeEng1.length;i++){
        writeEng1[i].innerHTML= inputEng1.value;}
}
//btn3.onclick=()=>chngEngName1();
english.oninput=()=>chngEngName1();
const inputEng2=document.getElementById("english2");
const btn4=document.getElementById("btn4");
const writeEng2=document.getElementsByClassName("english2");
const chngEngName2=()=>{
    for(let i=0;i<writeEng2.length;i++){
        writeEng2[i].innerHTML= inputEng2.value;}
}
english2.oninput=()=>chngEngName2();

const imgContainer=document.getElementById("img-container");
const inputNum=document.getElementById("num");
const btn5=document.getElementById("btn5");
const individual=document.getElementById("individual");
const indClass=document.getElementsByClassName("individual");
const rmv=()=>{
    for(let i =indClass.length;i>0;i--){
      //alert(indClass.length);
          indClass[i-1].remove();}
         
  };

const chngNum=()=>{
  //individual.remove();
  rmv();
    for(let i=0;i<inputNum.value;i++){
        imgContainer.appendChild(individual.cloneNode(true));};
    }
num.oninput=()=>chngNum();
const btn6=document.getElementById("btn6");


const eng=document.getElementsByClassName("eng");
const clr=document.getElementById("color");
const clrChng=()=>{
    for(let i=0;i<eng.length;i++){
    
eng[i].style.color=clr.value;
    }
};
clr.oninput=()=>clrChng();
const clrtxt=document.getElementById("clrtxt");
const clrbtn=document.getElementById("clrbtn");
const clrchng2=()=>{
    if(clrtxt.value[0]!="#"){
        clrtxt.value="#"+clrtxt.value;
    }
    clr.value=clrtxt.value;
    clrChng();
};
clrbtn.onclick=()=>clrchng2();
//clrbtn.onclick=()=>clrchng2();
//getimage[0].style.transform = "translateX(0, +' val + ')"; 

const hns1=document.getElementById("hebNme1Size");
hns1.oninput=()=>{
    for (let i = 0; i < writeHeb1.length; i++) {
        writeHeb1[i].style.fontSize=`${hns1.value}px`;
    }};

    const hns2=document.getElementById("hebNme2Size");
hns2.oninput=()=>{
    for (let i = 0; i < writeHeb2.length; i++) {
        writeHeb2[i].style.fontSize=`${hns2.value}px`;
    }};
    
    const ens1=document.getElementById("engNme1Size");
ens1.oninput=()=>{
    for (let i = 0; i < writeEng1.length; i++) {
        writeEng1[i].style.fontSize=`${ens1.value}px`;
    }};

    const ens2=document.getElementById("engNme2Size");
ens2.oninput=()=>{
    for (let i = 0; i < writeEng2.length; i++) {
        writeEng2[i].style.fontSize=`${ens2.value}px`;
    }};
    
    const hnv1=document.getElementById("hebNme1Vertical");
    hnv1.oninput=()=>{ 
        for (let i = 0; i < writeHeb1.length; i++) {
            writeHeb1[i].style.transform=`translateY(${hnv1.value}px)`;
            writeHeb1[i].style.transform +=`skew(-16deg,-5deg)`;
            writeHeb1[i].style.transform+=`translateX(${hnh1.value}px)`;
        }};
               
        const hnh1=document.getElementById("hebNme1Horizontal");
        hnh1.oninput=()=>{
            for (let i = 0; i < writeEng2.length; i++) {
                writeHeb1[i].style.transform=`translateX(${hnh1.value}px)`;
                writeHeb1[i].style.transform +=`skew(-16deg,-5deg)`;
                writeHeb1[i].style.transform+=`translateY(${hnv1.value}px)`;
            }};

    
        const hnv2=document.getElementById("hebNme2Vertical");
    hnv2.oninput=()=>{
        for (let i = 0; i < writeHeb2.length; i++) {
            writeHeb2[i].style.transform=`translateY(${hnv2.value}px)`;
            writeHeb2[i].style.transform +=`skew(-16deg,-4deg)`;
        }};
     
     
                const hnh2=document.getElementById("hebNme2Horizontal");
                hnh2.oninput=()=>{
                    for (let i = 0; i < writeEng2.length; i++) {
                        writeHeb2[i].style.transform=`translateX(${hnh2.value}px)`;
                        writeHeb2[i].style.transform +=`skew(-16deg,-4deg)`;
                    }};

        const enh1=document.getElementById("engNme1Horizontal");
    enh1.oninput=()=>{
        for (let i = 0; i < writeEng2.length; i++) {
            writeEng1[i].style.transform=`translateX(${enh1.value}px)`;
            writeEng1[i].style.transform+=`skew(-25deg)`;
            writeEng1[i].style.transform+=`translateY(${env1.value}px)`;
        }};
    
      const env1=document.getElementById("engNme1Vertical");
        env1.oninput=()=>{ 
            for (let i = 0; i < writeHeb1.length; i++) {
                writeEng1[i].style.transform=`translateY(${env1.value}px)`;
                writeEng1[i].style.transform+=`skew(-25deg)`;
                writeEng1[i].style.transform+=`translateX(${enh1.value}px)`;
            }};
       
 
        const env2=document.getElementById("engNme2Vertical");
        env2.oninput=()=>{
            for (let i = 0; i < writeHeb2.length; i++) {
                writeEng2[i].style.transform=`translateY(${env2.value}px)`;
                writeEng2[i].style.transform+=`skew(-25deg)`;
                writeEng2[i].style.transform+=`translateX(${enh2.value}px)`;
             
            }};

        const enh2=document.getElementById("engNme2Horizontal");
    enh2.oninput=()=>{
         for (let i = 0; i < writeEng2.length; i++) {
                writeEng2[i].style.transform=`translateX(${enh2.value}px)`;
                writeEng2[i].style.transform+=`skew(-25deg)`;
                writeEng2[i].style.transform+=`translateY(${env2.value}px)`;
                 
       }};
       const prin=document.getElementById("print");
       const form=document.getElementById("form");
       const befor=document.getElementById("befor");
       prin.onclick=()=>{
form.remove();
prin.remove();
window.print();
imgContainer.before(form);
form.appendChild(prin);
       }
        
// const adj=document.getElementsByClassName("adjuster");
// let adjustRange;
// range.onmousedown=()=>{
// for (let i = 0; i < adj.length; i++) {
//     if(adj[i].checked===true){
//         adjustRange=adj[i].id;
//         // if (adjustRange==="hebNme1Size") {
//         //     for(let i=0;i<writeHeb1.length;i++){
//         //         writeHeb1[i].style.fontSize=`${range.value}px`;
//         // }}
//     }
// switch (adjustRange) {
//     case "hebNme1Size":
//             for(let i=0;i<writeHeb1.length;i++){
//                 writeHeb1[i].style.fontSize=`${range.value}px`;}
//         break;
//     case "hebNme1Vertical":
//     for(let i=0;i<writeHeb1.length;i++){
//         range.onmouseout=()=>range.value=25;
//         writeHeb1[i].style.transform=`translateY(${range.value}px)`;}
//         break;

//         case "hebNme1Horizontal":
//     for(let i=0;i<writeHeb1.length;i++){
//         writeHeb1[i].style.transform=`translateX(${range.value}px)`;
//    // default:
//    break;  
// };
// }}
// }
// // hebNme1Size hebNme1Vertical hebNme1Horizontal hebNme2Size hebNme2Vertical hebNme2Horizontal