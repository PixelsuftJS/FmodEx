import sys


replaces = {
    'unsigned': 'U',
    'const': '',
    'FMOD_BOOL': 'int',
    'FMOD_REVERB3D*': 'void*',
    'FMOD_REVERB_PROPERTIES*': 'void*',
    'FMOD_VECTOR*': 'void*',
    'FMOD_GEOMETRY*': 'void*',
    'FMOD_DSPCONNECTION*': 'void*',
    'FMOD_DSPCONNECTION_TYPE': 'int',
    'FMOD_DSP_METERING_INFO': 'void*',
    'FMOD_DSP*': 'void*',
    'FMOD_SYSTEM*': 'void*',
    'FMOD_DSP_TYPE*': 'int*',
    'FMOD_SPEAKERMODE': 'int',
    'FMOD_SOUNDGROUP*': 'void*',
    'FMOD_DSP_PARAMETER_DESC*': 'void*',
    'char*': 'string',
    '\'string*\'': 'ref.refType(\'string\')',
    'FMOD_CHANNELMASK': 'Uint',
    'FMOD_CHANNELGROUP*': 'void*',
    'FMOD_SOUNDGROUP_BEHAVIOR': 'int',
    'FMOD_SOUND*': 'void*',
    'FMOD_CHANNEL*': 'void*',
    'longlong': 'long',
    'FMOD_TIMEUNIT': 'Uint',
    'FMOD_MODE': 'Uint',
    'FMOD_SYNCPOINT*': 'void*',
    'FMOD_OPENSTATE': 'int',
    'FMOD_SOUND_TYPE': 'int',
    'FMOD_OPENSTATE*': 'int*',
    'FMOD_TAG': 'void',
    'FMOD_SOUND_FORMAT': 'int',
    'FMOD_GUID': 'void',
    'FMOD_DRIVER_STATE': 'Uint',
    'FMOD_PORT_TYPE': 'int',
    'FMOD_PORT_INDEX': 'Ulong',
    'FMOD_DSP_DESCRIPTION': 'void',
    'FMOD_CREATESOUNDEXINFO': 'void',
    'FMOD_DSP_TYPE': 'int',
    'FMOD_CPU_USAGE': 'void',
    'FMOD_INITFLAGS': 'Uint',
    'FMOD_SPEAKER': 'int',
    'FMOD_CODEC_DESCRIPTION': 'void',
    'FMOD_OUTPUT_DESCRIPTION': 'void',
    'FMOD_ADVANCEDSETTINGS': 'void',
    'FMOD_PLUGINTYPE': 'int',
    'FMOD_OUTPUTTYPE': 'int',
    'FMOD_THREAD_TYPE': 'int',
    'FMOD_THREAD_AFFINITY': 'long',
    'FMOD_DEBUG_FLAGS': 'Uint',
    'FMOD_THREAD_STACK_SIZE': 'Uint',
    'FMOD_MEMORY_TYPE': 'Uint',
    'FMOD_DEBUG_MODE': 'int',
    'FMOD_THREAD_PRIORITY': 'int',
    'FMOD_SYSTEM_CALLBACK_TYPE': 'int',
}


a = open(sys.argv[1]).read().split('\n')


out = ''
for _line in a:
    line = _line.replace('(', ' )').replace('*', '* ').strip()
    _func_name = line.split(' ')[0].strip()
    _func_content = line.split(')')[1].strip()
    _func_args = [' '.join(x.strip().split(' ')[:-1]).replace(' ', '').strip() for x in _func_content.split(',')]
    for arg in _func_args:
        if arg.lower().endswith('callback'):
            _func_args[_func_args.index(arg)] = 'void*' + ('*' * arg.count('*'))
    out += f"'{_func_name}': ['int', {_func_args}],\n"


for i in replaces:
    out = out.replace(i, replaces[i])
print(out, end='')
