import React, { Component } from 'react'
import './App.css'

import CountList from './components/CountList'
// import GoogleApi from './utilities/GoogleApi'
import Header from './components/Header'

const API_KEY = 'AIzaSyDgDZXqJtz2xSD8QfJlCGNf-SDI6n3eob0'

const CLIENT_ID = '176181994885-0d0qr7m4ksasjr8hq5uc35fma124pea7.apps.googleusercontent.com'

const DISCOVERY_DOCS = [
  'https://people.googleapis.com/$discovery/rest?version=v1',
  'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
]

const SCOPES = [
  'profile',
  'https://www.googleapis.com/auth/calendar.readonly'
].join(' ')

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      events: null,
      name: null,
      photo: null,
      isSignedIn: false
    }

    this.onSignInClick = this.onSignInClick.bind(this)
    this.initGoogleClient = this.initGoogleClient.bind(this)
  }

  addGoogleApiScript() {
    
    // callback has to be on the window
    window.onLoadGoogleApi = () => {
      window.gapi.load('client:auth2', this.initGoogleClient)
    }

    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/api.js?onload=onLoadGoogleApi'
    script.type = 'text/javascript'
    document.body.appendChild(script)
  }

  onSignInClick() {
    const { gapi } = window
    gapi.auth2.getAuthInstance().signIn()
  }

  updateSigninStatus(isSignedIn) {
    console.log(isSignedIn)
  }

  initGoogleClient() {
    const _this = this

    const { gapi } = window

    const updateSigninStatus = function(isSignedIn) {
      
      _this.setState({ isSignedIn: isSignedIn })

      if (!isSignedIn) {
        return
      }

      // get name/photo
      gapi.client.people.people.get({
        resourceName: 'people/me',
        personFields: 'emailAddresses,names,photos'
      }).then(function(response) {
        const person = response.result

        _this.setState({
          name: person.names.find(x => x.metadata.primary).displayName,
          photo: person.photos.find(x => x.metadata.primary).url
        })

      }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
      })

      // get events
      gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'showDeleted': false,
        'singleEvents': true,
        'orderBy': 'startTime',
        'q': '#countdown'
      }).then(function(response) {
        const events = response.result.items.map(event => {
          return {
            date: event.start.dateTime || event.start.date,
            name: event.summary
          }
        }).reverse()

        _this.setState({
          events: events
        })
      })
    }

    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(function() {
      
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus)
      
      // Handle the initial sign-in state.
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
    })
  }

  handleGoogleClientLoad() {
    // Load the API client and auth2 library
    window.gapi.load('client:auth2', this.initGoogleClient);
  }

  componentDidMount() {
    this.addGoogleApiScript()
  }

  render() {
    return (
      <div className="App">

        <Header
          isSignedIn={this.state.isSignedIn}
          onSignInClick={this.onSignInClick}
          name={this.state.name}
          photo={this.state.photo}
        />

        <CountList events={this.state.events} />
      </div>
    )
  }
}

export default App
