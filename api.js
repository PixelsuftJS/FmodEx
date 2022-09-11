const ffi = require('ffi-napi');
const ref = require('ref-napi');
const Struct = require('ref-struct-di')(ref);
const Union = require('ref-union-di')(ref);
const ArrayType = require('ref-array-di')(ref);

var e = (typeof process.env.fmodex_global_export == 'undefined') ? exports : global;
var library_exports = [];
var enerator;

exports.e = e;
exports.l = {};
exports.ffi = ffi;
exports.ref = ref;
exports.Func = ffi.Function;
exports.Struct = Struct;
exports.Union = Union;
exports.ArrayType = ArrayType;
exports.library_exports = library_exports;

exports.join_exports = function() {
  return Object.assign({}, ...exports.library_exports);
}
exports.from_hex = function(hex_str) {
  return parseInt(hex_str, 16);
}
exports.en = function(reset) {
  if (typeof reset !== 'undefined')
    enerator = reset;
  return enerator++;
}
exports.encoder = new TextEncoder();
exports.decoder = new TextDecoder();
exports.default_terminator = '\x00';
exports.from_utf16 = function(str, terminator = exports.default_terminator) {
  str += terminator;
  var arr = new Uint16Array(str.length);
  for (var i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i);
  }
  return arr;
}
exports.to_utf16 = function(arr, terminator = exports.default_terminator) {
  return exports.trim_terminator(String.fromCharCode(...arr), terminator);
}
exports.from_utf8 = function(str, terminator = exports.default_terminator) {
  return encoder.encode(str + terminator);
}
exports.to_utf8 = function(arr, terminator = exports.default_terminator) {
  return exports.trim_terminator(decoder.decode(arr), terminator);
}
exports.trim_terminator = function(str, terminator = exports.default_terminator) {
  const terminator_index = str.indexOf(terminator);
  if (!terminator || terminator_index < 0)
    return str;
  return str.substr(0, terminator_index);
}
exports.push_export = function(sublibrary_export) {
  library_exports.push(sublibrary_export);
}
exports.push_functions = function(sublibrary_functions) {
  library_functions.push(sublibrary_functions);
}
