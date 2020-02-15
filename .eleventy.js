module.exports = eleventyConfig => {
  eleventyConfig.addShortcode(
    'circle',
    (radius, bgColor = 'black', strokeWidth = 0, stroke = 'black') => {
      const halfStrokeWidth = strokeWidth / 2;
      const diameter = radius * 2;
      const size = diameter + strokeWidth;

      //return `<div style="color: red">TEST</div>`;
      return `
        <svg
          style="height: ${size}px; width: ${size}px"
          viewBox="0 0 ${size} ${size}"
          xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="${radius + halfStrokeWidth}"
            cy="${radius + halfStrokeWidth}"
            fill="${bgColor}"
            stroke="${stroke}"
            stroke-width="${strokeWidth}"
            r="${radius}" />
        </svg>
      `;
    }
  );
};
