const express = require('express');
const router = express.Router()

//we move all functianalities to 'controllers' folder.
const {
    getPeople,
    postPeople,
    putPeople,
    deletePeople
} = require('../controller/people')

router.get('/', getPeople)
router.post('/', postPeople)
router.put('/:id', putPeople)
router.delete('/:id', deletePeople)

//or if it the same url u can write like this
router.route('/').get(getPeople).post(postPeople);
router.route('/:id').put(putPeople).deyoutubelete(deletePeople);

module.exports = router;