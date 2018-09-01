import React from 'react';
import { graphql } from 'react-apollo';
import fetchAllVaccines from '../queries/fetchAllVaccines';

class Home extends React.PureComponent {
  renderVaccines() {
    const { vaccines } = this.props;
    return (
      <ul>
        {
          vaccines.getAllVaccines.map((vaccine) => {
            return (<li key={vaccine.id}> {vaccine.title} </li>);
          })
        }
      </ul>
    );
  }
  renderLoading() {
    return <div>Loading...</div>;
  }
  render() {
    const { vaccines } = this.props;
    debugger;
    const content = (vaccines.loading) ? this.renderLoading() : this.renderVaccines();
    return (
      <div>
        <header>All Vaccines</header>
        {content}
      </div>
    )
  }
}
export default graphql(fetchAllVaccines, { name: 'vaccines' })(Home);
