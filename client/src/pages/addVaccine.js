import React from 'react';
import { graphql, compose,   } from 'react-apollo';
import getAllDoseTypes from "../queries/getAllDoseTypes";
import addVaccine from '../mutations/addVaccine';
import client from "../apolloClient";

class AddVacine extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      doseType: 'unique'
    };
    this.onChange = this.onChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
  }

  onChangeAuthor () {
    console.log(getAllDoseTypes)
    client.mutate().then((results) => {
      console.log(this);
      console.log(results);
      debugger;
    });
  }

  onChange (event) {
    const { name, value } = event.target;
    let state = {};
    switch (name) {
      case 'title':
        state = { title: value };
        break;
      case 'description':
        state = { description: value }
        break;
      case 'doseType':
        state = { doseType: value }
        break;
    }
    this.setState(state);
  }

  onHandleSubmit(event) {
    event.preventDefault();
    const { addVaccine } = this.props;
    addVaccine({ 
      variables: {
        title: this.state.title,
        description: this.state.description,
        doseType: this.state.doseType
      },
      refetchQueries: [{ query }]
    }).then(() => {
      window.location.href = '/#/';
    });
  }

  renderForm() {
    const { doseTypes } = this.props;

    return (
      <form onSubmit={this.onHandleSubmit}>
          <label>Title:
        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
          </label>
          <label>Description:
        <input type="text" name="description" onChange={this.onChange} value={this.state.description} />
          </label>
          <label>
            <select name="doseType" onChange={this.onChange}>
              {
                doseTypes.__type.enumValues.map(item => {
                  return <option value={item.name} >{item.name}</option>
                })
              }
            </select>
          </label>
          <input type="submit" value="Save"/>
      </form>
      );
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  render() {
    const { doseTypes } = this.props;
    return (doseTypes.loading) ? this.renderLoading() : this.renderForm();
  }
}

export default compose(
  graphql(getAllDoseTypes, { name: 'doseTypes' }),
  graphql(addVaccine, {name: "addVaccine"}),
)(AddVacine);