let bars = document.querySelector(".nav .bars") ;
let theclose = document.querySelector(".nav .close") ;
let links = document.querySelector(".links-page") ;
let list = document.querySelectorAll(".links-page .links li a") ;
let ins = document.querySelector(".links-page .inspiration") ;
let icon = document.querySelector(".nav .icon") ;
let header = document.querySelector(".header") ;



bars.onclick = function(){
    links.style.display = "flex" ;
}

theclose.onclick = function(){
    links.style.display = "none" ;
}

window.onscroll = function(){
    bars.classList.toggle("scro-style" , window.scrollY > header.scrollHeight) ;
}

list.forEach(a =>{
    a.onclick =  function(){
        links.style.display = "none" ;
    }
})

//==============================================================================
// experience section 
let icons = document.querySelectorAll(".experience .row .icon") ;
let text = document.querySelector(".experience .row .item .moretext") ;
let spans = document.querySelectorAll(".experience .row .item .icon .plus") ;
icons.forEach(icon => {
    icon.addEventListener("click" , () =>{
        icon.parentNode.classList.toggle("open") ;
        icon.children[1].classList.toggle("plus") ;
    })
});

///=======================================================================================

// works transitions 
 let works = document.querySelector(".works") ;
 let projects = document.querySelectorAll(".works .container .work") ;
 let details = document.querySelectorAll(".work-info .details") ;
 projects.forEach(work => {
    work.addEventListener("click" , () => {
        //add animation to works page
         works.classList.add("scroll-style") ;

        //display the detail of one project
        details.forEach(detail => {
            detail.style.display = "none" ;
            if(work.dataset.work === detail.dataset.name){

                detail.style.display = "block" ;

                window.onscroll = function(){
                    if(scrollY === 0){
                        setTimeout(function(){
                            detail.classList.add("trans") ;
                        } , 500)
                    }
                }

                //close the detail
                let icclo = document.querySelectorAll(".details .icclo") ;
                icclo.forEach(ic =>{
                    ic.addEventListener("click" , () => {
                        detail.style.display = "none" ;

                        works.style.display = "block" ;
                        sections.forEach(section =>{
                            section.style.display = "block" ;
                        })
                         bars.style.display = "flex" ;
                         window.onscroll = function(){
                             bars.classList.toggle("scro-style" , window.scrollY > header.scrollHeight) ;
                         }
                        
                        works.classList.remove("scroll-style") ;
                    })
                })
            }
            
        })

         //other element
         let sections = document.querySelectorAll(".sec-dis") ;

        sections.forEach(section =>{
                     section.style.display = "none" ;
         })

         //works
         setTimeout(function(){
                sections.forEach(section =>{
                    works.style.display = "none" ;
             })
             } , 2000)

        
    })
 })
// ==================================================================================================================
// cv link 
let maindiv = document.querySelector(".about .cv") ;
let br = document.querySelector(".about .cv .left") ;
let ar = document.querySelector(".about .cv .right") ;

maindiv.onclick = function(){
    maindiv.classList.add("click") ;
    br.style.left = "20%" ;
    ar.style.right = "20%" ;
}
