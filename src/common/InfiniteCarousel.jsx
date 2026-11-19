import { Children, cloneElement, useEffect, useRef } from 'react';
import styles from '../sections/Project/ProjectStyles.module.css';

function InfiniteCarousel({ children }) {
	const trackRef = useRef(null);
	const pausedRef = useRef(false);
	const loopingRef = useRef(false);
	const dragRef = useRef({ active: false, moved: false, startX: 0, scroll: 0 });

	useEffect(() => {
		const track = trackRef.current;
		if (!track) return;

		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const setWidth = () => track.scrollWidth / 3;

		const jumpToMiddle = () => {
			loopingRef.current = true;
			track.scrollLeft = setWidth();
			requestAnimationFrame(() => {
				loopingRef.current = false;
			});
		};

		jumpToMiddle();

		const onScroll = () => {
			if (loopingRef.current) return;
			const set = setWidth();
			if (track.scrollLeft <= set * 0.1) {
				loopingRef.current = true;
				track.scrollLeft += set;
				requestAnimationFrame(() => {
					loopingRef.current = false;
				});
			} else if (track.scrollLeft >= set * 1.9) {
				loopingRef.current = true;
				track.scrollLeft -= set;
				requestAnimationFrame(() => {
					loopingRef.current = false;
				});
			}
		};

		let frame = 0;
		const tick = () => {
			if (!pausedRef.current && !dragRef.current.active && !reduceMotion) {
				track.scrollLeft += 0.5;
			}
			frame = requestAnimationFrame(tick);
		};

		const onPointerDown = (event) => {
			if (event.pointerType === 'mouse' && event.button !== 0) return;
			dragRef.current = { active: true, moved: false, startX: event.clientX, scroll: track.scrollLeft };
			pausedRef.current = true;
			track.setPointerCapture(event.pointerId);
		};

		const onPointerMove = (event) => {
			if (!dragRef.current.active) return;
			const delta = event.clientX - dragRef.current.startX;
			if (Math.abs(delta) > 5) dragRef.current.moved = true;
			track.scrollLeft = dragRef.current.scroll - delta;
		};

		const onPointerUp = () => {
			dragRef.current.active = false;
			pausedRef.current = false;
		};

		const onClickCapture = (event) => {
			if (dragRef.current.moved) {
				event.preventDefault();
				event.stopPropagation();
				dragRef.current.moved = false;
			}
		};

		track.addEventListener('scroll', onScroll, { passive: true });
		track.addEventListener('pointerdown', onPointerDown);
		track.addEventListener('pointermove', onPointerMove);
		track.addEventListener('pointerup', onPointerUp);
		track.addEventListener('pointercancel', onPointerUp);
		track.addEventListener('click', onClickCapture, true);
		if (!reduceMotion) frame = requestAnimationFrame(tick);

		return () => {
			track.removeEventListener('scroll', onScroll);
			track.removeEventListener('pointerdown', onPointerDown);
			track.removeEventListener('pointermove', onPointerMove);
			track.removeEventListener('pointerup', onPointerUp);
			track.removeEventListener('pointercancel', onPointerUp);
			track.removeEventListener('click', onClickCapture, true);
			cancelAnimationFrame(frame);
		};
	}, [children]);

	const items = Children.toArray(children);
	const copies = [0, 1, 2].flatMap((copy) =>
		items.map((child, index) => cloneElement(child, { key: `${copy}-${index}` }))
	);

	return (
		<div
			ref={trackRef}
			className={styles.projectsContainer}
			onMouseEnter={() => {
				pausedRef.current = true;
			}}
			onMouseLeave={() => {
				if (!dragRef.current.active) pausedRef.current = false;
			}}
		>
			{copies}
		</div>
	);
}

export default InfiniteCarousel;
