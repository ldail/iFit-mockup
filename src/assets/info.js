import {ReactComponent as WiredLogo} from '../assets/logos/wired-logo.svg';
import {ReactComponent as MashableLogo} from '../assets/logos/mashable-logo.svg';
import {ReactComponent as GearJunkieLogo} from '../assets/logos/gear-junkie-logo.svg';

export const NAV_LIST = [
  {
    title: 'BLOG',
    url: '#'
  },
  {
    title: 'NOURISH',
    url: '#'
  },
  {
    title: 'SHOP',
    url: '#'
  }
];

export const SUBNAV_LIST = [
  {
    title: 'EXERCISE',
    url: '#'
  },
  {
    title: 'NUTRITION',
    url: '#'
  },
  {
    title: 'ACTIVITY',
    url: '#'
  },
  {
    title: 'SLEEP',
    url: '#'
  }
];

export const REVIEWS = [
  {
    companyName: 'GearJunkie',
    CompanyLogo: GearJunkieLogo,
    reviewInfo: 'You focus on putting in the hard work, and the technology handles the rest.'
  },
  {
    companyName: 'WIRED',
    CompanyLogo: WiredLogo,
    reviewInfo: 'Literally transports you from home to wherever you choose to run.'
  },
  {
    companyName: 'Mashable',
    CompanyLogo: MashableLogo,
    reviewInfo: 'Breathes new life into a tired, old running routine.'
  }
];

export const VIDEOS = [
  {
    title: 'Lake Inniscarra, Ireland—Pyramid',
    thumbnail: require('../assets/videos/video1thumbnail.png'),
    userAvatar: require('../assets/videos/video1user.png'),
    isSeries: false,
    url: '#',
    length: '30:53',
    views: '6,248 M'
  },
  {
    title: 'Performance Series',
    thumbnail: require('../assets/videos/video2thumbnail.png'),
    userAvatar: require('../assets/videos/video2user.png'),
    isSeries: true,
    url: '#',
    playlistCount: 9
  },
  {
    title: 'Slow Pulls and Fast Intervals',
    thumbnail: require('../assets/videos/video3thumbnail.png'),
    userAvatar: require('../assets/videos/video3user.png'),
    isSeries: false,
    url: '#',
    length: '44:13',
    views: '9,948 M'
  },
  {
    title: '20 Minutes to Toned',
    thumbnail: require('../assets/videos/video4thumbnail.png'),
    userAvatar: require('../assets/videos/video4user.png'),
    isSeries: true,
    url: '#',
    playlistCount: 12
  },
  {
    title: 'Charles Race, Boston, Massachusetts',
    thumbnail: require('../assets/videos/video5thumbnail.png'),
    userAvatar: require('../assets/videos/video5user.png'),
    isSeries: false,
    url: '#',
    length: '36:22',
    views: '8,648 M'
  },
  {
    title: 'Full-Body HIIT Series',
    thumbnail: require('../assets/videos/video6thumbnail.png'),
    userAvatar: require('../assets/videos/video6user.png'),
    isSeries: true,
    url: '#',
    playlistCount: 12
  },
  {
    title: 'Kafue River, Zambia—Power Stroke Pyramid',
    thumbnail: require('../assets/videos/video7thumbnail.png'),
    userAvatar: require('../assets/videos/video7user.png'),
    isSeries: false,
    url: '#',
    length: '22:22',
    views: '4,660 M'
  },
  {
    title: 'Shred & Burn Series',
    thumbnail: require('../assets/videos/video8thumbnail.png'),
    userAvatar: require('../assets/videos/video8user.png'),
    isSeries: true,
    url: '#',
    playlistCount: 16
  },
];

export const EQUIPMENT = [
  {
    title: 'Treadmills',
    image: require('../assets/equipment/treadmills.png'),
    url: '#'
  },
  {
    title: 'Bikes',
    image: require('../assets/equipment/bikes.png'),
    url: '#'
  },
  {
    title: 'Ellipticals',
    image: require('../assets/equipment/ellipticals.png'),
    url: '#'
  },
  {
    title: 'Strength',
    image: require('../assets/equipment/strength.png'),
    url: '#'
  }
];

export const FOOTER_MAP = [
  {
    title: 'Company',
    list: [
      {
        title: 'About',
        url: '#'
      },
      {
        title: 'Contact Us',
        url: '#'
      },
      {
        title: 'Careers',
        url: '#'
      }
    ]
  },
  {
    title: 'Account',
    list: [
      {
        title: 'Log In',
        url: '#'
      },
      {
        title: 'Create Account',
        url: '#'
      }
    ]
  },
  {
    title: 'Support',
    list: [
      {
        title: 'Help Center',
        url: '#'
      },
      {
        title: 'Accessibility',
        url: '#'
      }
    ]
  }
];

export const FOOTER_SOCIAL_LINKS = [
  {
    website: 'YouTube',
    url: '#',
    icon: require('../assets/icons/youtube.png')
  },
  {
    website: 'Pinterest',
    url: '#',
    icon: require('../assets/icons/pinterest.png')
  },
  {
    website: 'Facebook',
    url: '#',
    icon: require('../assets/icons/facebook.png')
  },
  {
    website: 'Twitter',
    url: '#',
    icon: require('../assets/icons/twitter.png')
  },
  {
    website: 'Instagram',
    url: '#',
    icon: require('../assets/icons/instagram.png')
  }
];