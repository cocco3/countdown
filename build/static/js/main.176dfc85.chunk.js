(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(25)},20:function(e,n,t){},21:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var o=t(1),a=t.n(o),i=t(7),r=t.n(i),c=(t(20),t(8)),s=t(9),u=t(13),l=t(10),d=t(12),p=t(3),b=(t(21),t(2)),g=t(0),f=t(11),m={Count:{display:"block",fontSize:"1em",margin:"1em 0",textAlign:"start"},CountName:{color:"#dadada",display:"block"},CountDate:{display:"block",fontSize:"1.3em"}};function v(){var e=Object(b.a)(["",""]);return v=function(){return e},e}function h(){var e=Object(b.a)(["",""]);return h=function(){return e},e}function j(){var e=Object(b.a)(["",""]);return j=function(){return e},e}var O=function(e){var n=e.date,t=e.name,o=Object(f.format)(n);return Object(g.b)("div",{css:Object(g.a)(j(),m.Count)},Object(g.b)("span",{css:Object(g.a)(h(),m.CountName)},t),Object(g.b)("span",{css:Object(g.a)(v(),m.CountDate)},o))},w={CountList:{margin:"1em 0",maxWidth:"800px",padding:"0 24px"}};function y(){var e=Object(b.a)(["",""]);return y=function(){return e},e}var k=function(e){var n=e.events;return Object(g.b)("div",{css:Object(g.a)(y(),w.CountList)},n?n.map(function(e,n){return Object(g.b)(O,{date:e.date,key:n,name:e.name})}):Object(g.b)("div",null,"Looks like you don't have any countdowns! Go to ",Object(g.b)("a",{href:"https://calendar.google.com"},"Google Calendar"),' and update the description for any event with "',Object(g.b)("code",null,"#countdown"),'".'))},C=function(e){var n=e.split(" "),t=n[0].substring(0,1).toUpperCase();return n.length>1&&(t+=n[n.length-1].substring(0,1).toUpperCase()),t},S={Avatar:{alignItems:"center",backgroundColor:"#ffffff",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",border:"none",borderRadius:"50%",color:"#282c34",display:"inline-flex",height:"36px",lineHeight:"36px",justifyContent:"center",width:"36px"}};function I(){var e=Object(b.a)(["",""]);return I=function(){return e},e}var x=function(e){var n=e.name,t=e.src,o=n?C(n):null,a=t&&{backgroundImage:"url(".concat(t,")")};return Object(g.b)("span",{css:Object(g.a)(I(),S.Avatar),style:a||null},a?null:o)},A={Button:{background:"transparent",border:"2px solid currentColor",borderRadius:"4px",color:"#ffffff",cursor:"pointer",display:"inline-flex",fontSize:"inherit",lineHeight:"inherit",padding:"4px 12px",textDecoration:"none",transition:"background-color 0.3s ease 0s","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.1)"}}};function G(){var e=Object(b.a)(["",""]);return G=function(){return e},e}var H=function(e){var n=e.onClick,t=e.text;return Object(g.b)("button",{css:Object(g.a)(G(),A.Button),onClick:n,type:"button"},t)},D={Header:{alignItems:"center",borderBottom:"1px solid #aaaaaa",display:"flex",justifyContent:"space-between",padding:"16px 24px"},HeaderName:{fontSize:"1.8em"},HeaderUser:{alignItems:"center",display:"flex"}};function E(){var e=Object(b.a)(["",""]);return E=function(){return e},e}function N(){var e=Object(b.a)(["",""]);return N=function(){return e},e}function B(){var e=Object(b.a)(["",""]);return B=function(){return e},e}var z=function(e){var n=e.isSignedIn,t=e.name,o=e.photo,i=e.onSignInClick;return Object(g.b)("header",{css:Object(g.a)(B(),D.Header)},Object(g.b)("div",{css:Object(g.a)(N(),D.HeaderName)},"CountDownApp"),Object(g.b)("div",{css:Object(g.a)(E(),D.HeaderUser)},n?Object(g.b)(a.a.Fragment,null,Object(g.b)(x,{name:t,src:o}),Object(g.b)("span",null,t)):Object(g.b)(H,{text:"Sign In",onClick:i})))},L=["https://people.googleapis.com/$discovery/rest?version=v1","https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],U=["profile","https://www.googleapis.com/auth/calendar.readonly"].join(" "),R=(Date.now(),Date.now(),function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(l.a)(n).call(this,e))).state={events:null,name:null,photo:null,isSignedIn:!1},t.onSignInClick=t.onSignInClick.bind(Object(p.a)(Object(p.a)(t))),t.initGoogleClient=t.initGoogleClient.bind(Object(p.a)(Object(p.a)(t))),t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"addGoogleApiScript",value:function(){var e=this;window.onLoadGoogleApi=function(){window.gapi.load("client:auth2",e.initGoogleClient)};var n=document.createElement("script");n.src="https://apis.google.com/js/client.js?onload=onLoadGoogleApi",n.type="text/javascript",document.body.appendChild(n)}},{key:"onSignInClick",value:function(){window.gapi.auth2.getAuthInstance().signIn()}},{key:"updateSigninStatus",value:function(e){console.log(e)}},{key:"initGoogleClient",value:function(){var e=this,n=window.gapi,t=function(t){e.setState({isSignedIn:t}),t&&(n.client.people.people.get({resourceName:"people/me",personFields:"emailAddresses,names,photos"}).then(function(n){var t=n.result;e.setState({name:t.names.find(function(e){return e.metadata.primary}).displayName,photo:t.photos.find(function(e){return e.metadata.primary}).url})},function(e){console.log("Error: "+e.result.error.message)}),n.client.calendar.events.list({calendarId:"primary",showDeleted:!1,singleEvents:!0,orderBy:"startTime",q:"#countdown"}).then(function(n){var t=n.result.items.map(function(e){return{date:e.start.dateTime||e.start.date,name:e.summary}}).reverse();e.setState({events:t})}))};n.client.init({apiKey:"AIzaSyAN2aHB-zHEja55hcUNnY-1hSYXBms_aRg",clientId:"176181994885-0d0qr7m4ksasjr8hq5uc35fma124pea7.apps.googleusercontent.com",discoveryDocs:L,scope:U}).then(function(){n.auth2.getAuthInstance().isSignedIn.listen(t),t(n.auth2.getAuthInstance().isSignedIn.get())})}},{key:"handleGoogleClientLoad",value:function(){window.gapi.load("client:auth2",this.initGoogleClient)}},{key:"componentDidMount",value:function(){this.addGoogleApiScript()}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(z,{isSignedIn:this.state.isSignedIn,onSignInClick:this.onSignInClick,name:this.state.name,photo:this.state.photo}),a.a.createElement(k,{events:this.state.events}))}}]),n}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.176dfc85.chunk.js.map