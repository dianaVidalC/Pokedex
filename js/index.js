/**
 * Created by LABORATORIA 0017le on 14/06/2017.
 */
'use strict';

const render = (root)=>{
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');

    wrapper.append(Header());
    wrapper.append(busqueda(_=>{render(root)}));

    root.append(wrapper);
}

const state = {
    pokemon:null,
    status:null
}

$(_=>{
    const root= $("#root");

    render(root);
})