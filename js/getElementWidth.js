function getElementWidth(content, padding, border) {
  const contentWidth = content;
  const paddingWidth = padding;
  const borderWidth = border;
  const totalWidth = content + padding * 2 + border * 2;
  return totalWidth;
}
