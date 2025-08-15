export const VALIDATION_REGEX = {
  zipCode: /^\d{5}$/,
  cityState: /^[A-Za-z\s]+,\s*([A-Za-z]{2}|[A-Za-z\s]+)$/,
} as const;
