// JavaScript Document

function getBaseURL () {
   return location.protocol + '//' + location.hostname + 
      (location.port && ':' + location.port) + '/';
}

(function() {
    tinymce.create('tinymce.plugins.vecb_button5', {
        init : function(ed, url) {
            ed.addButton('vecb_button5', {
                title : 'Image',image : url+'/icons/instagram.png',onclick : function() {
                     ed.selection.setContent('[post-content-image]Add image here[/post-content-image]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('vecb_button5', tinymce.plugins.vecb_button5);
})();