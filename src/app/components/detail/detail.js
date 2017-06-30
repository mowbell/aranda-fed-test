module.exports = {
  template: require('./detail.html'),
  controller: DetailController
};

DetailController.$inject=['service.imdb', '$stateParams']
function DetailController(IMDBService, $stateParams) {
	var vm=this;
	vm.seasson=null;
	console.log($stateParams.id)
	IMDBService.tvSeasson($stateParams.id).then(function(result){
		vm.seasson=result.data;
	});
}