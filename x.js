

(function() {


    console.log(location);
    $.get('http://192.168.11.236:8080/api/v3/projects', function(r) {
        console.log(r);
    });
})();