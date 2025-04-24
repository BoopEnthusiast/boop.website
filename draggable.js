// Mostly taken from w3schools: https://www.w3schools.com/howto/howto_js_draggable.asp and written myself
dragElement(document.getElementsByClassName("pickupable-centered"));

function dragElement(elements) {
    for (let element of elements) {
        console.log(element);

        let movedPositionX = 0, movedPositionY = 0, originPositionX = 0, originPositionY = 0;

        element.onmousedown = dragMouseDown;

        function dragMouseDown(event) {
            event = event || window.event;
            event.preventDefault();

            originPositionX = event.clientX;
            originPositionY = event.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(event) {
            event = event || window.event;
            event.preventDefault();

            movedPositionX = originPositionX - event.clientX;
            movedPositionY = originPositionY - event.clientY;
            originPositionX = event.clientX;
            originPositionY = event.clientY;

            element.style.left = (element.offsetLeft - movedPositionX) + "px";
            element.style.top = (element.offsetTop - movedPositionY) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
}