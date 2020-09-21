


let left = ()=>{

    document.getElementById('rightTest').style.visibility='visible';

    let current  = $('.test.active');
    let prev = current.prev();
    if(prev.length===0){
        document.getElementById('leftTest').style.visibility='hidden';
    }else{
        current.fadeOut(600).removeClass('active');
        prev.fadeIn(600).addClass('active');
        document.getElementById('leftTest').style.visibility='visible';
    }



};

let right = ()=>{

    document.getElementById('leftTest').style.visibility='visible';
    let current  =$('.test.active');
    let next = current.next();
    if(next.length===0){
        // $('.test').first().fadeIn(600).addClass('active')
        document.getElementById('rightTest').style.visibility='hidden';
    }else{
        current.fadeOut(600).removeClass('active');
        next.fadeIn(600).addClass('active');
        document.getElementById('rightTest').style.visibility='visible';
    }



};





let leftWork = ()=>{

    document.getElementById('rightWork').style.visibility='visible';

    let current  = $('.worked.active');
    let prev = current.prev();
    if(prev.length===0){
        document.getElementById('leftWork').style.visibility='hidden';
    }else{
        current.fadeOut(600).removeClass('active');
        prev.fadeIn(600).addClass('active');
        document.getElementById('leftWork').style.visibility='visible';
    }



};

let rightWork = ()=>{


    document.getElementById('leftWork').style.visibility='visible';
    let current  =$('.worked.active');
    let next = current.next();
    if(next.length===0){
        // $('.test').first().fadeIn(600).addClass('active')
        document.getElementById('rightWork').style.visibility='hidden';
    }else{
        current.fadeOut(600).removeClass('active');
        next.fadeIn(600).addClass('active');
        document.getElementById('rightWork').style.visibility='visible';
    }



};