export class Status {
  public _success: boolean;
  public _message: string | null;

  constructor(success: boolean, message: string | null) {
    this._message = message;
    this._success = success;
  }
}

export class Correct extends Status {
  constructor() {
    super(true, null);
  }
}

export class Wrong extends Status {
  constructor(message: string) {
    super(false, message);
  }
}
