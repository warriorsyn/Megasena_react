import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    //declaração de Arrays
    let numeros = []
    let numerosSorteados = []
    let numerosSorteados2 = []
    let numerosSorteados3 = []
    let numerosTabela = []
    let id = []

    //Array de numeros a serem sorteados
    numeros[0] = 60
    for (let n1 = 1; n1 <= 59; n1++) {
      numeros[n1] = n1
    }

    //Sorteio dos Arrays
    //Sorteio 1
    for (let n2 = 0; n2 <= 5; n2++) {
      let sorteio = Math.floor(Math.random() * numeros.length)
      numerosSorteados[n2] = numeros[sorteio]
      numeros.splice(sorteio, 1)
    }
    //Sorteio 2
    for (let n3 = 0; n3 <= 5; n3++) {
      let sorteio2 = Math.floor(Math.random() * numeros.length)
      numerosSorteados2[n3] = numeros[sorteio2]
      numeros.splice(sorteio2, 1)
    }
    //Sorteio 3
    for (let n4 = 0; n4 <= 5; n4++) {
      let sorteio2 = Math.floor(Math.random() * numeros.length)
      numerosSorteados3[n4] = numeros[sorteio2]
      numeros.splice(sorteio2, 1)
    }

    //Numeros que aparecem na tabela
    for (let n5 = 1; n5 <= 60; n5++) {
      numerosTabela[n5] = n5
    }

    function geraSorteio() {
      //na verdade essa função marca os numeros já sorteados na tela
      let button = document.getElementById('button')
      //marcando numeros na primeira tabela
      if (button.value == 1) {
        for (let n6 = 0; n6 <= 5; n6++) {
          id[n6] = document.getElementById(numerosSorteados[n6])
          id[n6].className = 'roxo'

        }
        //marcando numeros na segunda tabela
        for (let n7 = 0; n7 <= 5; n7++) {
          id[n7] = document.getElementById('b' + numerosSorteados2[n7])
          id[n7].className = 'roxo'

        }
        //marcando numeros na terceira tabela
        for (let n8 = 0; n8 <= 5; n8++) {
          id[n8] = document.getElementById('c' + numerosSorteados3[n8])
          id[n8].className = 'roxo'
          button.value = 2
          button.innerHTML = 'Limpar'
        }
      } else {
        button.onclick(document.location.reload())
      }
    }

    return (
      <div align="center">
        <div className="itens">
          <div className=" itemCard">
            <div className="itemHeader">
              Primeiro Sorteio
            </div>
            <div className="itemBox">
              {numerosTabela.map(info => (
                <li id={info} className="item" >{info}</li>
              ))}
            </div>
          </div>
          <div className=" itemCard">
            <div className="itemHeader">
              Segundo Sorteio
            </div>
            <div className="itemBox">
              {numerosTabela.map(info2 => (
                <li id={ 'b' + info2} className="item" >{info2}</li>
              ))}
            </div>
          </div>
          <div className=" itemCard">
            <div className="itemHeader">
              Terceiro Sorteio
            </div>
            <div className="itemBox">
              {numerosTabela.map(info3 => (
                <li id={ 'c' + info3} className="item" >{info3}</li>
              ))}
            </div>
          </div>
          <button id="button" className="button" value="1" onClick={geraSorteio}>Gerar sorteios</button>
        </div>
      </div>
    )
  }
}


export default App;
