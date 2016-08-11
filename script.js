var gl;
function start()
{  
    var canvas = document.getElementById("glcanvas");
    
    gl = initWebGL(canvas);
    
    if(gl)
    {
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.enable(gl.DEFTH_TEST);
        gl.defthFunc(gl.LEQUAL);
        gl.clear(gl.COLOR_BUFFER_BIT|gl.DEFTH_BUFFER_BIT);     
    } 
}

function initWebGL(canvas)
{
    
    gl=null;
    
    try
    {
      gl= canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    }
    catch(e);
    
    if(!gl)
    {
      alert("Actualice su navegador");
        gl=null;
    
    }
            
   return gl; 
}

