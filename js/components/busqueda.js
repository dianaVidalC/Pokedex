/**
 * Created by LABORATORIA 0017le on 14/06/2017.
 */
'use strict';

const busqueda=(update)=>{

    const container = $('<div class="section"></div>');
    const row       = $('<div class="row"></div>');
    const div       = $('<div class="col s12 section input"></div>');
    const input     = $('<input type="text">');
    const lupa      = $('<i class="material-icons small">search</i>');
    const divPokemon= $('<div></div>');

    div.append(lupa);
    div.append(input);
    row.append(div);
    row.append(divPokemon);
    container.append(row);

    reRender(divPokemon,filterByName(state.pokemon,""));

  input.on('keyup',_=>{

      if(input.val()!=""){

            const filtrados = filterByName(state.pokemon,input.val());
            reRender(divPokemon,filtrados,update);
      }
    });

    return container;
}

const listPokemon =(lista,update)=> {

        const figure        = $('<figure class="col s12 m4 l2 fondo center-align"></figure>');
        const img           = $(`<img class="img-responsive pokemon" src="http://serebii.net/art/th/${lista.entry_number}.png" alt="pokemon"/>`);
        const figureCaption = $('<figcaption></figcaption>');
        const div           = $('<div class="float"></div>');
        const pokeball      = $('<a class="waves-effect waves-light" href="#modal"><img class="img-responsive" src="assets/icon/pokeball_gray.png" alt="pokeball"/></a>');
        const heart         = $('<img class="img-responsive" src="assets/icon/valentines-heart.png" alt="heart"/>');
        const data          = $('<img class="img-responsive" src="assets/icon/data.png"alt="data"/>');
        const span          = $('<span>'+lista.pokemon_species.name+'</span>');

        div.append(pokeball);
        div.append(heart);
        div.append(data);
        figureCaption.append(div);
        figureCaption.append(span);
        figure.append(img);
        figure.append(figureCaption);

        pokeball.on("click",(e)=>{

            e.preventDefault();
            let clone = figure.clone();
            $('.modal').modal();
            $('.modal-content').empty().append(contenidoModal(lista.pokemon_species.name, clone));

            $.get(lista.pokemon_species.url,(json)=>{
                if(!json) { return alert("NO EXISTE DETALLES DEL POKEMON");}
                state.pokemonSelected = json;
                // update();
            });
    })

        return figure;
}

const reRender= (divPokemon,filtrados,update)=>{

    divPokemon.empty();

    filtrados.forEach((elemento)=>{
        divPokemon.append(listPokemon(elemento,_ =>{
            reRender(divPokemon,filtrados,update)
        }));
    });
}


