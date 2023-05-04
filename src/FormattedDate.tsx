import { useState } from "react";

export function FormattedDate({ date }: { date: any }) {
  const [readableDate, SetReadableDate] = useState("");

  const setDate = () => {
    const minutesNow = Math.floor(Date.now() / 60000);
    const givenDateInMinutes = Math.floor(date / 60000);
    const diffInMinutes = minutesNow - givenDateInMinutes;

    console.log({ diffInMinutes });

    if (diffInMinutes < 1) {
      return SetReadableDate("few seconds ago");
    }

    if (diffInMinutes >= 1 && diffInMinutes < 2) {
      return SetReadableDate("1 minute ago");
    }

    if (diffInMinutes >= 2 && diffInMinutes < 60) {
      return SetReadableDate("few minutes ago");
    }

    const minutesInDay = 24 * 60;
    const minutesInMonths = 30 * minutesInDay;

    if (diffInMinutes >= 60 && diffInMinutes < minutesInDay) {
      return SetReadableDate("few hourse ago");
    }

    if (diffInMinutes >= minutesInDay && diffInMinutes < minutesInMonths) {
      return SetReadableDate("days ago");
    }

    if (diffInMinutes >= minutesInMonths) {
      return SetReadableDate("months ago");
    }
  };

  useState(() => {
    setInterval(() => {
      setDate();
    }, 1000);
  }, []);

  return <div>{readableDate}</div>;
}
