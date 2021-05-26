import fs from 'fs';

class EventLog {
  path: string;
  options: Record<string, any>

  constructor(path: string, options: Record<string, any>) {
    this.path = path;
    this.options = options;
  }
  write(content: string) {
    fs.appendFile(this.path, content + '\n', () => {})
  }
}

const logger = new EventLog('log.txt', {})

export default logger
