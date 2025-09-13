# 🧰 open-hook

> A powerful CLI to manage and install reusable React custom hooks from a centralized GitHub repository.

![GitHub](https://img.shields.io/github/license/Rajeshkumar02/OpenHooks?style=flat-square)
![PRs](https://img.shields.io/github/issues-pr/Rajeshkumar02/OpenHooks?style=flat-square)
![Hooks Count](https://img.shields.io/badge/hooks-dynamic-blue?style=flat-square)

🌐 **Hosted at:** [openhooks.is-a.dev](https://openhooks.is-a.dev)

## 📦 Overview

**`open-hook`** is a CLI tool designed to simplify the process of managing custom React hooks. It allows you to:

- 🔍 List available hooks
- 📥 Install one or more hooks into your project
- ⚙️ Initialize your configuration
- 🛠️ Choose between JavaScript or TypeScript
- 🪝 Automatically update `hooks/manifest.json` for shared metadata

## 📁 Project Structure

```
.
├── cli/            # CLI source code (Node + TypeScript)
├── hooks/          # Public hook repository
│   ├── js/         # JavaScript hooks
│   ├── ts/         # TypeScript hooks
│   └── manifest.json
├── docs/           # Optional documentation site (e.g., Docusaurus, VitePress, etc.)
├── .github/        # GitHub workflows, templates, CODEOWNERS
├── README.md       # You are here
└── package.json
```

## 🧪 Installation

```bash
npm install -g open-hook
```

Or with `pnpm`:

```bash
pnpm add -g open-hook
```

## 🚀 Usage

### 🔧 Initialize Configuration

```bash
open-hook init
```

You'll be prompted to set:

- Hook installation directory (e.g., `src/hooks`)
- Preferred language (`js` or `ts`)

### 📥 Add Hooks

```bash
open-hook add
# or
open-hook add useDebounce useClickOutside --language ts
```

### 📃 List All Available Hooks

```bash
open-hook list
```

## 📚 Documentation

You can explore available hooks and their documentation in the [`docs/`](./docs) folder or at the hosted site [openhooks.is-a.dev](https://openhooks.is-a.dev).

## 🧑‍💻 Contributing

We welcome contributions from the community!

> Please read our [CONTRIBUTING.md](./.github/CONTRIBUTING.md) before submitting a pull request.

### To add a new hook:

1. Create the hook inside `hooks/js/` or `hooks/ts/`
2. Update `hooks/manifest.json`
3. Test with:
   ```bash
   open-hook add useMyNewHook
   ```
4. Open a PR using the [PR Template](./.github/pull_request_template.md)

## 🛡️ Maintainers & Code Owners

This project is maintained by:

- [@Rajeshkumar S](https://github.com/Rajeshkumar02)
- [@vigneshwar R](https://github.com/vigneshwarr26001)

## 📝 License

[MIT](./LICENSE)

## ❤️ Support

If you find this project useful, please consider giving it a ⭐️ and sharing it with others.

## 🪝 Available Hooks

This document lists **available**, **planned**, and **suggested** hooks for a comprehensive React hooks library.

---

## 🟢 Available Hooks

### **State Management**
- `useDebounce`
- `useLocalStorage`
- `usePrevious`
- `useTimeout`

### **Event Handling**
- `useClickOutside`
- `useClipboard`

### **Device and Browser**
- `useLocation`
- `useMobile`

**Total available hooks: 9**

---

## 🟡 Planned Hooks

### **State Management (Planned)**
- `useStateWithHistory`
- `useFetch`
- `useThrottle`
- `useArrayState`
- `useMapState`
- `useQueueState`
- `useUndoRedoState`
- `useTimeTravelState`
- `useSafeSetState`
- `useToggle`
- `useCounter`
- `usePromise`
- `usePreviousImmediate`
- `usePreviousDifferent`

### **Event Handling (Planned)**
- `useClickOutside`
- `useClipboard`
- `useKeyPress`
- `useHover`
- `useOnWindowResize`
- `useOnWindowScroll`
- `useOnLongPress`
- `useOnStartTyping`
- `useFocusWithin`
- `useDocumentEventListener`
- `useFocus`
- `useIsDroppingFiles`
- `useOutsideClick`
- `useOnHoverRef`

### **Device and Browser (Planned)**
- `useLocation`
- `useMobile`
- `useGeolocation`
- `useOnline`
- `useIdle`
- `useSpeechRecognition`
- `useVibrate`
- `useWebSocket`
- `useMediaQuery`
- `useIntersectionObserver`
- `useResizeObserver`
- `useMutationObserver`
- `useFullscreen`
- `usePictureInPictureApi`
- `useScreenDetailsApi`

### **Performance (Planned)**
- `useDebouncedValue`
- `useThrottleFn`
- `useRaf`
- `useIsMounted`
- `useLifecycleLogger`
- `useDeepCompareEffect`
- `useMemoizedCallback`
- `useRenderCount`
- `useWhyDidYouUpdate`
- `useSafeSetState`
- `useAsyncEffect`
- `useEffectOnceWhen`

### **Accessibility (Planned)**
- `useFocusTrap`
- `useAriaLive`
- `useSkipToContent`
- `useAccessibleDropdown`
- `useAccessibleTabs`
- `useAccessibleModal`
- `useAccessibleTooltip`
- `useAccessibleAccordion`
- `useAccessibleCarousel`
- `useAccessibleDialog`

### **Utilities (Planned)**
- `useEventListener`
- `useForkRef`
- `useFreshCallback`
- `useFreshRef`
- `useMergeRefs`
- `useRefElement`
- `useDimensions`
- `useBoundingClientRect`
- `useMutationObserver`
- `useResizeObserver`
- `useFreshTick`
- `useMergeRefs`

### **Lifecycle and Effects (Planned)**
- `useDidMount`
- `useDidUpdate`
- `useWillUnmount`
- `useIsomorphicEffect`
- `useEffectOnce`
- `useEffectWhen`

**Total planned hooks: 85**

---

## 💡 Suggested Extra Hooks

### **State Management**
- `useFormState` – General-purpose form state management  
- `usePersistentState` – State persisted in IndexedDB or sessionStorage  
- `useAsyncState` – Automatically manage promises in state  
- `useComputedState` – Derived state based on other states  
- `useBroadcastState` – Sync state across multiple tabs/windows  

### **Event Handling**
- `useDrag` / `useDrop` – Drag & drop functionality  
- `useSwipe` – Detect swipe gestures  
- `useShortcut` – Keyboard shortcut manager  
- `useMousePosition` – Track cursor position  
- `usePointerLock` – Pointer lock API for interactive apps  

### **Device and Browser**
- `useBattery` – Monitor battery status  
- `useDeviceOrientation` – Detect device tilt/rotation  
- `useAmbientLight` – Detect light levels for dark mode triggers  
- `useClipboardHistory` – Track clipboard changes over time  

### **Performance**
- `useIdleCallback` – Run code during browser idle time  
- `useWebWorker` – Offload heavy computations  
- `useProfiler` – Profile component render times  
- `useRenderDebounce` – Debounce re-renders for heavy components  

### **Accessibility**
- `useKeyboardNavigation` – Arrow/tab navigation for custom UIs  
- `useScreenReaderStatus` – Detect active screen readers  
- `useFocusVisible` – Track focus-visible state  

### **Utilities**
- `useErrorBoundary` – Catch component errors gracefully  
- `useLogger` – Log state or props changes  
- `useUniqueId` – Generate unique IDs (useful for accessibility)  
- `useLocalForage` – Persistent state using IndexedDB  
- `useAsyncQueue` – Queue async tasks with concurrency control  

### **Lifecycle & Effects**
- `usePageVisibility` – Detect if page/tab is visible  
- `useNetworkStatus` – Online/offline detection  
- `useUpdateEffect` – Like `useEffect`, skips first render  
- `useDeepEffect` – Deep compare dependencies before triggering effect  

---

## 🔢 Summary

| Category | Available | Planned | Suggested | Total |
|----------|-----------|---------|-----------|-------|
| State Management | 4 | 16 | 5 | 25 |
| Event Handling | 2 | 14 | 5 | 21 |
| Device & Browser | 2 | 15 | 4 | 21 |
| Performance | 0 | 12 | 4 | 16 |
| Accessibility | 0 | 10 | 3 | 13 |
| Utilities | 0 | 12 | 5 | 17 |
| Lifecycle & Effects | 1 | 6 | 4 | 11 |

**Grand Total Hooks:** 124
