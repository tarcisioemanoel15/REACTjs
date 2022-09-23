import { Component } from 'react';
import './styles.css';
import { Button } from '../../Button';

export class Home extends Component {
  state = {
    numero: 0
  };

  loadMorePosts = () => {
    const {numero} = this.state

    this.setState({numero : 'oi'})
    console.log(numero);

  }


  render() {
    return (

      <section className='container'>
        <div className='button-container'>

          <Button
            text="Load M Posts"
            onClick={this.loadMorePosts}
          //  disabled={noMorePosts}
          />

        </div>
      </section>

    );

  }
}
