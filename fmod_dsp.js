const {
  e,
  l,
  ref,
  Union,
  Struct,
  Func,
  ArrayType,
  from_hex,
  en,
  push_export,
  push_functions
} = require('./api');

e.FMOD_PLUGIN_SDK_VERSION = 110;
e.FMOD_DSP_GETPARAM_VALUESTR_LENGTH = 32;

e.FMOD_DSP_PROCESS_PERFORM = en(0);
e.FMOD_DSP_PROCESS_QUERY = en();
e.FMOD_DSP_PAN_SURROUND_DEFAULT = en(0);
e.FMOD_DSP_PAN_SURROUND_ROTATION_NOT_BIASED = en(1);
e.FMOD_DSP_PAN_SURROUND_FLAGS_FORCEINT = en(65536);
e.FMOD_DSP_PARAMETER_TYPE_FLOAT = en(0);
e.FMOD_DSP_PARAMETER_TYPE_INT = en();
e.FMOD_DSP_PARAMETER_TYPE_BOOL = en();
e.FMOD_DSP_PARAMETER_TYPE_DATA = en();
e.FMOD_DSP_PARAMETER_TYPE_MAX = en();
e.FMOD_DSP_PARAMETER_TYPE_FORCEINT = en(65536);
e.FMOD_DSP_PARAMETER_FLOAT_MAPPING_TYPE_LINEAR = en(0);
e.FMOD_DSP_PARAMETER_FLOAT_MAPPING_TYPE_AUTO = en();
e.FMOD_DSP_PARAMETER_FLOAT_MAPPING_TYPE_PIECEWISE_LINEAR = en();
e.FMOD_DSP_PARAMETER_FLOAT_MAPPING_TYPE_FORCEINT = en(65536);
e.FMOD_DSP_PARAMETER_DATA_TYPE_USER = en(0);
e.FMOD_DSP_PARAMETER_DATA_TYPE_OVERALLGAIN = en(-1);
e.FMOD_DSP_PARAMETER_DATA_TYPE_3DATTRIBUTES = en(-2);
e.FMOD_DSP_PARAMETER_DATA_TYPE_SIDECHAIN = en(-3);
e.FMOD_DSP_PARAMETER_DATA_TYPE_FFT = en(-4);
e.FMOD_DSP_PARAMETER_DATA_TYPE_3DATTRIBUTES_MULTI = en(-5);
e.FMOD_DSP_PARAMETER_DATA_TYPE_ATTENUATION_RANGE = en(-6);

e.FMOD_DSP_CREATE_CALLBACK = Func('int', ['void*']);
e.FMOD_DSP_RELEASE_CALLBACK = Func('int', ['void*']);
e.FMOD_DSP_RESET_CALLBACK = Func('int', ['void*']);
e.FMOD_DSP_READ_CALLBACK = Func('int', ['void*', 'float*', 'float*', 'Uint', 'int', 'int*']);
e.FMOD_DSP_PROCESS_CALLBACK = Func('int', ['void*', 'Uint', 'void*', 'void*', 'int', 'int']);
e.FMOD_DSP_SETPOSITION_CALLBACK = Func('int', ['void*', 'Uint']);
e.FMOD_DSP_SHOULDIPROCESS_CALLBACK = Func('int', ['void*', 'int', 'Uint', 'Uint', 'int', 'int']);
e.FMOD_DSP_SETPARAM_FLOAT_CALLBACK = Func('int', ['void*', 'int', 'float']);
e.FMOD_DSP_SETPARAM_INT_CALLBACK = Func('int', ['void*', 'int', 'int']);
e.FMOD_DSP_SETPARAM_BOOL_CALLBACK = Func('int', ['void*', 'int', 'int']);
e.FMOD_DSP_SETPARAM_DATA_CALLBACK = Func('int', ['void*', 'int', 'void*', 'Uint']);
e.FMOD_DSP_GETPARAM_FLOAT_CALLBACK = Func('int', ['void*', 'int', 'float*', 'string']);
e.FMOD_DSP_GETPARAM_INT_CALLBACK = Func('int', ['void*', 'int', 'int*', 'string']);
e.FMOD_DSP_GETPARAM_BOOL_CALLBACK = Func('int', ['void*', 'int', 'int*', 'string']);
e.FMOD_DSP_GETPARAM_DATA_CALLBACK = Func('int', ['void*', 'int', 'void**', 'Uint*', 'string']);
e.FMOD_DSP_SYSTEM_REGISTER_CALLBACK = Func('int', ['void*']);
e.FMOD_DSP_SYSTEM_DEREGISTER_CALLBACK = Func('int', ['void*']);
e.FMOD_DSP_SYSTEM_MIX_CALLBACK = Func('int', ['void*', 'int']);
e.FMOD_DSP_ALLOC_FUNC = Func('void*', ['Uint', 'Uint', 'string']);
e.FMOD_DSP_REALLOC_FUNC = Func('void*', ['void*', 'Uint', 'Uint', 'string']);
e.FMOD_DSP_FREE_FUNC = Func('void', ['void*', 'Uint', 'string']);
e.FMOD_DSP_LOG_FUNC = Func('void', ['Uint', 'string', 'int', 'string', 'string']);
e.FMOD_DSP_GETSAMPLERATE_FUNC = Func('int', ['void*', 'int*']);
e.FMOD_DSP_GETBLOCKSIZE_FUNC = Func('int', ['void*', 'Uint*']);
e.FMOD_DSP_GETSPEAKERMODE_FUNC = Func('int', ['void*', 'int*', 'int*']);
e.FMOD_DSP_GETCLOCK_FUNC = Func('int', ['void*', 'Ulong*', 'Uint*', 'Uint*']);
e.FMOD_DSP_GETLISTENERATTRIBUTES_FUNC = Func('int', ['void*', 'int*', 'void*']);
e.FMOD_DSP_GETUSERDATA_FUNC = Func('int', ['void*', 'void**']);
e.FMOD_DSP_DFT_FFTREAL_FUNC = Func('int', ['void*', 'int', 'float*', 'void*', 'float*', 'int']);
e.FMOD_DSP_DFT_IFFTREAL_FUNC = Func('int', ['void*', 'int', 'void*', 'float*', 'float*', 'int']);
e.FMOD_DSP_PAN_SUMMONOMATRIX_FUNC = Func('int', ['void*', 'int', 'float', 'float', 'float*']);
e.FMOD_DSP_PAN_SUMSTEREOMATRIX_FUNC = Func('int', ['void*', 'int', 'float', 'float', 'float', 'int', 'float*']);
e.FMOD_DSP_PAN_SUMSURROUNDMATRIX_FUNC = Func('int', ['void*', 'int', 'int', 'float', 'float', 'float', 'float', 'float', 'int', 'float*', 'int']);
e.FMOD_DSP_PAN_SUMMONOTOSURROUNDMATRIX_FUNC = Func('int', ['void*', 'int', 'float', 'float', 'float', 'float', 'int', 'float*']);
e.FMOD_DSP_PAN_SUMSTEREOTOSURROUNDMATRIX_FUNC = Func('int', ['void*', 'int', 'float', 'float', 'float', 'float', 'float', 'int', 'float*']);
e.FMOD_DSP_PAN_GETROLLOFFGAIN_FUNC = Func('int', ['void*', 'int', 'float', 'float', 'float', 'float*']);

