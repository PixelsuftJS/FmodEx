process.env.fmodex_global_export = 'true';
// Use require('fmodex') for your project
const fmodex = require('./index');
const ref = require('ref-napi');

const music_path = 'D:/Music/Rob Hubbard - Monty on the Run Theme.mp3';
const prefix = process.platform == 'win32' ? '' : 'lib';
const dll = fmodex.load_fmodex_library(prefix + 'fmod');

if (typeof process.env.USE_CFMOD == 'undefined') {
  // C++ Like
  // Note that is doesn't support default values for classes
  // Also note that it can be buggy due it's written by hand in most places
  const FMOD = fmodex.init_fmodpp();
  /*
  FMOD.CheckErr = function(error_code) {
    // there is hook, if you need
    // by default, it will throw an error if error_code != 0
    return error_code;
  }
  */
  const system = new FMOD.System();
  const sound = new FMOD.Sound();
  const channel = new FMOD.Channel();
  const len_p = new Uint32Array(1); // "Emulate" pointer
  const pos_p = new Uint32Array(1);
  const freq_p = new Float32Array(1);
  const start_speed = 0.5;
  const end_speed = 4.0;

  system.init(32, FMOD_INIT_NORMAL, null);
  system.createSound(music_path, FMOD_2D, null, sound);
  sound.setMode(FMOD_LOOP_OFF);
  sound.getLength(len_p, FMOD_TIMEUNIT_MS);
  console.log('Sound Length: ');
  console.log(`${Math.floor(Math.floor(len_p[0] / 1000) / 60)}:${Math.floor(len_p[0] / 1000) % 60}`);
  system.playSound(sound, null, false, channel);
  channel.getFrequency(freq_p);

  function tick() {
    system.update();
    try {
      channel.getPosition(pos_p, FMOD_TIMEUNIT_MS);
      channel.setFrequency((pos_p[0] / len_p[0] * (end_speed - start_speed) + start_speed) * freq_p);
      setImmediate(tick);
    } catch (err) {
      console.log('quit');
      sound.release();
      system.close();
      system.release();
      process.exit(0);
      return;
    }
  }
  setImmediate(tick);
} else {
  // C like
  fmodex.export_fmodex_library(global);
  var system = ref.alloc('void*').ref(); // Reference for creation
  var sound = ref.alloc('void*').ref();
  var channel = ref.alloc('void*').ref();

  function errcheck() {
    if (err == FMOD_OK)
      return;
    console.log(FMOD_ErrorString(err));
    process.exit(1);
  }
  let err;

  err = FMOD_System_Create(system, FMOD_VERSION);
  errcheck();
  system = system.deref(); // Back it
  err = FMOD_System_Init(system, 32, FMOD_INIT_NORMAL, null);
  errcheck();
  err = FMOD_System_CreateSound(system, music_path, FMOD_DEFAULT, null, sound);
  errcheck();
  sound = sound.deref();
  err = FMOD_Sound_SetMode(sound, FMOD_LOOP_OFF);
  errcheck();
  err = FMOD_System_PlaySound(system, sound, null, false, channel);
  errcheck();
  channel = channel.deref();

  setTimeout(function() {
    FMOD_Sound_Release(sound);
    FMOD_System_Close(system);
    FMOD_System_Release(system);
    console.log('quit');
    process.exit(0);
  }, 1000 * 60 * 6 + 37 * 1000 + 558); // 6:37.558
}
