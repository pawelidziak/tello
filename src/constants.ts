import { SocketOptions } from 'dgram';

export const DRONE_HOST = '192.168.10.1';
export const DRONE_IO_PORT = 8889;
export const DRONE_STATE_PORT = 8890;
export const DEFAULT_SOCKET_OPTIONS: SocketOptions = {
  type: 'udp4',
};

export enum ModeCommands {
  command = 'command',
  takeoff = 'takeoff',
  land = 'land',
  streamon = 'streamon',
  streamoff = 'streamoff',
  emergency = 'emergency',
}

export enum RotateCommands {
  cw = 'cw',
  ccw = 'ccw',
}

export enum FlipCommands {
  flipL = 'flip l',
  flipR = 'flip r',
  flipF = 'flip f',
  flipB = 'flip b',
}

export enum FlyCommands {
  up = 'up',
  down = 'down',
  left = 'left',
  right = 'right',
  forward = 'forward',
  back = 'back',
}

// go = 'go',
// curve = 'curve',

export enum SetCommands {
  speed = 'speed',
  rc = 'rc',
  wifi = 'wifi',
}

export enum ReadCommands {
  speed = 'speed?',
  battery = 'battery?',
  time = 'time?',
  height = 'height?',
  temp = 'temp?',
  attitude = 'attitude?',
  baro = 'baro?',
  acceleration = 'acceleration?',
  tof = 'tof?',
  wifi = 'wifi?',
}

export const COMMAND_DELAYS = new Map([
  ['command', 500],
  ['takeoff', 5000],
  ['land', 5000],
  ['up', 7000],
  ['down', 7000],
  ['left', 5000],
  ['go', 7000],
  ['right', 5000],
  ['forward', 5000],
  ['back', 5000],
  ['cw', 5000],
  ['ccw', 5000],
  ['flip', 3000],
  ['speed', 3000],
  ['battery?', 500],
  ['speed?', 500],
  ['time?', 500],
]);
