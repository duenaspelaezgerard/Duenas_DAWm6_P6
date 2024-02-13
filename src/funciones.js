
export const modificaData = (data) => {
    const partesFecha = data.split('T');
    const partesFechaPrincipal = partesFecha[0].split('/');
    const partesHora = partesFecha[1].split(':');
    const dia = partesFechaPrincipal[2];
    const mes = partesFechaPrincipal[1];
    const año = partesFechaPrincipal[0];
    const horas = partesHora[0];
    const minutos = partesHora[1];
    const segundos = partesHora[2];
    
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    
    const fechaFormateada = `${parseInt(dia)} ${meses[parseInt(mes) - 1]} ${año.padStart(4, '20')} - ${horas}:${minutos}:${segundos}`;
        
    return fechaFormateada;
}


export const modificaNick = (nick)=>{
    let textoDefinitivo = nick
    if(textoDefinitivo != ""){
        textoDefinitivo = textoDefinitivo.toUpperCase() 
        textoDefinitivo = textoDefinitivo.trim() 
        textoDefinitivo = textoDefinitivo.replaceAll(' ', "_")
        
        return textoDefinitivo 
    }else{
        return null
    }
   
}

export const modificaData2 = (objecteDate) => {
    return `${(objecteDate.getFullYear() % 100).toString().padStart(2, '0')}/${(objecteDate.getMonth() + 1).toString().padStart(2, '0')}/${objecteDate.getDate().toString().padStart(2, '0')}T${objecteDate.getHours().toString().padStart(2, '0')}:${objecteDate.getMinutes().toString().padStart(2, '0')}:${objecteDate.getSeconds().toString().padStart(2, '0')}`;
};

export const dias = (dataText)=>{
    
    const format = /^(\d{2})\/(\d{2})\/(\d{2})T(\d{2}):(\d{2}):(\d{2})$/
    let fechaFormat = dataText.match(format)
    if (!fechaFormat) {
        return {   
            error: true, 
            missatge: "El format no és correcte"
        }
    }

    const [, any, mes, dia, hora, minuto, segundo] = fechaFormat
    const inputDate = new Date(`20${any}-${mes}-${dia}T${hora}:${minuto}:${segundo}`)
    const diaActual = new Date()

    const diferenciaTiempo = diaActual - inputDate
    const diasContados = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24))

    return diasContados
}


export const partidas = [
  {
     avatar: '<img src="../img/account-avatar-profile-user-7-svgrepo-com.svg" width="50"></img>' ,
     nick: 'RAMON' ,
     puntos: 35 ,
     fecha: '23 FEBRERO 1997' 
  },
 {
     avatar: '<img src="../img/account-avatar-profile-user-13-svgrepo-com.svg" width="50"></img>' ,
     nick: 'JORDI' ,
     puntos: 60 ,
     fecha: '4 MAYO 2010'
 },
 {
     avatar: '<img src="../img/account-avatar-profile-user-svgrepo-com.svg" width="50"></img>' ,
     nick: 'MIGUEL' ,
     puntos: 100 ,
     fecha: '22 JULIO 2002'
 },
]




export const  buscar = (texto) => {
  texto=texto.toUpperCase()
  const nickAbuscar = partidas.filter(partidas => partidas.nick.includes(texto))

  let tabla = ``
  if(nickAbuscar.length>0){
    nickAbuscar.forEach(element => {
      tabla += 
      `<tr>
        <td>${element.avatar}</td>
        <td>${element.nick}</td>
        <td>${element.puntos}</td>
        <td>${element.fecha}</td>
      </tr>`
      });
  }
  document.querySelector("#cuerpoTabla").innerHTML=tabla;
}


export const orden = (campo, tipo) => {
    let tabla = ''
            switch (campo) {
              case 'nick':
                partidas.sort((a, b) => a.nick.localeCompare(b.nick, 'es', { sensitivity: 'base' }))
                partidas.forEach(element => {
                  tabla += 
                    ` <tr>
                        <td>${element.avatar}</td>
                        <td>${element.nick}</td>
                        <td>${element.puntos}</td>
                        <td>${element.fecha}</td>
                      </tr>
                    `
                  })
          
                document.querySelector("#cuerpoTabla").innerHTML=tabla
        
                if (tipo === 'descendente') {
                  flechaNick.classList.add('bi-arrow-down-square')
                  flechaNick.classList.remove('bi-arrow-up-square')
                  flechaPunt.classList.remove('bi-arrow-down-square')
                  flechaPunt.classList.add('bi-arrow-up-square')
                  flechaFecha.classList.remove('bi-arrow-down-square')
                  flechaFecha.classList.add('bi-arrow-up-square')
                }
                
                return (partidas)

              case 'punt':
                partidas.sort((a, b) => b.puntos - a.puntos)
                partidas.forEach(element => {
                  tabla += 
                  ` <tr>
                      <td>${element.avatar}</td>
                      <td>${element.nick}</td>
                      <td>${element.puntos}</td>
                      <td>${element.fecha}</td>
                    </tr>
                  `
                })
          
                document.querySelector("#cuerpoTabla").innerHTML=tabla;
          
                if (tipo === 'descendente') {

                  flechaPunt.classList.add('bi-arrow-down-square')
                  flechaPunt.classList.remove('bi-arrow-up-square')
                  flechaNick.classList.remove('bi-arrow-down-square')
                  flechaNick.classList.add('bi-arrow-up-square')
                  flechaFecha.classList.remove('bi-arrow-down-square')
                  flechaFecha.classList.add('bi-arrow-up-square')
                }
          
                return (partidas)
              
                case 'fecha':
                partidas.sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
                partidas.forEach(element => {
                  tabla += 
                  ` <tr>
                      <td>${element.avatar}</td>
                      <td>${element.nick}</td>
                      <td>${element.puntos}</td>
                      <td>${element.fecha}</td>
                    </tr>
                  `
                })
          
                document.querySelector("#cuerpoTabla").innerHTML=tabla;
          
                if (tipo === 'descendente') {

                  flechaFecha.classList.add('bi-arrow-down-square')

                  flechaFecha.classList.remove('bi-arrow-up-square')
                  flechaNick.classList.remove('bi-arrow-down-square')
                  flechaNick.classList.add('bi-arrow-up-square')
                  flechaPunt.classList.remove('bi-arrow-down-square')
                  flechaPunt.classList.add('bi-arrow-up-square')
                }

            }
  }

  export const insertaNuevaPartida = (datosPartida) => {  
    partidas.push(datosPartida)
    partidas.forEach(element => {
      console.log(element.avatar)
      console.log(element.nick)
      console.log(element.puntos)
      console.log(element.fecha)
      });
  }
