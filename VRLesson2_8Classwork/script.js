let target;

window.addEventListener("DOMContentLoaded",function() {
  target = document.querySelector("#target");
  target.a = 0;
  target.da = 0.8;
  target.fallen = false;
  loop();
})

function loop(){
    if (!target.fallen) {
      target.a += target.da;
      if (target.a >= 90) { // when it reaches the ground stop
      target.a = 90;
      target.da = 0;
      target.fallen = true;
    }
  }
  target.setAttribute("rotation",{x:target.a, y:0, z: 0});
  
  window.requestAnimationFrame( loop );
}