//ASSETS
let lv1bground;
let lv1toast;
let lv1stawjam;
let lv1curserjam;
let lv1hoverjam;

//VARIABLES click events
let jamspace = false;
let counter = 0;
let jamArr = [];
let timer = 15;
let score = 0;

//PRELOADING all assetts
function preload() {
    lv1bground = loadImage('./assets/lv1_background.png');
    lv1toast = loadImage('./assets/lv1_toast.png');
    lv1stawjam = loadImage('./assets/lv1_jam_strawberry.png');
    lv1curserjam = loadImage('./assets/lv1_curser_jam_strawberry.png');
    lv1hoverjam = loadImage('./assets/lv1_hover_curser_jam_strawberry.png');
}
//SETUP
function setup() {
    let canvas = createCanvas(1200, 800);
    canvas.parent("canvas")
}

//RESIZING of images to fit the canvas
function lv1resizeImage() {
    lv1bground.resize(1200, 800);
    lv1toast.resize(480, 512);
    lv1stawjam.resize(354, 306);
    lv1hoverjam.resize(92, 84);
    lv1curserjam.resize(92, 84);
}

//MOUSE HOVER over jam changes curser to jam curser
function lv1MouseHoverJam() {
    if ((mouseX > 806 && mouseX < 1100) && (mouseY > 448 && mouseY < 730)) {
        cursor(image(lv1hoverjam, mouseX - 35, mouseY - 30));
    }
}
//Mouse click on jam to t get jam and click on jam to get normal curser
function mouseClicked() {
    if ((mouseX > 806 && mouseX < 1100) && (mouseY > 448 && mouseY < 730)) {
        jamspace = true;
        //timer and score will reset
        timer = 15;
        score = 0;
        select('#scoreid').html(score);
        jamArr = [];
    } else {
        jamspace = false;
    }
}

//RENDERING my game
function draw() {
    //load all images into game
    lv1resizeImage();
    //render images into game
    image(lv1bground, 0, 0);
    image(lv1toast, 180, 124);
    image(lv1stawjam, 806, 448)
    //render timer into game
    textSize(85);
    text(timer, width / 57, height / 9);
    //initializing mousehover effect
    lv1MouseHoverJam();
    //initializing take jam when clicking on jamglass
    if (jamspace) {
        cursor(image(lv1curserjam, mouseX - 35, mouseY - 30));
    }
    //initializing jamming when having jam
    if (mouseIsPressed) {
        if (jamspace) {
            //create array//add object to array with mouseX and mouseY
            if ((mouseX != pmouseX) && (mouseY != pmouseY)) {
                jamArr.push({ mouseX, mouseY });
                console.log(mouseX);
            } for (let i = 0; i < jamArr.length; i++) {
                let x = jamArr[i].mouseX
                let y = jamArr[i].mouseY
                image(lv1curserjam, x, y);
            }
            //the timer will stop at 0 and jamspace will be turned off
            if (frameCount % 40 == 0 && timer > 0) {
                timer--;
            }
            if (timer == 0) {
                jamspace = false
            }
            //
            if (frameCount % 30 == 0 && ((mouseX != pmouseX) && (mouseY != pmouseY))) {
                if (((mouseX > 200 && mouseX < 648) && (mouseY > 330 && mouseY < 638)) ||
                    ((mouseX > 180 && mouseX < 658) && (mouseY > 126 && mouseY < 331))) {
                    score += 100;
                    select('#scoreid').html(score);
                } else {
                    score -= 150;
                    select('#scoreid').html(score);
                }
            }
        }
    }
}
