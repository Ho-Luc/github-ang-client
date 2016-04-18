require('angular');

angular.module('GithubApp', [])
  .controller('ProfileController', ['$http', function($http) {
    this.username = 'ho-luc';
    this.url = 'http://api.github.com/users/';
    this.stars = 0;

    this.getUser = function() {
      $http.get(this.url + this.username)
        .success((data) => {
          this.userData = data;
      })
    }
    this.getRepos = function() {
      $http.get(this.url + this.username + '/repos')
        .success((data) => {
          this.userRepos = data;
          data.forEach((repo) => {
            this.stars += repo.stargazers_count;
          })
        })
    }
  }]);
