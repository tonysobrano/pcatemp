export function parallaxSlider() {
  const images: HTMLElement[] = Array.from(
    document.querySelectorAll<HTMLElement>(".parallax-img")
  );
  const slider = document.querySelector<HTMLElement>(".parallax-slider");
  const sliderTrack = document.querySelector<HTMLElement>(".parallax-scroll-track");

  if (!slider || !sliderTrack || images.length === 0) {
    return () => {};
  }
  const sliderEl = slider;
  const sliderTrackEl = sliderTrack;

  let sliderWidth: number;
  let imageWidth: number;
  let maxHorizontalScroll = 0;
  let current = 0;
  let target = 0;
  const ease = 0.05;
  let rafId = 0;

  window.addEventListener("resize", init);

  images.forEach((img, idx) => {
    img.style.backgroundImage = `url(/assets/img/home-12/portfolio/port-${idx + 1}.jpg)`;
  });

  function lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
  }

  function setTransform(el: HTMLElement, transform: string) {
    el.style.transform = transform;
  }

  function init() {
    sliderWidth = sliderEl.getBoundingClientRect().width;
    imageWidth = sliderWidth / images.length;
    maxHorizontalScroll = Math.max(sliderWidth - window.innerWidth, 0);
    sliderTrackEl.style.height = `${window.innerHeight + maxHorizontalScroll}px`;
  }

  function animate() {
    const trackStart = sliderTrackEl.offsetTop;
    const sectionScroll = window.scrollY - trackStart;
    target = Math.min(Math.max(sectionScroll, 0), maxHorizontalScroll);
    current = parseFloat(lerp(current, target, ease).toFixed(2));
    setTransform(sliderEl, `translateX(-${current}px)`);
    animateImages();
    rafId = requestAnimationFrame(animate);
  }

  function animateImages() {
    let ratio = current / imageWidth;
    let intersectionRatioValue: number;

    images.forEach((image, idx) => {
      intersectionRatioValue = ratio - (idx * 0.7);
      setTransform(image, `translateX(${intersectionRatioValue * 100}px)`);
    });
  }
  init();
  animate();

  return () => {
    window.removeEventListener("resize", init);
    cancelAnimationFrame(rafId);
    sliderTrackEl.style.removeProperty("height");
  };
}
