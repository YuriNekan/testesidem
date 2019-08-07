import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {
  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController) {
      let tasksJson = localStorage.getItem('tasksDB');
      if (tasksJson != null) {
        this.tasks = JSON.parse(tasksJson);
      }
     }

  tasks: any = [];

  ngOnInit() {
  }
  async showadd() {
    const alert = await this.alertCtrl.create({
      header: 'Adicionar uma tarefa:',
      inputs: [
      {
        name: 'tasktodo',
        type: 'text',
        placeholder: 'Comprar ovos'
      }
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Clicou em cancelar');
        }
      },
      {
        text: 'Adicionar',
        handler: (form) => {
          this.add(form.tasktodo);
        }
      }
    ]
  });
    await alert.present();
}

  async add(tasktodo: string) {
    if (tasktodo.trim().length < 1) {
      const toast = await this.toastCtrl.create({
        message: 'Informe o que deseja adicionar!',
        duration: 2000,
        position: 'top'
      });
      toast.present();
      return;
    }

    // tslint:disable-next-line:prefer-const
    let task = {name: tasktodo, done: false};
    this.tasks.push(task);
    this.updateLocalStorage();

  }

  async openActions(task: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{
        text: task.done ? 'Desmarcar' : 'Marcar como concluída',
        icon: task.done ? '' : '',
        handler: () => {
          task.done = !task.done;
          this.updateLocalStorage();
        }
      },
      {
        text: 'Cancelar',
        icon: '',
        role: 'cancel',
        handler: () => {
          console.log('clicou em cancelar');
        }
      }]
    });
    await actionSheet.present();
  }
  updateLocalStorage() {
    localStorage.setItem('tasksDB', JSON.stringify(this.tasks));
  }
  delete(task: any) {
    this.tasks = this.tasks.filter(taskArray => task !== taskArray);

    this.updateLocalStorage();
  }
}
