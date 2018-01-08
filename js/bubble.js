function Bubble() {
    this.x = random(50, 550)
    this.y = -100
    this.w = 100
    this.speed = 4
    this.show = function () {
        fill(255, 0, 200)
        rect(this.x, this.y, this.w, this.w)
    }
    this.move = function (dir) {
        this.y += this.speed
    }

    this.hits = function (player) {
        let hit = false
        hit = collideRectRect(this.x, this.y, this.w, this.w, player.x, player.y, 30, 30) // External library 'collide2d' method
        return hit
    }

    this.goesOff = function(){
        if(this.y > 600){
            return true
        } 
        
        
    }
}