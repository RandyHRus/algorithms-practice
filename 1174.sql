SELECT round(100 * sum(order_date = customer_pref_delivery_date) / count(*), 2)
    AS immediate_percentage
FROM (
    SELECT d1.order_date, d1.customer_pref_delivery_date
    FROM Delivery d1
    WHERE (d1.order_date = (
        SELECT min(order_date) FROM Delivery d4
        WHERE d4.customer_id = d1.customer_id))
) as d2