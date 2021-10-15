
$('table.demo-1').floatThead({
    scrollContainer: function($table){
        return $table.closest('.wrapper');
    }
});