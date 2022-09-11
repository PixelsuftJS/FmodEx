const api = require('./api');
require('./fmod_common');
require('./fmod_errors');
require('./fmod_codec');
require('./fmod_output');
require('./fmod_dsp_effects');
require('./fmod_dsp');
require('./fmod');

exports.load_fmodex_library = function(library_path) {
  api.l = api.ffi.Library(library_path, api.join_exports());
  return api.l;
}
exports.export_fmodex_library = function(export_obj) {
  Object.entries(api.join_exports()).forEach(([key, value]) => {
    export_obj[key] = api.l[key];
  });
  Object.entries(api.join_functions()).forEach(([key, value]) => {
    export_obj[key] = value;
  });
  return export_obj;
}