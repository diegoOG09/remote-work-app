document.addEventListener('DOMContentLoaded', () => {
  
  const featuresBtn = document.querySelector('#featuresBtn')
  const companyBtn = document.querySelector('#companyBtn')
  const featuresMenu = document.querySelector('.features-menu')
  const companyMenu = document.querySelector('.company-menu')

  const mouseenterFeatures = featuresBtn.addEventListener("mouseenter", function( event ) {
    featuresMenu.style.display = 'flex'
  })
  const hovermenuFeatures = featuresMenu.addEventListener('mouseenter', event => {
    featuresMenu.style.display = 'flex'
  })
  const nohovermenuFeatures = featuresMenu.addEventListener("mouseleave", function( event ) {
    featuresMenu.style.display = 'none'
  })

  const mouseenterCompany = companyBtn.addEventListener("mouseenter", function( event ) {
    companyMenu.style.display = 'flex'
  })
  const hovermenuCompany = companyMenu.addEventListener('mouseenter', event => {
    companyMenu.style.display = 'flex'
  })
  const nohovermenuCompany = companyMenu.addEventListener("mouseleave", function( event ) {
    companyMenu.style.display = 'none'
  })

  
  
})