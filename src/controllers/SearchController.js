const Dev = require('../models/Dev');
const parseStringasArray = require('../utils/parseStringAsArray');

//Buscar todos os devs num raio de 10km
//Filtrar por tecnologias
module.exports = {
    async index(req, res) {
        const { latitude, longitude, techs } = req.query;

        const techsArray = parseStringasArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return res.json({ devs });
    }
}