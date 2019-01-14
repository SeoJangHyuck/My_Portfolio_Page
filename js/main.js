$(function(){
    var c = 0;
    
    // Fullpage
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
                ct = setInterval(changeT,100);
                changeT();
                function changeT(){
                    c++;
                    if(c<=40){
                        $(".m_camera_film").each(function(){
                            cp = $(this).attr("data-num");
                            $(this).find("p").text(Math.ceil(cp*c/40)+"%");
                        });
                    }else{
                        clearInterval(ct);
                    }
                }
            };
            if(index==4){
                $(".m_portfolio_foot>img").addClass("m_portfolio_active");
            }
        },
        onLeave: function(index, nextIndex, direction){
            $("#m_gnb_wrap>ul>li").removeClass("m_gnb_active");
        }
    });

    // bxSlider
    $(".m_slider").bxSlider({
        maxSlides: 2,
        minSlides: 1,
        moveSlides: 1
    });

    // Profile
    $(".m_slider_page3>div>p>em>button").click(function(){
        var porModal = $(this).attr("data-pm");
        $("."+porModal).addClass("m_profile_active");
        $(".m_profile_modal").fadeIn(400);
    });
    $(".m_profile_modal>div>button").click(function(){
        $(this).parent().removeClass("m_profile_active");
        $(".m_profile_modal").fadeOut(400);
    });

    // Portfolio
    $(".m_portfolio_box").mouseover(function(){
        $(".m_portfolio_box>img").eq(0).addClass("m_portfolio_active");
        $(".m_portfolio_box>img").eq(1).addClass("m_portfolio_active");
    });
    $(".m_portfolio_box").mouseout(function(){
        $(".m_portfolio_box>img").eq(0).removeClass("m_portfolio_active");
        $(".m_portfolio_box>img").eq(1).removeClass("m_portfolio_active");
    });
    $(".m_portfolio_index>li>a").click(function(){
        var portModal = $(this).attr("data-pm");
        $("."+portModal).addClass("m_portfolio_active");
        $(".m_portfolio_modal").fadeIn(400);
    });
    $(".m_pm_box>div>button").click(function(){
        $(this).parent().removeClass("m_portfolio_active");
        $(".m_portfolio_modal").fadeOut(400);
    });
}); //End