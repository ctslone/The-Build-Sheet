$(document).ready(function() {
    $(document).on("click", ".addPartBtn", function() {
        // console.log("add btn");
        var newPartObject = {
            part: $(".modal-body #partName").val().trim(),
            link: $(".modal-body  #partLink").val().trim(),
            type: $(".modal-body  #partTypeSelect").val().trim(),
            note: $(".modal-body  #inputComment").val().trim(),
            status: $(".modal-body #statusSelect").val().trim()
        }
        // console.log(newPartObject)
        $.ajax({
            url: "/addPart",
            data: newPartObject,
            type: "POST"
        }).then(function(data) {
            console.log("add part success")
        }).then(function() {
            location.reload()
        })
    })

    $(document).on("click", ".toProgressBtn", function() {
        var thisID = $(this).attr("data-_id");
        // console.log(thisID);
        moveToProgress(thisID);
        location.reload()
    });

    $(document).on("click", ".toDoneBtn", function() {
        var thisID = $(this).attr("data-_id");
        // console.log(thisID);
        moveToDone(thisID);
        location.reload()
    });

    $(document).on("click", ".deletePartBtn", function() {
        var thisID = $(this).attr("data-_id");
        // console.log(thisID);
        deletePart(thisID);
        location.reload()
    });    






    // FUNCTIONS
    function moveToProgress(partID) {
        $.ajax({
            url: "/movetoinprogress/" + partID,
            type: "PUT"
        }).then(function(data) {
            console.log("to progress success")
        })
    }

    function moveToDone(partID) {
        $.ajax({
            url: "/movetodone/" + partID,
            type: "PUT"
        }).then(function(data) {
            console.log("to done success")
        })
    }

    function deletePart(partID) {
        $.ajax({
            url: "/deletepart/" + partID,
            type: "DELETE"
        }).then(function(data) {
            console.log("delete success")
        })
    }







})