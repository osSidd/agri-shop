var express = require('express');
var router = express.Router();

router.get('/', (req,res) => {
    // for(let i=0; i<=100000; i++){
    //     console.log('hi there')
    // }
    res.send('Home page for blogs')
})

module.exports = router;
