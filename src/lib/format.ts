const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface ParsedDate {
  year: number;
  month?: number;
  day?: number;
}

// Content dates are written as M/D/YYYY, as M/YYYY when the day is unknown, or as YYYY
// when only the year is known.
function parseDate(value: string): ParsedDate {
  const full = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(value);
  const monthYear = /^(\d{1,2})\/(\d{4})$/.exec(value);
  if (full) {
    const month = Number(full[1]);
    const day = Number(full[2]);
    if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
      return { year: Number(full[3]), month, day };
    }
  } else if (monthYear) {
    const month = Number(monthYear[1]);
    if (month >= 1 && month <= 12) return { year: Number(monthYear[2]), month };
  } else if (/^\d{4}$/.test(value)) {
    return { year: Number(value) };
  }
  throw new Error(`Unsupported date "${value}": use M/D/YYYY, M/YYYY or YYYY`);
}

export function formatDate(value: string): string {
  const { year, month, day } = parseDate(value);
  if (month && day) return `${MONTHS[month - 1]} ${day}, ${year}`;
  if (month) return `${MONTHS[month - 1]} ${year}`;
  return String(year);
}

export function toIsoDate(value: string): string {
  const { year, month, day } = parseDate(value);
  if (!month) return String(year);
  const yearMonth = `${year}-${String(month).padStart(2, '0')}`;
  return day ? `${yearMonth}-${String(day).padStart(2, '0')}` : yearMonth;
}

export function publicationLinkLabel(url: string): 'PDF' | 'DOI' | 'Paper' {
  if (/^https?:\/\/(dx\.)?doi\.org\//i.test(url)) return 'DOI';
  if (/\.pdf(?:$|[?#])/i.test(url) || /\/doi\/pdf\//i.test(url)) return 'PDF';
  return 'Paper';
}
