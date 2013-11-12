var __path = 'app/',
    cdn = [
        '//ajax.googleapis.com/ajax/libs/ext-core/3.1.0/ext-core.js'
    ],
    files = [
        __path + 'core/ns.js',
        __path + 'core/core.js',
        
        __path + 'modules/client.js',
        __path + 'modules/scene.js'
    ];

// socket io
require(Array.prototype.slice.call(['/socket.io/socket.io.js']).concat(cdn), function() {
    require(files, function() {
        var scene = new App.modules.Scene({
            port: 80
        });
    });
});