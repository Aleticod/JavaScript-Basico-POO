
function videoPlay(id) {
  const urlSecreta = "https://EstoEsSecreto.com/" + id;
  console.log("Se esta reproduciendo url " + urlSecreta);
}

function videoStop(id) {
  const urlSecreta = "https://EstoEsSecreto.com/" + id;
  console.log("Pausamos " + urlSecreta);
}

export class PlatziClass {
  // Atributos
  #name;
  #videoID;
  // Costructor
  constructor({
    name,
    videoID,
  }) {
    this.#name = name;
    this.#videoID = videoID;
  }
  // Metodos set y get

  // Metodos auxiliares
  reproducir() {
    videoPlay(this.#videoID);
  }

  pausar() {
    videoStop(this.#videoID)
  }
}