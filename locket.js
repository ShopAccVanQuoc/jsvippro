var body = $response.body;
var objc = JSON.parse(body);

objc = {
  "request_date": "2008-10-20T19:14:46Z",
  "request_date_ms": 1717528486274,
  "subscriber": {
    "entitlements": {
      "Gold": {
        "expires_date": "2099-05-13T16:38:15Z",
        "grace_period_expires_date": null,
        "product_identifier": "locket_399_1m_only",
        "purchase_date": "2008-10-20T19:14:46Z"
      }
    },
    "first_seen": "2024-03-18T05:28:38Z",
    "last_seen": "2024-06-04T11:54:48Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "Mi3jJpmur4NoòQ9PlUDqNlKOpN13",
    "original_application_version": "1",
    "original_purchase_date": "2008-10-20T19:14:46Z",
    "other_purchases": {},
    "subscriptions": {
      "locket_399_1m_only": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "expires_date": "2099-05-13T16:38:15Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2008-10-20T19:14:46Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2008-10-20T19:14:46Z",
        "refunded_at": "2099-05-13T16:38:15Z",
        "store": "app_store",
        "store_transaction_id": "2000000597040919",
        "unsubscribe_detected_at": "2024-05-13T16:32:37Z"
      }
    }
  }
};

body = JSON.stringify(objc);
$done({body});
