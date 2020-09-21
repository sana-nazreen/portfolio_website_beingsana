let changeAchievements = () => {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // some code..

        let div = ` <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
         <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
            <div class="container">
                <div class="row">
                    <div class="col-12 heading h2 " style="color: #FFFFFF;">
                        <br>My Achievements
                    </div>
                </div>


            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">

                <div class="row">
                         <div class="ac_card" style="margin:1vh">
                        <div class="ac_text">
                            Admitted to Dean’s List of
                            Excellent
                            Academic Performance
                        </div>
                        <div class="ac_uni">
                            <b>QUT</b>
                        </div>
                        <center>
                            <div class="ac_view ac_view_text">
                                <a href="/html/achievements.html?p=1"
                                   style="text-decoration: none;color:inherit">View</a>
                            </div>
                        </center>
                    </div>
                           <div class="ac_card" style="margin: 1vh">
                        <div class="ac_text">
                            Received
                            International Merit
                            Scholarship
                        </div>
                        <div style="margin-top: 17px">

                        </div>
                        <div class="ac_uni">
                            <b>QUT</b>
                        </div>
                        <center>
                            <div class="ac_view ac_view_text text-center">
                                <a href="/html/achievements.html?p=3"
                                   style="text-decoration: none;color:inherit">View</a>
                            </div>
                        </center>
                    </div>
                              <div class="ac_card" style="margin: 1vh">
                        <div class="ac_text">
                            Scored an 8.5 out of 9 in
                            Pearson’s Test of English
                            (PTE)
                        </div>
                        <div style="margin-top: 17px">

                        </div>
                        <div class="ac_uni">
                        <b>Pearson Inc.</b>
                        </div>
                        <center>
                            <div class="ac_view ac_view_text text-center">
                                <a href="/html/achievements.html?p=4"
                                   style="text-decoration: none;color:inherit">View</a>
                            </div>
                        </center>
                    </div>
                    </div>
                    <div style="text-align: center; color: white;"><small>3 of 9 &nbsp;</small></div>

                </div>
                <div class="carousel-item">
                   <div class="row">


                    <div class="ac_card" style="margin:1vh">
                        <div class="ac_text"
                             style="padding: 15px 5px 20px 5px;">
                            Received First Place in
                                Technical Model Exhibition &
                                Competition
                        </div>
                        <div class="ac_uni">
                        <b>VRSEC</b>
                        </div>
                        <center>
                            <div class="ac_view ac_view_text">
                                <a href="/html/achievements.html?p=5"
                                   style="text-decoration: none;color:inherit">View</a>
                            </div>
                        </center>
                    </div>


                    <div class="ac_card" style="margin:1vh">
                        <div class="ac_text"
                             style="padding: 10px 5px 20px 5px;">
                            Received Certification for
                            Complete Web Developer
                            Course with Rob Percival
                        </div>

                        <div class="ac_uni">
                        <b>Udemy</b>
                        </div>
                        <center>
                            <div class="ac_view ac_view_text text-center">
                                <a href="/html/achievements.html?p=6"
                                   style="text-decoration: none;color:inherit">View</a>
                            </div>
                        </center>
                    </div>


                    <div class="ac_card" style="margin:1vh">
                        <div class="ac_text"
                             style="padding: 10px 5px 20px 5px;">
                            Received Certification for
                            UX & Web Design Master
                            Course with Joe Natoli
                        </div>

                        <div class="ac_uni">
                        <b>Udemy</b>
                        </div>
                        <center>
                            <div class="ac_view ac_view_text text-center">
                                <a href="/html/achievements.html?p=7"
                                   style="text-decoration: none;color:inherit">View</a>
                            </div>
                        </center>
                    </div>


            </div>
            <div style="text-align: center; color: white;"><small>6 of 9 &nbsp;</small></div>
                </div>
                <div class="carousel-item">
                     <div class="row">

                    <div class="ac_card" style="margin:1vh">
                        <div class="ac_text">
                             Paticipated in Entrepreneurship Awareness Drive 2014
                        </div>
                        <div class="ac_uni">
                        <b>QUT</b>
                        </div>
                        <center>
                            <div class="ac_view ac_view_text">
                                <a href="/html/achievements.html?p=8"
                                   style="text-decoration: none;color:inherit">View</a>
                            </div>
                        </center>
                    </div>



                    <div class="ac_card" style="margin:1vh">
                        <div class="ac_text">
                            Nominated for Student of The
                            Year 2016
                        </div>
                        <div style="padding-top: 17px"></div>
                        <div class="ac_uni">
                        <b>VRSEC</b>
                        </div>


                    </div>


                    <div class="ac_card" style="margin:1vh">
                        <div class="ac_text">
                            Received Gold Medal for
                            Achieving Excellence as a School
                            Pupil Leader
                        </div>

                        <div class="ac_uni"
                        >
                        <b>Nirmala High School</b>
                        </div>
                    </div>

            </div>
            <div style="text-align: center; color: white;"><small>9 of 9 &nbsp;</small></div>
                </div>
              </div><br><br>
            </div>


    </div>`;
        document.getElementById('achievements').innerHTML = ' ';
        document.getElementById('achievements').innerHTML = div;
    }


}
//1st row
let changeTestimonials = () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        let div = `
        <div class="container">
                     <div class="row"
             style="margin-top: 5vh;margin-bottom: 10vh;">
            <div class="col-12 work-heading"
                 style="color: #DC507A;font-family: Aladin;text-align: center">
                Testimonials
            </div>
        </div>

 <div id="carouselExampleControls2" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner" style="">
                <div class="carousel-item active ">
                <div  style="margin:2vh;font-size: 14px;">
                       <div class="row" style="text-align: center;align-items: center;margin-bottom: 5vh"><div class="col-12" style="align-items: center"><img class="img-fluid" src="../resources/logo/adp.png" alt="" style="height:10vh"></div></div>

                       <div class="row" style="margin:2vh;padding:4vh 2vh;background: #FFFFFF;
                        border: 1px solid #C4C4C4;
                        box-sizing: border-box;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 20px;">
                            <div class="col-12" style="text-align: center">
                            "You’re a wonderful person to work with in a team and you’ve got great communication skills and ability to charm others. You’re a people person and you should pursue your career around it."
                            </div>

                            <hr style="background: #DA5E5E;width:80%;margin-top: 7vh">
                             <div style="color: #444444;font-weight: bold;text-align: center;
                             "><bold>Project Leader - Development, ADP Inc, Roseland USA</bold> </div>


                  </div>
                  </div>
                  <div style="text-align: center;">< &nbsp; <small>1 of 8 &nbsp;</small>   ></div>
    </div>
    <div class="carousel-item">
       <div  style="margin:2vh;font-size: 14px;">
                      <div class="row" style="text-align: center;align-items: center;margin-bottom: 5vh"><div class="col-12" style="align-items: center"><img class="img-fluid" src="../resources/logo/adp.png" alt="" style="height:10vh"></div></div>

                       <div class="row" style="margin:2vh;padding:4vh 2vh;background: #FFFFFF;
                        border: 1px solid #C4C4C4;
                        box-sizing: border-box;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 20px;">
                            <div class="col-12" style="text-align: center">
                           "You have in a very short span of time touched the hearts of many at ADP. I believe in your sincerity and dedication. These qualities in you will enable you to reach great heights in your journey."

                            </div>
                               <br>
                               <br>
                            <hr style="background: #DA5E5E;width:80%;margin-top: 5vh">

                            <div style="color: #444444;font-weight: bold; text-align: center;margin-bottom-2vh
                             "><bold>Principal Architect - Applications, ADP Inc, Roseland USA </bold> </div>


                        </div>
                    </div>
                    <div style="text-align: center;">< &nbsp; <small>2 of 8 &nbsp;</small>   ></div>
    </div>
    <div class="carousel-item">
     <div  style="margin:2vh;font-size: 14px;">
                    <div class="row" style="text-align: center;align-items: center;margin-bottom: 5vh"><div class="col-12" style="align-items: center"><img class="img-fluid" src="../resources/logo/adp.png" alt="" style="height:10vh"></div></div>

                       <div class="row" style="margin:2vh;padding:4vh 2vh;background: #FFFFFF;
                        border: 1px solid #C4C4C4;
                        box-sizing: border-box;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 20px;">
                            <div class="col-12" style="text-align: center">
                          "Sana is very energetic and enthusiastic towards learning new technologies and business domains. She is an excellent team player, very amicable, and has a great eye for design."
                            </div>

                            <hr style="background: #DA5E5E;width:80%;margin-top: 9vh">

                            <div style="color: #444444;font-weight: bold;text-align: center;
                             "><bold>Senior Project Manager, ADP Inc, Hyderabad India</bold> </div>


                        </div>
                    </div>
                    <div style="text-align: center;">< &nbsp; <small>3 of 8 &nbsp;</small>   ></div>
    </div>
     <div class="carousel-item ">
     <div  style="margin:2vh;font-size: 14px;">
                     <div class="row" style="text-align: center;align-items: center;margin-bottom: 5vh"><div class="col-12" style="align-items: center"><img class="img-fluid" src="../resources/logo/adp.png" alt="" style="height:10vh"></div></div>

                       <div class="row" style="margin:2vh;padding:4vh 2vh;background: #FFFFFF;
                        border: 1px solid #C4C4C4;
                        box-sizing: border-box;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 20px;">
                            <div class="col-12" style="text-align: center;">
                           "You bring in lot of energy to the team and team will always miss you. Wish you all the best for your future endeavors!"
                            </div>


                            <hr style="background: #DA5E5E;width:80%;margin-top: 15vh">

                            <div style="color: #444444;font-weight: bold;text-align: center;
                             "><bold>Project Manager, ADP Inc, Hyderabad India</bold> </div>


                        </div>
                    </div>
                    <div style="text-align: center;">< &nbsp; <small>4 of 8 &nbsp;</small>   ></div>
    </div>
     <div class="carousel-item">
     <div  style="margin:2vh;font-size: 14px;">
                      <div class="row" style="text-align: center;align-items: center;margin-bottom: 5vh"><div class="col-12" style="align-items: center"><img class="img-fluid" src="../resources/logo/tv.png" alt="" style="height:10vh"></div></div>

                       <div class="row" style="margin:2vh;padding:4vh 2vh;background: #FFFFFF;
                        border: 1px solid #C4C4C4;
                        box-sizing: border-box;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 20px;">
                            <div class="col-12" style="text-align: center">
                           "Sana is always so positive and helpful and always willing to learn and we are blessed to have that in our team. Sana is already putting her leadership course into practice, you know how I love proactivity so thats great to see!."
                            </div>

                            <hr style="background: #DA5E5E;width:80%;margin-top: 5vh">
                            <div style="color: #444444;font-weight: bold;text-align: center;
                             "><bold>Chief Executive Officer (CEO), TalentVine Pty Ltd, Brisbane Australia
</bold> </div>


                        </div>
                    </div>
                    <div style="text-align: center;">< &nbsp; <small>5 of 8 &nbsp;</small>   ></div>

    </div>
    <div class="carousel-item">
     <div  style="margin:2vh;font-size: 14px;">
                      <div class="row" style="text-align: center;align-items: center;margin-bottom: 5vh"><div class="col-12" style="align-items: center"><img class="img-fluid" src="../resources/logo/tv.png" alt="" style="height:10vh"></div></div>
                       <div class="row" style="margin:2vh;padding:4vh 2vh;background: #FFFFFF;
                        border: 1px solid #C4C4C4;
                        box-sizing: border-box;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 20px;">
                            <div class="col-12" style="text-align: center">
                           "Sana's happy smile when she walks into work every day. It's a great motivation to me to see happy people doing what they love. Well done Sana for getting involved in the startup scene and embracing the commitment it takes."
                            </div>

                            <hr style="background: #DA5E5E;width:80%;margin-top: 5vh">
                            <div style="color: #444444;font-weight: bold;text-align: center;
                             "><bold>Chief Technical Officer (CTO), TalentVine Pty Ltd, Brisbane Australia</bold> </div>


                        </div>
                    </div>
                    <div style="text-align: center;">< &nbsp; <small>6 of 8 &nbsp;</small>   ></div>
    </div>
    <div class="carousel-item ">
     <div  style="margin:2vh;font-size: 14px;">
                      <div class="row" style="text-align: center;align-items: center;margin-bottom: 5vh"><div class="col-12" style="align-items: center"><img class="img-fluid" src="../resources/logo/tv.png" alt="" style="height:10vh"></div></div>

                       <div class="row" style="margin:2vh;padding:4vh 2vh;background: #FFFFFF;
                        border: 1px solid #C4C4C4;
                        box-sizing: border-box;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 20px;">
                            <div class="col-12" style="text-align: center">
                          "Sana thanks for building the new tools in the admin panel, you legend! And the new automated email templates are looking so GOOD!"
                            </div>

                            <hr style="background: #DA5E5E;width:80%;margin-top: 12vh">
                            <div style="color: #444444;font-weight: bold;text-align: center;
                             "><bold>Head of Sales, TalentVine Pty Ltd, Brisbane Australia
</bold> </div>


                        </div>
                    </div>
                    <div style="text-align: center;">< &nbsp; <small>7 of 8 &nbsp;</small>   ></div>
    </div>
    <div class="carousel-item">
     <div  style="margin:2vh;font-size: 14px;">
                       <div class="row" style="text-align: center;align-items: center;margin-bottom: 5vh"><div class="col-12" style="align-items: center"><img class="img-fluid" src="../resources/logo/tv.png" alt="" style="height:10vh"></div></div>

                       <div class="row" style="margin:2vh;padding:4vh 2vh;background: #FFFFFF;
                        border: 1px solid #C4C4C4;
                        box-sizing: border-box;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 20px;">
                            <div class="col-12" style="text-align: center">
                          "Great job with your presentation to Canberra Airport!"
                            </div>

                            <hr style="background: #DA5E5E;width:80%;margin-top: 18vh">
                            <div style="color: #444444;font-weight: bold;text-align: center;
                             "><bold>Client Solutions Manager, TalentVine Pty Ltd, Brisbane Australia
</bold> </div>


                        </div>
                    </div>
                    <div style="text-align: center;">< &nbsp; <small>8 of   8 &nbsp;</small>   ></div>
    </div>
  </div>
</div>




    </div>`;
        document.getElementById('testimonials').innerHTML = " ";
        document.getElementById('testimonials').innerHTML = div

    }
}

