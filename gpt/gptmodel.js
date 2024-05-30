var obj = JSON.parse($response.body);
obj= {
    "models": [
        {
            "slug": "text-davinci-002-render-sha",
            "max_tokens": 8191,
            "title": "Default (GPT-3.5)",
            "description": "Mô hình nhanh nhất của chúng tôi, phù hợp với hầu hết các công việc hàng ngày.",
            "tags": [
                "gpt3.5"
            ],
            "capabilities": {},
            "product_features": {}
        },
        {
            "slug": "gpt-4",
            "max_tokens": 32767,
            "title": "GPT-4 (All Tools)",
            "description": "Tìm kiếm, Phân tích Dữ liệu Nâng cao và DALL·E giờ đã được tích hợp vào GPT-4",
            "tags": [
                "gpt4"
            ],
            "capabilities": {},
            "product_features": {
                "attachments": {
                    "type": "retrieval",
                    "accepted_mime_types": [
                        "application/x-powershell",
                        "message/rfc822",
                        "text/x-c++",
                        "text/x-typescript",
                        "text/x-rst",
                        "application/vnd.apple.keynote",
                        "text/x-python",
                        "application/json",
                        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        "text/x-makefile",
                        "application/x-yaml",
                        "text/x-asm",
                        "application/x-rust",
                        "text/javascript",
                        "application/pdf",
                        "application/javascript",
                        "text/plain",
                        "text/x-csharp",
                        "text/x-diff",
                        "text/vbscript",
                        "text/x-sh",
                        "text/x-java",
                        "application/x-scala",
                        "text/x-c",
                        "text/x-lisp",
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        "application/vnd.oasis.opendocument.text",
                        "text/x-tex",
                        "text/x-shellscript",
                        "text/xml",
                        "text/x-vcard",
                        "text/x-script.python",
                        "application/vnd.ms-powerpoint",
                        "text/x-php",
                        "text/rtf",
                        "application/msword",
                        "text/html",
                        "application/rtf",
                        "text/x-ruby",
                        "text/calendar",
                        "text/css",
                        "application/x-sql",
                        "application/vnd.apple.pages",
                        "text/markdown"
                    ],
                    "image_mime_types": [
                        "image/jpeg",
                        "image/png",
                        "image/webp",
                        "image/gif"
                    ],
                    "can_accept_all_mime_types": true
                }
            },
            "enabled_tools": [
                "tools",
                "tools2"
            ]
        },
        {
            "slug": "gpt-4o",
            "max_tokens": 32767,
            "title": "GPT-4o",
            "description": "Mô hình mới nhất và cao cấp nhất",
            "tags": [
                "gpt4o",
                "gpt4"
            ],
            "capabilities": {},
            "product_features": {
                "attachments": {
                    "type": "retrieval",
                    "accepted_mime_types": [
                        "application/x-powershell",
                        "message/rfc822",
                        "text/x-c++",
                        "text/x-typescript",
                        "text/x-rst",
                        "application/vnd.apple.keynote",
                        "text/x-python",
                        "application/json",
                        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        "text/x-makefile",
                        "application/x-yaml",
                        "text/x-asm",
                        "application/x-rust",
                        "text/javascript",
                        "application/pdf",
                        "application/javascript",
                        "text/plain",
                        "text/x-csharp",
                        "text/x-diff",
                        "text/vbscript",
                        "text/x-sh",
                        "text/x-java",
                        "application/x-scala",
                        "text/x-c",
                        "text/x-lisp",
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        "application/vnd.oasis.opendocument.text",
                        "text/x-tex",
                        "text/x-shellscript",
                        "text/xml",
                        "text/x-vcard",
                        "text/x-script.python",
                        "application/vnd.ms-powerpoint",
                        "text/x-php",
                        "text/rtf",
                        "application/msword",
                        "text/html",
                        "application/rtf",
                        "text/x-ruby",
                        "text/calendar",
                        "text/css",
                        "application/x-sql",
                        "application/vnd.apple.pages",
                        "text/markdown"
                    ],
                    "image_mime_types": [
                        "image/jpeg",
                        "image/png",
                        "image/webp",
                        "image/gif"
                    ],
                    "can_accept_all_mime_types": true
                }
            },
            "enabled_tools": [
                "tools",
                "tools2"
            ]
        }
    ],
    "internal_groups": [],
    "categories": [
        {
            "category": "gpt_3.5",
            "human_category_name": "GPT-3.5",
            "human_category_short_name": "3.5",
            "color": "#47C761",
            "icon": "bolt",
            "subscription_level": "free",
            "default_model": "text-davinci-002-render-sha",
            "code_interpreter_model": "text-davinci-002-render-sha-code-interpreter",
            "plugins_model": "text-davinci-002-render-sha-plugins",
            "short_explainer": "Tuyệt vời cho công việc hàng ngày",
            "tagline": "Nhanh nhất"
        },
        {
            "category": "gpt_4",
            "human_category_name": "GPT-4",
            "human_category_short_name": "4",
            "color": "#5B41F9",
            "icon": "star",
            "subscription_level": "plus",
            "default_model": "gpt-4",
            "plugins_model": "gpt-4-plugins",
            "short_explainer": "Mô hình cao cấp dành cho các tác vụ phức tạp",
            "tagline": "Thông minh"
        },
        {
            "category": "AG8PqS2q",
            "human_category_name": "GPT-4o",
            "human_category_short_name": "4o",
            "color": "#00BCE5",
            "icon": "stars",
            "subscription_level": "plus",
            "default_model": "gpt-4o",
            "short_explainer": "Mô hình mới nhất và cao cấp nhất",
            "tagline": "Thông minh và phản hồi nhanh chóng"
        }
    ]
};
$done({body: JSON.stringify(obj)});
