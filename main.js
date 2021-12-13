function preload() {
    
}
function setup() {
    canvas=createCanvas(600,600);
    canvas.position(15, 300);
    video=createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 15 , 300, 420,290);

}
function take_snapshot() {
    save('it_never_works.png');
}