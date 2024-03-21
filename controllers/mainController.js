const bandas = require ("../db/index");

const bandController = {
    band: function (req, res) {
        return res.render("listadoBandas", {
            lista: bandas.lista
        });
      
    },

    id: function (req, res) {
        let id = req.params.id;
        let total = 0
        let nombre = ""
        let bandaEncontrada= null;
        for (let i = 0; i < bandas.lista.length; i++) {
            if (id == bandas.lista[i].id) {
                total+=1
                nombre = bandas.lista[i].nombre;
                bandaEncontrada = bandas.lista[i];
            }
        }
        if (bandaEncontrada) {
            return res.render("detalleBanda", {
                lista: bandaEncontrada
            });
        } else {
            return res.send("No encontramos la banda indicada. Por favor, elija otro id");
        }
        
    }, 

    genero: function (req, res) {
        let genero = req.params.genero;
        let total = 0
        let nombre = []
        let bandaEncontrada= [];
        for (let i = 0; i < bandas.lista.length; i++) {
            if (genero == bandas.lista[i].genero) {
                total+=1
                nombre.push (bandas.lista[i].nombre)
                bandaEncontrada.push (bandas.lista[i]);
            }
        }

        if (bandaEncontrada.length >0 ) {
            return res.render("porGenero", {
                lista: bandaEncontrada
            });
        } else {
            return res.send("No encontramos la banda indicada. Por favor, elija otro genero");
        }
    }

        }


module.exports = bandController