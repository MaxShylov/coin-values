import { DateTime } from 'luxon';

const formatNumber = num =>
  num
    .toFixed(2)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

export const fixPrice = num => num && '$' + formatNumber(num);
export const fixPercent = num => num && formatNumber(num) + '%';
export const fixDate = date => date && DateTime.fromISO(date).toLocaleString();
