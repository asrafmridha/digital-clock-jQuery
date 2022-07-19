jQuery(document).ready(function(){


   setInterval(asraf, 1000);

    function asraf(){

       var _sec= parseInt(jQuery("#second").text());
       _sec +=1;

       if(_sec>59){

         _sec=0;
         var _min= parseInt(jQuery("#minute").text());
         _min+=1;
         if(_min>59){

            _min=0;
            var _hour= parseInt(jQuery("#hour").text());
            _hour+=1;
            if(_hour>12){

               _hour=0;
            }

         }


       }
       




       jQuery("#second").text(_sec);
       jQuery("#minute").text(_min);
       jQuery("#hour").text(_hour);
    }
 
 

});