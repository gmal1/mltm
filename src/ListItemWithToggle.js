import React, { Component } from 'react';

export default class ListItemWithToggle extends Component {
  constructor(props) {
    super()
    this.state = {
      isOpen: false,
    }
  }

  onToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { lifeData, shouldReverse } = this.props;
    const { isOpen } = this.state;

    return (
      <div className='container'>
        {lifeData.children && isOpen ?
          (<>
            <div className='empty-div'></div>
            <svg
              preserveAspectRatio="xMidYMid meet"
              transform="rotate(90, 0, 0)"
              viewBox="0 0 5.54 11.09"
              onClick={this.onToggle}>
              <polyline points="0 0 5.54 5.54 0 11.09" />
            </svg>
          </>) : (
            lifeData.children && !isOpen ? (
              <>
                <div className='empty-div'></div>
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 5.54 11.09"
                  onClick={this.onToggle}>
                  <polyline points="0 0 5.54 5.54 0 11.09" />
                </svg>
              </>)
              : null)
        }
        <div className='name'>

          {shouldReverse ?
            lifeData.name
              .split("")
              .reverse()
              .join("") :
            lifeData.name}</div>
        {lifeData.children && isOpen ?
          (lifeData.children.map((child, i, array) => {
            return <ListItemWithToggle shouldReverse={array.length === 3} key={i} lifeData={child} />
          }))
          : null}

      </div>
    )
  }
}