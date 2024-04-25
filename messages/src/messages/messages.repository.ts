import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'node:fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    const id =
      Object.keys(messages).length == 0 ? 1 : Object.keys(messages).length + 1;

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages, null, 2));

    console.log('message in repo', messages);

    return messages[id];
  }
}
