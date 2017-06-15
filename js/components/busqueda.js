/**
 * Created by LABORATORIA 0017le on 14/06/2017.
 */
'use strict';

const busqueda=()=>{

    const container = $('<div class="container"></div>');
    const row       = $('<div class="row"></div>');
    const div       = $('<div class="col s12 input"></div>');
    const input     = $('<input type="text">');
    const lupa      = $('<i class="material-icons small">search</i>');
    const rowGrid   = $('<div class="row"></div>');
    const pokemon   =$('<div class="col l2 fondo"</div>');
    const img       =$('<img class="responsive-img" src="assets/img/015.png">');

    div.append(lupa);
    div.append(input);
    row.append(div);
    container.append(row);
    pokemon.append(img);
    rowGrid.append(pokemon);
    container.append(rowGrid);

    return container;
}

