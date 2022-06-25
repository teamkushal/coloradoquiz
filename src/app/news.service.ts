import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private myBehaviorSubject: BehaviorSubject<News>;
  public myObservable$: Observable<News>;

  baseUrl = '/assets/news';

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {
    this.myBehaviorSubject = new BehaviorSubject<News>(this.createDummyNews());
    this.myObservable$ = this.myBehaviorSubject as Observable<News>;
  }

  createDummyNews(): News {
    return {
      title: 'Top stories',
      dateCreated: '2021-02-13T18:19:20.212Z',
      newsItems: [
        {
          id: 1,
          title: 'First story',
          thumbnail: '/assets/icons/icon-96x96.png',
          poster: '/assets/icons/icon-512x512.png',
          posterAltText: 'Angular logo',
          summary: 'This is the first news story',
          fullText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat nunc, eleifend sed faucibus in, mollis in arcu. Vivamus non orci mi. Vivamus finibus dolor lorem, elementum hendrerit velit elementum vitae. Suspendisse potenti. Fusce lorem lacus, vestibulum non ante quis, ornare hendrerit ex. In quis euismod odio. Fusce nec porttitor tellus, eget aliquam dui. Maecenas interdum, nibh sit amet feugiat pulvinar, augue erat gravida quam, nec laoreet erat felis elementum turpis. Suspendisse efficitur nunc nec dolor fermentum, nec elementum enim aliquam. Etiam rutrum laoreet nunc, quis vehicula odio interdum ac. Integer ac nisi cursus leo commodo hendrerit eu quis metus.',
            'In varius libero purus, et molestie quam ultrices id. Ut et purus malesuada, pharetra lectus at, lacinia metus. Nullam ut ornare turpis. Morbi id nisl varius, luctus erat id, vulputate felis. Suspendisse rhoncus consectetur dolor, id ultricies turpis elementum eget. Aliquam erat volutpat. Phasellus ultrices enim ut felis vestibulum efficitur. Donec convallis nulla quis rhoncus convallis. Aenean tempor ultricies ante, sit amet faucibus mi pharetra id. Quisque quis velit non velit finibus congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus sem vitae lacus rutrum, in facilisis dui pharetra. Donec finibus lacus mattis diam vulputate, nec gravida nulla iaculis. Pellentesque posuere aliquam ullamcorper. Praesent orci dolor, malesuada eget velit hendrerit, vehicula commodo ex.',
            'Nulla facilisi. Vivamus sed dui sit amet nisi fermentum viverra eget eu neque. Ut elementum at mauris eu iaculis. Donec vitae quam et leo suscipit facilisis ac ut lacus. Etiam mollis libero vitae erat rhoncus pulvinar. Donec vel dui mollis, tristique felis non, dapibus augue. Ut et felis lobortis leo pretium ullamcorper. Integer non laoreet orci. Nulla in imperdiet ipsum, vitae finibus mi. Aliquam vel pharetra neque.',
            'Duis vitae egestas nibh. Sed convallis dictum placerat. Vivamus tincidunt consequat nisl, porta vestibulum sem iaculis tincidunt. Fusce et vehicula metus. Aliquam enim orci, dapibus sed eros sit amet, volutpat fringilla leo. Etiam posuere feugiat venenatis. Donec fringilla justo eu quam aliquet volutpat. Pellentesque sed bibendum diam, eu convallis neque.',
            'Sed sodales arcu felis, ut sollicitudin libero consectetur ac. Nulla gravida est a euismod tincidunt. Nam massa est, facilisis quis nisl ac, pellentesque cursus felis. Morbi et nunc imperdiet urna ultrices viverra vitae sed felis. Phasellus vitae sollicitudin nunc, quis mollis mi. Sed a metus mollis, sollicitudin purus vel, tristique quam. Donec blandit libero tellus, vel porta dui laoreet vitae. Duis iaculis finibus mi vel ornare. Pellentesque lacinia massa eu augue commodo consequat. Aenean sit amet convallis magna. Morbi convallis est sit amet sapien scelerisque vehicula. Vestibulum vestibulum quam id sem porttitor semper. Mauris vel dolor massa.'
          ]
        },
        {
          id: 2,
          title: 'Second story',
          thumbnail: '/assets/icons/icon-96x96.png',
          poster: '/assets/icons/icon-512x512.png',
          posterAltText: 'Angular logo',
          summary: 'This is the second news story',
          fullText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat nunc, eleifend sed faucibus in, mollis in arcu. Vivamus non orci mi. Vivamus finibus dolor lorem, elementum hendrerit velit elementum vitae. Suspendisse potenti. Fusce lorem lacus, vestibulum non ante quis, ornare hendrerit ex. In quis euismod odio. Fusce nec porttitor tellus, eget aliquam dui. Maecenas interdum, nibh sit amet feugiat pulvinar, augue erat gravida quam, nec laoreet erat felis elementum turpis. Suspendisse efficitur nunc nec dolor fermentum, nec elementum enim aliquam. Etiam rutrum laoreet nunc, quis vehicula odio interdum ac. Integer ac nisi cursus leo commodo hendrerit eu quis metus.',
            'In varius libero purus, et molestie quam ultrices id. Ut et purus malesuada, pharetra lectus at, lacinia metus. Nullam ut ornare turpis. Morbi id nisl varius, luctus erat id, vulputate felis. Suspendisse rhoncus consectetur dolor, id ultricies turpis elementum eget. Aliquam erat volutpat. Phasellus ultrices enim ut felis vestibulum efficitur. Donec convallis nulla quis rhoncus convallis. Aenean tempor ultricies ante, sit amet faucibus mi pharetra id. Quisque quis velit non velit finibus congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus sem vitae lacus rutrum, in facilisis dui pharetra. Donec finibus lacus mattis diam vulputate, nec gravida nulla iaculis. Pellentesque posuere aliquam ullamcorper. Praesent orci dolor, malesuada eget velit hendrerit, vehicula commodo ex.',
            'Nulla facilisi. Vivamus sed dui sit amet nisi fermentum viverra eget eu neque. Ut elementum at mauris eu iaculis. Donec vitae quam et leo suscipit facilisis ac ut lacus. Etiam mollis libero vitae erat rhoncus pulvinar. Donec vel dui mollis, tristique felis non, dapibus augue. Ut et felis lobortis leo pretium ullamcorper. Integer non laoreet orci. Nulla in imperdiet ipsum, vitae finibus mi. Aliquam vel pharetra neque.',
            'Duis vitae egestas nibh. Sed convallis dictum placerat. Vivamus tincidunt consequat nisl, porta vestibulum sem iaculis tincidunt. Fusce et vehicula metus. Aliquam enim orci, dapibus sed eros sit amet, volutpat fringilla leo. Etiam posuere feugiat venenatis. Donec fringilla justo eu quam aliquet volutpat. Pellentesque sed bibendum diam, eu convallis neque.',
            'Sed sodales arcu felis, ut sollicitudin libero consectetur ac. Nulla gravida est a euismod tincidunt. Nam massa est, facilisis quis nisl ac, pellentesque cursus felis. Morbi et nunc imperdiet urna ultrices viverra vitae sed felis. Phasellus vitae sollicitudin nunc, quis mollis mi. Sed a metus mollis, sollicitudin purus vel, tristique quam. Donec blandit libero tellus, vel porta dui laoreet vitae. Duis iaculis finibus mi vel ornare. Pellentesque lacinia massa eu augue commodo consequat. Aenean sit amet convallis magna. Morbi convallis est sit amet sapien scelerisque vehicula. Vestibulum vestibulum quam id sem porttitor semper. Mauris vel dolor massa.'
          ]
        },
        {
          id: 3,
          title: 'Third story',
          thumbnail: '/assets/icons/icon-96x96.png',
          poster: '/assets/icons/icon-512x512.png',
          posterAltText: 'Angular logo',
          summary: 'This is the third news story',
          fullText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat nunc, eleifend sed faucibus in, mollis in arcu. Vivamus non orci mi. Vivamus finibus dolor lorem, elementum hendrerit velit elementum vitae. Suspendisse potenti. Fusce lorem lacus, vestibulum non ante quis, ornare hendrerit ex. In quis euismod odio. Fusce nec porttitor tellus, eget aliquam dui. Maecenas interdum, nibh sit amet feugiat pulvinar, augue erat gravida quam, nec laoreet erat felis elementum turpis. Suspendisse efficitur nunc nec dolor fermentum, nec elementum enim aliquam. Etiam rutrum laoreet nunc, quis vehicula odio interdum ac. Integer ac nisi cursus leo commodo hendrerit eu quis metus.',
            'In varius libero purus, et molestie quam ultrices id. Ut et purus malesuada, pharetra lectus at, lacinia metus. Nullam ut ornare turpis. Morbi id nisl varius, luctus erat id, vulputate felis. Suspendisse rhoncus consectetur dolor, id ultricies turpis elementum eget. Aliquam erat volutpat. Phasellus ultrices enim ut felis vestibulum efficitur. Donec convallis nulla quis rhoncus convallis. Aenean tempor ultricies ante, sit amet faucibus mi pharetra id. Quisque quis velit non velit finibus congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus sem vitae lacus rutrum, in facilisis dui pharetra. Donec finibus lacus mattis diam vulputate, nec gravida nulla iaculis. Pellentesque posuere aliquam ullamcorper. Praesent orci dolor, malesuada eget velit hendrerit, vehicula commodo ex.',
            'Nulla facilisi. Vivamus sed dui sit amet nisi fermentum viverra eget eu neque. Ut elementum at mauris eu iaculis. Donec vitae quam et leo suscipit facilisis ac ut lacus. Etiam mollis libero vitae erat rhoncus pulvinar. Donec vel dui mollis, tristique felis non, dapibus augue. Ut et felis lobortis leo pretium ullamcorper. Integer non laoreet orci. Nulla in imperdiet ipsum, vitae finibus mi. Aliquam vel pharetra neque.',
            'Duis vitae egestas nibh. Sed convallis dictum placerat. Vivamus tincidunt consequat nisl, porta vestibulum sem iaculis tincidunt. Fusce et vehicula metus. Aliquam enim orci, dapibus sed eros sit amet, volutpat fringilla leo. Etiam posuere feugiat venenatis. Donec fringilla justo eu quam aliquet volutpat. Pellentesque sed bibendum diam, eu convallis neque.',
            'Sed sodales arcu felis, ut sollicitudin libero consectetur ac. Nulla gravida est a euismod tincidunt. Nam massa est, facilisis quis nisl ac, pellentesque cursus felis. Morbi et nunc imperdiet urna ultrices viverra vitae sed felis. Phasellus vitae sollicitudin nunc, quis mollis mi. Sed a metus mollis, sollicitudin purus vel, tristique quam. Donec blandit libero tellus, vel porta dui laoreet vitae. Duis iaculis finibus mi vel ornare. Pellentesque lacinia massa eu augue commodo consequat. Aenean sit amet convallis magna. Morbi convallis est sit amet sapien scelerisque vehicula. Vestibulum vestibulum quam id sem porttitor semper. Mauris vel dolor massa.'
          ]
        }
      ]
    };
  }

  getNews(subject: string = `top-stories`, baseUrl: string = this.baseUrl): void {
    const myObservable = this.http.get(`${baseUrl}/${subject}.json`) as Observable<News>;
    myObservable.subscribe((response: News) => {
      this.myBehaviorSubject.next(response);
    });
  }
}
