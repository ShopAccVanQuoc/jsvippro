var obj = JSON.parse($response.body);

obj= {"success":true,"result":{"_id":"64a6e41d8e1f4853840c8e7e","playerSetting":{"url":"64a6e41d8e1f4853840c8e7e"},"trustTypes":[],"isOpenReceivingMessage":true,"rank":"0.png","avatar":"avatar26.png","name":"Levanquochihi","city":"5b99f9e35180d13ea22a9814","country":"5b99f97c978dff3d115261c7","url":"xquocdeeptrai","totalMoney":9999999999999999999999,"email":"levanquocht21@gmail.com","role":"normal","user":"ee8d9528-a89b-43b8-9b07-4c55730d58fb","username":"levanquochihi","subscribingThemes":[],"themes":[],"pageUserId":"deprecated__","verifications":[{"type":"mail","verifiedAt":"2024-05-29T17:15:25.382Z"}],"timedate":"2024-05-29T17:15:25.383Z","timestamp":1717002925383}};
$done({body: JSON.stringify(obj)});
