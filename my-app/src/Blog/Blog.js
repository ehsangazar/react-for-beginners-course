import React from 'react'

// const Blog = () => (
//     <div>Blog</div>
// )
// stateless function

class Blog extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          clicked: 0,
          updateNumber: 0,
          didMount: false,
        };
    }

    componentDidMount(){
      setTimeout(()=>{
        this.setState({
          didMount: true,
        });
        this.handleClick();
      }, 1000)
    }

    componentDidUpdate(prevProps, prevState){
      const { updateNumber } = this.state
      if (updateNumber === 0) {
        this.setState({
          updateNumber: this.state.updateNumber + 1,
        });
      }
    }

    componentWillUnmount(){
      console.log('un mount')
    }

    handleClick = () => {
        this.setState({
            clicked: this.state.clicked + 1,
        })
    }

    render() {
        const { clicked, didMount, updateNumber } = this.state;
        return (
          <div>
            <h1>Blog Class</h1>
            <p>Clicked Number: {clicked}</p>
            <button onClick={this.handleClick}>Click</button>
            <h1>Component Did Mount</h1>
            <p>Is it Mounted? {didMount ? "YES" : "NO"}</p>
            <h1>Component Did Update</h1>
            <p>How many times is it updated? {updateNumber}</p>
          </div>
        );
    }
}



export default Blog;