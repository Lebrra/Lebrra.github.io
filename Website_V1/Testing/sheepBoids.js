/**
 * 04-05-01.js - a simple JavaScript file that gets loaded with
 * page 5 of Workbook 4 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020, February 2021
 *
 */

/**
 * If you want to read up on JavaScript classes, 
 * see the tutorial on the class website:
 * 
 * https://cs559.github.io/559Tutorials/javascript/oop-in-js-1/
 */
class Boid {
    /**
     * 
     * @param {number} x    - initial X position
     * @param {number} y    - initial Y position
     * @param {number} vx   - initial X velocity
     * @param {number} vy   - initial Y velocity
     * @param {string} color - sheep color
     */
    constructor(x, y, vx = 1, vy = 0, color = "white") {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;

        this.color = color;
        this.showHit = 0;

        this.angleDirection = Math.random() > 0.5 ? -1 : 1;
        
        // legs:
        this.legAngle = 0;
        this.positive = true;
    }

    /**
     * Draw the Legs - kept seperate due to large block
     * @param {CanvasRenderingContext2D} context 
     */
    drawLegs(context) {
        // pulling the speed value here to impact legs:
        let speed = Number(speedSlider.value);
        
        if (this.positive) {
            this.legAngle += 0.07 * speed;
            if (this.legAngle > Math.PI / 4) {
                this.legAngle = Math.PI / 4;
                this.positive = false;
            }
        }
        else {
            this.legAngle -= 0.07 * speed;
            if (this.legAngle < -Math.PI / 4) {
                this.legAngle = -Math.PI / 4;
                this.positive = true;
            }
        }

        // legs:
        context.fillStyle = "gray";

        context.save();

        context.translate(16,2);
        context.rotate(this.legAngle);
        context.beginPath();
        context.roundRect(0, 0, 4, 10, 5);
        context.closePath();
        context.fill();

        context.beginPath();
        context.roundRect(0, 0, 4, -10, 5);
        context.closePath();
        context.fill();

        context.restore();
        context.save();

        context.translate(4, 2);
        context.rotate(this.legAngle);
        context.beginPath();
        context.roundRect(0, 0, 4, 10, 5);
        context.closePath();
        context.fill();

        context.beginPath();
        context.roundRect(0, 0, 4, -10, 5);
        context.closePath();
        context.fill();

        context.restore();
    }

