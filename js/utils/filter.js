/**
 * Created by LABORATORIA 0017le on 15/06/2017.
 */

const filterByName = (pokemones,inputVal,update) => {

    const valor   = inputVal.toLowerCase();

    const pokemon = pokemones.pokemon_entries.filter((e)=>{

         return e.pokemon_especies.name.toLowerCase().indexOf(valor)!=-1;
    })

    console.log(pokemon);
    return pokemon;
};
