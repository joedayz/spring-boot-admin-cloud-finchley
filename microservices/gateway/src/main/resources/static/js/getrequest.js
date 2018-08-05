$( document ).ready(function() {



    var prefix = "/services";

    // Perform AJAX requests...
    $.getJSON(prefix + "/subject",   null, displaySubject)  .fail(displayErrorSubject);
    $.getJSON(prefix + "/verb",      null, displayVerb)     .fail(displayErrorVerb);
    $.getJSON(prefix + "/article",   null, displayArticle)  .fail(displayErrorArticle);
    $.getJSON(prefix + "/adjective", null, displayAdjective).fail(displayErrorAdjective);
    $.getJSON(prefix + "/noun",      null, displayNoun)     .fail(displayErrorNoun);

    //	Handle Success:
    function displaySubject(results) {
        $("#subject").html(results.word);
    }

    function displayVerb(results) {
        $("#verb").html(results.word);
    }

    function displayArticle(results) {
        $("#article").html(results.word);
    }

    function displayAdjective(results) {
        $("#adjective").html(results.word);
    }

    function displayNoun(results) {
        $("#noun").html(results.word);
    }

    //	Handle Errors:

    function displayErrorSubject(x, s, m) {
        err(x, s, m, "subject");
    }

    function displayErrorVerb(x, s, m) {
        err(x, s, m, "verb");
    }

    function displayErrorArticle(x, s, m) {
        err(x, s, m, "article");
    }

    function displayErrorAdjective(x, s, m) {
        err(x, s, m, "adjective");
    }

    function displayErrorNoun(x, s, m) {
        err(x, s, m, "noun");
    }

    // Dsiplay text of AJAX error message using a hidden div
    function err(xhr, status, msg, prefix) {
        // Display an error in the 'error' div above and show it.
        var text = xhr.responseText;
        var emsg = "<p><b>AJAX Failure retrieving " + prefix + ": " + xhr.status + " " + msg + "</b><br/></p>";

        $("#error").append(emsg);
        $("#error").show();
    }


})