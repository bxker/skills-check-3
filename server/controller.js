
let getHouses = (req, res) => {
    const dbInstance = req.app.get('db');

    dbInstance.getAllHouses()
    .then(houses => {
        res.status(200).json(houses)
    })
    .catch(err => {
        res.status(500).send({errorMessage: 'Something went wrong - 500'})
        console.log(err)
    })
}

let addToHouses = (req, res) => {
    const dbInstance = req.app.get('db');
    const {name, address, city, state, zip, img, mortgage, rent} = req.body

    dbInstance.addToHouses(name, address, city, state, zip, img, mortgage, rent)
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.status(500).send({errorMessage: 'Something went wrong - 500'})
        console.log(err)
    })
}

module.exports = {
    getHouses,
    addToHouses
}