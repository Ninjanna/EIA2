declare namespace seaworld_inheritance {
    class Bubbles extends MovingObjects {
        r: number;
        angle: number;
        constructor();
        update(): void;
        draw(): void;
        move(): void;
    }
}
