(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/admin/seasons/addSeason.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>AddSeasonModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function AddSeasonModal(param) {
    let { open, onClose, onCreate } = param;
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [imageFile, setImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [gifFile, setGifFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const imageInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gifInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // reset when closing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddSeasonModal.useEffect": ()=>{
            if (!open) {
                setName('');
                setImageFile(null);
                setGifFile(null);
                setBusy(false);
                setError(null);
            }
        }
    }["AddSeasonModal.useEffect"], [
        open
    ]);
    const imagePreviewUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AddSeasonModal.useMemo[imagePreviewUrl]": ()=>imageFile ? URL.createObjectURL(imageFile) : null
    }["AddSeasonModal.useMemo[imagePreviewUrl]"], [
        imageFile
    ]);
    const gifPreviewUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AddSeasonModal.useMemo[gifPreviewUrl]": ()=>gifFile ? URL.createObjectURL(gifFile) : null
    }["AddSeasonModal.useMemo[gifPreviewUrl]"], [
        gifFile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddSeasonModal.useEffect": ()=>{
            return ({
                "AddSeasonModal.useEffect": ()=>{
                    if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
                    if (gifPreviewUrl) URL.revokeObjectURL(gifPreviewUrl);
                }
            })["AddSeasonModal.useEffect"];
        }
    }["AddSeasonModal.useEffect"], [
        imagePreviewUrl,
        gifPreviewUrl
    ]);
    function onPickImage() {
        var _imageInputRef_current;
        (_imageInputRef_current = imageInputRef.current) === null || _imageInputRef_current === void 0 ? void 0 : _imageInputRef_current.click();
    }
    function onPickGif() {
        var _gifInputRef_current;
        (_gifInputRef_current = gifInputRef.current) === null || _gifInputRef_current === void 0 ? void 0 : _gifInputRef_current.click();
    }
    function onFileSelectImage(e) {
        var _e_target_files;
        var _e_target_files_;
        const f = (_e_target_files_ = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) !== null && _e_target_files_ !== void 0 ? _e_target_files_ : null;
        if (!f) return;
        if (!f.type.startsWith('image/')) {
            setError('Please select an image file (png/jpg/webp/gif).');
            return;
        }
        setError(null);
        setImageFile(f);
    }
    function onFileSelectGif(e) {
        var _e_target_files;
        var _e_target_files_;
        const f = (_e_target_files_ = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) !== null && _e_target_files_ !== void 0 ? _e_target_files_ : null;
        if (!f) return;
        if (!f.type.startsWith('image/')) {
            setError('Please select a GIF or image file.');
            return;
        }
        setError(null);
        setGifFile(f);
    }
    function onDropImage(e) {
        var _e_dataTransfer_files;
        e.preventDefault();
        var _e_dataTransfer_files_;
        const f = (_e_dataTransfer_files_ = (_e_dataTransfer_files = e.dataTransfer.files) === null || _e_dataTransfer_files === void 0 ? void 0 : _e_dataTransfer_files[0]) !== null && _e_dataTransfer_files_ !== void 0 ? _e_dataTransfer_files_ : null;
        if (!f) return;
        if (!f.type.startsWith('image/')) {
            setError('Please drop an image file (png/jpg/webp/gif).');
            return;
        }
        setError(null);
        setImageFile(f);
    }
    function onDropGif(e) {
        var _e_dataTransfer_files;
        e.preventDefault();
        var _e_dataTransfer_files_;
        const f = (_e_dataTransfer_files_ = (_e_dataTransfer_files = e.dataTransfer.files) === null || _e_dataTransfer_files === void 0 ? void 0 : _e_dataTransfer_files[0]) !== null && _e_dataTransfer_files_ !== void 0 ? _e_dataTransfer_files_ : null;
        if (!f) return;
        if (!f.type.startsWith('image/')) {
            setError('Please drop a GIF or image file.');
            return;
        }
        setError(null);
        setGifFile(f);
    }
    async function handleCreate() {
        try {
            setError(null);
            const trimmed = name.trim();
            if (!trimmed) {
                setError('Please enter a season name.');
                return;
            }
            setBusy(true);
            await onCreate({
                name: trimmed,
                imageFile,
                gifFile
            });
            onClose();
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Failed to create season.');
        } finally{
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onClose: busy ? ()=>{} : onClose,
        className: "relative z-[2000]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogBackdrop"], {
                className: "fixed inset-0 bg-black/60 backdrop-blur-sm"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0  overflow-y-scroll custom-scrollbar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-full md:min-h-[10%]  items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogPanel"], {
                        className: "w-full  max-w-md rounded-2xl bg-[#212e3f] p-5 text-white shadow-xl ring-1 ring-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-lg font-semibold",
                                children: "Add Season"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-1 text-sm text-white/80",
                                                children: "Season name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: name,
                                                onChange: (e)=>setName(e.target.value),
                                                className: "w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30",
                                                placeholder: "e.g., Summer 2025",
                                                disabled: busy
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-dashed border-white/15 bg-[#131a2a] p-3",
                                        onDragOver: (e)=>e.preventDefault(),
                                        onDrop: onDropImage,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-white/80",
                                                                children: "Season image"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                                lineNumber: 155,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-white/50",
                                                                children: "Drag & drop or pick a file (PNG/JPG/WEBP/GIF)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: onPickImage,
                                                        disabled: busy,
                                                        className: "rounded-md bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20 disabled:opacity-50",
                                                        children: "Browse…"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: imageInputRef,
                                                type: "file",
                                                accept: "image/*",
                                                onChange: onFileSelectImage,
                                                className: "hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            imagePreviewUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 relative aspect-video w-full overflow-hidden rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: imagePreviewUrl,
                                                    alt: "Image preview",
                                                    className: "h-full w-full object-contain bg-black/20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex h-28 items-center justify-center rounded-lg bg-black/20 text-xs text-white/50",
                                                children: "No image selected"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-dashed border-white/15 bg-[#131a2a] p-3",
                                        onDragOver: (e)=>e.preventDefault(),
                                        onDrop: onDropGif,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-white/80",
                                                                children: "Season frame GIF"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-white/50",
                                                                children: "Drag & drop or pick a GIF (or any image)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: onPickGif,
                                                        disabled: busy,
                                                        className: "rounded-md bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20 disabled:opacity-50",
                                                        children: "Browse…"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: gifInputRef,
                                                type: "file",
                                                accept: "image/*",
                                                onChange: onFileSelectGif,
                                                className: "hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this),
                                            gifPreviewUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 relative aspect-video w-full overflow-hidden rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: gifPreviewUrl,
                                                    alt: "GIF preview",
                                                    className: "h-full w-full object-contain bg-black/20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                lineNumber: 222,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex h-28 items-center justify-center rounded-lg bg-black/20 text-xs text-white/50",
                                                children: "No GIF selected"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                lineNumber: 231,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-red-300",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                        lineNumber: 237,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex justify-end gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: onClose,
                                                disabled: busy,
                                                className: "rounded-lg px-3 py-2 text-sm bg-white/10 hover:bg-white/20 disabled:opacity-50",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleCreate,
                                                disabled: busy || !name.trim(),
                                                className: "rounded-lg px-3 py-2 text-sm font-medium text-black bg-green-400 hover:bg-green-500 disabled:opacity-50",
                                                children: busy ? 'Saving…' : 'Create'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/seasons/addSeason.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s(AddSeasonModal, "4maOyemx3Kqgv7BXW8+EIIqRGpQ=");
_c = AddSeasonModal;
var _c;
__turbopack_context__.k.register(_c, "AddSeasonModal");
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
    "fetchSeasons": ()=>fetchSeasons,
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
async function fetchSeasons(param) {
    let { setSeasons, setLoading } = param;
    try {
        setLoading === null || setLoading === void 0 ? void 0 : setLoading(true);
        const res = await fetch('/api/seasons', {
            cache: 'no-store'
        });
        const json = await res.json();
        if (!res.ok) throw new Error((json === null || json === void 0 ? void 0 : json.error) || 'Failed to load seasons');
        const items = Array.isArray(json === null || json === void 0 ? void 0 : json.items) ? json.items : [];
        setSeasons(items);
        return items;
    } catch (err) {
        console.error(err);
        setSeasons([]);
        return [];
    } finally{
        setLoading === null || setLoading === void 0 ? void 0 : setLoading(false);
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
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: placeholder,
                className: "w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
            }, void 0, false, {
                fileName: "[project]/src/app/components/helpersAndInputs.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
        lineNumber: 146,
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
                lineNumber: 156,
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
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
        lineNumber: 155,
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
                lineNumber: 165,
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
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/helpersAndInputs.tsx",
        lineNumber: 164,
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
"[project]/src/app/components/SeasonOverlay.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>SeasonOverlay
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
function SeasonOverlay(param) {
    let { show, frameSrc } = param;
    if (show === false) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            unoptimized: true,
            src: frameSrc,
            alt: 'sample',
            fill: true,
            className: "object-fill object-center"
        }, void 0, false, {
            fileName: "[project]/src/app/components/SeasonOverlay.tsx",
            lineNumber: 13,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
_c = SeasonOverlay;
var _c;
__turbopack_context__.k.register(_c, "SeasonOverlay");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2f$UserProviders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/providers/UserProviders.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$seasons$2f$addSeason$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/seasons/addSeason.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/helpersAndInputs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Snackbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Snackbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SeasonOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SeasonOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Refresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Refresh.js [app-client] (ecmascript)");
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
function SeasonsPage() {
    _s();
    const previewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedSeason, setSelectedSeason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { user, profile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2f$UserProviders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedSeasonId, setSelectedSeasonId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [seasons, setSeasons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [buttonLoading, setButtonLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [snackbarSettings, setSnackbarSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        message: '',
        severity: ''
    });
    async function createSeason(param) {
        let { name, imageFile, gifFile } = param;
        const body = new FormData();
        body.append('name', name);
        if (imageFile) body.append('image', imageFile);
        if (gifFile) body.append('gif', gifFile);
        const res = await fetch('/api/admin/seasons/create', {
            method: 'POST',
            body
        });
        if (!res.ok) {
            setSnackbarSettings((prev)=>({
                    ...prev,
                    open: true,
                    message: 'Season Creation Failed',
                    severity: 'error'
                }));
            throw new Error((await res.json()).error || 'Create failed');
        } else {
            setSnackbarSettings((prev)=>({
                    ...prev,
                    open: true,
                    message: 'Added Season Successfully',
                    severity: 'success'
                }));
        }
    }
    async function setActiveSeason(seasonId) {
        setButtonLoading(true);
        let res;
        if (!seasonId) {
            res = await fetch("/api/admin/seasons/set_season/none", {
                method: 'PATCH'
            });
        } else {
            res = await fetch("/api/admin/seasons/set_season/".concat(seasonId), {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json'
                }
            });
        }
        const data = await res.json();
        console.log({
            data
        });
        if (!res.ok) {
            setSnackbarSettings((prev)=>({
                    ...prev,
                    open: true,
                    message: 'Failed to set active season',
                    severity: 'error'
                }));
            throw new Error((data === null || data === void 0 ? void 0 : data.error) || 'Failed to set active season');
        } else {
            setSnackbarSettings((prev)=>({
                    ...prev,
                    open: true,
                    message: 'Saved Season Successfully',
                    severity: 'success'
                }));
        }
        setButtonLoading(false);
        return data.item;
    }
    async function onDelete(id) {
        if (!id) {
            setSnackbarSettings({
                open: true,
                message: 'ID missing',
                severity: 'error'
            });
        }
        setSnackbarSettings({
            open: true,
            message: 'Are you sure you want to delete this season?',
            severity: 'warning',
            actionLabel: 'Delete',
            duration: 10000,
            actionCallback: async ()=>{
                try {
                    const res = await fetch("/api/admin/seasons/set_season/".concat(id), {
                        method: 'DELETE'
                    });
                    const data = await res.json();
                    if (!res.ok) {
                        setSnackbarSettings({
                            open: true,
                            message: 'Delete Season failed',
                            severity: 'error'
                        });
                        throw new Error((data === null || data === void 0 ? void 0 : data.error) || 'Delete failed');
                    } else {
                        setSnackbarSettings({
                            open: true,
                            message: 'Season Deleted Successfully',
                            severity: 'success'
                        });
                    }
                } catch (e) {
                    setSnackbarSettings({
                        open: true,
                        message: e instanceof Error ? e.message : 'Delete failed',
                        severity: 'error'
                    });
                }
            }
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SeasonsPage.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSeasons"])({
                setSeasons,
                setLoading
            });
        }
    }["SeasonsPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SeasonsPage.useEffect": ()=>{
            if (!seasons) return;
            const currentActive = seasons.find({
                "SeasonsPage.useEffect.currentActive": (season)=>season.is_active === true
            }["SeasonsPage.useEffect.currentActive"]);
            console.log({
                currentActive
            });
            setSelectedSeason((currentActive === null || currentActive === void 0 ? void 0 : currentActive.image_url) || '');
            setSelectedSeasonId((currentActive === null || currentActive === void 0 ? void 0 : currentActive.id) || '');
        }
    }["SeasonsPage.useEffect"], [
        seasons
    ]);
    console.log({
        seasons
    });
    console.log("user", user);
    console.log("profile", profile);
    console.log("role", profile === null || profile === void 0 ? void 0 : profile.role);
    console.log(selectedSeason);
    console.log({
        selectedSeasonId
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "font-sans flex flex-col gap-4 md:flex-row min-h-screen md:h-screen p-8 md:gap-8 sm:px-20 bg-[#151c2f]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:w-[25%] text-white h-[90%] md:overflow-scroll custom-scrollbar shadow-xl rounded-xl bg-[#212e3f] p-3 md:p-5 space-y-4",
                children: [
                    (profile === null || profile === void 0 ? void 0 : profile.role) === 'super-admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky w-full top-0 bg-[#212e3f] z-20 rounded-lg flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpen(true),
                                        className: "px-3 py-2 rounded-lg bg-blue-400 hover:bg-blue-500 hover:cursor-pointer text-black font-medium disabled:cursor-not-allowed",
                                        children: "Add"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                                        lineNumber: 156,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onDelete(selectedSeasonId),
                                        className: "px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 hover:cursor-pointer font-medium disabled:cursor-not-allowed",
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                                        lineNumber: 162,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                                lineNumber: 155,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                size: "small",
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$helpersAndInputs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSeasons"])({
                                        setSeasons,
                                        setLoading
                                    });
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Refresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    htmlColor: "#9ca3af",
                                    fontSize: "medium"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                                    lineNumber: 174,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                                lineNumber: 169,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                        lineNumber: 154,
                        columnNumber: 21
                    }, this),
                    seasons.map((season)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>{
                                setSelectedSeason((season === null || season === void 0 ? void 0 : season.image_url) || '');
                                setSelectedSeasonId(season.id);
                            },
                            className: "flex-col border relative border-white/10 rounded-lg overflow-hidden  hover:scale-[1.05] transition-transform duration-300 cursor-pointer ".concat(season.id === selectedSeasonId ? ' shadow-2xl scale-[1.05]' : ''),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " relative aspect-video w-full overflow-hidden rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: season.image_url || "",
                                        alt: season.name,
                                        className: "h-full w-full object-contain bg-black/20"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                                        lineNumber: 194,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                                    lineNumber: 191,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2  bg-[#1a2536]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-md font-semibold",
                                        children: season.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                                        lineNumber: 201,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                                    lineNumber: 200,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, season.id, true, {
                            fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                            lineNumber: 180,
                            columnNumber: 21
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex mt-4 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveSeason(selectedSeasonId);
                                },
                                disabled: buttonLoading,
                                className: "px-3 py-2 rounded-lg bg-green-400 hover:bg-green-500 hover:cursor-pointer text-black font-medium disabled:cursor-not-allowed",
                                children: buttonLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-2",
                                    children: [
                                        "Saving",
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
                                                    fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 99
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    className: "opacity-75",
                                                    fill: "currentColor",
                                                    d: "M4 12a8 8 0 018-8v4A4 4 0 004 12z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 192
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                                            lineNumber: 217,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                                    lineNumber: 215,
                                    columnNumber: 29
                                }, this) : 'Save'
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                                lineNumber: 207,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white hover:cursor-pointer",
                                onClick: ()=>{
                                    setSelectedSeason('');
                                    setSelectedSeasonId('');
                                },
                                children: "Clear"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                                lineNumber: 222,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                        lineNumber: 206,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                lineNumber: 152,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:w-[75%] h-[90%] md:overflow-scroll custom-scrollbar text-white shadow-xl rounded-xl bg-[#212e3f] gap-4 p-3 md:p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 text-sm text-white/60",
                        children: "Live preview from website with frames"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                        lineNumber: 234,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-[720px] md:h-full border border-white/10 bg-white rounded-xl overflow-hidden",
                        children: [
                            selectedSeason !== '' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-video inset-0 w-full z-30 h-full pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SeasonOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    show: true,
                                    frameSrc: selectedSeason
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                                    lineNumber: 241,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                                lineNumber: 239,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                ref: previewRef,
                                src: "/",
                                title: "Website Live Preview",
                                className: "absolute inset-0 w-full h-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                                lineNumber: 246,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                        lineNumber: 237,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                lineNumber: 233,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$seasons$2f$addSeason$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: open,
                onClose: ()=>setOpen(false),
                onCreate: createSeason
            }, void 0, false, {
                fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                lineNumber: 249,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Snackbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                snackbarSettings: snackbarSettings,
                setSnackbarSettings: setSnackbarSettings
            }, void 0, false, {
                fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
                lineNumber: 254,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/seasons/seasonsPage.tsx",
        lineNumber: 151,
        columnNumber: 9
    }, this);
}
_s(SeasonsPage, "liv68hK09Mko1hElFLQX2yS83Rc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$providers$2f$UserProviders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c = SeasonsPage;
var _c;
__turbopack_context__.k.register(_c, "SeasonsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_306ac39d._.js.map