let content = document.getElementById('ajax-content')

function fetchContent(el) {
    let view = el.getAttribute('a-view')
    let folder = el.getAttribute('a-folder')
    fetch('/ajax/${folder}/${view}.html')
    .then(response => {
        let html = response.text()
        
    })
    .then(html => { 
        content.innerHTML = html
    })

}