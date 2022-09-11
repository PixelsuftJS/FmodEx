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

  system.init(32, FMOD_INIT_NORMAL, null);
  system.createSound(music_path, FMOD_DEFAULT, null, sound);
  sound.setMode(FMOD_LOOP_OFF);
  system.playSound(sound, null, false, channel);

  setTimeout(function() {
    sound.release();
    system.close();
    system.release();
    console.log('quit');
    process.exit(0);
  }, 1000 * 60 * 6 + 37 * 1000 + 558); // 6:37.558
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
  }, 1000 * 60 * 6 + 37 * 1000 + 558);
}
