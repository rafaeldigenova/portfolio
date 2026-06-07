export class ClickableElement {
    x: number;
    y: number;
    width: number;
    height: number;
    mousedown: () => void;
    mouseup: () => void;

    hovered: boolean = false;
    selected: boolean = false;
    
    constructor(x: number, y: number, width: number, height: number, mousedown: () => void, mouseup: () => void) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.mousedown = mousedown;
        this.mouseup = mouseup;
    }

    isHovered(mouseX: number, mouseY: number) {
        return (mouseX >= this.x && mouseX <= this.x + this.width &&
                mouseY >= this.y && mouseY <= this.y + this.height);
    }

    hover() {
        this.hovered = true;
    }

    leave () {
        this.hovered = false;
        if (this.selected) {
            this.selected = false;
            this.mouseup();
        }
    }

    doMouseDown() {
        this.selected = true;
        this.mousedown();
    }

    doMouseUp() {
        this.selected = true;
        this.mouseup();
    }
}