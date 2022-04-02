Webcam.set({

width:370,
height:270,
image_format:'png',
png_quality:90

})

camera=document.getElementById("camera")

Webcam.attach(camera)

function take_snapshot(){

Webcam.snap(function(data_uri){

document.getElementById("result").innerHTML="<img src="+data_uri+" id='captured_img'>"
})

}

console.log(ml5.version)

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/qp9l-tQO8/model.json",model_loaded)

function model_loaded(){
console.log("Model Loaded Succesfully!")
}

function check(){

    img=document.getElementById('captured_img')
    classifier.classify(img, gotResult)

}

function gotResult(error,result){

if (error){
console.error(error)
}
else{

console.log(result)
document.getElementById("result_object").innerHTML=result[0].label
document.getElementById("result_accuracy").innerHTML=result[0].confidence.toFixed(2)
}

}
