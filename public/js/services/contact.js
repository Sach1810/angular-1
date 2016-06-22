app.factory('contact', ['$http', function($http) {

  var contact = {
      sendInfo: function(message) {
        return  $http.post('/contact-form', message).success (function(message){
              console.log("success" + message);
          })
      },

      scrollPos: function (scroll) {
          console.log(scroll);
      }
  }


  return contact;
}]);
