export default async function CheckoutDetails({
  params,
}: {
  params: Promise<{ checkoutId: string }>
}) {
  const checkoutId = (await params).checkoutId
  return <>INI CHECKOUT DETAIL {checkoutId}</>
}
