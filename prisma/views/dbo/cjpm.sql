SELECT
  dbo.xsxx.id,
  dbo.xsxx.snumber,
  dbo.xsxx.name,
  dbo.xsxx.class,
  t1.grade,
  (
    SELECT
      COUNT(*) AS Expr1
    FROM
      (
        SELECT
          SUM(grade) AS grade
        FROM
          dbo.xxxx
        GROUP BY
          snumber
      ) AS t2
    WHERE
      (grade > t1.grade)
  ) + 1 AS rank
FROM
  dbo.xsxx
  JOIN (
    SELECT
      snumber,
      SUM(grade) AS grade
    FROM
      dbo.xxxx AS xxxx_1
    GROUP BY
      snumber
  ) AS t1 ON t1.snumber = dbo.xsxx.snumber;