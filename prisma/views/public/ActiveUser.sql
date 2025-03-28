SELECT
  email,
  provider,
  name,
  created_at,
  deleted_at,
  account_id,
  updated_at,
  profile_image_url,
  notification_token,
  marketing_notification_consent,
  service_notification_consent,
  privacy_policy_consent,
  terms_of_service_consent,
  id
FROM
  "user" u
WHERE
  (deleted_at IS NULL);