/**
 * Name: Devon Hills, devon_hills@student.uml.edu
 * Affiliation: Computer Science Student, UMass Lowell
 * Course: Comp.4610, GUI Programming I
 * Updated: 12/11/2017
 * Description: Javascript for Final Project - web app for image portfolio
 */


/**********************************************************
 * lightbox image gallery logic, based on:                *
 * https://github.com/compact/angular-bootstrap-lightbox  *
 **********************************************************/

angular.module('myApp', ['bootstrapLightbox']);

angular.module('myApp').config(function (LightboxProvider) {
    // set a custom template
    LightboxProvider.templateUrl = 'lightboxtwo.html';
});

angular.module('myApp').controller('GalleryCtrl', function ($scope, Lightbox) {

    $scope.Lightbox = Lightbox;

    $scope.images = [
        'https://i.imgur.com/gjEZAJ7h.jpg',
        'https://i.imgur.com/PnSeZX3h.jpg',
        'https://i.imgur.com/X92aA5Yh.jpg',
        'https://i.imgur.com/Gb6xVGPh.jpg',
        'https://i.imgur.com/I3KJdGyh.jpg',
        'https://i.imgur.com/zlc7uSRh.jpg',
        'https://i.imgur.com/PVU0dxch.jpg',
        'https://i.imgur.com/p53E302h.jpg',
        'https://i.imgur.com/OdjFda3h.jpg',
        'https://i.imgur.com/c3hJOBEh.jpg',
        'https://i.imgur.com/QO2wXxah.jpg',
        'https://i.imgur.com/QLJfdkHh.jpg',
        'https://i.imgur.com/TG87poQh.jpg',
        'https://i.imgur.com/0ic5msXh.jpg',
        'https://i.imgur.com/EGgyVOqh.jpg',
    ];


    $scope.openLightboxModal = function (index) {
        Lightbox.openModal($scope.images, index);
    };


});


/*******************************************************
 * image editing logic, based on:                      *
 * http://camanjs.com/                                 *
 *******************************************************/

$(document).ready(function () {

    $("#go").click(addImage);

    var myName = 0;

    function addImage(e) {

        //create new canvas ID each time because Caman caches canvas elements
        myName++;
        var retStr = "<canvas id=\"Canvas" + myName + "\" class=\"img-responsive\"></canvas>";
        document.getElementById('photoFilterCanvasContainer').innerHTML = retStr;

        var canvas = document.getElementById("Canvas" + myName);
        var context = canvas.getContext('2d');

        var imgUrl = $("#imgUrl").val();

        var img = new Image();

        img.crossOrigin = '';
        img.src = imgUrl.toString();

        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0, img.width, img.height);
        };

        Caman("#" + "Canvas" + myName, img.src, function () {
            this.render();
        });


        e.preventDefault();

        //dynamic twitter widget creation
        var test = img.src;

        console.log("test url: " + test);




        //clear out form input
        var resetform = document.getElementById("urlBox");
        resetform.reset();


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

        // As soon as slider value changes call applyFilters
        $('input[type=range]').change(applyFilters);

        function applyFilters() {
            var hue = parseInt($('#hue').val());
            var cntrst = parseInt($('#contrast').val());
            var vibr = parseInt($('#vibrance').val());
            var sep = parseInt($('#sepia1').val());

            Caman("#" + "Canvas" + myName, img, function () {
                this.revert(false);
                this.hue(hue).contrast(cntrst).vibrance(vibr).sepia(sep).render();
            });
        }

        // Creating custom filters
        Caman.Filter.register("oldpaper", function () {
            this.pinhole();
            this.noise(10);
            this.orangePeel();
            this.render();
        });

        Caman.Filter.register("pleasant", function () {
            this.colorize(60, 105, 218, 10);
            this.contrast(10);
            this.sunrise();
            this.hazyDays();
            this.render();
        });

        $reset.on('click', function (e) {
            $('input[type=range]').val(0);
            Caman("#" + "Canvas" + myName, img, function () {
                this.revert(false);
                this.render();
            });
        });

        // In built filters
        $brightness.on('click', function (e) {
            Caman("#" + "Canvas" + myName, function () {
                this.brightness(30).render();
            });
        });

        $noise.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.noise(10).render();
            });
        });

        $contrast.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.contrast(10).render();
            });
        });

        $sepia.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.sepia(20).render();
            });
        });

        $color.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.colorize(60, 105, 218, 10).render();
            });
        });

        $vintage.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.vintage().render();
            });
        });

        $lomo.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.lomo().render();
            });
        });

        $emboss.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.emboss().render();
            });
        });

        $tiltshift.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.tiltShift({
                    angle: 90,
                    focusWidth: 600
                }).render();
            });
        });

        $radialblur.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.radialBlur().render();
            });
        });

        $edgeenhance.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.edgeEnhance().render();
            });
        });

        $posterize.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.posterize(8, 8).render();
            });
        });

        $clarity.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.clarity().render();
            });
        });

        $orangepeel.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.orangePeel().render();
            });
        });

        $sincity.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.sinCity().render();
            });
        });

        $sunrise.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.sunrise().render();
            });
        });

        $crossprocess.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.crossProcess().render();
            });
        });

        $love.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.love().render();
            });
        });

        $grungy.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.grungy().render();
            });
        });

        $jarques.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.jarques().render();
            });
        });

        $pinhole.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.pinhole().render();
            });
        });

        $oldboot.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.oldBoot().render();
            });
        });

        $glowingsun.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.glowingSun().render();
            });
        });

        $hazydays.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.hazyDays().render();
            });
        });

        // Calling multiple filters inside same function
        $hdr.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.contrast(10);
                this.contrast(10);
                this.jarques();
                this.render();
            });
        });

        // Custom filters that we created
        $oldpaper.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.oldpaper();
                this.render();
            });
        });

        $pleasant.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.pleasant();
                this.render();
            });
        });

        $save.on('click', function (e) {
            Caman("#" + "Canvas" + myName, img, function () {
                this.render(function () {
                    //this.toImage('png');
                    //this.save();

                    // help from https://stackoverflow.com/a/44083548/8657128
                    var a = document.createElement('a');
                    a.href = this.toBase64();
                    a.download = Date() + '_image.png';
                    a.click();

                });
            });
        });
    }
});

