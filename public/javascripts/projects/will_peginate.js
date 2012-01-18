document.observe("dom:loaded",function(){
    var container=$(document.body);
    if(container){
        var img=new Image;
        img.src='/imagesprojects/spinner_adding.gif';
        function createSpinner(){
            return new Element('img',{
                src:img.src,
                'class':'spinner'
            });
        }
        container.observe('click',function(e){
            var el=e.element();
            if(el.match('.pagination a')){
                el.up('.pagination').update(createSpinner());
                new Ajax.Request(el.href,{
                    method:'get'
                });
                e.stop();
            }
        })
    }
})