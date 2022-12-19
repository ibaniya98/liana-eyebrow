import { StoreHour } from "../data/store";

export function getFormattedHour(time: number): string {
  if (time < 0 || time > 24) {
    return "";
  }

  let meridiem = "AM";

  if (time >= 12) {
    meridiem = "PM";
  }

  let hour = time;
  if (time > 12) {
    hour = time % 12;
  }

  return `${String(hour).padStart(2, "0")}:00 ${meridiem}`;
}

function getWeekdayForTimezone(currentDate: Date, timeZone: string) {
  return currentDate.toLocaleString("en-US", {
    timeZone: timeZone,
    weekday: "short",
  });
}

function getHourForTimezone(currentDate: Date, timeZone: string) {
  const hour = currentDate.toLocaleTimeString("en-US", {
    timeZone: timeZone,
    hour: "numeric",
    hour12: false,
  });
  return Number(hour);
}

export function getStoreStatus(
  storeHours: { [weekDay: string]: StoreHour },
  storeTimezone: string
): string {
  const currentTime = new Date();

  const currentWeekDay = getWeekdayForTimezone(currentTime, storeTimezone);
  const currentHour = getHourForTimezone(currentTime, storeTimezone);

  // determine if the store is still open for today
  if (currentWeekDay in storeHours) {
    const { open, close } = storeHours[currentWeekDay];
    if (Number(currentHour) >= open && Number(currentHour) <= close) {
      return `Open until ${getFormattedHour(close)} today`;
    }
  }

  // determine when it opens tomorrow
  currentTime.setDate(currentTime.getDate() + 1);
  const nextWeekDay = getWeekdayForTimezone(currentTime, storeTimezone);
  if (nextWeekDay in storeHours) {
    const { open } = storeHours[nextWeekDay];
    return `Opening at ${getFormattedHour(open)} tomorrow`;
  }

  return "";
}
