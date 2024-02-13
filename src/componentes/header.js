import { vistaRanking } from "../vistas/vistaRanking.js"
import { vistaHome } from "../vistas/vistaHome.js"
import { vistaJoc } from "../vistas/vistaJoc.js";




export const header = {
    template:  //html
    `
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <div class="mx-auto">
          <button id="home" class="btn btn-success ms-2">HOME</button>
          <button id="rankings" class="btn btn-success ms-2">RANKING</button>
          <button id="juego" class="btn btn-success ms-2">JUEGO</button>
        </div>
      </div>
    </nav>
    `,
    script : ()=>{
        document.querySelector('#home').addEventListener('click', () => {
          document.querySelector('main').innerHTML= vistaHome.template;
        });

        document.querySelector('#rankings').addEventListener('click', () => {
          document.querySelector('main').innerHTML= vistaRanking.template;
          vistaRanking.script()
        });

        document.querySelector('#juego').addEventListener('click', () => {
          document.querySelector('main').innerHTML= vistaJoc.template;
          vistaJoc.script()
        });


    }
}