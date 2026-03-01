document.addEventListener('DOMContentLoaded', () => {
          alert("0");
/*    let itemName1 = localStorage.getItem('itemName');
    let itemImage1 = localStorage.getItem('itemImage');
    let itemPrice1 = localStorage.getItem('itemPrice');
    let itemdescr1 = localStorage.getItem('itemdescr');
    let itemcart1 = localStorage.getItem('itemscart');*/
       alert("1");
    // Get file path
    var filapp = localStorage.getItem('itemdirc');
    var filePath =JSON.parse(filapp);
     alert("2");
    const downloadBtn = document.getElementById("downloadBtn");

    // Check download status
//  var downloadStatus = localStorage.getItem("easySensorsDownloaded1st");
// var usprof = downloadStatus ? JSON.parse(downloadStatus) : null;
    const queryString = window.location.search;
     alert("3");
// Extract parameters
const urlParams = new URLSearchParams(queryString);
   var downloadStatus = urlParams.get('sellaut') 
         const usprof = downloadStatus ? JSON.parse(decodeURIComponent(downloadStatus)) : null;
     alert("4");
       alert(usprof);
         */
    // If first time (no value stored)
/* if (usprof === null) {
        localStorage.setItem("easySensorsDownloaded1st", JSON.stringify("no"));
        downloadStatus = "no";
        usprof = "no";
    } */
    alert("Download status: " + usprof);
  alert("Download status: " + downloadStatus);

    // If already downloaded
    if (usprof === "yes") {
        downloadBtn.innerText = "Already Downloaded";
        downloadBtn.disabled = true;
    }
     alert("7");
    function openApkFile(file) {
     alert("6");
  /*   if (!file) {
            alert("File not found!");
            return;
        } */

        // Start download
        const link = document.createElement("a");
        link.href = file;
        

           
            window.location.href = file;
  document.body.appendChild(link);
        link.click(); 
        document.body.removeChild(link); 

        // Update status
     localStorage.setItem("easySensorsDownloaded1st",  JSON.stringify("yes"));

        downloadBtn.disabled = true;
        downloadBtn.innerText = "Already Downloaded";
    }

    downloadBtn.addEventListener("click", function () {
        //  var filapp = localStorage.getItem('itemdirc');
  //  var filePath =  JSON.parse(filapp);
           const queryString = window.location.search;

// Extract parameters
const urlParams = new URLSearchParams(queryString);

          var filapp = urlParams.get('sdinst');
         const files = filapp ? JSON.parse(decodeURIComponent(filapp)) : null;+
        alert("5");
        openApkFile(files);
   
    });




});






































