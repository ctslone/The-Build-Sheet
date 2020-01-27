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







})