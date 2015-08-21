'use strict';
var expect = require('chai').expect,
 ideasUtils = require('./../utils/ideas');

describe('Ideas section', function () {

  var ideas = [{
    id: 1,
    priority: 4
  }, {
    id: 2,
    priority: 2
  }, {
    id: 3,
    priority: 1
  }];

  it('should sort ideas by priority', function () {
    var sorted = ideasUtils.sortByPriority(ideas);
    expect(sorted[0].id).to.be.equal(3);
    expect(sorted[1].id).to.be.equal(2);
    expect(sorted[2].id).to.be.equal(1);
  });

});
