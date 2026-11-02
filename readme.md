In setup() I define the initial settings:
- createCanvas(windowWidth, windowHeight): this way I create a full-screen canvas that adapts to the size of the browser window.
- noStroke(): to remove the borders from geometric shapes.

In draw 
First if/else condition:
- mouseX < width / 2): I check the horizontal position of the cursor.
- If the cursor is on the left half of the Canvas: it becomes light blue (background(200, 230, 250)) and the circle becomes yellow (fill(255, 204, 0)).
- If the cursor is on the right half of the Canvas: it becomes dark blue (background(25, 25, 112)) and the circle becomes white (fill(255, 255, 255)).
Second if/else condition:
- (mouseIsPressed): I control the size of the circle which, when pressed, goes from size (d) 150 pixels to 250 pixels and is therefore enlarged.
In the final part:
- function: (circle(mouseX, mouseY, d)) = mouseX and mouseY allow the circle shape to always follow the cursor's position on the screen.
- d indicates the size of the circle which is defined by the previous point.

AI Support 
I was helped to:
1. Understand which RGB codes corresponded to the various colors.
2. Write the if/else conditions (in particular to manage the circle's size in pixels and to understand how to define the mouse position on the canvas).

This interactive artwork explores the concept of duality, representing the contrast between day and night, warmth and cold. By dividing the canvas into two distinct atmospheres, a sun represented by a yellow circle on a light blue background and a moon represented by a white circle on a dark blue canvas, the piece allows the user to navigate between two different emotional states. The second part of the interaction is represented by by clicking the circle. With this action increases the physical connection between the user and the digital space. 
