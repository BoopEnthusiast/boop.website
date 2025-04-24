// Mostly taken from w3schools: https://www.w3schools.com/howto/howto_js_draggable.asp but written and modified by myself

// There should be an equal amount of pickupable elements and pickupable element spacers
dragElement(document.getElementsByClassName("pickupable-centered"), document.getElementsByClassName("pickupable-spacer"));

function dragElement(pickupableElements, pickupableSpacerElements) {
    for (let i = 0; i < pickupableElements.length; i++) {
        // Get elements
        let element = pickupableElements[i];
        let elementSpacer = pickupableSpacerElements[i];

        if (elementSpacer) {
            if (elementSpacer.getAttribute("data-index") == null) {
                // Set element spacer's height equal to element's
                const rect = element.getBoundingClientRect();
                elementSpacer.style.height = rect.height + "px";
            }
        }

        // Check if spacers have this index
        for (let o = 0; o < pickupableSpacerElements.length; o++) {
            elementSpacer = pickupableSpacerElements[o];
            if (elementSpacer.getAttribute("data-index") == i) {
                // Set element spacer's height equal to element's
                const rect = element.getBoundingClientRect();
                elementSpacer.style.height = rect.height + "px";
                break;
            }
        }

        // Setup variables
        var movedPositionX = 0, movedPositionY = 0, originPositionX = 0, originPositionY = 0;

        // Setup listeners
        element.onmousedown = dragMouseDown;
        element.ontouchstart = dragTouchStart;

        // For when mouse clicks on element
        function dragMouseDown(event) {
            // Something
            event = event || window.event;
            event.preventDefault();

            // Set origin positions
            originPositionX = event.clientX;
            originPositionY = event.clientY;

            // Setup listeners
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDragMouse;
        }

        // For when element is touched
        function dragTouchStart(event) {
            // Something
            event = event || window.event;
            event.preventDefault();

            // Set origin positions
            originPositionX = event.touches[0].clientX;
            originPositionY = event.touches[0].clientY;

            // Setup listeners
            document.ontouchend = closeDragElement;
            document.ontouchmove = elementDragTouch;
        }

        // When element is dragged after being clicked on
        function elementDragMouse(event) {
            // Something
            event = event || window.event;
            event.preventDefault();

            // Calculate moved postition and reset origin position
            movedPositionX = originPositionX - event.clientX;
            movedPositionY = originPositionY - event.clientY;
            originPositionX = event.clientX;
            originPositionY = event.clientY;

            // Update left and top style
            element.style.left = (element.offsetLeft - movedPositionX) + "px";
            element.style.top = (element.offsetTop - movedPositionY) + "px";
        }

        // When element is dragged after being touched
        function elementDragTouch(event) {
            // Something
            event = event || window.event;
            event.preventDefault();

            // Calculate moved postition and reset origin position
            movedPositionX = originPositionX - event.touches[0].clientX;
            movedPositionY = originPositionY - event.touches[0].clientY;
            originPositionX = event.touches[0].clientX;
            originPositionY = event.touches[0].clientY;

            // Update left and top style
            element.style.left = (element.offsetLeft - movedPositionX) + "px";
            element.style.top = (element.offsetTop - movedPositionY) + "px";

            // Don't fix sizing
        }

        // Stop dragging
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
            document.ontouchend = null;
            document.ontouchmove = null;
        }
    }
}