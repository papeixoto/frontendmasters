export default async function getPastOrder(order) {
  const res = await fetch(`/api/past-order/${order}`);
  const json = await res.json();
  return json;
}
