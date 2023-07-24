class Cookie{
    constructor(color){
        this.color = color;
    }

    getColor(color){
        console.log(this.color)
    }

    setColor(color){
        this.color = color;
    }
}

let cookieOne = new Cookie('yellow')
let cookieTwo = new Cookie('blue')

cookieOne.getColor()