console.log(`express start`);

console.log(`Learning Express`);

/**
    """_summary_
    """ * Description placeholder
 *
 * @type {*}
 */
const express = require('express');

/**
 * Description placeholder
 *
 * @type {*} ̰ ̰ ̰ ̰
 */
const app = express();


app.get('/', (req, res) => {
    console.log(`Request module`);  
    console.log(req)
    res.send("You server running at http://localhost:3000")
})

app.listen(3000, (err, res) => {
    if(!err){
    }
    console.log(`server started.`)
})
