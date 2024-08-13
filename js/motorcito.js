var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
  if (estadoLicuadora == "apagada") {
    estadoLicuadora = "encendida";
    hacerBrrBrr();
    licuadora.classList.add("active");
  } else {
    estadoLicuadora = "apagada";
    hacerBrrBrr();
    licuadora.classList.remove("active");
  }
}

function hacerBrrBrr() {
  if (sonidoLicuadora.paused) {
    botonLicuadora.play();
    sonidoLicuadora.play();
  } else {
    botonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.CurrentTime= 0;
  }
}
