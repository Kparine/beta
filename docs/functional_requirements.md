# PatientPortal Functional Requirements

- The "Patient" dropdown should contain the names of all patients available for selection. The current set of patients can be obtained via [the API](./api.md).
- Selecting a patient from the dropdown should load dashboard data for that patient from [the API](./docs/api.md).
- If a benefit is active for a patient, the corresponding section of the dashboard should be rendered with a green background and green checkmark.
- If a Call to Action (CTA) is defined for a benefit, it should be displayed.
  - For CTAs of type `button`, a button should be rendered with the provided text and linking to the provided url.
  - For CTAs of type `tel`, the corresponding phone number should be rendered as in the design.
