/**
 * name serves as the id of image in planner list
 */
function newPlanner(name, avatar_path) {
    var $planner;
    $planner = $($('.planner_template').clone().html());

    $('.planner_list').find('ul').append($planner);

    $image = $planner.find('img');

    $image.attr('src', avatar_path);
    $image.parent().attr('id', name);

    $image.fadeIn(2000);
}

function removePlanner(name) {
    $('#' + name).fadeOut(2000, function() {
        $(this).remove();
    });
}