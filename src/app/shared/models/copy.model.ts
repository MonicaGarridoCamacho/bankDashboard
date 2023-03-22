export class CopyModel {

  login: any = {
    logo: {
      src: 'hello-accenture-technology.svg',
      alt: 'Logo IBM Studio',
    },
    title: 'Zeta Dashboard',
    description: 'In progress',
    image: {
      src: 'hello-accenture-technology.svg',
      alt: 'Hello from Accenture',
    },
    form: {
      button: 'Sign in',
      intro: 'Please, login using the IBM Cloud credentials to access to the demo.',
      error: {
        connection: 'Sorry, there was an error connecting to IBM AppID',
        empty: 'Please fill the login form to enter in the demo.',
        unauthorized: 'Unauthorized.'
      }
    }
  };

  header = {
    owner: 'AIRBG SPAIN',
    title: 'Export WA Skills',
    links: [
      {
        name: 'Logout',
        route: '/auth/login'
      }
    ]
  };

  banner = {
    headline: 'Created by<br> Dev Community',
    image: {
      source: 'AVA_Logo@2x.png',
      alt: 'powered by watson',
    }
  };

  chat = {
    ask: 'Meet Mr.Ping',
    botname: 'Mister Ping',
    avatar: {
      src: 'avatar-misterping.png',
      title: 'Mister Travel Avatar',
    },
    status: {
      loading: 'Is thinking...',
      waiting: 'Online',
    }
  };

}
