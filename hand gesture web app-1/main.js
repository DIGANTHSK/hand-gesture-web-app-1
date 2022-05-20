var prediction = "";

webcam.set({
width: 350,
Height: 300,
image_format: 'png' ,
png_quantity: 90
});

camera = document.getElementById("camera");
webcam.attach("camera");