/**
 * Created by LABORATORIA 0017le on 15/06/2017.
 */

const filterByName = (pokemones,inputVal) => {

    const lista   = pokemones.pokemon_entries.filter((elemento)=>{
      const nombre= elemento.pokemon_species.name;

            if(nombre.toLowerCase().indexOf(inputVal.toLowerCase())!=-1){

                return nombre;

            }
    });

    return lista;
};
