//const imgContainer=document.getElementById("img-container");
const inputHeb1=document.getElementById("hebName1");
const writeHeb1=document.getElementsByClassName("hebName1");
const setInnerHtmlForCollection=(elements,value)=>{
    for(let i=0;i<elements.length;i++){
        elements[i].innerHTML=value;
    }
};
const chngHebName1=()=>setInnerHtmlForCollection(writeHeb1,inputHeb1.value);
//btn1.onclick=()=>chngHebName1();
inputHeb1.oninput=chngHebName1;


const inputHeb2=document.getElementById("hebName2");
const writeHeb2=document.getElementsByClassName("hebName2");
const chngHebName2=()=>setInnerHtmlForCollection(writeHeb2,inputHeb2.value);
//btn2.onclick=()=>chngHebName2();
inputHeb2.oninput=chngHebName2;

const inputEng1=document.getElementById("english");
const writeEng1=document.getElementsByClassName("english");
const chngEngName1=()=>setInnerHtmlForCollection(writeEng1,inputEng1.value);
//btn3.onclick=()=>chngEngName1();
inputEng1.oninput=chngEngName1;
const inputEng2=document.getElementById("english2");
const writeEng2=document.getElementsByClassName("english2");
const chngEngName2=()=>setInnerHtmlForCollection(writeEng2,inputEng2.value);
inputEng2.oninput=chngEngName2;

const imgContainer=document.getElementById("img-container");
const inputNum=document.getElementById("num");
const individual=document.getElementById("individual");
const indClass=document.getElementsByClassName("individual");
const rmv=()=>{
    for(let i=indClass.length;i>0;i--){
        //alert(indClass.length);
        indClass[i-1].remove();
    }
};

const chngNum=()=>{
    //individual.remove();
    rmv();
    for(let i=0;i<inputNum.value;i++){
        imgContainer.appendChild(individual.cloneNode(true));
    }
};
inputNum.oninput=chngNum;


const eng=document.getElementsByClassName("eng");
const clr=document.getElementById("color");
const clrChng=()=>{
    for(let i=0;i<eng.length;i++){
        eng[i].style.color=clr.value;
    }
};
clr.oninput=clrChng;
const clrtxt=document.getElementById("clrtxt");
const clrbtn=document.getElementById("clrbtn");
const normalizeHexColor=(value)=>(value[0]!=="#" ? `#${value}` : value);
const clrchng2=()=>{
    const normalizedColor=normalizeHexColor(clrtxt.value);
    clrtxt.value=normalizedColor;
    clr.value=normalizedColor;
    clrChng();
};
clrbtn.onclick=clrchng2;
//clrbtn.onclick=()=>clrchng2();
//getimage[0].style.transform = "translateX(0, +' val + ')"; 

const setFontSizeForCollection=(elements,sizeValue)=>{
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.fontSize=`${sizeValue}px`;
    }
};
const bindFontSizeInput=(inputElement,targetElements)=>{
    inputElement.oninput=()=>{
        setFontSizeForCollection(targetElements,inputElement.value);
    };
};

const hns1=document.getElementById("hebName1Size");
bindFontSizeInput(hns1,writeHeb1);

const hns2=document.getElementById("hebName2Size");
bindFontSizeInput(hns2,writeHeb2);
    
const ens1=document.getElementById("engName1Size");
bindFontSizeInput(ens1,writeEng1);

const ens2=document.getElementById("engName2Size");
bindFontSizeInput(ens2,writeEng2);
    
const hnv1=document.getElementById("hebName1Vertical");
hnv1.oninput=()=>{
    for (let i = 0; i < writeHeb1.length; i++) {
        writeHeb1[i].style.transform=`translateY(${hnv1.value}px)skew(-16deg,-5deg)translateX(${hnh1.value}px)`;
    }
};

const hnh1=document.getElementById("hebName1Horizontal");
hnh1.oninput=()=>{
    for (let i = 0; i < writeEng2.length; i++) {
        writeHeb1[i].style.transform=`translateX(${hnh1.value}px)skew(-16deg,-5deg)translateY(${hnv1.value}px)`;
    }
};

const hnv2=document.getElementById("hebName2Vertical");
hnv2.oninput=()=>{
        for (let i = 0; i < writeHeb2.length; i++) {
            writeHeb2[i].style.transform=`translateY(${hnv2.value}px)skew(-16deg,-4deg)`;
        }
};

const hnh2=document.getElementById("hebName2Horizontal");
hnh2.oninput=()=>{
                    for (let i = 0; i < writeEng2.length; i++) {
                        writeHeb2[i].style.transform=`translateX(${hnh2.value}px)skew(-16deg,-4deg)`;
                    }
};

        const enh1=document.getElementById("engName1Horizontal");
    enh1.oninput=()=>{
        for (let i = 0; i < writeEng2.length; i++) {
            writeEng1[i].style.transform=`translateX(${enh1.value}px)skew(-25deg)translateY(${env1.value}px)`;
        }};
    
      const env1=document.getElementById("engName1Vertical");
        env1.oninput=()=>{ 
            for (let i = 0; i < writeHeb1.length; i++) {
                writeEng1[i].style.transform=`translateY(${env1.value}px)skew(-25deg)translateX(${enh1.value}px)`;
            }};
       
 
        const env2=document.getElementById("engName2Vertical");
        env2.oninput=()=>{
            for (let i = 0; i < writeHeb2.length; i++) {
                writeEng2[i].style.transform=`translateY(${env2.value}px)skew(-25deg)translateX(${enh2.value}px)`;
             
            }};

       const enh2=document.getElementById("engName2Horizontal");
    enh2.oninput=()=>{
         for (let i = 0; i < writeEng2.length; i++) {
                writeEng2[i].style.transform=`translateX(${enh2.value}px)skew(-25deg)translateY(${env2.value}px)`;
                 
       }};
       const prin=document.getElementById("print");
       const form=document.getElementById("form");
       const handlePrint=()=>{
            form.remove();
            prin.remove();
            window.print();
            imgContainer.before(form);
            form.appendChild(prin);
       };
       prin.onclick=handlePrint;
        
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
