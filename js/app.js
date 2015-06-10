$('.js-expand-all').click(expandAll)
$('.js-collapse-all').click(collapseAll)

function expandAll (ev) {
    $('.parent_li').each(function() {
        $(this).find('> ul > li').show('fast')
    })
}

function collapseAll (ev) {
    $('.parent_li').each(function() {
        $(this).find('> ul > li').hide('fast')
    })
}
