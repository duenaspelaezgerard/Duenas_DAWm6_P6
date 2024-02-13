import { buscar, orden, partidas } from '../funciones.js'



export const vistaRanking = {
    template:  //html
    `
        <div id="ranking" class="m-5 p-5 bg-dark"></div>

        <div id="partidas" class="m-5 p-5 bg-dark"></div>

    `,
    script : ()=>{

        
        pintaRanking()

         function pintaRanking(){
            let tabla=` 
            <h2 class="text-center text-light">Ranking</h2>
            <table class="table table-dark align-middle">
              <theader>
                <tr class="bg-dark">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </theader>
              <tbody>
                <tr>
                  <td class="fs-2">1</td>
                  <td><img src="../img/account-avatar-profile-user-svgrepo-com.svg" width="50"></img></td>
                  <td>ANDER</td>
                  <td>1255</td>
                </tr>
                <tr>
                  <td class="fs-2">2</td>
                  <td><img src="../img/account-avatar-profile-user-svgrepo-com.svg" width="50"></img></td>
                  <td>ANDER</td>
                  <td>1255</td>
                </tr>
                <tr>
                  <td class="fs-2">3</td>
                  <td><img src="../img/account-avatar-profile-user-svgrepo-com.svg" width="50"></img></td>
                  <td>ANDER</td>
                  <td>1255</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
            `
            document.querySelector("#ranking").innerHTML=tabla;
            console.log(tabla);
          }
          
          pintaTaula(partidas)

          function pintaTaula(partidas){
            let tabla= 
              `
                <h2 class="text-center text-light">Partidas</h2>
                <div class="input-group mb-3">
                  <input id="inputBuscar" type="text" class="form-control" placeholder="Buscador" aria-label="Buscador" aria-describedby="button-addon2" />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon1"
                  >
                    <i class="bi bi-x-lg"></i>
                  </button>

                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    <i class="bi bi-search"></i>
                  </button>
                </div>
                <table class="table table-dark">
                  <theader>
                    <tr>
                      <td></td>
                      <td>Nick <i id="flechaNick" class="bi bi-arrow-up-square"></i></td>
                      <td>Puntuación <i id="flechaPunt" class="bi bi-arrow-up-square"></i></td>
                      <td>Fecha <i id="flechaFecha" class="bi bi-arrow-up-square"></i></td>
                    </tr>
                  </theader>
                  <tbody id="cuerpoTabla">
              `

              partidas.forEach(element => {
              tabla += `<tr><td>${element.avatar}</td><td>${element.nick}</td>
              <td>${element.puntos}</td><td>${element.fecha}</td></tr>`
              });
          
              tabla+=
              `
                  </tbody>
                  <tfoot></tfoot>
                </table>
              `
              document.querySelector("#partidas").innerHTML=tabla;

          }

          const btnEliminar = document.querySelector("#button-addon1")
          btnEliminar.addEventListener("click", function(){
            document.querySelector("#inputBuscar").value = ""
            pintaTaula(partidas)
          })

          const btnLupa = document.querySelector("#button-addon2")
          btnLupa.addEventListener("click", function(){
            let texto = document.querySelector("#inputBuscar").value
            buscar(texto)
          })

          const flechaNick = document.querySelector("#flechaNick")
          flechaNick.addEventListener("click", function(){
            orden('nick', 'descendente')
          })

          const flechaPunt = document.querySelector("#flechaPunt")
          flechaPunt.addEventListener("click", function(){
            orden('punt', 'descendente')
          })

          const flechaFecha = document.querySelector("#flechaFecha")
          flechaFecha.addEventListener("click", function(){
            orden('fecha', 'descendente')
          })

    }
}