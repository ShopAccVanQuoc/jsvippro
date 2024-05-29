var obj = JSON.parse($response.body);

obj = 
{
    "accounts": {
        "f6885355-edd2-4a02-b75e-aa1032238df2": {
            "account": {
                "account_user_role": "account-owner",
                "account_user_id": "user-VgV4FEE9jRjfGBW338jBMXeR__f6885355-edd2-4a02-b75e-aa1032238df2",
                "processor": {
                    "a001": {
                        "has_customer_object": true
                    },
                    "b001": {
                        "has_transaction_history": true
                    },
                    "c001": {
                        "has_transaction_history": true
                    }
                },
                "account_id": "f6885355-edd2-4a02-b75e-aa1032238df2",
                "organization_id": null,
                "is_most_recent_expired_subscription_gratis": true,
                "has_previously_paid_subscription": true,
                "name": null,
                "profile_picture_id": null,
                "profile_picture_url": null,
                "structure": "personal",
                "plan_type": "plus",
                "is_deactivated": false,
                "promo_data": {},
                "reseller_hosted_account": false
            },
            "features": [
                "arkose_enabled",
                "arkose_enabled_for_subscription",
                "bizmo_settings",
                "breeze_available",
                "chat_preferences_available",
                "chatgpt_ios_attest",
                "chatgpt_team_plan",
                "d3_controls",
                "d3_editor_gpts",
                "gizmo_reviews",
                "gizmo_support_emails",
                "invite_referral",
                "memory_history_enabled",
                "mfa",
                "model_ab_use_v2",
                "new_plugin_oauth_endpoint",
                "paragen_mainline_alternative",
                "privacy_policy_nov_2023",
                "shareable_links",
                "shared_websocket",
                "starter_prompts",
                "targeted_replies",
                "thumbs_down_only",
                "user_settings_announcements"
            ],
            "entitlement": {
                "subscription_id": "8b397040-7c3e-4fee-b8df-2d0f37a34831",
                "has_active_subscription": true,
                "subscription_plan": "chatgptplusplan",
                "expires_at": "2024-06-29T23:22:29+00:00",
                "billing_period": null
            },
            "rate_limits": [],
            "last_active_subscription": {
                "subscription_id": "8b397040-7c3e-4fee-b8df-2d0f37a34831",
                "purchase_origin_platform": "chatgpt_web",
                "will_renew": true
            },
            "is_eligible_for_yearly_plus_subscription": truetrue
        },
        "default": {
            "account": {
                "account_user_role": "account-owner",
                "account_user_id": "user-VgV4FEE9jRjfGBW338jBMXeR__f6885355-edd2-4a02-b75e-aa1032238df2",
                "processor": {
                    "a001": {
                        "has_customer_object": true
                    },
                    "b001": {
                        "has_transaction_history": true
                    },
                    "c001": {
                        "has_transaction_history": true
                    }
                },
                "account_id": "f6885355-edd2-4a02-b75e-aa1032238df2",
                "organization_id": null,
                "is_most_recent_expired_subscription_gratis": false,
                "has_previously_paid_subscription": true,
                "name": null,
                "profile_picture_id": null,
                "profile_picture_url": null,
                "structure": "personal",
                "plan_type": "plus",
                "is_deactivated": false,
                "promo_data": {},
                "reseller_hosted_account": false
            },
            "features": [
                "arkose_enabled",
                "arkose_enabled_for_subscription",
                "bizmo_settings",
                "breeze_available",
                "chat_preferences_available",
                "chatgpt_ios_attest",
                "chatgpt_team_plan",
                "d3_controls",
                "d3_editor_gpts",
                "gizmo_reviews",
                "gizmo_support_emails",
                "invite_referral",
                "memory_history_enabled",
                "mfa",
                "model_ab_use_v2",
                "new_plugin_oauth_endpoint",
                "paragen_mainline_alternative",
                "privacy_policy_nov_2023",
                "shareable_links",
                "shared_websocket",
                "starter_prompts",
                "targeted_replies",
                "thumbs_down_only",
                "user_settings_announcements"
            ],
            "entitlement": {
                "subscription_id": "8b397040-7c3e-4fee-b8df-2d0f37a34831",
                "has_active_subscription": true,
                "subscription_plan": "chatgptplusplan",
                "expires_at": "2099-06-11T23:22:29+00:00",
                "billing_period": null
            },
            "rate_limits": [],
            "last_active_subscription": {
                "subscription_id": "8b397040-7c3e-4fee-b8df-2d0f37a34831",
                "purchase_origin_platform": "chatgpt_web",
                "will_renew": true
            },
            "is_eligible_for_yearly_plus_subscription": false
        }
    },
    "account_ordering": [
        "f6885355-edd2-4a02-b75e-aa1032238df2"
    ]
}

$done({body: JSON.stringify(obj)});
