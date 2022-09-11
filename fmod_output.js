const {
  e,
  l,
  ref,
  Struct,
  Func,
  ArrayType,
  from_hex,
  en,
  push_export,
  push_functions
} = require('./api');

e.FMOD_OUTPUT_PLUGIN_VERSION = 5;
e.FMOD_OUTPUT_METHOD_MIX_DIRECT = 0;
e.FMOD_OUTPUT_METHOD_MIX_BUFFERED = 1;

e.FMOD_OUTPUT_GETNUMDRIVERS_CALLBACK = Func('int', ['void*', 'int*']);
e.FMOD_OUTPUT_GETDRIVERINFO_CALLBACK = Func('int', ['void*', 'int', 'string', 'int', 'int*', 'int*']);
e.FMOD_OUTPUT_INIT_CALLBACK = Func('int', ['void*', 'int', 'Uint', 'int*', 'int*', 'int*', 'int*', 'int', 'int*', 'int*', 'void*']);
e.FMOD_OUTPUT_START_CALLBACK = Func('int', ['void*']);
e.FMOD_OUTPUT_STOP_CALLBACK = Func('int', ['void*']);
e.FMOD_OUTPUT_CLOSE_CALLBACK = Func('int', ['void*']);
e.FMOD_OUTPUT_UPDATE_CALLBACK = Func('int', ['void*']);
e.FMOD_OUTPUT_GETHANDLE_CALLBACK = Func('int', ['void*', 'void**']);
e.FMOD_OUTPUT_MIXER_CALLBACK = Func('int', ['void*']);
e.FMOD_OUTPUT_OBJECT3DGETINFO_CALLBACK = Func('int', ['void*', 'int*']);
e.FMOD_OUTPUT_OBJECT3DALLOC_CALLBACK = Func('int', ['void*', 'void**']);
e.FMOD_OUTPUT_OBJECT3DFREE_CALLBACK = Func('int', ['void*', 'void*']);
e.FMOD_OUTPUT_OBJECT3DUPDATE_CALLBACK = Func('int', ['void*', 'void*', 'void*']);
e.FMOD_OUTPUT_OPENPORT_CALLBACK = Func('int', ['void*', 'int', 'Ulong', 'int*', 'int*', 'int*', 'int*']);
e.FMOD_OUTPUT_CLOSEPORT_CALLBACK = Func('int', ['void*', 'int']);
e.FMOD_OUTPUT_DEVICELISTCHANGED_CALLBACK = Func('int', ['void*']);
e.FMOD_OUTPUT_READFROMMIXER_FUNC = Func('int', ['void*', 'void*', 'Uint*']);
e.FMOD_OUTPUT_COPYPORT_FUNC = Func('int', ['void*', 'int', 'void*', 'Uint']);
e.FMOD_OUTPUT_REQUESTRESET_FUNC = Func('int', ['void*']);
e.FMOD_OUTPUT_ALLOC_FUNC = Func('void*', ['Uint', 'Uint', 'string', 'int']);
e.FMOD_OUTPUT_FREE_FUNC = Func('void', ['void*', 'string', 'int']);
e.FMOD_OUTPUT_LOG_FUNC = Func('void', ['Uint', 'string', 'int', 'string', 'string']);

e.FMOD_OUTPUT_DESCRIPTION = Struct({
  apiversion: 'Uint',
  name: 'string',
  version: 'Uint',
  method: 'Uint',
  getnumdrivers: e.FMOD_OUTPUT_GETNUMDRIVERS_CALLBACK,
  getdriverinfo: e.FMOD_OUTPUT_GETDRIVERINFO_CALLBACK,
  init: e.FMOD_OUTPUT_INIT_CALLBACK,
  start: e.FMOD_OUTPUT_START_CALLBACK,
  stop: e.FMOD_OUTPUT_STOP_CALLBACK,
  close: e.FMOD_OUTPUT_CLOSE_CALLBACK,
  update: e.FMOD_OUTPUT_UPDATE_CALLBACK,
  gethandle: e.FMOD_OUTPUT_GETHANDLE_CALLBACK,
  mixer: e.FMOD_OUTPUT_MIXER_CALLBACK,
  object3dgetinfo: e.FMOD_OUTPUT_OBJECT3DGETINFO_CALLBACK,
  object3dalloc: e.FMOD_OUTPUT_OBJECT3DALLOC_CALLBACK,
  object3dfree: e.FMOD_OUTPUT_OBJECT3DFREE_CALLBACK,
  object3dupdate: e.FMOD_OUTPUT_OBJECT3DUPDATE_CALLBACK,
  openport: e.FMOD_OUTPUT_OPENPORT_CALLBACK,
  closeport: e.FMOD_OUTPUT_CLOSEPORT_CALLBACK,
  devicelistchanged: e.FMOD_OUTPUT_DEVICELISTCHANGED_CALLBACK
});
e.FMOD_OUTPUT_STATE = Struct({
  plugindata: 'void*',
  readfrommixer: e.FMOD_OUTPUT_READFROMMIXER_FUNC,
  alloc: e.FMOD_OUTPUT_ALLOC_FUNC,
  free: e.FMOD_OUTPUT_FREE_FUNC,
  log: e.FMOD_OUTPUT_LOG_FUNC,
  copyport: e.FMOD_OUTPUT_COPYPORT_FUNC,
  requestreset: e.FMOD_OUTPUT_REQUESTRESET_FUNC
});
e.FMOD_OUTPUT_OBJECT3DINFO = Struct({
  buffer: 'float',
  bufferlength: 'Uint',
  position: e.FMOD_VECTOR,
  gain: 'float',
  spread: 'float',
  priority: 'float'
});
