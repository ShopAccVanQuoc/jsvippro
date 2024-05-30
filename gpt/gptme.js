var obj = JSON.parse($response.body);
obj ={
    "object": "user",
    "id": "user-NMC9Q1Hk4wXnyjZRsquhNyPe",
    "email": "gpt.shopaccvanquoc@vanquocis.me",
    "name": "ShopAccVanQuoc",
    "picture": "https://s.gravatar.com/avatar/de2d0571a59515db7b9934b2405ae9e8?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fco.png",
    "created": 1699965346,
    "phone_number": "+84999999999",
    "mfa_flag_enabled": true,
    "groups": [],
    "orgs": {
        "object": "list",
        "data": [
            {
                "object": "organization",
                "id": "org-IBj0YlgzF4QMVfKd0cqQFW5E",
                "created": 1699965346,
                "title": "Personal",
                "name": "user-nmc9q1hk4wxnyjzrsquhnype",
                "description": "Crack By ShopAccVannQuoc",
                "personal": true,
                "settings": {
                    "threads_ui_visibility": "NONE",
                    "usage_dashboard_visibility": "ANY_ROLE"
                },
                "parent_org_id": null,
                "is_default": true,
                "role": "owner",
                "projects": {
                    "object": "list",
                    "data": []
                },
                "groups": []
            }
        ]
    },
    "has_projects_archive": true,
    "response_format": true,
    "has_payg_project_spend_limit": true,
    "amr": []
}
$done({body: JSON.stringify(obj)});
