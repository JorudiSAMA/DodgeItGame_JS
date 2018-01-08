function Player() {
    this.name = ""
    this.x = width / 2
    this.y = height - 30
    this.xdir = 0
    this.show = function () {
        fill(255)
        rect(this.x, this.y, 30, 30)
    }

    this.setDir = function (dir) {
        this.xdir = dir
    }

    this.move = function (dir) {
        this.x += this.xdir * 5
    }

    this.setName = function (dir) {
        do {
            var tempname = window.prompt("Enter your username:")
            if (tempname.length > 5 && tempname.length < 24) {
                this.name = tempname
                document.cookie = "username=" + this.name
            } else {
                alert("Username too long or too short. Try again!")
            }
        } while (this.name === "")
    }
}