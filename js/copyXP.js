$('.tree li span').append('<a class="xp" title="get XPath for this node"><sup>xp</sup></a>');
$('.xp').css({
    'margin-left': '1em',
    'cursor': 'pointer'
});
$('.xp').on('click', copyXP);

function getXP (el) {
    var nodes = []
        , parents = el.parents('li');

    nodes.push(el.parent('span').text().replace(/xp$/, ''));

    parents.each(function (index, parent) {
        var node = $(parent).find('> span');

        if (node.length == 1) {
            nodes.push(node.text().replace(/xp$/, ''));
        }
    });
    // I can't figure out why the leaf node gets doubled sometimes
    // this just drops it if there's a duplicate
    if (nodes[0] === nodes[1]) {
        nodes.pop();
    }

    return nodes.reverse().join('/').replace(/\/$/, '');
}

function copyXP (event) {
    var xp = getXP($(event.target));
    // prevent tree from closing when xp is clicked
    event.stopPropagation();

    prompt('⌘+C to copy to clipboard', xp);
}
