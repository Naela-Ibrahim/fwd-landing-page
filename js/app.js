

/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

  
// select all sections by tag name and store them in a variable
const sections = document.getElementsByTagName('section');

// create array instance from the array-like 'sections' which is HTMLCollection
// reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from?retiredLocale=ar
const allSections = Array.from(sections);

/** 
 * building ul 
*/
   function createList(){
     for ( const section of allSections){
     // select ul and store it in a variable
     ul = document.querySelector('ul');

     // create list items
     let li = document.createElement('li'); 

     // get section 'data-nav' 
     // rference to use data attribute https://www.w3schools.com/tags/att_data-.asp
     // https://www.codegrepper.com/code-examples/javascript/javascript+getattribute+data+attribute
     let linkText = section.getAttribute('data-nav');

     // get section 'id'and store it in a variable  
     let anchorId = section.getAttribute('id');

     // set list item inner HTML which will contain anchor element 
     // anchor element will take its href from each section id, and text content from the 'data-nav ' of each section
     li.innerHTML=`<a href='#${anchorId}' class='menu__link' > ${linkText}</a>`;

     // adding/appinding the list items to ul
     ul.appendChild(li);
    
    }
   }

// call 'createList' function to build the ul
createList();

/**
 * Smoothing the scroll action
*/

for (const section of allSections){
   // get section id   
   let anchorId = section.getAttribute('id');

   // select the anchor of the section  
   let anchor = document.querySelector(`a[href='#${anchorId}']`);

   // Adding 'click' event listener to prevent default jump action and smooth scrolling to the section linked to the clicked anchor element
   anchor.addEventListener('click', function (event) {

     event.preventDefault();
    
    // https://www.codegrepper.com/code-examples/javascript/javascript+scroll+to+element+smooth
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView ..reference to use scrollIntoView method    
    section.scrollIntoView({
    
      behavior: 'smooth'
    
         });
    
      });
   }
     
/**
 * Adding h3 element with text 'This Is My First Project !'
 */
 // resourse https://classroom.udacity.com/nanodegrees/nd001-mena-nfp2/parts/f3a5692d-ea43-4327-991f-5cb3f7186e1c/modules/748a2a93-1aab-42ad-b3d5-28f3f01683ca/lessons/4a86fee0-9e63-4c41-8eff-7065d47c41a7/concepts/8cd9dd1c-8347-4e28-ae80-a7cecb48fd00  
 // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
 
// select section1 by its id
const sectionOne = document.querySelector('#section1');
const newTitle = '<h3 >This Is My First Project !</h3>'
// inserting text as h3 element
sectionOne.insertAdjacentHTML('beforebegin', newTitle );
 

/**
 * Adding a button under each section and style it
 */
allSections.forEach(item =>{
   const newButton = '<button>Read more</button>';
   item.insertAdjacentHTML('afterend',newButton);

   // Select all buttons  
   let allButtons = document.querySelectorAll('button');

   // Adding styles to each button   
   allButtons.forEach(button =>{
      button.style.width ='20%' ;
      button.style.padding= '.5em';
      button.style.backgroundColor = '#333';
      button.style.fontSize = '1em';
      button.style.fontWeight = 'bold';

      // https://www.geeksforgeeks.org/jquery-nth-of-type-selector/  
      // If "section:nth-of-type(even)"    
      if(("section:nth-of-type(even)") ){

         // Add margin left         
         button.style.marginLeft = '40%';
      }else {
         // Add margin right         
         button.style.marginRight = '80%';
        }
         
      })
   });

 
/** 
 * Adding scroll event listener to style the section in view port and to style/highight the corresponding link
*/  
document.addEventListener("scroll", function addingStyle(){
   for(const section of allSections){ 
      // 1st, remove "your-active-class" from each section  
      section.classList.remove('your-active-class');
      // get section name from 'data-nav'
      const sectionName = section.getAttribute("data-nav");
      // get top position of each section
      // https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
      // https://www.codegrepper.com/code-examples/javascript/etBoundingClientRect+%28%29
      const secTopPos = section.getBoundingClientRect().top;
      // select all 'a' elements and store them in 'links' variable
      const links = document.querySelectorAll('a');
      // check if section in the view port : if section top is between 0,300 px then the section is in view port
      if(secTopPos >= 0 && secTopPos <= 300){
       // then, if section does not have'your-active-class', add it
       section.classList.toggle("your-active-class");
       for ( let link of links ){
       // 1st, remove 'link_style' class from each 'a' element
       link.classList.remove("link_style");
       // check if the text of 'a' element is equal to the section name
       if (link.innerText === sectionName){
       // then add 'link_style' class to it
       link.classList.toggle("link_style");
       }
     }
      // else if section is not in the view port, remove the class "your-active-class" from it
      }else{
        section.classList.remove("your-active-class");
       }
     }
   })
  
   
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


