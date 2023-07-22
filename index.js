//faq section
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
  
//partner section
const partnerTabs = document.querySelectorAll('.partner-tab')
const tabHeadings = document.querySelectorAll('.tab-heading')
const tabSubtexts = document.querySelectorAll('.tab-subtext')

partnerTabs.forEach((partnerTab, index) =>{
  partnerTab.addEventListener('click', () =>{
    partnerTabs.forEach(partnerTab =>{
      partnerTab.classList.remove('active-tab')
    })
    partnerTab.classList.add('active-tab')
    
    tabHeadings.forEach(tabHeading =>{
      tabHeading.classList.remove('active-tab')
    })
    tabHeadings[index].classList.add('active-tab')

    tabSubtexts.forEach(tabSubtext =>{
      tabSubtext.classList.remove('active-tab')
    })
    tabSubtexts[index].classList.add('active-tab')

    const imgPath = partnerTab.getAttribute('data-img')
    const img = document.querySelector('#partner-img')

    img.src = imgPath
  })
})

//testimonials
var videoElements = document.querySelectorAll('.video-box')

videoElements.forEach((videoElement) =>{
  videoElement.addEventListener('click', () =>{
    var video = videoElement.querySelector('video')

    if(video.paused){
      video.play();
    }else {
      video.pause();
    }
    
    videoElement.classList.toggle('playing')
  })
})