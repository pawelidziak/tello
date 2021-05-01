import { DroneEvents, DroneEventType } from './drone-events';
import { UdpSocket } from './udp-socket';

const DRONE_HOST = '192.168.10.1';
const DRONE_IO_PORT = 8889;

export class DroneIO {
  private _socket: UdpSocket;

  constructor(private readonly _events: DroneEvents) {
    this._socket = new UdpSocket(DRONE_IO_PORT, DRONE_HOST);
    this.addSocketEvents();
  }

  private addSocketEvents() {
    this._socket.addSocketListener('error', this.onSocketError.bind(this));
    this._socket.addSocketListener('message', this.onSocketSocketMsg.bind(this));
  }

  private onSocketError(err: Error) {
    this._events.emit('error', { msg: err.message, port: DRONE_IO_PORT });
    this._socket.close();
  }

  private onSocketSocketMsg(msg: Buffer) {
    this._events.emit('response', { msg, port: DRONE_IO_PORT });
  }

  send(command: string) {
    this._socket?.send(command);
    this._events.emit('command', { msg: command, port: DRONE_IO_PORT });
  }
}
