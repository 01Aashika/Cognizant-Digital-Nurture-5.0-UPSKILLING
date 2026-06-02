-- Task 5: Most Active Cities

USE event_portal;

SELECT
    u.city,
    COUNT(DISTINCT r.user_id) AS registrations
FROM Users u
JOIN Registrations r
ON u.user_id = r.user_id
GROUP BY u.city
ORDER BY registrations DESC
LIMIT 5;