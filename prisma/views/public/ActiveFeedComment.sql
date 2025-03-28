SELECT
  content,
  created_at,
  deleted_at,
  id,
  feed_id,
  writer_id
FROM
  feed_comment fc
WHERE
  (deleted_at IS NULL);