const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections= document.querySelector('.main-content');
const tablinks = document.getElementsByClassName('.tab-links');
const tablink = document.getElementsByClassName('.tab-link');
const tabcontents =document.getElementsByClassName('.tab-contents');
const tabcontent =document.getElementsByClassName('.tab-content');



function PageTransitions() {

    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';
        })
    }

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

        if (id) {
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')


            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element =document.getElementById(id);
            element.classList.add('active');
          

        }
    })


}
 
//function opentab () {
     //Remove 'active' class from all tab links and tab contents
    //for (tablink of tablinks) {
     //       tablink.classList.remove('active-link');
   // }

     //for (tabcontent of tabcontents) {
     //  tabcontent.classList.remove('active-tab');
   // }

   // tablinks.forEach((link) => {
   //link.classList.remove("active-link")
    //});
    

   // tabcontents.forEach((content) => {
    // content.classList.remove("active-tab")
   // });

    // Add 'active' class to the clicked tab link
   // this.classList.add("active-link");

    // Get the corresponding tab content ID
    //var tabId = this.getAttribute("data-tab");

    // Add 'active' class to the corresponding tab content
    //document.getElementById(tabId).classList.add("active-tab");
//}

// Attach click event listeners to tab links
//tablinks.forEach(function(link) {
   // link.addEventListener("click", handleTabClick);
//});



// Function to open the tab based on the tab ID
 
  function opentab(event,tabname) {
    // Prevent default behavior of the event (e.g., following a link)
   // event.preventDefault();



  

// Get all elements with class name 'tab-contents' and hide them
    var tabcontents = document.getElementsByClassName('tab-contents');
    for (var i = 0; i < tabcontents.length; i++) {
      //tabcontents[i].className = tabcontent[i].className.replace(" active", "");
    
        // tablinks[i].classList.remove('active-tab');
         //tabcontent[i].classList.remove('active-tab');
        tabcontents[i].style.display = 'none';
    }
        
   // }
   // tabcontent[i].classList.remove('active-tab');

// Get all elements with class name 'tab-links' and remove the 'active-link' class
    var tablinks = document.getElementsByClassName('tab-links');
    for (var i = 0; i < tablinks.length; i++) {
      //  tablink[i].classList.remove('active-link');
        tablinks[i].className = tablinks[i].className.replace(" active-link", "");
    }
    //tablinks[i].classList.remove('active-link');
   // tablink[i].classList.remove('active-link');
        

    // Show the selected tab and add 'active-link' class to the clicked tab
   document.getElementById(tabname).style.display = 'block';
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')
   // document.getElementById("defaultOpen").click()
}






 PageTransitions();



