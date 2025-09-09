(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/assets/grandhyatt-resized.png (static in ecmascript)": ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/grandhyatt-resized.7029c999.png");}),
"[project]/src/app/assets/grandhyatt-resized.png.mjs { IMAGE => \"[project]/src/app/assets/grandhyatt-resized.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$grandhyatt$2d$resized$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/grandhyatt-resized.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$grandhyatt$2d$resized$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1920,
    height: 1080,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAZElEQVR42h2MWwoAEBRE7/5XYwE2QPJJ3kpKKJZgcr5ud84MKaW01r33MYYQgnOuPmSMqbWec+69UkrGWIwxpURw55zQ9944SilrLeccee9zzq01ZOeDRgiBsIMiYmstRP/B8wH3kWdOCY96ZAAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DateRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/DateRange.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Schedule.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
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
    console.log({
        index
    });
    const dotRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventModalOverlay.useEffect": ()=>{
            const activeDot = dotRefs.current[index];
            if (activeDot) {
                activeDot.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest'
                });
            }
        }
    }["EventModalOverlay.useEffect"], [
        index
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
    console.log({
        current
    });
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
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-[290px] md:max-w-[560px] rounded-2xl bg-white shadow-2xl",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        "aria-label": "Close",
                        className: "absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg cursor-pointer ring-4 ring-white",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                        lineNumber: 85,
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
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": "Next",
                                onClick: next,
                                className: "absolute right-2 top-1/2 z-[50] -translate-y-1/2 rounded-full bg-black/30 text-white h-8 w-8 grid place-items-center hover:bg-black/40",
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                lineNumber: 102,
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
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-center text-neutral-600 text-3xl font-semibold tracking-tight whitespace-pre-wrap break-words [overflow-wrap:anywhere] hyphens-auto",
                                children: current === null || current === void 0 ? void 0 : current.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            !!(current === null || current === void 0 ? void 0 : current.subheading) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-center text-sm text-neutral-600 whitespace-pre-wrap break-words [overflow-wrap:anywhere] hyphens-auto",
                                children: current === null || current === void 0 ? void 0 : current.subheading
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this),
                            ((current === null || current === void 0 ? void 0 : current.dateRange) || (current === null || current === void 0 ? void 0 : current.timeText)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex items-center justify-center gap-5 text-sm text-neutral-700",
                                children: [
                                    (current === null || current === void 0 ? void 0 : current.dateRange) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DateRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                sx: {
                                                    fontSize: 20
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, this),
                                            current === null || current === void 0 ? void 0 : current.dateRange
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this),
                                    (current === null || current === void 0 ? void 0 : current.timeText) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                sx: {
                                                    fontSize: 20
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, this),
                                            current === null || current === void 0 ? void 0 : current.timeText
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            !!(current === null || current === void 0 ? void 0 : current.description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 max-h-56 overflow-y-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed text-neutral-800 whitespace-pre-wrap break-words [overflow-wrap:anywhere] hyphens-auto",
                                    children: current === null || current === void 0 ? void 0 : current.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            ((current === null || current === void 0 ? void 0 : current.ctaLabel) || (current === null || current === void 0 ? void 0 : current.ctaHref)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex justify-center",
                                children: (current === null || current === void 0 ? void 0 : current.ctaHref) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: current === null || current === void 0 ? void 0 : current.ctaHref,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-500 hover:shadow-2xl duration-300 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow hover:opacity-95",
                                    children: (_current_ctaLabel = current === null || current === void 0 ? void 0 : current.ctaLabel) !== null && _current_ctaLabel !== void 0 ? _current_ctaLabel : 'Learn more'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-500 hover:shadow-2xl duration-300 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow hover:opacity-95",
                                    children: (_current_ctaLabel1 = current === null || current === void 0 ? void 0 : current.ctaLabel) !== null && _current_ctaLabel1 !== void 0 ? _current_ctaLabel1 : 'Learn more'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                    lineNumber: 176,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "items-center w-[25%] md:w-[15%]",
                                    children: events.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 w-full max-w-md mx-auto  overflow-x-scroll custom-scrollbar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 px-2",
                                            children: events.map((_, i)=>{
                                                const isActive = i === index;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    ref: (el)=>{
                                                        dotRefs.current[i] = el;
                                                    },
                                                    "aria-label": "Go to slide ".concat(i + 1),
                                                    "aria-current": isActive ? 'true' : undefined,
                                                    onClick: ()=>setIndex(i),
                                                    className: "\n                            h-2 md:h-3 w-2 md:w-3 rounded-full transition-all duration-300\n                            flex-shrink-0 focus:outline-none\n                            ".concat(isActive ? 'bg-neutral-900' : 'border-neutral-300 bg-neutral-200 hover:bg-neutral-400', "\n                          ")
                                                }, i, false, {
                                                    fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                            lineNumber: 187,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                        lineNumber: 186,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/EventModalOverlay.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/EventModalOverlay.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(EventModalOverlay, "G0bH9QHtGkNz5VHMVKqPx5CbZAI=");
_c = EventModalOverlay;
var _c;
__turbopack_context__.k.register(_c, "EventModalOverlay");
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
    "TAB_TO_STATUS": ()=>TAB_TO_STATUS,
    "applyFilter": ()=>applyFilter,
    "computeStatus": ()=>computeStatus,
    "endOfDay": ()=>endOfDay,
    "fetchEventsForAdmin": ()=>fetchEventsForAdmin,
    "fetchEventsForClient": ()=>fetchEventsForClient,
    "fileToDataUrl": ()=>fileToDataUrl,
    "formatDateRange": ()=>formatDateRange,
    "formatTimeRange": ()=>formatTimeRange,
    "pretty": ()=>pretty,
    "shouldShowModal": ()=>shouldShowModal,
    "startOfDay": ()=>startOfDay,
    "to12h": ()=>to12h,
    "toLocalInputValue": ()=>toLocalInputValue,
    "toUtcIso": ()=>toUtcIso
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
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
                        lineNumber: 51,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs mt-1 opacity-80",
                        children: "Click, drag & drop, or paste"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : // eslint-disable-next-line @next/next/no-img-element
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: imageUrl,
                alt: "Preview",
                className: "absolute inset-0 w-full h-full object-cover rounded-xl"
            }, void 0, false, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ring-white/10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 62,
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
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ImageDropzone;
async function fetchEventsForClient(param) {
    let { setEvents, setLoadingEvents } = param;
    setLoadingEvents(true);
    try {
        var _process_env_NEXT_PUBLIC_SUPABASE_ANON_KEY, _process_env_NEXT_PUBLIC_SUPABASE_ANON_KEY1;
        const res = await fetch('/api/events', {
            cache: 'no-store'
        });
        const data = await res.json();
        console.log(data, 'fetched data for homepage');
        console.log('ANON key fingerprint:', (_process_env_NEXT_PUBLIC_SUPABASE_ANON_KEY = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuYWRxenpmeXl3c2JpY3Rmd3ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxODQ1OTIsImV4cCI6MjA3MTc2MDU5Mn0.VPk2P-BIeJs01QDgUwYtn-K66onMC70WpZeYdHZbEXs")) === null || _process_env_NEXT_PUBLIC_SUPABASE_ANON_KEY === void 0 ? void 0 : _process_env_NEXT_PUBLIC_SUPABASE_ANON_KEY.slice(0, 6), '…', (_process_env_NEXT_PUBLIC_SUPABASE_ANON_KEY1 = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuYWRxenpmeXl3c2JpY3Rmd3ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxODQ1OTIsImV4cCI6MjA3MTc2MDU5Mn0.VPk2P-BIeJs01QDgUwYtn-K66onMC70WpZeYdHZbEXs")) === null || _process_env_NEXT_PUBLIC_SUPABASE_ANON_KEY1 === void 0 ? void 0 : _process_env_NEXT_PUBLIC_SUPABASE_ANON_KEY1.slice(-6));
        if (!res.ok) throw new Error((data === null || data === void 0 ? void 0 : data.error) || 'Failed to load events');
        const items = (data.items || []).sort((a, b)=>{
            var _a_order, _b_order;
            return ((_a_order = a.order) !== null && _a_order !== void 0 ? _a_order : 0) - ((_b_order = b.order) !== null && _b_order !== void 0 ? _b_order : 0);
        });
        // console.log(items, 'fetched items for homepage');
        setEvents(items);
    } catch (e) {
        console.error(e);
    } finally{
        setLoadingEvents(false);
    }
}
async function fetchEventsForAdmin(param) {
    let { setEvents, setLoadingEvents } = param;
    setLoadingEvents(true);
    try {
        const res = await fetch('/api/admin/events', {
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
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: placeholder,
                className: "w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
            }, void 0, false, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
        lineNumber: 120,
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
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: value,
                maxLength: 500,
                onChange: (e)=>onChange(e.target.value),
                placeholder: placeholder,
                rows: rows,
                className: "w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30 resize-y"
            }, void 0, false, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
        lineNumber: 129,
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
                lineNumber: 139,
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
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_c3 = LabeledDate;
const computeStatus = (e)=>{
    if (e === null || e === void 0 ? void 0 : e.computed_status) return e.computed_status;
    if (!(e === null || e === void 0 ? void 0 : e.published)) return 'hidden';
    const now = Date.now();
    const pub = (e === null || e === void 0 ? void 0 : e.publish_at) ? new Date(e.publish_at).getTime() : null;
    const unpub = (e === null || e === void 0 ? void 0 : e.unpublish_at) ? new Date(e.unpublish_at).getTime() : null;
    if (pub && pub > now) return 'scheduled';
    if (unpub && unpub <= now) return 'expired';
    return 'live';
};
const TAB_TO_STATUS = [
    'all',
    'live',
    'scheduled',
    'expired',
    'hidden'
];
const applyFilter = (items, tabIdx, setDisableDrag)=>{
    if (tabIdx === 0) {
        setDisableDrag(false);
        return items !== null && items !== void 0 ? items : [];
    } else {
        console.log({
            tabIdx
        });
        setDisableDrag(true);
        var _TAB_TO_STATUS_tabIdx;
        const wanted = (_TAB_TO_STATUS_tabIdx = TAB_TO_STATUS[tabIdx]) !== null && _TAB_TO_STATUS_tabIdx !== void 0 ? _TAB_TO_STATUS_tabIdx : 'live';
        console.log({
            wanted
        });
        return (items !== null && items !== void 0 ? items : []).filter((e)=>computeStatus(e) === wanted);
    }
};
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
function formatTimeRange(start, end) {
    const s = to12h(start);
    const e = to12h(end);
    if (!s && !e) return '';
    if (s && !e) return s;
    if (!s && e) return e;
    return "".concat(s, " – ").concat(e);
}
function parseHM(t) {
    if (!(t === null || t === void 0 ? void 0 : t.trim())) return null;
    const m = /^(\d{1,2})(?::(\d{1,2}))?(?::(\d{1,2})(?:\.\d+)?)?$/.exec(t.trim());
    if (!m) return null;
    const h = Number(m[1]);
    var _m_;
    const min = Number((_m_ = m[2]) !== null && _m_ !== void 0 ? _m_ : '0');
    var _m_1;
    const sec = Number((_m_1 = m[3]) !== null && _m_1 !== void 0 ? _m_1 : '0');
    if (Number.isNaN(h) || Number.isNaN(min) || Number.isNaN(sec) || h < 0 || h > 23 || min < 0 || min > 59 || sec < 0 || sec > 59) return null;
    return {
        h,
        m: min
    };
}
function pad2(n) {
    return n < 10 ? "0".concat(n) : String(n);
}
function to12h(t, opts) {
    const hm = parseHM(t);
    if (!hm) return '';
    let hour = hm.h % 12;
    if (hour === 0) hour = 12;
    const suffix = hm.h < 12 ? 'am' : 'pm';
    const ampm = (opts === null || opts === void 0 ? void 0 : opts.upper) ? suffix.toUpperCase() : suffix;
    return "".concat(hour, ":").concat(pad2(hm.m), " ").concat(ampm);
}
function toUtcIso(dtLocal) {
    if (!dtLocal) return null;
    return new Date(dtLocal).toISOString();
}
const toLocalInputValue = (iso)=>{
    if (!iso) return '';
    const d = new Date(iso); // parses as UTC; getters return local
    const pad = (n)=>String(n).padStart(2, '0');
    return "".concat(d.getFullYear(), "-").concat(pad(d.getMonth() + 1), "-").concat(pad(d.getDate()), "T").concat(pad(d.getHours()), ":").concat(pad(d.getMinutes()));
};
function pretty(s) {
    const d = new Date(s);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
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
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$grandhyatt$2d$resized$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$grandhyatt$2d$resized$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/grandhyatt-resized.png.mjs { IMAGE => "[project]/src/app/assets/grandhyatt-resized.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$EventModalOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/EventModalOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/helpersAndInputs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Home() {
    _s();
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingEvents, setLoadingEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchEventsForClient"])({
                setEvents,
                setLoadingEvents
            });
            const isInIframe = window.self !== window.top;
            if (!isInIframe) {
                setShowModal(true);
            }
        }
    }["Home.useEffect"], []);
    const onClose = ()=>setOpen(false);
    // console.log(events)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-scroll",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$grandhyatt$2d$resized$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$grandhyatt$2d$resized$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                alt: "sample",
                placeholder: "blur",
                quality: 100,
                objectFit: "cover",
                layout: "fill"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            showModal && events.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$EventModalOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                container: "fullscreen",
                open: open,
                onClose: ()=>onClose(),
                events: events.map((e)=>{
                    var _e_image_url, _e_title, _e_subheading, _e_description, _e_cta_label, _e_cta_href;
                    return {
                        ...e,
                        imageUrl: (_e_image_url = e.image_url) !== null && _e_image_url !== void 0 ? _e_image_url : undefined,
                        title: (_e_title = e.title) !== null && _e_title !== void 0 ? _e_title : '(untitled)',
                        subheading: (_e_subheading = e.subheading) !== null && _e_subheading !== void 0 ? _e_subheading : '',
                        description: (_e_description = e.description) !== null && _e_description !== void 0 ? _e_description : '',
                        dateRange: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateRange"])(e.start_date, e.end_date),
                        timeText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["to12h"])(e.start_time),
                        ctaLabel: (_e_cta_label = e.cta_label) !== null && _e_cta_label !== void 0 ? _e_cta_label : '',
                        ctaHref: (_e_cta_href = e.cta_href) !== null && _e_cta_href !== void 0 ? _e_cta_href : ''
                    };
                }),
                initialIndex: 0
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 32,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen(true),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoInformationCircleSharp"], {
                    className: "absolute bottom-4 right-4 h-12 w-12 cursor-pointer hover:text-red-500 duration-300"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 51,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Home, "4YJnhcnSgZyjuLoF1L0FIQ7JgoY=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_ced2fddd._.js.map