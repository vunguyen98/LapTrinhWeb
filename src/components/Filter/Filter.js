import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  render() {
    return (
      <div className="Filter">
        <div className="row">
            <div className="col-md-9" style={{backgroundColor: 'red', height: 100}} />
            <div className="col-md-3">
            <div className="containFilter">
                <div className="headerFilter"><b>Lọc sản phẩm</b></div>
                <div className="titleFilter" data-toggle="collapse" data-target="#Gia">Giá</div>
                <div id="Gia" className="collapse contentFilter">
                <div className="checkbox">
                    <label><input type="checkbox" defaultValue /> dưới 100.000đ</label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" defaultValue /> 100.000 - 300.000đ</label>
                </div>
                <div className="checkbox disabled">
                    <label><input type="checkbox" defaultValue /> 300.000 - 500.000đ</label>
                </div>
                <div className="checkbox disabled">
                    <label><input type="checkbox" defaultValue /> Trên 500.000đ</label>
                </div>
                </div>
            </div>
            </div>
        </div>

      </div>
    );
  }
}

export default Filter;