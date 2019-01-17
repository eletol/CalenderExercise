/* global console: false, $: false, Modernizr: false */

$(document).ready(function () {
    //var niceScrollSettings = {
    //    autohidemode: false,
    //    railalign: 'right',
    //    cursorwidth: '5px',
    //    cursorborder: 0,
    //    cursorborderradius: 0,
    //    cursorcolor: '#73cdd8',
    //    background: '#F9F9F9'
    //};


    //$(document).on('click', '#wrapper', function () {
    //    $("article").hide();
    //});

    //$("aside").hide();


    // SMS Remainder
    $(document).on('change', '.sms-language input', function () {
        var smsLangCont = $(this).closest('.sms-language');

        smsLangCont.siblings('textarea').removeClass('ar en').addClass($(this).val());
        smsLangCont.find('.active').removeClass('active');
        $(this).closest('div').addClass('active');
    });

    // side-menu toggle
    $(document).on('click', '#wrapper aside #asideToggle, #wrapper aside ul li.with-sub-menu', function () {
        var sideMenu = $('#wrapper aside'),
            //sideMenuScroll = sideMenu.getNiceScroll(),
            article = $('#wrapper article'),
            windowWidth = window.innerWidth,
            isLiWithSubMenu = $(this).hasClass('with-sub-menu'),
            isOpened = sideMenu.hasClass('opened');

        if (sideMenu.is(':animated')) return;

        if (isLiWithSubMenu) {
            if (!isOpened) {
                openSideMenu();
            }
        } else {
            if (isOpened) {
                closeSideMenu();
            } else {
                //openSideMenu();
            }
        }

        function openSideMenu() {
            //sideMenuScroll.hide();
            sideMenu.addClass('animate').animate({width: '230px'}, function () {
                sideMenu.addClass('opened').removeClass('animate');
                //sideMenuScroll.resize().show();
            });
            article.animate({width: windowWidth - 230});
        }

        function closeSideMenu() {
            $('.with-sub-menu.opened', sideMenu).trigger('click');
            //sideMenuScroll.hide();
            sideMenu.addClass('animate').animate({width: '56px'}, function () {
                sideMenu.removeClass('animate opened');
                //sideMenuScroll.resize().show();
            });
            article.animate({width: windowWidth - 56});
        }


    });


    // side-menu sub-menu
    $(document).on('click', '#wrapper aside ul li.with-sub-menu', function () {
        $(this).toggleClass('opened');
    });

    // Detect Safari/IE8 browser and fix height issue
    var isSafariORIE8 = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1 || $('html').hasClass('lt-ie9');
    if (isSafariORIE8) {
        $('#wrapper aside').outerHeight(window.innerHeight - 68);
        $('#wrapper article').outerHeight(window.innerHeight - 68);
        $('#wrapper article').outerWidth(window.innerWidth - 56);
        console.log(window.innerWidth + 'ddddddd' + (window.innerWidth - 56));
        $('.section-with-sideMenu').css({'min-height': window.innerHeight - 68 - 125});
        $('.section-with-sideMenu').outerWidth(window.innerWidth - 56 - 50);
    }

    //(function checkAsideExisting() {
    //    if ($('#wrapper aside').length === 1) {
    //        $('#wrapper article, #wrapper aside').niceScroll(niceScrollSettings);
    //    } else {
    //        setTimeout(function () {
    //            checkAsideExisting();
    //        }, 100);
    //    }
    //})();

    $('select.with-placeholder').change(function () {
        if ($(this).val() === '0') $(this).addClass('fadeout');
        else $(this).removeClass('fadeout');
    });

    $('select.with-placeholder').change();

    // Enable sorting-feature for all [sortable-table]
    //$('.sortable-table').tablesorter({});

    // Select-all table-btn
    $("#selectAll").click(function () {
        $('.case').prop('checked', this.checked);
        setTimeout(function () {
            $("#selectAll").prop('checked', !$("#selectAll").prop('checked'));
        }, 10);
    });
    $(".case").click(function () {
        if ($(".case").length === $(".case:checked").length) {
            $("#selectAll").prop("checked", true);
        } else {
            $("#selectAll").prop("checked", false);
        }
    });

    // Article-tabs
    //$('.article-tabs a').click(function (e) {
    //    e.preventDefault();
    //    $(this).tab('show');
    //    $('#wrapper article').getNiceScroll().resize();
    //    if ($('.absolute-elements-cont').is(':visible') && absoluteElements.parent().find('>:visible').length < absoluteElements.length) { // Continue absElements function
    //        showNextAbsElement();
    //    }
    //});

    // Table-head filter
    $(document).on('click', '.article-table thead th', function () {
        $('.article-table thead th').removeClass('opened');
        $(this).addClass('opened');
        $('#wrapper .transparent-helper').show();
    });
    $(document).on('click', '#wrapper .transparent-helper', function () {
        $('.article-table thead th').removeClass('opened');
        $('#wrapper .transparent-helper').hide();
    });

    // Table pop-up
    $('.article-table tbody td.pop-up-btn .fa, .form-body .pop-up-btn, .pop-up-btn.open').colorbox({
        fixed: true,
        // maxWidth: '900px',
        maxHeight: '90%'
    });

    // Table pop-up close
    $(document).on('click', '#flex-pop-up .view-head #close, #flex-pop-up .view-btns input[type="reset"]', function () {
        parent.$.colorbox.close();
    });

    // Open table row-details
    $(document).on('click', '.article-table tbody tr *', function () {
        var closestTr = $(this).closest('tr'), isOpened = closestTr.hasClass('opened-row');

        // Hide all opened rows
        if ($('.article-table tbody tr.opened-row').next().hasClass('row-details')) $('.article-table tbody tr.opened-row').next().hide();
        $('.article-table tbody tr.opened-row').removeClass('opened-row');

        // Reopen opened-row again :(
        if (isOpened) {
            closestTr.addClass('opened-row');
            closestTr.next().show();
        }

        if ($(this).find('> input[type="checkbox"]').length === 0 && $(this).find('i').length === 0 && $(this)[0].nodeName !== 'INPUT' && $(this)[0].nodeName !== 'I') {
            if (closestTr.hasClass('opened-row')) {
                closestTr.removeClass('opened-row');
                closestTr.next().hide();
            } else {
                // Check if the next table row hasClass [row-details]
                if (closestTr.next().hasClass('row-details')) {
                    closestTr.addClass('opened-row');
                    closestTr.next().show();
                }
            }
        }
    });

    // User profile-img
    function readURL(input) {
        var imgSrc, reader, inputParent;
        if (input.files && input.files[0]) {
            inputParent = $(input).parent();
            $.each(input.files, function (i, img) {
                reader = new FileReader();
                reader.onload = function (e) {
                    imgSrc = e.target.result;
                    inputParent.siblings('.image-cont').eq(i).html('').append('<img src="' + imgSrc + '"><i class="fa fa-close"></i>').addClass('with-image');
                };
                reader.readAsDataURL(input.files[i]);
            });
        }
    }

    $(".browse-cont input").change(function () {
        readURL(this);
    });

    // remove offer images
    $(document).on('click', '.form-body .image-cont .fa-close', function () {

    });

    // table-head datePicker
    if ($(".datepicker").length > 0) {
        $(".datepicker").datepicker();
    }
    // table related rows
    $('.article-table tbody tr').each(function () {
        var that = this,
            $that = $(this);

        // check if next row has [class] === [related-rows] attr
        if ($that.attr('related-row') !== undefined && $that.next().hasClass($that.attr('related-row'))) {
            $that.addClass('related-row first');
            $that.next().addClass('related-row second');
        }
    });

    // adjust offer-details content height
    var subContentMaxHeight = 0;
    setTimeout(function () {
        $('.offer-details .sub-content').each(function () {
            if ($(this)[0].clientHeight > subContentMaxHeight) {
                subContentMaxHeight = $(this)[0].clientHeight;
            }
        });

        $('.offer-details .sub-content').height(subContentMaxHeight);
    }, 500);


    // Display absolute-elements [position + fade]
    //var elementsPerRow = 3,
    //    absElementsSpace = 16,
    //    absElementWidth = $('.absolute-elements-cont .absolute-element:first-child').outerWidth(),
    //    absoluteElements = $('.absolute-elements-cont .absolute-element'),
    //    absoluteElementsCont = $('.absolute-elements-cont');
    //$('.absolute-elements-cont .absolute-element:first-child').css({
    //    width: absElementWidth,
    //    position: 'absolute',
    //    top: '16px',
    //    left: 0
    //});
    //absoluteElementsCont.css({
    //    height: $('.absolute-elements-cont .absolute-element:first-child').outerHeight()
    //});
    //function showNextAbsElement() {
    //    if ($('.absolute-elements-cont').is(':visible')) {
    //        // Get the last showed-element
    //        var lastShowedElement = absoluteElements.parent().find('>:visible').last(),
    //            relativeElementIndex = absoluteElements.index(lastShowedElement) - elementsPerRow + 1, // 0-based
    //            relativeElement = absoluteElements.eq(relativeElementIndex),
    //            nextAbsElementLeft,
    //            nextAbsElementTop,
    //            nextAbsElement = lastShowedElement.next();

    //        if (notEqualZero((absoluteElements.index(lastShowedElement) + 1) % elementsPerRow)) {
    //            nextAbsElementLeft = (absoluteElements.index(lastShowedElement) % elementsPerRow + 1) * absElementWidth;
    //        } else {
    //            nextAbsElementLeft = 0;
    //        }

    //        if (relativeElementIndex >= 0) {
    //            nextAbsElementTop = absElementsSpace + relativeElement.position().top + relativeElement.outerHeight();
    //        } else {
    //            nextAbsElementTop = absElementsSpace;
    //        }

    //        nextAbsElement.css({
    //            width: absElementWidth,
    //            position: 'absolute',
    //            top: nextAbsElementTop,
    //            left: nextAbsElementLeft
    //        }).fadeIn();

    //        if (nextAbsElement.outerHeight() + nextAbsElement.position().top > absoluteElementsCont.height()) {
    //            absoluteElementsCont.css({ height: (nextAbsElement.outerHeight() + nextAbsElement.position().top) });
    //            $('#wrapper article').getNiceScroll().resize();
    //        }

    //        if (absoluteElements.parent().find('>:visible').length < absoluteElements.length) {
    //            setTimeout(function () {
    //                showNextAbsElement();
    //            }, 1000);
    //        }
    //    }
    //}
    //if (absoluteElements.length > 1) {
    //    showNextAbsElement();
    //}
    //function notEqualZero(number) {
    //    return number === 0 ? 0 : 1;
    //}

    // Adjust article-table and add nice-scrollbar
    //$('.article-table-cont').width($('#wrapper article').width());
    //$('.article-table-cont').niceScroll({
    //    autohidemode: false,
    //    railalign: 'right',
    //    cursorwidth: '5px',
    //    cursorborder: 0,
    //    cursorborderradius: 0,
    //    cursorcolor: '#73cdd8',
    //    background: '#F9F9F9'
    //});

});


$(".inbox-sortby .dropdown-menu li a").click(function () {
    $(this).parents(".inbox-sortby").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".inbox-sortby").find('.btn').val($(this).data('value'));
});

