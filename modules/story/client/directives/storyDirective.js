'use strict';

module.exports = function () {
  return {
    restrict : 'E',
    replace : true,
    link: require('../links/storyLink'),
    templateUrl: '/component/story/storyComponent'
  };
};