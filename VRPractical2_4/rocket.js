class Rocket {
 
constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.1;
    this.obj = document.createElement('a-entity');
    this.obj= document.createElement('a-cylinder');
    this.obj.setAttribute('position', {x:x,y:y,z:z});
    this.obj.setAttribute('radius', '2');
    this.obj.setAttribute('height', '5');
    this.obj.setAttribute('color', 'red');
    scene.append(this.obj);

    this.obj = document.createElement('a-cone');
    this.obj.setAttribute('position', {x:x,y:y,z:z});
    this.obj.setAttribute('radius-bottom', '3');
    this.obj.setAttribute('height', '6');
    this.obj.setAttribute('color', 'orange');
    scene.append(this.obj);

    this.obj = document.createElement('a-cone');
    this.obj.setAttribute('position',({x:this.x, y:this.y + 4, z:this.z})
    );
    this.obj.setAttribute('radius-bottom', '3');
    this.obj.setAttribute('height', '6');
    this.obj.setAttribute('color', 'orange');
    scene.append(this.obj);

    this.obj.setAttribute('position',{x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);
   
  }
  fall(){
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
    if(this.y < 0){
      this.y = rnd(10,20);
  }
}
}