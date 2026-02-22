document.addEventListener('DOMContentLoaded', () => {
    let itemName1 = localStorage.getItem('itemName');
    let itemImage1 = localStorage.getItem('itemImage');
    let itemPrice1 = localStorage.getItem('itemPrice');
    let itemdescr1 = localStorage.getItem('itemdescr');
    let itemcart1 = localStorage.getItem('itemscart');
    var filapp = localStorage.getItem('itemdr');


    /*  if (itemName1.length === 0) { } else {

          document.querySelector('#single-product-title').innerHTML = itemName1;
          document.querySelector('#single-product-box-image img').src = itemImage1;
          document.querySelector('#single-product-price').innerHTML = itemPrice1;
          document.querySelector('.single-product-text').innerHTML = itemdescr1;

      } */

    var mem1 = localStorage.getItem('itnamct');
    var mem2 = localStorage.getItem('itnamct2');

    /* if (mem1 === mem2) {
         localStorage.setItem("easySensorsDownloaded", "yes");
         localStorage.setItem('itnamct', mem2);
         localStorage.seetItem('itnamct2', mem2);
         alert(filapp);
         return;
     }*/

    var naapp = localStorage.getItem('itemName');
    var filapp = localStorage.getItem('itemdr');

    // const fileUrl = URL.createObjectURL(filapp);

    // window.location.href = fileUrl;
    const link = document.createElement("a");
    link.href = filapp;

    //  link.download = "TextForge.apk";
    //  window.location.href = "applications/textforge/TextForge.apk";
    const downloadBtn = document.getElementById("downloadBtn");

    // check if already downloaded
    let alreadyDownloaded = localStorage.getItem("easySensorsDownloaded");

    if (alreadyDownloaded === "no") { } else if (alreadyDownloaded === "yes") {

        downloadBtn.innerText = "Already Downloaded";
        downloadBtn.disabled = true;
    }
    function openApkFile(file) {
        downloadBtn.disabled = true;
        downloadBtn.innerText = "Already Downloaded";
        localStorage.setItem("easySensorsDownloaded", "yes");
        const link = document.createElement("a");
        link.href = filapp;
        // link.download = "Text-Forge.apk";

        // document.body.appendChild(link);
        // link.click();
        //  document.body.removeChild(link);
        // const fileUrl = URL.createObjectURL(file);
        /* const url ='page2.html?name=${encodeURIComponent(var1)}&id=${encodeURIComponent(var2)}';
        const userData={
        name: "" ,
        role: "",}

        localStorage.setItem("var1", JSON.stringify(userData));
         window.location.href = url;
         window.location.href = url;
         const strdata = localStorage.getItem("var1");
         const usprof = JSON.parse(strdata);
         localStorage.removeItem("var1");
         const urlParams = new URLSearchParams(queryString);
         const name = urlParams.get('name');
          const id = urlParams.get('id');
         */
        downloadBtn.disabled = true;
        downloadBtn.innerText = "Already Downloaded";
        window.location.href = filapp;

        localStorage.setItem("easySensorsDownloaded", "yes");


    }
    downloadBtn.addEventListener("click", function () {

        // Trigger APK download


        openApkFile(filapp);




        // Save download status
        localStorage.setItem("easySensorsDownloaded", "yes");

        downloadBtn.innerText = "Already Downloaded";
        downloadBtn.disabled = true;
    });
});