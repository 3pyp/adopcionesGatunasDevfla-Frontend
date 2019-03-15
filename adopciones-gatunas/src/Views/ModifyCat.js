import React, { Component } from 'react'

export default class ModifyCat extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }
  // componentDidMount () {
  //   const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${this.props.match.params.uid}/`
  //   axios.get(URL)
  //     .then((result) => {
  //       this.setState({ body: result.data })
  //     }).catch((err) => {
  //       alert('User not found')
  //     });
  // }
  render() {
    return (
      <div className="ModifyCat col px-5">
        <div>
          Hola
          {/* <img src=""></img> */}
        </div>
      </div>
    )
  }
}
