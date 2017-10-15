export class Point {
    constructor(private _x?: number,private _y?: number){
    }
    drawforClass(){
        console.log('X: '+this._x+', Y: ' + this._y);
    }

    getDistance(another: Point){

    }
    get x(){
        return this._x;
    }
    set x(value){
        if(value<0){
            throw new Error('Value cannnot be less than zero')
        }
        this._x = value;
    }
}