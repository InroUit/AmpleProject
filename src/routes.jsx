var React = require('react');
var ReactRouter = require('react-router');
var history = require('react-router').browserHistory;
var HashHistory = require('react-router/lib/hashHistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('./components/main');
var AboutUs = require('./components/aboutus');
var Services = require('./components/services');
var HomePage = require('./components/home-page');
var Testimonials = require('./components/testimonial');
var StudyAbroad = require('./components/study-abroad');
var StudyOnline = require('./components/study-online');
var TestPreparation = require('./components/test-preparation');
var PR = require('./components/pr');
var Gallery = require('./components/gallery');
var ContactUs = require('./components/contact-us');
var Australia = require('./components/study-abroad/australia');
var Canada = require('./components/study-abroad/canada');
var Newzealand = require('./components/study-abroad/newzealand');
var UK = require('./components/study-abroad/uk');
var USA = require('./components/study-abroad/usa');
var IELTS = require('./components/test-preparation/ielts');
var TOEFL = require('./components/test-preparation/toefl');
var BA = require('./components/study-online/ba');
var MA = require('./components/study-online/ma');
var MBA = require('./components/study-online/mba');
var AWP = require('./components/pr/awp');
var CEE = require('./components/pr/cee');
var DG = require('./components/pr/dg');


module.exports =
(
	<Router history={HashHistory}>
		<Route path = "/" component ={Main} >
			<IndexRoute component={HomePage} />
			<Route path = "aboutus" component = {AboutUs} />
			<Route path = "testimonials" component = {Testimonials} />
			<Route path = "study-abroad" component = {StudyAbroad} />
			<Route path = "test-preparation" component = {TestPreparation} />
			<Route path = "pr" component = {PR} />
			<Route path = "study-online" component = {StudyOnline} />
			<Route path = "gallery" component = {Gallery} />
			<Route path = "contact-us" component = {ContactUs} />
			<Route path = "australia" component = {Australia} />
			<Route path = "canada" component = {Canada} />
			<Route path = "newzealand" component = {Newzealand} />
			<Route path = "uk" component = {UK} />
			<Route path = "usa" component = {USA} />
			<Route path = "ielts" component = {IELTS} />
			<Route path = "toefl" component = {TOEFL} />
			<Route path = "ba" component = {BA} />
			<Route path = "ma" component = {MA} />
			<Route path = "mba" component = {MBA} />
			<Route path = "awp" component = {AWP} />
			<Route path = "cee" component = {CEE} />
			<Route path = "dg" component = {DG} />
		</Route>
	</Router>
)
