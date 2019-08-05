import { EventEmitter } from '@angular/core';

class NotificationService {
  notifier = new EventEmitter<string>();
  notify(message: string) {
    this.notifier.emit(message);
  }
}

export { NotificationService };
