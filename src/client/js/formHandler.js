const renderEvaluationResult = res=> {
    console.log(JSON.stringify(res))
    document.getElementById('results').innerHTML = res.irony
}

const handleSubmit = e=> {
    e.preventDefault()

    let url = document.getElementById("url").value
    let isUrlValid = Client.validateUrl(url)
    if(isUrlValid) {
        document.getElementById("submit").setAttribute("value","Loading");
        console.log("::: Form Submitted :::")
        let appBaseUrl = 'http://localhost:8081/evaluate?url='
        fetch(appBaseUrl+encodeURIComponent(url))
        .then(res=>res.json())
        .then(res=>Client.renderResult(res))
        
    } else {
        alert(`"${url}" doesn't seem to be a valid url. Please make sure it is valid and starts with "http" or "https"`)
    }

    
}

export { handleSubmit }
