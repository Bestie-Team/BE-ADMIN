SELECT
  name,
  description,
  gathering_date,
  address,
  invitation_image_url,
  created_at,
  deleted_at,
  updated_at,
  TYPE,
  ended_at,
  id,
  host_user_id,
  group_id
FROM
  gathering g
WHERE
  (deleted_at IS NULL);