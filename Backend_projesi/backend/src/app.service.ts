import { Injectable } from '@nestjs/common';
import { createClient } from 'redis';
@Injectable()

export class AppService {
  async control(number): Promise<string> {
    const client = await createClient({
      url: 'redis://127.0.0.1:6379'
    });
    await client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();

    for await (const key of client.scanIterator()) {
      if (key.includes(number)) {
        return await client.get(key)
      }
    }
  
  }
}
