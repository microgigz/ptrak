/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var type_status;
    $("#tab_done").click(function(){
        if($("#panel_done").is(':visible'))
            $('#panel_done').hide();
        else
            $("#panel_done").show();
        
    });

    $("#tab_currnet").click(function(){
        if($("#panel_current").is(':visible'))
            $('#panel_current').hide();
        else
            $("#panel_current").show();
        
    });

    $("#tab_bl").click(function(){
        if($("#panel_backlog").is(':visible'))
            $('#panel_backlog').hide();
        else
            $("#panel_backlog").show();
        
    });

    $("#tab_icebox").click(function(){
        if($("#panel_icebox").is(':visible'))
            $('#panel_icebox').hide();
        else
            $("#panel_icebox").show();
        
    });

    
    $("#addstory_control_button").click(function (){
        
        if($("#new_story").is(':visible'))
            $("#new_story").hide();
        else
            $("#new_story").show();
    });
   // $('#current').find('div').each(function(){
        $('#current > div').draggable( {
            revert: 'invalid',
            start:function(event ,ui){

                type_status=($(this).parent().attr('id'))
//                alert(type_status)
            }
        });
        //
        //block_id = $(this).attr('id').split('-')[1]
        $("#panel_done").droppable({

            //            ui is the thing which is to be drop and $(this) gives on which element to be droped
            drop: function(event,ui){

                task_id = ui.draggable.attr('id').split('-')[1]
                
                panel_id = $(this).attr('id').split('_')[1]
            // $.getScript('/stories/'+block_id+'/update_status/?type='+panel_id+'&task_id='+task_id)

            }
        });
   // });


    $('#icebox > div').draggable({
        revert: 'invalid',
        start:function(event ,ui){
            
            type_status=($(this).parent().attr('id'))
//            alert(type_status)
        },
        stop:function(event,ui){}

    });

    $("#current").bind("drop",function(event,ui){

        task_id = ui.draggable.attr('id').split('-')[1]
        
        panel_id = $(this).attr('id')
        //type_status is replaced by task_id in fi statment
        if( $(this).attr('id') != type_status){
            $.getScript('/stories/'+task_id+'/update_status/?type='+panel_id+'&task_id='+task_id)
            ui.draggable.remove();
            alert(type_status)
            alert(ui.draggable.attr('id'))
            alert($(this).attr('id'))
        }
            
        
            
    });
    $("#current").droppable({

        //        drop: function(event,ui){
        //
        //                    task_id = ui.draggable.attr('id').split('-')[1]
        //                    panel_id = $(this).attr('id')
        //    //                panel_id = $(this).parent().attr('id').split('_')[1]
        ////                    if(event.type == 'drag')
        ////                        alert(ui.draggable.attr('id'))
        //                    if(event.type == 'drop' && type_status != $(this).attr('id'))
        //                    {    alert(type_status)
        //                            alert($(this).attr('id'))
        //                    }
        //                    else
        //                        alert("out of div")
        //        //            $.getScript('/stories/'+task_id+'/update_status/?type='+panel_id+'&task_id='+task_id)
        //
        //
        //                },
        //                create: function(event , ui){
        //
        //                }

        });
    
    $("#icebox").mouseup(function(){
        $(this).css("margen: 0")
    });
    
});
