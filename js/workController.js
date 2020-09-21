let data = [{
        data: 'Credit Management Dashboard Project Development',
        length: 10
    },{
        data: 'Collections Dashboard Project Development',
        length: 5
    },{
        data: 'Employee Dashboard Project Development',
        length: 3
    },{
        data: 'Financial Systems Developer Town Project',
        length: 7
    },{
        data: 'Billberry App UX Hackathon',
        length: -1
    },{
        data: 'Post-a-Role Modal Mockup and Development',
        length: 9
    },{
        data: 'Project Demos',
        length: -1
    },{
        data: 'HTML Email Templates',
        length: 1
    },{
        data: 'TalentVine’s Best Recruitment Agency Award Design <br><br> <small>(On <a href="https://www.stellarrecruitment.com/" target="_blank">Stellar</a> and <a href="https://www.whitebaysearch.com/" target="_blank">Whitebay Search</a> websites)</small>',
        length: 2
    },{
        data: 'Design Assets',
        length: -1
    },

    ]


/**
 * id <=5 adp else TV
 */
function extractUrl(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('p');

    modifyContent(myParam,data[myParam-1]);

}


let modifyContent = (id,data)=>{

    if(parseInt(id)>5){
        $('#logo').attr("src", "../resources/logo/tv.png");
    }



    if(id==='5'){
        $( "#content" ).remove();
        $('#ytd').remove();

    }else if(id==='7'){
        $( "#content" ).remove();
        $('#ppt').remove();

    } else if(id==='10'){
        $('#ppt').remove();
        $('#ytd').remove();
        $( "#content" ).remove();
    }else if(id==='11') {
        $('#ppt').remove();
        $('#ytd').remove();
        let div = `<iframe src='../resources/QUT%20Co-Lab%20Certificate%20Sana%20Nazreen.pdf' style="width: 100%;height:100vh">`
        document.getElementById('logo').style.display = 'none';
        document.getElementById('carousel').innerHTML = div;

    }
    else{
        $('#ppt').remove();
        $('#ytd').remove();


        let v=``;

        for (let i = 1; i <= data.length; i++) {

            if(i===1)v+=`<div class="carousel-item active">
            <div class="container">
            <div class="row">
            <div class="col-12" style="text-align: center;align-items: center">
            <img class="img-fluid" src="../resources/work/${id}/${i}.jpg" alt="" style="max-width: 80vw; max-height: 80vh;">
            <p>(${i}/${data.length})</p>
            </div>
            </div>
            </div>
            </div>`;
            else
                v+=`<div class="carousel-item ">
            <div class="container">
            <div class="row">
            <div class="col-12" style="text-align: center;align-items: center">
            <img class="img-fluid" src="../resources/work/${id}/${i}.jpg" alt="" style="max-width: 80vw; max-height: 80vh;">
            <p>(${i}/${data.length})</p>
            </div>
            </div>
            </div>
            </div>`;

        }

        let div = `<div id="carouselExampleControls2" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner"  >`+v+`


        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true" ><img src="../resources/Icons/angle-left-solid.svg" alt="" class="img-fluid"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"><img src="../resources/Icons/angle-right-solid.svg" alt="" class="img-fluid"></span>
            <span class="sr-only">Next</span>
        </a>
        <div style="text-align: center;font-family: "open sans";margin-top: 2vh;" class="h5">${data.data}</div>
    </div>`;

        document.getElementById('carousel').innerHTML = div;

    }

}


//exceptions 5,7,10


