import { Injectable } from '@angular/core';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';

@Injectable({
  providedIn: 'root'
})
export class PnotifyService {

constructor() { }

  // getPNotify() {
  //   PNotifyButtons; // Initiate the module. Important!
  //   return PNotify;
  // }

  success(messageTitle: string, messageBody: string) {
    return PNotify.success({
        title: messageTitle,
        text: messageBody,
        styling: 'bootstrap3',
        icons: 'fontawesome4',
        delay: 3000,
      });
  }

  info(messageTitle: string, messageBody: string) {
    return PNotify.info({
        title: messageTitle,
        text: messageBody,
        styling: 'bootstrap3',
        icons: 'fontawesome4',
        delay: 3000,
      });
  }

  error(messageTitle: string, messageBody: string) {
    return PNotify.error({
        title: messageTitle,
        text: messageBody,
        styling: 'bootstrap3',
        icons: 'fontawesome4',
        delay: 3000,
      });
  }

// PNotify.alert({
//   text: "I'm an alert.",
//   type: 'notice'
// });

// // Automatically set the type.
// PNotify.notice({
//   text: "I'm a notice."
// });
// PNotify.info({
//   text: "I'm an info message."
// });
// PNotify.success({
//   text: "I'm a success message."
// });
// PNotify.error({
//   text: "I'm an error message."
// });

}
