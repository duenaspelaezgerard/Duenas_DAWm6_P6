import { vistaRanking } from "../vistas/vistaRanking.js"
import { vistaJoc } from "../vistas/vistaJoc.js";
import { panel } from "../componentes/panel.js";
import { insertaNuevaPartida, modificaNick, modificaData2, modificaData } from "../funciones.js";

export const vistaGuardarPartida = {
    template:  //html
    `
        <div id="juego">
            <div class="row ">
                <div
                    class="col-4 d-flex flex-column justify-content-end align-items-center p-5"
                >
                    <h4>Nivel: <span id="nivel">2</span></h4>
                    <h4>Tiempo: <span id="tiempo">5:22</span></h4>
                    <h4>Lineas: <span id="lienas">2</span></h4>
                    <h4>Puntos: <span id="puntos">0</span></h4>
                </div>
                <!-- Panel central -->
                <div class="col-4 d-flex justify-content-center">
                    <div id="panel" class="p-5">
                        <h3>¿Quieres guardar la partida?</h3>
                        <button id="btnSi" class="btn btn-success ms-2">SI</button>
                        <button id="btnNo" class="btn btn-success ms-2">NO</button>
                    </div>
                </div>
                <div
                    class="col-4 d-flex flex-column justify-content-start align-items-center p-5"
                >
                    <div id="piezaSiguiente">
                        <h4>Pieza siguiente:</h4>
                        <div class="piezaSiguiente m-2">
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                            </div>
                        </div>
                        <div class="piezaSiguiente m-2">
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                            </div>
                        </div>
                        <div class="piezaSiguiente m-2">
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div id="piezaGuardada">
                        <h4>Pieza guardada:</h4>
                        <div class="piezaGuardada">
                            <div class="piezaSiguiente m-2">
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-warning bg-gradient border-dark"></div>
                                    <div class="celda bg-warning border-secondary"></div>
                                </div>
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-warning bg-gradient border-dark"></div>
                                    <div class="celda bg-warning border-secondary"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    script : ()=>{
        document.querySelector('#puntos').innerHTML = panel.puntos
        document.querySelector('#btnSi').addEventListener('click', () => {
        
            const nick = prompt('Por favor, ingresa tu nick:');
            if (nick === null || nick === '') {
                alert('Debes ingresar un nick para continuar.');
                return
            }

            const nickBueno = modificaNick (nick)

            const datosJugador = {
                avatar: '<img src="../img/account-avatar-profile-user-svgrepo-com.svg" width="50"></img>' ,
                nick:  nickBueno,
                puntos:  panel.puntos,
                fecha: ''
            }
            
            let fechaActual = new Date();
            fechaActual = modificaData2(fechaActual)
            fechaActual = modificaData(fechaActual)
            
            datosJugador.fecha = `${fechaActual}`;

            console.log(datosJugador)
            insertaNuevaPartida(datosJugador)
            document.querySelector('main').innerHTML= vistaRanking.template;
            vistaRanking.script()
        });
  
        document.querySelector('#btnNo').addEventListener('click', () => {
            panel.puntos = 0
            panel.matriz = [
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
            ]
            document.querySelector('main').innerHTML= vistaJoc.template;
            vistaJoc.script()
        });
    }
}