(function($){
    $.fn.shuffleText = function(){
        return this.each(function(){
            $(this).text(shuffleText( $(this).text()));

            function  shuffleText(str){
                var array =str.split("");
                for (var index = array.lenght - 1; index > 0; index--){
                    var val = Math.floor(Math.random() * (index + 1));
                    var temp = array[index];
                    array[index] = array[val];
                    array[val] = temp;
                }
                return array.join("");
            }
        // settings.color = "orange";

        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor,
            textDecoration: settings.textDecoration,
            padding: settings.padding,
            backgroundImage: settings.backgroundImage
        });
 
    };



}(jQuery));

