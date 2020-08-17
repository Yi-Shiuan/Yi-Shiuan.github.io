(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{kG9J:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return a})),t.d(n,"default",(function(){return b}));var c=t("zLVn"),l=(t("q1tI"),t("7ljp")),a={title:"【Redis】Redis Pub/Sub 製作應用程式間推播通知",description:"在很多時候我們的部屬環境是很複雜的，無法使用單一個應用程式來解決我們的問題...（例如：Windows server與Linux Server、多個網站或多個不同類型執行個體、網站搭配console應用程式）此時當應用程式間需要配合時是一個很重要的議題，很多人會把資料存放到資料庫，應用程式在定期去擷取尚未處理的資料，等相關資料處理完畢後再到資料庫注記哪些記錄是已經處理完畢的，在這樣的軟體設計與環境相對簡單許多，但是在系統繁忙的時間中，這可不是一個樂觀的狀態了..\n現在Redis具有這樣的功能，可以協助我們設計應用程式間可以互相配合的一個機制，如此一來我們就不需要在透過定期存取資料庫，相關的訊息或相關的資料可以及時的處理！",date:"2016-02-24T03:55:09.000Z",tags:["Redis","pub","sub","notify"],categories:["Redis"],published:!0,comment:!0},s={_frontmatter:a};function b(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(l.mdx)("wrapper",Object.assign({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("h2",null,"寫在前面"),Object(l.mdx)("p",null,"在很多時候我們的部屬環境是很複雜的，無法使用單一個應用程式來解決我們的問題...（例如：Windows server與Linux Server、多個網站或多個不同類型執行個體、網站搭配console應用程式）此時當應用程式間需要配合時是一個很重要的議題，很多人會把資料存放到資料庫，應用程式在定期去擷取尚未處理的資料，等相關資料處理完畢後再到資料庫注記哪些記錄是已經處理完畢的，在這樣的軟體設計與環境相對簡單許多，但是在系統繁忙的時間中，這可不是一個樂觀的狀態了.."),Object(l.mdx)("p",null,"現在Redis具有這樣的功能，可以協助我們設計應用程式間可以互相配合的一個機制，如此一來我們就不需要在透過定期存取資料庫，相關的訊息或相關的資料可以及時的處理！"),Object(l.mdx)("h2",null,"Redis Command"),Object(l.mdx)("p",null,"在使用推播前需要先瞭解三個指令，這三個指令是做應用程式推播時相關的指令"),Object(l.mdx)("h3",null,"Publish"),Object(l.mdx)("h4",null,"官網的說明"),Object(l.mdx)("blockquote",null,Object(l.mdx)("p",{parentName:"blockquote"},"Available since 2.0.0."),Object(l.mdx)("p",{parentName:"blockquote"},Object(l.mdx)("strong",{parentName:"p"},"Time complexity"),": O(N+M) where N is the number of clients subscribed to the receiving channel and M is the total number of subscribed patterns (by any client)."),Object(l.mdx)("p",{parentName:"blockquote"},"Posts a message to the given channel.")),Object(l.mdx)("p",null,"Redis最低版本：2.0\n這個指令主要的用途就是將訊息推進某一個頻道中。\n而時間複雜度是：O(N+M)，N是訂閱這個頻道的Client數量，M是所有訂閱者的數量。"),Object(l.mdx)("h4",null,"Publish 指令的格式"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{className:"language-shell",parentName:"pre"},"Publish [channel] [message]\n")),Object(l.mdx)("h3",null,"Subscribe"),Object(l.mdx)("h4",null,"官網的說明"),Object(l.mdx)("blockquote",null,Object(l.mdx)("p",{parentName:"blockquote"},"Available since 2.0.0.")),Object(l.mdx)("blockquote",null,Object(l.mdx)("p",{parentName:"blockquote"},Object(l.mdx)("strong",{parentName:"p"},"Time complexity"),": O(N) where N is the number of channels to subscribe to.")),Object(l.mdx)("blockquote",null,Object(l.mdx)("p",{parentName:"blockquote"},"Subscribes the client to the specified channels.")),Object(l.mdx)("p",null,"Redis最低版本：2.0\n這個指令主要的用途是訂閱頻道，用來接收訂閱頻道中的訊息。\n而時間複雜度是：O(N)，N是指要訂閱頻道的總數目"),Object(l.mdx)("h4",null,"Subscribe指令格式"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{className:"language-shell",parentName:"pre"},"SUBSCRIBE [channel 1] [channel 2] ...\n")),Object(l.mdx)("h3",null,"UnSubscribe"),Object(l.mdx)("h4",null,"官網的說明"),Object(l.mdx)("blockquote",null,Object(l.mdx)("p",{parentName:"blockquote"},"Available since 2.0.0.")),Object(l.mdx)("blockquote",null,Object(l.mdx)("p",{parentName:"blockquote"},Object(l.mdx)("strong",{parentName:"p"},"Time complexity"),": O(N) where N is the number of clients already subscribed to a channel.")),Object(l.mdx)("blockquote",null,Object(l.mdx)("p",{parentName:"blockquote"},"Unsubscribes the client from the given channels, or from all of them if none is given.")),Object(l.mdx)("p",null,"Redis最低版本：2.0\n這個指令主要的用途是取消訂閱頻道。\n而時間複雜度是：O(N)，N是指要取消訂閱頻道的總數目"),Object(l.mdx)("h4",null,"UnSubscribe指令格式"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{className:"language-shell",parentName:"pre"},"UNSUBSCRIBE [channel 1] [channel 2] ...\n")),Object(l.mdx)("h2",null,"系統開發"),Object(l.mdx)("h3",null,"存取Redis in C#：StackExchange.Redis"),Object(l.mdx)("p",null,"這是一套存取Redis的一個套件，在稍候的程式開發中，都會使用到這個套件來存取Redis！"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{className:"language-cs",parentName:"pre"},"Install-Package StackExchange.Redis\n")),Object(l.mdx)("h3",null,"Subscribe開發"),Object(l.mdx)("h4",null,"Step1. 連結Redis"),Object(l.mdx)("p",null,"在使用Redis需要先建立connection，才能連結到Redis。再使用StackExchange.Redis 套件時需要先引入他的namespace。"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{className:"language-cs",parentName:"pre"},"using StackExchange.Redis;\n")),Object(l.mdx)("p",null,"設定Redis連線可以參考",Object(l.mdx)("a",{href:"https://github.com/StackExchange/StackExchange.Redis/blob/master/Docs/Configuration.md#configuration-options",parentName:"p"},"這篇文章"),"上面會有參數的說明，這邊沒有一一列舉相關的參數設定。"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{className:"language-cs",parentName:"pre"},'var configurationOptions = new ConfigurationOptions\n{\n    AbortOnConnectFail = false,\n    Password = "password",\n    Ssl = false,\n    ConnectTimeout = 6000,\n    SyncTimeout = 6000\n};\nconfigurationOptions.EndPoints.Add(new DnsEndPoint("redis host", port));\n// IP:\n// configurationOptions.EndPoints.Add(IP Address, port));\nConnectionMultiplexer redis = ConnectionMultiplexer.Connect(configurationOptions);\n')),Object(l.mdx)("h4",null,"Step2. 訂閱頻道"),Object(l.mdx)("p",null,"在StackExchange.Redis 取得連線後，開始開發訂閱頻道前要先取得Redis的Subcriber，才能發佈或是訂閱訊息"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{className:"language-cs",parentName:"pre"},"var sub = redis.GetSubscriber();\n")),Object(l.mdx)("p",null,"在訂閱訊息前，先看一下StackExchange.Redis中Subscribe的說明\n第一個參數是頻道名稱，這邊可以直接使用字串來代表RedisChannel的型別，第二個是一個Action的委派型別，第三個是commandFlag，這個主要的用途是在描述指令該如何執行，這個參數可以省略。"),Object(l.mdx)("p",null,Object(l.mdx)("img",{src:"/img/RedisPubSub/RedisPubSub01.png",alt:"Subscribe的說明",parentName:"p"})),Object(l.mdx)("p",null,"這裡做一個範例，我在這裡訂閱了一個Study4TW的頻道，然後指定了收到這個訊息要做哪些事情（寫在Do Something中）"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{className:"language-cs",parentName:"pre"},'sub.Subscribe("Study4TW", (channel, message) =>\n {\n     // Do Something\n });\n')),Object(l.mdx)("p",null,"如此只要寫在系統loading時就可以訂閱到該頻道，這個只要做一次就可以了，不需要每次執行！"),Object(l.mdx)("h4",null,"Step3. 送出訊息！"),Object(l.mdx)("p",null,"送出訊息的指令相當簡單，只要填上你是哪一個頻道，以及你要送出的訊息即可！在RedisChannel與RedisValue兩個型別都可以使用字串來傳遞即可。"),Object(l.mdx)("p",null,Object(l.mdx)("img",{src:"/img/RedisPubSub/RedisPubSub02.png",alt:"Publish的說明",parentName:"p"})),Object(l.mdx)("pre",null,Object(l.mdx)("code",{className:"language-cs",parentName:"pre"},'var sub = redis.GetSubscriber();\nsub.Publish("Study4TW", message);\n')),Object(l.mdx)("p",null,"在搭配前面Step2的程式碼，在這樣簡單的範例就可以在應用程序間互相通訊了！就不再需要透過資料庫來做訊息通知了，也不用使用IF去判別這一個訊息要怎麼處理或是交給哪一個method處理，增加程式碼的可讀性！是否受用無窮阿？"),Object(l.mdx)("h2",null,"參考資料"),Object(l.mdx)("p",null,Object(l.mdx)("a",{href:"http://redis.io/topics/pubsub",parentName:"p"},"Redis Pub/Sub")),Object(l.mdx)("p",null,Object(l.mdx)("a",{href:"http://redis.io/commands/publish",parentName:"p"},"Publish - Redis")),Object(l.mdx)("p",null,Object(l.mdx)("a",{href:"http://redis.io/commands/subscribe",parentName:"p"},"Subscribe - Redis")),Object(l.mdx)("p",null,Object(l.mdx)("a",{href:"http://redis.io/commands/unsubscribe",parentName:"p"},"UnSubscribe - Redis")),Object(l.mdx)("p",null,Object(l.mdx)("a",{href:"https://github.com/StackExchange/StackExchange.Redis",parentName:"p"},"StackExchange.Redis GitHub")),Object(l.mdx)("p",null,Object(l.mdx)("a",{href:"https://www.nuget.org/packages/StackExchange.Redis/",parentName:"p"},"StackExchange.Redis nuget")))}b.isMDXComponent=!0},zLVn:function(e,n,t){"use strict";function c(e,n){if(null==e)return{};var t,c,l={},a=Object.keys(e);for(c=0;c<a.length;c++)t=a[c],n.indexOf(t)>=0||(l[t]=e[t]);return l}t.d(n,"a",(function(){return c}))}}]);
//# sourceMappingURL=component---src-posts-redis-pub-sub-application-notification-redis-pub-sub-application-notification-mdx-1acb0901b109d195d797.js.map