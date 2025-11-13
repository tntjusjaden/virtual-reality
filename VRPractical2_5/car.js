class car{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","cyan");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    
    this.obj.setAttribute("depth",1);
    scene.append(this.obj);

  }
}

/*<a-entity rotation="0 0 0" position="0 0.5 -2" scale="0.4 0.4 0.4">
        <a-sphere src="#spidereye" position="0.5 0.25 0.85" radius="0.175"></a-sphere>
        <a-sphere src="#spidereye" position="0.2 0.25 0.85" radius="0.25"></a-sphere>
        <a-sphere src="#spidereye" position="-0.2 0.25 0.85" radius="0.25"></a-sphere>
        <a-sphere src="#spidereye" position="-0.5 0.25 0.85" radius="0.175"></a-sphere>
        <a-entity position="0 0 0">
          <a-sphere src="#spiderskin" position="0 0 0"></a-sphere>
          <a-cylinder src="#spiderskin" position="-1 0.5 0.25" radius="0.25" height="2" rotation="0 0 45"></a-cylinder>
          <a-cylinder src="#spiderskin" position="-2.3 0.3 0.25" radius="0.25" height="2.5" rotation="0 0 -45"></a-cylinder>

          <a-cylinder src="#spiderskin" position="1 0.5 0.25" radius="0.25" height="2" rotation="0 0 -45"></a-cylinder>
          <a-cylinder src="#spiderskin" position="2.3 0.3 0.25" radius="0.25" height="2.5" rotation="0 0 45"></a-cylinder>
        </a-entity>
        <a-entity position="0 0 -1.05">
          <a-sphere src="#spiderskin" position="0 0 0"></a-sphere>
          <a-cylinder src="#spiderskin" position="-1 0.5 0.25" radius="0.25" height="2" rotation="0 0 45"></a-cylinder>
          <a-cylinder src="#spiderskin" position="-2.3 0.3 0.25" radius="0.25" height="2.5" rotation="0 0 -45"></a-cylinder>

          <a-cylinder src="#spiderskin" position="1 0.5 0.25" radius="0.25" height="2" rotation="0 0 -45"></a-cylinder>
          <a-cylinder src="#spiderskin" position="2.3 0.3 0.25" radius="0.25" height="2.5" rotation="0 0 45"></a-cylinder>
        </a-entity>
        <a-entity position="0 0 -2.1">
          <a-sphere src="#spiderskin" position="0 0 0"></a-sphere>
          <a-cylinder src="#spiderskin" position="-1 0.5 0.25" radius="0.25" height="2" rotation="0 0 45"></a-cylinder>
          <a-cylinder src="#spiderskin" position="-2.3 0.3 0.25" radius="0.25" height="2.5" rotation="0 0 -45"></a-cylinder>

          <a-cylinder src="#spiderskin" position="1 0.5 0.25" radius="0.25" height="2" rotation="0 0 -45"></a-cylinder>
          <a-cylinder src="#spiderskin" position="2.3 0.3 0.25" radius="0.25" height="2.5" rotation="0 0 45"></a-cylinder>
        </a-entity>
      </a-entity>

      <!-- Spider -->
      <a-entity rotation="0 0 0" position="-10 1 -15" scale="1 1 1">
        <a-sphere src="#spidereye" position="0.5 0.25 0.85" radius="0.175"></a-sphere>
        <a-sphere src="#spidereye" position="0.2 0.25 0.85" radius="0.25"></a-sphere>
        <a-sphere src="#spidereye" position="-0.2 0.25 0.85" radius="0.25"></a-sphere>
        <a-sphere src="#spidereye" position="-0.5 0.25 0.85" radius="0.175"></a-sphere>
        <a-entity position="0 0 0">
          <a-sphere src="#spiderskin" position="0 0 0"></a-sphere>
          <a-cylinder src="#spiderskin" position="-1 0.5 0.25" radius="0.25" height="2" rotation="0 0 45"></a-cylinder>
          <a-cylinder src="#spiderskin" position="-2.3 0.3 0.25" radius="0.25" height="2.5" rotation="0 0 -45"></a-cylinder>

          <a-cylinder src="#spiderskin" position="1 0.5 0.25" radius="0.25" height="2" rotation="0 0 -45"></a-cylinder>
          <a-cylinder src="#spiderskin" position="2.3 0.3 0.25" radius="0.25" height="2.5" rotation="0 0 45"></a-cylinder>
        </a-entity>
        <a-entity position="0 0 -1.05">
          <a-sphere src="#spiderskin" position="0 0 0"></a-sphere>
          <a-cylinder src="#spiderskin" position="-1 0.5 0.25" radius="0.25" height="2" rotation="0 0 45"></a-cylinder>
          <a-cylinder src="#spiderskin" position="-2.3 0.3 0.25" radius="0.25" height="2.5" rotation="0 0 -45"></a-cylinder>

          <a-cylinder src="#spiderskin" position="1 0.5 0.25" radius="0.25" height="2" rotation="0 0 -45"></a-cylinder>
          <a-cylinder src="#spiderskin" position="2.3 0.3 0.25" radius="0.25" height="2.5" rotation="0 0 45"></a-cylinder>
        </a-entity>
        <a-entity position="0 0 -2.1">
          <a-sphere src="#spiderskin" position="0 0 0"></a-sphere>
          <a-cylinder src="#spiderskin" position="-1 0.5 0.25" radius="0.25" height="2" rotation="0 0 45"></a-cylinder>
          <a-cylinder src="#spiderskin" position="-2.3 0.3 0.25" radius="0.25" height="2.5" rotation="0 0 -45"></a-cylinder>

          <a-cylinder src="#spiderskin" position="1 0.5 0.25" radius="0.25" height="2" rotation="0 0 -45"></a-cylinder>
          <a-cylinder src="#spiderskin" position="2.3 0.3 0.25" radius="0.25" height="2.5" rotation="0 0 45"></a-cylinder>
        </a-entity>
      </a-entity>/*