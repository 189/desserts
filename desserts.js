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
	"use strict";

  var $ = {};
	var slice = Object.prototype.slice;
	var toStr = Object.prototype.toString;
	var encode = encodeURIComponent;
	var decode = decodeURIComponent;


  /**
   * Get type
   * @params  {mix}  arg
   * @return type
   * @usage
   */
  $.type = function(arg){
    var type = toStr.call(arg);
    var match = type.match(/\b\w+(?=])/);

    return match[0].toLowerCase();
  };

  /**
   * foreach array
   * @param  {object}   collection
   * @param  {function} callback
   * @return {}
   */
  $.each = function(collection, callback) {
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
  };

  /**
   * parse string as key-value
   * @params {string} url
   * @return {json}
   * @usage
   *    $.queryString('?a=1&b=2') // return {a : 1, b : 2}
   *
   **/
  $.queryString = function(url){
    var index, ret = {};

    url = (url + '').trim();
    index = url.indexOf('?');
    url = index > -1 ? url.slice(index + 1) : url;

    $.each(url.split('&'), function(item, i){
      var haystack = item.split('=');
      if(haystack[0] !== ''){
        ret[haystack[0]] = haystack[1];
      }
    });

    return ret;
  };

  /**
   * if empty json
   * @param  {object}  json
   * @return {boolean} empty	if it doesn't has any property
   */
  $.isEmptyObject = function(json){
    var empty = true;
    for(var p in json){
      if(json.hasOwnProperty(p)){
        empty = false;
        break;
      }
    }
    return empty;
  };

  /**
   * 对象合并 浅拷贝
   *
   * */
  $.merge = function(target, source){
    for(var p in source){
      if(source.hasOwnProperty(p)){
        if($.type(source[p]) === 'object'){
          target[p] = $.merge(source[p]);
        }
        else{
          target[p] = source[p];
        }
      }
    }
    return target;
  };

  /**
   * 对象合并 深拷贝
   * @parmas {object} target
   * @params {object} source
   * @return target
   * @usage :
   *  var target = { a : 1, read : {book : true}, count : [11]}
   *  var source = { a : 2, read : {paper : true, book : false}, count : [1]}
   *  $.deepMerge(target, source); // { a : 2, read : {book : false, paper : true}, count : [1] }
   *
   * */
  $.deepMerge = function(target, source) {
    for (let p in source) {
      if (source.hasOwnProperty(p)) {
        if(typeof source[p] === 'object'){
          if($.type(target[p]) === 'undefined'){
            target[p] = $.type(source[p]) === 'object' ? {} : [];
          }
          $.deepMerge(target[p], source[p]);
        }
        else {
          target[p] = source[p];
        }
      }
    }
    return target;
  };

  $.toCamelCase = toCamelCase;
  $.toHyphenCase = toHyphenCase;
  $.encode = encode;
  $.decode = decode;
  $.slice = slice;

  /**
   * mixin types tools
   *
   * */
  (function(){
    var types = ['string', 'function', 'boolean', 'null', 'function', 'object', 'date'];

    types.forEach(function (item) {
      var upper = item.charAt(0).toUpperCase();
      $['is' + upper + item.slice(1)] = function(arg){
        return $.type(arg) === item;
      };
    });

    $.isNaN = function(arg){
      return isNaN(arg);
    };

    $.isJSONString = function(arg){
      try{
        var json = JSON.parse(arg);
        return $.isObject(json) && !$.isNull(json);
      }
      catch(ex){
        return false;
      }
    };

  })();

  function toCamelCase(str) {
    return str.replace(/-\D/g, function(match) {
      return match.charAt(1).toUpperCase();
    });
  }

  function toHyphenCase(str) {
    return str.replace(/[A-Z]/g, function(match) {
      return ('-' + match.charAt(0).toLowerCase());
    });
  }

	return $;
});