e.FMOD_DSP_BUFFER_ARRAY = Struct({
  numbuffers: 'int',
  buffernumchannels: 'int*',
  bufferchannelmask: 'Uint*',
  buffers: 'float**',
  speakermode: 'int'
});
e.FMOD_COMPLEX = Struct({
  real: 'float',
  imag: 'float'
});
e.FMOD_DSP_PARAMETER_FLOAT_MAPPING_PIECEWISE_LINEAR = Struct({
  numpoints: 'int',
  pointparamvalues: 'float*',
  pointpositions: 'float*'
});
e.FMOD_DSP_PARAMETER_FLOAT_MAPPING = Struct({
  type: 'int',
  piecewiselinearmapping: e.FMOD_DSP_PARAMETER_FLOAT_MAPPING_PIECEWISE_LINEAR
});
e.FMOD_DSP_PARAMETER_DESC_FLOAT = Struct({
  min: 'float',
  max: 'float',
  defaultval: 'float',
  mapping: e.FMOD_DSP_PARAMETER_FLOAT_MAPPING
});
e.FMOD_DSP_PARAMETER_DESC_INT = Struct({
  min: 'int',
  max: 'int',
  defaultval: 'int',
  goestoinf: 'int',
  valuenames: ref.refType('string')
});
e.FMOD_DSP_PARAMETER_DESC_BOOL = Struct({
  defaultval: 'int',
  valuenames: ref.refType('string')
});
e.FMOD_DSP_PARAMETER_DESC_DATA = Struct({
  datatype: 'int'
});
e.FMOD_DSP_PARAMETER_DESC = Struct({
  type: 'int',
  name: ArrayType('char', 16),
  label: ArrayType('char', 16),
  description: 'string',
  union: Union({
    floatdesc: e.FMOD_DSP_PARAMETER_DESC_FLOAT,
    intdesc: e.FMOD_DSP_PARAMETER_DESC_INT,
    booldesc: e.FMOD_DSP_PARAMETER_DESC_BOOL,
    datadesc: e.FMOD_DSP_PARAMETER_DESC_DATA
  })
});
e.FMOD_DSP_PARAMETER_OVERALLGAIN = Struct({
  linear_gain: 'float',
  linear_gain_additive: 'float'
});
e.FMOD_DSP_PARAMETER_3DATTRIBUTES = Struct({
  relative: e.FMOD_3D_ATTRIBUTES,
  absolute: e.FMOD_3D_ATTRIBUTES
});
e.FMOD_DSP_PARAMETER_3DATTRIBUTES_MULTI = Struct({
  numlisteners: 'int',
  relative: ArrayType('int', e.FMOD_MAX_LISTENERS),
  weight: ArrayType('float', e.FMOD_MAX_LISTENERS),
  absolute: 'int'
});
e.FMOD_DSP_PARAMETER_ATTENUATION_RANGE = Struct({
  min: 'float',
  max: 'float'
});
e.FMOD_DSP_PARAMETER_SIDECHAIN = Struct({
  sidechainenable: 'int'
});
e.FMOD_DSP_PARAMETER_FFT = Struct({
  length: 'int',
  numchannels: 'int',
  spectrum: ArrayType('float', 32)
});
e.FMOD_DSP_DESCRIPTION = Struct({
  pluginsdkversion: 'Uint',
  name: ArrayType('char', 32),
  version: 'Uint',
  numinputbuffers: 'int',
  numoutputbuffers: 'int',
  create: e.FMOD_DSP_CREATE_CALLBACK,
  release: e.FMOD_DSP_RELEASE_CALLBACK,
  read: e.FMOD_DSP_READ_CALLBACK,
  process: e.FMOD_DSP_PROCESS_CALLBACK,
  setposition: e.FMOD_DSP_SETPOSITION_CALLBACK,
  numparameters: 'int',
  paramdesc: ref.refType(ref.refType(e.FMOD_DSP_PARAMETER_DESC)),
  setparameterfloat: e.FMOD_DSP_SETPARAM_FLOAT_CALLBACK,
  setparameterint: e.FMOD_DSP_SETPARAM_INT_CALLBACK,
  setparameterbool: e.FMOD_DSP_SETPARAM_BOOL_CALLBACK,
  setparameterdata: e.FMOD_DSP_SETPARAM_DATA_CALLBACK,
  getparameterfloat: e.FMOD_DSP_GETPARAM_FLOAT_CALLBACK,
  getparameterint: e.FMOD_DSP_GETPARAM_INT_CALLBACK,
  getparameterbool: e.FMOD_DSP_GETPARAM_BOOL_CALLBACK,
  getparameterdata: e.FMOD_DSP_GETPARAM_DATA_CALLBACK,
  shouldiprocess: e.FMOD_DSP_SHOULDIPROCESS_CALLBACK,
  userdata: 'void*',
  sys_register: e.FMOD_DSP_SYSTEM_REGISTER_CALLBACK,
  sys_deregister: e.FMOD_DSP_SYSTEM_DEREGISTER_CALLBACK,
  sys_mix: e.FMOD_DSP_SYSTEM_MIX_CALLBACK
});
e.FMOD_DSP_STATE_DFT_FUNCTIONS = Struct({
  fftreal: e.FMOD_DSP_DFT_FFTREAL_FUNC,
  inversefftreal: e.FMOD_DSP_DFT_IFFTREAL_FUNC
});
e.FMOD_DSP_STATE_PAN_FUNCTIONS = Struct({
  summonomatrix: e.FMOD_DSP_PAN_SUMMONOMATRIX_FUNC,
  sumstereomatrix: e.FMOD_DSP_PAN_SUMSTEREOMATRIX_FUNC,
  sumsurroundmatrix: e.FMOD_DSP_PAN_SUMSURROUNDMATRIX_FUNC,
  summonotosurroundmatrix: e.FMOD_DSP_PAN_SUMMONOTOSURROUNDMATRIX_FUNC,
  sumstereotosurroundmatrix: e.FMOD_DSP_PAN_SUMSTEREOTOSURROUNDMATRIX_FUNC,
  getrolloffgain: e.FMOD_DSP_PAN_GETROLLOFFGAIN_FUNC
});
e.FMOD_DSP_STATE_FUNCTIONS = Struct({
  alloc: e.FMOD_DSP_ALLOC_FUNC,
  realloc: e.FMOD_DSP_REALLOC_FUNC,
  free: e.FMOD_DSP_FREE_FUNC,
  getsamplerate: e.FMOD_DSP_GETSAMPLERATE_FUNC,
  getblocksize: e.FMOD_DSP_GETBLOCKSIZE_FUNC,
  dft: ref.refType(e.FMOD_DSP_STATE_DFT_FUNCTIONS),
  pan: ref.refType(e.FMOD_DSP_STATE_PAN_FUNCTIONS),
  getspeakermode: e.FMOD_DSP_GETSPEAKERMODE_FUNC,
  getclock: e.FMOD_DSP_GETCLOCK_FUNC,
  getlistenerattributes: e.FMOD_DSP_GETLISTENERATTRIBUTES_FUNC,
  log: e.FMOD_DSP_LOG_FUNC,
  getuserdata: e.FMOD_DSP_GETUSERDATA_FUNC
});
e.FMOD_DSP_STATE = Struct({
  instance: 'void*',
  plugindata: 'void*',
  channelmask: 'Uint',
  source_speakermode: 'int',
  sidechaindata: 'float*',
  sidechainchannels: 'int',
  functions: ref.refType(e.FMOD_DSP_STATE_FUNCTIONS),
  systemobject: 'int'
});
e.FMOD_DSP_METERING_INFO = Struct({
  numsamples: 'int',
  peaklevel: ArrayType('float', 32),
  rmslevel: ArrayType('float', 32),
  numchannels: 'short'
});
