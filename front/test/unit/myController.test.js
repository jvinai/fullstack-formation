

describe("A Spec", function() {
  var $scope, myController;
  beforeEach(module('myIdeaBox'));
  beforeEach(
    inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      myController = $controller('myCtrl', { '$scope': $scope });
    })
  );
  it("should have created the controller", function() {
    expect(myController).toBeDefined();
  });
});


