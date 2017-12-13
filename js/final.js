/*******************************************************
 * lightbox image gallery logic                        *
 *******************************************************/

angular.module('myApp', ['bootstrapLightbox']);

angular.module('myApp', ['bootstrapLightbox']).controller('GalleryCtrl', function ($scope, Lightbox) {

    /*
    $scope.images = [
        {
            'url': 'https://i.imgur.com/gjEZAJ7.jpg',
            'thumbUrl': 'https://i.imgur.com/gjEZAJ7s.jpg'
        },
        {
            'url': 'https://i.imgur.com/PnSeZX3.jpg',
            'thumbUrl': 'https://i.imgur.com/PnSeZX3s.jpg'
        },
        {
            'url': 'https://i.imgur.com/X92aA5Y.jpg',
            'thumbUrl': 'https://i.imgur.com/X92aA5Ys.jpg'
        },
        {
            'url': 'https://i.imgur.com/Gb6xVGP.jpg',
            'thumbUrl': 'https://i.imgur.com/Gb6xVGPs.jpg'
        },
        {
            'url': 'https://i.imgur.com/I3KJdGy.jpg',
            'thumbUrl': 'https://i.imgur.com/I3KJdGys.jpg'
        },
        {
            'url': 'https://i.imgur.com/zlc7uSR.jpg',
            'thumbUrl': 'https://i.imgur.com/zlc7uSRs.jpg'
        },
        {
            'url': 'https://i.imgur.com/PVU0dxc.jpg',
            'thumbUrl': 'https://i.imgur.com/PVU0dxcs.jpg'
        },
        {
            'url': 'https://i.imgur.com/p53E302.jpg',
            'thumbUrl': 'https://i.imgur.com/p53E302s.jpg'
        },
        {
            'url': 'https://i.imgur.com/OdjFda3.jpg',
            'thumbUrl': 'https://i.imgur.com/OdjFda3s.jpg'
        },
        {
            'url': 'https://i.imgur.com/c3hJOBE.jpg',
            'thumbUrl': 'https://i.imgur.com/c3hJOBEs.jpg'
        },
        {
            'url': 'https://i.imgur.com/QO2wXxa.jpg',
            'thumbUrl': 'https://i.imgur.com/QO2wXxas.jpg'
        },
        {
            'url': 'https://i.imgur.com/QLJfdkH.jpg',
            'thumbUrl': 'https://i.imgur.com/QLJfdkHs.jpg'
        },
        {
            'url': 'https://i.imgur.com/TG87poQ.jpg',
            'thumbUrl': 'https://i.imgur.com/TG87poQs.jpg'
        },
        {
            'url': 'https://i.imgur.com/0ic5msX.jpg',
            'thumbUrl': 'https://i.imgur.com/0ic5msXs.jpg'
        },
        {
            'url': 'https://i.imgur.com/EGgyVOq.jpg',
            'thumbUrl': 'https://i.imgur.com/EGgyVOqs.jpg'
        }
    ];
    */

    $scope.images = [
        'https://i.imgur.com/gjEZAJ7.jpg',
        'https://i.imgur.com/PnSeZX3.jpg',
        'https://i.imgur.com/X92aA5Y.jpg',
        'https://i.imgur.com/Gb6xVGP.jpg',
        'https://i.imgur.com/I3KJdGy.jpg',
        'https://i.imgur.com/zlc7uSR.jpg',
        'https://i.imgur.com/PVU0dxc.jpg',
        'https://i.imgur.com/p53E302.jpg',
        'https://i.imgur.com/OdjFda3.jpg',
        'https://i.imgur.com/c3hJOBE.jpg',
        'https://i.imgur.com/QO2wXxa.jpg',
        'https://i.imgur.com/QLJfdkH.jpg',
        'https://i.imgur.com/TG87poQ.jpg',
        'https://i.imgur.com/0ic5msX.jpg',
        'https://i.imgur.com/EGgyVOq.jpg',
    ];

    $scope.openLightboxModal = function (index) {
        Lightbox.openModal($scope.images, index);
    };
});


/*******************************************************
 * image editing logic                                 *
 *******************************************************/

$(document).ready(function () {
//on click of go(submit) button, addImage() will be called
    $("#go").click(addImage);

//on pressing return, addImage() will be called
    $("#urlBox").submit(addImage);


// editing image via css properties
    function editImage() {
        var gs = $("#gs").val(); // grayscale
        var blur = $("#blur").val(); // blur
        var br = $("#br").val(); // brightness
        var ct = $("#ct").val(); // contrast
        var huer = $("#huer").val(); //hue-rotate
        var opacity = $("#opacity").val(); //opacity
        var invert = $("#invert").val(); //invert
        var saturate = $("#saturate").val(); //saturate
        var sepia = $("#sepia").val(); //sepia

        $("#imageContainer img").css(
            "filter", 'grayscale(' + gs +
            '%) blur(' + blur +
            'px) brightness(' + br +
            '%) contrast(' + ct +
            '%) hue-rotate(' + huer +
            'deg) opacity(' + opacity +
            '%) invert(' + invert +
            '%) saturate(' + saturate +
            '%) sepia(' + sepia + '%)'
        );

        $("#imageContainer img").css(
            "-webkit-filter", 'grayscale(' + gs +
            '%) blur(' + blur +
            'px) brightness(' + br +
            '%) contrast(' + ct +
            '%) hue-rotate(' + huer +
            'deg) opacity(' + opacity +
            '%) invert(' + invert +
            '%) saturate(' + saturate +
            '%) sepia(' + sepia + '%)'
        );
    }

//When sliders change image will be updated via editImage() function
    $("input[type=range]").change(editImage).mousemove(editImage);

// Reset sliders back to their original values on press of 'reset'
    $('#imageEditor').on('reset', function () {
        setTimeout(function () {
            editImage();
        }, 0);
    });

// adding an image via url box
    function addImage(e) {

        var imgUrl = $("#imgUrl").val();
        if (imgUrl.length) {
            $("#imageContainer img").attr("src", imgUrl);
        }
        e.preventDefault();


        var resetform = document.getElementById("urlBox");
        resetform.reset();

    }
});

