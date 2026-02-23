document.addEventListener('DOMContentLoaded', () => {
    let itemName1 = localStorage.getItem('itemName');
    let itemImage1 = localStorage.getItem('itemImage');
    let itemPrice1 = localStorage.getItem('itemPrice');
    let itemdescr1 = localStorage.getItem('itemdescr');
    let itemcart1 = localStorage.getItem('itemscart');
 
 

    // Get file path
    const filapp = localStorage.getItem('itemdirc');
    const filePath = filapp ? JSON.parse(filapp) : null;

    const downloadBtn = document.getElementById("downloadBtn");

    // Check download status
    let downloadStatus = localStorage.getItem("easySensorsDownloaded1st");
 var usprof = JSON.parse(downloadStatus);
    // If first time (no value stored)
   /* if (downloadStatus === null) {
        localStorage.setItem("easySensorsDownloaded1st", "no");
        downloadStatus = "no";
    } */

   // alert("Download status: " + downloadStatus);

    // If already downloaded
    if (usprof === "yes") {
        downloadBtn.innerText = "Already Downloaded";
        downloadBtn.disabled = true;
    }

    function openApkFile(file) {

 /*       if (!file) {
            alert("File not found!");
            return;
        } */

        // Start download
        const link = document.createElement("a");
        link.href = file;
        

                localStorage.setItem("easySensorsDownloaded1st",  JSON.stringify("yes"));

        downloadBtn.disabled = true;
            window.location.href = file;
       /*     document.body.appendChild(link);
        link.click(); 
        document.body.removeChild(link); */

        // Update status

        downloadBtn.innerText = "Already Downloaded";
    }

    downloadBtn.addEventListener("click", function () {
        if(filePath){
        openApkFile(filePath);
        }
    });



 /*   i=0;
    if(i = 0){
     localStorage.setItem("easySensorsDownloaded1st", JSON.stringify("no"));
    }
    /*  if (itemName1.length === 0) { } else {

          document.querySelector('#single-product-title').innerHTML = itemName1;
          document.querySelector('#single-product-box-image img').src = itemImage1;
          document.querySelector('#single-product-price').innerHTML = itemPrice1;
          document.querySelector('.single-product-text').innerHTML = itemdescr1;

      } */



 /*   var naapp = localStorage.getItem('itemName');
    var filapp2 = localStorage.getItem('itemdr');

    // const fileUrl = URL.createObjectURL(filapp);

    // window.location.href = fileUrl;
    const link = document.createElement("a");
    link.href = usprof1;

  
    const downloadBtn = document.getElementById("downloadBtn");

    // check if already downloaded
   var alreadyDownloadedst = localStorage.getItem("easySensorsDownloaded1st");
 var usprof = JSON.parse(alreadyDownloadedst);
    alert(usprof);
    if (usprof === "no") { } else if (usprof === "yes")  {

        downloadBtn.innerText = "Already Downloaded";
        downloadBtn.disabled = true;
    }
   // 
    function openApkFile(file) {
      alert("6");
        const link = document.createElement("a");
        link.href = file;
           window.location.href = file;
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
 /*  i=i+1;
                 downloadBtn.disabled = true;
        downloadBtn.innerText = "Already Downloaded";
     
        localStorage.setItem("easySensorsDownloaded1st", JSON.stringify("yes"));
    
     }
    downloadBtn.addEventListener("click", function () {

        // Trigger APK download

    openApkFile(usprof1);





        // Save download status
        //localStorage.setItem("easySensorsDownloaded1st",JSON.stringify("yes"));

       // downloadBtn.innerText = "Already Downloaded";
       // downloadBtn.disabled = true;
    });*/

});





















