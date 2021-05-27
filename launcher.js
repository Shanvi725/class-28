class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.Launcher = Constraint.create(options);
        World.add(world, this.Launcher);
    }
    
    fly(){
     this.Launcher.bodyA = null;
    }
    attach(body){
        this.Launcher.bodyA = body;
    }

    display(){
        if(this.Launcher.bodyA){
            strokeWeight(4);
            line(this.Launcher.bodyA.position.x,this.Launcher.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
        
    }
    
}