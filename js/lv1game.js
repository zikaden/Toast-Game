//ASSETS
let lv1bground;
let lv1toast;
let lv1stawjam;
let lv1curserjam;
let lv1hoverjam;

//VARIABLES click events
let jamspace = false;
let counter = 0;

//PRELOADING all assetts
function preload() {
    lv1bground = loadImage('/assets/lv1_background.png');
    lv1toast = loadImage('/assets/lv1_toast.png');
    lv1stawjam = loadImage('/assets/lv1_jam_strawberry.png');
    lv1curserjam = loadImage('/assets/lv1_curser_jam_strawberry.png');
    lv1hoverjam = loadImage('/assets/lv1_hover_curser_jam_strawberry.png');
}
//SETUP
function setup() {
    let canvas = createCanvas(1200, 800);
    canvas.parent("canvas")
    background(255)
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
    image(lv1stawjam, 806, 448);
    //initializing mousehover effect
    lv1MouseHoverJam();
    //initializing take jam when clicking on jamglass
    if (jamspace) {
        cursor(image(lv1curserjam, mouseX - 35, mouseY - 30));
    }
    //initializing jamming when having jam
    if (mouseIsPressed) {
        if (jamspace) {
            ellipse(mouseX, mouseY, 10, 10);
            console.log('jamjamjamajam')
        }
    }
}