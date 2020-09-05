export function getViewType() {
  const windowWidth = window.innerWidth;
  console.log(windowWidth);

  if (windowWidth <= 500) return 'mobile';
  else if (windowWidth <= 800) return 'tablet';
  else if (windowWidth <= 1500) return 'smallDesktop';
  else return 'desktop';
}
