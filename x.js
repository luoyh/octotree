

(function() {


    let url = window.location.pathname;
    let match = url.match(/\/(\w+)\/(\w+)\/tree\/(\w+)/);
    if (!match) {
        return;
    }
    let group = match[1], project = match[2], branch = match[3];

    let projects;

    chrome.storage.local.get('projects', function(_prj) { projects = _prj;});
    //debugger
    if (!projects) {
        $.ajax({
            type : 'get',  
            url : 'http://192.168.11.236:8080/api/v3/projects',
            async : false,  
            success : function(r){  
                let prj = [];
                $.each(r, function(i, e) {
                    prj.push({
                        id: e.id,
                        path: e.path_with_namespace
                    })
                });
                chrome.storage.local.set({
                    'projects': prj
                });
                projects = {
                    'projects': prj
                };
            }  
        });
    }

    console.log(projects);

    let menu = $('#ext_menu');
    if (menu.size() == 0) {
        $('body').append('<div id="ext_menu" style="width:100px;height:100px;background:#abcdef;"></div>');    
    }


    
})();