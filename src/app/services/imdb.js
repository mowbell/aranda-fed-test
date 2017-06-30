IMDB.$inject=['$http','$sce'];
function IMDB($http, $sce){
	var API_KEY='b2907782d07859a652052d3bae537475';
	var URL='https://api.themoviedb.org/3/';
  return {
  	popularTVSeassons: function(page){
		var url = URL+"discover/tv?sort_by=popularity.desc&page="+(page||1);
		var trustedUrl = $sce.trustAsResourceUrl(url);
		return getJSONP(url);
  	},
  	tvSeasson:function(id){
  		var url = URL+"tv/"+id+'?';
		var trustedUrl = $sce.trustAsResourceUrl(url);
		return getJSONP(url);
  	},
  	searchTvSeassons:function(query, page){
  		var url = URL+"search/tv?query="+(query||'%20')+"&page="+(page||1);
		return getJSONP(url);
  	},
  }

  function getJSONP(url){
  	url+='&language=en-US&api_key='+API_KEY;
  	var trustedUrl = $sce.trustAsResourceUrl(url);
	return $http.jsonp(trustedUrl, {jsonpCallbackParam: 'callback'});
  }
}
module.exports = IMDB;