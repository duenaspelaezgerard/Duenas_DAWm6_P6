import { models } from '../componentes/model'
import { panel } from '../componentes/panel' 

export class ModeloPieza {
    constructor (modelo, x = 0, y = 0, angulo = 0) {
      this.modelo = modelo
      this.angulo = angulo
      this.matriz = models[this.modelo].pieza[this.angulo]
      this.x = x
      this.y = y
      this.longitud = this.matriz[0].length
      this.altura = this.matriz.length
    }
  
    girar () {
      panel.sumarPuntos(20)
      this.angulo = this.angulo + 1
      if (this.angulo > 3) {
        this.angulo = 0
      }
      this.matriz = models[this.modelo].pieza[this.angulo]
      this.longitud = this.matriz[0].length
      this.altura = this.matriz.length
      
    }
  }
