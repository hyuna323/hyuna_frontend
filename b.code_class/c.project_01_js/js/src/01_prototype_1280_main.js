// 01_prototype_1280_main.js

var link = './02_prototype_1280_loginPage.html'

var myImage=document.getElementById("viewImage");
var imageArray=["img/picture/veiw.png","img/picture/storypicture_1-1.png","img/picture/storypicture_1-2.png","img/picture/storypicture_1-3.png","img/picture/storypicture_1-4.png","img/picture/bestpicture_img1.png"];
var imageIndex=0;

function changeImage(){
myImage.setAttribute("src",imageArray[imageIndex]);
imageIndex++;
if(imageIndex>=imageArray.length){
imageIndex=0;
}
}
setInterval(changeImage,2000);