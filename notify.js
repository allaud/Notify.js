/*
Notify lib by allaud, (c) 2011

use: Notify.inform('This is message');
*using JQuery
*/
Notify = {
    counter: 0,
    hiders: [],
    init: function(){
        $('#notify').scrollTop(0);
    },
    inform: function(message){
        Notify.counter++;
        $('#notify').append('<div id="message'+Notify.counter+'" class="message popup-message">'+message+'</div>')
        
        var hide = function(){
            var message_id = Notify.counter;
            return function(){ $('#message'+message_id).fadeOut(); }
        }()
        
        setTimeout(function(){hide()},4000);
        
        var scroll = function(){
            var scroll_height = $('#notify')[0].scrollHeight - $('#notify').height();
            return function(){
                if ($('#notify').scrollTop()<scroll_height){
                    $('#notify').scrollTop($('#notify').scrollTop()+1);
                    setTimeout(function(){scroll()},1);
                }
            }
        }()
        setTimeout(function(){scroll();},1);
    },
    slide: function(){
        $('#notify').scrollTop
    }
}
