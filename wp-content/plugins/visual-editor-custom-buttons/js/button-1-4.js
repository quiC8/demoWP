// JavaScript Document

function getBaseURL () {
   return location.protocol + '//' + location.hostname + 
      (location.port && ':' + location.port) + '/';
}

(function() {
    tinymce.create('tinymce.plugins.vecb_button4', {
        init : function(ed, url) {
            ed.addButton('vecb_button4', {
                title : '4 Columns',image : 'http://agi.carbon8test.com/wp-content/uploads/vecb/4_col.png',onclick : function() {
                     ed.selection.setContent('[row][col-four]Content 1[/col-four][col-four]Content 2[/col-four][col-four]Content 3[/col-four][col-four]Content 4[/col-four]' + ed.selection.getContent() + '[/row]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('vecb_button4', tinymce.plugins.vecb_button4);
})();