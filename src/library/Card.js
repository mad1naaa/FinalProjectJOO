import React, { Component } from "react";
import Modal from "./Modal";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      bookItem: null,
    };
  }

  handleCardClick = (item) => {
    this.setState({
      show: true,
      bookItem: item,
    });
  };

  handleCloseModal = () => {
    this.setState({
      show: false,
      bookItem: null,
    });
  };

  render() {
    const { book } = this.props;
    const { show, bookItem } = this.state;

    return (
      <>
        {book.map((item, index) => {
          let thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;
          let amount =
            item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
          if (thumbnail != undefined && amount != undefined) {
            return (
              <div
                className="card"
                key={index}
                onClick={() => this.handleCardClick(item)}
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">&#8377;{amount}</p>
                </div>
              </div>
            );
          }
        })}
        {show && (
          <Modal show={show} item={bookItem} onClose={this.handleCloseModal} />
        )}
      </>
    );
  }
}

export default Card;
