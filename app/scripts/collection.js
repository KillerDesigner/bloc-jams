var buildAlbumThumbnail = function() {
  var template =
      '<div class="collection-album-container col-md-2">'
    + '  <img src="/images/album-placeholder.png"/>'
    + '  <div class="caption album-collection-info">'
    + '    <p>'
    + '      <a class="album-name" href="/album.html"> Album Name </a>'
    + '      <br/>'
    + '      <a href="/album.html"> Artist name </a>'
    + '      <br/>'
    + '      X songs'
    + '      <br/>'
    + '      X:XX Total Length'
    + '    </p>'
    + '  </div>'
    + '</div>';

 return $(template);
};

var randomNumber = Math.floor(Math.random()*37);
var updateCollectionView = function() {
 var $collection = $(".collection-container .row");
 $collection.empty();

 for (var i = 0; i < randomNumber; i++) {
   var $newThumbnail = buildAlbumThumbnail();
   $collection.append($newThumbnail);
 }
 console.log(randomNumber);
};

if (document.URL.match(/\/collection.html/)) {
  // Wait until the HTML is fully processed.
  $(document).ready(function() {
    updateCollectionView();
  });
}