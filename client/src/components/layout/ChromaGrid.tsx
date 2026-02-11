import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';

interface ChromaGridProps {
    children?: React.ReactNode;
    className?: string;
    radius?: number;
    damping?: number;
    fadeOut?: number;
    columns?: number;
    rows?: number;
    ease?: string;
}

const ChromaGrid = ({
    children,
    className = '',
    radius = 300,
    columns = 3,
    rows = 2,
    damping = 0.45,
    fadeOut = 0.6,
    ease = 'power3.out'
}: ChromaGridProps) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const fadeRef = useRef(null);
    const setX = useRef(null);
    const setY = useRef(null);
    const pos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, '--x', 'px');
        setY.current = gsap.quickSetter(el, '--y', 'px');
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    const moveTo = (x: number, y: number) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true
        });
    };

    const handleMove = (e: React.PointerEvent) => {
        if (!rootRef.current) return;
        const r = rootRef.current.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 1,
            duration: fadeOut,
            overwrite: true
        });
    };

    return (
        <div
            ref={rootRef}
            className={`chroma-grid ${className} relative grid`}
            style={{
                '--r': `${radius}px`,
                '--cols': columns,
                '--rows': rows
            } as React.CSSProperties}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
        >
            {/* 
        This is where the magic happens.
        The content (children) is rendered normally (COLOR).
        Then we overlay a special layer that grayscales everything EXCEPT where the mouse is.
      */}

            {/* 1. Underlying colorful content */}
            <div className="z-0" style={{ gridArea: '1 / 1 / -1 / -1' }}>
                {children}
            </div>

            {/* 2. Overlay that dulls everything */}
            <div
                ref={fadeRef}
                className="chroma-overlay pointer-events-none absolute inset-0 z-10"
                style={{ gridArea: '1 / 1 / -1 / -1' }}
            />
        </div>
    );
};

export default ChromaGrid;
