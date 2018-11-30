import * as React from 'react';
import { Card } from '../components/Card';
import PixabayService from '../services/PixabayService/';
import { Position } from '../utils'
import { Container, GlobalStyles } from './styled';
import { GetPositionRandom, HandleEvent, IHits, IResponse, IState } from './typings';
import { Photo } from './utils';

class App extends React.Component<object, IState> {

  private constructor (props: object) {
    super(props);
    this.state = {
      photos: []
    }
  }

  public componentWillMount () {
    PixabayService(({ data: { hits } }: IResponse) => {
        const photos: Photo[] = hits.map(({ id, webformatURL: photo }: IHits) => {
          const { clientHeight: y , clientWidth:x } = document.body;  
          return new Photo(false, id, this.handleClick, this.handleDrop, photo, this.getPositionRandom(x, y))
        });

        this.setPhotos(photos);
      });
  }

  public getPositionRandom: GetPositionRandom = (x, y) => {
    const height: number = Math.floor((Math.random() * y));
    const width: number = Math.floor((Math.random() * x));

    return new Position(width, height);
  };
  
  public handleClick: HandleEvent = (id: number) => {
    return () => {
      const { photos: oldPhotos } = this.state;

      const photos = oldPhotos.map((item: Photo) => item.id !== id ? { ...item, position: this.getPositionRandom(160, 384) } : { ...item, dragging: true });
      this.setPhotos(photos);
    }
  }

  public handleDrop: HandleEvent = (id: number) => {
    return () => {
      const { photos: oldPhotos } = this.state;
      const { clientHeight: y , clientWidth:x } = document.body;

      const photos = oldPhotos.map((item: Photo) => item.id !== id ? { ...item, position: this.getPositionRandom(x, y) } : { ...item, dragging: false } )
      this.setPhotos(photos);
    }
  }

  public setPhotos(photos: Photo[]) {
    this.setState({ photos });
  }

  public render() {
    const { state } = this; 
    return (
      <React.Fragment>
        <GlobalStyles/>
        <Container>
          {
            state.photos.map((props: Photo, index: number) => (
              <Card {...props} key={ index }/>
            ))
          }
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
