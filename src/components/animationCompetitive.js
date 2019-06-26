//https://scotch.io/tutorials/add-animations-to-react-apps-with-react-lottie

import React, { Component } from 'react'
import Lottie from 'react-lottie'
import competitiveData1Dk from '../lotties/Icon Joystick + flecha/data.json'
import competitiveData1Mb from '../lotties/Icon Joystick + flecha Smartphone/data.json'
import competitiveData2Dk from '../lotties/Icon Lampara engranaje/data.json'
import competitiveData2Mb from '../lotties/Icon Lampara engranaje Smartphone/data.json'

class AnimationCompetitive extends Component {
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
        animationData: isDesktop ? competitiveData1Dk : competitiveData1Mb,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const defaultOptions2 = {
        loop: true,
        autoplay: true, 
        animationData: isDesktop ? competitiveData2Dk : competitiveData2Mb,
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
  
  export default AnimationCompetitive