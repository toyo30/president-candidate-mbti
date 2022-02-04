

(() => {
    function loadAgain() {
        location.reload();
    };



    $(document).on('click', '.btn-reload', function() {
        loadAgain();
    });

    $(document).on('click', '.go-to-debate', function() {
        $('.start').fadeOut();
        $('.question').fadeIn();
    });
})();