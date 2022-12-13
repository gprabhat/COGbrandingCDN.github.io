if(($('.page-id-16').length || $('.page-id-7312').length || $('.page-id-67').length || $('.page-id-18'))) {
    //create christmas popup
    var christmasModal='<div id="myModal" class="modal"><div class="modal-content"><span class="close">×</span><a href="/our-products"><img src="https://imupro.com.au/wp-content/uploads/2022/12/1.png"></a></div></div>'
    
  	//create new year popup
    var newyearModal='<div id="myModal" class="modal"><div class="modal-content"><span class="close">×</span><a href="/our-products"><img src="https://imupro.com.au/wp-content/uploads/2022/12/2.png"></a></div></div>';
    
  	//create styles 
    var styles='<style>div#myModal{overflow: hidden; z-index: 9999999999; height: 100vh; width: 100vw;}span.close{color: #DA1414; font-size: 32px; font-weight: 900; position: relative; top: 10px; padding: 0px 20px; z-index: 9999;}.modal .modal-content img{height: 60vh; width: 100%; object-fit: cover; border-radius: 20px; margin: -30px 0;}#myModal .modal-content{padding: 0px; border: unset; background-color: #ffffff; width: fit-content; height: auto; border-radius: 20px !important;}@media(max-width: 767px){.popup-content{flex-direction: column; gap: unset;}.modal-content{width: 80% !important; position: relative;}.modal .modal-content img{max-width: 100%; border-radius: 20px; height: fit-content; width: 100vw;}.popup-content__div{padding: 0 20px; text-align: center;}}</style>';
    
  	//add in styles to popups
    christmasModal=christmasModal+styles;
    
    newyearModal=newyearModal+styles;
    
  	//checks today's date
    var today=new Date();
    
  	//christmas popup start and end date
    var christmas_start=new Date('12/25/2022');
    var christmas_end=new Date('12/26/2022');
    
  	//new year popup start and end date
    var newyear_start=new Date('01/01/2023');
    var newyear_end=new Date('01/15/2023');

    //if clicked on close button, close popup
    jQuery('span.close').on('click', function () {
            jQuery('#myModal').hide()
        });

    //display popup after 10seconds on the page
    if (today > christmas_start && today < christmas_end) {
        jQuery('body').append(christmasModal);

        setTimeout(()=> {
                jQuery('#myModal').show();
            }, 10000);
    }
    
    //display popup after 20seconds on the page
    if (today > newyear_start && today < newyear_end) {
        jQuery('body').append(newyearModal);

        setTimeout(()=> {
                jQuery('#myModal').show();
            }, 20000);
    }
}
