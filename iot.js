

const express=require('express');
const linebot = require('linebot');



const bot = linebot({
  channelId: '1619264201',
  channelSecret: '0ee98a3e5b7ea53216874be4d8cfb8f7',
  channelAccessToken: 'g8Urv+qQGqlT+HA2grzpAh4w6F7Gg3lXT95lGREIttGFbRYGj70pycK35H0LojLoTvgkbzwls/ZyAlJvWfcDzxVMX/UWXJj+g1HwfbwzF0n21/JeI1xV6sfPwcGIlBhBN8rJtyXTUTG8U0K//bxRwgdB04t89/1O/w1cDnyilFU='
});
/*
var text ='{ "type": "template", "altText": "您已在中信消費29.9美元", "template": {'+
'"type": "carousel","actions": [],"columns": ['+
'{"thumbnailImageUrl": "https://img.everrich.com/img/p/5/2/8/9/1/52891-large_default.jpg","title": "好吃到哭的世界级巧克力","text": "GUYLIAN SEA SHELL 貝殼巧克力","actions": ['+
'{"type": "postback","label": "確認","text": "確認","data": "領取完畢"}]}]}}';

'{"type": "flex","altText": "您有高級巧克力可以免費領取~~","contents": '+
      '{"type": "bubble","body": '+
      '{"type": "box","layout": "vertical","contents": ['+
      '{"type": "image","url": "https://img.everrich.com/img/p/5/2/8/9/1/52891-large_default.jpg"},'+
      '{"type": "text","text": "chocolate"}]}}}';

      '{ "type": "template", "altText": "您有高級巧克力可以免費領取~~", "template": {'+
   '"type": "carousel","actions": [],"columns": ['+
   '{"thumbnailImageUrl": "https://img.everrich.com/img/p/5/2/8/9/1/52891-large_default.jpg","title": "好吃到哭的世界级巧克力","text": "GUYLIAN SEA SHELL 貝殼巧克力","actions": ['+
   '{"type": "postback","label": "領取","text": "我想領取高級巧克力~~","data": "領取完畢"}]}]}}';
    
      
var obj = JSON.parse(text);
*/  
const app = express();
const linebotParser = bot.parser();

app.post('/linewebhook', linebotParser);
//app.listen(3000);
bot.on('message', function (event) {
    // event.message.text是使用者傳給bot的訊息
    // 準備要回傳的內容
    var replyMsg = `Hello你剛才說的是:${event.message.text}`;
    // 透過event.reply(要回傳的訊息)方法將訊息回傳給使用者
    event.reply(replyMsg).then(function (data) {
        // 當訊息成功回傳後的處理
    }).catch(function (error) {
        // 當訊息回傳失敗後的處理
    });
});
/*
// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
    // event.message.text是使用者傳給bot的訊息
    // 準備要回傳的內容
    if(event.message.text=="請給我高級巧克力優惠卷"){
        var replyMsg = obj;
        event.reply(replyMsg).then(function (data) {
            // 當訊息成功回傳後的處理
        }).catch(function (error) {
            // 當訊息回傳失敗後的處理
        });
    }else if(event.message.text=="你好"){
        var replyMsg = `你好你好 小秘書很高興為您服務`;
        // 透過event.reply(要回傳的訊息)方法將訊息回傳給使用者
        event.reply(replyMsg).then(function (data) {
            // 當訊息成功回傳後的處理
        }).catch(function (error) {
            // 當訊息回傳失敗後的處理
        });  
    }else if(event.message.text=="我想領取高級巧克力~~"){
        var replyMsg = `恭喜您已成功領取高級巧克力 請慢慢享用`;
        // 透過event.reply(要回傳的訊息)方法將訊息回傳給使用者
        event.reply(replyMsg).then(function (data) {
            // 當訊息成功回傳後的處理
        }).catch(function (error) {
            // 當訊息回傳失敗後的處理
        });  
    }else if(event.message.text=="開冷氣"){
        var replyMsg = `冷氣已開啟 溫度為26度`;
        // 透過event.reply(要回傳的訊息)方法將訊息回傳給使用者
        event.reply(replyMsg).then(function (data) {
            // 當訊息成功回傳後的處理
        }).catch(function (error) {
            // 當訊息回傳失敗後的處理
        });  
    }else{
    var replyMsg = `Hello你剛才說的是:${event.message.text}`;
        // 透過event.reply(要回傳的訊息)方法將訊息回傳給使用者
        event.reply(replyMsg).then(function (data) {
            // 當訊息成功回傳後的處理
        }).catch(function (error) {
            // 當訊息回傳失敗後的處理
        });
    }
});



*/
var server=app.listen(process.env.PORT || 2000,function(){
  var port=server.address().port;
  console.log('LineBot is running on port'+port);
});

