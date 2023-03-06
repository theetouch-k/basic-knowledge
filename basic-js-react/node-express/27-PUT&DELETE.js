const { json } = require('express');
const express = require('express');
const app = express();
let {people} = require('./data');

app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true, data:people});
})
app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended:false}));
app.post('/login', (req,res)=> {
    const {name} = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Empty Name!?');
});
app.use(express.json());

//app.post('/api/people', (req,res)=> {
//    const {name} = req.body;
//    if (!name) {
//        res.status(400).json({success:false, msg: 'Please Provide Name Value'});
//    }
//    res.status(201).json({success:true, person: name});
//})

app.post('/api/people',(req,res)=> {
    const {name} = req.body;
    if (!name) {
        return res.status(400).json(
            {success: false, msg:"ERRORRRRRR"}
        )
    }
    res.status(200).json({success: true, data: [...people, name]})
})

//POST means "create new". PUT means "insert, replace if already exists"
//now let's see PUT method
//app.put('/api/people/:id', (req,res)=> {
//    const {id} = req.params;
//    const {name} = req.body 
//    console.log(id, name)
//    res.send('hello world')
//})

app.put('/api/people/:id', (req,res)=> {
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

//and for DELETE method it's kind a similar to PUT method
app.delete('/api/people/:id', (req,res)=> {
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person)=> person.id === Number(id));

    if (!person) {
        return res.status(404).json({ success: false,msg: `no person with id ${id}`})
    }

    //filter to filterout deleted person
    const newPeople = people.filter((person) => person.id !== Number(id)) 
    
    return res.status(200).json({success:true, data: newPeople})
});


app.listen(5000, ()=> {
    console.log('server is listening on port 5000');
});