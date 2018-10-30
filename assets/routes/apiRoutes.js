var data = require("../data/data.js")


module.exports = function (app) {


    app.post('/notWorking', (req, res) => {
        console.log('boop')
        res.json(data);
    });

    function findBook(name){
        for(var i = 0; i < data.length; i++){
            if(name == data[i].title){
                return data[i];
            }
        }
        return null;
    };

    function deleteBook(name){
        for(var i = 0; i < data.length; i++){
            if(name == data[i].title){
                data.splice(i, 1);
            }
        }
    }

    app.get('/books:id', (req, res) => {
        var book = findBook(req.params.id);
        if(book != null){
            res.json(book);
        }
        else{
            res.json(false);
        }
    });

    app.post('/books', (req, res) => {
        console.log(`Added ${req.body.title}`);
        data.push(req.body)
        console.log(data)
    })

    app.put('/books/:id', (req, res) => {
        console.log(`Editing ${req.params.id}`)
        deleteBook(req.params.id);
        data.push(req.body);
        console.log(data);
    })

    app.delete('/books/:id', (req, res) => {
        console.log(`Deleting ${req.params.id}`)
        deleteBook(req.params.id);
        console.log(data);
    })

};
