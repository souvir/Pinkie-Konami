  var keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  var maxX = $(window).width() - 200;
  var maxY = $(window).height() - 200;
  var pos = 0;
  $(document).keydown(function (e) {
      if (e.keyCode === keys[pos++]) {
          if (pos === keys.length) {
              konami_ok();
              pos = 0;
              return false;
          }
      }
      else {
          pos = 0;
      }
  });

  function konami_ok(){
     var go=setInterval(ponyInvasion, 1000);
  }

  ponyInvasion = function(){
    var ponyNumber = Math.floor(Math.random() * 198) + 1;
    var posX = Math.floor(Math.random() * (maxX - 20)) + 20;
    var posY = Math.floor(Math.random() * (maxY - 20)) + 20;
    $('body').prepend($('<img>',{class:'pinkie',src:'images/pinkie/pinkie'+ponyNumber+'.gif',style:"top:"+posY+"px;left:"+posX+"px"}))
  }