$(document).ready(function(){

  
  var feed = new Instafeed({
    get: 'tagged',
    tagName: 'sushiroll',
    sortBy: 'most-liked',
    limit: 12,
    resolution: 'low_resolution',
    clientId: 'b13d92eda3a244e69daa44304a832de4',
    template: '<div class="item"><img src="{{image}}" /><div class="like"><i class="fa fa-heart"></i> {{likes}}</div></div>',
    after: function() { 

      var $container = $('#instafeed');

      $container.packery({
        itemSelector: '.item',
        gutter: 0
      });

       $container.on( 'click', '.item', function( event ) {
         var $target = $( event.target ).parent();
          $target.toggleClass('big');
          $container.packery();
       });
    }
    
  });
  feed.run();
  
});