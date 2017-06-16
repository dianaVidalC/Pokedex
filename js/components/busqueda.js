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
    const pokemonDiv= $('<div class="div-pokemon"</div>');

    div.append(lupa);
    div.append(input);
    row.append(div);
    container.append(row);
    rowGrid.append(pokemonDiv);
    container.append(rowGrid);

    reRender(pokemonDiv,filterByName(state.pokemon,""));

  input.on('keyup',_=>{

      if(input.val()!=""){

            const filtrados = filterByName(state.pokemon,input.val());
            reRender(pokemonDiv,filtrados,update);
            console.log(filtrados);
      }
    });

    return container;
}

const listPokemon =(lista,update)=> {
console.log(lista);

        const figure = $('<figure class="col s12 m4 l2 fondo center-align"></figure>');
        const img = $(`<img src="http://serebii.net/art/th/${lista.entry_number}.png"/>`);
        const figureCaption = $('<figcaption>'+lista.pokemon_species.name+'</figcaption>');

        figure.append(img);
        figure.append(figureCaption);

        return figure;
}

const reRender= (pokemonDiv,filtrados,update)=>{

    pokemonDiv.empty();

    filtrados.forEach((elemento)=>{
        pokemonDiv.append(listPokemon(elemento,_ =>{
            reRender(pokemonDiv,filtrados,update)
        }));
    });
}

