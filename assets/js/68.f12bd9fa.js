(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1131:function(n,s,t){n.exports=t.p+"assets/img/2.1.e34754e3.png"},1218:function(n,s,t){"use strict";t.r(s);var a=t(13),e=Object(a.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("ul",[a("li",[n._v("背景：")])]),n._v(" "),a("p",[n._v("​        某一公司内财务部、销售部的PC通这2台交换机实现通信；要求财务部和销售部内的PC可以互通，但为了数据安全起见，销售部和财务部需要进行互相隔离，现要在交换机上做适当配置来实现这一目的。")]),n._v(" "),a("ul",[a("li",[n._v("原理")])]),n._v(" "),a("p",[n._v("​        VLAN是指在 个物理网段内，进行逻辑的划分，划分成若干个虚拟局域网。VLAN最大的特性是不受物理位置的限制，可以进行灵活的划分。VLAN具备了一个物理网段所具备的特性。相同VLAN内的主机可以相瓦直接信，不同VLAN间的三机之间互相访问必须经由路由设备进行转发。广播数据包只可以在本VLAN内进行广播，不能传输到其他VLAN中。\nPort VLAN是实现VLAN的方式之一，它利月交换机的端口进行VLAN的划分，一个端口只能属于一个VLAN.")]),n._v(" "),a("p",[n._v("​        Tag VLAN是基无交换机端口的另处一种类型，主要用工使交换机的相同Vlan内的主机之间可以直接迹间：…同时对无不同lan的主机进行隔离。Tag VLAN遵循IEEE802.1Q协议的标准。在使用配置了Tag VLAN的端口进行数据传输时，需要在数据帧内添加4个字节的802.1Q标签信息，用于标示该数据帧属于那个VLAN，便于对端交换机接收到数据帧后进行准确的过滤。")]),n._v(" "),a("h2",{attrs:{id:"拓扑图及主机ip配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拓扑图及主机ip配置"}},[n._v("#")]),n._v(" 拓扑图及主机IP配置")]),n._v(" "),a("p",[a("img",{attrs:{src:t(1131),alt:"2.1"}})]),n._v(" "),a("h2",{attrs:{id:"划分vlan、设置tag-vlan-trunk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#划分vlan、设置tag-vlan-trunk"}},[n._v("#")]),n._v(" 划分VLAN、设置Tag VLAN Trunk")]),n._v(" "),a("ul",[a("li",[n._v("配置Switch1（Switch2同理，省略）")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Switch>en\t\t\t\t\t\t\t\t\t!进入特权模式\nSwitch#conf t\t\t\t\t\t\t\t\t!进入全局配置模式\nEnter configuration commands, one per line.  End with CNTL/Z.\nSwitch(config)#vlan 2\t\t\t\t\t\t!划分VLAN2\nSwitch(config-vlan)#exit\nSwitch(config)#vlan 3\t\t\t\t\t\t!划分VLAN3\nSwitch(config-vlan)#exit\nSwitch(config)#interface fa 0/1\t\t\t\t!进入0/1端口(与PC1相连)\nSwitch(config-if)#switchport access vlan 2\t!划分到VLAN2\nSwitch(config-if)#exit\nSwitch(config)#int fa 0/2\t\t\t\t\t!进入0/2端口(与PC2相连)\nSwitch(config-if)#switchport access vlan 3\t!划分到VLAN3\nSwitch(config-if)#exit\nSwitch(config)#interface fa 0/24\t\t\t!进入0/24端口(与Switch2相连)\nSwitch(config-if)#switchport mode trunk \t!工作模式设置Trunk\n\nSwitch(config-if)#\n%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/24, changed state to down\n \n%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/24, changed state to up\n\nSwitch(config-if)#end\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Switch(config-if)#switchport mode ?\n  access   Set trunking mode to ACCESS unconditionally\n  \t!只能属于1个VLAN，且该端口不打tag，一般用于连接计算机端口；\n  dynamic  Set trunking mode to dynamically negotiate access or trunk mode\n  \t! auto选项下：只有邻居交换机主动与自己协商时才会变成Trunk接口，所以它是一种被动模式，当邻居接口为Trunk/desirable之一时，才会成为Trunk。如果不能形成trunk模式，则工作在access模式。\n  \t! desirable选项下：主动与对协商成为Trunk接口的可能性，如果邻居接口模式为Trunk/desirable/auto之一，则接口将变成trunk接口工作。如果不能形成trunk模式，则工作在access模式。\n  trunk    Set trunking mode to TRUNK unconditionally\n  \t!可以允许多个VLAN通过，且该端口都是打tag的，一般用于交换机之间的连接；\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Switch#show vlan\t\t\t\t\t\t\t!显示VLAN\nVLAN Name                             Status    Ports\n---- -------------------------------- --------- -------------------------------\n1    default                          active    Fa0/3, Fa0/4, Fa0/5, Fa0/6\n                                                Fa0/7, Fa0/8, Fa0/9, Fa0/10\n                                                Fa0/11, Fa0/12, Fa0/13, Fa0/14\n                                                Fa0/15, Fa0/16, Fa0/17, Fa0/18\n                                                Fa0/19, Fa0/20, Fa0/21, Fa0/22\n                                                Fa0/23, Gig0/1, Gig0/2\n2    VLAN0002                         active    Fa0/1\n3    VLAN0003                         active    Fa0/2\n1002 fddi-default                     active    \n1003 token-ring-default               active    \n1004 fddinet-default                  active    \n1005 trnet-default                    active    \n\nVLAN Type  SAID       MTU   Parent RingNo BridgeNo Stp  BrdgMode Trans1 Trans2\n---- ----- ---------- ----- ------ ------ -------- ---- -------- ------ ------\n1    enet  100001     1500  -      -      -        -    -        0      0\n2    enet  100002     1500  -      -      -        -    -        0      0\n3    enet  100003     1500  -      -      -        -    -        0      0\n1002 fddi  101002     1500  -      -      -        -    -        0      0   \n1003 tr    101003     1500  -      -      -        -    -        0      0   \n1004 fdnet 101004     1500  -      -      -        ieee -        0      0   \n1005 trnet 101005     1500  -      -      -        ibm  -        0      0   \n --More-- \n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br")])]),a("ul",[a("li",[n._v("配置后：\n"),a("ul",[a("li",[n._v("VLAN2：PC1、PC3")]),n._v(" "),a("li",[n._v("VLAN3：PC2、PC4")])])])]),n._v(" "),a("h2",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[n._v("#")]),n._v(" 测试")]),n._v(" "),a("ul",[a("li",[n._v("从PC1 (192.168.1.2) 测试与PC2、PC3、PC4的连通性")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Packet Tracer PC Command Line 1.0\nC:\\>ping 192.168.1.3\t\t!与PC2测试\n\nPinging 192.168.1.3 with 32 bytes of data:\n\nRequest timed out.\n\nPing statistics for 192.168.1.3:\n    Packets: Sent = 1, Received = 0, Lost = 1 (100% loss),\n\nC:\\>ping 192.168.1.4\t\t!与PC3测试\n\nPinging 192.168.1.4 with 32 bytes of data:\n\nReply from 192.168.1.4: bytes=32 time<1ms TTL=128\n\nPing statistics for 192.168.1.4:\n    Packets: Sent = 1, Received = 1, Lost = 0 (0% loss),\nApproximate round trip times in milli-seconds:\n    Minimum = 0ms, Maximum = 0ms, Average = 0ms\n\nC:\\>ping 192.168.1.5\t\t!与PC4测试\n\nPinging 192.168.1.5 with 32 bytes of data:\n\nRequest timed out.\n\nPing statistics for 192.168.1.5:\n    Packets: Sent = 1, Received = 0, Lost = 1 (100% loss),\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br")])]),a("ul",[a("li",[n._v("从PC4 (192.168.1.5) 测试与PC1、PC2、PC3的连通性")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("C:\\>ping 192.168.1.2\t\t!与PC1测试\n\nPinging 192.168.1.2 with 32 bytes of data:\n\nRequest timed out.\n\nPing statistics for 192.168.1.2:\n    Packets: Sent = 1, Received = 0, Lost = 1 (100% loss),\n\nC:\\>ping 192.168.1.3\t\t!与PC2测试\n\nPinging 192.168.1.3 with 32 bytes of data:\n\nReply from 192.168.1.3: bytes=32 time<1ms TTL=128\n\nPing statistics for 192.168.1.3:\n    Packets: Sent = 1, Received = 1, Lost = 0 (0% loss),\nApproximate round trip times in milli-seconds:\n    Minimum = 0ms, Maximum = 0ms, Average = 0ms\n\nC:\\>ping 192.168.1.4\t\t!与PC3测试\n\nPinging 192.168.1.4 with 32 bytes of data:\n\nRequest timed out.\n\nPing statistics for 192.168.1.4:\n    Packets: Sent = 1, Received = 0, Lost = 1 (100% loss),\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);