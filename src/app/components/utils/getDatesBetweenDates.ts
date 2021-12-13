export function getDatesBetweenDates(duration: number): Date[] {
  const today = new Date();
  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() + duration);

  let dates: Date[] = [];
  while (today < endDate) {
    dates = [...dates, new Date(today)];
    today.setDate(today.getDate() + 1);
  }
  console.log(dates);
  return dates;
}
