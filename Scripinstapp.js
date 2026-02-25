document.addEventListener('DOMContentLoaded', () => {
    let itemName1 = localStorage.getItem('itemName');
    let itemImage1 = localStorage.getItem('itemImage');
    let itemPrice1 = localStorage.getItem('itemPrice');
    let itemdescr1 = localStorage.getItem('itemdescr');
    let itemcart1 = localStorage.getItem('itemscart');
 
 

    // Get file path
    var filapp = localStorage.getItem('itemdirc');
    var filePath = filapp ? JSON.parse(filapp) : null;

    const downloadBtn = document.getElementById("downloadBtn");

    // Check download status
  var downloadStatus = localStorage.getItem("easySensorsDownloaded1st");
 var usprof = downloadStatus ? JSON.parse(downloadStatus) : null;
    // If first time (no value stored)
/* if (usprof === null) {
        localStorage.setItem("easySensorsDownloaded1st", JSON.stringify("no"));
        downloadStatus = "no";
        usprof = "no";
    } */
    alert("Download status: " + downloadStatus);
   // alert("Download status: " + downloadStatus);

    // If already downloaded
    if (usprof === "yes") {
        downloadBtn.innerText = "Already Downloaded";
        downloadBtn.disabled = true;
    }

    function openApkFile(file) {

     if (!file) {
            alert("File not found!");
            return;
        } 

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
          var filapp = localStorage.getItem('itemdirc');
    var filePath = filapp ? JSON.parse(filapp) : null;
        if(filePath){
        openApkFile(filePath);
        }
    });




});





























