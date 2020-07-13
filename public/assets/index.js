$(document).ready(function() {
    // adding a part to the database from the modal form
    $(document).on("click", ".addPartBtn", function() {
        // console.log("add btn");
        var newPartObject = {
            part: $(".modal-body #partName").val().trim(),
            link: $(".modal-body  #partLink").val().trim(),
            type: $(".modal-body  #partTypeSelect").val().trim(),
            note: $(".modal-body  #inputComment").val().trim(),
            status: $(".modal-body #statusSelect").val().trim()
        }
        // route request to add the part
        $.ajax({
            url: "/addPart",
            data: newPartObject,
            type: "POST",
            success: location.reload()
        })
        
    })

    // moves a part to the to do section by changing the status in the db
    $(document).on("click", ".toDoBtn", function() {
        var thisID = $(this).attr("data-_id");
        // console.log(thisID);
        moveToDo(thisID);
        location.reload()
    });
    // moves part to progress section. calls function
    $(document).on("click", ".toProgressBtn", function() {
        var thisID = $(this).attr("data-_id");
        moveToProgress(thisID);
        location.reload()
    });
    // moves part to done section. calls function
    $(document).on("click", ".toDoneBtn", function() {
        var thisID = $(this).attr("data-_id");
        moveToDone(thisID);
        location.reload()
    });
    // delete part from db by calling function
    $(document).on("click", ".deletePartBtn", function() {
        var thisID = $(this).attr("data-_id");
        deletePart(thisID);
    });



    // FUNCTIONS
    function moveToDo(partID) {
        $.ajax({
            url: "/movetodone/" +partID,
            type: "PUT"
        }).then(function(data) {
            console.log("changed to do")
        })
    }

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
            url: "/movetocomplete/" + partID,
            type: "PUT"
        }).then(function(data) {
            console.log("to done success")
        })
    }

    function deletePart(partID) {
        $.ajax({
            url: "/deletepart/" + partID,
            type: "DELETE",
            success: location.reload()
        }).then(function(data) {
            console.log("delete success")
        })
    }


})