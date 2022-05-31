//Grab the DOM elements
const h1 = document.getElementById('h1')
const p = document.getElementById('p')

if (h1.innerText === 'Test Page') {
    if (p.innerText === 'This is a test page for the website.') {
        //exit with the exit code of 0
        process.exit(0)
    }
}

//exit with the exit code of 1
process.exit(1)