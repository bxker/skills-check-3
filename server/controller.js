
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

module.exports = {
    getHouses
}