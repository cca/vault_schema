$('.js-expand-all').click(expandAll);
$('.js-collapse-all').click(collapseAll);

function expandAll (ev) {
    console.log('expanded');
    $('.parent_li').each(function (parent) {
        $(this).find('> ul > li').show('fast');
    })
}

function collapseAll (ev) {
    console.log('collapsed');
    $('.parent_li').each(function (parent) {
        $(this).find('> ul > li').hide('fast');
    })
}
