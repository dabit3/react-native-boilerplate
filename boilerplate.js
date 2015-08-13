/**
* Component Description
* Date
*/
'use strict';

/*
* REACT
*/
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

/*
* IMPORTS
*/
var PageHeaderWithName = require('../../Components/Header/PageHeaderTextRight');
var mainStyle = require('../../css/MainCss2');
var StudentStore = require('../../Stores/StudentsStore');
/*
* STYLE
*/
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

/*
* CLASS
*/
var elsIndex = React.createClass({
        /*
        * React Lifecycle
        */
        propTypes: {},
        mixins : [],

        getInitialState() {
            /* Setup state variables and initial values */
            return{};
        },
        getDefaultProps(){
            /* Setup prop defaults in the event they are not passed */
        },

        componentWillMount() {
            /* Invoked once, immediately before the initial rendering occurs. If you call setState within this method, render() will see the updated state and will be executed only once despite the state change. */
        },
        componentWillReceiveProps() {
            /* Invoked when a component is receiving new props. This method is not called for the initial render. */
        },
        componentWillUnmount() {
            /* Invoked immediately before a component is unmounted.  Perform any necessary cleanup in this method */
        },
        componentDidMount() {
            /* Invoked once immediately after the initial rendering occurs. If you want to integrate with other JavaScript frameworks, set timers using setTimeout or setInterval, or send AJAX requests, perform those operations in this method.*/
        },

        /*
        * CUSTOM METHODS
        */

        _handleBackButtonPress() {
          this.props.navigator.pop();
          },



        /*
        * RENDER
        */
        render() {
                {/*Use Comments to explain the rendering*/}
            return(
              <View style={mainStyle.basicContainer}>
                <PageHeaderWithName avatar={StudentStore.getImageURL(this.props.selectedStudent.id)}         headerSubTitle={this.props.selectedStudent.full_name}
                  headerTitle="ELS"
                  goBack={this._handleBackButtonPress.bind(this)}/>

              </View>
            )
        }
});

module.exports = elsIndex;
