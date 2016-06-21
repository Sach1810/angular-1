app.factory('contact', ['$http', function($http) {

  var contact = {
      sendInfo: function(info) {
        return  $http.post('/contact-form', info).success (function(info){
              console.log("success" + info);
          })
      },

      scrollPos: function (scroll) {
          console.log(scroll);
      }
  }


  return contact;
}]);
