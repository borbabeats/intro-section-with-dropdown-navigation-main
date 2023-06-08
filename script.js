function showFeatures() {
    let features = document.querySelector('.features-toggle')
    let arrowDownFeatures = document.querySelector('.features-menu .arrow-down')
    let arrowUpFeatures = document.querySelector('.features-menu .arrow-up')

    if (features.style.display === 'none') {
        features.style.display = 'block'
        arrowDownFeatures.style.display = 'none'
        arrowUpFeatures.style.display = 'inline-block'
        
    } else {
        features.style.display = 'none'
        arrowDownFeatures.style.display = 'inline-block'
        arrowUpFeatures.style.display = 'none'
    }
}

function showCompany() {
    let company = document.querySelector('.company-toggle')
    let arrowDownCompany = document.querySelector('.company-menu .arrow-down')
    let arrowUpCompany = document.querySelector('.company-menu .arrow-up')

    if (company.style.display === 'none') {
        company.style.display = 'block'
        arrowDownCompany.style.display = 'none'
        arrowUpCompany.style.display = 'inline-block'
    } else {
        company.style.display = 'none'
        arrowDownCompany.style.display = 'inline-block'
        arrowUpCompany.style.display = 'none'
    }
    
}