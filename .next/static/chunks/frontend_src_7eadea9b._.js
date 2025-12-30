(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/frontend/src/components/FooterBar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>FooterBar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// 自适应 hook - 修复：初始化时立即获取真实窗口宽度
function useWindowWidth() {
    _s();
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useWindowWidth.useState": ()=>{
            // 在客户端初始化时立即获取真实窗口宽度
            if ("TURBOPACK compile-time truthy", 1) {
                return window.innerWidth;
            }
            //TURBOPACK unreachable
            ;
        }
    }["useWindowWidth.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWindowWidth.useEffect": ()=>{
            // 客户端挂载时再次确认宽度（处理初始化时机问题）
            setWidth(window.innerWidth);
            function handleResize() {
                setWidth(window.innerWidth);
            }
            window.addEventListener("resize", handleResize);
            return ({
                "useWindowWidth.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["useWindowWidth.useEffect"];
        }
    }["useWindowWidth.useEffect"], []);
    return width;
}
_s(useWindowWidth, "oSvW4Uw8dHdJi/Pc28gvzePjT0w=");
function FooterBar() {
    _s1();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const width = useWindowWidth();
    // 按 390px 基准做比例
    const scale = width / 390;
    const iconSize = 18.5 * scale; // 图标大小
    const footerHeight = 51 * scale; // 整个 footer 高度
    const navItems = [
        {
            href: "/cal",
            icon: "/cond/cal.png"
        },
        {
            href: "/earth",
            icon: "/cond/globe.png"
        },
        {
            href: "/chat",
            icon: "/cond/chat.png"
        },
        {
            href: "/docs",
            icon: "/cond/book.png"
        },
        {
            href: "/user",
            icon: "/cond/user.png"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-900/80 glass-effect border-t border-gray-700",
        style: {
            height: footerHeight
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-around items-center max-w-md mx-auto h-full",
            children: navItems.map((item, idx)=>{
                const isActive = pathname === item.href;
                // 中间"聊天"按钮突出显示
                if (idx === 2) {
                    return(// <Link
                    //       href="/chat"
                    //       className="flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors text-white"
                    //       style={{
                    //           backgroundColor: "#0051feff",  // 始终使用这个背景色
                    //       }}
                    //   >
                    //       <Image src="/cond/chat.png" alt="聊天" width={24} height={24} />
                    //       <span className="text-xs">聊天</span>
                    //   </Link>
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: "flex items-center justify-center rounded-full transition-colors shadow-lg \n    bg-[#0051feff]",
                        style: {
                            padding: 10 * scale,
                            transform: "translateY(-".concat(footerHeight * 0.2, "px)")
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: item.icon,
                            alt: "",
                            width: iconSize * 1.2,
                            height: iconSize * 1.2,
                            style: {
                                width: "".concat(iconSize * 1.2, "px"),
                                height: "".concat(iconSize * 1.2, "px")
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/FooterBar.tsx",
                            lineNumber: 89,
                            columnNumber: 17
                        }, this)
                    }, item.href, false, {
                        fileName: "[project]/frontend/src/components/FooterBar.tsx",
                        lineNumber: 79,
                        columnNumber: 15
                    }, this));
                }
                // 其他项
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: "flex items-center justify-center rounded-lg transition-colors\n                ".concat(isActive ? "bg-gray-700" : "hover:bg-gray-700"),
                    style: {
                        padding: 6 * scale
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: item.icon,
                        alt: "",
                        width: iconSize,
                        height: iconSize,
                        style: {
                            width: "".concat(iconSize, "px"),
                            height: "".concat(iconSize, "px")
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/FooterBar.tsx",
                        lineNumber: 110,
                        columnNumber: 15
                    }, this)
                }, item.href, false, {
                    fileName: "[project]/frontend/src/components/FooterBar.tsx",
                    lineNumber: 103,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/FooterBar.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/FooterBar.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s1(FooterBar, "hv2+uMBS2ypopnFEGh5bdsNjTl8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        useWindowWidth
    ];
});
_c = FooterBar;
var _c;
__turbopack_context__.k.register(_c, "FooterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/frontend/src/app/details/topic/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>TopicDetailPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$FooterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/FooterBar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function TopicDetailPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const id = Number(params.id);
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 主题标题映射：根据你给出的条目整理，尽量覆盖常见 id
    const topicTitles = {
        0: "藏历是什么：种类、流派与发展历史",
        1: "解密藏历智慧之工具 — 萨雄与图珠（日圭）",
        2: "藏历与农历的比较（阴阳历差异与闰月）",
        3: "历法与节气算法：藏历计算体系原理",
        4: "藏历的纪年方法（生肖、教历、绕迥等）",
        5: "藏历的纪月方法（十二/月与闰月规则）",
        6: "藏历的纪日方法（数字、生肖、弦月配日）",
        7: "藏历的纪时方法（生肖时、漏刻）",
        8: "历算五支：曜、日、宿、会合、作用（五基数）",
        9: "藏历的十曜体系（含罗睺、劫火、长尾彗星）",
        11: "藏历历书：天文与气象并重的历书传统",
        12: "六历对照：银巴万年历及其基础历派说明",
        13: "藏历与季节：节气、季节划分与地域特色",
        14: "藏历历书与二十四节气（藏历节气与汉历节气）",
        15: "五星（曜）运动、缺日与重日、日月食预测",
        16: "藏历是什么（补充：地域特色、应用与跨文化）",
        17: "三种日的概念：太阳日、太阴日与宫日",
        18: "五行与五大（五源）学说在藏历中的应用",
        19: "2025年满月日历（全年满月列表）",
        20: "2025年17大罕见天文事件总览",
        21: "2025年天文事件日历（全年事件汇总）",
        22: "2025年彗星时间表与观测要点",
        23: "2025年春分与节气时间说明",
        24: "二十八（七）星宿——古代观测标志与运用",
        25: "太阳周年视运动与宫年概念",
        26: "三种年的概念：太阳年、回归年、恒星年",
        27: "三种月的概念：太阴月（朔望月）、恒星月、太阳月",
        28: "黄道十二宫定义与天文划分",
        29: "藏历中的十曜与五星（曜）细解",
        30: "太阳日与地球自转周期（太阳日含义）",
        31: "太阴月与月亮的视运动与月相变化",
        32: "藏历的时间四维体系：纪年、纪月、纪日、纪时",
        33: "藏历与农历差异补充（闰月设置的意义）",
        34: "历法长期修正与万年历编制方法（绕迥计年）",
        35: "天球视角：藏历的宇宙观与天球模型",
        36: "太阳年、节气与历算中的时间计量",
        37: "月食类型、图像与发生频率说明",
        38: "藏历与占卜：历法在民俗与占算中的应用",
        39: "黄道十二宫与二十八星宿的合并解读",
        40: "（已合并）该条目内容已在其他主题中覆盖",
        41: "时轮历的时间与空间计量体系（单位与进制）",
        42: "（备用）",
        43: "时轮历的日月食预测方法综述",
        44: "年/月/日等多周期合并与历法设计",
        45: "三种日/年/月合并说明（体系整合）",
        46: "藏历的缺日与重日规则详解"
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TopicDetailPage.useEffect": ()=>{
            const fetchHtmlContent = {
                "TopicDetailPage.useEffect.fetchHtmlContent": async ()=>{
                    try {
                        // 优先按 /database/topic{id}.html 拉取（保持你原有结构）
                        const response = await fetch("/database/topic".concat(id, ".html"));
                        if (!response.ok) {
                            throw new Error("无法加载主题内容 (".concat(response.status, ")"));
                        }
                        const html = await response.text();
                        setContent(html);
                        setLoading(false);
                    } catch (err) {
                        console.error("加载HTML内容失败:", err);
                        setError("无法加载主题内容，请稍后再试");
                        setLoading(false);
                    }
                }
            }["TopicDetailPage.useEffect.fetchHtmlContent"];
            if (!Number.isNaN(id)) {
                fetchHtmlContent();
            } else {
                setError("无效的主题 id");
                setLoading(false);
            }
        }
    }["TopicDetailPage.useEffect"], [
        id
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black text-white min-h-screen overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 opacity-30",
                    children: [
                        ...Array(100)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute w-1 h-1 bg-white rounded-full star",
                            style: {
                                left: "".concat(Math.random() * 100, "%"),
                                top: "".concat(Math.random() * 100, "%")
                            }
                        }, i, false, {
                            fileName: "[project]/frontend/src/app/details/topic/[id]/page.tsx",
                            lineNumber: 98,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/details/topic/[id]/page.tsx",
                    lineNumber: 96,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/details/topic/[id]/page.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 min-h-screen flex flex-col pb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 pt-3 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/docs",
                                className: "text-gray-300 hover:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 border-l-2 border-t-2 border-current rotate-[-45deg]"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/details/topic/[id]/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/details/topic/[id]/page.tsx",
                                lineNumber: 114,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-4 text-lg font-medium",
                                children: topicTitles[id] || "藏历主题 ".concat(id)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/details/topic/[id]/page.tsx",
                                lineNumber: 117,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/details/topic/[id]/page.tsx",
                        lineNumber: 113,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto px-4 overflow-x-hidden",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center h-40",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white",
                                children: "加载中..."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/details/topic/[id]/page.tsx",
                                lineNumber: 126,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/details/topic/[id]/page.tsx",
                            lineNumber: 125,
                            columnNumber: 25
                        }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-10 text-red-400",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/details/topic/[id]/page.tsx",
                                lineNumber: 130,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/details/topic/[id]/page.tsx",
                            lineNumber: 129,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "prose prose-invert prose-sm max-w-3xl mx-auto pb-8",
                            dangerouslySetInnerHTML: {
                                __html: content
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/details/topic/[id]/page.tsx",
                            lineNumber: 133,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/details/topic/[id]/page.tsx",
                        lineNumber: 123,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/details/topic/[id]/page.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$FooterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/frontend/src/app/details/topic/[id]/page.tsx",
                    lineNumber: 143,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/details/topic/[id]/page.tsx",
                lineNumber: 142,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/details/topic/[id]/page.tsx",
        lineNumber: 93,
        columnNumber: 9
    }, this);
}
_s(TopicDetailPage, "ajtpuiwefWeylIgF8s5cfxnQFTY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = TopicDetailPage;
var _c;
__turbopack_context__.k.register(_c, "TopicDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=frontend_src_7eadea9b._.js.map