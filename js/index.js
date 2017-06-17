/**
 * Created by LABORATORIA 0017le on 14/06/2017.
 */
'use strict';

const render = (root)=>{
    root.empty();

    const wrapper = $('<div class="wrapper"></div>');
    if(state.pokemonSelected==null){
        wrapper.append(Header());
        wrapper.append(busqueda(_=>{render(root)}));
        wrapper.append(Modal());

    }else{
        wrapper.append(Header());
        wrapper.append(busqueda(_=>{render(root)}));
        wrapper.append(Modal());
    }

    root.append(wrapper);
}

const state = {
    pokemon:null,
    pokemonSelected:null
}

$(_=>{

    getJSON('http://pokeapi.co/api/v2/pokedex/1/',(err,json)=>{
        if(err){
            return alert(err.message);
        }
        state.pokemon=json;
        const root= $("#root");
        render(root);
    })

})