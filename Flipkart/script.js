// Adding mouseover event on image
let thumb = document.querySelectorAll('div.box img')
function thumbnailScript(el) {
    let src = el.getAttribute('src')
    src = src.replace('128/128', '832/832')
    let mainimg = document.querySelector('.mainpic')
    mainimg.setAttribute('src', src)
}

thumb.forEach((el) => {
    el.addEventListener('mouseover', (el) => { thumbnailScript(el.target) })
})

// Displaying first image on website loading
let mouseoverevent = new Event('mouseover')
thumb[0].dispatchEvent(mouseoverevent)


// Adding click event to display and hide image container
let pointerContainer = document.querySelector('.pointer')
pointerContainer.style.display = 'none'
let AdarshNode = document.querySelector('.main-search + div')
AdarshNode.addEventListener('mouseover', () => {
    if (pointerContainer.style.display == 'none') {
        pointerContainer.style.display = 'block'
    }
    else {
        pointerContainer.style.display = 'none'
    }
})

// Adding click event to display and hide dropdown.
let dropdownboxList = document.querySelectorAll('.dropdown')

for (i = 0; i < dropdownboxList.length; i++) {
    let dropdownbox = dropdownboxList[i]
    dropdownbox.style.display = 'none'

    let purchaseNode = document.querySelector(`span.purchaes:nth-child(${i+1})`)
    purchaseNode.addEventListener('mouseover', () => {
        dropdownbox.style.display = 'flex'
    })
    dropdownbox.addEventListener('mouseover', () => {
        dropdownbox.style.display = 'flex'
    })

    dropdownbox.addEventListener('mouseout', () => {
        dropdownbox.style.display = 'none'
    })

    purchaseNode.addEventListener('mouseout', () => {
        dropdownbox.style.display = 'none'
    })
}
// Adding mouse hovering event to display and hide dropdown.




