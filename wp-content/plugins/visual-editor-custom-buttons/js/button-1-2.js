// JavaScript Document

function getBaseURL () {
   return location.protocol + '//' + location.hostname + 
      (location.port && ':' + location.port) + '/';
}

(function() {
    tinymce.create('tinymce.plugins.vecb_button2', {
        init : function(ed, url) {
            ed.addButton('vecb_button2', {
                title : '2 columns',image : url+'/icons/2_col.png',onclick : function() {
                     ed.selection.setContent('[row][col-half]Content 1[/col-half][col-half]Content 2[/col-half]' + ed.selection.getContent() + '[/row]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('vecb_button2', tinymce.plugins.vecb_button2);
})();