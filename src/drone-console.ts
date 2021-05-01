import { createInterface } from 'readline';
import { DroneEvents } from './drone-events';
import { DroneState } from './drone-state';
import { DroneIO } from './drone-io';

const CONSOLE_HEADER = `
     ###################################
     ###                             ###
     ###     Tello COPTER Console    ###
     ###                             ###
     ###################################
    `;

export class DroneConsole {
  private _rl = createInterface(process.stdin, process.stdout);
  private _events = new DroneEvents();

  private _drone: DroneIO;
  private _droneState: DroneState;

  constructor() {
    this._drone = new DroneIO(this._events);
    this._droneState = new DroneState(this._events);
    this.listenOnDroneEvents();

    console.log(CONSOLE_HEADER);
    this._rl.on('line', this.onReadLine.bind(this)).on('close', this.onClose);
  }

  private onReadLine(input: string) {
    const command = input.trim();
    command === 'quit' ? this._rl.close() : this._drone.send(command);
  }

  private onClose() {
    console.log('Enough flying for today!');
    process.exit(0);
  }

  private listenOnDroneEvents() {
    this._events
      .on('response', ({ msg, port }) => console.log(`< [:${port}] Recievied response: ${msg}`))
      .on('connection', ({ msg, port }) => console.log(`< [:${port}] Connection: ${msg}`))
      .on('command', ({ msg, port }) => console.log(`> [:${port}] Sent command: ${msg}`))
      .on('state', ({ msg, port }) => console.log(`< [:${port}] State: ${msg}`))
      .on('error', ({ msg, port }) => console.log(`< [:${port}] Error: ${msg}`));
  }
}
