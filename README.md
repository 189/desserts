A modern & simple JavaScript utility library.


# Installation
#### In a browser:
~~~
<script src='desserts.js'></script>
~~~

#### using npm 
~~~
$ npm install --save desserts
~~~



#### In nodejs
~~~
var desserts = require('desserts');

desserts.each(obj, function(item, index){
	console.log(item);
})
~~~



#### API
~~~
const KK = require('desserts');
~~~

- KK.type(arg) output the type of argument
      
    ~~~~
    KK.type('hi') // 'string'
    KK.type(true) // 'number'
    KK.type(new Date) // 'date'
    KK.type(function(){}) // 'function'
    KK.type(null) // 'null'
    KK.type(undefined) // 'undefined'
    KK.type(new Object) // 'object'
    KK.type(NaN) // 'nan'
    ~~~~
  
- KK.isString(arg) 
- KK.isBoolean(arg)
- KK.isDate(arg)
- KK.isFunction(arg)
- KK.isNull(arg)
- KK.isUndefined(arg)
- KK.isObject(arg)
- KK.isNaN(arg)
- KK.isJSONString(arg)
  
	~~~  
	KK.isJSONString('{"name" : 'obama'}') // true
	KK.isJSONString(3) // false
	~~~		

- KK.isEmptyObject(arg)
  
	~~~  
	KK.isEmptyObject({}) // true
	KK.isEmptyObject({'name' : 'Obama'}) // false
	~~~		

- KK.each(collection, callback)
	- `collection` {array | json}
	- `callback` {function}
		When callback return false, loop will break.
		
	~~~
	var a = [11, 22, 33, 44]
	KK.each(a, function(item, index, context){
      if(item > 22){
        return false;
      }
      // 33 and 44 will not print
      console.log(item);
    })
	~~~

- KK.queryString(arg) Got key-value params from urls.
	
		var a = 'name=lily&age=2&grade=3';
		// Got {'name' : 'lily', 'age' : 2, grade : 3} 
		KK.queryString(a) 
		
- KK.merge(target, source)

	~~~
	var target = { a : 1, read : {book : true}, count : [11]}
  	var source = { a : 2, read : {paper : true, book : false}, count : [1]}
	
	// Got { a : 2, read : {book : false, paper : true}, count : [1] }
  	KK.merge(target, source); 
  	console.log(target.read === source.read); // true
	~~~

- KK.deepMerge(target, source)

	~~~
	var target = { a : 1, read : {book : true}, count : [11]}
  	var source = { a : 2, read : {paper : true, book : false}, count : [1]}
	
	// Got { a : 2, read : {book : false, paper : true}, count : [1] }
  	KK.merge(target, source); 
  	console.log(target.read === source.read); // false
	~~~
