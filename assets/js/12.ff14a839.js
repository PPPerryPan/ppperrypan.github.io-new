(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1180:function(A,o,i){"use strict";i.r(o);var t=i(13),K=Object(t.a)({},(function(){var A=this,o=A.$createElement,t=A._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[t("h2",{attrs:{id:"实验目的与要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实验目的与要求"}},[A._v("#")]),A._v(" 实验目的与要求")]),A._v(" "),t("ol",[t("li",[A._v("更好地熟悉和掌握计算机中汇编语言和高级语言之间的关系。")]),A._v(" "),t("li",[A._v("增强学生对于调试器gdb、edb等调试器的使用和逆向工程等方面原理与技能的掌握。")]),A._v(" "),t("li",[A._v("掌握使用gdb调试器和objdump来反汇编炸弹的可执行文件，并单步跟踪调试每一阶段的机器代码，从中理解每一汇编语言代码的行为或作用，进而设法“推断”出拆除炸弹所需的目标字符串。")]),A._v(" "),t("li",[A._v("完善测试，需要拆除尽可能多的炸弹")])]),A._v(" "),t("h2",{attrs:{id:"实验仪器设备-实验环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实验仪器设备-实验环境"}},[A._v("#")]),A._v(" 实验仪器设备 / 实验环境")]),A._v(" "),t("ol",[t("li",[A._v("Linux操作系统 — 64位Ubuntu")]),A._v(" "),t("li",[A._v("gdb调试器和objdump反汇编指令")]),A._v(" "),t("li",[A._v("笔记本")])]),A._v(" "),t("h2",{attrs:{id:"实验内容及步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实验内容及步骤"}},[A._v("#")]),A._v(" 实验内容及步骤")]),A._v(" "),t("ul",[t("li",[t("p",[A._v('一个“binary bombs”（二进制炸弹，下文将简称为炸弹）是一个Linux可执行C程序，包含了7个阶段（phase1~phase6和一个隐藏阶段）。炸弹运行的每个阶段要求学生输入一个特定的字符串，若的输入符合程序预期的输入，该阶段的炸弹就被“拆除”，否则炸弹“爆炸”并打印输出 "BOOM!!!"字样。实验的目标是拆除尽可能多的炸弹层次。')])]),A._v(" "),t("li",[t("p",[A._v("每个炸弹阶段考察了机器级语言程序的一个不同方面，难度逐级递增：")]),A._v(" "),t("p",[A._v("阶段1：字符串比较")]),A._v(" "),t("p",[A._v("阶段2：for循环")]),A._v(" "),t("p",[A._v("阶段3：switch分支")]),A._v(" "),t("p",[A._v("阶段4：递归函数")]),A._v(" "),t("p",[A._v("阶段5：数组元素按序访问")]),A._v(" "),t("p",[A._v("阶段6：链表")]),A._v(" "),t("p",[A._v("隐藏阶段：只有在阶段4的拆解字符串后再附加一特定字符串后才会出现（作为最后一个阶段）")])]),A._v(" "),t("li",[t("p",[A._v("为了完成二进制炸弹拆除任务，需要使用gdb调试器和objdump来反汇编炸弹的可执行文件，并单步跟踪调试每一阶段的机器代码，从中理解每一汇编语言代码的行为或作用，进而设法“推断”出拆除炸弹所需的目标字符串。这可能需要在每一阶段的开始代码前和引爆炸弹的函数前设置断点，以便于调试。")])]),A._v(" "),t("li",[t("p",[A._v("拆弹密码的输入分文两种模式。")]),A._v(" "),t("ul",[t("li",[t("p",[A._v("模式1：正常手动输入，每次程序运行到某一阶段会停下来要求用户输入数据。这种方式比较原始，不推荐使用。如果使用这种做法，在程序调试到后期时，每次为了进入后期的断点位置都需要在之前的每一个阶段进行手动输入，极其浪费时间。")])]),A._v(" "),t("li",[t("p",[A._v("模式2：采用输入重定向。首先将答案文本写至一个.txt文本中，每个阶段的拆弹密码占一行。")]),A._v(" "),t("p",[t("img",{attrs:{src:i(731),alt:"B1"}})])]),A._v(" "),t("li",[t("p",[A._v("在调试程序时直接使用输入重定向指令，例如（假设密码已被写入到之前的拆弹密码文本文件solution.txt中）：./bomb < solution.txt")])]),A._v(" "),t("li",[t("p",[A._v("通过执行以上指令即可直接根据屏幕输出来判断程序正确地进行了几个阶段或者在第几个阶段出现了错误。如果密码全部正确，提示结果如下图所示：")])])])])]),A._v(" "),t("p",[t("img",{attrs:{src:i(732),alt:"B2"}})]),A._v(" "),t("h2",{attrs:{id:"实验设备与软件环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实验设备与软件环境"}},[A._v("#")]),A._v(" 实验设备与软件环境")]),A._v(" "),t("ol",[t("li",[A._v("Linux操作系统 —— 64位 Ubuntu 18.04")]),A._v(" "),t("li",[A._v("C编译环境(gcc)、make自动化编译工具")]),A._v(" "),t("li",[A._v("虚拟机")])]),A._v(" "),t("h2",{attrs:{id:"实验注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实验注意事项"}},[A._v("#")]),A._v(" 实验注意事项")]),A._v(" "),t("ol",[t("li",[A._v("建议在linux下进行文本拆弹密码文本编辑。")]),A._v(" "),t("li",[A._v("建议使用gdb或IDA、edb、DDD之类的调试软件辅助进行。")]),A._v(" "),t("li",[A._v("建议实验过程中手绘图表辅助逆向工程分析。")])]),A._v(" "),t("h2",{attrs:{id:"实验技巧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实验技巧"}},[A._v("#")]),A._v(" 实验技巧")]),A._v(" "),t("ul",[t("li",[t("p",[A._v("你需要掌握：")]),A._v(" "),t("p",[A._v("1.使用 gdb 和反汇编以查看程序的运行过程。")]),A._v(" "),t("p",[A._v("2.明白具体的操作符的含义。")]),A._v(" "),t("p",[A._v("3.理解不同寄存器的常用方法。")]),A._v(" "),t("p",[A._v("4.一些汇编语句与实际命令的转换。")]),A._v(" "),t("p",[A._v("5.使用gdb和反汇编以查看程序的运行过程")]),A._v(" "),t("p",[A._v("本实验的执行文件为bomb（无后缀），先在命令行找到bomb文件的位置，再用gdb调试工具运行该文件，写法为"),t("strong",[A._v("gdb bomb")]),A._v("。进入 gdb 调试后，使用"),t("strong",[A._v("disas phase_X")]),A._v("反汇编相应关卡,或者直接使用"),t("strong",[A._v("layout regs")]),A._v("进入图形化交互界面,注意自己添加断点("),t("strong",[A._v("break")]),A._v(" "),t("strong",[A._v("函数名")]),A._v(")，以及单步执行("),t("strong",[A._v("si")]),A._v(")")])]),A._v(" "),t("li",[t("p",[A._v("具体的操作符的含义")]),A._v(" "),t("p",[A._v("常量以符号$开头：$-42， $0x15213（一定要注意十进制还是十六进制）")]),A._v(" "),t("p",[A._v("寄存器以符号%开头：%esi，%rax（可能存的是值或者地址）")]),A._v(" "),t("p",[A._v("内存地址用括号括起来：如(%rbx)，括号实际上是去寻址的意思")]),A._v(" "),t("p",[A._v("一些汇编语句与实际命令的转换，下面是一个"),t("strong",[A._v("例子")])]),A._v(" "),t("p",[A._v("注：汇编指令的英文一般就指代其功能，如mov（move移动）。汇编的注释为;。")]),A._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[A._v("sub    $0x8,%rsp    \t\t\t\t\t;rsp寄存器的内容减去8再保存到rsp中\nmov    $0x402400,%esi   \t \t\t\t;将常量$0x402400存到esi寄存器中，一般出现这类地址，是重点信息\ncallq  0x401338 <strings_not_equal>    \t;调用strings_not_equal函数。bomb文件中的函数名基本就指代其功能\ntest   %eax,%eax    \t\t\t\t\t;test指令做&操作，一般和跳转一起使用\nje     0x400ef7 <phase_1+23> ;\ncallq  0x40143a <explode_bomb>    \t\t;je为若相等则跳转，je也等价于jz（若为零则跳转）。此处即若eax零则跳转到0x400ef7。\nadd    $0x8,%rsp    \t\t\t\t\t;rsp寄存器内容加8再保存到rsp中\n\n")])]),A._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[A._v("1")]),t("br"),t("span",{staticClass:"line-number"},[A._v("2")]),t("br"),t("span",{staticClass:"line-number"},[A._v("3")]),t("br"),t("span",{staticClass:"line-number"},[A._v("4")]),t("br"),t("span",{staticClass:"line-number"},[A._v("5")]),t("br"),t("span",{staticClass:"line-number"},[A._v("6")]),t("br"),t("span",{staticClass:"line-number"},[A._v("7")]),t("br"),t("span",{staticClass:"line-number"},[A._v("8")]),t("br")])])])]),A._v(" "),t("h2",{attrs:{id:"编程要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编程要求"}},[A._v("#")]),A._v(" 编程要求")]),A._v(" "),t("p",[A._v("根据提示，在汇编代码中找到本关密码，在执行文件中将密码输出验证。为了方便找出过关代码，反汇编找出源码："),t("strong",[A._v("objdump -d ./bomb > bomb.s")])]),A._v(" "),t("p",[A._v("如果提示没有执行权限，可以使用ll命令查看该文件夹下的文件权限，并用chmod修改")]),A._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[A._v("./bomb\n")])]),A._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[A._v("1")]),t("br")])]),t("p",[A._v("chmod 777 bomb来修改运行权限")]),A._v(" "),t("p",[A._v("之后再尝试运行即可，效果如下图。如果没有遇到Permission denied问题，则不需要这一步的特殊处理。")]),A._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[A._v("chmod 777 bomb\n")])]),A._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[A._v("1")]),t("br")])]),t("p",[A._v("gdb bomb进入调试")]),A._v(" "),t("p",[A._v("进入调试后，先设置断点，如break phase_1即输入第一关密码后，在phase_1处暂停。再用run命令开始运行程序，run以后会出现一段话，此时输入第一关密码，随便输一个，即进入断点处，此时disas即可查看第一关汇编代码，注意不必纠结函数，给出的地址很重要。")]),A._v(" "),t("p",[A._v("例：")]),A._v(" "),t("p",[A._v("**1.**"),t("strong",[A._v("查看地址0x01存的内容")])]),A._v(" "),t("p",[A._v("​\tprint 0x01")]),A._v(" "),t("p",[A._v("​\tx/s 0x01  ;x为以16进制显示，s为以字符串显示")]),A._v(" "),t("p",[A._v("**2.**"),t("strong",[A._v("查看寄存器esi存的内容")])]),A._v(" "),t("p",[A._v("​\t"),t("strong",[A._v("print $esi")])]),A._v(" "),t("p",[A._v("**\tx/s $esi**")]),A._v(" "),t("p",[A._v("**3.**"),t("strong",[A._v("建议将反汇编出来的代码放入一个文本中，好做笔记。")])]),A._v(" "),t("p",[t("strong",[A._v("4.将汇编中出现的代码，与书中所学的if，while，for，switch的模板做笔记，提炼出程序框架。")])]),A._v(" "),t("h2",{attrs:{id:"实验过程与结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实验过程与结果"}},[A._v("#")]),A._v(" 实验过程与结果")]),A._v(" "),t("h3",{attrs:{id:"phase-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phase-1"}},[A._v("#")]),A._v(" Phase_1")]),A._v(" "),t("ol",[t("li",[A._v("使用gdb boom 进入gdb调试模式，并使用layout regs进入GUI模式")])]),A._v(" "),t("p",[t("img",{attrs:{src:i(733),alt:"img"}})]),A._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[A._v("在Phase_1函数前打断点，并将程序跑起来")])]),A._v(" "),t("p",[t("img",{attrs:{src:i(734),alt:"img"}})]),A._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[A._v("由下面的call… <strings_not_equal>猜出lea内藏有拆弹密码，尝试x/s注释内的内存地址，得出拆弹密码：Brownie, you are doing a heck of a job.")])]),A._v(" "),t("p",[t("img",{attrs:{src:i(735),alt:"img"}})]),A._v(" "),t("h3",{attrs:{id:"phase-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phase-2"}},[A._v("#")]),A._v(" Phase_2")]),A._v(" "),t("ol",[t("li",[A._v("反汇编Phase_2后，观察到call另一地址")])]),A._v(" "),t("p",[t("img",{attrs:{src:i(736),alt:"img"}})]),A._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[A._v("同时，观察到对比的第一个数字为0，如果不为0，则call explode_bomb。")])]),A._v(" "),t("p",[t("img",{attrs:{src:i(737),alt:"img"}})]),A._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[A._v("进入read_six_number后，观察到lea指令，查看0x5555554029a3的内容，对应0x555555401841处call指令，得到解除炸弹的密码为六个整数。")])]),A._v(" "),t("p",[t("img",{attrs:{src:i(738),alt:"img"}})]),A._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[A._v("在<phase_2+30>位置打断点，并使用c指令让gdb运行至位于<phase_2+30>处断点，通过观察phase_2函数可知，第一个数字为0，第二个数字为1，其余四位为前两位相加。")])]),A._v(" "),t("p",[t("img",{attrs:{src:i(739),alt:"img"}})]),A._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[A._v("组合后得到拆弹密码：0 1 1 2 3 5")])]),A._v(" "),t("p",[t("img",{attrs:{src:i(740),alt:"image-20220205192543252"}})]),A._v(" "),t("h3",{attrs:{id:"phase-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phase-3"}},[A._v("#")]),A._v(" Phase_3")]),A._v(" "),t("ol",[t("li",[A._v("易知，解除炸弹的密码为两个整数")])]),A._v(" "),t("p",[t("img",{attrs:{src:i(741),alt:"img"}})]),A._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[A._v("观察后猜出，解除炸弹的其中一个密码可能为：6 50。")])]),A._v(" "),t("p",[t("img",{attrs:{src:i(742),alt:"img"}})]),A._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[A._v("尝试输入后，成功call phase_defused，Phase_3拆除成功。")])]),A._v(" "),t("p",[t("img",{attrs:{src:i(743),alt:"img"}})]),A._v(" "),t("h3",{attrs:{id:"phase-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phase-4"}},[A._v("#")]),A._v(" Phase_4")]),A._v(" "),t("ol",[t("li",[A._v("易知，拆弹密码为两个整数")])]),A._v(" "),t("p",[t("img",{attrs:{src:i(744),alt:"4.1"}})]),A._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[A._v("观察汇编代码后，可得出：第一个数必定小于等于14，第二个整数必定为1")])]),A._v(" "),t("p",[t("img",{attrs:{src:i(745),alt:"4.1"}})]),A._v(" "),t("p",[t("img",{attrs:{src:i(746),alt:"4.1"}})]),A._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[A._v("观察func4")])]),A._v(" "),t("p",[t("img",{attrs:{src:i(747),alt:"4.1"}})]),A._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[A._v("尝试输入：11 1，成功call phase_defused，炸弹拆除成功。")])]),A._v(" "),t("p",[t("img",{attrs:{src:i(748),alt:"4.1"}})]),A._v(" "),t("h2",{attrs:{id:"操作异常问题与解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作异常问题与解决方案"}},[A._v("#")]),A._v(" 操作异常问题与解决方案")]),A._v(" "),t("p",[A._v("问题：实验过程中，其中一台电脑使用Ubuntu 18.04，执行apt-get update 和 apt-get upgrade 打完更新后，重启虚拟机，会卡死在登录页面，无法进入Ubuntu Desktop，多次使用VMware自定义安装及快速安装功能将系统重装后，只要执行两条更新命令，问题依旧出现。")]),A._v(" "),t("p",[A._v("思考：可能存在兼容性问题。")]),A._v(" "),t("p",[A._v("解决：改用Ubuntu 20.04 LTS。")]),A._v(" "),t("h2",{attrs:{id:"实验总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实验总结"}},[A._v("#")]),A._v(" 实验总结")]),A._v(" "),t("p",[A._v("GNU symbolic debugger，简称「GDB 调试器」，是 Linux 平台下最常用的一款程序调试器，发展至今，GDB 调试器已经对 C、C++、Go、Objective-C、OpenCL、Ada 等多种编程语言提供了支持。")]),A._v(" "),t("p",[A._v("在本次实验中，对于反汇编指令以及一系列的寄存器操作后的结果有了一定的认识，知道了程序背后的机器级代码是如何执行。在这个过程中需要细心的分析，确定程序的流程。")]),A._v(" "),t("p",[A._v("实验前需要先去学习工具的使用与一些编译的基础（符号表、定址表等等）花费了一些时间。前几个阶段过于关注函数的具体实现而没有根据常识去推测一些明显函数的作用花费了一些时间。")]),A._v(" "),t("p",[A._v("实验过程需要细致的分析与大胆的猜测与实验验证，还需要小心操作，最重要的是耐心，面对非常晦涩的汇编代码如何一步步地弄清代码的作用很需要毅力。当然也可以通过自己写出等价的C代码来帮助自己理解。")])])}),[],!1,null,null,null);o.default=K.exports},731:function(A,o){A.exports="data:image/jpeg;base64,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8lF1r/rv/wCyiigD2nTr65i8MeGLSO6is4JNJikaWRiociNMIGHTrmuu0e6N7pFrcNG8ZkjB2uxJH4nk1zvhvWLWLwVocLReey6fb5BAwCI19a6OC4kYmRiDG4UogGNnHPPehAUNbvru1nxb2M80aRFy6KDubsvXj1JpyyuwG7gkZI9DWoQtxGVYHHfmoxYwjsfzoAzZVkkaIrPJFscMdmPmx2PtW1UH2KH0P51PQBSuZ5I5yqtgYHaoDdzDHz9/Sr8ltHI5Zgcn3pv2KH0P50AYuo+e9xBLDeS27mVd7vOFhRR1G09SemP1roqg+xwZ+ZAwHZuRU9AHMahdmz14yy3RnieWONLaG7ZXjPQkxjhhnk+1dPTPJjEnmeWnmf3toz+dPo6AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAHy38TP+Si61/wBd/wD2UUUfEz/koutf9d//AGUUUAet+GkB8LaT/wBeUP8A6AK7y3QfZov9wfyrmvDGhmXwboksUnL6fAxVvUxrXWRQbIUUnlVANADohhT9akpqrtFOoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD5b+Jn/JRda/67/+yiij4mf8lF1r/rv/AOyiigD6K8Gf8iRoP/YOt/8A0WtbVYvgz/kSNB/7B1v/AOi1raoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA+W/iZ/yUXWv+u/8A7KKKPiZ/yUXWv+u//soooA+ivBn/ACJGg/8AYOt//Ra1tVi+DP8AkSNB/wCwdb/+i1raoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA+W/iZ/yUXWv+u//sooo+Jn/JRda/67/wDsoooA+ivBn/IkaD/2Drf/ANFrW1WL4M/5EjQf+wdb/wDota2qACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPlv4mf8lF1r/rv/AOyiij4mf8lF1r/rv/7KKKAPorwZ/wAiRoP/AGDrf/0WtbVYvgz/AJEjQf8AsHW//ota2qACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPlv4mf8lF1r/rv/7KKKPiZ/yUXWv+u/8A7KKKAPorwZ/yJGg/9g63/wDRa1tVi+DP+RI0H/sHW/8A6LWtqgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD5b+Jn/JRda/67/wDsooo+Jn/JRda/67/+yiigD6K8Gf8AIkaD/wBg63/9FrW1WL4M/wCRI0H/ALB1v/6LWtqgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD5b+Jn/JRda/67/+yiij4mf8lF1r/rv/AOyiigD6K8Gf8iRoP/YOt/8A0WtbVYvgz/kSNB/7B1v/AOi1raoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA+W/iZ/yUXWv+u/8A7KKKPiZ/yUXWv+u//soooAksvil4u0+xt7O11by7e3jWKJPs0J2qowBkpk8DvU//AAt3xp/0Gf8AyVh/+IoooAP+Fu+NP+gz/wCSsP8A8RR/wt3xp/0Gf/JWH/4iiigA/wCFu+NP+gz/AOSsP/xFH/C3fGn/AEGf/JWH/wCIoooAP+Fu+NP+gz/5Kw//ABFH/C3fGn/QZ/8AJWH/AOIoooAP+Fu+NP8AoM/+SsP/AMRR/wALd8af9Bn/AMlYf/iKKKAD/hbvjT/oM/8AkrD/APEUf8Ld8af9Bn/yVh/+IoooAP8AhbvjT/oM/wDkrD/8RR/wt3xp/wBBn/yVh/8AiKKKAD/hbvjT/oM/+SsP/wARR/wt3xp/0Gf/ACVh/wDiKKKAD/hbvjT/AKDP/krD/wDEUf8AC3fGn/QZ/wDJWH/4iiigA/4W740/6DP/AJKw/wDxFH/C3fGn/QZ/8lYf/iKKKAD/AIW740/6DP8A5Kw//EUf8Ld8af8AQZ/8lYf/AIiiigA/4W740/6DP/krD/8AEUf8Ld8af9Bn/wAlYf8A4iiigA/4W740/wCgz/5Kw/8AxFH/AAt3xp/0Gf8AyVh/+IoooAP+Fu+NP+gz/wCSsP8A8RR/wt3xp/0Gf/JWH/4iiigA/wCFu+NP+gz/AOSsP/xFH/C3fGn/AEGf/JWH/wCIoooAP+Fu+NP+gz/5Kw//ABFH/C3fGn/QZ/8AJWH/AOIoooAP+Fu+NP8AoM/+SsP/AMRR/wALd8af9Bn/AMlYf/iKKKAD/hbvjT/oM/8AkrD/APEUf8Ld8af9Bn/yVh/+IoooAP8AhbvjT/oM/wDkrD/8RR/wt3xp/wBBn/yVh/8AiKKKAD/hbvjT/oM/+SsP/wARR/wt3xp/0Gf/ACVh/wDiKKKAD/hbvjT/AKDP/krD/wDEUf8AC3fGn/QZ/wDJWH/4iiigA/4W740/6DP/AJKw/wDxFH/C3fGn/QZ/8lYf/iKKKAD/AIW740/6DP8A5Kw//EUf8Ld8af8AQZ/8lYf/AIiiigA/4W740/6DP/krD/8AEUf8Ld8af9Bn/wAlYf8A4iiigA/4W740/wCgz/5Kw/8AxFH/AAt3xp/0Gf8AyVh/+IoooAP+Fu+NP+gz/wCSsP8A8RR/wt3xp/0Gf/JWH/4iiigA/wCFu+NP+gz/AOSsP/xFH/C3fGn/AEGf/JWH/wCIoooAP+Fu+NP+gz/5Kw//ABFH/C3fGn/QZ/8AJWH/AOIoooA5bU9TutY1Ge/v5fNup23SPtC7j9AAKKKKAP/Z"},732:function(A,o,i){A.exports=i.p+"assets/img/B2.0e2d5171.png"},733:function(A,o,i){A.exports=i.p+"assets/img/B3.fdac94a2.png"},734:function(A,o,i){A.exports=i.p+"assets/img/B4.33069a85.png"},735:function(A,o,i){A.exports=i.p+"assets/img/B5.d1b72280.jpg"},736:function(A,o,i){A.exports=i.p+"assets/img/B6.81ddef6f.png"},737:function(A,o,i){A.exports=i.p+"assets/img/B7.a686882a.jpg"},738:function(A,o,i){A.exports=i.p+"assets/img/B8.2fe9b442.png"},739:function(A,o,i){A.exports=i.p+"assets/img/B9.6f58f6ab.jpg"},740:function(A,o,i){A.exports=i.p+"assets/img/B10.1421f495.png"},741:function(A,o,i){A.exports=i.p+"assets/img/B11.c022f413.png"},742:function(A,o,i){A.exports=i.p+"assets/img/B12.a46e60bc.png"},743:function(A,o,i){A.exports=i.p+"assets/img/B13.5e55c8fd.png"},744:function(A,o,i){A.exports=i.p+"assets/img/B14.df79d7e1.png"},745:function(A,o,i){A.exports=i.p+"assets/img/B15.3f759e8c.png"},746:function(A,o,i){A.exports=i.p+"assets/img/B16.f6be0acc.png"},747:function(A,o,i){A.exports=i.p+"assets/img/B17.53758225.png"},748:function(A,o,i){A.exports=i.p+"assets/img/B18.ef99f13d.png"}}]);