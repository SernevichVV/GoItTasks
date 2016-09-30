/**
 * Created by Viktoria on 18.09.2016.
 */


//First of all I want to explain why I decided to use different programming approach.
//I think it would be more precisely to use method dateNow() for calculating time, than setInterval with counter
// The problem is that:
// 1 A minimal delay for browser's timers is 4 ms but in fact this value can be increased up to 20 ms depending on
//the version of browser, CPU load, the level of battery ect.
// 2 If the next Interval will be added tho the queue waiting for execution the previous one will be deleted from
// queue and won't execute at all.
// 3 Java Script processes all event in one flow, that means if a flow is working with another event, it will
// postpone execution function with setInterval for later, even if it is the time for it to execute
// links with more information https://learn.javascript.ru/settimeout-setinterval
//https://habrahabr.ru/post/138062/


// function create a new function which wraps given in parameters function. A new function has always set context
// as a reference to the current "this"


function bind(func, context) {
    return function () {
        return func.apply(context, arguments);
    };
}

function CountDownTimer(startButtonId, clearButtonId) {
    this.startButtonId = startButtonId;
    this.clearButtonId = clearButtonId;
}

CountDownTimer.prototype = {

    // variable that represent the state of the timer (start, pause, stop)
    state: undefined,
    timerId: null,
    timeDifference: 0,
    buttonStart: null,
    buttonClear: null,
    pastTimeDiff: 0,
    result: null,
    $buttonSplit: null,
    val: null,

    //list of constants which represent state of timer
    START: 0,
    PAUSE: 1,


    get startVal() {
        return this.START;
    },

    get pauseVal() {
        return this.PAUSE;
    },

    init: function () {
        this.buttonStart = document.getElementById(this.startButtonId);
        this.buttonStart.addEventListener("click", bind(this.startClickHandler, this));
        this.state = this.PAUSE;//initially timer is paused
        this.buttonClear = document.getElementById(this.clearButtonId);
        this.buttonClear.addEventListener("click", bind(this.clear, this));
        this.$buttonSplit = $('#btnSplit');
        this.$buttonSplit.on("click", bind(this.functSplit, this));
    }
    ,

    functSplit: function () {
        var $splitVal = $("<p></p>");
        $splitVal.html(this.val).appendTo(".splitStyle");
    },

    startClickHandler: function () {
        if (this.state == this.PAUSE) {
            this.state = this.START;
            this.startTimer();
        } else if (this.state == this.START) {
            this.state = this.PAUSE;
            this.pause();
            this.pastTimeDiff = this.timeDifference;
        } else {
            throw new Error("Unexpected state of timer " + this.state);
        }
    },

    startTimer: function () {
        this.timeStart = Date.now();
        // function add the difference between the time when the button start was pressed and the current time
        this.timerId = setTimeout(bind(function addTimeInterval() {
            // current time
            var timeNow = Date.now();
            this.timeDifference = timeNow - this.timeStart + this.pastTimeDiff;

            var milliS = this.timeDifference % 1000;
            var sec = Math.floor(this.timeDifference / 1000) % 60;
            var min = Math.floor(this.timeDifference / 60000) % 60;
            var hours = Math.floor(this.timeDifference / 3600000) % 24;

            this.val = this.format(hours, 2) + ":" + this.format(min, 2) + ":" + this.format(sec, 2) + ":" + this.format(milliS, 3);
            this.result = document.getElementById("counter");
            this.result.innerHTML = this.val;
            // addTimeInterval is a recursive setTimeout function. I decided to use it because it is more flexible
            // than setInterval, it has always fixed delay and start working only when the last function was executed
            this.timerId = setTimeout(bind(addTimeInterval, this), 1);

        }, this), 1);

        this.buttonStart.innerHTML = "Pause";
    },


    pause: function () {
        clearTimeout(this.timerId);
        this.buttonStart.innerHTML = "Start";
    },

    clear: function () {
        clearTimeout(this.timerId);
        this.state = this.PAUSE;
        this.timerId = null;
        this.timeDifference = 0;
        this.pastTimeDiff = 0;
        this.buttonStart.innerHTML = "Start";
        this.result.innerHTML = "00:00:00:000";
        $(".splitStyle").empty();

    },

    format: function (num, digits) {
        var str = "" + num;
        while (str.length < digits) {
            str = "0" + str;
        }

        return str;
    }
};


