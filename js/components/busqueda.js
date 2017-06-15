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

    listPokemon(pokemonDiv);

  input.on('keyup',_=>{

      if(input.val()!=""){

            const filtrados = filterByName(state.pokemon,input.val(),update);
            reRender(pokemonDiv,filtrados,update);
      }
    });

    return container;
}

const listPokemon =(pokemonDiv)=> {

    state.pokemon.pokemon_entries.forEach((e) => {

        const figure = $('<figure class="col s12 m4 l2 fondo center-align"></figure>');
        const img = $(`<img src="http://serebii.net/art/th/${e.entry_number}.png"/>`);
        const figureCaption = $(`<figcaption>${e.pokemon_species.name}</figcaption>`);

        figure.append(img);
        figure.append(figureCaption);
        pokemonDiv.append(figure);
    });
}


const reRender= (pokemonDiv,filtrados,update)=>{

    pokemonDiv.empty();

    filtrados.forEach((e)=>{
        pokemonDiv.append(listPokemon(e,update));
    });

}

