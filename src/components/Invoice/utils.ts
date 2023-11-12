export function formatMoney(total: number) {
  return total.toLocaleString("en-US", {
    style: "currency",
    currency: "GBP",
  });
}

export function formatStatus(status: string) {
  return status[0].toUpperCase() + status.slice(1);
}
