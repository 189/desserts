"use strict"

var utils = {
	/**
	 * if empty json
	 * @param  {object}  json 
	 * @return {boolean} empty	if it doesn't has any property
	 */
	isEmptyObject : function(json){
		var empty = true;
		for(var p in json){
			if(json.hasOwnProperty(p)){
				empty = false;
				break;
			}
		}
		return empty;
	},


	/**
	 * foreach array 
	 * @param  {object}   collection 
	 * @param  {function} callback   
	 * @return {}              
	 */
	each : function(collection, callback) {
	    var x, len;

	    if (Array.isArray(collection)) {
	        x = -1;
	        len = collection.length;
	        while (++x < len) {
	            if (callback(collection[x], x) == false) {
	                break;
	            }
	        }
	    } else {
	        for (x in collection) {
	            if (collection.hasOwnProperty(x)) {
	                callback(collection[x], x);
	            }
	        }
	    }
	}
};

module.exports = utils;








