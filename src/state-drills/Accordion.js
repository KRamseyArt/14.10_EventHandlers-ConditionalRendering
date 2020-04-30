import React from 'react';

export default class Accordion extends React.Component{
  static defaultProps = {
    //accept prop [sections], an array of objects with two keys: title & content
    sections: []
  };
  state = {
    sectionIndex: null
  }

  handleButtonClick = (index) =>{
    //when button clicked, render <p> below the button that was clicked that displays the sections content.
    //use conditional rendering to display this <p> with the section content
    //when button clicked, ONLY that section should open and the others should be closed
    this.setState({sectionIndex: index })
  }
  
  renderSections(section, i, sectIndex){
    //each sections <li> should be a button containing sections title
    return (
      <li className='Section' key={i}>
        <button
          type='button'
          onClick={() => this.handleButtonClick(i)}
        >
          {section.title}
        </button>
        {(sectIndex === i) && <p>{section.content}</p>}
      </li>
    )
  }
  
  render(){
    //set default section index & sections[] upon render
    const { sectionIndex } = this.state
    const { sections } = this.props
    //renders a <ul>, inside will be a <li> for each section
    return (
      <ul className='Accordion'>
        {sections.map((section, i) =>{
          return this.renderSections(section, i, sectionIndex)
        })}
      </ul>
    )
  }
}