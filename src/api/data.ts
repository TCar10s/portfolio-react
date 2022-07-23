import {
  Developer,
  Experience,
  Hobbie,
  ProjectProps
} from '../utils/interfaces/card.interface'
import DevImage from '../assets/images/carlos_lobo.webp'
import Wposs from '../assets/images/wposs.webp'
import Seti from '../assets/images/seti.jpg'
import Coding from '../assets/images/coding.webp'
import Chess from '../assets/images/chess.webp'
import Rubik from '../assets/images/rubik.webp'

import Hospedaje from '../assets/images/hospedaje-mirador.webp'
import Consultant from '../assets/images/interiorConsultantThumbnail.webp'
import Films from '../assets/images/films-app.webp'
import Team from '../assets/images/my-team-page.webp'
import Blackjack from '../assets/images/game-blackjack.webp'
import Todo from '../assets/images/todo-list.webp'

export const developer: Developer = {
  name: 'Carlos Lobo',
  role: 'Front-end developer',
  email: 'cslobosilva@gmail.com',
  phone: '(+57) 3245720920',
  image: DevImage,
  description:
    'I am a Front-end developer with a passion for creating beautiful and functional web applications. I have a strong background in web development and have worked with a variety of technologies, including HTML, CSS, JavaScript, Angular, and Node.js.',
}

export const skillsDev = [
  {
    name: 'Angular',
    level: '85',
  },
  {
    name: 'JavaScript',
    level: '80',
  },
  {
    name: 'TypeScript',
    level: '70',
  },
  {
    name: 'HTML',
    level: '100',
  },
  {
    name: 'CSS',
    level: '80',
  },
  {
    name: 'RxJS',
    level: '70',
  },
]

export const experiencesDev: Experience[] = [
  {
    company: 'WPOSS',
    position: 'Front-end developer',
    time: 'November 2020 - February 2022',
    description:
      'Development of single page applications (SPAs) using Angular and implementing best practices.',
    logo: Wposs,
  },
  {
    company: 'SETI',
    position: 'Full-Stack JavaScript developer',
    time: 'May 2022 - Present',
    description:
      'Single Page Application Development (SPA) with Angular and microservices development with Node.js/Express.',
    logo: Seti,
  },
]

export const hobbiesDev: Hobbie[] = [
  {
    name: 'Coding',
    description:
      'I love to code and learn new technologies. I am always looking for new challenges.',
    image: Coding,
  },
  {
    name: 'Chess',
    description: 'I love playing chess and learning new techniques.',
    image: Chess,
  },
  {
    name: 'Rubik',
    description: "I love playing Rubik's cube and learning new techniques.",
    image: Rubik,
  },
  // {
  //   name: 'Gaming',
  //   description: 'I love playing video games and learning new techniques.',
  //   image: '../../assets/images/gaming.webp',
  // }
]

export const certificatesDev: any[] = [
  {
    name: 'Angular (Intermediate)',
    description:
      'Has successfully cleared the asserssment for the skill in Angular.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png',
    expedition: 'January 2022',
    link: 'https://www.hackerrank.com/certificates/92ecaf53a18c',
  },
  {
    name: 'Angular (Basic)',
    description:
      'Has successfully cleared the asserssment for the skill in Angular basic.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png',
    expedition: 'January 2022',
    link: 'https://www.hackerrank.com/certificates/16e5c8924fed',
  },
  {
    name: 'JavaScript (Basic)',
    description:
      'Has successfully cleared the asserssment for the skill in JavaScript.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png',
    expedition: 'January 2022',
    link: 'https://www.hackerrank.com/certificates/29e7c14e7bc0',
  },
  {
    name: 'CSS Certificate',
    description:
      'Has successfully cleared the asserssment for the skill in CSS.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png',
    expedition: 'January 2022',
    link: 'https://www.hackerrank.com/certificates/ac1532880848',
  },
]

export const projectsDev: ProjectProps[] = [
  {
    name: 'Hospedaje el Mirador',
    technologies: '#HTML #CSS #Responsive #Angular',
    description:
      'In this project, I work with HTML, CSS, TypeScript, JavaScript and Angular to create a responsive page for a hotel.',
    image: Hospedaje,
    demo: 'https://hospedajemirador.com/',
    code: '#',
    showCode: false,
  },
  {
    name: 'My Gallery',
    technologies: '#HTML #CSS #JavaScript #DevChallenge',
    description:
      'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io.',
    image: Consultant,
    demo: 'https://tcar10s.github.io/Interior-consultant/',
    code: 'https://github.com/TCar10s/Interior-consultant',
    showCode: true,
  },
  {
    name: 'Films app',
    technologies: '#HTML #CSS #Angular',
    description:
      'In this project, I work with HTML, CSS, TypeScript, Angular and implement subjects to manage the states.',
    image: Films,
    demo: 'https://films-app-ng.netlify.app/home',
    code: 'https://github.com/TCar10s/ng-films-app',
    showCode: true,
  },
  {
    name: 'My Team Page',
    technologies: '#HTML #CSS #JavaScript #DevChallenge',
    description:
      'In this project, I work with HTML and CSS to create a responsive page.',
    image: Team,
    demo: 'https://tcar10s.github.io/my-team-page/',
    code: 'https://github.com/TCar10s/my-team-page',
    showCode: true,
  },
  {
    name: 'Blackjack',
    technologies: '#HTML #CSS #JavaScript #Games',
    description:
      'In this project, I work with HTML, CSS and JavaScript to create a game.',
    image: Blackjack,
    demo: 'https://tcar10s.github.io/game-blackjack/',
    code: 'https://github.com/TCar10s/game-blackjack',
    showCode: true,
  },
  {
    name: 'Todo List',
    technologies: '#HTML #CSS #JavaScript',
    description:
      'In this project, I work with HTML, CSS and JavaScript to create a todo list.',
    image: Todo,
    demo: 'https://tcar10s.github.io/todo-list-js/',
    code: 'https://github.com/TCar10s/todo-list-js',
    showCode: true,
  },
]
