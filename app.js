
//定义全局module
//加载依赖模块
var app=angular.module('myApp',['ngRoute','ngCookies']);

//路由控制
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/:number', { templateUrl: 'tpls/test.html', controller: "testController" }).
        otherwise({ redirectTo: '/:number' });
} ]);


// 定义全局路径
app.service('myservice',function(){
      this.path="http://1.fangtaixiamen.sinaapp.com/index.html#/";
})



// 格式化剩余里程
app.filter('distanceFilter',function(){
    return function(item){
        var distance;
       if(item>=0 && item<200){
          distance=200-item;
       }else if(item>=200 && item<1000){
          distance=1000-item;
       }else if(item>=1000 && item<1500){
          distance=1500-item;
       }else{
           distance=2000-item;
       }
       return distance;
    }
});







// 助跑好友列表
app.controller('testController',function($scope,$http,$routeParams,$cookies,$location,myservice){
     
     var transFn = function(data) {
                return $.param(data);
            };
     var postCfg = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                transformRequest: transFn
            }; 
     var data={'msg':'hello word!'};
	// Simple POST request example (passing data) :
	$http.post('./test.php',data,postCfg ).
	  success(function(data, status, headers, config) {
	    // this callback will be called asynchronously
	    // when the response is available
	    console.log(data);
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });

})




