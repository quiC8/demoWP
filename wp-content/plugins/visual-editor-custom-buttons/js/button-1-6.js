// JavaScript Document

function getBaseURL () {
   return location.protocol + '//' + location.hostname + 
      (location.port && ':' + location.port) + '/';
}

(function() {
    tinymce.create('tinymce.plugins.vecb_button6', {
        init : function(ed, url) {
            ed.addButton('vecb_button6', {
                title : 'Video',image : url+'/icons/video.png',onclick : function() {
                     ed.selection.setContent('[post-content-video src="Video URL"]Add background image here[/post-content-video]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('vecb_button6', tinymce.plugins.vecb_button6);
})();