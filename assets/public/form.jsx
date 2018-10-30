var React = require('react')
var Fragment = React.Fragment


const form = () =>
    <Fragment>
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="The Cat In the Hat" id="name" type="text" className="validate" />
                        <label htmlFor="name">Title</label>
                    </div>
                    <div className="input-field col s12">
                        <input placeholder="Dr. Seuss" id="size" type="text" className="validate" />
                        <label htmlFor="size">Author</label>
                    </div>

                    <div className="input-field col s12">
                        <input placeholder="9000" id="pages" type="text" className="validate" />
                        <label htmlFor="pages">Pages</label>
                    </div>
                </div>
                <center>

                    <button id='addMe'>Add</button>
                    <button id='editMe'>Edit</button>
                </center>
            </form>
        </div>
    </Fragment>

module.exports = form