$(function () {
    $('.envelope').click(function () {
        const $envelope = $(this);
        const $letter = $('.letter');
        const $hiddenText = $('.hidden-text');

        if ($envelope.hasClass('open')) {
            $envelope.removeClass('open').addClass('new');
            $hiddenText.css('opacity', '0');
            $letter.css('height', '0');
        } else {
            $envelope.removeClass('new').addClass('open');
            $hiddenText.css('opacity', '1');
            const height = $letter.prop('scrollHeight');
            $letter.css('height', height);
        }
    });
});
