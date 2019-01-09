$(function(){
    $("#m_content_box").fullpage({
        menu: "#m_gnb_wrap",
        anchors:["m_home","m_profile","m_ability","m_portfolio"],
        afterLoad: function(anchorLink, index){
            $("#m_gnb_wrap>ul>li").eq(index-1).addClass("m_gnb_active");
        },
        onLeave: function(index, nextIndex, direction){
            $("#m_gnb_wrap>ul>li").removeClass("m_gnb_active");
        }
    });
}); //End