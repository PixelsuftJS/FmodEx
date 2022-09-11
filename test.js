process.env.fmodex_global_export = 'true';
// Use require('fmodex') for your project
const fmodex = require('./index');
const ref = require('ref-napi');

const music_path = 'D:/Music/Rob Hubbard - Monty on the Run Theme.mp3';
const prefix = process.platform == 'win32' ? '' : 'lib';
fmodex.load_fmodex_library(prefix + 'fmod');
fmodex.export_fmodex_library(global);

function errcheck() {
  if (err == FMOD_OK)
    return;
  console.log(FMOD_ErrorString(err));
  process.exit(1);
}
let err;

if (true) {
  // C-Like; C++ like will be later (or never :D)
  var system = ref.alloc('void*').ref(); // Reference for creation
  var sound = ref.alloc('void*').ref();
  var channel = ref.alloc('void*').ref();

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
  err = FMOD_System_PlaySound(system, sound, null, 0/*false*/, channel);
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
