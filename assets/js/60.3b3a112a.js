(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1146:function(s,n,a){s.exports=a.p+"assets/img/11.1.b9062486.png"},1147:function(s,n,a){s.exports=a.p+"assets/img/11.2.b23da385.png"},1227:function(s,n,a){"use strict";a.r(n);var e=a(13),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#例"}},[s._v("#")]),s._v(" 例")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("目标")]),s._v(" "),e("ul",[e("li",[s._v("理解NAT网络地址转换的原理及功能；")]),s._v(" "),e("li",[s._v("掌握NAPT的配置，实现局域网访问互联网；")])])]),s._v(" "),e("li",[e("p",[s._v("背景")]),s._v(" "),e("ul",[e("li",[s._v("你是某公司的网络管理员，公司办公网需要接入互联网，公司只向ISP申请了一条专线，该专线分配了一个公网IP地址，配置实现全公司的主机都能访问外网。")])])]),s._v(" "),e("li",[e("p",[s._v("原理")]),s._v(" "),e("ul",[e("li",[s._v("NAT将网络划分为内部网络和外部网络两部分，局域网主机利用NAT访问网络时，是将局域网内部的本地地址转换为全局地址（互联网合法的IP地址）后转发数据包；")]),s._v(" "),e("li",[s._v("NAT分为两种类型：NAT（网络地址转换）和 NAPT（网络端口地址转换IP地址对应一个全局地址）\n"),e("ul",[e("li",[s._v("NAPT：使用不同的端口来映射多个内网IP地址到一个指定的外网IP地址，多对一。")])])]),s._v(" "),e("li",[s._v("NAPT采用端口多路复用方式。内部网络的所有主机均可共享一个合法外部IP地址实现对Internet的访问，从而可以最大限度地节约IP地址资源。同时，又可隐藏网络内部的所有主机，有效避免来自Internet的攻击。因此，目前网络中应用最多的就是端口多路复用方式。")])])]),s._v(" "),e("li",[e("p",[s._v("步骤")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1146),alt:"11.1"}})]),s._v(" "),e("ul",[e("li",[s._v("新建packet tracer拓扑图（如图）")]),s._v(" "),e("li",[s._v("R1为公司出口路由器，其与ISP路由器之间通过V.35电缆串口连接，DCE端连接在R1上，配置其时钟频率64000；")]),s._v(" "),e("li",[s._v("配置PC机、服务器及路由器接口IP地址；")]),s._v(" "),e("li",[s._v("在各路由器上配置静态路由协议，让pc间能相互ping通；")]),s._v(" "),e("li",[s._v("在R1上配置NAPT")]),s._v(" "),e("li",[s._v("在R1上定义内外部网络接口")]),s._v(" "),e("li",[s._v("验证主机之间的互通性")])])])]),s._v(" "),e("h2",{attrs:{id:"拓扑与设备ip配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拓扑与设备ip配置"}},[s._v("#")]),s._v(" 拓扑与设备IP配置")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1147),alt:"11.2"}})]),s._v(" "),e("h2",{attrs:{id:"r0-ip配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#r0-ip配置"}},[s._v("#")]),s._v(" R0 IP配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Router>en\nRouter#conf t\nEnter configuration commands, one per line.  End with CNTL/Z.\nRouter(config)#host R0\nR0(config)#int fa 0/0\nR0(config-if)#ip add 192.168.1.1 255.255.255.0\t\t!配置局域网内部默认网关\nR0(config-if)#no shut\n\nR0(config-if)#\n%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to up\n\n%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up\n\nR0(config-if)#int s 2/0\nR0(config-if)#ip add 200.1.1.1 255.255.255.0\t\t!配置IP\nR0(config-if)#no shut\n\n%LINK-5-CHANGED: Interface Serial2/0, changed state to down\nR0(config-if)#clock rate 64000\t\t\t\t\t\t!配置时钟\nR0(config-if)#\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("h2",{attrs:{id:"r1-ip配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#r1-ip配置"}},[s._v("#")]),s._v(" R1 IP配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Router>en\nRouter#conf t\nEnter configuration commands, one per line.  End with CNTL/Z.\nRouter(config)#host R1\nR1(config)#int s 2/0\nR1(config-if)#ip add 200.1.1.2 255.255.255.0\t\t!配置局域网内部默认网关\nR1(config-if)#no shut\n\nR1(config-if)#\n%LINK-5-CHANGED: Interface Serial2/0, changed state to up\n\n%LINEPROTO-5-UPDOWN: Line protocol on Interface Serial2/0, changed state to up\n\nR1(config-if)#int fa 0/0\nR1(config-if)#ip add 200.1.2.1 255.255.255.0\t!配置IP\nR1(config-if)#no shut\n\nR1(config-if)#\n%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to up\n\n%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("h2",{attrs:{id:"静态路由配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#静态路由配置"}},[s._v("#")]),s._v(" 静态路由配置")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("R0")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("R0(config)#ip route 200.1.2.0 255.255.255.0 200.1.1.2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("R1")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("R1(config)#ip route 192.168.1.0 255.255.255.0 200.1.1.1\nR1(config)#end\nR1#\n%SYS-5-CONFIG_I: Configured from console by console\n\nR1#show ip rou\nCodes: C - connected, S - static, I - IGRP, R - RIP, M - mobile, B - BGP\n       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area\n       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2\n       E1 - OSPF external type 1, E2 - OSPF external type 2, E - EGP\n       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area\n       * - candidate default, U - per-user static route, o - ODR\n       P - periodic downloaded static route\n\nGateway of last resort is not set\n\nS    192.168.1.0/24 [1/0] via 200.1.1.1\nC    200.1.1.0/24 is directly connected, Serial2/0\nC    200.1.2.0/24 is directly connected, FastEthernet0/0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("尝试在 PC0 ping Server 0：可ping通（Web浏览器也可通过IP直接访问Server0）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("C:\\>ipconfig\n\nFastEthernet0 Connection:(default port)\n\n   Connection-specific DNS Suffix..: \n   Link-local IPv6 Address.........: FE80::20A:F3FF:FE90:D747\n   IPv6 Address....................: ::\n   IPv4 Address....................: 192.168.1.2\n   Subnet Mask.....................: 255.255.255.0\n   Default Gateway.................: ::\n                                     192.168.1.1\n\nBluetooth Connection:\n\n   Connection-specific DNS Suffix..: \n   Link-local IPv6 Address.........: ::\n   IPv6 Address....................: ::\n   IPv4 Address....................: 0.0.0.0\n   Subnet Mask.....................: 0.0.0.0\n   Default Gateway.................: ::\n                                     0.0.0.0\n\nC:\\>ping 200.1.2.2\n\nPinging 200.1.2.2 with 32 bytes of data:\n\nRequest timed out.\nReply from 200.1.2.2: bytes=32 time=1ms TTL=126\nReply from 200.1.2.2: bytes=32 time=1ms TTL=126\nReply from 200.1.2.2: bytes=32 time=1ms TTL=126\n\nPing statistics for 200.1.2.2:\n    Packets: Sent = 4, Received = 3, Lost = 1 (25% loss),\nApproximate round trip times in milli-seconds:\n    Minimum = 1ms, Maximum = 1ms, Average = 1ms\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"r0-napt配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#r0-napt配置"}},[s._v("#")]),s._v(" R0 NAPT配置")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("配置路由IP地址及路由策略（已完成）")])]),s._v(" "),e("li",[e("p",[s._v("访问控制列表")]),s._v(" "),e("ul",[e("li",[s._v("允许哪些网段出去（可做基本，可做高级）")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("R0(config)#access-list ?\n  <1-99>     IP standard access list\n  <100-199>  IP extended access list\nR0(config)#access-list 1 ?\n  deny    Specify packets to reject\n  permit  Specify packets to forward\n  remark  Access list entry comment\nR0(config)#access-list 1 p\nR0(config)#access-list 1 permit ?\n  A.B.C.D  Address to match\n  any      Any source host\n  host     A single host address\nR0(config)#access-list 1 permit 192.168.1.0 0.0.0.255\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("做地址池")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("R0(config)# ip nat ?\n  inside   Inside address translation\n  outside  Outside address translation\n  pool     Define pool of addresses\nR0(config)# ip nat pool ?\n  WORD  Pool name\nR0(config)# ip nat pool name1 ?\t\t\n  A.B.C.D  Start IP address\t\t\t!公有地址始\nR0(config)# ip nat pool name1 200.1.1.3 ?\n  A.B.C.D  End IP address\t\t\t!公有地址末\nR0(config)# ip nat pool name1 200.1.1.3 200.1.1.3 netmask 255.255.255.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("发布出口路由的内部和外部网络(ip nat inside/outside)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("R0(config)#int fa 0/0\nR0(config-if)#ip nat inside\nR0(config-if)#int s 2/0\nR0(config-if)#ip nat outside\nR0(config-if)#exit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("将访问控制列表映射到地址池")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("R0(config)#ip nat ?\n  inside   Inside address translation\n  outside  Outside address translation\n  pool     Define pool of addresses\nR0(config)#ip nat inside ?\n  source  Source address translation\nR0(config)#ip nat inside source ?\n  list    Specify access list describing local addresses\n  static  Specify static local->global mapping\nR0(config)#ip nat inside source list ?\n  <1-199>  Access list number for local addresses\n  WORD     Access list name for local addresses\nR0(config)#ip nat inside source list 1 ?\n  interface  Specify interface for global address\n  pool       Name pool of global addresses\nR0(config)#ip nat inside source list 1 pool name1 ?\n  overload  Overload an address translation\t\t!NAPT选项，多(内IP)对一(公网IP)\n  <cr>\t\t\t\t\t\t\t\t\t\t\t!NAT选项，一对一/多对多选项(排队获取)？\nR0(config)#ip nat inside source list 1 pool name1 \nR0(config)#ip nat inside source list 1 pool name1 overload \nR0(config)#end\nR0#\n%SYS-5-CONFIG_I: Configured from console by console\n\n\nR0#show ip nat translations \t\t\t\t\t!注：此时查不到任何记录\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("在 PC0 ，PC1 上用浏览器访问 Server0 (200.1.2.2)，然后到R0上查看")]),s._v(" "),e("ul",[e("li",[s._v("可查到地址映射信息")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("R0#show ip nat translations \nPro  Inside global     Inside local       Outside local      Outside global\ntcp 200.1.1.3:1024     192.168.1.2:1025   200.1.2.2:80       200.1.2.2:80\ntcp 200.1.1.3:1025     192.168.1.3:1025   200.1.2.2:80       200.1.2.2:80\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])])])}),[],!1,null,null,null);n.default=t.exports}}]);