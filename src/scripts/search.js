//console.clear()

const searchInput = document.querySelector('#search-bar')
const searchIcon = document.querySelector('#search-container .icon')



const duckduckgo = query => encodeURI(
    `https://duckduckgo.com/?t=canonical&q=${query}`
)



searchInput.value = ''



const notAllWhiteSpace = s => !/^\s*$/.test(s)



window.onload = e => searchInput.focus()



const goToPage = () => {
    const inputVal = searchInput.value

    if(notAllWhiteSpace(inputVal)) 
        location.assign(duckduckgo(inputVal))
    
    else searchInput.value = ''
}



searchInput.onkeyup = e => {
    if (e.key === 'Enter') goToPage()
}



searchIcon.onclick = e => {
    goToPage()
}
