$(function(){
    // Mobile Menu GNB
    var mouseCount = 0;
    $("#m_mgnb_wrap>button").click(function(){
        mouseCount++;
        if(mouseCount%2 == 1){
            $("#m_mgnb_wrap, #m_mgnb_wrap>ul").addClass("m_gnb_active");
        }else{
            $("#m_mgnb_wrap, #m_mgnb_wrap>ul").removeClass("m_gnb_active");
        }
    });
}); //End