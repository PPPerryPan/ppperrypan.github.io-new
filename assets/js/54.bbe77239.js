(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1142:function(s,n,a){s.exports=a.p+"assets/img/10.1.f0221317.png"},1143:function(s,n,a){s.exports=a.p+"assets/img/10.2.6f74fffd.png"},1144:function(s,n,a){s.exports=a.p+"assets/img/10.3.ddc686e0.png"},1145:function(s,n,a){s.exports=a.p+"assets/img/10.4.a4deb6a8.png"},1226:function(s,n,a){"use strict";a.r(n);var t=a(13),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例"}},[s._v("#")]),s._v(" 例")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("目标")]),s._v(" "),t("ul",[t("li",[s._v("理解NAT网络地址转换的原理及功能；")]),s._v(" "),t("li",[s._v("掌握静态NAT的配置，实现局域网访问互联网；")])])]),s._v(" "),t("li",[t("p",[s._v("背景")]),s._v(" "),t("ul",[t("li",[s._v("你是某公司的网络管理员，欲发布公司的WWW服务。")]),s._v(" "),t("li",[s._v("要求将内网Web服务器IP地址映射为全局IP地址，实现外部网络可访问公司内部Web服务器。")])])]),s._v(" "),t("li",[t("p",[s._v("原理")]),s._v(" "),t("ul",[t("li",[s._v("网络地址转换NAT（Network Address Translation），被广泛应用于各种类型Internet接入方式和各种类型的网络中。原因很简单，NAT不仅完美地解决了IP地址不足的问题，而且还能够有效地避免来自网络外部的攻击，隐藏并保护网络内部的计算机。")]),s._v(" "),t("li",[s._v("默认情况下，内部IP地址是无法被路由到外网的，内部主机10.1.1.1要与外部internet通信，IP包到达NAT路由器时，IP包头的源地址10.1.1.1被替换成一个合法的外网IP，并在NAT转换表中保存这条记录。当外部主机发送一个应答到内网时，NAT路由器收到后，查看当前NAT转换表，用10.1.1.1替换掉这个外网地址。")])])]),s._v(" "),t("li",[t("p",[s._v("步骤")]),s._v(" "),t("p",[s._v("​\t"),t("img",{attrs:{src:a(1142),alt:"10.1"}})]),s._v(" "),t("ul",[t("li",[s._v("新建packet tracer拓扑图（如图）")]),s._v(" "),t("li",[s._v("R1为公司出口路由器，其与外部路由器之间通过V.35电缆串日连接，DCE端连接在R1上，配置其时钟频率64000；")]),s._v(" "),t("li",[s._v("配置PC机、服务器及路由器接口IP地址；")]),s._v(" "),t("li",[s._v("在各路由器上配置静态路由协议，让pc间能相互ping通；")]),s._v(" "),t("li",[s._v("在R1上配置静态NAT")]),s._v(" "),t("li",[s._v("在R1上定义内外部网络接口。")]),s._v(" "),t("li",[s._v("验证主机之间的互通性。")])])])]),s._v(" "),t("h2",{attrs:{id:"拓扑与主机ip配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拓扑与主机ip配置"}},[s._v("#")]),s._v(" 拓扑与主机IP配置")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1143),alt:"10.2"}})]),s._v(" "),t("h2",{attrs:{id:"r0-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#r0-配置"}},[s._v("#")]),s._v(" R0 配置")]),s._v(" "),t("ul",[t("li",[s._v("配置 IP 与时钟频率")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Router>en\nRouter#conf t\nEnter configuration commands, one per line.  End with CNTL/Z.\nRouter(config)#host R0\nR0(config)#int fa 0/0\nR0(config-if)#ip add 192.168.1.1 255.255.255.0\nR0(config-if)#no shut\n\nR0(config-if)#\n%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to up\n\n%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up\n\nR0(config-if)#int s 2/0\nR0(config-if)#ip add 222.0.1.1 255.255.255.0\nR0(config-if)#no shut\n\n%LINK-5-CHANGED: Interface Serial2/0, changed state to down\nR0(config-if)#clock rate 64000\nR0(config-if)#\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h2",{attrs:{id:"r1-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#r1-配置"}},[s._v("#")]),s._v(" R1 配置")]),s._v(" "),t("ul",[t("li",[s._v("配置 IP")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Router>en\nRouter#conf t\nEnter configuration commands, one per line.  End with CNTL/Z.\nRouter(config)#host R1\nR1(config)#int s 2/0\nR1(config-if)#ip add 222.0.1.2 255.255.255.0\nR1(config-if)#no shut\n\nR1(config-if)#\n%LINK-5-CHANGED: Interface Serial2/0, changed state to up\n\nR1(config-if)#int fa 0/0\nR1(config-if)#\n%LINEPROTO-5-UPDOWN: Line protocol on Interface Serial2/0, changed state to up\n\nR1(config-if)#ip add 222.0.2.1 255.255.255.0\nR1(config-if)#no shut\n\nR1(config-if)#\n%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to up\n\n%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h2",{attrs:{id:"做静态路由-rip-ospf也可"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#做静态路由-rip-ospf也可"}},[s._v("#")]),s._v(" 做静态路由 (RIP/OSPF也可)")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("R0")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("R0(config)#ip route 222.0.2.0 255.255.255.0 222.0.1.2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("R1")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("R1(config)#ip route 192.168.1.0 255.255.255.0 222.0.1.1\nR1(config)#end\nR1#\n%SYS-5-CONFIG_I: Configured from console by console\n\nR1#show ip rou\nCodes: C - connected, S - static, I - IGRP, R - RIP, M - mobile, B - BGP\n       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area\n       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2\n       E1 - OSPF external type 1, E2 - OSPF external type 2, E - EGP\n       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area\n       * - candidate default, U - per-user static route, o - ODR\n       P - periodic downloaded static route\n\nGateway of last resort is not set\n\nS    192.168.1.0/24 [1/0] via 222.0.1.1\nC    222.0.1.0/24 is directly connected, Serial2/0\nC    222.0.2.0/24 is directly connected, FastEthernet0/0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"pc0-与-server0-的连通性测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pc0-与-server0-的连通性测试"}},[s._v("#")]),s._v(" PC0 与 Server0 的连通性测试")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("ping")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("C:\\>ping 192.168.1.2\n\nPinging 192.168.1.2 with 32 bytes of data:\n\nRequest timed out.\nReply from 192.168.1.2: bytes=32 time=1ms TTL=126\nReply from 192.168.1.2: bytes=32 time=10ms TTL=126\nReply from 192.168.1.2: bytes=32 time=6ms TTL=126\n\nPing statistics for 192.168.1.2:\n    Packets: Sent = 4, Received = 3, Lost = 1 (25% loss),\nApproximate round trip times in milli-seconds:\n    Minimum = 1ms, Maximum = 10ms, Average = 5ms\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("浏览器")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1144),alt:"10.3"}})])]),s._v(" "),t("li",[t("p",[s._v("在实验中可行，但在实际公网环境中，直接输入对方的内网地址是无法访问的。")])]),s._v(" "),t("li",[t("p",[s._v("所以需要将Server0的内网地址转换为公网地址")])]),s._v(" "),t("li",[t("p",[s._v("静态NAT步骤")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("配置路由器IP地址及路由策略（已完成）")])]),s._v(" "),t("li",[t("p",[s._v("指定端口（哪些输入内部，哪些属于外部）")]),s._v(" "),t("ul",[t("li",[s._v("此处 R0 中 Fa0/0 属于内部，Se2/0 属于外部")])])]),s._v(" "),t("li",[t("p",[s._v("将内部地址映射到公网地址**（在R0上配置）**")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("R0(config)#int fa 0/0\nR0(config-if)#ip nat inside\t\t\t\t\t\t\t\t\t\t!标记为内部端口\nR0(config-if)#int s 2/0\nR0(config-if)#ip nat outside\t\t\t\t\t\t\t\t\t!标记为外部端口\nR0(config-if)#exit\nR0(config)#ip nat inside ?\n  source  Source address translation\nR0(config)#ip nat inside source ?\n  list    Specify access list describing local addresses\n  static  Specify static local->global mapping\nR0(config)#ip nat inside source static ?\n  A.B.C.D  Inside local IP address\n  tcp      Transmission Control Protocol\n  udp      User Datagram Protocol\nR0(config)#ip nat inside source static 192.168.1.2 222.0.1.3\t!映射\nR0(config)#end\nR0#\n%SYS-5-CONFIG_I: Configured from console by console\n\nR0#show ip nat rt\nR0#show ip nat tr\nR0#show ip nat translations \nPro  Inside global     Inside local       Outside local      Outside global\n---  222.0.1.3         192.168.1.2        ---                ---\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])])])])]),s._v(" "),t("li",[t("p",[s._v("PC0 测试 通过公网IP访问 Server0")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1145),alt:"10.4"}})])]),s._v(" "),t("li",[t("p",[s._v("在 R0上再次查看NAT，可以看到多了一条tcp访问记录")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("R0#show ip nat translations \nPro  Inside global     Inside local       Outside local      Outside global\n---  222.0.1.3         192.168.1.2        ---                ---\ntcp 222.0.1.3:80       192.168.1.2:80     222.0.2.2:1026     222.0.2.2:1026\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])])])}),[],!1,null,null,null);n.default=e.exports}}]);