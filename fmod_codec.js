const {
  e,
  ref,
  Struct,
  Func
} = require('./api');

e.FMOD_CODEC_SEEK_METHOD_SET = 0;
e.FMOD_CODEC_SEEK_METHOD_CURRENT = 1;
e.FMOD_CODEC_SEEK_METHOD_END = 2;

e.FMOD_CODEC_OPEN_CALLBACK = Func('int', ['void*', 'Uint', 'void*']);
e.FMOD_CODEC_CLOSE_CALLBACK = Func('int', ['void*']);
e.FMOD_CODEC_READ_CALLBACK = Func('int', ['void*', 'void*', 'Uint', 'Uint*']);
e.FMOD_CODEC_GETLENGTH_CALLBACK = Func('int', ['void*', 'Uint*', 'Uint']);
e.FMOD_CODEC_SETPOSITION_CALLBACK = Func('int', ['void*', 'int', 'Uint', 'Uint']);
e.FMOD_CODEC_GETPOSITION_CALLBACK = Func('int', ['void*', 'Uint*', 'Uint']);
e.FMOD_CODEC_OPEN_CALLBACK = Func('int', ['void*', 'Uint', 'void*']);
e.FMOD_CODEC_SOUNDCREATE_CALLBACK = Func('int', ['void*', 'int', 'void*']);
e.FMOD_CODEC_GETWAVEFORMAT_CALLBACK = Func('int', ['void*', 'int', 'void*']);
e.FMOD_CODEC_METADATA_FUNC = Func('int', ['void*', 'int', 'string', 'void*', 'Uint', 'int', 'int']);
e.FMOD_CODEC_ALLOC_FUNC = Func('void*', ['Uint', 'Uint', 'string', 'int']);
e.FMOD_CODEC_FREE_FUNC = Func('void', ['void*', 'string', 'int']);
e.FMOD_CODEC_LOG_FUNC = Func('void', ['Uint', 'string', 'int', 'string', 'string']);
e.FMOD_CODEC_FILE_READ_FUNC = Func('int', ['void*', 'void*', 'Uint', 'Uint*']);
e.FMOD_CODEC_FILE_SEEK_FUNC = Func('int', ['void*', 'Uint', 'int']);
e.FMOD_CODEC_FILE_TELL_FUNC = Func('int', ['void*', 'Uint*', 'void*']);
e.FMOD_CODEC_FILE_SIZE_FUNC = Func('int', ['void*', 'Uint*', 'void*']);

e.FMOD_CODEC_DESCRIPTION = Struct({
  apiversion: 'Uint',
  name: 'string',
  version: 'Uint',
  defaultasstream: 'int',
  timeunits: 'Uint',
  open: e.FMOD_CODEC_OPEN_CALLBACK,
  close: e.FMOD_CODEC_CLOSE_CALLBACK,
  read: e.FMOD_CODEC_READ_CALLBACK,
  getlength: e.FMOD_CODEC_GETLENGTH_CALLBACK,
  setposition: e.FMOD_CODEC_SETPOSITION_CALLBACK,
  getposition: e.FMOD_CODEC_GETPOSITION_CALLBACK,
  soundcreate: e.FMOD_CODEC_SOUNDCREATE_CALLBACK,
  getwaveformat: e.FMOD_CODEC_GETWAVEFORMAT_CALLBACK
});
e.FMOD_CODEC_WAVEFORMAT = Struct({
  name: 'string',
  format: 'int',
  channels: 'int',
  frequency: 'int',
  lengthbytes: 'Uint',
  lengthpcm: 'Uint',
  pcmblocksize: 'Uint',
  loopstart: 'int',
  loopend: 'int',
  mode: 'Uint',
  channelmask: 'Uint',
  channelorder: 'int',
  peakvolume: 'float'
});
e.FMOD_CODEC_STATE_FUNCTIONS = Struct({
  metadata: e.FMOD_CODEC_METADATA_FUNC,
  alloc: e.FMOD_CODEC_ALLOC_FUNC,
  free: e.FMOD_CODEC_FREE_FUNC,
  log: e.FMOD_CODEC_LOG_FUNC,
  read: e.FMOD_CODEC_FILE_READ_FUNC,
  seek: e.FMOD_CODEC_FILE_SEEK_FUNC,
  tell: e.FMOD_CODEC_FILE_TELL_FUNC,
  size: e.FMOD_CODEC_FILE_SIZE_FUNC
});
e.FMOD_CODEC_STATE = Struct({
  plugindata: 'void*',
  waveformat: 'void*',
  functions: ref.refType(e.FMOD_CODEC_STATE_FUNCTIONS),
  numsubsounds: 'int'
});
