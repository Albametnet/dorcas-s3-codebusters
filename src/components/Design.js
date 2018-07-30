import React from 'react';

class Design extends React.Component {
  render() {
    return (
      <section className="container__form" id="diseña">
        <div className="container__form--disena">
          <div className="title__disena wraptitle">
            <i className="far fa-object-ungroup color--orange"></i>
<<<<<<< HEAD
            <h2 className="generaltitle">{this.props.shareTitle5.diseña}</h2>
=======
            <h2 className="generaltitle">{this.props.titleDesign}</h2>
>>>>>>> react
            <i className="fas fa-angle-down color--grey move1"></i>
          </div>
          <div className="form__disena--fontsColors wrapform">
            <h3 className="title__colors">{this.props.titleDesignForm.colors}</h3>
            <div className="form__colors">
            
              <div className="colors__container">
                <input id="option1" type="radio" value="1" data-color="" name="color" className="point input__palette_1" checked />
                <label for="option1">
                  <div className="div_colors">
                    <div className="colors__palets darkBlue"> </div>
                    <div className="colors__palets mediumBlue"> </div>
                    <div className="colors__palets lightBlue"> </div>
                  </div>
                </label>
              </div>
              <div className="colors__container">
                <input id="option2" type="radio" value="2" data-color="red" name="color" className="point input__palette_2" />
                <label for="option2">
                  <div className="div_colors">
                    <div className="colors__palets darkRed"> </div>
                    <div className="colors__palets mediumRed"> </div>
                    <div className="colors__palets lightRed"> </div>
                  </div>
                </label>
              </div>
              <div className="colors__container">
                <input id="option3" type="radio" value="3" data-color="grey" name="color" className="point input__palette_3" />
                <label for="option3">
                  <div className="div_colors">
                    <div className="colors__palets darkGrey"> </div>
                    <div className="colors__palets mediumGrey"> </div>
                    <div className="colors__palets lightGrey"> </div>
                  </div>
                </label>
              </div>
            </div>
            <h3 className="title__fonts">{this.props.titleDesignForm.fonts}</h3>
            <div className="form__fonts">
              <div className="fonts__container">
                <input id="font1" type="radio" value="1" name="font" className="point1 input__typography_1" data-font="" checked />
                <label for="font1" className="ubuntu">ubuntu</label>
              </div>
              <div className="fonts__container">
                <input id="font2" type="radio" value="2" name="font" className="point1 input__typography_2" data-font="comic" />
                <label for="font2" className="comic1">comic sans</label>
              </div>
              <div className="fonts__container">
                <input id="font3" type="radio" value="3" name="font" className="point1 input__typography_3" data-font="montserrat" />
                <label for="font3" className="montserrat1">montserrat</label>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Design;