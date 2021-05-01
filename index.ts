import { DroneConsole } from './src/drone-console';
import { DroneEvents, DroneEventType } from './src/drone-events';
import { DroneIO } from './src/drone-io';
import { DroneState } from './src/drone-state';
new DroneConsole();

// const drone = new Drone({
//   host: '192.168.10.1',
//   ioPort: 8889,
//   statePort: 8890,
//   videoPort: 11111,
// });

// drone.on();

// export class Drone {
//   private _droneIO: DroneIO;
//   private _droneVideo: DroneState;
//   private _events = new DroneEvents();

//   constructor(options = INITIAL_PARAMS) {
//     this._droneIO = new DroneIO(options.host, options.ioPort, this._events);
//     this._droneState = new DroneState(options.host, options.statePort, this._events);
//     this._droneVideo = new DroneVideo(options.host, options.videoPort, this._events);
//   }
// }
