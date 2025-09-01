(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/EventModalOverlay.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>EventModalOverlay
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function EventModalOverlay(param) {
    let { open, onClose, events, container = 'contained', initialIndex = 0 } = param;
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "EventModalOverlay.useState": ()=>{
            var _events_length;
            return Math.min(Math.max(initialIndex, 0), Math.max(0, ((_events_length = events === null || events === void 0 ? void 0 : events.length) !== null && _events_length !== void 0 ? _events_length : 1) - 1));
        }
    }["EventModalOverlay.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventModalOverlay.useEffect": ()=>{
            var _events_length;
            setIndex(Math.min(Math.max(initialIndex, 0), Math.max(0, ((_events_length = events === null || events === void 0 ? void 0 : events.length) !== null && _events_length !== void 0 ? _events_length : 1) - 1)));
        }
    }["EventModalOverlay.useEffect"], [
        events,
        initialIndex,
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventModalOverlay.useEffect": ()=>{
            var _events_length;
            if (!open || ((_events_length = events === null || events === void 0 ? void 0 : events.length) !== null && _events_length !== void 0 ? _events_length : 0) < 1) return;
            function onKey(e) {
                if (e.key === 'Escape') onClose();
                if (e.key === 'ArrowLeft') setIndex({
                    "EventModalOverlay.useEffect.onKey": (i)=>(i - 1 + events.length) % events.length
                }["EventModalOverlay.useEffect.onKey"]);
                if (e.key === 'ArrowRight') setIndex({
                    "EventModalOverlay.useEffect.onKey": (i)=>(i + 1) % events.length
                }["EventModalOverlay.useEffect.onKey"]);
            }
            window.addEventListener('keydown', onKey);
            return ({
                "EventModalOverlay.useEffect": ()=>window.removeEventListener('keydown', onKey)
            })["EventModalOverlay.useEffect"];
        }
    }["EventModalOverlay.useEffect"], [
        open,
        events,
        onClose
    ]);
    var _events_length;
    const hasEvents = ((_events_length = events === null || events === void 0 ? void 0 : events.length) !== null && _events_length !== void 0 ? _events_length : 0) > 0;
    if (!open || !hasEvents) return null;
    const pos = container === 'contained' ? 'absolute' : 'fixed';
    const z = container === 'contained' ? 'z-10' : 'z-[9999]';
    const current = events[index];
    const prev = ()=>setIndex((i)=>(i - 1 + events.length) % events.length);
    const next = ()=>setIndex((i)=>(i + 1) % events.length);
    var _current_ctaLabel, _current_ctaLabel1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "".concat(pos, " inset-0 ").concat(z, " flex items-center justify-center"),
        role: "dialog",
        "aria-modal": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "".concat(pos, " inset-0 bg-black/60 backdrop-blur-[1px]"),
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-[560px] rounded-2xl bg-white shadow-2xl",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        "aria-label": "Close",
                        className: "absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-lg ring-4 ring-white",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    events.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": "Previous",
                                onClick: prev,
                                className: "absolute left-2 top-1/2 z-[50] -translate-y-1/2 rounded-full bg-black/30 text-white h-8 w-8 grid place-items-center hover:bg-black/40",
                                children: "‹"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": "Next",
                                onClick: next,
                                className: "absolute right-2 top-1/2 z-[50] -translate-y-1/2 rounded-full bg-black/30 text-white h-8 w-8 grid place-items-center hover:bg-black/40",
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 pb-5 pt-6",
                        children: [
                            (current === null || current === void 0 ? void 0 : current.imageUrl) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mx-auto mb-4 h-32 w-full overflow-hidden rounded-xl sm:h-36",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: current.imageUrl,
                                    alt: current.title || '',
                                    fill: true,
                                    unoptimized: true,
                                    className: "object-cover",
                                    sizes: "(max-width: 640px) 100vw, 560px",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-center text-neutral-600 text-3xl font-semibold tracking-tight whitespace-pre-wrap break-words [overflow-wrap:anywhere] hyphens-auto",
                                children: current === null || current === void 0 ? void 0 : current.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            !!(current === null || current === void 0 ? void 0 : current.subheading) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-center text-sm text-neutral-600 whitespace-pre-wrap break-words [overflow-wrap:anywhere] hyphens-auto",
                                children: current === null || current === void 0 ? void 0 : current.subheading
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            ((current === null || current === void 0 ? void 0 : current.dateRange) || (current === null || current === void 0 ? void 0 : current.timeText)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex items-center justify-center gap-5 text-sm text-neutral-700",
                                children: [
                                    (current === null || current === void 0 ? void 0 : current.dateRange) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block h-5 w-5 rounded-[4px] border border-neutral-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this),
                                            current === null || current === void 0 ? void 0 : current.dateRange
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this),
                                    (current === null || current === void 0 ? void 0 : current.timeText) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block h-5 w-5 rounded-full border border-neutral-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, this),
                                            current === null || current === void 0 ? void 0 : current.timeText
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            !!(current === null || current === void 0 ? void 0 : current.description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 max-h-56 overflow-y-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed text-neutral-800 whitespace-pre-wrap break-words [overflow-wrap:anywhere] hyphens-auto",
                                    children: current === null || current === void 0 ? void 0 : current.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            ((current === null || current === void 0 ? void 0 : current.ctaLabel) || (current === null || current === void 0 ? void 0 : current.ctaHref)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex justify-center",
                                children: (current === null || current === void 0 ? void 0 : current.ctaHref) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: current === null || current === void 0 ? void 0 : current.ctaHref,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow hover:opacity-95",
                                    children: (_current_ctaLabel = current === null || current === void 0 ? void 0 : current.ctaLabel) !== null && _current_ctaLabel !== void 0 ? _current_ctaLabel : 'Learn more'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                    lineNumber: 146,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow hover:opacity-95",
                                    children: (_current_ctaLabel1 = current === null || current === void 0 ? void 0 : current.ctaLabel) !== null && _current_ctaLabel1 !== void 0 ? _current_ctaLabel1 : 'Learn more'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                    lineNumber: 155,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            events.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex items-center justify-center gap-2",
                                children: events.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-label": "Go to slide ".concat(i + 1),
                                        onClick: ()=>setIndex(i),
                                        className: "h-2 w-2 rounded-full ".concat(i === index ? 'bg-neutral-900' : 'bg-neutral-300')
                                    }, i, false, {
                                        fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/EventModalOverlay.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(EventModalOverlay, "1tGlLPxJxIV6M4Xh1LvK8jky7EI=");
_c = EventModalOverlay;
var _c;
__turbopack_context__.k.register(_c, "EventModalOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/images/uploadEventImages.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "uploadEventImage": ()=>uploadEventImage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-client] (ecmascript)");
;
async function uploadEventImage(file, opts) {
    var _file_name_split_pop;
    const ext = ((_file_name_split_pop = file.name.split('.').pop()) === null || _file_name_split_pop === void 0 ? void 0 : _file_name_split_pop.toLowerCase()) || 'jpg';
    const key = "".concat(crypto.randomUUID(), ".").concat(ext);
    const path = "events/".concat(key);
    const { error: upErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('events').upload(path, file, {
        contentType: file.type,
        upsert: false
    });
    if (upErr) throw upErr;
    const { data: pub } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('events').getPublicUrl(path);
    if (opts === null || opts === void 0 ? void 0 : opts.oldPath) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('events').remove([
            opts.oldPath
        ]).catch(()=>{});
    }
    var _pub_publicUrl;
    return {
        path,
        publicUrl: (_pub_publicUrl = pub === null || pub === void 0 ? void 0 : pub.publicUrl) !== null && _pub_publicUrl !== void 0 ? _pub_publicUrl : null
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Snackbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>SnackbarComponent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Alert/Alert.js [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Snackbar/Snackbar.js [app-client] (ecmascript) <export default as Snackbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
;
;
function SnackbarComponent(param) {
    let { snackbarSettings, setSnackbarSettings } = param;
    const { open, message, severity, actionLabel, actionCallback, duration } = snackbarSettings;
    const handleClose = ()=>{
        // if (reason === 'clickaway') {
        //   return;
        // }
        setSnackbarSettings((prev)=>({
                ...prev,
                open: false,
                actionLable: null,
                actionCallback: null
            }));
    };
    const handleActionClick = ()=>{
        if (actionCallback) {
            actionCallback();
            setSnackbarSettings((prev)=>({
                    ...prev,
                    open: false
                }));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__["Snackbar"], {
        open: open,
        autoHideDuration: duration !== undefined ? duration : 2000,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
        },
        onClose: handleClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
            severity: severity,
            variant: "standard",
            className: "w-full",
            onClose: handleClose,
            action: actionLabel && actionCallback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                color: "error",
                size: "small",
                onClick: handleActionClick,
                children: actionLabel
            }, void 0, false, {
                fileName: "[project]/src/app/components/Snackbar.tsx",
                lineNumber: 53,
                columnNumber: 15
            }, void 0) : null,
            children: message
        }, void 0, false, {
            fileName: "[project]/src/app/components/Snackbar.tsx",
            lineNumber: 46,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Snackbar.tsx",
        lineNumber: 40,
        columnNumber: 8
    }, this);
}
_c = SnackbarComponent;
var _c;
__turbopack_context__.k.register(_c, "SnackbarComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/helpersAndInputs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ImageDropzone": ()=>ImageDropzone,
    "LabeledDate": ()=>LabeledDate,
    "LabeledInput": ()=>LabeledInput,
    "LabeledTextarea": ()=>LabeledTextarea,
    "default": ()=>__TURBOPACK__default__export__,
    "endOfDay": ()=>endOfDay,
    "fileToDataUrl": ()=>fileToDataUrl,
    "formatDateRange": ()=>formatDateRange,
    "pretty": ()=>pretty,
    "shouldShowModal": ()=>shouldShowModal,
    "startOfDay": ()=>startOfDay,
    "to12h": ()=>to12h
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ImageDropzone = (param)=>{
    let { imageUrl, onFileSelect, onDrop, onDragOver, onPickClick, inputRef } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-dashed rounded-xl h-32 flex items-center justify-center relative hover:border-white/60 transition-colors cursor-pointer group",
        onClick: onPickClick,
        onDrop: onDrop,
        onDragOver: onDragOver,
        title: "Click, drag & drop, or paste an image",
        children: [
            !imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-white/70 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm",
                        children: "Image Upload"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs mt-1 opacity-80",
                        children: "Click, drag & drop, or paste"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : // eslint-disable-next-line @next/next/no-img-element
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: imageUrl,
                alt: "Preview",
                className: "absolute inset-0 w-full h-full object-cover rounded-xl"
            }, void 0, false, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ring-white/10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: inputRef,
                type: "file",
                accept: "image/*",
                onChange: onFileSelect,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ImageDropzone;
const __TURBOPACK__default__export__ = ImageDropzone;
function LabeledInput(param) {
    let { label, value, onChange, placeholder } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm mb-1 text-white/80",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: placeholder,
                className: "w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
            }, void 0, false, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c1 = LabeledInput;
function LabeledTextarea(param) {
    let { label, value, onChange, placeholder, rows = 5 } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm mb-1 text-white/80",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: placeholder,
                rows: rows,
                className: "w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30 resize-y"
            }, void 0, false, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c2 = LabeledTextarea;
function LabeledDate(param) {
    let { label, value, onChange, min, max } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm mb-1 text-white/80",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                style: {
                    colorScheme: 'dark'
                },
                type: "date",
                value: value,
                min: min,
                max: max,
                onChange: (e)=>onChange(e.target.value),
                className: "w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
            }, void 0, false, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_c3 = LabeledDate;
function shouldShowModal(param) {
    let { publishModal, forceOpen, startDate, endDate } = param;
    if (!publishModal) return false;
    if (forceOpen) return true;
    const now = new Date();
    const s = startDate ? startOfDay(new Date(startDate)) : new Date(0);
    const e = endDate ? endOfDay(new Date(endDate)) : new Date(8640000000000000);
    return now >= s && now <= e;
}
function startOfDay(d) {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
}
function endOfDay(d) {
    const x = new Date(d);
    x.setHours(23, 59, 59, 999);
    return x;
}
function formatDateRange(start, end) {
    if (!start && !end) return '';
    if (start && !end) return pretty(start);
    if (!start && end) return pretty(end);
    const sd = new Date(start);
    const ed = new Date(end);
    if (isNaN(sd.getTime()) || isNaN(ed.getTime())) return '';
    const sameMonth = sd.getFullYear() === ed.getFullYear() && sd.getMonth() === ed.getMonth();
    if (sameMonth) {
        const m = sd.toLocaleString(undefined, {
            month: 'short'
        });
        return "".concat(m, " ").concat(sd.getDate(), "–").concat(ed.getDate(), ", ").concat(sd.getFullYear());
    }
    return "".concat(pretty(start), " – ").concat(pretty(end));
}
function pretty(s) {
    const d = new Date(s);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}
function to12h(t) {
    if (!t) return '';
    const [h, m] = t.split(':').map(Number);
    const d = new Date();
    d.setHours(h !== null && h !== void 0 ? h : 0, m !== null && m !== void 0 ? m : 0, 0, 0);
    return d.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit'
    });
}
function fileToDataUrl(file) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = ()=>resolve(String(reader.result));
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ImageDropzone");
__turbopack_context__.k.register(_c1, "LabeledInput");
__turbopack_context__.k.register(_c2, "LabeledTextarea");
__turbopack_context__.k.register(_c3, "LabeledDate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/cmsPage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @next/next/no-img-element */ __turbopack_context__.s({
    "default": ()=>CMSPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$EventModalOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/EventModalOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2f$uploadEventImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/images/uploadEventImages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tabs/Tabs.js [app-client] (ecmascript) <export default as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tab/Tab.js [app-client] (ecmascript) <export default as Tab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Select/Select.js [app-client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DeleteOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/DeleteOutline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Refresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Refresh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EditOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/EditOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hello-pangea/dnd/dist/dnd.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DragIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/DragIndicator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Snackbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Snackbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/helpersAndInputs.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
function CMSPage() {
    var _title_trim, _subheading_trim, _description_trim, _ctaLabel_trim, _ctaHref_trim;
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [subheading, setSubheading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [imageFile, setImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imageUrl, setImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Schedule/time
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [startTime, setStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Modal controls (preview/editor only)
    const [publishModal, setPublishModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [forceOpen, setForceOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [ctaLabel, setCtaLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [ctaHref, setCtaHref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [eventId, setEventId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // 0=create, 1=update, 2=delete
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingEvents, setLoadingEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedUpdateId, setSelectedUpdateId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedEvent, setSelectedEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: '',
        title: '',
        subheading: '',
        description: '',
        start_date: '',
        end_date: '',
        start_time: '',
        cta_label: '',
        cta_href: '',
        image_url: '',
        image_path: '',
        order: 0
    });
    const [hasOrderChanges, setHasOrderChanges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUpdateView, setShowUpdateView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [buttonLoading, setButtonLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [snackbarSettings, setSnackbarSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        message: '',
        severity: ''
    });
    const [pendingDeleteId, setPendingDeleteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const DRAFT_KEY = 'cmsDraft_v1';
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /**  from localStorage */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CMSPage.useEffect": ()=>{
            try {
                const raw = localStorage.getItem(DRAFT_KEY);
                if (!raw) return;
                const s = JSON.parse(raw);
                setTitle(s.title || '');
                setSubheading(s.subheading || '');
                setDescription(s.description || '');
                setStartDate(s.startDate || '');
                setEndDate(s.endDate || '');
                setStartTime(s.startTime || '');
                var _s_publishModal;
                setPublishModal((_s_publishModal = s.publishModal) !== null && _s_publishModal !== void 0 ? _s_publishModal : true);
                var _s_forceOpen;
                setForceOpen((_s_forceOpen = s.forceOpen) !== null && _s_forceOpen !== void 0 ? _s_forceOpen : true);
                setCtaLabel(s.ctaLabel || '');
                setCtaHref(s.ctaHref || '');
                if (s.imageDataUrl) setImageUrl(s.imageDataUrl);
            } catch (e) {}
        }
    }["CMSPage.useEffect"], []);
    /** Autosave */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CMSPage.useEffect": ()=>{
            const id = setTimeout({
                "CMSPage.useEffect.id": async ()=>{
                    try {
                        let imageDataUrl = imageUrl;
                        if (!imageDataUrl && imageFile) {
                            imageDataUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileToDataUrl"])(imageFile);
                            setImageUrl(imageDataUrl);
                        }
                        localStorage.setItem(DRAFT_KEY, JSON.stringify({
                            title,
                            subheading,
                            description,
                            startDate,
                            endDate,
                            startTime,
                            publishModal,
                            forceOpen,
                            ctaLabel,
                            ctaHref,
                            imageDataUrl
                        }));
                    } catch (e) {}
                }
            }["CMSPage.useEffect.id"], 300);
            return ({
                "CMSPage.useEffect": ()=>clearTimeout(id)
            })["CMSPage.useEffect"];
        }
    }["CMSPage.useEffect"], [
        title,
        subheading,
        description,
        startDate,
        endDate,
        startTime,
        publishModal,
        forceOpen,
        ctaLabel,
        ctaHref,
        imageFile,
        imageUrl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CMSPage.useEffect": ()=>{
            const id = setTimeout({
                "CMSPage.useEffect.id": ()=>{
                    var _previewRef_current_contentWindow, _previewRef_current;
                    let imageDataUrl = imageUrl && imageUrl.startsWith('data:') ? imageUrl : null;
                    if (!imageDataUrl) {
                        try {
                            const raw = localStorage.getItem(DRAFT_KEY);
                            var _JSON_parse_imageDataUrl;
                            imageDataUrl = raw ? (_JSON_parse_imageDataUrl = JSON.parse(raw).imageDataUrl) !== null && _JSON_parse_imageDataUrl !== void 0 ? _JSON_parse_imageDataUrl : null : null;
                        } catch (e) {}
                    }
                    const payload = {
                        title,
                        subheading,
                        description,
                        startDate,
                        endDate,
                        startTime,
                        publishModal,
                        forceOpen,
                        ctaLabel,
                        ctaHref,
                        imageDataUrl
                    };
                    (_previewRef_current = previewRef.current) === null || _previewRef_current === void 0 ? void 0 : (_previewRef_current_contentWindow = _previewRef_current.contentWindow) === null || _previewRef_current_contentWindow === void 0 ? void 0 : _previewRef_current_contentWindow.postMessage({
                        type: 'cms:update',
                        payload
                    }, window.location.origin);
                }
            }["CMSPage.useEffect.id"], 120);
            return ({
                "CMSPage.useEffect": ()=>clearTimeout(id)
            })["CMSPage.useEffect"];
        }
    }["CMSPage.useEffect"], [
        title,
        subheading,
        description,
        startDate,
        endDate,
        startTime,
        publishModal,
        forceOpen,
        ctaLabel,
        ctaHref,
        imageUrl
    ]);
    function onPickClick() {
        var _inputRef_current;
        (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.click();
    }
    function onFileSelect(e) {
        var _e_target_files;
        const f = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (f) handleNewImageFile(f);
    }
    function onDrop(e) {
        var _e_dataTransfer_files;
        e.preventDefault();
        const f = (_e_dataTransfer_files = e.dataTransfer.files) === null || _e_dataTransfer_files === void 0 ? void 0 : _e_dataTransfer_files[0];
        if (f && f.type.startsWith('image/')) handleNewImageFile(f);
    }
    function onDragOver(e) {
        e.preventDefault();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CMSPage.useEffect": ()=>{
            function onPaste(e) {
                if (!e.clipboardData) return;
                const item = Array.from(e.clipboardData.items).find({
                    "CMSPage.useEffect.onPaste.item": (i)=>i.type.startsWith('image/')
                }["CMSPage.useEffect.onPaste.item"]);
                if (!item) return;
                const f = item.getAsFile();
                if (f) handleNewImageFile(f);
            }
            window.addEventListener('paste', onPaste);
            return ({
                "CMSPage.useEffect": ()=>window.removeEventListener('paste', onPaste)
            })["CMSPage.useEffect"];
        }
    }["CMSPage.useEffect"], []);
    function handleNewImageFile(f) {
        setImageFile(f);
        const url = URL.createObjectURL(f);
        setImageUrl(url);
    }
    function resetAll() {
        setTitle('');
        setSubheading('');
        setDescription('');
        setStartDate('');
        setEndDate('');
        setStartTime('');
        setPublishModal(true);
        setForceOpen(true);
        setCtaLabel('');
        setCtaHref('');
        setImageFile(null);
        setImageUrl(null);
        localStorage.removeItem(DRAFT_KEY);
        setSelectedUpdateId('');
        setSelectedEvent({
            id: ''
        });
        setShowUpdateView(false);
    }
    async function fetchEvents() {
        setLoadingEvents(true);
        try {
            const res = await fetch('/api/events', {
                cache: 'no-store'
            });
            const data = await res.json();
            if (!res.ok) throw new Error((data === null || data === void 0 ? void 0 : data.error) || 'Failed to load events');
            const items = (data.items || []).sort((a, b)=>{
                var _a_order, _b_order;
                return ((_a_order = a.order) !== null && _a_order !== void 0 ? _a_order : 0) - ((_b_order = b.order) !== null && _b_order !== void 0 ? _b_order : 0);
            });
            setEvents(items);
        } catch (e) {
            console.error(e);
        } finally{
            setLoadingEvents(false);
        }
    }
    function onDragEnd(result) {
        if (!result.destination) return;
        const src = result.source.index;
        const dst = result.destination.index;
        if (src === dst) return;
        setEvents((prev)=>{
            const next = [
                ...prev
            ];
            const [moved] = next.splice(src, 1);
            next.splice(dst, 0, moved);
            return next;
        });
        setHasOrderChanges(true);
    }
    async function saveOrder() {
        try {
            setButtonLoading(true);
            const ids = events.map((e)=>e.id);
            const res = await fetch('/api/events/reorder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ids
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setSnackbarSettings((prev)=>({
                        ...prev,
                        open: true,
                        message: 'Event Reorder failed',
                        severity: 'error'
                    }));
                throw new Error((data === null || data === void 0 ? void 0 : data.error) || 'Reorder failed');
            } else {
                setSnackbarSettings((prev)=>({
                        ...prev,
                        open: true,
                        message: 'Event Order Saved',
                        severity: 'success'
                    }));
            }
            setHasOrderChanges(false);
        } catch (e) {
            setSnackbarSettings((prev)=>({
                    ...prev,
                    open: true,
                    message: e instanceof Error ? e.message : 'Event Reorder failed',
                    severity: 'error'
                }));
        }
        setButtonLoading(false);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CMSPage.useEffect": ()=>{
            if (tab !== 0) {
                fetchEvents();
            }
            ;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CMSPage.useEffect"], [
        tab
    ]);
    console.log(events);
    async function onSave() {
        try {
            var _this;
            if (title == '' || title == null) {
                setSnackbarSettings((prev)=>({
                        ...prev,
                        open: true,
                        message: 'Title Needed',
                        severity: 'error'
                    }));
                return;
            }
            setButtonLoading(true);
            let image_path = null;
            let image_url = null;
            const oldPath = (_this = selectedEvent) === null || _this === void 0 ? void 0 : _this.image_path;
            if (imageFile) {
                const up = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$images$2f$uploadEventImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadEventImage"])(imageFile, {
                    oldPath
                });
                image_path = up.path;
                image_url = up.publicUrl;
            } else {
                if (tab === 1 && eventId) {
                    var _selectedEvent_image_path;
                    image_path = (_selectedEvent_image_path = selectedEvent === null || selectedEvent === void 0 ? void 0 : selectedEvent.image_path) !== null && _selectedEvent_image_path !== void 0 ? _selectedEvent_image_path : null;
                    var _selectedEvent_image_url;
                    image_url = (_selectedEvent_image_url = selectedEvent === null || selectedEvent === void 0 ? void 0 : selectedEvent.image_url) !== null && _selectedEvent_image_url !== void 0 ? _selectedEvent_image_url : null;
                }
            }
            const payload = {
                title,
                subheading,
                description,
                startDate: startDate || null,
                endDate: endDate || null,
                startTime: startTime || null,
                ctaLabel,
                ctaHref,
                image_path,
                image_url,
                status: 'draft'
            };
            let res, data;
            if (!eventId || tab === 0) {
                // CREATE
                res = await fetch('/api/events', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                data = await res.json();
                if (!res.ok) {
                    setSnackbarSettings((prev)=>({
                            ...prev,
                            open: true,
                            message: 'Event Creation failed',
                            severity: 'error'
                        }));
                    throw new Error((data === null || data === void 0 ? void 0 : data.error) || 'Create failed');
                } else {
                    const raw = localStorage.getItem(DRAFT_KEY);
                    const s = raw ? JSON.parse(raw) : {};
                    localStorage.setItem(DRAFT_KEY, JSON.stringify({
                        ...s,
                        eventId: data.id
                    }));
                    if (tab === 0) {
                        setSnackbarSettings((prev)=>({
                                ...prev,
                                open: true,
                                message: 'Event Created Successfully',
                                severity: 'success'
                            }));
                    }
                    ;
                }
            } else {
                res = await fetch("/api/events/".concat(eventId), {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                data = await res.json();
                if (!res.ok) {
                    setSnackbarSettings((prev)=>({
                            ...prev,
                            open: true,
                            message: 'Event Update failed',
                            severity: 'error'
                        }));
                    throw new Error((data === null || data === void 0 ? void 0 : data.error) || 'Update failed');
                } else {
                    setSnackbarSettings((prev)=>({
                            ...prev,
                            open: true,
                            message: 'Event Updated Successfully',
                            severity: 'success'
                        }));
                }
            }
            if (tab !== 0) fetchEvents();
            if (image_url) setImageUrl(image_url);
        } catch (e) {
            setSnackbarSettings((prev)=>({
                    ...prev,
                    open: true,
                    message: e instanceof Error ? e.message : 'Save failed',
                    severity: 'error'
                }));
        }
        setButtonLoading(false);
        resetAll();
    }
    console.log(selectedEvent);
    async function onDelete(id) {
        setPendingDeleteId(id);
        setSnackbarSettings({
            open: true,
            message: 'Are you sure you want to delete this event?',
            severity: 'warning',
            actionLabel: 'Delete',
            duration: 10000,
            actionCallback: async ()=>{
                try {
                    const res = await fetch("/api/events/".concat(id), {
                        method: 'DELETE'
                    });
                    const data = await res.json();
                    if (!res.ok) {
                        setSnackbarSettings({
                            open: true,
                            message: 'Delete Event failed',
                            severity: 'error'
                        });
                        throw new Error((data === null || data === void 0 ? void 0 : data.error) || 'Delete failed');
                    } else {
                        setSnackbarSettings({
                            open: true,
                            message: 'Event Deleted Successfully',
                            severity: 'success'
                        });
                        setEvents((prev)=>prev.filter((e)=>e.id !== id));
                        if (eventId === id) {
                            setEventId(null);
                        }
                    }
                } catch (e) {
                    setSnackbarSettings({
                        open: true,
                        message: e instanceof Error ? e.message : 'Delete failed',
                        severity: 'error'
                    });
                } finally{
                    setPendingDeleteId(null);
                }
            }
        });
    }
    console.log('id', eventId);
    const dbEvents = events.map((e)=>{
        var _e_image_url, _e_title, _e_subheading, _e_description, _e_cta_label, _e_cta_href;
        return {
            imageUrl: (_e_image_url = e.image_url) !== null && _e_image_url !== void 0 ? _e_image_url : undefined,
            title: (_e_title = e.title) !== null && _e_title !== void 0 ? _e_title : '(untitled)',
            subheading: (_e_subheading = e.subheading) !== null && _e_subheading !== void 0 ? _e_subheading : '',
            description: (_e_description = e.description) !== null && _e_description !== void 0 ? _e_description : '',
            dateRange: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateRange"])(e.start_date, e.end_date),
            timeText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["to12h"])(e.start_time),
            ctaLabel: (_e_cta_label = e.cta_label) !== null && _e_cta_label !== void 0 ? _e_cta_label : '',
            ctaHref: (_e_cta_href = e.cta_href) !== null && _e_cta_href !== void 0 ? _e_cta_href : ''
        };
    });
    const formEvent = {
        imageUrl: imageUrl !== null && imageUrl !== void 0 ? imageUrl : undefined,
        title: (title === null || title === void 0 ? void 0 : title.trim()) || '(untitled)',
        subheading: subheading || '',
        description: description || '',
        dateRange: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateRange"])(startDate, endDate),
        timeText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["to12h"])(startTime),
        ctaLabel: ctaLabel || '',
        ctaHref: ctaHref || ''
    };
    var _title_trim_length, _subheading_trim_length, _description_trim_length, _ctaLabel_trim_length, _ctaHref_trim_length;
    const hasFormContent = ((_title_trim_length = title === null || title === void 0 ? void 0 : (_title_trim = title.trim()) === null || _title_trim === void 0 ? void 0 : _title_trim.length) !== null && _title_trim_length !== void 0 ? _title_trim_length : 0) > 0 || ((_subheading_trim_length = subheading === null || subheading === void 0 ? void 0 : (_subheading_trim = subheading.trim()) === null || _subheading_trim === void 0 ? void 0 : _subheading_trim.length) !== null && _subheading_trim_length !== void 0 ? _subheading_trim_length : 0) > 0 || ((_description_trim_length = description === null || description === void 0 ? void 0 : (_description_trim = description.trim()) === null || _description_trim === void 0 ? void 0 : _description_trim.length) !== null && _description_trim_length !== void 0 ? _description_trim_length : 0) > 0 || !!startDate || !!endDate || !!startTime || ((_ctaLabel_trim_length = ctaLabel === null || ctaLabel === void 0 ? void 0 : (_ctaLabel_trim = ctaLabel.trim()) === null || _ctaLabel_trim === void 0 ? void 0 : _ctaLabel_trim.length) !== null && _ctaLabel_trim_length !== void 0 ? _ctaLabel_trim_length : 0) > 0 || ((_ctaHref_trim_length = ctaHref === null || ctaHref === void 0 ? void 0 : (_ctaHref_trim = ctaHref.trim()) === null || _ctaHref_trim === void 0 ? void 0 : _ctaHref_trim.length) !== null && _ctaHref_trim_length !== void 0 ? _ctaHref_trim_length : 0) > 0 || !!imageUrl;
    const previewEvents = tab === 0 ? hasFormContent ? [
        formEvent,
        ...dbEvents
    ] : dbEvents : selectedUpdateId ? [
        formEvent
    ] : dbEvents;
    const dateError = startDate && endDate && new Date(endDate) < new Date(startDate) ? 'End date cannot be before start date.' : '';
    const modalOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldShowModal"])({
        publishModal,
        forceOpen,
        startDate,
        endDate
    });
    const canShowForm = tab === 0 || tab === 1 && !!selectedUpdateId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "font-sans flex flex-col gap-4 md:flex-row min-h-screen md:h-screen p-8 md:gap-8 sm:px-20 bg-[#151c2f]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:w-[30%] text-white h-[90%] md:overflow-scroll custom-scrollbar shadow-xl rounded-xl bg-[#212e3f] p-3 md:p-5 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            borderBottom: 1,
                            borderColor: 'rgba(255,255,255,0.1)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__["Tabs"], {
                            value: tab,
                            onChange: (_, v)=>{
                                setTab(v);
                                resetAll();
                                setSelectedUpdateId('');
                                setEvents([]);
                                if (v === 0) setEventId(null);
                            },
                            variant: "fullWidth",
                            sx: {
                                '& .MuiTab-root': {
                                    color: 'rgba(255,255,255,0.7)'
                                },
                                '& .Mui-selected': {
                                    color: '#fff'
                                },
                                '& .MuiTabs-indicator': {
                                    backgroundColor: '#60a5fa'
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                                    label: "Create"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/cmsPage.tsx",
                                    lineNumber: 493,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                                    label: "Update"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/cmsPage.tsx",
                                    lineNumber: 494,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/cmsPage.tsx",
                            lineNumber: 477,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/cmsPage.tsx",
                        lineNumber: 476,
                        columnNumber: 9
                    }, this),
                    tab === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 ".concat(showUpdateView ? 'hidden' : ''),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-white/80",
                                        children: "Reorder events (drag rows)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/cmsPage.tsx",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: saveOrder,
                                                disabled: buttonLoading || !hasOrderChanges,
                                                className: "rounded-md bg-blue-500/90 hover:bg-blue-500 px-3 py-1.5 text-sm disabled:opacity-50 hover:cursor-pointer disabled:cursor-not-allowed",
                                                children: buttonLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center px-2 gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "h-4 w-4 animate-spin",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                className: "opacity-25",
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                stroke: "currentColor",
                                                                strokeWidth: "4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                                                lineNumber: 511,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                className: "opacity-75",
                                                                fill: "currentColor",
                                                                d: "M4 12a8 8 0 018-8v4A4 4 0 004 12z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                                                lineNumber: 512,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/cmsPage.tsx",
                                                        lineNumber: 510,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/cmsPage.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 21
                                                }, this) : 'Save'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                                lineNumber: 503,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                size: "small",
                                                onClick: ()=>{
                                                    fetchEvents();
                                                    resetAll();
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Refresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    htmlColor: "#9ca3af",
                                                    fontSize: "small"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/cmsPage.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                                lineNumber: 519,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/cmsPage.tsx",
                                        lineNumber: 502,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                lineNumber: 500,
                                columnNumber: 13
                            }, this),
                            loadingEvents ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center py-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/cmsPage.tsx",
                                    lineNumber: 531,
                                    columnNumber: 57
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                lineNumber: 531,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragDropContext"], {
                                onDragEnd: onDragEnd,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Droppable"], {
                                    droppableId: "events-order",
                                    children: (provided)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            ref: provided.innerRef,
                                            ...provided.droppableProps,
                                            className: "divide-y divide-white/10 rounded-lg h-[150px] md:h-[550px] overflow-scroll custom-scrollbar",
                                            children: [
                                                events.map((e, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Draggable"], {
                                                        draggableId: e.id,
                                                        index: index,
                                                        children: (prov)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                ref: prov.innerRef,
                                                                ...prov.draggableProps,
                                                                className: "flex items-center justify-between even:bg-[#151c2f] p-2  hover:bg-white/10",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                ...prov.dragHandleProps,
                                                                                className: "text-white/60 cursor-grab active:cursor-grabbing",
                                                                                title: "Drag to reorder",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DragIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    fontSize: "small"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/cmsPage.tsx",
                                                                                    lineNumber: 555,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                                                                lineNumber: 550,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "w-6 text-white/60 text-xs tabular-nums",
                                                                                children: index + 1
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                                                                lineNumber: 557,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-white hover:cursor-pointer",
                                                                                onClick: ()=>{
                                                                                    const id = e.id;
                                                                                    const ev = events.find((x)=>x.id === id);
                                                                                    if (ev) {
                                                                                        setEventId(ev.id);
                                                                                        setTitle(ev.title || '');
                                                                                        setSubheading(ev.subheading || '');
                                                                                        setDescription(ev.description || '');
                                                                                        setStartDate(ev.start_date || '');
                                                                                        setEndDate(ev.end_date || '');
                                                                                        setStartTime(ev.start_time || '');
                                                                                        setCtaLabel(ev.cta_label || '');
                                                                                        setCtaHref(ev.cta_href || '');
                                                                                        setImageUrl(ev.image_url || null);
                                                                                    }
                                                                                    console.log(e.id);
                                                                                },
                                                                                children: e.title || '(untitled)'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                                                                lineNumber: 558,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/cmsPage.tsx",
                                                                        lineNumber: 549,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-white/40",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                                                "aria-label": "delete",
                                                                                onClick: ()=>{
                                                                                    setShowUpdateView(true);
                                                                                    setSelectedUpdateId(e.id);
                                                                                    const id = e.id;
                                                                                    const ev = events.find((x)=>x.id === id);
                                                                                    if (ev) {
                                                                                        setEventId(ev.id);
                                                                                        setTitle(ev.title || '');
                                                                                        setSubheading(ev.subheading || '');
                                                                                        setDescription(ev.description || '');
                                                                                        setStartDate(ev.start_date || '');
                                                                                        setEndDate(ev.end_date || '');
                                                                                        setStartTime(ev.start_time || '');
                                                                                        setCtaLabel(ev.cta_label || '');
                                                                                        setCtaHref(ev.cta_href || '');
                                                                                        setImageUrl(ev.image_url || null);
                                                                                    }
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$EditOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    className: "text-green-400 hover:text-green-500 transition duration-700 ease-in-out"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/cmsPage.tsx",
                                                                                    lineNumber: 598,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                                                                lineNumber: 579,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                                                "aria-label": "delete",
                                                                                onClick: ()=>{
                                                                                    onDelete(e.id);
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DeleteOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    className: "text-red-400 hover:text-red-500 transition duration-700 ease-in-out"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/cmsPage.tsx",
                                                                                    lineNumber: 604,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                                                                lineNumber: 600,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/components/cmsPage.tsx",
                                                                        lineNumber: 578,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                                                lineNumber: 544,
                                                                columnNumber: 29
                                                            }, this)
                                                    }, e.id, false, {
                                                        fileName: "[project]/src/app/components/cmsPage.tsx",
                                                        lineNumber: 542,
                                                        columnNumber: 25
                                                    }, this)),
                                                provided.placeholder,
                                                events.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "p-3 text-sm text-white/60",
                                                    children: "No events yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/cmsPage.tsx",
                                                    lineNumber: 613,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/cmsPage.tsx",
                                            lineNumber: 536,
                                            columnNumber: 21
                                        }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/cmsPage.tsx",
                                    lineNumber: 534,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                lineNumber: 533,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/cmsPage.tsx",
                        lineNumber: 499,
                        columnNumber: 11
                    }, this),
                    showUpdateView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                        fullWidth: true,
                                        displayEmpty: true,
                                        size: "small",
                                        value: selectedUpdateId,
                                        onChange: (e)=>{
                                            const id = String(e.target.value);
                                            setSelectedUpdateId(id);
                                            const ev = events.find((x)=>x.id === id);
                                            console.log("here ev", ev);
                                            if (ev) {
                                                setSelectedEvent(ev);
                                                setEventId(ev.id);
                                                setTitle(ev.title || '');
                                                setSubheading(ev.subheading || '');
                                                setDescription(ev.description || '');
                                                setStartDate(ev.start_date || '');
                                                setEndDate(ev.end_date || '');
                                                setStartTime(ev.start_time || '');
                                                setCtaLabel(ev.cta_label || '');
                                                setCtaHref(ev.cta_href || '');
                                                setImageUrl(ev.image_url || null);
                                            }
                                        },
                                        sx: {
                                            color: '#fff',
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'rgba(255,255,255,0.15)'
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'rgba(255,255,255,0.3)'
                                            }
                                        },
                                        renderValue: (val)=>{
                                            var _events_find;
                                            return val ? ((_events_find = events.find((e)=>e.id === val)) === null || _events_find === void 0 ? void 0 : _events_find.title) + ' hi' || '---' : 'Select event…';
                                        },
                                        children: [
                                            loadingEvents && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                disabled: true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                        size: 16,
                                                        sx: {
                                                            mr: 1
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/cmsPage.tsx",
                                                        lineNumber: 662,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Loading…"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                                lineNumber: 661,
                                                columnNumber: 19
                                            }, this),
                                            !loadingEvents && events.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                disabled: true,
                                                children: "No events yet"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                                lineNumber: 666,
                                                columnNumber: 19
                                            }, this),
                                            events.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                    value: e.id,
                                                    children: e.title || '(untitled)'
                                                }, e.id, false, {
                                                    fileName: "[project]/src/app/components/cmsPage.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/cmsPage.tsx",
                                        lineNumber: 627,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                        size: "small",
                                        onClick: ()=>{
                                            setSelectedUpdateId('');
                                            resetAll();
                                            fetchEvents();
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Refresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            htmlColor: "#9ca3af",
                                            fontSize: "small"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/cmsPage.tsx",
                                            lineNumber: 680,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/cmsPage.tsx",
                                        lineNumber: 674,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                lineNumber: 626,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-white/60",
                                children: selectedUpdateId ? "Editing: ".concat(selectedUpdateId) : 'Pick an event to edit'
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                lineNumber: 683,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/cmsPage.tsx",
                        lineNumber: 625,
                        columnNumber: 11
                    }, this),
                    canShowForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:h-[90%] overflow-scroll custom-scrollbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageDropzone"], {
                                imageUrl: imageUrl !== null && imageUrl !== void 0 ? imageUrl : undefined,
                                onPickClick: onPickClick,
                                onFileSelect: onFileSelect,
                                onDrop: onDrop,
                                onDragOver: onDragOver,
                                inputRef: inputRef
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                lineNumber: 691,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabeledInput"], {
                                label: "Title",
                                value: title,
                                onChange: setTitle,
                                placeholder: "Enter title"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                lineNumber: 700,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabeledInput"], {
                                label: "Subheading",
                                value: subheading,
                                onChange: setSubheading,
                                placeholder: "Optional subheading"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                lineNumber: 701,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabeledTextarea"], {
                                label: "Description",
                                value: description,
                                onChange: setDescription,
                                placeholder: "Write a short description...",
                                rows: 3
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                lineNumber: 702,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabeledDate"], {
                                        label: "Start date",
                                        value: startDate,
                                        onChange: setStartDate
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/cmsPage.tsx",
                                        lineNumber: 705,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabeledDate"], {
                                        label: "End date",
                                        value: endDate,
                                        onChange: setEndDate,
                                        min: startDate || undefined
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/cmsPage.tsx",
                                        lineNumber: 706,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                lineNumber: 704,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm mb-1 text-white/80",
                                        children: "Start time"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/cmsPage.tsx",
                                        lineNumber: 709,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        style: {
                                            colorScheme: 'dark'
                                        },
                                        type: "time",
                                        value: startTime,
                                        onChange: (e)=>setStartTime(e.target.value),
                                        className: "w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/cmsPage.tsx",
                                        lineNumber: 710,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                lineNumber: 708,
                                columnNumber: 13
                            }, this),
                            dateError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-red-300",
                                children: dateError
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                lineNumber: 718,
                                columnNumber: 27
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabeledInput"], {
                                        label: "CTA label",
                                        value: ctaLabel,
                                        onChange: setCtaLabel,
                                        placeholder: "Learn More"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/cmsPage.tsx",
                                        lineNumber: 721,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabeledInput"], {
                                        label: "CTA link",
                                        value: ctaHref,
                                        onChange: setCtaHref,
                                        placeholder: "https://example.com"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/cmsPage.tsx",
                                        lineNumber: 722,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                lineNumber: 720,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-white/60",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1",
                                    children: [
                                        description.length,
                                        " chars"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/cmsPage.tsx",
                                    lineNumber: 725,
                                    columnNumber: 52
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                lineNumber: 725,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onSave,
                                        disabled: buttonLoading,
                                        className: "px-3 py-2 rounded-lg bg-green-400 hover:bg-green-500 hover:cursor-pointer text-black font-medium disabled:cursor-not-allowed",
                                        children: buttonLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-2",
                                            children: [
                                                tab === 0 || !eventId ? 'Creating…' : 'Updating…',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-4 w-4 animate-spin",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            className: "opacity-25",
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "10",
                                                            stroke: "currentColor",
                                                            strokeWidth: "4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/cmsPage.tsx",
                                                            lineNumber: 734,
                                                            columnNumber: 93
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            className: "opacity-75",
                                                            fill: "currentColor",
                                                            d: "M4 12a8 8 0 018-8v4A4 4 0 004 12z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/cmsPage.tsx",
                                                            lineNumber: 734,
                                                            columnNumber: 186
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/cmsPage.tsx",
                                                    lineNumber: 734,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/cmsPage.tsx",
                                            lineNumber: 732,
                                            columnNumber: 21
                                        }, this) : tab === 0 || !eventId ? 'Create' : 'Update'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/cmsPage.tsx",
                                        lineNumber: 728,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: resetAll,
                                        className: "px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white hover:cursor-pointer",
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/cmsPage.tsx",
                                        lineNumber: 740,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                lineNumber: 727,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/cmsPage.tsx",
                        lineNumber: 690,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/cmsPage.tsx",
                lineNumber: 474,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:w-[70%] h-[90%] md:overflow-scroll custom-scrollbar text-white shadow-xl rounded-xl bg-[#212e3f] gap-4 p-3 md:p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 text-sm text-white/60",
                        children: "Live preview from website"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/cmsPage.tsx",
                        lineNumber: 750,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-[720px] md:h-full border border-white/10 bg-white rounded-xl overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                ref: previewRef,
                                src: "/",
                                title: "Website Live Preview",
                                className: "absolute inset-0 w-full h-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                lineNumber: 752,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$EventModalOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                container: "contained",
                                open: modalOpen,
                                onClose: ()=>{},
                                events: previewEvents,
                                initialIndex: Math.max(0, previewEvents.findIndex((x)=>x.title === title))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/cmsPage.tsx",
                                lineNumber: 753,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/cmsPage.tsx",
                        lineNumber: 751,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex justify-between items-center border-t border-white/10 pt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: publishModal,
                                    onChange: (e)=>setPublishModal(e.target.checked)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/cmsPage.tsx",
                                    lineNumber: 764,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Publish event popup (preview)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/cmsPage.tsx",
                                    lineNumber: 765,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/cmsPage.tsx",
                            lineNumber: 763,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/cmsPage.tsx",
                        lineNumber: 762,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/cmsPage.tsx",
                lineNumber: 749,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Snackbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                snackbarSettings: snackbarSettings,
                setSnackbarSettings: setSnackbarSettings
            }, void 0, false, {
                fileName: "[project]/src/app/components/cmsPage.tsx",
                lineNumber: 773,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/cmsPage.tsx",
        lineNumber: 472,
        columnNumber: 5
    }, this);
}
_s(CMSPage, "7bcFn69k6yGCdbv4djS9AzxydV0=");
_c = CMSPage;
var _c;
__turbopack_context__.k.register(_c, "CMSPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_55be322d._.js.map