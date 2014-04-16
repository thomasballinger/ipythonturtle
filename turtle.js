window.turtle = function(selector){
  require(['//cdnjs.cloudflare.com/ajax/libs/paper.js/0.9.12/paper.js'], function(){
    console.log(window.paper);
    var $output = $('#'+selector);
    var $canvas = $output.find('canvas');
    if ($canvas.length == 0){
      $canvas = $('<canvas/>', {'class':'turtle-canvas'});
      $output[0].appendChild($canvas[0]);
    }
    var canvas = $canvas[0];
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,150,75);
    console.log('running turtle code');
    t = new TurtleCanvas(canvas);
    console.log('already:', $output.data('already-run'));
    console.log('to run:', $output.data('to-run'));
    t.run_already_commands($output.data('already-run'));
    t.run_commands($output.data('to-run'));
  }


  function TurtleCanvas(canvas){
    paper.setup(canvas);
  }

  TurtleCanvas.prototype = {
    run_already_commands: function(cmds){
      cmds.forEach(function(cmd){
        console.log('running cmd', cmd, 'quickly');
      });
    },
    run_commands: function(cmds){
      cmds.forEach(function(cmd){
        console.log('running cmd', cmd, 'slowly');
      });
    }
  }
}
