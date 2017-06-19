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
    const titulo        = $('<h2 class="col s12 center-align titulo capitalize">'+nombre+'</h2>');
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

        if(!json) { return alert("detalle no encontrado");}
        state.pokemonDetalles = json;
        $('.especificacion').append(Detalles(state.pokemonDetalles,detalles.id,nombre));
    })

    return container;
}

const Detalles =(medidas,id,nombre)=>{
    const div      =$('<div></div>');
    const altura   =$('<div class="col m4"><p>Altura</p><p>'+(medidas.height).toFixed(1)+' m</p></div>');
    const categoria=$('<div class="col m8"><p>Categoría</p><p>'+medidas.types[0].type.name+'</p></div>');
    const peso     =$('<div class="col m4"><p>Peso</p><p>'+medidas.weight/10+' kg</p></div>');
    const habilidad=$('<div class="col m8"><p>Habilidad</p><p>'+medidas.abilities[1].ability.name+'</p></div>');
    const gender   =$('<div class="left-align"><p>Sexo</p></div>');
    const fem      =$('<p class="genero col m4"></p>');
    const man      =$('<p class="genero col m4"></p>');
    const less     =$('<p class="genero col m4"></p>');

    div.append(altura);
    div.append(categoria);
    div.append(peso);
    div.append(habilidad);
    gender.append(fem);
    gender.append(man);
    gender.append(less);
    div.append(gender);

    $.getJSON('http://pokeapi.co/api/v2/gender/1/',(json)=>{

        if(!json) { return alert("detalle no encontrado");}
        state.pokemonGender = json;
        $('fem').append(genderFemale(state.pokemonGender,nombre));
    })

    return div;
}

const genderFemale = (genero,nombre)=>{

    genero.pokemon_species_details.filter((element)=>{

        if(element.pokemon_species.name===nombre)  return "Femenino";

    })
    $.getJSON('http://pokeapi.co/api/v2/gender/2/',(json)=>{

        if(!json) { return alert("detalle no encontrado");}
        state.pokemonGender = json;
        $('man').append(genderMale(state.pokemonGender,nombre));
    })
}

const genderMale = (genero,nombre)=>{

    genero.pokemon_species_details.filter((element)=> {

        if (element.pokemon_species.name === nombre) return "Masculino";
    })

    $.getJSON('http://pokeapi.co/api/v2/gender/3/',(json)=>{

        if(!json) { return alert("detalle no encontrado");}
        state.pokemonGender = json;
        $('less').append(genderLess(state.pokemonGender,nombre));
    })
}

const genderLess = (genero,nombre)=>{

    genero.pokemon_species_details.filter((element)=> {

        if (element.pokemon_species.name === nombre) return "Indefinido";
    })
}

const caracteristicas=()=>{

    const row   =$('<div class="row"></div>');
    const div   =$('<div></div>');
    const titulo=$('<p>Tipo</p>');
    const tipo  =$('<p></p>');
}