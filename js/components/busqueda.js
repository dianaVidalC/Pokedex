/**
 * Created by LABORATORIA 0017le on 14/06/2017.
 */
'use strict';

const busqueda=(update)=>{

    const container = $('<div class="container"></div>');
    const row       = $('<div class="row"></div>');
    const div       = $('<div class="col s12 input"></div>');
    const input     = $('<input type="text">');
    const lupa      = $('<i class="material-icons small">search</i>');
    const rowGrid   = $('<div class="row"></div>');

    div.append(lupa);
    div.append(input);
    row.append(div);
    container.append(row);
    container.append(rowGrid);

    reRender(rowGrid,filterByName(state.pokemon,""));

  input.on('keyup',_=>{

      if(input.val()!=""){

            const filtrados = filterByName(state.pokemon,input.val());
            reRender(rowGrid,filtrados,update);
            console.log(filtrados);
      }
    });

    return container;
}

const listPokemon =(lista,update)=> {
console.log(lista);

        const figure        = $('<figure class="col s12 m4 l2 fondo center-align"></figure>');
        const img           = $(`<img class="img-responsive" src="http://serebii.net/art/th/${lista.entry_number}.png"/>`);
        const figureCaption = $('<figcaption>'+lista.pokemon_species.name+'</figcaption>');
        const blanco        = $('<img class="img-responsive" src="assets/img/blanco.png"/>');

        figure.append(img);
        figure.append(figureCaption);
        figure.append(blanco);

        return figure;
}

const reRender= (rowGrid,filtrados,update)=>{

    rowGrid.empty();

    filtrados.forEach((elemento)=>{
        rowGrid.append(listPokemon(elemento,_ =>{
            reRender(rowGrid,filtrados,update)
        }));
    });
}

