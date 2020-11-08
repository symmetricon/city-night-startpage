import '../templates/index.pug'
import '../styles/main.scss'
import './clock.js'
import './search.js'
import '../images/search-icon.svg'
import '../links-config.json'

const linksCon = document.getElementById('links-container')



/*
<a href=[url] class="link-rect">
    [linkName]
</a>
*/
const LinkComp = (linkName, url) => {
    const linkRect = document.createElement('a')
    linkRect.classList.add('link-rect')
    linkRect.setAttribute('href', url)

    const linkText = document.createTextNode(linkName)

    linkRect.appendChild(linkText)
    return linkRect
}



/*
<div class="links-column">
    <div class="category-header">
        [category]
    </div>
    <div class="links-inner-con">
        [linksArr]
    </div>
</div>
*/
const LinksColumn = (category, linksArr) => {
    const column = document.createElement('div')
    column.classList.add('links-column')
    const categoryHeader = document.createElement('div')
    categoryHeader.classList.add('category-header')

    const linksInnerCon = document.createElement('div')
    linksInnerCon.classList.add('links-inner-con')

    linksArr.forEach(({linkName, url}) => 
        linksInnerCon.appendChild(LinkComp(linkName, url))
    )

    const categoryText = document.createTextNode(category)
    categoryHeader.appendChild(categoryText)
    column.appendChild(categoryHeader)
    column.appendChild(linksInnerCon)
    return column
}



const handleLinksDataFetch = ({linksData}) => {
    linksData.forEach(({category, linksArr}) => {
        linksCon.appendChild(LinksColumn(category, linksArr))
    })
}


fetch('./src/links-config.json')
    .then(x => x.json())
    .then(handleLinksDataFetch)





