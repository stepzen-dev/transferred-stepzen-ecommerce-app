import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import {
  GET_PRODUCT_BY_ID_QUERY,
  GET_PRODUCT_REVIEWS_BY_ID_QUERY,
} from '../../queries/product.queries';

const ProductReviews = () => {
  const { productId } = useParams();

  const { data: productData } = useQuery(GET_PRODUCT_BY_ID_QUERY, {
    variables: { id: productId },
  });

  const { data: reviewsData, error, loading } = useQuery(
    GET_PRODUCT_REVIEWS_BY_ID_QUERY,
    {
      variables: { id: productId },
    }
  );

  if (error) {
    return <p>Error...</p>;
  }

  if (loading) {
    return <p>Loading....</p>;
  }

  const product = productData?.product;
  const reviews = reviewsData?.findReviews;

  const average = (list) => {
    let total = 0;

    list.forEach((review) => {
      total += review.rating;
    });

    return Math.round(total / list.length);
  };

  if (!reviews.length) {
    return null;
  }

  return (
    <div className="card">
      <div className="card-content">
        <div className="columns">
          <div className="column">
            <h3 className="is-size-4">
              Reviews for "{product?.title}"
              <br />
              <small>
                <span role="img">
                  {[...Array(average(reviews))].map((_, index) => (
                    <span aria-label="" key={`review_star_${index}`} role="img">
                      ⭐️
                    </span>
                  ))}
                </span>{' '}
                ({<>{average(reviews)}</>}, {reviews.length}{' '}
                {`${reviews.length === 1 ? 'review' : 'reviews'}`})
              </small>
            </h3>
          </div>
        </div>
        {reviews.length && product ? (
          <div className="columns">
            <div className="column is-8">
              {reviews.map((review) => (
                <article
                  className="media"
                  key={`product_review_${product.id}_${review.id}`}
                >
                  <figure className="media-left">
                    <p className="image is-64x64">
                      <img
                        src="https://bulma.io/images/placeholders/128x128.png"
                        alt=""
                      />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p>{review.comment}</p>
                      {review.rating.length
                        ? [...Array(review.rating)].map((_, index) => (
                            <span
                              aria-label=""
                              key={`review_comment_${review.id}_${index}_stars`}
                              role="img"
                            >
                              ⭐️
                            </span>
                          ))
                        : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="column is-4"></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductReviews;
