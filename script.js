$(function() {

  $('#search-form').submit(function(e){
    e.preventDefault();

    $('#list').html('')

    // clear the list on the UI
    getYoutubeSearch($('#search-input').val()).then(function(result) {
      result.items.forEach(function(item) {
        console.log(item.id.videoId)
        $('#list').prepend($(
        '<a href="' + 'https://www.youtube.com/watch?v=' + item.id.videoId + '">'+
        '<img src="' + item.snippet.thumbnails.high.url + '"/>'))
        '</a>'
      })
    });
  })

})

function getYoutubeSearch(q){
  return $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: 'AIzaSyAs_Lal_n3-LakD3xnUmFqKRzhgJiiMifI',
    q: q
  })
}
