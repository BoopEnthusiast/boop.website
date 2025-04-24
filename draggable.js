// Mostly taken from w3schools: https://www.w3schools.com/howto/howto_js_draggable.asp but written and modified by myself

dragElement(document.getElementsByClassName("pickupable-centered"));

function dragElement(elements) {
    for (let element of elements) {
        var movedPositionX = 0, movedPositionY = 0, originPositionX = 0, originPositionY = 0;

        element.onmousedown = dragMouseDown;
        element.ontouchstart = dragTouchStart;

        function dragMouseDown(event) {
            event = event || window.event;
            event.preventDefault();

            originPositionX = event.clientX;
            originPositionY = event.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDragMouse;
        }

        function dragTouchStart(event) {
            event = event || window.event;
            event.preventDefault();

            originPositionX = event.touches[0].clientX;
            originPositionY = event.touches[0].clientY;
            document.ontouchend = closeDragElement;
            document.ontouchmove = elementDragTouch;
        }

        function elementDragMouse(event) {
            event = event || window.event;
            event.preventDefault();

            movedPositionX = originPositionX - event.clientX;
            movedPositionY = originPositionY - event.clientY;
            originPositionX = event.clientX;
            originPositionY = event.clientY;

            element.style.left = (element.offsetLeft - movedPositionX) + "px";
            element.style.top = (element.offsetTop - movedPositionY) + "px";
            const rect = element.getBoundingClientRect();
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            if (rect.right + 500 > vw) {
                element.style.right = (rect.right - vw - 110) + "px";
            } else {
                element.style.right = "";
            }
        }

        function elementDragTouch(event) {
            event = event || window.event;
            event.preventDefault();

            movedPositionX = originPositionX - event.touches[0].clientX;
            movedPositionY = originPositionY - event.touches[0].clientY;
            originPositionX = event.touches[0].clientX;
            originPositionY = event.touches[0].clientY;

            element.style.left = (element.offsetLeft - movedPositionX) + "px";
            element.style.top = (element.offsetTop - movedPositionY) + "px";
            const rect = element.getBoundingClientRect();
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            if (rect.right + 500 > vw) {
                element.style.right = (rect.right - vw - 110) + "px";
            } else {
                element.style.right = "";
            }
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
            document.ontouchend = null;
            document.ontouchmove = null;
        }
    }
}