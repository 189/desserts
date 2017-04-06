/**
 * Many of these feature are simply utiliy functions.
 * kv.wang87@gmail.com
 * 2017-03-16 
 */


;(function(root, name, factory){
	if(typeof module === 'object' && module.exports){
		module.exports = factory();
	}
	else if (typeof define == 'function'){
		if(define.cmd){
			define(factory);
		}
		else {
			define(name, factory);
		}
	}
	else {
		root[name] = factory();
	}

})(this, 'desserts', function(){
	"use strict"

	var slice = Object.prototype.slice;
	var encode = encodeURIComponent;
	var decode = decodeURIComponent;	
	
	return {
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
		},

		type : function(collection){
			var type = slice.call(collection);
			// return type.match()
		}		
	};
});








