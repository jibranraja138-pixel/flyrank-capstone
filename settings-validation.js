const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateSettings({ displayName = "", email = "" } = {}) {
  const errors = {};
  const normalizedName = displayName.trim();
  const normalizedEmail = email.trim();

  if (!normalizedName) {
    errors.displayName = "Enter a display name.";
  } else if (normalizedName.length > 80) {
    errors.displayName = "Display name must be 80 characters or fewer.";
  }

  if (!normalizedEmail) {
    errors.email = "Enter your email address.";
  } else if (!EMAIL_PATTERN.test(normalizedEmail)) {
    errors.email = "Enter a valid email address, such as name@example.com.";
  }

  return errors;
}
