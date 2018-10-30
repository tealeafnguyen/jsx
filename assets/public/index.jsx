var React = require('react')
var Fragment = React.Fragment
var Form = require('./form.jsx')
var Tables = require('./tables.jsx')

const taco = () =>
    <Fragment>
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossOrigin="anonymous"></script>
                <title>Document</title>
            </head>
            <body>
                
                <Form />
                <br></br>

                <Tables />

            </body>
            <script src='./javascript/add.js' />
        </html>
    </Fragment>

module.exports = taco