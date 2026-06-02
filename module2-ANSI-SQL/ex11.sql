-- Task 11: Daily New User Count

USE event_portal;

SELECT
    registration_date,
    COUNT(user_id) AS user_count
FROM Users
WHERE registration_date >= CURDATE() - INTERVAL 7 DAY
GROUP BY registration_date
ORDER BY registration_date;