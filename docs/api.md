# PatientPortal API

This API provides data about benefits available patients via the PatientPortal.

It is accessible at the URL `https://api.sr-frontend-dev.hiring.toolhouse.cloud`, and provides two endpoints.

## List Patients - `GET /api/v1/patients`

Retrieves the list of known patients.

### Response - `200 OK`

Lists patients in the system.

## Get Benefits for Patient `GET /api/v1/patients/:id/benefits`

Retrieves a JSON object describing benefits available for the given patient.

### Response - `200 OK`

The patient was found.

### Response - `404 Not Found`

The specified patient could not be found.
