var myapp = angular.module('scroll-animate-directive', []);
myapp.directive("myNavscroll", function($window) {
    return function($scope, element, attrs) {
        angular.element($window).bind("scroll", function() {

                $scope.current = window.pageYOffset;
                $scope.totalHeight = window.innerHeight;

                if ($scope.current > $scope.lastScrollTop) {
                    $scope.direction = "down";
                } else {
                    $scope.direction = "up";
                }

                $scope.lastScrollTop = $scope.current;


                $scope.headerHeight = document.getElementById("header").offsetHeight;
                $scope.aboutHeight = document.getElementById("about").offsetHeight;
                $scope.portfolioHeight = document.getElementById("portfolio").offsetHeight;
                $scope.contactHeight = document.getElementById("contact").offsetHeight;




                $scope.onScreen = function(section) {
                    // console.log("id " + $scope.id);
                    var thisSection = document.getElementById($scope.id).offsetHeight;
                    var test = thisSection - $scope.current;
                    var percentage = test / $scope.totalHeight * 100;
                    // console.log(section + ': ' + percentage);
                }




                function showRect() {
                    var r = element.getBoundingClientRect()
                    alert("Top/Left: " + r.top + " / " + r.left)
                    alert("Right/Bottom: " + r.right + " / " + r.bottom)
                }


                $scope.portfolioStart = $scope.headerHeight + $scope.aboutHeight;
                $scope.contactStart = $scope.portfolioStart + $scope.portfolioHeight;
                if ($scope.current > $scope.contactStart) {
                    $scope.section = 4;
                } else if ($scope.current > $scope.portfolioStart) {
                    $scope.section = 3;
                    var a = document.getElementById("header").getBoundingClientRect();
                    var b = a.bottom / $scope.totalHeight;
                    var c = b * 100;
                    console.log(c);
                    if (c < -105) {
                        $scope.section = 4;
                    } else {
                        $scope.section = 3;
                    }
                } else if ($scope.current > $scope.headerHeight) {
                    $scope.section = 2;
                    var a = document.getElementById("header").getBoundingClientRect();
                    var b = a.bottom / $scope.totalHeight;
                    var c = b * 100;
                    if (c < -47) {
                        $scope.section = 3;
                    } else {
                        $scope.section = 2;
                    }
                } else if ($scope.current < $scope.headerHeight) {

                    //PERCENTAGE OF BOTTOM OF DIV HEIGHT ON SCREEN
                    var a = document.getElementById("header").getBoundingClientRect();
                    var b = a.bottom / $scope.totalHeight;
                    var c = b * 100;
                    if ( c < 30){
                    $scope.section = 2;
                } else {
                    $scope.section = 1;
                }
                    console.log ("cccccc " + c);
                }

            $scope.$apply($scope.whichSection($scope.section, $scope.current));









            // var properties =  {
            //     scrollCurrent: this.pageYOffset,
            //     scrollLast: this.pageYOffset -1
            // };
            //
            // if (!$scope.scrollPosition) {
            //     $scope.scrollPosition = 0
            // }
            //
            // $scope.scrollPosition = this.pageYOffset;
            //
            //
            //
            // var headerHeight = document.getElementById("header").offsetHeight;

            // console.log($scope.scrollPosition);
            // console.log('header: ' + headerHeight);



            // if (scope.scrollPosition >= headerHeight ) {
            //     var test = ('hi')
            // }


            // $scope.$apply($scope.test(properties));

        });
};
});


// angular.module('scroll-animate-directive', [])
//     .controller('aniDistances', ['$scope',
//         function($scope) {
//             $scope.getScrollOffsets = function(w) {
//
//                 // Use the specified window or the current window if no argument
//                 w = w || window;
//
//                 // This works for all browsers except IE versions 8 and before
//                 if (w.pageXOffset !== null) {
//                     return {
//                         x: w.pageXOffset,
//                         y: w.pageYOffset
//                     };
//                 }
//
//                 // For IE (or any browser) in Standards mode
//                 var d = w.document;
//                 if (document.compatMode === 'CSS1Compat') {
//                     return {
//                         x: d.documentElement.scrollLeft,
//                         y: d.documentElement.scrollTop
//                     };
//                 }
//
//                 // For browsers in Quirks mode
//                 return {
//                     x: d.body.scrollLeft,
//                     y: d.body.scrollTop
//                 };
//             };
//             $scope.getPosition = function(e) {
//                 return {
//                     x: e[0].offsetLeft,
//                     y: e[0].offsetTop
//                 };
//             }
//             $scope.getViewPortSize = function(w) {
//
//                 return {
//                     x: Math.max(document.documentElement.clientWidth, w.innerWidth || 0),
//                     y: Math.max(document.documentElement.clientHeight, w.innerHeight || 0)
//                 }
//
//
//             }
//         }
//     ])
//     .directive('aniScroll', function($window) {
//         return {
//             restrict: 'A',
//             controller: 'aniDistances',
//             transclude: true,
//             replace: true,
//             template: '<div ng-transclude ng-show=\'show\'></div>',
//             scope: {
//                 show: '@',
//             },
//             link: function(scope, element, attrs) {
//
//                 angular.element($window).bind('scroll', function() {
//                     var targetOffset = attrs.aniScroll;
//                     var offset = scope.getScrollOffsets($window);
//                     if (offset.y >= targetOffset) {
//                         scope.show = true;
//                     } else {
//                         scope.show = false;
//                     }
//                     scope.$apply();
//                 });
//             }
//         };
//     })
//     .directive('aniView', function($window) {
//         return {
//             restrict: 'A',
//             controller: 'aniDistances',
//             transclude: true,
//             replace: true,
//             template: '<div ng-transclude ng-show=\'show\'></div>',
//             scope: {
//                 show: '@',
//             },
//             link: function(scope, element, attrs) {
//                 scope.show = false;
//
//                 updateElementVisiblityOnScroll();
//                 updateElementOnPageLoad();
//
//
//                 function updateElementVisiblityOnScroll(){
//                   angular.element($window).bind('scroll', updateElementVisiblity);
//                 }
//
//                 //enables elements to be shown if they're already on viewport when page's loaded
//                 function updateElementOnPageLoad(){
//                   setTimeout(updateElementVisiblity, 0);
//                 }
//
//                 function updateElementVisiblity(){
//                   scope.show = elementIsOnViewport(scope, element, $window)
//                   scope.$apply();
//                 }
//
//                 function elementIsOnViewport(scope, element, $window){
//                   var position = scope.getPosition(element);
//                   var offset = scope.getScrollOffsets($window);
//                   var viewport = scope.getViewPortSize($window);
//                   var coverage = {
//                       x: parseInt(viewport.x + offset.x),
//                       y: parseInt(viewport.y + offset.y)
//                   }
//                   if (coverage.y >= position.y && coverage.x >= position.x) {
//                     return true;
//                   }
//                   return false;
//                 }
//             }
//         };
//     });
