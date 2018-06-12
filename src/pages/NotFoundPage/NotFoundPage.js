import React, { Component } from 'react';

class NotFoundPage extends Component {
  render() {
    return (
      <div className="Container">
        <div className="alert alert-danger" role="alert">
          Không tìm thấy trang
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
