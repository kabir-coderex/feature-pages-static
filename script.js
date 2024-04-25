// modal.js
document.getElementById("wpfnl-openModal").addEventListener("click", function () {
  var modal = document.getElementById("wpfnl-modal");
  modal.setAttribute("aria-hidden", "false");
  modal.classList.add("show");
  document.getElementById('wpfnl-modalVideo').focus();
});

document.getElementById("wpfnl-closeModal").addEventListener("click", function () {
  var modal = document.getElementById("wpfnl-modal");
  modal.setAttribute("aria-hidden", "true");
  modal.classList.remove("show");
  document.getElementById("wpfnl-openModal").focus();
});


// Accordion.js
document.querySelectorAll(".wpfnl-accordion-item").forEach((item) => {
    item.querySelector(".wpfnl-accordion-item-header").addEventListener("click", () => {
      item.classList.toggle("open");
    });
});

// Carousle.js Starts

function getScrollAmount() {
    const width = window.innerWidth;
    if (width <= 575) {
        return 300;
    } else if (width <= 767) {
        return 420;
    } else if (width >= 768 && width <= 991) {
        return 620;
    } else {
        return 450; 
    }
}



const carrouselWrapper = document.querySelector('.wpfnl-clients-review-section-container .wpfnl-carousel-wrapper')
document.querySelector('.wpfnl-client-review-section-header .wpfnl-button-wrapper .wpfnl-btn').addEventListener('click', ()=>{
    if(carrouselWrapper){
        carrouselWrapper.scrollLeft += getScrollAmount();
    }
})

document.querySelector('.wpfnl-client-review-section-header .wpfnl-button-wrapper .wpfnl-btn-full-round').addEventListener('click', ()=>{
    if(carrouselWrapper){
        carrouselWrapper.scrollLeft -= getScrollAmount();
    }
})

// Horizontal scroll with mouse drag section starts
let startX, scrollLeft, isDown;
function mouseIsDown(e) {
    isDown = true;
    startX = e.pageX - carrouselWrapper.offsetLeft;
    scrollLeft = carrouselWrapper.scrollLeft;
}

function mouseUp() {
    isDown = false;
}

function mouseLeave() {
    isDown = false;
}

function mouseMove(e) {
    if (isDown) {
    e.preventDefault();

    // Move Horizontally
    let x = e.pageX - carrouselWrapper.offsetLeft;
    let walkX = x - startX;
    carrouselWrapper.scrollLeft = scrollLeft - walkX;
    }
}

carrouselWrapper.addEventListener('mousemove', mouseMove);
carrouselWrapper.addEventListener('mouseleave', mouseLeave);
carrouselWrapper.addEventListener('mouseup', mouseUp);
carrouselWrapper.addEventListener('mousedown', mouseIsDown);

window.addEventListener("load", () => {
    // Define a more reasonable interval for visual smoothness and performance
    const intervalDuration = 5000; // Scroll every 3 seconds
    const scrollAmount = getScrollAmount(); // Get scroll amount once to avoid recalculating

    const interval = setInterval(() => {
        console.log('so far so good');

        if (carrouselWrapper) {
            // Check if we've reached the end of the carousel
            if (carrouselWrapper.scrollLeft + carrouselWrapper.clientWidth >= carrouselWrapper.scrollWidth) {
                carrouselWrapper.scrollLeft = 0; // Reset to start or you could clear the interval to stop
                // clearInterval(interval); // Uncomment to stop scrolling at the end
            } else {
                carrouselWrapper.scrollLeft += scrollAmount;
            }
        }
    }, intervalDuration);
});

// Carousle.js Ends



