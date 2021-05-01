import { EventEmitter } from 'events';

export type DroneEventType = 'command' | 'response' | 'state' | 'connection' | 'error';
export type DroneEventCallback = ({ msg, port }) => void;

export class DroneEvents {
  private _events = new EventEmitter();

  constructor() {}

  on(e: DroneEventType, cb: DroneEventCallback): EventEmitter {
    return this._events.on(e, cb);
  }

  off(e: DroneEventType, cb: DroneEventCallback): EventEmitter {
    return this._events.off(e, cb);
  }

  emit(e: DroneEventType, emitValue: any): boolean {
    return this._events.emit(e, emitValue);
  }
}
