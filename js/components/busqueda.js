/**
 * Created by LABORATORIA 0017le on 14/06/2017.
 */
'use strict';

const busqueda=(update)=>{

    const container = $('<div class="section"></div>');
    const rowInput  = $('<div class="row"></div>');
    const div       = $('<div class="col s6 buscar"></div>');
    const input     = $('<input type="text">');
    const lupa      = $('<i class="material-icons small">search</i>');
    const divPokemon= $('<div class="row"></div>');

    div.append(lupa);
    div.append(input);
    rowInput.append(div);
    container.append(rowInput);
    container.append(divPokemon);


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

        const figure        = $('<figure class="col s12 m4 l2 card center-align"></figure>');
        const img           = $(`<img class="img-responsive pokemon" src="http://serebii.net/art/th/${lista.entry_number}.png" alt="pokemon"/>`);
        const figureCaption = $('<figcaption></figcaption>');
        const div           = $('<div class="float"></div>');
        const pokeball      = $('<a class="waves-effect waves-light" href="#modal"><img class="img-responsive" src="assets/icon/pokeball_gray.png" alt="pokeball"/></a>');
        const heart         = $('<a class="waves-effect waves-light"><img class="img-responsive" src="assets/icon/valentines-heart.png" alt="heart"/></a>');
        const data          = $('<a class="waves-effect waves-light"><img class="img-responsive" src="assets/icon/data.png"alt="data"/></a>');
        const span          = $('<span class="capitalize">'+lista.pokemon_species.name+'</span>');

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
            $('.modal-content figure.card').toggleClass("imagen-modal");


            $('.modal').modal();

            $.getJSON(lista.pokemon_species.url,(json)=>{

                if(!json) { return alert("no exiten detalles");}
                state.pokemonSelected = json;
                $('.modal-content').append(contenidoModal(lista.pokemon_species.name,clone,state.pokemonSelected));
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


