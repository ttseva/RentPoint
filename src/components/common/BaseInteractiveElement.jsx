import React, { useState, useEffect, useRef } from 'react';

export function BaseInteractiveElement({ id, className = '', isDisabled = false, children }) {
    const [disabled, setDisabled] = useState(isDisabled);
    const ref = useRef(null);

    // Эмуляция attachEvents / removeEvents
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // пример: слушатель клика
        function handleClick() {
            if (disabled) {
                console.log('Элемент отключен');
            } else {
                console.log('Элемент активен');
            }
        }

        el.addEventListener('click', handleClick);
        return () => {
            el.removeEventListener('click', handleClick);
        };
    }, [disabled]);

    const enable = () => setDisabled(false);
    const disable = () => setDisabled(true);

    return (
        <div
            id={id}
            className={className}
            ref={ref}
            aria-disabled={disabled}
            style={{ pointerEvents: disabled ? 'none' : 'auto', opacity: disabled ? 0.5 : 1 }}
        >
            {children}
        </div>
    );
}
