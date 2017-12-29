### API
- POST `/get_face_id` @file <- image (.png/.jpeg):
  Result:
  ```json
    {"face_id": "uuid or -1 if it was not found",
      "error": "str"}
  ```
- POST `/new_image` @file <- image (.png/.jpeg):
  Result:
  ```json
    {"face_id": "uuid of new image or found image",
      "error": "str"}
  ```
