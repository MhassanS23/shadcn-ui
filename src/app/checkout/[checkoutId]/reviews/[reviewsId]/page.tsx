export default async function ReviewsDetail({
  params,
}: {
  params: Promise<{ checkoutId: string; reviewsId: string }>
}) {
  const { checkoutId, reviewsId } = await params
  return (
    <>
      INI REVIEWS ID {reviewsId} PRODUCT ID {checkoutId}
    </>
  )
}
