var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-z0-9\-\.]+$/;

$(document).ready(function(){
  $("#bEnviar").click(function(){
    var nombre= $("#itNombre").val();
    var correo= $("#itEmail").val();
    var telefono= $("#itAsunto").val();

    if(nombre == ""){
      $("#mensaje1").fadeIn();
      return false;
    } else if(nombre.length < 3 || nombre.length > 20) {
      $("#mensaje1").text("Ingrese un nombre entre 9 y 10 caracteres");
      $("#mensaje1").fadeIn();
      return false;

    } else {
      $("#mensaje1").fadeOut();
      if(correo == "" || !expr.test(correo)){
        $("#mensaje2").fadeIn();
        return false;
      } else {
        $("#mensaje2").fadeOut();
        if(telefono == ""){
          $("#mensaje3").fadeIn();
          return false;
          
        } else if(telefono.length < 3 || telefono.length > 20) {
            $("#mensaje3").text("Ingrese un numero entre 9 y 12 caracteres");
            $("#mensaje3").fadeIn();
            return false;
        }
      }
    }
  });
});