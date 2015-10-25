var CommentBox = React.createClass({
  loadCommentsFromServer: function () {
    $.ajax({
      url: this.props.uri,
      dataType: 'json',
      success: function (data) {
        this.setState({
          data: data
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(arguments);
      }.bind(this)
    });
  },
  handleCommentSubmit: function (comment) {
    //Self designed code
    var data = this.state.data;
    data.push(comment);
    this.setState({data:data});
    $.ajax({
      url: this.props.uri,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function (data) {
        console.log(data)
        this.setState({
          data: data
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },
  getInitialState: function () {
    return {
      data: []
    };
  },
  componentDidMount: function () {
    this.loadCommentsFromServer();
    console.log('hihi')
    // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function () {
    return (
      <div className = "commentBox">
        <h1>Comment Box</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    )
  }
})

var CommentList = React.createClass({
  render: function () {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );

    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});


var CommentForm = React.createClass({
      handleSubmit: function (e) {
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
      render: function () {
          return (
              <form className = "commentForm" onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Your name" ref ="author" /> < input type = "text"
      placeholder = "Say something..."
      ref = "text" / >
      <input type="submit" value="Post" /> < /form>
    );
  }
});

var Comment = React.createClass({
  rawMarkUp: function () {
    var rawMarkUp = marked(this.props.children.toString(), {
      sanitize: true
    });
    return {
      __html: rawMarkUp
    };
  },
  render: function () {
    return (
      <div>
      <h2>
        {this.props.author}
      </h2>
      <span dangerouslySetInnerHTML={this.rawMarkUp()}/>
      </div>
    );
  }
})



ReactDOM.render(
  <CommentBox uri="public/data.json" pollInterval={2000}/>,
  document.getElementById('example')
);
