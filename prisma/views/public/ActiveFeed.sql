SELECT
  content,
  created_at,
  deleted_at,
  updated_at,
  id,
  writer_id,
  gathering_id
FROM
  feed f
WHERE
  (deleted_at IS NULL);