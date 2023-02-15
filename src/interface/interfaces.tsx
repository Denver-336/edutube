// export interface Movie {
//   name: string;
//   description: string;
//   thumbnail: string;
// }

export interface Item {
  id: string
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
  comics: {
    items: [
      {
        name: string
      }
    ]
  }
  series: {
    items: [
      {
        name: string
      }
    ]
  }
  stories: {
    items: [
      {
        name: string
      }
    ]
  }
}

// export interface Props {
//   height?: number;
//   src?: string;
// }

// export interface PropsProvider {
//   children: JSX.Element | JSX.Element[]
// }

// export interface AppState {
//   name: string;
//   url: string;
//   time: string;
// }