    /**
     * Draw the Boid
     * @param {CanvasRenderingContext2D} context 
     */
    draw(context) {
        context.save();
        context.translate(this.x, this.y);
        context.scale(1.2, 1.2);

        const angle = Math.atan2(this.vy, this.vx);
        context.rotate(angle);

        // legs:
        this.drawLegs(context);

        // head:
        context.beginPath();
        context.ellipse(20, 2, 10, 5, 0, 0, 2 * Math.PI);
        context.closePath();
        context.fill();

        // body:    -> modified from my cloud used in WB3 03-06-01.js
        if (this.showHit > 0){
            context.fillStyle = this.color == "white" ? "#e8ace5" : "#1888ad";
            this.showHit--;
        }
        else context.fillStyle = this.color;

        context.beginPath();
        context.moveTo(0, 0);
        context.bezierCurveTo(-2, 2, 0, 12, 8, 7);
        context.bezierCurveTo(10, 5, 11, 14, 19, 7);
        context.bezierCurveTo(21, 7, 27, 10, 24, 2);
        context.bezierCurveTo(28, -4, 22, -5, 19, -3);
        context.bezierCurveTo(17, -3, 12, -8, 10, -3);
        context.bezierCurveTo(5, -3, 3, -6, 2, 0);
        context.closePath();
        context.fill();

        // ears:
        context.fillStyle = "gray";
        context.beginPath();
        context.ellipse(24, 0, 3, 2, 0.5, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
        
        context.beginPath();
        context.ellipse(24, 4, 3, 2, -0.5, 0, 2 * Math.PI);
        context.closePath();
        context.fill();

        context.restore();
    }
    /**
     * Perform the "steering" behavior -
     * This function should update the velocity based on the other
     * members of the flock.
     * It is passed the entire flock (an array of Boids) - that includes
     * "this"!
     * Note: dealing with the boundaries does not need to be handled here
     * (in fact it can't be, since there is no awareness of the canvas)
     * *
     * And remember, (vx,vy) should always be a unit vector!
     * @param {Array<Boid>} flock 
     * @param {Array<float>} mousePos [x, y] or null
     */
    steer(flock, mousePos) {
        /*
		// Note - this sample behavior is just to help you understand
		// what a steering function might  do
		// all this one does is have things go in circles, rather than
		// straight lines
		// Something this simple would not count for the advanced points:
		// a "real" steering behavior must consider other boids,
		// or at least obstacles.
		
        // a simple steering behavior: 
        // create a rotation matrix that turns by a small amount
        // 2 degrees per time step
        const angle = 2 * Math.PI / 180;
        const s = Math.sin(angle);
        const c = Math.cos(angle);

        let ovx = this.vx;
        let ovy = this.vy;

        this.vx =  ovx * c + ovy * s;
        this.vy = -ovx * s + ovy * c;
		*/

        // if no speed, don't do this
        

        // collision: // fence collision:
        if (fence != []){ 
            // let's make the fence collision a little farther out so it doesn't interfere with flock collisions:
            const fenceBuffer = collisionRadius + 5;

            // left side:
            if (Math.abs(this.x - fence[0]) <= fenceBuffer) {
                if (this.y >= fence[1] - fenceBuffer && this.y <= fence[1] + fence[3] + fenceBuffer) {
                    this.vx *= -1;
                    this.x = this.x < fence[0] ? fence[0] - fenceBuffer : fence[0] + fenceBuffer;
                    this.showHit = hitIterations;
                }
            }
            // right side:
            else if (Math.abs(this.x - (fence[0] + fence[2])) <= fenceBuffer) {
                if (this.y >= fence[1] - fenceBuffer && this.y <= fence[1] + fence[3] + fenceBuffer) {
                    this.vx *= -1;
                    this.x = this.x < fence[0] + fence[2] ? fence[0] + fence[2] - fenceBuffer : fence[0] + fence[2] + fenceBuffer;
                    this.showHit = hitIterations;
                }
            }

            // top side:
            if (Math.abs(this.y - fence[1]) <= fenceBuffer) {
                if (this.x >= fence[0] - fenceBuffer && this.x <= fence[0] + fence[2] + fenceBuffer) {
                    this.vy *= -1;
                    this.y = this.y < fence[1] ? fence[1] - fenceBuffer : fence[1] + fenceBuffer;
                    this.showHit = hitIterations;
                }
            }
            // bottom side:
            else if (Math.abs(this.y - (fence[1] + fence[3])) <= fenceBuffer) {
                if (this.x >= fence[0] - fenceBuffer && this.x <= fence[0] + fence[2] + fenceBuffer) {
                    this.vy *= -1;
                    this.y = this.y < fence[1] + fence[3] ? fence[1] + fence[3] - fenceBuffer : fence[1] + fence[3] + fenceBuffer;
                    this.showHit = hitIterations;
                }
            }
        }

        // collision: // boid collision: 
        flock.forEach(b => {
            if (this != b) 
            {
                let distance = Math.sqrt((this.x - b.x)**2 + (this.y - b.y)**2);
                if (distance < collisionRadius)
                {
                    let angle = Math.atan2(b.y - this.y, b.x - this.x);

                    // use angle to calulate new norms for the velocities:
                    b.vx = Math.cos(angle);
                    b.vy = Math.sin(angle);

                    this.vx = -Math.cos(angle);
                    this.vy = -Math.sin(angle);

                    this.showHit = hitIterations;
                    b.showHit = hitIterations;
                }
            }
        });
        
        if (mousePos)this.useMouseBehavior(mousePos);
        else this.useBehaviorDistribution(flock);
    }

    /**
     * Split from steer - used when mouse isn't present
     * @param {Array<Boid>} flock 
     * @param {float} speed
     */
    useBehaviorDistribution(flock)
    {
        // get distribution values:
        const rand = Math.round(Number(randSlider.value) * 100);
        const to = Math.round(Number(toSlider.value) * 100);
        const w = Math.round(Number(withSlider.value) * 100);
        const away = Math.round(Number(awaySlider.value) * 100);

        // flocking behavior - do nothing if not moving
        const behavior = Math.random() * 100;
        if (behavior < rand)
        {
            // alter direction slightly:
            let angle = Math.atan2(this.vy, this.vx);
            // note: (Math.cos(angle), Math.sin(angle) != (this.vx, this.vy) -> is this rounding error, or am I incorrect in how this should behave?

            angle += Math.random() * 10 * Math.PI / 180 * this.angleDirection;
            this.vx = Math.cos(angle);
            this.vy = Math.sin(angle);

            // instead of randomly selecting between [-5, 5] angles, let's keep a "direction" that randomly changes sometimes:
            if (Math.random() < .1) this.angleDirection *= -1;
        }
        // move towards closest: 
        else if (behavior < rand + to) 
        {
            // neighbor = Boid
            let neighbor = this.findClosestNeighbor(flock);
            if (neighbor == null) return;

            let toAngle = Math.atan2(neighbor.y - this.y, neighbor.x - this.x);
            this.rotateToAngle(toAngle);
        }
        // move with closest:
        else if (behavior < rand + to + w) 
        {
            // neighbor = Boid
            let neighbor = this.findClosestNeighbor(flock);
            if (neighbor == null) return;

            let followAngle = Math.atan2(neighbor.vy, neighbor.vx);
            this.rotateToAngle(followAngle);
        } 
        // move away from closest: 
        else if (behavior < rand + to + w + away) 
        {
            // neighbor = Boid
            let neighbor = this.findClosestNeighbor(flock);
            if (neighbor == null) return;

            let avoidAngle = Math.atan2(neighbor.y - this.y, neighbor.x - this.x) + Math.PI;
            this.rotateToAngle(avoidAngle);
        }
        //else go straight
    }

    useMouseBehavior(mousePos) {
        let angleToMouse = Math.atan2(mousePos[1] - this.y, mousePos[0] - this.x);
        this.rotateToAngle(angleToMouse);
    }

    /**
    * Given angle, rotate towards it
    * @param {float} angle to spin towards
    */
    rotateToAngle(angle)
    {
        let myAngle = Math.atan2(this.vy, this.vx);

        // if the difference of angles is greater than PI, then we need to adjust the radians...
        if (Math.abs(angle - myAngle) > Math.PI) {
            // let's adjust the smaller one:
            if (myAngle < angle) myAngle += (2 * Math.PI);
            else angle += (2 * Math.PI);
        }

        if (Math.abs(angle - myAngle) < spinTo) myAngle = angle;
        else myAngle += (angle < myAngle) ? -spinTo : spinTo;

        this.vx = Math.cos(myAngle);
        this.vy = Math.sin(myAngle);
    }

    /**
     * Given the whole flock, find the closest neighbor to this boid (internal function)
     * *
     * @param {Array<Boid>} flock 
     * @returns {Boid} neighbor
     */
    findClosestNeighbor(flock) {
        let boid = null;
        let distance = 6000;

        flock.forEach(b => {
            if (this != b) {
                let dist = Math.sqrt((this.x - b.x)**2 + (this.y - b.y)**2);
                if (dist < distance) {
                    distance = dist;
                    boid = b;
                }
            }
        });

        return boid;
    }
}


/** the actual main program
 * this used to be inside of a function definition that window.onload
 * was set to - however, now we use defer for loading
 */

