/**
 * Created by LABORATORIA 0017le on 16/06/2017.
 */

'use strict';

const Modal=()=>{

    const modal      = $('<div id="modal" class="modal"></div>');
    const content    = $('<div class="modal-content"></div>');

    modal.append(content);

    return modal;
}

const contenidoModal =(nombre,imagenClone,detalles)=> {

    $('.modal-content').empty();

    const container     = $('<div class="container datos"></div>');
    const rowTitulo     = $('<div class="row"></div>');
    const titulo        = $('<h2 class="col s12 center-align titulo">'+nombre+'</h2>');
    const rowDescripcion= $('<div class="row"></div>');
    const divImagen     = $('<div class="col s4"></div>');
    const descripcion   = $('<div class="col s8"></div>');
    const pokeText      = $('<p>'+detalles.flavor_text_entries[3].flavor_text+'</p>');
    const especificacion= $('<div class="especificacion"></div>');

    rowTitulo.append(titulo);
    container.append(rowTitulo);
    divImagen.append(imagenClone);
    rowDescripcion.append(divImagen);
    descripcion.append(pokeText);
    descripcion.append(especificacion);
    rowDescripcion.append(descripcion);
    container.append(rowDescripcion);

    $.getJSON('http://pokeapi.co/api/v2/pokemon/'+detalles.id+'/',(json)=>{

        if(!json) { return alert("pokemon no encontrado");}
        state.pokemonDetalles = json;
        $('.especificacion').append(Detalles(state.pokemonDetalles));
    })

    return container;
}

const Detalles =(medidas)=>{
    const div      =$('<div></div>');
    const altura   =$('<p>Altura</p><p>'+medidas.height+'</p>');
    const categoria=$('<p>Categoría</p><p>'+medidas.types[0].type.name+ medidas.types[1].type.name+'</p>');
    const peso     =$('<p>Peso</p><p>'+medidas.weight+'</p>');

    div.append(altura);
    div.append(categoria);
    div.append(peso);

    return div;
}



