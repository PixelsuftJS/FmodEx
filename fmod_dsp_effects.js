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

e.FMOD_DSP_LOUDNESS_METER_HISTOGRAM_SAMPLES = 66;

e.FMOD_DSP_TYPE_UNKNOWN = en(0);
e.FMOD_DSP_TYPE_MIXER = en();
e.FMOD_DSP_TYPE_OSCILLATOR = en();
e.FMOD_DSP_TYPE_LOWPASS = en();
e.FMOD_DSP_TYPE_ITLOWPASS = en();
e.FMOD_DSP_TYPE_HIGHPASS = en();
e.FMOD_DSP_TYPE_ECHO = en();
e.FMOD_DSP_TYPE_FADER = en();
e.FMOD_DSP_TYPE_FLANGE = en();
e.FMOD_DSP_TYPE_DISTORTION = en();
e.FMOD_DSP_TYPE_NORMALIZE = en();
e.FMOD_DSP_TYPE_LIMITER = en();
e.FMOD_DSP_TYPE_PARAMEQ = en();
e.FMOD_DSP_TYPE_PITCHSHIFT = en();
e.FMOD_DSP_TYPE_CHORUS = en();
e.FMOD_DSP_TYPE_VSTPLUGIN = en();
e.FMOD_DSP_TYPE_WINAMPPLUGIN = en();
e.FMOD_DSP_TYPE_ITECHO = en();
e.FMOD_DSP_TYPE_COMPRESSOR = en();
e.FMOD_DSP_TYPE_SFXREVERB = en();
e.FMOD_DSP_TYPE_LOWPASS_SIMPLE = en();
e.FMOD_DSP_TYPE_DELAY = en();
e.FMOD_DSP_TYPE_TREMOLO = en();
e.FMOD_DSP_TYPE_LADSPAPLUGIN = en();
e.FMOD_DSP_TYPE_SEND = en();
e.FMOD_DSP_TYPE_RETURN = en();
e.FMOD_DSP_TYPE_HIGHPASS_SIMPLE = en();
e.FMOD_DSP_TYPE_PAN = en();
e.FMOD_DSP_TYPE_THREE_EQ = en();
e.FMOD_DSP_TYPE_FFT = en();
e.FMOD_DSP_TYPE_LOUDNESS_METER = en();
e.FMOD_DSP_TYPE_ENVELOPEFOLLOWER = en();
e.FMOD_DSP_TYPE_CONVOLUTIONREVERB = en();
e.FMOD_DSP_TYPE_CHANNELMIX = en();
e.FMOD_DSP_TYPE_TRANSCEIVER = en();
e.FMOD_DSP_TYPE_OBJECTPAN = en();
e.FMOD_DSP_TYPE_MULTIBAND_EQ = en();
e.FMOD_DSP_TYPE_MAX = en();
e.FMOD_DSP_TYPE_FORCEINT = en(65536);
e.FMOD_DSP_OSCILLATOR_TYPE = en(0);
e.FMOD_DSP_OSCILLATOR_RATE = en();
e.FMOD_DSP_LOWPASS_CUTOFF = en(0);
e.FMOD_DSP_LOWPASS_RESONANCE = en();
e.FMOD_DSP_ITLOWPASS_CUTOFF = en(0);
e.FMOD_DSP_ITLOWPASS_RESONANCE = en();
e.FMOD_DSP_HIGHPASS_CUTOFF = en(0);
e.FMOD_DSP_HIGHPASS_RESONANCE = en();
e.FMOD_DSP_ECHO_DELAY = en(0);
e.FMOD_DSP_ECHO_FEEDBACK = en();
e.FMOD_DSP_ECHO_DRYLEVEL = en();
e.FMOD_DSP_ECHO_WETLEVEL = en();
e.FMOD_DSP_FADER_GAIN = en(0);
e.FMOD_DSP_FADER_OVERALL_GAIN = en();
e.FMOD_DSP_FLANGE_MIX = en(0);
e.FMOD_DSP_FLANGE_DEPTH = en();
e.FMOD_DSP_FLANGE_RATE = en();
e.FMOD_DSP_DISTORTION_LEVEL = en(0);
e.FMOD_DSP_NORMALIZE_FADETIME = en(0);
e.FMOD_DSP_NORMALIZE_THRESHOLD = en();
e.FMOD_DSP_NORMALIZE_MAXAMP = en();
e.FMOD_DSP_LIMITER_RELEASETIME = en(0);
e.FMOD_DSP_LIMITER_CEILING = en();
e.FMOD_DSP_LIMITER_MAXIMIZERGAIN = en();
e.FMOD_DSP_LIMITER_MODE = en();
e.FMOD_DSP_PARAMEQ_CENTER = en(0);
e.FMOD_DSP_PARAMEQ_BANDWIDTH = en();
e.FMOD_DSP_PARAMEQ_GAIN = en();
e.FMOD_DSP_MULTIBAND_EQ_A_FILTER = en(0);
e.FMOD_DSP_MULTIBAND_EQ_A_FREQUENCY = en();
e.FMOD_DSP_MULTIBAND_EQ_A_Q = en();
e.FMOD_DSP_MULTIBAND_EQ_A_GAIN = en();
e.FMOD_DSP_MULTIBAND_EQ_B_FILTER = en();
e.FMOD_DSP_MULTIBAND_EQ_B_FREQUENCY = en();
e.FMOD_DSP_MULTIBAND_EQ_B_Q = en();
e.FMOD_DSP_MULTIBAND_EQ_B_GAIN = en();
e.FMOD_DSP_MULTIBAND_EQ_C_FILTER = en();
e.FMOD_DSP_MULTIBAND_EQ_C_FREQUENCY = en();
e.FMOD_DSP_MULTIBAND_EQ_C_Q = en();
e.FMOD_DSP_MULTIBAND_EQ_C_GAIN = en();
e.FMOD_DSP_MULTIBAND_EQ_D_FILTER = en();
e.FMOD_DSP_MULTIBAND_EQ_D_FREQUENCY = en();
e.FMOD_DSP_MULTIBAND_EQ_D_Q = en();
e.FMOD_DSP_MULTIBAND_EQ_D_GAIN = en();
e.FMOD_DSP_MULTIBAND_EQ_E_FILTER = en();
e.FMOD_DSP_MULTIBAND_EQ_E_FREQUENCY = en();
e.FMOD_DSP_MULTIBAND_EQ_E_Q = en();
e.FMOD_DSP_MULTIBAND_EQ_E_GAIN = en();
e.FMOD_DSP_MULTIBAND_EQ_FILTER_DISABLED = en(0);
e.FMOD_DSP_MULTIBAND_EQ_FILTER_LOWPASS_12DB = en();
e.FMOD_DSP_MULTIBAND_EQ_FILTER_LOWPASS_24DB = en();
e.FMOD_DSP_MULTIBAND_EQ_FILTER_LOWPASS_48DB = en();
e.FMOD_DSP_MULTIBAND_EQ_FILTER_HIGHPASS_12DB = en();
e.FMOD_DSP_MULTIBAND_EQ_FILTER_HIGHPASS_24DB = en();
e.FMOD_DSP_MULTIBAND_EQ_FILTER_HIGHPASS_48DB = en();
e.FMOD_DSP_MULTIBAND_EQ_FILTER_LOWSHELF = en();
e.FMOD_DSP_MULTIBAND_EQ_FILTER_HIGHSHELF = en();
e.FMOD_DSP_MULTIBAND_EQ_FILTER_PEAKING = en();
e.FMOD_DSP_MULTIBAND_EQ_FILTER_BANDPASS = en();
e.FMOD_DSP_MULTIBAND_EQ_FILTER_NOTCH = en();
e.FMOD_DSP_MULTIBAND_EQ_FILTER_ALLPASS = en();
e.FMOD_DSP_PITCHSHIFT_PITCH = en(0);
e.FMOD_DSP_PITCHSHIFT_FFTSIZE = en();
e.FMOD_DSP_PITCHSHIFT_OVERLAP = en();
e.FMOD_DSP_PITCHSHIFT_MAXCHANNELS = en();
e.FMOD_DSP_CHORUS_MIX = en(0);
e.FMOD_DSP_CHORUS_RATE = en();
e.FMOD_DSP_CHORUS_DEPTH = en();
e.FMOD_DSP_ITECHO_WETDRYMIX = en(0);
e.FMOD_DSP_ITECHO_FEEDBACK = en();
e.FMOD_DSP_ITECHO_LEFTDELAY = en();
e.FMOD_DSP_ITECHO_RIGHTDELAY = en();
e.FMOD_DSP_ITECHO_PANDELAY = en();
e.FMOD_DSP_COMPRESSOR_THRESHOLD = en(0);
e.FMOD_DSP_COMPRESSOR_RATIO = en();
e.FMOD_DSP_COMPRESSOR_ATTACK = en();
e.FMOD_DSP_COMPRESSOR_RELEASE = en();
e.FMOD_DSP_COMPRESSOR_GAINMAKEUP = en();
e.FMOD_DSP_COMPRESSOR_USESIDECHAIN = en();
e.FMOD_DSP_COMPRESSOR_LINKED = en();
e.FMOD_DSP_SFXREVERB_DECAYTIME = en(0);
e.FMOD_DSP_SFXREVERB_EARLYDELAY = en();
e.FMOD_DSP_SFXREVERB_LATEDELAY = en();
e.FMOD_DSP_SFXREVERB_HFREFERENCE = en();
e.FMOD_DSP_SFXREVERB_HFDECAYRATIO = en();
e.FMOD_DSP_SFXREVERB_DIFFUSION = en();
e.FMOD_DSP_SFXREVERB_DENSITY = en();
e.FMOD_DSP_SFXREVERB_LOWSHELFFREQUENCY = en();
e.FMOD_DSP_SFXREVERB_LOWSHELFGAIN = en();
e.FMOD_DSP_SFXREVERB_HIGHCUT = en();
e.FMOD_DSP_SFXREVERB_EARLYLATEMIX = en();
e.FMOD_DSP_SFXREVERB_WETLEVEL = en();
e.FMOD_DSP_SFXREVERB_DRYLEVEL = en();
e.FMOD_DSP_LOWPASS_SIMPLE_CUTOFF = en(0);
e.FMOD_DSP_DELAY_CH0 = en(0);
e.FMOD_DSP_DELAY_CH1 = en();
e.FMOD_DSP_DELAY_CH2 = en();
e.FMOD_DSP_DELAY_CH3 = en();
e.FMOD_DSP_DELAY_CH4 = en();
e.FMOD_DSP_DELAY_CH5 = en();
e.FMOD_DSP_DELAY_CH6 = en();
e.FMOD_DSP_DELAY_CH7 = en();
e.FMOD_DSP_DELAY_CH8 = en();
e.FMOD_DSP_DELAY_CH9 = en();
e.FMOD_DSP_DELAY_CH10 = en();
e.FMOD_DSP_DELAY_CH11 = en();
e.FMOD_DSP_DELAY_CH12 = en();
e.FMOD_DSP_DELAY_CH13 = en();
e.FMOD_DSP_DELAY_CH14 = en();
e.FMOD_DSP_DELAY_CH15 = en();
e.FMOD_DSP_DELAY_MAXDELAY = en();
e.FMOD_DSP_TREMOLO_FREQUENCY = en(0);
e.FMOD_DSP_TREMOLO_DEPTH = en();
e.FMOD_DSP_TREMOLO_SHAPE = en();
e.FMOD_DSP_TREMOLO_SKEW = en();
e.FMOD_DSP_TREMOLO_DUTY = en();
e.FMOD_DSP_TREMOLO_SQUARE = en();
e.FMOD_DSP_TREMOLO_PHASE = en();
e.FMOD_DSP_TREMOLO_SPREAD = en();
e.FMOD_DSP_SEND_RETURNID = en(0);
e.FMOD_DSP_SEND_LEVEL = en();
e.FMOD_DSP_RETURN_ID = en(0);
e.FMOD_DSP_RETURN_INPUT_SPEAKER_MODE = en();
e.FMOD_DSP_HIGHPASS_SIMPLE_CUTOFF = en(0);
e.FMOD_DSP_PAN_2D_STEREO_MODE_DISTRIBUTED = en(0);
e.FMOD_DSP_PAN_2D_STEREO_MODE_DISCRETE = en();
e.FMOD_DSP_PAN_MODE_MONO = en(0);
e.FMOD_DSP_PAN_MODE_STEREO = en();
e.FMOD_DSP_PAN_MODE_SURROUND = en();
e.FMOD_DSP_PAN_3D_ROLLOFF_LINEARSQUARED = en(0);
e.FMOD_DSP_PAN_3D_ROLLOFF_LINEAR = en();
e.FMOD_DSP_PAN_3D_ROLLOFF_INVERSE = en();
e.FMOD_DSP_PAN_3D_ROLLOFF_INVERSETAPERED = en();
e.FMOD_DSP_PAN_3D_ROLLOFF_CUSTOM = en();
e.FMOD_DSP_PAN_3D_EXTENT_MODE_AUTO = en(0);
e.FMOD_DSP_PAN_3D_EXTENT_MODE_USER = en();
e.FMOD_DSP_PAN_3D_EXTENT_MODE_OFF = en();
e.FMOD_DSP_PAN_MODE = en(0);
e.FMOD_DSP_PAN_2D_STEREO_POSITION = en();
e.FMOD_DSP_PAN_2D_DIRECTION = en();
e.FMOD_DSP_PAN_2D_EXTENT = en();
e.FMOD_DSP_PAN_2D_ROTATION = en();
e.FMOD_DSP_PAN_2D_LFE_LEVEL = en();
e.FMOD_DSP_PAN_2D_STEREO_MODE = en();
e.FMOD_DSP_PAN_2D_STEREO_SEPARATION = en();
e.FMOD_DSP_PAN_2D_STEREO_AXIS = en();
e.FMOD_DSP_PAN_ENABLED_SPEAKERS = en();
e.FMOD_DSP_PAN_3D_POSITION = en();
e.FMOD_DSP_PAN_3D_ROLLOFF = en();
e.FMOD_DSP_PAN_3D_MIN_DISTANCE = en();
e.FMOD_DSP_PAN_3D_MAX_DISTANCE = en();
e.FMOD_DSP_PAN_3D_EXTENT_MODE = en();
e.FMOD_DSP_PAN_3D_SOUND_SIZE = en();
e.FMOD_DSP_PAN_3D_MIN_EXTENT = en();
e.FMOD_DSP_PAN_3D_PAN_BLEND = en();
e.FMOD_DSP_PAN_LFE_UPMIX_ENABLED = en();
e.FMOD_DSP_PAN_OVERALL_GAIN = en();
e.FMOD_DSP_PAN_SURROUND_SPEAKER_MODE = en();
e.FMOD_DSP_PAN_2D_HEIGHT_BLEND = en();
e.FMOD_DSP_PAN_ATTENUATION_RANGE = en();
e.FMOD_DSP_PAN_OVERRIDE_RANGE = en();
e.FMOD_DSP_THREE_EQ_CROSSOVERSLOPE_12DB = en(0);
e.FMOD_DSP_THREE_EQ_CROSSOVERSLOPE_24DB = en();
e.FMOD_DSP_THREE_EQ_CROSSOVERSLOPE_48DB = en();
e.FMOD_DSP_THREE_EQ_LOWGAIN = en(0);
e.FMOD_DSP_THREE_EQ_MIDGAIN = en();
e.FMOD_DSP_THREE_EQ_HIGHGAIN = en();
e.FMOD_DSP_THREE_EQ_LOWCROSSOVER = en();
e.FMOD_DSP_THREE_EQ_HIGHCROSSOVER = en();
e.FMOD_DSP_THREE_EQ_CROSSOVERSLOPE = en();
e.FMOD_DSP_FFT_WINDOW_RECT = en(0);
e.FMOD_DSP_FFT_WINDOW_TRIANGLE = en();
e.FMOD_DSP_FFT_WINDOW_HAMMING = en();
e.FMOD_DSP_FFT_WINDOW_HANNING = en();
e.FMOD_DSP_FFT_WINDOW_BLACKMAN = en();
e.FMOD_DSP_FFT_WINDOW_BLACKMANHARRIS = en();
e.FMOD_DSP_FFT_WINDOWSIZE = en(0);
e.FMOD_DSP_FFT_WINDOWTYPE = en();
e.FMOD_DSP_FFT_SPECTRUMDATA = en();
e.FMOD_DSP_FFT_DOMINANT_FREQ = en();
e.FMOD_DSP_LOUDNESS_METER_STATE = en(0);
e.FMOD_DSP_LOUDNESS_METER_WEIGHTING = en();
e.FMOD_DSP_LOUDNESS_METER_INFO = en();
e.FMOD_DSP_LOUDNESS_METER_STATE_RESET_INTEGRATED = en(-3);
e.FMOD_DSP_LOUDNESS_METER_STATE_RESET_MAXPEAK = en(-2);
e.FMOD_DSP_LOUDNESS_METER_STATE_RESET_ALL = en(-1);
e.FMOD_DSP_LOUDNESS_METER_STATE_PAUSED = en(0);
e.FMOD_DSP_LOUDNESS_METER_STATE_ANALYZING = en(1);
e.FMOD_DSP_ENVELOPEFOLLOWER_ATTACK = en(0);
e.FMOD_DSP_ENVELOPEFOLLOWER_RELEASE = en();
e.FMOD_DSP_ENVELOPEFOLLOWER_ENVELOPE = en();
e.FMOD_DSP_ENVELOPEFOLLOWER_USESIDECHAIN = en();
e.FMOD_DSP_CONVOLUTION_REVERB_PARAM_IR = en(0);
e.FMOD_DSP_CONVOLUTION_REVERB_PARAM_WET = en();
e.FMOD_DSP_CONVOLUTION_REVERB_PARAM_DRY = en();
e.FMOD_DSP_CONVOLUTION_REVERB_PARAM_LINKED = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_DEFAULT = en(0);
e.FMOD_DSP_CHANNELMIX_OUTPUT_ALLMONO = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_ALLSTEREO = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_ALLQUAD = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_ALL5POINT1 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_ALL7POINT1 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_ALLLFE = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_ALL7POINT1POINT4 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUTGROUPING = en(0);
e.FMOD_DSP_CHANNELMIX_GAIN_CH0 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH1 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH2 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH3 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH4 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH5 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH6 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH7 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH8 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH9 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH10 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH11 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH12 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH13 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH14 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH15 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH16 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH17 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH18 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH19 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH20 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH21 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH22 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH23 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH24 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH25 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH26 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH27 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH28 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH29 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH30 = en();
e.FMOD_DSP_CHANNELMIX_GAIN_CH31 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH0 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH1 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH2 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH3 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH4 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH5 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH6 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH7 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH8 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH9 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH10 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH11 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH12 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH13 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH14 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH15 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH16 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH17 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH18 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH19 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH20 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH21 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH22 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH23 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH24 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH25 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH26 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH27 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH28 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH29 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH30 = en();
e.FMOD_DSP_CHANNELMIX_OUTPUT_CH31 = en();
e.FMOD_DSP_TRANSCEIVER_SPEAKERMODE_AUTO = en(-1);
e.FMOD_DSP_TRANSCEIVER_SPEAKERMODE_MONO = en(0);
e.FMOD_DSP_TRANSCEIVER_SPEAKERMODE_STEREO = en();
e.FMOD_DSP_TRANSCEIVER_SPEAKERMODE_SURROUND = en();
e.FMOD_DSP_TRANSCEIVER_TRANSMIT = en(0);
e.FMOD_DSP_TRANSCEIVER_GAIN = en();
e.FMOD_DSP_TRANSCEIVER_CHANNEL = en();
e.FMOD_DSP_TRANSCEIVER_TRANSMITSPEAKERMODE = en();
e.FMOD_DSP_OBJECTPAN_3D_POSITION = en(0);
e.FMOD_DSP_OBJECTPAN_3D_ROLLOFF = en();
e.FMOD_DSP_OBJECTPAN_3D_MIN_DISTANCE = en();
e.FMOD_DSP_OBJECTPAN_3D_MAX_DISTANCE = en();
e.FMOD_DSP_OBJECTPAN_3D_EXTENT_MODE = en();
e.FMOD_DSP_OBJECTPAN_3D_SOUND_SIZE = en();
e.FMOD_DSP_OBJECTPAN_3D_MIN_EXTENT = en();
e.FMOD_DSP_OBJECTPAN_OVERALL_GAIN = en();
e.FMOD_DSP_OBJECTPAN_OUTPUTGAIN = en();
e.FMOD_DSP_OBJECTPAN_ATTENUATION_RANGE = en();
e.FMOD_DSP_OBJECTPAN_OVERRIDE_RANGE = en();

e.FMOD_DSP_LOUDNESS_METER_INFO_TYPE = Struct({
  momentaryloudness: 'float',
  shorttermloudness: 'float',
  integratedloudness: 'float',
  loudness10thpercentile: 'float',
  loudness95thpercentile: 'float',
  loudnesshistogram: ArrayType('float', e.FMOD_DSP_LOUDNESS_METER_HISTOGRAM_SAMPLES),
  maxtruepeak: 'float',
  maxmomentaryloudness: 'float'
});
e.FMOD_DSP_LOUDNESS_METER_WEIGHTING_TYPE = Struct({
  channelweight: ArrayType('float', 32)
});