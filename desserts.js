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
			dfine(name, factory);
		}
	}
	else {
		root[name] = factory();
	}

})(this, 'desserts', function(){
	"use strict"

	var slice = Object.prototype.slice;
	var toStr = Object.prototype.toString;
	var encode = encodeURIComponent;
	var decode = decodeURIComponent;	
	
	var _ =  {
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

		/**
		 * Get type  
		 * @param  {mix}  arg 
		 * @return type     
		 */
		type : function(arg){
			var type = toStr.call(arg);
			var match = type.match(/\b\w+(?=])/);

			return match[0].toLowerCase();
		},
		
		queryString : function(url){
			var index, ret = {};
			
			url = (url + '').trim();
			index = url.indexOf('?'); 
			url = index === -1 ? url.slice(index + 1) : url;

			_.each(url.split('&'), function(item, i){
				var haystack = item.split('=');
				if(haystack[0] !== ''){
					ret[haystack[0]] = haystack[1];
				}
			});

			return ret;
		}
	};

	return _;
});








