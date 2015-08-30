// Polyfill for isInteger
Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" &&
           isFinite(value) &&
           Math.floor(value) === value;
};

var cats = [{
    name: "Killo",
    image: "cat.jpg",
    clicks: 21
}, {
    name: "Megga",
    image: "cat.jpg",
    clicks: 34
}, {
    name: "Terra",
    image: "cat.jpg",
    clicks: 100
}, {
    name: "Zetta",
    image: "cat.jpg",
    clicks: 24
}];

function renderCats (cats) {
    var catResourcesDir = "img/cats/";
    var catsContainerTmpl = "";

    $.each(cats, function(index, cat) {
        var catTemplate = _.template($("#catTemplate").html());
        catsContainerTmpl += catTemplate(_.extend(cat, {
            "catResourcesDir": catResourcesDir
        }));
    });

    $("#cats").html(catsContainerTmpl);
}

renderCats(cats);

$catImageContainer = $('.cat-click-container');

$catImageContainer.on('click', 'img', function() {
    var $cat = $(this).closest(".cat");
    var $counter = $cat.find(".click-count");
    var previousCount = parseInt($.trim($counter.html()));
    if (Number.isInteger(previousCount)) {
        $counter.html(++previousCount);
    } else {
        // TODO: Show notification explaining problem
    }
});