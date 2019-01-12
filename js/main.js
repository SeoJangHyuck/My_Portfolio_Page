$(function(){
    $("#m_content_box").fullpage({
        menu: "#m_gnb_wrap",
        anchors:["m_home","m_profile","m_ability","m_portfolio"],
        afterLoad: function(anchorLink, index){
            $("#m_gnb_wrap>ul>li").eq(index-1).addClass("m_gnb_active");
            if(index==2){
                $(".m_profile_title>img, .m_profile_foot>img").addClass("m_profile_active");
            };
            if(index==3){
                $(".m_camera_film, .m_ability_foot>img").addClass("m_ability_active");
                $(".m_camera_film").each(function(){
                    // var flimTop = setInterval(function(){
                    //     $(this).css("top");
                    // },50);
                    //console.log(flimTop);
                    //var flimTopNum = parseInt(flimTop);
                    //if(flimTopNum == -2){
                    //    clearInterval(flimTop);
                    //}
                    // if(flimTopNum >=- 180){
                    //     var abilityPercent = $(this).children("p").text();
                    //     var abilityPercentNum = parseInt(abilityPercent);
                    //     var countA = 0;
                    //     function changPercent(){
                    //         countA++;
                    //         if(abilityPercentNum>=countA){
                    //             return;
                    //         }
                    //         $(this).children("p").text(countA+"%");
                    //         setTimeout(function(){flimEvent();},50);
                    //     }
                    // }
                });
            };
            if(index==4){
                $(".m_portfolio_foot>img").addClass("m_portfolio_active");
            }
        },
        onLeave: function(index, nextIndex, direction){
            $("#m_gnb_wrap>ul>li").removeClass("m_gnb_active");
        }
    });

    $(".m_slider").bxSlider({
        maxSlides: 2,
        minSlides: 1,
        moveSlides: 1
    });
}); //End