// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// move() function
function move() {
    let id = null;
    let position = 0;
    const element = document.getElementById("frame");
    // Freezes the execution
    clearInterval(id);

    id = setInterval(frame, 5);

    // frame() function
    function frame() {
        if (position == 350) {
            /** Stops the execution process set
             * by the "setInterval" method
             */
            clearInterval(id);
        }
        else {
            position++;
            element.style.top = position + "px";
            element.style.left = position + "px";
        }
    }
}