let changeWork = () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        let div = ` <div class="container">
        <div class="row" >
            <div class="col-12">
                <div>
                    <div class="row work-heading"
                         style="
                        font-family: Aladin; margin-left:2%;">
                        <div class="col-12" style=";margin-top:4vh;">
                        Work Projects</div>

                    </div>
                </div>
            </div>
        </div>

        <div id="carouselExampleControls3" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">

    <div class="carousel-item active">
         <div class="row" style="margin-left: 4%; margin-right:4%;">

                                <div class="col-12"
                                     style="background: #FFFFFF;
                                                border: 1px solid #C4C4C4;
                                                box-sizing: border-box;margin-top:10%;
                                                padding:2vh;
                                                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                                                border-radius: 20px;">
                                   <div class="row"><div class="col-8">
                                        <img src="../resources/logo/adp.png" style="width:50%; height:80%;" class="img-fluid"
                                             alt=""></div></div>
                                    <br>
                                    <div class="row"
                                         style="text-align: center;">
                                        <div class="col-1"></div>
                                        <div class="col-10" style="font-size:16px !important;">
                                            Credit Management Dashboard Project Development
                                        </div>
                                        <div class="col-1"></div>
                                    </div>
                                    <br><br><br>

                                    <div class="row">
                                        <div class="col-2"></div>
                                        <div class="col-8"
                                             style="padding:0.5vh;background: #DC507A;color: #FFFFFF;text-align: center;cursor: pointer;">
                                            UI Development
                                        </div>
                                        <div class="col-2"></div>

                                    </div>

                                    <br>
                                    <br>
                                    <br>
                                    <div class="row">
                                        <div class="col-4"></div>
                                         <div class="col-4"
                                             style="background: #FFEAF7;color:#555555;
                                                    border-radius: 25px;text-align: center;cursor: pointer;">
                                            <a href="/html/work.html?p=1" style="color: inherit;text-decoration: none">View</a>
                                        </div>
                                        <div class="col-4"></div>
                                    </div>

                                </div>
        </div>
        <div style="text-align: center; margin-top:15px;">
        <p style="color: #888888; font-size:12px;font-family:Quicksand;">1 of 11</p>
        </div>
    </div>

    <div class="carousel-item">
     <div class="row" style="margin-left: 4%; margin-right:4%;">

                                <div class="col-12"
                                     style="background: #FFFFFF;
                                                border: 1px solid #C4C4C4;
                                                box-sizing: border-box;margin-top:10%;
                                                padding:2vh;
                                                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                                                border-radius: 20px;">
                                   <div class="row"><div class="col-8">
                                        <img src="../resources/logo/adp.png" style="width:50%; height:80%;" class="img-fluid"
                                             alt=""></div></div>
                                    <br>
                                    <div class="row"
                                         style="text-align: center;">
                                        <div class="col-1"></div>
                                        <div class="col-10" style="font-size:16px !important;">
                                            Collections Dashboard Project Development
                                        </div>
                                        <div class="col-1"></div>
                                    </div>
                                    <br><br><br>

                                    <div class="row">
                                        <div class="col-2"></div>
                                        <div class="col-8"
                                             style="padding:0.5vh;background: #DC507A;color: #FFFFFF;text-align: center;cursor: pointer;">
                                            UI Development
                                        </div>
                                        <div class="col-2"></div>

                                    </div>

                                    <br>
                                    <br>
                                    <br>
                                    <div class="row">
                                        <div class="col-4"></div>
                                       <div class="col-4"
                                             style="background: #FFEAF7;color:#555555;
                                                    border-radius: 25px;text-align: center;cursor: pointer;">
                                            <a href="/html/work.html?p=2" style="color: inherit;text-decoration: none">View</a>
                                        </div>
                                        <div class="col-4"></div>
                                    </div>

                                </div>
</div>
        <div style="text-align: center; margin-top:15px;">
        <p style="color: #888888; font-size:12px;font-family:Quicksand;">2 of 11</p>
        </div>
    </div>

    <div class="carousel-item">
    <div class="row" style="margin-right: 4%;margin-left: 4%">
     <div class="col-12"
                                 style="background: #FFFFFF;
                                            border: 1px solid #C4C4C4;
                                            box-sizing: border-box;
                                            margin-top:10%;
                                            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                                            border-radius: 20px;padding:2vh">
                                <div class="row"><div class="col-8">
                                        <img src="../resources/logo/adp.png" style="width:50%; height:80%;" class="img-fluid"
                                             alt=""></div></div>
                                <br>
                                <div class="row"
                                     style="text-align: center;">
                                    <div class="col-1"></div>
                                    <div class="col-10" style="font-size:16px !important;">
                                        Employee Dashboard
                                        Project Development
                                    </div>
                                    <div class="col-1"></div>
                                </div>
                                <br>
                                <br>
                                <br>

                                <div class="row">
                                    <div class="col-2"></div>
                                    <div class="col-8"
                                         style="padding:0.5%;background: #DC507A;color: #FFFFFF;text-align: center;cursor: pointer;">
                                        UI Development
                                    </div>
                                    <div class="col-2"></div>

                                </div>
                                <br>
                                <div class="row">
                                    <div class="col-2"></div>
                                    <div class="col-8"
                                         style="padding:0.5%;background: #DC507A;color: #FFFFFF;text-align: center;cursor: pointer;">
                                        UX Design
                                    </div>
                                    <div class="col-2"></div>

                                </div>

                                <br>
                                <br>

                                <div class="row">
                                    <div class="col-4"></div>
                                    <div class="col-4"
                                             style="background: #FFEAF7;color:#555555;
                                                    border-radius: 25px;text-align: center;cursor: pointer;">
                                            <a href="/html/work.html?p=3" style="color: inherit;text-decoration: none">View</a>
                                        </div>
                                    <div class="col-4"></div>
                                </div>

                            </div>
    </div>
        <div style="text-align: center; margin-top:15px;">
          <p style="color: #888888; font-size:12px;font-family:Quicksand;">3 of 11</p>
        </div>
    </div>

    <div class="carousel-item">
      <div class="row" style="margin-right: 4%;margin-left: 4%">
     <div class="col-12"
                                 style="background: #FFFFFF;
                                            border: 1px solid #C4C4C4;
                                            box-sizing: border-box;
                                            margin-top:10%;
                                            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                                            border-radius: 20px;padding:2vh">
                               <div class="row"><div class="col-8">
                                        <img src="../resources/logo/adp.png" style="width:50%; height:80%;" class="img-fluid"
                                             alt=""></div></div>
                                <br>
                                <div class="row"
                                     style="text-align: center;">
                                    <div class="col-1"></div>
                                    <div class="col-10" style="font-size:16px !important;">
                                        Financial Systems
                                        Developer Town
                                        Project
                                    </div>
                                    <div class="col-1"></div>
                                </div>
                                <br>
                                <br>
                                <br>


                                <div class="row">
                                    <div class="col-2"></div>
                                    <div class="col-8"
                                         style="padding:0.5%;background: #DC507A;color: #FFFFFF;text-align: center;cursor: pointer;">
                                        UI Development
                                    </div>

                                    <div class="col-2"></div>

                                </div>
                                <br>

                                <div class="row">
                                    <div class="col-2"></div>
                                    <div class="col-8"
                                         style="padding:0.5%;background: #DC507A;color: #FFFFFF;text-align: center;cursor: pointer;">
                                        UX Design
                                    </div>

                                    <div class="col-2"></div>

                                </div>

                                <br>
                                <br>

                                <div class="row">
                                    <div class="col-4"></div>
                                    <div class="col-4"
                                             style="background: #FFEAF7;color:#555555;
                                                    border-radius: 25px;text-align: center;cursor: pointer;">
                                            <a href="/html/work.html?p=4" style="color: inherit;text-decoration: none">View</a>
                                        </div>
                                    <div class="col-4"></div>
                                </div>
    </div>
    </div>
      <div style="text-align: center; margin-top:15px;">
      <p style="color: #888888; font-size:12px;font-family:Quicksand;">4 of 11</p>
      </div>
    </div>

    <div class="carousel-item">
     <div class="row" style="margin-left: 4%; margin-right:4%;">

                                <div class="col-12"
                                     style="background: #FFFFFF;
                                                border: 1px solid #C4C4C4;
                                                box-sizing: border-box;margin-top:10%;
                                                padding:2vh;
                                                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                                                border-radius: 20px;">
      <div class="row"><div class="col-8">
                                        <img src="../resources/logo/adp.png" style="width:50%; height:80%;" class="img-fluid"
                                             alt=""></div></div>
                                <br>
                                <div class="row"
                                     style="text-align: center;">
                                    <div class="col-1"></div>
                                    <div class="col-10" style="font-size:16px !important;">
                                        Billberry App UX
                                        Hackathon
                                    </div>
                                    <div class="col-1"></div>
                                </div>
                                <br><br><br>

                                <div class="row">
                                    <div class="col-2"></div>
                                    <div class="col-8"
                                         style="padding:0.5%;background: #DC507A;color: #FFFFFF;text-align: center;cursor: pointer;">
                                        UX Design
                                    </div>
                                    <div class="col-2"></div>

                                </div>
                                <br>
                                <br>


                                <br>
                                <div class="row">
                                    <div class="col-4"></div>
                                     <div class="col-4"
                                             style="background: #FFEAF7;color:#555555;
                                                    border-radius: 25px;text-align: center;cursor: pointer;">
                                            <a href="/html/work.html?p=5" style="color: inherit;text-decoration: none">View</a>
                                        </div>
                                    <div class="col-4"></div>
                                </div>
    </div>
    </div>
        <div style="text-align: center; margin-top:15px;">
        <p style="color: #888888; font-size:12px;font-family:Quicksand;">5 of 11</p>
        </div>
    </div>
    <div class="carousel-item">
       <div class="row" style="margin-right: 4%;margin-left: 4%">
     <div class="col-12"
                                 style="background: #FFFFFF;
                                            border: 1px solid #C4C4C4;
                                            box-sizing: border-box;
                                            margin-top:10%;
                                            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                                            border-radius: 20px;padding:2vh">
                         <div class="row"><div class="col-8">
                                        <img src="../resources/logo/tv.png" style="width:50%;height:90%;" class="img-fluid"
                                             alt=""></div></div>
                                <br>
                                <div class="row"
                                     style="text-align: center;">
                                    <div class="col-1"></div>
                                    <div class="col-10" style="font-size:16px !important;">
                                        Post-a-Role Modal
                                        Mockup and
                                        Development
                                    </div>
                                    <div class="col-1"></div>
                                </div>
                                <br><br>
                                <div class="row">
                                    <div class="col-2"></div>
                                    <div class="col-8"
                                         style="padding:0.5%;background: #DC507A;color: #FFFFFF;text-align: center;cursor: pointer;">
                                        UX Design
                                    </div>
                                    <div class="col-2"></div>

                                </div>
                                <br>


                                <div class="row">
                                    <div class="col-2"></div>
                                    <div class="col-8"
                                         style="padding:0.5%;background: #DC507A;color: #FFFFFF;text-align: center;cursor: pointer;">
                                        UI Development
                                    </div>
                                    <div class="col-2"></div>

                                </div>
                                <br>


                                <br>
                                <div class="row">
                                    <div class="col-4"></div>
                                    <div class="col-4"
                                             style="background: #FFEAF7;color:#555555;
                                                    border-radius: 25px;text-align: center;cursor: pointer;">
                                            <a href="/html/work.html?p=6" style="color: inherit;text-decoration: none">View</a>
                                        </div>
                                    <div class="col-4"></div>
                                </div>


    </div>
    </div>
    <div style="text-align: center; margin-top:15px;">
    <p style="color: #888888; font-size:12px;font-family:Quicksand;">6 of 11</p>
    </div>
    </div>

    <div class="carousel-item">
       <div class="row" style="margin-right: 4%;margin-left: 4%">
     <div class="col-12"
                                 style="background: #FFFFFF;
                                            border: 1px solid #C4C4C4;
                                            box-sizing: border-box;
                                            margin-top:10%;
                                            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                                            border-radius: 20px;padding:2vh">


                                                        <div class="row"><div class="col-8">
                                        <img src="../resources/logo/tv.png" style="width:50%;height:90%;" class="img-fluid"
                                             alt=""></div></div>

                                    <br>
                                    <div class="row"
                                         style="text-align: center;">
                                        <div class="col-1"></div>
                                        <div class="col-10" style="font-size:16px !important;">
                                            Project Demos
                                        </div>
                                        <div class="col-1"></div>
                                    </div>
                                    <br>
                                    <br>
                                    <div class="row">
                                        <div class="col-2"></div>
                                        <div class="col-8"
                                             style="padding:0.5%;background: #DC507A;color: #FFFFFF;text-align: center;cursor: pointer;">
                                            UX Design
                                        </div>
                                        <div class="col-2"></div>

                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-2"></div>
                                        <div class="col-8"
                                             style="padding:0.5%;background: #DC507A;color: #FFFFFF;text-align: center;cursor: pointer;">
                                            UI Development
                                        </div>
                                        <div class="col-2"></div>

                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-2"></div>
                                        <div class="col-8"
                                             style="padding:0.5%;background: #DC507A;color: #FFFFFF;text-align: center;cursor: pointer;">
                                            Video Making
                                        </div>
                                        <div class="col-2"></div>

                                    </div>
                                     <br><br>
                                <div class="row">
                                    <div class="col-4"></div>
                                    <div class="col-4"
                                             style="background: #FFEAF7;color:#555555;
                                                    border-radius: 25px;text-align: center;cursor: pointer;">
                                            <a href="/html/work.html?p=7" style="color: inherit;text-decoration: none">View</a>
                                        </div>
                                    <div class="col-4"></div>
                                </div>

    </div>
    </div>
        <div style="text-align: center; margin-top:15px;">
        <p style="color: #888888; font-size:12px;font-family:Quicksand;">7 of 11</p>
        </div>
    </div>

    <div class="carousel-item">
         <div class="row" style="margin-right: 4%;margin-left: 4%">
     <div class="col-12"
                                 style="background: #FFFFFF;
                                            border: 1px solid #C4C4C4;
                                            box-sizing: border-box;
                                            margin-top:10%;
                                            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                                            border-radius: 20px;padding:2vh">

  <div class="row"><div class="col-8">
                                        <img src="../resources/logo/tv.png" style="width:50%;height:90%;" class="img-fluid"
                                             alt=""></div></div>
                                    <br>
                                    <div class="row"
                                         style="text-align: center">
                                        <div class="col-1"></div>
                                        <div class="col-10" style="font-size:16px !important;">
                                            HTML Email Templates
                                        </div>
                                        <div class="col-1"></div>
                                    </div>
                                    <br>
                                    <br>
                                    <br>

                                    <div class="row">
                                        <div class="col-2"></div>
                                        <div class="col-8"
                                             style="padding:0.5%;background: #DC507A;color: #FFFFFF;text-align: center;cursor: pointer;">
                                            UX Design
                                        </div>
                                        <div class="col-2"></div>

                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-2"></div>
                                        <div class="col-8"
                                             style="padding:0.5%;background: #DC507A;color: #FFFFFF;text-align: center;cursor: pointer;">
                                            UI Development
                                        </div>
                                        <div class="col-2"></div>

                                    </div>
                                    <br>
                                    <br>

                                    <div class="row">
                                        <div class="col-4"></div>
                                       <div class="col-4"
                                             style="background: #FFEAF7;color:#555555;
                                                    border-radius: 25px;text-align: center;cursor: pointer;">
                                            <a href="/html/work.html?p=8" style="color: inherit;text-decoration: none">View</a>
                                        </div>
                                        <div class="col-4"></div>
                                    </div>

    </div>
    </div>
        <div style="text-align: center; margin-top:15px;">
        <p style="color: #888888; font-size:12px;font-family:Quicksand;">8 of 11</p>
        </div>
    </div>

    <div class="carousel-item">
       <div class="row" style="margin-right: 4%;margin-left: 4%">
     <div class="col-12"
                                 style="background: #FFFFFF;
                                            border: 1px solid #C4C4C4;
                                            box-sizing: border-box;
                                            margin-top:10%;
                                            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                                            border-radius: 20px;padding:2vh">

                  <div class="row"><div class="col-8">
                                        <img src="../resources/logo/tv.png" style="width:50%;height:90%;" class="img-fluid"
                                             alt=""></div></div>
                                    <br>
                                    <div class="row"
                                         style="text-align: center">
                                        <div class="col-1"></div>
                                        <div class="col-10" style="font-size:16px !important;">
                                            TalentVine’s Best
                                            Recruitment Agency
                                            Awards
                                        </div>
                                        <div class="col-1"></div>
                                    </div>
                                    <br>
                                    <br>
                                    <br>

                                    <div class="row">
                                        <div class="col-2"></div>
                                        <div class="col-8"
                                             style="padding:0.5%;background: #DC507A;color: #FFFFFF;text-align: center;cursor: pointer;">
                                            UX Design
                                        </div>
                                        <div class="col-2"></div>
                                    </div>
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                    <div class="row">
                                        <div class="col-4"></div>
                                     <div class="col-4"
                                             style="background: #FFEAF7;color:#555555;
                                                    border-radius: 25px;text-align: center;cursor: pointer;">
                                            <a href="/html/work.html?p=9" style="color: inherit;text-decoration: none">View</a>
                                        </div>
                                        <div class="col-4"></div>
                                    </div>

    </div>
    </div>
        <div style="text-align: center; margin-top:15px;">
        <p style="color: #888888; font-size:12px;font-family:Quicksand;">9 of 11</p>
        </div>
    </div>

    <div class="carousel-item">
        <div class="row" style="margin-right: 4%;margin-left: 4%">
     <div class="col-12"
                                 style="background: #FFFFFF;
                                            border: 1px solid #C4C4C4;
                                            box-sizing: border-box;
                                            margin-top:10%;
                                            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                                            border-radius: 20px;padding:2vh">

                <div class="row"><div class="col-8">
                                        <img src="../resources/logo/tv.png" style="width:50%;height:90%;" class="img-fluid"
                                             alt=""></div></div>
                                    <br>
                                    <div class="row"
                                         style="text-align: center;">
                                        <div class="col-1"></div>
                                        <div class="col-10" style="font-size:16px !important;">
                                            Design Assets
                                        </div>
                                        <div class="col-1"></div>
                                    </div>
                                    <br>
                                    <br>
                                    <br><br>
                                    <div class="row">
                                        <div class="col-2"></div>
                                        <div class="col-8"
                                             style="padding:0.5%;background: #DC507A;color: #FFFFFF;text-align: center;cursor: pointer;">
                                            UX Design
                                        </div>
                                        <div class="col-2"></div>

                                    </div>
                                    <br>
                                    <br>
                                    <br>
                                    <div class="row">
                                        <div class="col-4"></div>
                                       <div class="col-4"
                                             style="background: #FFEAF7;color:#555555;
                                                    border-radius: 25px;text-align: center;cursor: pointer;">
                                            <a href="/html/work.html?p=10" style="color: inherit;text-decoration: none">View</a>
                                        </div>
                                        <div class="col-4"></div>
                                    </div>

    </div>
    </div>
        <div style="text-align: center; margin-top:15px;">
        <p style="color: #888888; font-size:12px;font-family:Quicksand;">10 of 11</p>
        </div>
    </div>

    <div class="carousel-item">
        <div class="row" style="margin-right: 4%;margin-left: 4%">
     <div class="col-12"
                                 style="background: #FFFFFF;
                                            border: 1px solid #C4C4C4;
                                            box-sizing: border-box;
                                            margin-top:10%;
                                            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                                            border-radius: 20px;padding:2vh">

                <div class="row"><div class="col-8">
                                        <img src="../resources/logo/QUT_Logo.png" class="img-fluid"
                                             alt=""></div></div>
                                    <br>
                                    <div class="row"
                                         style="text-align: center;">
                                        <div class="col-1"></div>
                                        <div class="col-10" style="font-size:16px !important;">
                                          Co-Lab Rapid Design Sprint
                                        </div>
                                        <div class="col-1"></div>
                                    </div>
                                    <br>
                                    <br>
                                    <div class="row">
                                        <div class="col-2"></div>
                                        <div class="col-8"
                                             style="padding:0.5%;background: #DC507A;color: #FFFFFF;text-align: center;cursor: pointer;">
                                            UX Design
                                        </div>
                                        <div class="col-2"></div>

                                    </div>
                                    <br>
                                    <br>
                                    <br>
                                    <div class="row">
                                        <div class="col-4"></div>
                                       <div class="col-4"
                                             style="background: #FFEAF7;color:#555555;
                                                    border-radius: 25px;text-align: center;cursor: pointer;">
                                            <a href="/html/work.html?p=11" style="color: inherit;text-decoration: none">View</a>
                                        </div>
                                        <div class="col-4"></div>
                                    </div>

    </div>
    </div>
    <div style="text-align: center; margin-top:15px;">
    <p style="color: #888888; font-size:12px;font-family:Quicksand;">11 of 11</p>
    </div>
    </div>

  </div>
</div>


<!--content-->



    </div>`

        document.getElementById('work').innerHTML = ' ';
        document.getElementById('work').innerHTML = div;
    }
}

