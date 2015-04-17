bonderFilters = angular.module('bonderaFilters', []);

bonderFilters.filter('fareFormat', function(){
    return function(input, unit){
        input = input || 0;
        if (unit == 'pounds'){
            return Math.floor(input);
        } else if (unit === 'piasters'){
            return (input - Math.floor(input)).toFixed(2)
        }
    }
});

bonderFilters.filter('ceil', function(){
    return function(input){
        input = input || 0;
        return Math.ceil(input)
    }
})