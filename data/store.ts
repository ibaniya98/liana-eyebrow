interface StoreHour {
  open: number;
  close: number;
}

export const StoreHours: { [weekDay: string]: StoreHour } = {
  Sun: {
    open: 12,
    close: 16,
  },
  Mon: {
    open: 10,
    close: 19,
  },
  Tue: {
    open: 10,
    close: 19,
  },
  Wed: {
    open: 10,
    close: 19,
  },
  Thu: {
    open: 10,
    close: 19,
  },
  Fri: {
    open: 10,
    close: 19,
  },
  Sat: {
    open: 10,
    close: 18,
  },
};
