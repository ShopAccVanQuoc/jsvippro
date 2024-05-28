[rewrite_local]
# > GPT4 Script
^https:\/\/chatgpt\.com\/backend-api\/accounts\/check\/v4-2023-04-27\?timezone_offset_min=-420$ url script-response-body gpt4.js
^https:\/\/chatgpt\.com\/public-api\/conversation_limit$ url script-response-body gpt4.js
[MITM]
hostname = chatgpt.com
// Script to modify the response for specified URLs

// Check if the URL matches one of the specified patterns
const url1 = /^https:\/\/chatgpt\.com\/backend-api\/accounts\/check\/v4-2023-04-27\?timezone_offset_min=-420$/;
const url2 = /^https:\/\/chatgpt\.com\/public-api\/conversation_limit$/;

// Function to handle modifying the response
function modifyResponse(body) {
    // Parse the JSON response
    let response = JSON.parse(body);

    // Check the URL and modify the response accordingly
    if (url1.test($request.url)) {
        response = 
          {
    "accounts": {
        "bebdb533-2ab5-42d8-86d5-88b13bc8459a": {
            "account": {
                "account_user_role": "account-owner",
                "account_user_id": "user-NMC9Q1Hk4wXnyjZRsquhNyPe__bebdb533-2ab5-42d8-86d5-88b13bc8459a",
                "processor": {
                    "a001": {
                        "has_customer_object": true
                    },
                    "b001": {
                        "has_transaction_history": false
                    },
                    "c001": {
                        "has_transaction_history": true
                    }
                },
                "account_id": "bebdb533-2ab5-42d8-86d5-88b13bc8459a",
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
                "beta_features",
                "bizmo_settings",
                "breeze_available",
                "browsing_available",
                "chart_serialization",
                "chat_preferences_available",
                "chatgpt_ios_attest",
                "chatgpt_team_plan",
                "code_interpreter_available",
                "d3_controls",
                "d3_editor",
                "d3_editor_gpts",
                "dalle_3",
                "gizmo_reviews",
                "gizmo_support_emails",
                "graphite",
                "invite_referral",
                "memory_ga",
                "memory_history_enabled",
                "mfa",
                "model_ab_use_v2",
                "model_switcher",
                "new_plugin_oauth_endpoint",
                "paragen_mainline_alternative",
                "plugins_available",
                "privacy_policy_nov_2023",
                "shareable_links",
                "shared_websocket",
                "starter_prompts",
                "sunshine_available",
                "targeted_replies",
                "thumbs_down_only",
                "user_settings_announcements"
            ],
            "entitlement": {
                "subscription_id": "fe088bfa-49e3-4d4d-addf-9c149bf4cfd7",
                "has_active_subscription": true,
                "subscription_plan": "chatgptplusplan",
                "expires_at": "2024-06-19T20:58:36+00:00",
                "billing_period": null
            },
            "rate_limits": [],
            "last_active_subscription": {
                "subscription_id": "fe088bfa-49e3-4d4d-addf-9c149bf4cfd7",
                "purchase_origin_platform": "chatgpt_mobile_android",
                "will_renew": true
            },
            "is_eligible_for_yearly_plus_subscription": false
        },
        "default": {
            "account": {
                "account_user_role": "account-owner",
                "account_user_id": "user-NMC9Q1Hk4wXnyjZRsquhNyPe__bebdb533-2ab5-42d8-86d5-88b13bc8459a",
                "processor": {
                    "a001": {
                        "has_customer_object": true
                    },
                    "b001": {
                        "has_transaction_history": false
                    },
                    "c001": {
                        "has_transaction_history": true
                    }
                },
                "account_id": "bebdb533-2ab5-42d8-86d5-88b13bc8459a",
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
                "beta_features",
                "bizmo_settings",
                "breeze_available",
                "browsing_available",
                "chart_serialization",
                "chat_preferences_available",
                "chatgpt_ios_attest",
                "chatgpt_team_plan",
                "code_interpreter_available",
                "d3_controls",
                "d3_editor",
                "d3_editor_gpts",
                "dalle_3",
                "gizmo_reviews",
                "gizmo_support_emails",
                "graphite",
                "invite_referral",
                "memory_ga",
                "memory_history_enabled",
                "mfa",
                "model_ab_use_v2",
                "model_switcher",
                "new_plugin_oauth_endpoint",
                "paragen_mainline_alternative",
                "plugins_available",
                "privacy_policy_nov_2023",
                "shareable_links",
                "shared_websocket",
                "starter_prompts",
                "sunshine_available",
                "targeted_replies",
                "thumbs_down_only",
                "user_settings_announcements"
            ],
            "entitlement": {
                "subscription_id": "fe088bfa-49e3-4d4d-addf-9c149bf4cfd7",
                "has_active_subscription": true,
                "subscription_plan": "chatgptplusplan",
                "expires_at": "2029-06-19T20:58:36+00:00",
                "billing_period": null
            },
            "rate_limits": [],
            "last_active_subscription": {
                "subscription_id": "fe088bfa-49e3-4d4d-addf-9c149bf4cfd7",
                "purchase_origin_platform": "chatgpt_mobile_android",
                "will_renew": true
            },
            "is_eligible_for_yearly_plus_subscription": false
        }
    },
    "account_ordering": [
        "bebdb533-2ab5-42d8-86d5-88b13bc8459a"
    ]
}
        };
    } else if (url2.test($request.url)) {
        response = 
          {
    "message_cap": 99999999.0,
    "message_cap_window": 999999999999999.0,
    "message_disclaimer": {
        "textarea": "Crack By ShopAccVanQuoc.",
        "model-switcher": "ĐẸP TRAI SỐ 2 K AI SỐ 1.\n\nVui lòng kiểm tra lại sớm."
    }
}
    }

    // Return the modified response as a JSON string
    return JSON.stringify(response);
}

// Main entry point
(function() {
    let body = $response.body;
    body = modifyResponse(body);
    $done({ body });
})();
