requirejs.config({
    'baseUrl': 'js',
    'paths': {
        app: 'app',
        jq: 'jq',
        jquery: 'lib/jquery',
        // jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery',
    },
});
requirejs(['app/main']);
