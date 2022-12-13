
import { Command, Console } from 'nestjs-console';

export const sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  
export const timeOut = async (fn: any, time: number) => {
    await fn();
    await sleep(time);
    await timeOut(fn, time);
};


@Console()
export class CrawlerConsole {
  @Command({
    command: 'crawl',
    description: 'Crawler Test ',
  })
  async startCrawler() {
    await timeOut(()=> {
        console.log("Crawler at: " + new Date())
    }, 3000)
  }

}
