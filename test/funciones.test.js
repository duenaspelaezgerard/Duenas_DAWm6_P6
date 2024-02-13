import { modificaData, modificaNick, modificaData2, dias, orden, buscar } from '../src/funciones.js'

import { expect } from 'chai'

describe('modificaNick', () => {
    it('debería retornar null y mostrar un alert si la cadena está vacía', () => {
      const resultado = modificaNick('')
      expect(resultado).to.be.null
    })

    it('debería modificar la cadena correctamente si contiene texto', () => {
      const resultado = modificaNick('    cara culo  ');
      expect(resultado).to.equal('CARA_CULO')
    })
})

describe('modificaData', () => {
  it('debería modificar la cadena de fecha correctamente', () => {
    const resultado = modificaData('23/12/02T12:12:12')

    expect(resultado).to.equal('2 diciembre 2023 - 12:12:12');
  })
})

describe('modificaData2', () => {
  it('debería modificar el objeto Date correctamente', () => {
    const fecha = new Date('2023-12-17T03:24:00')
    const resultado = modificaData2(fecha)
  
    expect(resultado).to.equal('23/12/17T03:24:00')
  })
})

describe('dias', () => {
  it('debería calcular los días transcurridos correctamente', () => {
    const resultado = dias("23/12/29T21:00:00")
    expect(resultado).to.equal(24)
  });

  it('debería manejar el formato incorrecto', () => {
    const fechaIncorrecta = 'formato_incorrecto'
    const resultado = dias(fechaIncorrecta)
    expect(resultado).to.deep.equal({
      error: true,
      missatge: 'El format no és correcte'
    })
  })
})

describe('buscar', () => {
  it('debería devolver un array que coincida con el texto', () => {
    const texto = 'RAMON'
    const resultado = buscar(texto)
    expect(resultado).to.deep.equal([
      {
        avatar: '<img src="../img/account-avatar-profile-user-7-svgrepo-com.svg" width="50"></img>' ,
        nick: 'RAMON' ,
        puntos: 35 ,
        fecha: '23 FEBRERO 1997' 
    }
    ])
  })

  it('debería devolver un array vacío si no hay coincidencias', () => {
    const resultados = buscar('otro')
    expect(resultados).to.deep.equal([])
  })
})

describe('orden', () => {
  it('debería devolver un array ordenado por nick y down', () => {
    const campo = 'nick'
    const tipo = 'descendente'
    const resultado = orden(campo, tipo)
    expect(resultado).to.to.deep.equal([
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
      {
        avatar: '<img src="../img/account-avatar-profile-user-7-svgrepo-com.svg" width="50"></img>' ,
        nick: 'RAMON' ,
        puntos: 35 ,
        fecha: '23 FEBRERO 1997' 
      }
    ])
  })
})



