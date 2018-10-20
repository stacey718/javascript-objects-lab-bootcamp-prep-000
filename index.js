var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var object 
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var obj = {key: 'value'}
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  var obj1 = {key: 'nothing'}
  delete obj1.key
  return obj1;
}