class cloud{
  constructor(x,y,z){
     this.obj = document.createElement("a-entity");

     let puff = document.createElement("a-sphere");
     puff.setAttribute("color","blue");
     puff.setAttribute("position","0 5 0");
     puff.setAttribute("radius","1");
     this.obj.append( puff );

     this.obj.setAttribute("position",{x:x, y:y, z:z});
     scene.append( this.obj )
    }
}