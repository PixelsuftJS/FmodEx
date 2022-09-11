exports.init_fmodpp = function() {
  const api = require('./api');
  const ref = require('ref-napi');
  const e = api.e;
  const l = api.l;

  var r = {};

  r.Memory_Initialize = function(poolmem, poollen, useralloc, userrealloc, userfree, memtypeflags = e.FMOD_MEMORY_ALL) {
    return l.FMOD_Memory_Initialize(poolmem, poollen, useralloc, userrealloc, userfree, memtypeflags);
  }
  r.Memory_GetStats = function(currentalloced, maxalloced, blocking = 1) {
    return l.FMOD_Memory_GetStats(currentalloced, maxalloced, blocking);
  }
  r.Debug_Initialize = function(flags, mode = e.FMOD_DEBUG_MODE_TTY, callback = null, filename = null) {
    return l.FMOD_Debug_Initialize(flags, mode, callback, filename);
  }
  r.File_SetDiskBusy = function(busy) {
    return l.FMOD_File_SetDiskBusy(busy);
  }
  r.File_GetDiskBusy = function(busy) {
    return l.FMOD_File_GetDiskBusy(busy);
  }
  r.Thread_SetAttributes = function(type, affinity = e.FMOD_THREAD_AFFINITY_GROUP_DEFAULT, priority = e.FMOD_THREAD_PRIORITY_DEFAULT, stacksize = e.FMOD_THREAD_STACK_SIZE_DEFAULT) {
    return l.FMOD_Thread_SetAttributes(type, affinity, priority, stacksize);
  }
  r.System_Create = function(system, headerversion = e.FMOD_VERSION) {
    return l.FMOD_System_Create(system, headerversion);
  }
  r.CheckErr = function(error_code) {
    if (error_code == e.FMOD_OK)
      return e.FMOD_OK;
    throw FMOD_ErrorString(error_code);
    return error_code;
  }

  r.System = class System {
    constructor(System) {
      if (typeof System == 'undefined') {
        const system_p = ref.alloc('void*').ref();
        r.CheckErr(r.System_Create(system_p));
        this._system = system_p.deref();
      } else {
        this._system = System;
      }
      Object.entries(api.functions).forEach(([key, value]) => {
        if (!key.startsWith('FMOD_System_') || key == 'FMOD_System_Create')
          return;
        this[key[12].toLowerCase() + key.slice(13)] = function(...data) {
          return r.CheckErr(l[key](this._system, ...data));
        }
      });
      this.createDSPByPlugin = function(handle, dsp) {
        const c_dsp_p = ref.alloc('void*').ref();
        const result = l.FMOD_System_CreateDSPByPlugin(this._system, handle, c_dsp_p);
        r.CheckErr(result);
        dsp._dsp = c_dsp_p.deref();
        return result;
      }
      this.createSound = function(name_or_data, mode, exinfo, sound) {
        const c_sound_p = ref.alloc('void*').ref();
        const result = l.FMOD_System_CreateSound(this._system, name_or_data, mode, exinfo, c_sound_p);
        r.CheckErr(result);
        sound._sound = c_sound_p.deref();
        return result;
      }
      this.createStream = function(name_or_data, mode, exinfo, sound) {
        const c_sound_p = ref.alloc('void*').ref();
        const result = l.FMOD_System_CreateStream(this._system, name_or_data, mode, exinfo, c_sound_p);
        r.CheckErr(result);
        sound._sound = c_sound_p.deref();
        return result;
      }
      this.createDSP = function(description, dsp) {
        const c_dsp_p = ref.alloc('void*').ref();
        const result = l.FMOD_System_CreateDSP(this._system, description, c_dsp_p);
        r.CheckErr(result);
        dsp._dsp = c_dsp_p.deref();
        return result;
      }
      this.createDSPByType = function(type, dsp) {
        const c_dsp_p = ref.alloc('void*').ref();
        const result = l.FMOD_System_CreateDSPByType(this._system, type, c_dsp_p);
        r.CheckErr(result);
        dsp._dsp = c_dsp_p.deref();
        return result;
      }
      this.createChannelGroup = function(name, channelgroup) {
        const c_channelgroup_p = ref.alloc('void*').ref();
        const result = l.FMOD_System_CreateChannelGroup(this._system, name, c_channelgroup_p);
        r.CheckErr(result);
        channelgroup._channelgroup = c_channelgroup_p.deref();
        return result;
      }
      this.createSoundGroup = function(name, soundgroup) {
        const c_soundgroup_p = ref.alloc('void*').ref();
        const result = l.FMOD_System_CreateSoundGroup(this._system, name, c_soundgroup_p);
        r.CheckErr(result);
        soundgroup._soundgroup = c_soundgroup_p.deref();
        return result;
      }
      this.createReverb3D = function(name, reverb) {
        const c_reverb_p = ref.alloc('void*').ref();
        const result = l.FMOD_System_CreateReverb3D(this._system, name, c_reverb_p);
        r.CheckErr(result);
        reverb._reverb = c_reverb_p.deref();
        return result;
      }
      this.playSound = function(sound, channelgroup, paused, channel) {
        if (channelgroup == null) {
          channelgroup = {
            _channelgroup: null
          };
        }
        const c_channel_p = ref.alloc('void*').ref();
        const result = l.FMOD_System_PlaySound(this._system, sound._sound, channelgroup._channelgroup, paused, c_channel_p);
        r.CheckErr(result);
        channel._channel = c_channel_p.deref();
        return result;
      }
      this.playDSP = function(dsp, channelgroup, paused, channel) {
        if (channelgroup == null) {
          channelgroup = {
            _channelgroup: null
          };
        }
        const c_channel_p = ref.alloc('void*').ref();
        const result = l.FMOD_System_PlayDSP(this._system, dsp._dsp, channelgroup._channelgroup, paused, c_channel_p);
        r.CheckErr(result);
        channel._channel = c_channel_p.deref();
        return result;
      }
      this.getChannel = function(channelid, channel) {
        const c_channel_p = ref.alloc('void*').ref();
        const result = l.FMOD_System_GetChannel(this._system, channelid, c_channel_p);
        r.CheckErr(result);
        channel._channel = c_channel_p.deref();
        return result;
      }
      this.getMasterChannelGroup = function(channelgroup) {
        const c_channelgroup_p = ref.alloc('void*').ref();
        const result = l.FMOD_System_GetMasterChannelGroup(this._system, c_channelgroup_p);
        r.CheckErr(result);
        channelgroup._channelgroup = c_channelgroup_p.deref();
        return result;
      }
      this.getMasterSoundGroup = function(soundgroup) {
        const c_soundgroup_p = ref.alloc('void*').ref();
        const result = l.FMOD_System_GetMasterSoundGroup(this._system, c_soundgroup_p);
        r.CheckErr(result);
        soundgroup._soundgroup = c_soundgroup_p.deref();
        return result;
      }
      this.attachChannelGroupToPort = function(portType, portIndex, channelgroup, passThru) {
        return r.CheckErr(l.FMOD_System_AttachChannelGroupToPort(this._system, portType, portIndex, channelgroup._channelgroup, passThru));
      }
      this.detachChannelGroupFromPort = function(channelgroup) {
        return r.CheckErr(l.FMOD_System_DetachChannelGroupFromPort(this._system, channelgroup._channelgroup));
      }
      this.recordStart = function(id, sound, loop) {
        return r.CheckErr(l.FMOD_System_RecordStart(this._system, id, sound._sound, loop));
      }
      this.createGeometry = function(maxpolygons, maxvertices, geometry) {
        const c_geometry_p = ref.alloc('void*').ref();
        const result = l.FMOD_System_CreateGeometry(this._system, maxpolygons, maxvertices, c_geometry_p);
        r.CheckErr(result);
        c_geometry_p._geometry = c_geometry_p.deref();
        return result;
      }
      this.loadGeometry = function(data, datasize, geometry) {
        const c_geometry_p = ref.alloc('void*').ref();
        const result = l.FMOD_System_LoadGeometry(this._system, data, datasize, c_geometry_p);
        r.CheckErr(result);
        c_geometry_p._geometry = c_geometry_p.deref();
        return result;
      }
    }
  }
  r.Sound = class Sound {
    constructor() {
      this._sound = null;
      Object.entries(api.functions).forEach(([key, value]) => {
        if (!key.startsWith('FMOD_Sound_'))
          return;
        this[key[11].toLowerCase() + key.slice(12)] = function(...data) {
          return r.CheckErr(l[key](this._sound, ...data));
        }
      });
      this.getSubSound = function(index, subsound) {
        const c_sound_p = ref.alloc('void*').ref();
        const result = l.FMOD_Sound_GetSubSound(this._sound, index, c_sound_p);
        r.CheckErr(result);
        subsound._sound = c_sound_p.deref();
        return result;
      }
      this.getSubSoundParent = function(parentsound) {
        const c_sound_p = ref.alloc('void*').ref();
        const result = l.FMOD_Sound_GetSubSoundParent(this._sound, c_sound_p);
        r.CheckErr(result);
        parentsound._sound = c_sound_p.deref();
        return result;
      }
      this.setSoundGroup = function(soundgroup) {
        return r.CheckErr(l.FMOD_Sound_SetSoundGroup(this._sound, soundgroup._soundgroup));
      }
      this.getSoundGroup = function(soundgroup) {
        const c_soundgroup_p = ref.alloc('void*').ref();
        const result = l.FMOD_Sound_GetSoundGroup(this._sound, c_soundgroup_p);
        r.CheckErr(result);
        soundgroup._soundgroup = c_soundgroup_p.deref();
        return result;
      }
    }
  }
  r.Channel = class Channel {
    constructor() {
      this._channel = null;
      Object.entries(api.functions).forEach(([key, value]) => {
        if (!key.startsWith('FMOD_Channel_'))
          return;
        this[key[13].toLowerCase() + key.slice(14)] = function(...data) {
          return r.CheckErr(l[key](this._channel, ...data));
        }
      });
      this.getSystemObject = function(system) {
        return r.CheckErr(l.FMOD_Channel_GetSystemObject(this._channel, system._system));
      }
      this.getDSP = function(index, dsp) {
        const c_dsp_p = ref.alloc('void*').ref();
        const result = l.FMOD_Channel_GetDSP(this._channel, index, c_dsp_p);
        r.CheckErr(result);
        dsp._dsp = c_dsp_p.deref();
        return result;
      }
      this.addDSP = function(index, dsp) {
        return r.CheckErr(l.FMOD_Channel_AddDSP(this._channel, index, dsp._dsp));
      }
      this.removeDSP = function(dsp) {
        return r.CheckErr(l.FMOD_Channel_RemoveDSP(this._channel, dsp._dsp));
      }
      this.setDSPIndex = function(dsp, index) {
        return r.CheckErr(l.FMOD_Channel_SetDSPIndex(this._channel, dsp._dsp, index));
      }
      this.getDSPIndex = function(dsp, index) {
        return r.CheckErr(l.FMOD_Channel_GetDSPIndex(this._channel, dsp._dsp, index));
      }
      this.setChannelGroup = function(channelgroup) {
        return r.CheckErr(l.FMOD_Channel_SetChannelGroup(this._channel, channelgroup._channelgroup));
      }
      this.getChannelGroup = function(channelgroup) {
        const c_channelgroup_p = ref.alloc('void*').ref();
        const result = l.FMOD_Channel_GetChannelGroup(this._channel, c_channelgroup_p);
        r.CheckErr(result);
        channelgroup._channelgroup = c_channelgroup_p.deref();
        return result;
      }
    }
  }
  r.ChannelGroup = class ChannelGroup {
    constructor() {
      this._channelgroup = null;
      Object.entries(api.functions).forEach(([key, value]) => {
        if (!key.startsWith('FMOD_ChannelGroup_'))
          return;
        this[key[18].toLowerCase() + key.slice(19)] = function(...data) {
          return r.CheckErr(l[key](this._channelgroup, ...data));
        }
      });
      this.getSystemObject = function(system) {
        return r.CheckErr(l.FMOD_ChannelGroup_GetSystemObject(this._channelgroup, system._system));
      }
      this.getDSP = function(index, dsp) {
        const c_dsp_p = ref.alloc('void*').ref();
        const result = l.FMOD_ChannelGroup_GetDSP(this._channel, index, c_dsp_p);
        r.CheckErr(result);
        dsp._dsp = c_dsp_p.deref();
        return result;
      }
      this.addDSP = function(index, dsp) {
        return r.CheckErr(l.FMOD_ChannelGroup_AddDSP(this._channelgroup, index, dsp._dsp));
      }
      this.removeDSP = function(dsp) {
        return r.CheckErr(l.FMOD_ChannelGroup_RemoveDSP(this._channelgroup, dsp._dsp));
      }
      this.setDSPIndex = function(dsp, index) {
        return r.CheckErr(l.FMOD_ChannelGroup_SetDSPIndex(this._channelgroup, dsp._dsp, index));
      }
      this.getDSPIndex = function(dsp, index) {
        return r.CheckErr(l.FMOD_ChannelGroup_GetDSPIndex(this._channelgroup, dsp._dsp, index));
      }
      this.addGroup = function(group, propagatedspclock, connection) {
        return r.CheckErr(l.FMOD_ChannelGroup_AddGroup(this._channelgroup, group._channelgroup, propagatedspclock, connection));
      }
      this.getGroup = function(index, group) {
        const c_channelgroup_p = ref.alloc('void*').ref();
        const result = l.FMOD_ChannelGroup_GetGroup(this._channelgroup, index, c_channelgroup_p);
        r.CheckErr(result);
        group._channelgroup = c_channelgroup_p.deref();
        return result;
      }
      this.getParentGroup = function(group) {
        const c_channelgroup_p = ref.alloc('void*').ref();
        const result = l.FMOD_ChannelGroup_GetParentGroup(this._channelgroup, c_channelgroup_p);
        r.CheckErr(result);
        group._channelgroup = c_channelgroup_p.deref();
        return result;
      }
      this.getChannel = function(index, channel) {
        const c_channel_p = ref.alloc('void*').ref();
        const result = l.FMOD_ChannelGroup_GetChannel(this._channelgroup, index, c_channel_p);
        r.CheckErr(result);
        channel._channel = c_channel_p.deref();
        return result;
      }
    }
  }
  r.SoundGroup = class SoundGroup {
    constructor() {
      this._soundgroup = null;
      Object.entries(api.functions).forEach(([key, value]) => {
        if (!key.startsWith('FMOD_SoundGroup_'))
          return;
        this[key[16].toLowerCase() + key.slice(17)] = function(...data) {
          return r.CheckErr(l[key](this._soundgroup, ...data));
        }
      });
      this.getSystemObject = function(system) {
        return r.CheckErr(l.FMOD_SoundGroup_GetSystemObject(this._soundgroup, system._system));
      }
    }
  }
  r.DSP = class DSP {
    constructor() {
      this._dsp = null;
      Object.entries(api.functions).forEach(([key, value]) => {
        if (!key.startsWith('FMOD_DSP_'))
          return;
        this[key[9].toLowerCase() + key.slice(10)] = function(...data) {
          return r.CheckErr(l[key](this._dsp, ...data));
        }
      });
      this.getSystemObject = function(system) {
        return r.CheckErr(l.FMOD_DSP_GetSystemObject(this._dsp, system._system));
      }
      this.addInput = function(input, connection, type) {
        return r.CheckErr(l.FMOD_DSP_AddInput(this._dsp, input._dsp, connection._dspconnection, type));
      }
      this.disconnectFrom = function(target, connection) {
        return r.CheckErr(l.FMOD_DSP_DisconnectFrom(this._dsp, target._dsp, connection._dspconnection));
      }
      this.getInput = function(index, input, inputconnection) {
        const c_dspconnection_p = ref.alloc('void*').ref();
        const c_dsp_p = ref.alloc('void*').ref();
        const result = l.FMOD_DSP_GetInput(this._dsp, index, c_dsp_p, inputconnection);
        r.CheckErr(result);
        inputconnection._dspconnection = c_dspconnection_p.deref();
        inputconnection._dsp = c_dsp_p.deref();
        return result;
      }
      this.getOutput = function(index, input, outputconnection) {
        const c_dspconnection_p = ref.alloc('void*').ref();
        const c_dsp_p = ref.alloc('void*').ref();
        const result = l.FMOD_DSP_GetOutput(this._dsp, index, c_dsp_p, outputconnection);
        r.CheckErr(result);
        outputconnection._dspconnection = c_dspconnection_p.deref();
        outputconnection._dsp = c_dsp_p.deref();
        return result;
      }
    }
  }
  r.Geometry = class Geometry {
    constructor() {
      this._geometry = null;
      Object.entries(api.functions).forEach(([key, value]) => {
        if (!key.startsWith('FMOD_Geometry_'))
          return;
        this[key[14].toLowerCase() + key.slice(15)] = function(...data) {
          return r.CheckErr(l[key](this._geometry, ...data));
        }
      });
    }
  }
  r.Reverb3D = class Reverb3D {
    constructor() {
      this._reverb = null;
      Object.entries(api.functions).forEach(([key, value]) => {
        if (!key.startsWith('FMOD_Reverb3D_'))
          return;
        this[key[14].toLowerCase() + key.slice(15)] = function(...data) {
          return r.CheckErr(l[key](this._reverb3d, ...data));
        }
      });
    }
  }

  return r;
}
