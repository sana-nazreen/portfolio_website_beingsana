// /*
// let sections = ['#home','#about','#work','#education','#achievements','#testimonials','#contact'];
//
//
// let currentDiv=0;
//
// let directClick = (id)=>{
//     currentDiv = sections.indexOf(id);
//     if(id ==='#testimonials' || id ==='#contact')
//         currentDiv--;
//     console.log(currentDiv);
// };
//
// let toUp = ()=>{
//     console.log("clicked up");
//     currentDiv=0;
//     console.log(currentDiv);
// };
//
// $(document).ready(function(){
//     $('body').bind('mousewheel', function(e){
//         if(e.originalEvent.wheelDelta /120 > 0) {
//             console.log('scrolling up !');
//             currentDiv--;
//             if(currentDiv<0)
//                 currentDiv = sections.length-2;
//             console.log(currentDiv);
//             $('#virtualClick').attr('href', sections[currentDiv]).click();
//         }
//         else{
//             console.log('scrolling down !');
//             currentDiv++;
//             if(currentDiv>sections.length-1)
//                 currentDiv= sections.length-1;
//             $('#virtualClick').attr('href', sections[currentDiv]).click();
//             console.log(currentDiv);
//         }
//     });
// });*/
