import { Component, inject, signal } from '@angular/core';
import { Message } from '../../models/message';
import { ChatBotService } from '../../services/chat-bot-service';

@Component({
  selector: 'app-chat-bot',
  standalone: false,
  templateUrl: './chat-bot.html',
  styleUrl: './chat-bot.css',
})
export class ChatBot {

  private chatBotService = inject(ChatBotService);

  prompt = signal('');
  messageList = signal<Message[]>([]);

  onSubmit() {
    this.messageList.update((list => [...list, {role: "user", "content": this.prompt()}]))
    this.prompt.set('');
    this.chatBotService.postMessage(this.messageList()).subscribe({
      next: (response) => {
        this.messageList.update((list => [...list, response]))
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
