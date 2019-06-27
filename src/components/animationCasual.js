//https://scotch.io/tutorials/add-animations-to-react-apps-with-react-lottie

import React, { Component } from 'react'
import Lottie from 'react-lottie'
import casualDataDk from '../lotties/Icon Joystick Velocimetro/data.json'
import casualDataMb from '../lotties/Icon Joystick Velocimetro Smartphone/data.json'
// import casual from '../pages/casual.js';

class AnimationCasual extends Component {
  //conditional render of animationData based on window.innerWidth
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false, 
      category: this.props.category
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 768 });
  }

    render(){

      const isDesktop = this.state.isDesktop;

  
      const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: isDesktop ? casualDataDk : casualDataMb,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  
      return(
        <div>
          <Lottie options={defaultOptions}
                height={'100%'}
                width={'100%'}
          />
        </div>
      )
    }
  }
  
  export default AnimationCasual