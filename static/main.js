$(document).ready(function () {

    var balls = [];
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var paintMode = false;

    // Set up all the keys
    $(".key").each(function () {

        $(this).click(function () {
            createBall();  // Create new ball
            var audio = new Audio('static/sounds/' + $(this).attr('id') + '.mp3');
            audio.play();
        });
    });

    // Set up all the keyboard presses
    $(document).keypress(function (e) {
        if (e.which == 97 || e.which == 65) {
            $("#low_c").click();
            $("#low_c").addClass("key-press");
        } else if (e.which == 115 || e.which == 83) {
            $("#low_d").addClass("key-press");
            $("#low_d").click();
        } else if (e.which == 100 || e.which == 68) {
            $("#low_e").addClass("key-press");
            $("#low_e").click();
        } else if (e.which == 102 || e.which == 70) {
            $("#low_f").addClass("key-press");
            $("#low_f").click();
        } else if (e.which == 103 || e.which == 71) {
            $("#g").addClass("key-press");
            $("#g").click();
        } else if (e.which == 104 || e.which == 72) {
            $("#a").addClass("key-press");
            $("#a").click();
        } else if (e.which == 106 || e.which == 74) {
            $("#b").addClass("key-press");
            $("#b").click();
        } else if (e.which == 107 || e.which == 75) {
            $("#hi_c").addClass("key-press");
            $("#hi_c").click();
        } else if (e.which == 108 || e.which == 76) {
            $("#hi_d").addClass("key-press");
            $("#hi_d").click();
        } else if (e.which == 59 || e.which == 186) {
            $("#hi_e").addClass("key-press");
            $("#hi_e").click();
        } else if (e.which == 39 || e.which == 222) {
            $("#hi_f").addClass("key-press");
            $("#hi_f").click();
        }

    });

    $(document).keyup(function (e) {
        if (e.which == 97 || e.which == 65) {
            $("#low_c").removeClass("key-press");
        } else if (e.which == 115 || e.which == 83) {
            $("#low_d").removeClass("key-press");
        } else if (e.which == 100 || e.which == 68) {
            $("#low_e").removeClass("key-press");
        } else if (e.which == 102 || e.which == 70) {
            $("#low_f").removeClass("key-press");
        } else if (e.which == 103 || e.which == 71) {
            $("#g").removeClass("key-press");
        } else if (e.which == 104 || e.which == 72) {
            $("#a").removeClass("key-press");
        } else if (e.which == 106 || e.which == 74) {
            $("#b").removeClass("key-press");
        } else if (e.which == 107 || e.which == 75) {
            $("#hi_c").removeClass("key-press");
        } else if (e.which == 108 || e.which == 76) {
            $("#hi_d").removeClass("key-press");
        } else if (e.which == 59 || e.which == 186) {
            $("#hi_e").removeClass("key-press");
        } else if (e.which == 39 || e.which == 222) {
            $("#hi_f").removeClass("key-press");
        }

    });

    function setup() {
        alert("By Daniel Starner\n\nUse the keyboard row A through ' as a keyboard too.");
    }

    function createBall() {
        balls.push({y: 0, x: getRandomInt(0, c.width), color: createColor()});
    }

    function running() {

        if ($('#paintMode').is(':checked')) {
            paintMode = true;
        } else {
            paintMode = false;
        }

        if (!paintMode) {
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillRect(0, 0, c.width, c.height);
        }
        for (var i = 0; i < balls.length; i++) {
            var ball = balls[i];
            ctx.fillStyle = ball.color;

            ctx.beginPath();
            ctx.arc(ball.x, ball.y, 5, 0, 2 * Math.PI, false);
            ctx.fillStyle = ball.color;
            ctx.fill();
            ctx.lineWidth = 1;

            ball.y += 1;
            if (ball.y > c.height + 20) {
                balls.splice(i, 1);
            }
        }
    }

    setup();

    setInterval(running, 10);

    function createColor(num_range) {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

});
