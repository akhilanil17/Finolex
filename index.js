const items = document.querySelectorAll('.nav-items>button')
const Contents = document.querySelectorAll('.content')

items.forEach((item, index) => {
    item.addEventListener('click', () => {
        items.forEach(item => {
            item.classList.remove('active')
        })
        item.classList.add('active')

        Contents.forEach(content => { 
            content.classList.remove('active') 
        })
        Contents[index].classList.add('active')
    })
})

Contents.forEach((content) => {
    const innerBtns = content.querySelectorAll('.inner-btn')
    const Benefits = content.querySelectorAll('.benefit')
    const Applications = content.querySelectorAll('.application')
  
    innerBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        innerBtns.forEach((btn) => {
          btn.classList.remove('active')
        })
        btn.classList.add('active')
  
        Benefits.forEach((benefit) => {
          benefit.classList.remove('active')
        })
        Applications.forEach((application) => {
          application.classList.remove('active')
        })
  
        if (btn.innerText === "Benefits") {
          Benefits.forEach((benefit) => {
            benefit.classList.add('active')
          })
        } else if (btn.innerText === "Applications") {
          Applications.forEach((application) => {
            application.classList.add('active')
          })
        }
      })
    })
  })
  
