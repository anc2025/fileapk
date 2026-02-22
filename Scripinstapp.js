document.addEventListener('DOMContentLoaded', () => {
    let itemName1 = localStorage.getItem('itemName');
    let itemImage1 = localStorage.getItem('itemImage');
    let itemPrice1 = localStorage.getItem('itemPrice');
    let itemdescr1 = localStorage.getItem('itemdescr');
    let itemcart1 = localStorage.getItem('itemscart');
    var filapp = localStorage.getItem('itemdirc');
    alert("1");
 const usprof1 = JSON.parse(filapp);
 alert("2");
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
    var filapp2 = localStorage.getItem('itemdr');
 alert("3");
    // const fileUrl = URL.createObjectURL(filapp);

    // window.location.href = fileUrl;
    const link = document.createElement("a");
    link.href = usprof1;
 alert("4");
  
    const downloadBtn = document.getElementById("downloadBtn");

    // check if already downloaded
   var alreadyDownloadedst = localStorage.getItem("easySensorsDownloaded1st");
 const usprof = JSON.parse(alreadyDownloadedst);
    alert(usprof);
    if (usprof === "no") { } else if (usprof === "yes") {

        downloadBtn.innerText = "Already Downloaded";
        downloadBtn.disabled = true;
    }
     alert("5");
    function openApkFile(file) {
      alert("6");
        const link = document.createElement("a");
        link.href = file;
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
        window.location.href = file;
   downloadBtn.disabled = true;
        downloadBtn.innerText = "Already Downloaded";
        localStorage.setItem("easySensorsDownloaded1st", JSON.stringify("yes"));
     


    }
    downloadBtn.addEventListener("click", function () {

        // Trigger APK download

if(usprof1){
        openApkFile(usprof1);}




        // Save download status
        //localStorage.setItem("easySensorsDownloaded1st",JSON.stringify("yes"));

       // downloadBtn.innerText = "Already Downloaded";
       // downloadBtn.disabled = true;
    });

});





