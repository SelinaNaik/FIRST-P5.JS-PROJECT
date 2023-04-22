function preload() {
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.position(100,300);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video,110,70,300,250);
    
    stroke(0, 0, 102);
    fill(0, 0, 179);

    rect(73, 35, 375, 25);
    rect(73, 332, 375, 25);
    rect(43, 65, 25, 250);
    rect(448, 63, 25, 250);

    stroke(57, 20, 57);
    fill(153, 51, 153);

    circle(60,60,55);
    circle(460,60,55);
    circle(60,340,55);
    circle(460,340,55);

    tint(tint_color);
}

function take_snapshot() {
    save('Pic_Captrued');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}