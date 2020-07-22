export enum Faces {
    North = 1,
    East,
    South,
    West
}

export class Robot {

     x =-1;
     y =-1;
     orientation: any = '1';

     placeRobot(x: number, y: number, ori: any){
         if(x<0 || x>=5 || y<0 || y>=5){
             return false;
        } else {
             this.x=x;
             this.y=y;
             this.orientation=ori;
             return this.x+', '+this.y+', '+this.orientation;
            //  return true;
        } 
     }


     faceRight(){
        this.orientation = parseInt(this.orientation) + 1;
        if(parseInt(this.orientation)>4){
            this.orientation = 1;
        }
        this.orientation = this.orientation.toString();
        return this.x+', '+this.y+', '+Faces[this.orientation];

     }

     faceLeft(){
        this.orientation =  parseInt(this.orientation) -1 ;
        if(parseInt(this.orientation)<1){
            this.orientation = 4;
        }
        this.orientation = this.orientation.toString();
        return this.x+', '+this.y+', '+Faces[this.orientation];

     }

     move() {

        if((this.orientation === '1' ||  this.orientation === 'North' ) &&  this.y<4){
            this.y++;
        } else  if((this.orientation === '2' ||  this.orientation === 'East') && this.x<4) {
            this.x++;
        } else if((this.orientation === '3' ||  this.orientation === 'South') && this.y>0)  {
            this.y--;
        } else if((this.orientation === '4' ||  this.orientation === 'North' ) && this.x>0) {
            this.x--;
        }

        return this.x+', '+this.y+', '+Faces[this.orientation];

     }

     generateReport(){
        return this.x+', '+this.y+', '+Faces[this.orientation];
        
     }

}