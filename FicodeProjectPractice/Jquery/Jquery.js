$(function () {
    $(".image").draggable({
        helper: "clone",
        stop: function (event, ui) {
            $('#div1').append($(ui.helper).clone());
            $('#div1 .ui-draggable').draggable({
                containment: '#div1'
            })
        }

    });
});





// $(document).ready(function () {
//     $('.image').draggable({
//         helper: 'clone',
//         stop: function (event, ui) {
//             $('#div1').append($(ui.helper).clone());
//             $('#div1 .ui-draggable').draggable({
//                 containment: '#div1'
//             });
//         }
//     });
// });


// $(document).ready(function () {
//     $('.draggable').draggable({
//         helper: 'clone',
//         stop: function (event, ui) {
//             $('.clone-container').append($(ui.helper).clone());
//             $('.clone-container .ui-draggable').draggable({
//                 containment: '.clone-container'
//             });
//         }
//     });
// });






// $(function () {
//     $(".image").draggable({
//         revert: "invalid",
//         helper: "clone"
//     });
//     $("#div1").droppable({
//         activeClass: "ui-state-default",
//         hoverClass: "ui-state-hover",
//         drop: function (event, ui) {
//             var newClone = $(ui.helper).clone();
//             $(this).after(newClone);
//         }
//     });
// });
