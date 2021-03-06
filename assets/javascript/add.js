const fetch = window.fetch

$(document).ready(function () {
    populate();
});


function clicked(val) {
    fetch(`/books/${val}`, { method: 'DELETE' })
        .then(res => {
            console.log(res)
            populate();
        });
    
    populate();
    window.location.reload(true);
}

document.querySelector('#editMe').addEventListener('click', event => {
    event.preventDefault();
    fetch(`/books/${document.querySelector('#name').value}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
            title: document.querySelector('#name').value,
            author: document.querySelector('#size').value,
            pages: document.querySelector('#pages').value
        })
    }).then(res => {
        window.location.reload(true);
        populate();
    })
    window.location.reload(true);

})


document.querySelector('#addMe').addEventListener('click', event => {
    event.preventDefault();
    fetch('/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
            title: document.querySelector('#name').value,
            author: document.querySelector('#size').value,
            pages: document.querySelector('#pages').value
        })
    }).then(r => {
        document.querySelector('#name').value = ''
        document.querySelector('#size').value = ''
        document.querySelector('#pages').value = ''
        populate();
        window.location.reload(true);
    }).catch(e => console.error(e))
    populate();
})



function populate() {
    $('#currTable').html('')
    $.post("/notWorking", null)
        .then(function (data) {
            console.log(data)
            for (var i = 0; i < data.length; i++) {
                $('#currTable').append(`
            <div style="display:inline-block; margin:20px;">
                Title: ${data[i].title} <br>
                Author: ${data[i].author} <br>
                Pages: ${data[i].pages} <br>
                <button onclick="clicked('${data[i].title}')" class='purge' id=${data[i].title}>Purge</button>
            </div>
            `)
            }
        });
}
