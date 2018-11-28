import axios from 'axios';
import * as React from 'react';
import { Card } from '../components/Card/';
import { Container, GlobalStyles } from './styled';
import { IPhoto, IResponse, IState } from './typings';

class App extends React.Component<object, IState> {
  private constructor (props: object) {
    super(props);
    this.state = {
      photos: []
    }
  }

  public componentWillMount () {
    axios
      .get("https://pixabay.com/api/?key=3934377-d716359e67249c9dff81e6de2&q=photography&image_type=photo")
      .then(({ data: { hits: photos } }: IResponse) => {
        this.setState({
          photos
        });
      });
  }
  
  public getData = (e: any) => {
    // tslint:disable-next-line:no-console
    console.log(e)
  }

  public render() {
    const { state } = this; 
    return (
      <React.Fragment>
        <GlobalStyles/>
        <Container>
          {
            state.photos.map(({ id, webformatURL: photo }: IPhoto) => (
              <Card onDrag={this.getData} onDrop={this.getData} image={photo} key={id}/>
            ))
          }
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
