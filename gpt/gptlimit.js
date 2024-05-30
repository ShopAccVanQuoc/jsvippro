var obj = JSON.parse($response.body);
obj = {
    "message_cap": 99999.0,
    "message_cap_window": 99999.0,
    "message_disclaimer": {
        "textarea": "Crack By ShopAccVannQuoc",
        "model-switcher": "Bạn đã đạt đến giới hạn GPT-4, ngưỡng cho phép tất cả người dùng ChatGPT Plus cơ hội dùng thử mô hình.\n\nVui lòng kiểm tra lại sớm."
    }
};
$done({body: JSON.stringify(obj)});
