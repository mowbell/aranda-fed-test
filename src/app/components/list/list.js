module.exports = {
  template: require('./list.html'),
  controller: ListController
};

ListController.$inject=['service.imdb', '$stateParams']
function ListController(IMDBService, $stateParams) {
	var vm=this;
	vm.seassons=[];
	var page=1;
	if(!$stateParams.query){
		IMDBService.popularTVSeassons(page).then(function(result){
			vm.seassons=result.data.results;
		});
	}
	else{
		var query=$stateParams.query;
		IMDBService.searchTvSeassons(query, page).then(function(result){
			vm.seassons=result.data.results;
		});
	}
}