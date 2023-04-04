import {db} from "./dbConnect.js"

export function addNewTv (req, res) {
    const newTV = req.body

    db.collection('tvShows').add(newTV)
        .then(doc)
        .catch(err => res.status(500).send(err) )
}