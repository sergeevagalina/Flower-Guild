import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const flowers = [
      {
        id: 0,
        name: 'Гибискус',
        image: '/assets/images/hibiscus.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas id orci ac elementum. Sed quis ante tortor.',
        advices: [
          {
            advice: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet felis nec ligula fermentum consequat quis ac ipsum. Quisque purus tellus, viverra quis leo ac, dictum condimentum ligula. Aliquam molestie in mi quis interdum.',
            author: 'Author 1',
            date: '2012-10-16T17:57:28.556094Z'
          },
          {
            advice: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet felis nec ligula fermentum consequat quis ac ipsum. Quisque purus tellus, viverra quis leo ac, dictum condimentum ligula. Aliquam molestie in mi quis interdum.',
            author: 'Author 2',
            date: '2014-09-05T17:57:28.556094Z'
          }
        ]
      },
      {
        id: 1,
        name: 'Кактус',
        image: '/assets/images/cactus.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas id orci ac elementum. Sed quis ante tortor.',
        advices: [
          {
            advice: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet felis nec ligula fermentum consequat quis ac ipsum. Quisque purus tellus, viverra quis leo ac, dictum condimentum ligula. Aliquam molestie in mi quis interdum.',
            author: 'Author 3',
            date: '2013-03-16T17:57:28.556094Z'
          },
          {
            advice: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet felis nec ligula fermentum consequat quis ac ipsum. Quisque purus tellus, viverra quis leo ac, dictum condimentum ligula. Aliquam molestie in mi quis interdum.',
            author: 'Author 4',
            date: '2016-07-05T17:57:28.556094Z'
          }
        ]
      },
      {
        id: 2,
        name: 'Спатифиллум',
        image: '/assets/images/spathiphyllum.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas id orci ac elementum. Sed quis ante tortor.',
        advices: [
          {
            advice: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet felis nec ligula fermentum consequat quis ac ipsum. Quisque purus tellus, viverra quis leo ac, dictum condimentum ligula. Aliquam molestie in mi quis interdum.',
            author: 'Author 5',
            date: '2013-03-16T17:57:28.556094Z'
          },
          {
            advice: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet felis nec ligula fermentum consequat quis ac ipsum. Quisque purus tellus, viverra quis leo ac, dictum condimentum ligula. Aliquam molestie in mi quis interdum.',
            author: 'Author 6',
            date: '2016-07-05T17:57:28.556094Z'
          }
        ]
      },
      {
        id: 3,
        name: 'Герань',
        image: '/assets/images/geranium.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas id orci ac elementum. Sed quis ante tortor.',
        advices: [
          {
            advice: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet felis nec ligula fermentum consequat quis ac ipsum. Quisque purus tellus, viverra quis leo ac, dictum condimentum ligula. Aliquam molestie in mi quis interdum.',
            author: 'Author 5',
            date: '2013-03-16T17:57:28.556094Z'
          },
          {
            advice: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet felis nec ligula fermentum consequat quis ac ipsum. Quisque purus tellus, viverra quis leo ac, dictum condimentum ligula. Aliquam molestie in mi quis interdum.',
            author: 'Author 6',
            date: '2016-07-05T17:57:28.556094Z'
          }
        ]
      },
      {
        id: 4,
        name: 'Гортензия',
        image: '/assets/images/hydrangea.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas id orci ac elementum. Sed quis ante tortor.',
        advices: [
          {
            advice: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet felis nec ligula fermentum consequat quis ac ipsum. Quisque purus tellus, viverra quis leo ac, dictum condimentum ligula. Aliquam molestie in mi quis interdum.',
            author: 'Author 5',
            date: '2013-03-16T17:57:28.556094Z'
          },
          {
            advice: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet felis nec ligula fermentum consequat quis ac ipsum. Quisque purus tellus, viverra quis leo ac, dictum condimentum ligula. Aliquam molestie in mi quis interdum.',
            author: 'Author 6',
            date: '2016-07-05T17:57:28.556094Z'
          }
        ]
      },
      {
        id: 5,
        name: 'Суккуленты',
        image: '/assets/images/succulent.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas id orci ac elementum. Sed quis ante tortor.',
        advices: [
          {
            advice: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet felis nec ligula fermentum consequat quis ac ipsum.',
            author: 'Author 5',
            date: '2013-03-16T17:57:28.556094Z'
          },
          {
            advice: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet felis nec ligula fermentum consequat quis ac ipsum.',
            author: 'Author 6',
            date: '2016-07-05T17:57:28.556094Z'
          }
        ]
      }
    ];
    const articles = [
      {
        id: 0,
        name: 'Спатифиллум',
        title: 'Спатифиллум: почему сохнут кончики листьев',
        image: '/assets/images/spathiphyllum.jpg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor.',
        imageIds: [1, 2, 3],
        source: 'ya.ru',
        date: '2014-09-05T17:57:28.556094Z'
      },
      {
        id: 1,
        name: 'Гортензия',
        title: 'Гортензия: как изменить окрас соцветий',
        image: '/assets/images/hydrangea.jpg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor.',
        imageIds: [1, 2, 3],
        source: 'ya.ru',
        date: '2014-09-05T17:57:28.556094Z'
      },
      {
        id: 2,
        name: 'Суккуленты',
        title: 'Cуккуленты: многообразие видов',
        image: '/assets/images/succulent.jpg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, finibus sit amet efficitur sed, aliquam in tortor.',
        imageIds: [1, 2, 3],
        source: 'ya.ru',
        date: '2014-09-05T17:57:28.556094Z'
      }
    ];
    return { flowers, articles };
  }

}
