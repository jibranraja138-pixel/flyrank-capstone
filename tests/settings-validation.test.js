import test from "node:test";
import assert from "node:assert/strict";
import { validateSettings } from "../settings-validation.js";

test("requires a display name and email", () => {
  assert.deepEqual(validateSettings(), {
    displayName: "Enter a display name.",
    email: "Enter your email address.",
  });
});

test("rejects whitespace-only names and malformed email addresses", () => {
  const errors = validateSettings({ displayName: "  ", email: "student@" });
  assert.equal(errors.displayName, "Enter a display name.");
  assert.match(errors.email, /valid email address/);
});

test("rejects names longer than 80 characters", () => {
  const errors = validateSettings({ displayName: "a".repeat(81), email: "a@example.com" });
  assert.match(errors.displayName, /80 characters or fewer/);
  assert.equal(errors.email, undefined);
});

test("accepts trimmed name and a valid email", () => {
  assert.deepEqual(validateSettings({ displayName: "  Jordan Lee  ", email: "jordan@example.com" }), {});
});
