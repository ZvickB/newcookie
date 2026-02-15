// Migration note: these blocks are grouped by feature so you can map each
// group to a React component + state slice.

// Text content sync (input -> all matching labels).
const inputHeb1=document.getElementById("hebName1");
const writeHeb1=document.getElementsByClassName("hebName1");
const setInnerHtmlForCollection=(elements,value)=>{
    for(let i=0;i<elements.length;i++){
        elements[i].innerHTML=value;
    }
};
const chngHebName1=()=>setInnerHtmlForCollection(writeHeb1,inputHeb1.value);
inputHeb1.oninput=chngHebName1;


const inputHeb2=document.getElementById("hebName2");
const writeHeb2=document.getElementsByClassName("hebName2");
const chngHebName2=()=>setInnerHtmlForCollection(writeHeb2,inputHeb2.value);
inputHeb2.oninput=chngHebName2;

const inputEng1=document.getElementById("english");
const writeEng1=document.getElementsByClassName("english");
const chngEngName1=()=>setInnerHtmlForCollection(writeEng1,inputEng1.value);
inputEng1.oninput=chngEngName1;
const inputEng2=document.getElementById("english2");
const writeEng2=document.getElementsByClassName("english2");
const chngEngName2=()=>setInnerHtmlForCollection(writeEng2,inputEng2.value);
inputEng2.oninput=chngEngName2;

// Cookie count sync (clones a template card). In React this becomes an
// array render instead of cloneNode/remove.
const imgContainer=document.getElementById("img-container");
const inputNum=document.getElementById("num");
const individual=document.getElementById("individual");
const indClass=document.getElementsByClassName("individual");
const rmv=()=>{
    for(let i=indClass.length;i>0;i--){
        indClass[i-1].remove();
    }
};

const chngNum=()=>{
    rmv();
    for(let i=0;i<inputNum.value;i++){
        imgContainer.appendChild(individual.cloneNode(true));
    }
};
inputNum.oninput=chngNum;

// Color sync for all English labels. In React, keep color in state and apply
// via style props/class binding instead of querying DOM collections.
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

// Shared style helpers.
const setFontSizeForCollection=(elements,sizeValue)=>{
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.fontSize=`${sizeValue}px`;
    }
};
const applyTransformToCollection=(loopLength,targetElements,transformValue)=>{
    for (let i = 0; i < loopLength; i++) {
        targetElements[i].style.transform=transformValue;
    }
};
const bindFontSizeInput=(inputElement,targetElements)=>{
    inputElement.oninput=()=>{
        setFontSizeForCollection(targetElements,inputElement.value);
    };
};

// Size controls (map these to per-layer state in React).
const hns1=document.getElementById("hebName1Size");
bindFontSizeInput(hns1,writeHeb1);

const hns2=document.getElementById("hebName2Size");
bindFontSizeInput(hns2,writeHeb2);
    
const ens1=document.getElementById("engName1Size");
bindFontSizeInput(ens1,writeEng1);

const ens2=document.getElementById("engName2Size");
bindFontSizeInput(ens2,writeEng2);
    
// Position/skew controls. React target: store x/y/skew in one object per text
// layer and compose transform in one place to avoid jumpy interactions.
const hnv1=document.getElementById("hebName1Vertical");
hnv1.oninput=()=>{
    applyTransformToCollection(
        writeHeb1.length,
        writeHeb1,
        `translateY(${hnv1.value}px)skew(-16deg,-5deg)translateX(${hnh1.value}px)`
    );
};

const hnh1=document.getElementById("hebName1Horizontal");
hnh1.oninput=()=>{
    applyTransformToCollection(
        writeEng2.length,
        writeHeb1,
        `translateX(${hnh1.value}px)skew(-16deg,-5deg)translateY(${hnv1.value}px)`
    );
};

const hnv2=document.getElementById("hebName2Vertical");
hnv2.oninput=()=>{
    applyTransformToCollection(
        writeHeb2.length,
        writeHeb2,
        `translateY(${hnv2.value}px)skew(-16deg,-4deg)`
    );
};

const hnh2=document.getElementById("hebName2Horizontal");
hnh2.oninput=()=>{
    applyTransformToCollection(
        writeEng2.length,
        writeHeb2,
        `translateX(${hnh2.value}px)skew(-16deg,-4deg)`
    );
};

const enh1=document.getElementById("engName1Horizontal");
enh1.oninput=()=>{
    applyTransformToCollection(
        writeEng2.length,
        writeEng1,
        `translateX(${enh1.value}px)skew(-25deg)translateY(${env1.value}px)`
    );
};

const env1=document.getElementById("engName1Vertical");
env1.oninput=()=>{
    applyTransformToCollection(
        writeHeb1.length,
        writeEng1,
        `translateY(${env1.value}px)skew(-25deg)translateX(${enh1.value}px)`
    );
};

const env2=document.getElementById("engName2Vertical");
env2.oninput=()=>{
    applyTransformToCollection(
        writeHeb2.length,
        writeEng2,
        `translateY(${env2.value}px)skew(-25deg)translateX(${enh2.value}px)`
    );
};

const enh2=document.getElementById("engName2Horizontal");
enh2.oninput=()=>{
    applyTransformToCollection(
        writeEng2.length,
        writeEng2,
        `translateX(${enh2.value}px)skew(-25deg)translateY(${env2.value}px)`
    );
};

// Print flow temporarily detaches controls from DOM before printing.
// In React this can be handled with a "print mode" flag + conditional render.
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
