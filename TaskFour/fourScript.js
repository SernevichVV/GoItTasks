/**
 * Created by Viktoria on 17.07.2016.
 */
/* an object for generating test structure with using DOM*/
var testConstructor = {
    //  form: null,
    //  title: null,
    //  orderedList: null,

    init: function (containerId) {
        this.form = document.createElement("form");
        this.form.setAttribute("class", "formStyle");               // add attribute for styling and manipulating form
        var testBody = document.getElementById(containerId);
        testBody.appendChild(this.form);
// create title as object variable inside function
        this.title = document.createElement("h1");
        this.title.setAttribute("id", "titleStyle");
        this.form.appendChild(this.title);

        this.orderedList = document.createElement("ol");
        //this.orderedList.setAttribute("class", "gradientForOl");
        this.form.appendChild(this.orderedList);


        var submitButton = document.createElement("button");
        submitButton.setAttribute("class", "button");
        submitButton.innerHTML = "Check my results";
        this.form.appendChild(submitButton);
    },

    // function for creating Title

    setTitle: function (content) {

        this.title.innerHTML = content;

    },

    // function for creating block which contains 1 question and array of answers

    askList: function (question, answers) {
        var questionForTest = document.createElement("li");
        questionForTest.innerHTML = question;
        this.orderedList.appendChild(questionForTest);

        var ulList = document.createElement("ul");
        questionForTest.appendChild(ulList);

        for (var i = 0; i < answers.length; i++) {
            var answer = answers[i];
            // the number of element in ol list in order to set unique attributes for input and label
            var indexOL = this.orderedList.childNodes.length;

            var liOfUl = document.createElement("li");
            liOfUl.setAttribute("class", "roundedCheck");
            ulList.appendChild(liOfUl);

            var input = document.createElement("input");
            input.setAttribute("type", "checkbox");

            input.setAttribute("id", "roundedCheck_" + indexOL + "_" + i);
            liOfUl.appendChild(input);

            var label = document.createElement("label");
            label.setAttribute("for", "roundedCheck_" + indexOL + "_" + i);
            label.setAttribute("class", "labelStyle");
            label.innerHTML = answer;
            liOfUl.appendChild(label);
        }


    }
};






