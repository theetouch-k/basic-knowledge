const authorize = (req,res,next) => {
    console.log('imported authorize from authorize.js');
    const {user} = req.query;
    if (user === 'john') {
        req.user = {name:'john', id:3}
        next();
    }
    else {
        res.status(404).send('authorize fail')
    }
};

module.exports = authorize;