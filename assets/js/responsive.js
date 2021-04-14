const resizeElementsAuto = ()=>{
    document.getElementById("mainBody").style.height=`${window.screen.height-document.querySelector(".logo").clientHeight}px`;
    console.log("Trigerred");
}

resizeElementsAuto();

window.onresize = resizeElementsAuto;