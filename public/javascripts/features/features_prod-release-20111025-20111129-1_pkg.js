Features={
    initialize:function(){
        $("a[href='"+document.location.hash+"']").click();
        Features.totalWidth=0;
        $('ul#features_nav li').each(function(){
            Features.totalWidth+=($(this).width())+1;
        });
        $('ul#features_nav').css({
            width:Features.totalWidth
            });
        Features.areaShowing=$('div.features_nav_wrapper > div.inner').width();
        Features.scrollAmount=Features.totalWidth-Features.areaShowing-2;
        var speed=600;
        $('#navPrev').click(function(){
            if($('#navPrev').hasClass('enabled')){
                $('#features_nav').animate({
                    left:'0'
                },speed);
                $('#navPrev').toggleClass('enabled');
                $('#navNext').toggleClass('enabled');
                alert(Features.totalWidth);
            }
        });
    $('#navNext').click(function(){
        if($('#navNext').hasClass('enabled')){
            $('#features_nav').animate({
                left:-(Features.scrollAmount)
                },speed);
            $('#navNext').toggleClass('enabled');
            $('#navPrev').toggleClass('enabled');
        }
    });
},
changeContent:function(){
    var originalScrollTop=$(window).scrollTop();
    var contentClass=document.location.hash;
    if(contentClass==""||contentClass=="#"){
        contentClass=$('#features_nav a.selected').attr("href");
        contentClass=contentClass?contentClass:"#overview";
    }
    contentClass=contentClass.substring(contentClass.lastIndexOf("#")+1);
    $('#features_nav a.selected').toggleClass('selected');
    $("a[href='#"+contentClass+"']").toggleClass('selected');
    $('.feature_content.enabled').hide();
    $('.feature_content.enabled').toggleClass('enabled');
    $('.feature_content.'+contentClass).show();
    $('.feature_content.'+contentClass).toggleClass('enabled');
    $(window).scrollTop(originalScrollTop);
},
scrollToFeature:function(){
    Features.changeContent();
    var elementEndPosition=0;
    var found=false;
    $('ul#features_nav a').each(function(){
        if(!found){
            elementEndPosition+=($(this).parent().width())+1;
        }
        found=found||$(this).hasClass('selected');
    });
    if(elementEndPosition>Features.areaShowing){
        $('#features_nav').attr("style","width: "+Features.totalWidth+"px; left: -"+Features.scrollAmount+"px;");
        $('#navNext').toggleClass('enabled');
        $('#navPrev').toggleClass('enabled');
    }
}
};

$(document).ready(function(){
    Features.initialize();
    jQuery(window).hashchange(Features.changeContent);
    Features.scrollToFeature();
});