(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/helpersAndInputs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ImageDropzone": ()=>ImageDropzone,
    "LabeledDate": ()=>LabeledDate,
    "LabeledInput": ()=>LabeledInput,
    "LabeledTextarea": ()=>LabeledTextarea,
    "endOfDay": ()=>endOfDay,
    "fetchEvents": ()=>fetchEvents,
    "fileToDataUrl": ()=>fileToDataUrl,
    "formatDateRange": ()=>formatDateRange,
    "formatTimeRange": ()=>formatTimeRange,
    "pretty": ()=>pretty,
    "shouldShowModal": ()=>shouldShowModal,
    "startOfDay": ()=>startOfDay,
    "to12h": ()=>to12h
});
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
                        lineNumber: 47,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs mt-1 opacity-80",
                        children: "Click, drag & drop, or paste"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : // eslint-disable-next-line @next/next/no-img-element
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: imageUrl,
                alt: "Preview",
                className: "absolute inset-0 w-full h-full object-cover rounded-xl"
            }, void 0, false, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ring-white/10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 58,
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
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ImageDropzone;
async function fetchEvents(param) {
    let { setEvents, setLoadingEvents } = param;
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
        // console.log(items, 'fetched items for homepage');
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
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: placeholder,
                className: "w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
            }, void 0, false, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
        lineNumber: 90,
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
                lineNumber: 100,
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
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
        lineNumber: 99,
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
                lineNumber: 109,
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
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
        lineNumber: 108,
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
"[project]/src/app/admin/seasons/seasonsPage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>SeasonsPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/helpersAndInputs.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function SeasonsPage() {
    _s();
    const previewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "font-sans flex flex-col gap-4 md:flex-row min-h-screen md:h-screen p-8 md:gap-8 sm:px-20 bg-[#151c2f]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:w-[30%] text-white h-[90%] md:overflow-scroll custom-scrollbar shadow-xl rounded-xl bg-[#212e3f] p-3 md:p-5 space-y-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:h-[90%] overflow-scroll custom-scrollbar",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabeledInput"], {
                        label: "Season Name",
                        value: "",
                        onChange: ()=>{},
                        placeholder: "e.g. Summer 2024"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                        lineNumber: 12,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:w-[70%] h-[90%] md:overflow-scroll custom-scrollbar text-white shadow-xl rounded-xl bg-[#212e3f] gap-4 p-3 md:p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 text-sm text-white/60",
                        children: "Live preview from website with frames"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-[720px] md:h-full border border-white/10 bg-white rounded-xl overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            ref: previewRef,
                            src: "/",
                            title: "Website Live Preview",
                            className: "absolute inset-0 w-full h-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                            lineNumber: 21,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_s(SeasonsPage, "+GsHRYNC7INzisfsEVToLnFuuwQ=");
_c = SeasonsPage;
var _c;
__turbopack_context__.k.register(_c, "SeasonsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_7de433fd._.js.map