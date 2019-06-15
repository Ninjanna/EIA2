/*
Aufgabe 10: Canvas
Name: Jeanna Nechypurenko
Matrikel: 275537
Datum: 02.06.2019

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace seaworldcanvas {
   // export let crc: CanvasRenderingContext2D;
    export class Fishy {
		x: number;
		y: number;
        dx: number;
        dy: number;
        c1: string;
        c2: string;
		
		draw(): void {
            //Körper
            crc.beginPath();
            crc.moveTo(this.x , this.y );
            crc.quadraticCurveTo(this.x + 30, this.y - 30, this.x + 70, this.y);
            crc.quadraticCurveTo(this.x + 80, this.y, this.x + 100, this.y - 10);
            crc.quadraticCurveTo(this.x + 85, this.y + 5, this.x + 100, this.y + 25);
            crc.quadraticCurveTo(this.x + 80, this.y + 10, this.x + 70, this.y + 10);
            crc.quadraticCurveTo(this.x + 25, this.y + 30, this.x, this.y);
    
            // fill && stroke
            crc.fillStyle = this.c1;
            crc.fill();
            crc.closePath();
            crc.strokeStyle = this.c1;
            crc.lineWidth = 1;
            crc.stroke();
    
            //this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.
            // streifen
            crc.beginPath();
            crc.moveTo(this.x + 30, this.y - 15);
            crc.quadraticCurveTo(this.x + 35, this.y, this.x + 30, this.y + 18);
    
            // fill && stroke
            crc.fillStyle = this.c2;
            crc.fill();
            crc.closePath();
            crc.strokeStyle = this.c2;
            crc.lineWidth = 1;
            crc.stroke();
    
            // streifen
            crc.beginPath();
            crc.moveTo(this.x + 45, this.y - 14);
            crc.quadraticCurveTo(this.x + 50, this.y, this.x + 45, this.y + 18);
    
            // fill && stroke
            crc.fillStyle = this.c2;
            crc.fill();
            crc.closePath();
            crc.strokeStyle = this.c2;
            crc.lineWidth = 1;
            crc.stroke();
    
            // streifen
            crc.beginPath();
            crc.moveTo(this.x + 60, this.y - 7);
            crc.quadraticCurveTo(this.x + 80, this.y + 5, this.x + 60, this.y + 14);
    
            // fill && stroke
            crc.fillStyle = this.c2;
            crc.fill();
            crc.closePath();
            crc.strokeStyle = this.c2;
            crc.lineWidth = 1;
            crc.stroke();
    
            //this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.
            //Auge
            crc.beginPath();
            crc.arc(this.x + 15, this.y - 3, 3, 0, 2 * Math.PI);
            crc.strokeStyle = "black";
            crc.lineWidth = 2;
            crc.stroke();
            crc.fillStyle = "whitesmoke";
            crc.fill();
    
            //Auge - Pupille 
            crc.beginPath();
            crc.arc(this.x + 14, this.y - 3, 1, 0, 2 * Math.PI);
            crc.strokeStyle = "white";
            crc.fillStyle = "black";
            crc.stroke();
            crc.fill();
    
    
            //Mund
            crc.beginPath();
            crc.moveTo(this.x + 5, this.y + 8);
            crc.quadraticCurveTo(this.x + 15, this.y + 13, this.x + 20, this.y + 3);
            crc.strokeStyle = "transparent";
            crc.fillStyle = "LightSkyBlue";
            crc.stroke();
            crc.fill();
        }

		update(): void {
			this.move();
			this.draw();
		}

		move(): void {
			this.x -= this.dx;
			if (this.x + 30 < 0) {
                this.x = 2000;
            }
		}
	}

    export class Fishy2 {
		x: number;
		y: number;
        dx: number;
        dy: number;
        c1: string;
        c2: string;
		
		draw(): void {
            //Körper
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x + 30, this.y - 50, this.x + 70, this.y - 10);
            crc.quadraticCurveTo(this.x + 80, this.y, this.x + 100, this.y - 40);
            crc.quadraticCurveTo(this.x + 80, this.y + 5, this.x + 100, this.y + 50);
            crc.quadraticCurveTo(this.x + 80, this.y + 10, this.x + 70, this.y + 20);
            crc.quadraticCurveTo(this.x + 25, this.y + 50, this.x, this.y);

            // fill && stroke
            crc.fillStyle = this.c1;
            crc.fill();
            crc.closePath();
            crc.strokeStyle = this.c1;
            crc.lineWidth = 1;
            crc.stroke();

            //this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.
            // streifen
            crc.beginPath();
            crc.moveTo(this.x + 30, this.y - 27);
            crc.quadraticCurveTo(this.x + 40, this.y, this.x + 30, this.y + 30);

            // fill && stroke
            crc.fillStyle = this.c2;
            crc.fill();
            crc.closePath();
            crc.strokeStyle = this.c2;
            crc.lineWidth = 1;
            crc.stroke();

            // streifen
            crc.beginPath();
            crc.moveTo(this.x + 45, this.y - 27);
            crc.quadraticCurveTo(this.x + 55, this.y, this.x + 45, this.y + 31);

            // fill && stroke
            crc.fillStyle = this.c2;
            crc.fill();
            crc.closePath();
            crc.strokeStyle = this.c2;
            crc.lineWidth = 1;
            crc.stroke();

            // streifen
            crc.beginPath();
            crc.moveTo(this.x + 60, this.y - 19);
            crc.quadraticCurveTo(this.x + 70, this.y + 5, this.x + 60, this.y + 26);

            // fill && stroke
            crc.fillStyle = this.c2;
            crc.fill();
            crc.closePath();
            crc.strokeStyle = this.c2;
            crc.lineWidth = 1;
            crc.stroke();

            //this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.this.
            //Auge
            crc.beginPath();
            crc.arc(this.x + 17, this.y - 6, 3, 0, 2 * Math.PI);
            crc.strokeStyle = "black";
            crc.lineWidth = 2;
            crc.stroke();
            crc.fillStyle = "whitesmoke";
            crc.fill();

            //Auge - Pupille 
            crc.beginPath();
            crc.arc(this.x + 16, this.y - 6, 1, 0, 2 * Math.PI);
            crc.strokeStyle = "white";
            crc.fillStyle = "black";
            crc.stroke();
            crc.fill();

            //Mund
            crc.beginPath();
            crc.moveTo(this.x + 3, this.y + 15);
            crc.quadraticCurveTo(this.x + 13, this.y + 18, this.x + 23, this.y + 8);
            crc.strokeStyle = "transparent";
            crc.fillStyle = "LightSkyBlue";
            crc.stroke();
            crc.fill();
        }

		update(): void {
			this.move();
			this.draw();
		}

		move(): void {
			this.x -= this.dx;
			if (this.x + 30 < 0) {
                this.x = 2000;
            }
        }
    }

    export class Bubbles {
        x: number;
        y: number;
		r: number;
        dx: number;
        dy: number;
        cS: string;
        cF: string;
        angle: number = 2 * Math.PI;
		
		draw(): void {
            crc.beginPath();
            crc.arc(this.x, this.y, this.r, 0, this.angle);
            crc.strokeStyle = this.cS;
            crc.stroke();
            crc.fillStyle = this.cF;
            crc.fill();
            crc.closePath();
            
        }

		update(): void {
			this.move();
			this.draw();
		}

		move(): void {
			this.y -= this.dy;
			if (this.y < 0) {
                this.y = 600;
            }
		}
	}

	
}