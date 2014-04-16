// leave at least 2 line with only a star on it below, or doc generation fails
/**
 *
 *
 * Placeholder for custom user javascript
 * mainly to be overridden in profile/static/custom/custom.js
 * This will always be an empty file in IPython
 *
 * User could add any javascript in the `profile/static/custom/custom.js` file
 * (and should create it if it does not exist).
 * It will be executed by the ipython notebook at load time.
 *
 * Same thing with `profile/static/custom/custom.css` to inject custom css into the notebook.
 *
 * Example :
 *
 * Create a custom button in toolbar that execute `%qtconsole` in kernel
 * and hence open a qtconsole attached to the same kernel as the current notebook
 *
 *    $([IPython.events]).on('app_initialized.NotebookApp', function(){
 *        IPython.toolbar.add_buttons_group([
 *            {
 *                 'label'   : 'run qtconsole',
 *                 'icon'    : 'icon-terminal', // select your icon from http://fortawesome.github.io/Font-Awesome/icons
 *                 'callback': function () {
 *                     IPython.notebook.kernel.execute('%qtconsole')
 *                 }
 *            }
 *            // add more button here if needed.
 *            ]);
 *    });
 *
 * Example :
 *
 *  Use `jQuery.getScript(url [, success(script, textStatus, jqXHR)] );`
 *  to load custom script into the notebook.
 *
 *    // to load the metadata ui extension example.
 *    $.getScript('/static/notebook/js/celltoolbarpresets/example.js');
 *    // or
 *    // to load the metadata ui extension to control slideshow mode / reveal js for nbconvert
 *    $.getScript('/static/notebook/js/celltoolbarpresets/slideshow.js');
 *
 *
 * @module IPython
 * @namespace IPython
 * @class customjs
 * @static
 */

window.turtle = function(selector){
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
  t = new TurtleCanvas(ctx);
  t.run_already_commands(['forward 10']);
  t.run_commands(['left 45', 'forward 50']);
}


function TurtleCanvas(canvasCtx){
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
