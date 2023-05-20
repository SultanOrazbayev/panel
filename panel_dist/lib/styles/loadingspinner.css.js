export default `:host(.loader){overflow:hidden;display:flex;}:host(.loader) div::after{content:'';display:block;border-radius:50%;-webkit-mask-image:radial-gradient(transparent 50%, rgba(0, 0, 0, 1) 54%);width:100%;height:100%;left:0;top:0;animation:spin 2s linear infinite;}:host(.loader.dark) div::after{background:#0f0f0f;}:host(.loader.light) div::after{background:#f0f0f0;}:host(.loader.spin) div::after{animation:spin 2s linear infinite;}:host(.loader.spin.primary-light) div::after{background:linear-gradient(135deg, #f0f0f0 50%, transparent 50%),
    linear-gradient(45deg, #f0f0f0 50%, var(--primary-bg-color) 50%);}:host(.loader.spin.secondary-light) div::after{background:linear-gradient(135deg, #f0f0f0 50%, transparent 50%),
    linear-gradient(45deg, #f0f0f0 50%, var(--secondary-bg-color) 50%);}:host(.loader.spin.success-light) div::after{background:linear-gradient(135deg, #f0f0f0 50%, transparent 50%),
    linear-gradient(45deg, #f0f0f0 50%, var(--success-bg-color) 50%);}:host(.loader.spin.danger-light) div::after{background:linear-gradient(135deg, #f0f0f0 50%, transparent 50%),
    linear-gradient(45deg, #f0f0f0 50%, var(--danger-bg-color) 50%);}:host(.loader.spin.warning-light) div::after{background:linear-gradient(135deg, #f0f0f0 50%, transparent 50%),
    linear-gradient(45deg, #f0f0f0 50%, var(--warning-bg-color) 50%);}:host(.loader.spin.info-light) div::after{background:linear-gradient(135deg, #f0f0f0 50%, transparent 50%),
    linear-gradient(45deg, #f0f0f0 50%, var(--info-bg-color) 50%);}:host(.loader.spin.light-light) div::after{background:linear-gradient(135deg, #f0f0f0 50%, transparent 50%),
    linear-gradient(45deg, #f0f0f0 50%, var(--light-bg-color) 50%);}:host(.loader.dark-light) div::after{background:linear-gradient(135deg, #f0f0f0 50%, transparent 50%),
    linear-gradient(45deg, #f0f0f0 50%, #343a40 50%);}:host(.loader.spin.primary-dark) div::after{background:linear-gradient(135deg, #0f0f0f 50%, transparent 50%),
    linear-gradient(45deg, #0f0f0f 50%, var(--primary-bg-color) 50%);}:host(.loader.spin.secondary-dark) div::after{background:linear-gradient(135deg, #0f0f0f 50%, transparent 50%),
    linear-gradient(45deg, #0f0f0f 50%, var(--secondary-bg-color) 50%);}:host(.loader.spin.success-dark) div::after{background:linear-gradient(135deg, #0f0f0f 50%, transparent 50%),
    linear-gradient(45deg, #0f0f0f 50%, var(--success-bg-color) 50%);}:host(.loader.spin.danger-dark) div::after{background:linear-gradient(135deg, #0f0f0f 50%, transparent 50%),
    linear-gradient(45deg, #0f0f0f 50%, var(--danger-bg-color) 50%);}:host(.loader.spin.warning-dark) div::after{background:linear-gradient(135deg, #0f0f0f 50%, transparent 50%),
    linear-gradient(45deg, #0f0f0f 50%, var(--warning-bg-color) 50%);}:host(.loader.spin.info-dark) div::after{background:linear-gradient(135deg, #0f0f0f 50%, transparent 50%),
    linear-gradient(45deg, #0f0f0f 50%, var(--info-bg-color) 50%);}:host(.loader.spin.light-dark) div::after{background:linear-gradient(135deg, #0f0f0f 50%, transparent 50%),
    linear-gradient(45deg, #0f0f0f 50%, var(--light-bg-color) 50%);}:host(.loader.spin.dark-dark) div::after{background:linear-gradient(135deg, #0f0f0f 50%, transparent 50%),
    linear-gradient(45deg, #0f0f0f 50%, var(--dark-bg-color) 50%);}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}@keyframes spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}`
