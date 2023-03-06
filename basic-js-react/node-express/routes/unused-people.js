const express = require('express');
const router = express.Router()
//let {people} = require('./data');
let {people} = require('../data');

//app.post('/api/people', (req,res)=> {
//since we're use it as router so we dont need base url anymore
router.get('/', (req,res)=>{
    res.status(200).json({success:true, data:people});
})


router.post('/',(req,res)=> {
    const {name} = req.body;
    if (!name) {
        return res.status(400).json(
            {success: false, msg:"ERRORRRRRR"}
        )
    }
    res.status(200).json({success: true, data: [...people, name]})
})

router.put('/:id', (req,res)=> {
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person)=> person.id === Number(id));

    if (!person) {
        return res.status(404).json({ success: false,msg: `no person with id ${id}`})
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person
    });
    res.status(200).json({success: true, data: newPeople})
});

router.delete('/:id', (req,res)=> {
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person)=> person.id === Number(id));

    if (!person) {
        return res.status(404).json({ success: false,msg: `no person with id ${id}`})
    }
    const newPeople = people.filter((person) => person.id !== Number(id)) 
    
    return res.status(200).json({success:true, data: newPeople})
});

module.exports = router;