// JavaScript Document

function getBaseURL () {
   return location.protocol + '//' + location.hostname + 
      (location.port && ':' + location.port) + '/';
}

(function() {
    tinymce.create('tinymce.plugins.vecb_button3', {
        init : function(ed, url) {
            ed.addButton('vecb_button3', {
                title : '3 columns',image : url+'/icons/3_col.png',onclick : function() {
                     ed.selection.setContent('[row][col-third]Content 1[/col-third][col-third]Content 2[/col-third][col-third]Content 3[/col-third]' + ed.selection.getContent() + '[/row]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('vecb_button3', tinymce.plugins.vecb_button3);
})();