 /** @type Array<Boid> */
let boids = [];

 /** @type Array<float> = [x, y, w, h] */
let fence = [];

let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("flock"));
let context = canvas.getContext("2d");

let speedSlider = /** @type {HTMLInputElement} */ (document.getElementById("speed"));

// new sliders:
let randSlider = /** @type {HTMLInputElement} */ (document.getElementById("random"));
let toSlider = /** @type {HTMLInputElement} */ (document.getElementById("to"));
let withSlider = /** @type {HTMLInputElement} */ (document.getElementById("with"));
let awaySlider = /** @type {HTMLInputElement} */ (document.getElementById("away"));
randSlider.oninput = () => updateSliderValues(0);
toSlider.oninput = () => updateSliderValues(1);
withSlider.oninput = () => updateSliderValues(2);
awaySlider.oninput = () => updateSliderValues(3);
let randText = /** @type {HTMLInputElement} */ (document.getElementById("randomVal"));
let toText = /** @type {HTMLInputElement} */ (document.getElementById("toVal"));
let withText = /** @type {HTMLInputElement} */ (document.getElementById("withVal"));
let awayText = /** @type {HTMLInputElement} */ (document.getElementById("awayVal"));
let nothingText = /** @type {HTMLInputElement} */ (document.getElementById("nothingVal"));

