/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var CommentBox = React.createClass({
	  displayName: 'CommentBox',

	  loadCommentsFromServer: function loadCommentsFromServer() {
	    $.ajax({
	      url: this.props.uri,
	      dataType: 'json',
	      success: (function (data) {
	        this.setState({
	          data: data
	        });
	      }).bind(this),
	      error: (function (xhr, status, err) {
	        console.error(arguments);
	      }).bind(this)
	    });
	  },
	  handleCommentSubmit: function handleCommentSubmit(comment) {
	    //Self designed code
	    var data = this.state.data;
	    data.push(comment);
	    this.setState({ data: data });
	    $.ajax({
	      url: this.props.uri,
	      dataType: 'json',
	      type: 'POST',
	      data: comment,
	      success: (function (data) {
	        console.log(data);
	        this.setState({
	          data: data
	        });
	      }).bind(this),
	      error: (function (xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }).bind(this)
	    });
	  },
	  getInitialState: function getInitialState() {
	    return {
	      data: []
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.loadCommentsFromServer();
	    console.log('hihi');
	    // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'commentBox' },
	      React.createElement(
	        'h1',
	        null,
	        'Comment Box'
	      ),
	      React.createElement(CommentList, { data: this.state.data }),
	      React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit })
	    );
	  }
	});

	var CommentList = React.createClass({
	  displayName: 'CommentList',

	  render: function render() {
	    var commentNodes = this.props.data.map(function (comment) {
	      return React.createElement(
	        Comment,
	        { author: comment.author },
	        comment.text
	      );
	    });
	    return React.createElement(
	      'div',
	      { className: 'commentList' },
	      commentNodes
	    );
	  }
	});

	var CommentForm = React.createClass({
	  displayName: 'CommentForm',

	  handleSubmit: function handleSubmit(e) {
	    //We actually submit this state to CommentBox,
	    //Because CommentBox holds all the status of comments,
	    //we need to pass the status from child component to parent
	    e.preventDefault();
	    var author = this.refs.author.value.trim();
	    var text = this.refs.text.value.trim();
	    if (!text || !author) {
	      return;
	    }
	    this.props.onCommentSubmit({
	      author: author,
	      text: text
	    });
	    this.refs.author.value = '';
	    this.refs.text.value = '';
	    return;
	  },
	  render: function render() {
	    return React.createElement(
	      'form',
	      { className: 'commentForm', onSubmit: this.handleSubmit },
	      React.createElement('input', { type: 'text', placeholder: 'Your name', ref: 'author' }),
	      ' ',
	      React.createElement('input', { type: 'text',
	        placeholder: 'Say something...',
	        ref: 'text' }),
	      React.createElement('input', { type: 'submit', value: 'Post' }),
	      ' '
	    );
	  }
	});

	var Comment = React.createClass({
	  displayName: 'Comment',

	  rawMarkUp: function rawMarkUp() {
	    var rawMarkUp = marked(this.props.children.toString(), {
	      sanitize: true
	    });
	    return {
	      __html: rawMarkUp
	    };
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h2',
	        null,
	        this.props.author
	      ),
	      React.createElement('span', { dangerouslySetInnerHTML: this.rawMarkUp() })
	    );
	  }
	});

	ReactDOM.render(React.createElement(CommentBox, { uri: 'public/data.json', pollInterval: 2000 }), document.getElementById('example'));

/***/ }
/******/ ]);