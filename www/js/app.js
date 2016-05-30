var comeDineApp = angular.module('comeDineApp', ['ionic',
                                                  'ng-token-auth',
                                                  'ngCookies'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.run(['$rootScope', '$state', function($rootScope, $state) {
  $rootScope.$on('auth:login-success', function() {
    console.log('GREAT SUCCESS');
    $state.go('tab.meals');
  });
}])

.config(function($stateProvider, $urlRouterProvider, $authProvider) {

  $stateProvider
  //login screen
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'userSessionsController'
  })
    .state('user_sign_up', {
    url: '/user/sign_up',
    templateUrl: "/templates/views/users/new.html",
    controller: 'userController'
  })

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    resolve: {
      auth: function($auth) {
        return $auth.validateUser();
      }
    }
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.meals', {
    url: '/meals',
    views: {
      'tab-meals': {
        templateUrl: 'templates/tab-meals.html',
        controller: 'mealsController',
      }
    }
  })

  .state('tab.meal', {
    url: '/tables/:table_id/meals/:id',
    views: {
      'tab-meals': {
        templateUrl: 'templates/views/meals/show.html',
        controller: 'mealController'
      }
    }
  })

  .state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.new-table', {
    url: '/account/new-table',
    views: {
      'tab-account': {
        templateUrl: 'templates/views/tables/new.html',
        controller: 'newTableController'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

  $authProvider.configure({
  apiUrl: 'http://localhost:3000'
});

});