// setup mouse stuff:
let mousePos = null;    // either is null or is [x, y]

// base snached from WB2 - 02-07-01.js
canvas.onmousemove = function(event) 
{
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    // unfortunately, X,Y is relative to the overall window -
    // we need the X,Y inside the canvas!
    // we know that event.target is a HTMLCanvasElement, so tell typescript
    let box = /** @type {HTMLCanvasElement} */ (event.target).getBoundingClientRect();
    mouseX -= box.left;
    mouseY -= box.top;

    mousePos = [mouseX, mouseY];
};

canvas.onmouseleave = function(event) 
{
    // confirming reset when mouse leaves:
    mousePos = null;
}

// radius around sheep that collisions can trigger within
const collisionRadius = 20;
// how many frames should the flash last for?
const hitIterations = 10;
// rotate radian for turning towards/with a neighbor
const spinTo = 2 * Math.PI / 180;

// sliders can only add up to a max of 1 (percentages) - if too much, subtract from another
// working with 100 instead of 1 to eliminate rounding error
function updateSliderValues(index) {
    let rand = Math.round(Number(randSlider.value) * 100);
    let to = Math.round(Number(toSlider.value) * 100);
    let w = Math.round(Number(withSlider.value) * 100);
    let away = Math.round(Number(awaySlider.value) * 100);

    let total = rand + to + w + away;

    if (total > 100) {
        // try to subtract between rand and to first:
        let surplus = total - 100;
        let current = index == 0 ? to : rand;
        if (current >= surplus) index == 0 ? to -= surplus : rand -= surplus;
        else 
        {
            index == 0 ? to = 0 : rand = 0;

            // now try to subtract between to and with:
            current = index == 1 || index == 0 ? w : to;
            total = rand + to + w + away;
            surplus = total - 100;

            if (current >= surplus) index == 1 || index == 0 ? w -= surplus : to -= surplus;
            else 
            {
                index == 1 || index == 0 ? w = 0 : to = 0;
                
                // now try to subtract between with and away:
                current = index == 1 || index == 0 || index == 2 ? away : w;
                total = rand + to + w + away;
                surplus = total - 100;

                if (current >= surplus) index == 1 || index == 0 || index == 2 ? away  -= surplus : w -= surplus;
                else {
                    console.log("ERROR");
                }
            }
        }
    }

    // text values too so its easier to understand:
    randText.innerText = `${rand}%`;
    toText.innerText = `${to}%`;
    withText.innerText = `${w}%`;
    awayText.innerText = `${away}%`;
    nothingText.innerText = `${100 - rand - to - w - away}%`;

    randSlider.value = String(rand / 100);
    toSlider.value = String(to / 100);
    withSlider.value = String(w / 100);
    awaySlider.value = String(away / 100);
}

function generateFence() {
    // create a box within 16.6667% of the canvas: ( = 100)
    const widthBuffer = canvas.width * 0.16667;
    const heightBuffer = canvas.height * 0.16667;
    
    fence.push(Math.random() * (canvas.width - widthBuffer * 3) + widthBuffer);
    fence.push(Math.random() * (canvas.height - heightBuffer * 3) + heightBuffer);

    // with a min size of buffers too:
    let range = (canvas.width - widthBuffer * 2) - fence[0];
    if (range < 0) {
        console.error("ERROR GENERATING FENCE WIDTH - " + fence);
        fence = [];
        return;
    }
    fence.push(Math.random() * range + widthBuffer);
//
    range = (canvas.height - heightBuffer * 2) - fence[1];
    if (range < 0) {
        console.error("ERROR GENERATING FENCE HEIGHT - " + fence);
        fence = [];
        return;
    }
    fence.push(Math.random() * range + heightBuffer);
    console.log("Generated fence - " + fence);
}

