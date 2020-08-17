(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{PhCi:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return l})),o.d(t,"default",(function(){return u}));var n=o("zLVn"),r=(o("q1tI"),o("7ljp")),l={layout:"post",title:"[ProtoBuf] 初次見面",description:"目前會採用ProtoBuf序列化是因為先前使用JSON有效能上的問題與在存取Redis上產生較高的延遲，所以改採用ProtoBuf來作為資料序列化與存放到Redis的主要格式。雖然在閱讀上需要自己寫小工具做轉譯，但在一般情況擁有較好的效能展現。",tags:["ProtoBuf","serialize","deserialize"],categories:["ProtoBuf"],date:"2016-10-06T05:30:16.000Z",published:!0,comment:!0},a={_frontmatter:l};function u(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.mdx)("wrapper",Object.assign({},a,o,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",null,"ProtoBuf 初次見面"),Object(r.mdx)("h2",null,"什麼是ProtoBuf？"),Object(r.mdx)("p",null,"這是一個Google所開發出的資料儲存結構或物件（反）序列的結構（如 JOSN、XML、msgpack等），在官方網站的介紹上有這麼一段："),Object(r.mdx)("blockquote",null,Object(r.mdx)("p",{parentName:"blockquote"},"Protocol buffers are Google's language-neutral,\nplatform-neutral, extensible mechanism for serializing structured data\n– think XML, but smaller, faster, and simpler.\nYou define how you want your data to be structured once,\nthen you can use special generated source code to easily write\nand read your structured data to and from a variety of data streams and using a variety of languages.\n",Object(r.mdx)("p",{style:{textAlign:"right"}},"from ",Object(r.mdx)("a",{href:"https://developers.google.com/protocol-buffers/",target:"_blank"},"  ",Object(r.mdx)("a",{href:"https://developers.google.com/protocol-buffers/"},"https://developers.google.com/protocol-buffers/"))))),Object(r.mdx)("p",null,"ProtoBuf支援各種主流的語言(ex: C#, C++, JAVA等)，\n在官方中的",Object(r.mdx)("a",{href:"https://github.com/google/protobuf",parentName:"p"},"GitHub"),"上有目前支援的語言實做，或是Third-party搜尋相關的實做套件。"),Object(r.mdx)("h3",null,"ProtoBuf 優點"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"(反)序列",Object(r.mdx)("strong",{parentName:"li"},"速度快"),"，方便於網路傳輸"),Object(r.mdx)("li",{parentName:"ul"},"產出格式",Object(r.mdx)("strong",{parentName:"li"},"內容小"),"，方便存放至檔案或其他Service")),Object(r.mdx)("h3",null,"ProtoBuf 缺點"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"二進位格式，難以閱讀"),Object(r.mdx)("li",{parentName:"ul"},"使用上必須先作定義，需要先設定.proto檔案")),Object(r.mdx)("h2",null,"在 C# 中使用 ProtoBuf"),Object(r.mdx)("p",null,"在專案中我是使用third-party的套件，",Object(r.mdx)("a",{href:"https://www.nuget.org/packages/protobuf-net",parentName:"p"},"ProtoBuf-net"),"\n套件可以在nuget上找到，會選擇這個套件主要是因為在使用上較為簡便，也支援較多的設定的方式來做資料，設定的方式\n稍後會有比較詳細一些的介紹。"),Object(r.mdx)("p",null,Object(r.mdx)("img",{src:"https://iborbw.dm2301.livefilestore.com/y3mwZSHpblZIjBxQ2VXBmnVHV8MUQSMdTVoW4vffVGKs4JCG91fDL-ukzA4rTxhIfuV7fn2vuc2A04qIdxM3phpxfINzJVERuqtJVaGvm7yXCmCQdd0P6qq8Ai9BxYg7deUDWSF4oqEwKg7SiiNF1V5UW52gVN2t-ob2I_IRQ3q73Y?width=1318&height=384&cropmode=none",alt:"ProtoBuf-net",parentName:"p"})),Object(r.mdx)("h3",null,"定義方式"),Object(r.mdx)("p",null,"ProtoBuf-net設定的方式支援了以下三種方式"),Object(r.mdx)("h4",null,"Attribute"),Object(r.mdx)("p",null,"這個方式，個人認為是一個較好的設定方式，"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{className:"language-cs",parentName:"pre"},"[ProtoContract]\npublic class TestClass\n{\n    [ProtoMember(1)]\n    public int TestA { get; set; }\n\n    [ProtoMember(2)]\n    public string TestB { get; set; }\n\n    [ProtoMember(3)]\n    public TestClassB TestC { get; set; }\n}\n\n[ProtoContract]\npublic class TestClassB\n{\n    ...\n}\n")),Object(r.mdx)("p",null,"這一個設定方式可以修改data model同時修改 Attribute 這樣在團隊使用上可以避免修改data model後\n也可馬上維護protobuf的設定，避免在runtime時因為設定上造成exception。"),Object(r.mdx)("h4",null,".proto檔案"),Object(r.mdx)("p",null,"這一個方式是官方的標準設定，這個需要額外產生一份.proto檔案，定義方式與格式可參考\n",Object(r.mdx)("a",{href:"https://developers.google.com/protocol-buffers/docs/csharptutorial",parentName:"p"},"官方網站"),"\n的設定。"),Object(r.mdx)("p",null,"這一個方式因為多產生了一個.proto的檔案，在修改data model後，必須要再額外修改.proto的檔案，\n有時候在開發上會有不一致的情況；在使用上與設定上也相對較為複雜。"),Object(r.mdx)("h4",null,"Runtime 定義"),Object(r.mdx)("p",null,"這是在Application執行期間產生一份 RuntimeTypeModel，在Serializer的時候會以這一份RuntimeTypeModel為你的\ndata model做序列化，以下提供語法參考設定方式"),Object(r.mdx)("p",null,"這一個方式會將原先定義覆蓋"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{className:"language-cs",parentName:"pre"},"    var metaType = RuntimeTypeModel.Default.Add(typeof(TestClassA), true);\n    metaType.AddSubType(100, typeof(TestA));\n\n    RuntimeTypeModel.Default.Add(typeof(TestA), false);\n")),Object(r.mdx)("p",null,"這一個會複寫(或新增)原先的定義"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{className:"language-cs",parentName:"pre"},"    var metaType = RuntimeTypeModel.Default;\n    var testA = metaType[typeof(TestClassA)];\n    testA.AddSubType(100, typeof(TestA));\n    metaType.Add(typeof(TestA), false);\n")),Object(r.mdx)("h2",null,"總結"),Object(r.mdx)("p",null,"目前會採用ProtoBuf序列化是因為先前使用JSON有效能上的問題與在存取Redis上產生較高的延遲，所以改採用\nProtoBuf來作為資料序列化與存放到Redis的主要格式。雖然在閱讀上需要自己寫小工具做轉譯，但在一般情況\n擁有較好的效能展現。"),Object(r.mdx)("p",null,"其他更詳細的介紹可觀看\n",Object(r.mdx)("a",{href:"https://github.com/mgravell/protobuf-net#advanced-subjects",parentName:"p"},"protobuf-net 官方GitHub")),Object(r.mdx)("h2",null,"參考資料"),Object(r.mdx)("p",null,Object(r.mdx)("a",{href:"http://larrynung.github.io/2016/08/23/protobuf-net-Serialize-DeSerialize-data/",parentName:"p"},"Level up - protobuf-net - Serialize/DeSerialize data")),Object(r.mdx)("p",null,Object(r.mdx)("a",{href:"https://github.com/mgravell/protobuf-net",parentName:"p"},"protobuf-net 官方GitHub")),Object(r.mdx)("p",null,Object(r.mdx)("a",{href:"https://github.com/google/protobuf",parentName:"p"},"Google protobuf")))}u.isMDXComponent=!0},zLVn:function(e,t,o){"use strict";function n(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}o.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-posts-protobuf-first-meet-protobuf-first-meet-mdx-1334717a3fe3073ba63e.js.map