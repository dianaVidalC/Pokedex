/**
 * Created by LABORATORIA 0017le on 14/06/2017.
 */

const Header=_=>{
    const header    = $('<header></header>');
    const container = $('<div class=container></div>');
    const row       = $('<div class=row></div>');
    const h1        = $('<h1 class="center-align">Pokédex</h1>');

    row.append(h1);
    container.append(row);
    header.append(container);

    return header;
}