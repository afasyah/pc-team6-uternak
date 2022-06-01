import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/en";
import "dayjs/locale/id";

dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);

/**
 * Helpers
 * ===
 * ### Check Empty
 * Check emptyness of an object, array, string or even undefiend data type.
 * @param {Any} data
 */
export const isEmpty = (
  data: [] | Record<string, any> | string | null
): boolean => {
  let result = false;

  if (typeof data === "object") {
    if (JSON.stringify(data) === "{}" || JSON.stringify(data) === "[]")
      result = true;
    if (!data) result = true;
  } else if (typeof data === "string") {
    if (!data.trim()) result = true;
  } else if (typeof data === "undefined") {
    result = true;
  }

  return result;
};

/**
 * Helpers
 * ===
 * ### Encode Query Param
 * Convert object with keys to query params
 * @param {Object} data - Data object that want to converted to query param string
 */
export const encodeQueryData = (data: Record<string, any>): string => {
  const res: Array<any> = [];
  const keys = Object.keys(data).map((key) => key);
  keys.forEach((d) => {
    if (d && !isEmpty(data[d])) {
      res.push(`${encodeURIComponent(d)}=${encodeURIComponent(data[d])}`);
    }
  });

  return res.join("&");
};

/**
 * Helpers
 * ===
 * ### Currency Formatter
 * Change number to currency format
 * @param {number} data - Data object that want to converted to query param string
 */
export const currency = (value: number): string =>
  new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    style: "currency",
  }).format(value);

/**
 * Helpers
 * ===
 * ### Date Formatter
 * Change ISO date format to something more readable
 * @param {Date} date - Date object that want to converted to Date string
 * @param {string} format - Date type format
 */
export const dateFormat = (
  date: string,
  format?: string,
  locale?: "en" | "id"
): string => {
  const res = dayjs(date).format(format);

  return res.toString();
};

/**
 * Helpers
 * ===
 * ### Date From Now Formatter
 * Change ISO date format to duration from now
 * @param {Date} date - Date object that want to converted to Date string
 */
export const dateFromNow = (date: Date | string): string =>
  dayjs(date).fromNow();

export default { currency, dateFormat, dateFromNow, isEmpty, encodeQueryData };
