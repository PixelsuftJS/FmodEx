const api = require('./api');
const fmodpp = require('./fmodpp')
require('./fmod_common');
require('./fmod_errors');
require('./fmod_codec');
require('./fmod_output');
require('./fmod_dsp_effects');
require('./fmod_dsp');
require('./fmod');

exports.load_fmodex_library = function(library_path) {
  api.l = api.ffi.Library(library_path, api.functions);
  return api.l;
}
exports.export_fmodex_library = function(export_obj) {
  Object.entries(api.functions).forEach(([key, value]) => {
    export_obj[key] = api.l[key];
  });
  return export_obj;
}
exports.init_fmodpp = fmodpp.init_fmodpp;