/*******************************************************
 * image editing logic                                 *
 *******************************************************/

$(function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    /* Enable Cross Origin Image Editing */
    var img = new Image();
    img.crossOrigin = '';
    img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/koala.jpg';


    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
    };

    var $reset = $('#resetbtn');
    var $brightness = $('#brightnessbtn');
    var $noise = $('#noisebtn');
    var $sepia = $('#sepiabtn');
    var $contrast = $('#contrastbtn');
    var $color = $('#colorbtn');

    var $vintage = $('#vintagebtn');
    var $lomo = $('#lomobtn');
    var $emboss = $('#embossbtn');
    var $tiltshift = $('#tiltshiftbtn');
    var $radialblur = $('#radialblurbtn');
    var $edgeenhance = $('#edgeenhancebtn');

    var $posterize = $('#posterizebtn');
    var $clarity = $('#claritybtn');
    var $orangepeel = $('#orangepeelbtn');
    var $sincity = $('#sincitybtn');
    var $sunrise = $('#sunrisebtn');
    var $crossprocess = $('#crossprocessbtn');

    var $hazydays = $('#hazydaysbtn');
    var $love = $('#lovebtn');
    var $grungy = $('#grungybtn');
    var $jarques = $('#jarquesbtn');
    var $pinhole = $('#pinholebtn');
    var $oldboot = $('#oldbootbtn');
    var $glowingsun = $('#glowingsunbtn');

    var $hdr = $('#hdrbtn');
    var $oldpaper = $('#oldpaperbtn');
    var $pleasant = $('#pleasantbtn');

    var $save = $('#savebtn');

    /* As soon as slider value changes call applyFilters */
    $('input[type=range]').change(applyFilters);

    function applyFilters() {
        var hue = parseInt($('#hue').val());
        var cntrst = parseInt($('#contrast').val());
        var vibr = parseInt($('#vibrance').val());
        var sep = parseInt($('#sepia1').val());

        Caman('#canvas', img, function() {
            this.revert(false);
            this.hue(hue).contrast(cntrst).vibrance(vibr).sepia(sep).render();
        });
    }

    /* Creating custom filters */
    Caman.Filter.register("oldpaper", function() {
        this.pinhole();
        this.noise(10);
        this.orangePeel();
        this.render();
    });

    Caman.Filter.register("pleasant", function() {
        this.colorize(60, 105, 218, 10);
        this.contrast(10);
        this.sunrise();
        this.hazyDays();
        this.render();
    });

    $reset.on('click', function(e) {
        $('input[type=range]').val(0);
        Caman('#canvas', img, function() {
            this.revert(false);
            this.render();
        });
    });

    /* In built filters */
    $brightness.on('click', function(e) {
        Caman('#canvas', function() {
            this.brightness(30).render();
        });
    });

    $noise.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.noise(10).render();
        });
    });

    $contrast.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.contrast(10).render();
        });
    });

    $sepia.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.sepia(20).render();
        });
    });

    $color.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.colorize(60, 105, 218, 10).render();
        });
    });

    $vintage.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.vintage().render();
        });
    });

    $lomo.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.lomo().render();
        });
    });

    $emboss.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.emboss().render();
        });
    });

    $tiltshift.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.tiltShift({
                angle: 90,
                focusWidth: 600
            }).render();
        });
    });

    $radialblur.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.radialBlur().render();
        });
    });

    $edgeenhance.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.edgeEnhance().render();
        });
    });

    $posterize.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.posterize(8, 8).render();
        });
    });

    $clarity.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.clarity().render();
        });
    });

    $orangepeel.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.orangePeel().render();
        });
    });

    $sincity.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.sinCity().render();
        });
    });

    $sunrise.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.sunrise().render();
        });
    });

    $crossprocess.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.crossProcess().render();
        });
    });

    $love.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.love().render();
        });
    });

    $grungy.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.grungy().render();
        });
    });

    $jarques.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.jarques().render();
        });
    });

    $pinhole.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.pinhole().render();
        });
    });

    $oldboot.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.oldBoot().render();
        });
    });

    $glowingsun.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.glowingSun().render();
        });
    });

    $hazydays.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.hazyDays().render();
        });
    });

    /* Calling multiple filters inside same function */
    $hdr.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.contrast(10);
            this.contrast(10);
            this.jarques();
            this.render();
        });
    });

    /* Custom filters that we created */
    $oldpaper.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.oldpaper();
            this.render();
        });
    });

    $pleasant.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.pleasant();
            this.render();
        });
    });

    /* You can also save it as a jpg image, extension need to be added later after saving image. */

    $save.on('click', function(e) {
        Caman('#canvas', img, function() {
            this.render(function() {
                this.save('png');
            });
        });
    });
});
