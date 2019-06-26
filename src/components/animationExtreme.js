//https://scotch.io/tutorials/add-animations-to-react-apps-with-react-lottie

import React, { Component } from 'react'
import Lottie from 'react-lottie'
import extremeData1Dk from '../lotties/Icon Joystick World/Data.json'
import extremeData1Mb from '../lotties/Icon Joystick Worl Smartphone/data.json'
import extremeData2Dk from '../lotties/Icon Controller/data.json'
import extremeData2Mb from '../lotties/Icon Controller Smartphone/data.json'

class AnimationExtreme extends Component {
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

  
      const defaultOptions1 = {
        loop: true,
        autoplay: true, 
        animationData: isDesktop ? extremeData1Dk : extremeData1Mb,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const defaultOptions2 = {
        loop: true,
        autoplay: true, 
        animationData: isDesktop ? extremeData2Dk : extremeData2Mb,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  
      return(
        <div>
          <Lottie options={defaultOptions1}
                height={'100%'}
                width={isDesktop ? '50%' : '100%'}
          />
          <Lottie options={defaultOptions2}
                height={'100%'}
                width={isDesktop ? '50%' : '100%'}
          />
        </div>
      )
    }
  }
  
  export default AnimationExtreme