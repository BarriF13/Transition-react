import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import '../css/App.css';

class TransitionComp extends Component{
    state ={
        show: false
    }
    showDiv = () => {
        this.setState({
            show: !this.state.show? true: false
        })
    }
    render(){
        return(
            <div>
               
                {/* <Transition
                    in={this.state.show}
                    timeout={2000}

                    mountOnEnter
                    unmountOnExit
                    >
                       { state => 
                       <div style={{
                           background:'blue',
                           height: '100px',
                          transition: 'all 2s',
                          opacity: state === 'exited' || state === 'exiting'? 0 : 1
                       }}>
                           {state}
                       </div>
                       }
                </Transition> */}
                   <Transition
                    in={this.state.show}
                    timeout={{
                        enter: 2000,
                        exit:50
                    }}

                   enter={true}
                   exit={true}

                   onEnter={(node)=>{
                       console.log('Enter')
                   }}
                   onExit={(node)=>{
                    console.log('Exit')
                   }}

                    >
                       { state => 
                       <div className={`square square-${state}`}>
                           {`square square-${state}`}
                       </div>
                       }
                </Transition>
                    <div className="showDiv" 
                    onClick={this.showDiv}>
                        show or hide
                    </div>
               
            </div>

        )
    }
}


export default TransitionComp;