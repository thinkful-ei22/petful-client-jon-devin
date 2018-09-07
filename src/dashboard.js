import React from 'react';
import Pet from './components/pet';
import { fetchAnimal, deleteAnimal } from './actions/animals';

import { connect } from 'react-redux';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAnimal('cat'));
    this.props.dispatch(fetchAnimal('dog'));
    // this.props.dispatch(fetchDog())
  }

  onAdoptPet = () => {
    this.props.dispatch(deleteAnimal());
  //   if (species === 'cat') {
  //     this.props.dispatch(deleteAnimal())
  //   } else {
  //     this.props.dispatch(deleteD())
  //   }
  }

  render() {
    return (
      <main>
        <Pet
          pet={this.props.toAdopt}
          species="cat"
          onAdoptPet={this.onAdoptPet}
        />
        <Pet
          pet={this.props.toAdopt}
          species="dog"
          onAdoptPet={this.onAdoptPet}
        />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  toAdopt: state.data
    // catToAdopt: state.cat.data
})

export default connect(mapStateToProps)(Dashboard)