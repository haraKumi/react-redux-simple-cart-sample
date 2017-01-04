export function formatPrice(value) {
  return value.toString().replace(/(\d)(?=(\d{3})+$)/g , '$1,');
}