function draw() {
    // background: 
    context.strokeStyle = "#a6e3f5";
    context.lineWidth = 10;
    context.lineCap = context.lineJoin = "round";
    context.fillStyle = "#98c97b";

    context.beginPath();
    context.setLineDash([30, 25]);    
    context.moveTo(0, 0);
    context.lineTo(0, canvas.height);
    context.lineTo(canvas.width, canvas.height);
    context.lineTo(canvas.width, 0);
    context.lineTo(0, 0);
    //context.rect(0, 0, canvas.width, canvas.height);
    context.closePath();
    context.fill();
    context.stroke();

    // obstacle (avoiding draw if invalid fence):
    if (fence != []) {
        context.beginPath(); 
        context.moveTo(fence[0], fence[1]);
        context.lineTo(fence[0], fence[1] + fence[3]);
        context.lineTo(fence[0] + fence[2], fence[1] + fence[3]);
        context.lineTo(fence[0] + fence[2], fence[1]);
        context.lineTo(fence[0], fence[1]);
        context.closePath();
        context.stroke();
    }

    // boids: 
    boids.forEach(boid => boid.draw(context));
}

/**
 * Create some initial boids
 * STUDENT: may want to replace this
 */
//boids.push(new Boid(100, 100));
//boids.push(new Boid(200, 200, -1, 0));
//boids.push(new Boid(300, 300, 0, -1));
//boids.push(new Boid(400, 400, 0, 1));

// lets make the defaults randomized too!
for (let i = 0; i < 4; i++) 
    createRandomBoid();

function createRandomBoid(){
    // adding a 5% buffer to keep Boids within bounds
    
    // too keep a constant speed, abs(vx) + abs(vy) == 1, but can be distributed any way among the two values
    // sign of either also doesn't matter, so randomize it!
    const xSign = Math.random() > 0.5 ? -1 : 1;
    const ySign = Math.random() > 0.5 ? -1 : 1;
    const xVel = Math.random();
    // yVel doesn't need to be saved
    
    const widthBuffer = canvas.width * 0.05;
    const heightBuffer = canvas.height * 0.05;

    boids.push(new Boid(
        Math.random() * (canvas.width - widthBuffer) + widthBuffer, 
        Math.random() * (canvas.height - heightBuffer) + heightBuffer, 
        xSign * xVel,
        ySign * (1-xVel), 
        Math.random() < 0.1 ? "#1c1c1c" : "white"
    ))
}

/**
 * Handle the buttons
 */
document.getElementById("add").onclick = function () {
    for (let i = 0; i < 10; i++) 
    createRandomBoid();

};
document.getElementById("clear").onclick = function () {
    boids = [];
};

let lastTime; // will be undefined by default
/**
 * The Actual Execution
 */
function loop(timestamp) {
    // time step - convert to 1/60th of a second frames
    // 1000ms / 60fps
    const delta = (lastTime ? timestamp-lastTime : 0) * 1000.0/60.0;

    // get speed earlier for steer
    let speed = Number(speedSlider.value);

    // change directions - only if speed is larger than 0
    if (speed > 0)
        boids.forEach(boid => boid.steer(boids, mousePos));
    // move forward
    boids.forEach(function (boid) {
        boid.x += boid.vx * speed;
        boid.y += boid.vy * speed;
    });
    // make sure that we stay on the screen
    boids.forEach(function (boid) {
        /**
         * Students should replace this with collision code
         */

        // wall collision: (added a radius buffer)
        if (boid.x > (canvas.width - collisionRadius) || boid.x < collisionRadius) 
        {
            boid.vx *= -1;
            boid.x = boid.x < collisionRadius ? collisionRadius : canvas.width - collisionRadius;
            boid.showHit = hitIterations;
        } 
        if (boid.y > (canvas.height - collisionRadius) || boid.y < collisionRadius)
        {
            boid.vy *= -1;
            boid.y = boid.y < collisionRadius ? collisionRadius : canvas.height - collisionRadius;
            boid.showHit = hitIterations;
        } 
    });
    // now we can draw
    draw();
    // and loop
    window.requestAnimationFrame(loop);

}
generateFence();
// start the loop with the first iteration
window.requestAnimationFrame(loop);


