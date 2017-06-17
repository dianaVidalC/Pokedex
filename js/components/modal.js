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

const contenidoModal =(nombre,imagenClone)=> {

    const container     = $('<div class="container"></div>');
    const rowTitulo     = $('<div class="row"></div>');
    const titulo        = $('<h2 class="col s12 center-align titulo">'+nombre+'</h2>');
    const rowDescripcion= $('<div class="row"></div>');
    const divImagen     = $('<div class="col s4"></div>');
    const descripcion   = $('<div class="col s8"></div>');

    rowTitulo.append(titulo);
    container.append(rowTitulo);
    divImagen.append(imagenClone);
    rowDescripcion.append(divImagen);
    rowDescripcion.append(descripcion);
    container.append(rowDescripcion);

    return container;
}
