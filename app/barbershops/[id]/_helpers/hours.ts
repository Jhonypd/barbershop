/** @format */

import { setHours, setMinutes, format, addMinutes } from "date-fns";

export function generateDayTimeList(date: Date): string[] {
  const currentHour = new Date();
  const startTime = setMinutes(setHours(date, 9), 0);
  const endTime = setMinutes(setHours(date, 21), 0);
  const interval = 45;
  const timeList: string[] = [];

  let currentTime = startTime;

  while (currentTime <= endTime && currentHour) {
    timeList.push(format(currentTime, "HH:mm"));
    currentTime = addMinutes(currentTime, interval);
  }

  return timeList;
}
