var clickCount = 0;

$catImageContainer = $('.cat-click-container');

$catImageContainer.find('img').on('click', function() {
    $catImageContainer.find('.click-count').html(++clickCount);
});