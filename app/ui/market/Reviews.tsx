import { getReviews } from "@/app/lib/queries";

interface ReviewsProps {
  productId: string;
}

export default async function Reviews({ productId }: ReviewsProps) {
  const reviews = await getReviews(productId);

  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <div>
      <h1>Reviews</h1>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>
            <strong>{review.full_name}</strong>: {review.comment} (Rating: {review.rating})
          </p>
        </div>
      ))}
    </div>
  );
}