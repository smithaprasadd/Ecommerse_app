import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/fakeStore";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedImg, setSelectedImg] = useState("");

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
      setSelectedImg(data.image);
    });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  // Fake multiple images (FakeStore gives only one)
  const images = [product.image, product.image, product.image];

  return (
    <div className="product-container">
      {/* IMAGE SECTION */}
      <div className="product-images">
        <img
          src={selectedImg}
          alt={product.title}
          className="product-main-img"
        />

        <div className="thumbnail-row">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumbnail"
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
      </div>

      {/* DETAILS SECTION */}
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>

        <p className="product-desc">{product.description}</p>

        <div className="product-price">₹{product.price}</div>

        <div className="rating">
          ⭐ {product.rating.rate} / 5
        </div>

        <button className="add-cart-btn">Add to Cart</button>

        <hr className="divider" />

        {/* REVIEWS */}
        <ReviewSection />
      </div>
    </div>
  );
}

export default ProductDetails;

/* ===========================
   REVIEW SECTION COMPONENT
=========================== */

function ReviewSection() {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([
    { name: "Rahul", rating: 5, comment: "Excellent product!" },
    { name: "Anita", rating: 4, comment: "Good quality, worth the price." },
  ]);

  const submitReview = () => {
    if (!review.trim()) return;

    setReviews([
      ...reviews,
      { name: "You", rating: 5, comment: review },
    ]);

    setReview("");
  };

  return (
    <div className="review-box">
      <h3>Customer Reviews</h3>

      {reviews.map((r, index) => (
        <div key={index} className="review-item">
          <strong>{r.name}</strong>{" "}
          <span>⭐ {r.rating}</span>
          <p>{r.comment}</p>
        </div>
      ))}

      <h4>Add a Review</h4>

      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review..."
      />

      <button onClick={submitReview}>Submit Review</button>
    </div>
  );
}
