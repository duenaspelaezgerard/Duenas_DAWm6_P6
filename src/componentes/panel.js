import { ModeloPieza } from '../componentes/clases'
import { models } from '../componentes/model'
import { vistaGuardarPartida } from '../vistas/vistaGuardarPartida'

export const panel = {
  matriz: [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],

  pintaPanel: () => {
    const IDpanel = document.querySelector('#panel')
    console.log()
    IDpanel.innerHTML = ''

    let color = models[panel.nuevaPieza.modelo].color
    for (let fila = 0; fila < panel.matriz.length-1; fila++) {
      let divFilas = '<div class="fila d-flex justify-content-center">'

      for (let columna = 1; columna < panel.matriz[columna].length-1; columna++) {
        let divCeldas = ''

        if (panel.matriz[fila][columna] == 0) {
          divCeldas += '<div class="celda bg-dark border-secondary"></div>'
        }

        if(panel.matriz[fila][columna] == (panel.nuevaPieza.modelo + 2)){
          divCeldas = `<div class="celda border-secondary" style="background-color: ${color};"></div>`;
        }

        divFilas += divCeldas
      }
      divFilas += '</div>'
      IDpanel.innerHTML += divFilas
    }
  },

  crearNuevaPieza: () => {
    const aleatorioModelo = Math.floor(Math.random() * 7)

    let ancho = models[aleatorioModelo].pieza[0]
    ancho = ancho[0].length

    let aleatorioX
    switch (ancho) {
      case 1:
        aleatorioX = Math.floor(Math.random() * 10) + 1
        break
      case 2:
        aleatorioX = Math.floor(Math.random() * 9) + 1
        break
      case 3:
        aleatorioX = Math.floor(Math.random() * 8) + 1
        break
      case 4:
        aleatorioX = Math.floor(Math.random() * 7) + 1
        break
    }

    const pieza = new ModeloPieza(aleatorioModelo, aleatorioX, 1, 0)

    return pieza
  },

  nuevaPieza: null,

  insertarPieza: () => {
    for (let i = 0; i < panel.nuevaPieza.altura; i++) {
      for (let j = 0; j < panel.nuevaPieza.longitud; j++) {
        if(panel.nuevaPieza.matriz[i][j]==(panel.nuevaPieza.modelo + 2)){
          panel.matriz[panel.nuevaPieza.y+i][panel.nuevaPieza.x+j] = panel.nuevaPieza.matriz[i][j]
        }
      }
    }
  },
  puntos: 0,
  lineas: 0,
  niveles: 1,


  controlTeclas: () => {
    
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowRight':
          panel.moverDra()
          break
        case 'ArrowLeft':
          panel.moverIzq()
          break
        case 'ArrowDown':
          panel.bajar()
          break
        case 'ArrowUp':
          panel.borrarPieza()
          panel.nuevaPieza.girar()
          break
      }
    })
  },

  borrarPieza: () => {
    for (let i = 0; i < panel.nuevaPieza.altura; i++) {
      for (let j = 0; j < panel.nuevaPieza.longitud; j++) {
        if(panel.nuevaPieza.matriz[i][j]==(panel.nuevaPieza.modelo + 2)){
          panel.matriz[panel.nuevaPieza.y+i][panel.nuevaPieza.x+j] = 0
        }
      }
    }
  },

  moverDra: () => {
    if (panel.nuevaPieza) {
      panel.borrarPieza()
      if((panel.nuevaPieza.x+panel.nuevaPieza.longitud) < 11){
        panel.nuevaPieza.x++
        panel.sumarPuntos(10)
        document.querySelector('#puntos').innerHTML = panel.puntos

      }
      panel.insertarPieza()
      panel.pintaPanel()
    }
  },

  moverIzq: () => {
    if (panel.nuevaPieza) {
      panel.borrarPieza()
      if(panel.nuevaPieza.x > 1){
        panel.nuevaPieza.x--
        panel.sumarPuntos(10)
        document.querySelector('#puntos').innerHTML = panel.puntos
      }
      panel.insertarPieza()
      panel.pintaPanel()
    }
  },

  bajar: () => {
      panel.borrarPieza()
      if((panel.nuevaPieza.y+panel.nuevaPieza.altura) < 21){
        panel.nuevaPieza.y++
        panel.sumarPuntos(10)
        document.querySelector('#puntos').innerHTML = panel.puntos
      }
      panel.insertarPieza()
      panel.pintaPanel()
      if((panel.nuevaPieza.y+panel.nuevaPieza.altura)==panel.matriz.length-1){
        panel.sumarPuntos(50)
        clearInterval(panel.tiempo)
        document.querySelector('main').innerHTML= vistaGuardarPartida.template;
        vistaGuardarPartida.script()
          // panel.nuevaPieza=panel.crearNuevaPieza()
      }

    

        //   for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
        //     if (panel.matriz[panel.nuevaPieza.y + panel.nuevaPieza.altura][panel.nuevaPieza.x + x] == 1) {
        //         panel.sumarPuntuacion(50)
        //         document.querySelector('main').innerHTML= vistaGuardarPartida.template;
        //         vistaGuardarPartida.script()
        //         // panel.insertarPieza(); 
        //         // panel.nuevaPieza = panel.crearNuevaPieza(); 
        //     }else{
        //         panel.sumarPuntuacion(10)
        //         panel.nuevaPieza.y += 1;
        //         panel.insertarPieza();
        //         panel.pintaPanel();
        //     }
        // }
  },

  tiempo: null,
  iniciarMovimiento: () => {
    panel.tiempo = setInterval(() => {
      panel.bajar();
    }, 1000); 
  },

  sumarPuntos: (puntos) => {
    panel.puntos += puntos
    document.querySelector('#puntos').innerHTML = panel.puntos
    panel.comprobarNivel(panel.puntos)
  },

  comprobarNivel: (puntosTotales) => {

    if(puntosTotales % panel.niveles==0){
      panel.niveles+=1
      
      document.querySelector('#nivel').innerHTML = panel.niveles
    }

  }
  

}
