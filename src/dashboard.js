import React from 'react';
import Pet from './components/pet';
import { fetchDog, fetchCat, deleteCat,  deleteDog } from './actions';

import { connect } from 'react-redux';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCat())
    this.props.dispatch(fetchDog())
  }

  onAdoptPet = species => {
    if (species === 'cat') {
      this.props.dispatch(deleteCat())
    } else {
      this.props.dispatch(deleteDog())
    }
  }

  render() {
    return (
      <main>
        <Pet
          pet={this.props.catToAdopt}
          species="cat"
          onAdoptPet={this.onAdoptPet}
        />
        <Pet
          pet={this.props.dogToAdopt}
          species="dog"
          onAdoptPet={this.onAdoptPet}
        />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  dogToAdopt: state.dog.data,
  catToAdopt: state.cat.data
})

export default connect(mapStateToProps)(Dashboard)