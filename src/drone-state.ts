import { DRONE_STATE_PORT } from './constants';
import { DroneEvents } from './drone-events';
import { UdpSocket } from './udp-socket';

export class DroneState {
  private _socket: UdpSocket;

  constructor(private readonly _events: DroneEvents) {
    this._socket = new UdpSocket(DRONE_STATE_PORT);
    this.addSocketEvents();
  }

  private addSocketEvents() {
    this._socket.addSocketListener('error', this.onSocketError.bind(this));
    this._socket.addSocketListener('message', this.onSocketSocketMsg.bind(this));
  }

  private onSocketError(err: Error) {
    this._events.emit('error', { msg: err.message, port: DRONE_STATE_PORT });
    console.log(`Error: ${err.message}`);

    this._socket.close();
  }

  private onSocketSocketMsg(msg: Buffer) {
    console.log(`State: ${msg}`);
    this._events.emit('state', { msg, port: DRONE_STATE_PORT });
  }
}
