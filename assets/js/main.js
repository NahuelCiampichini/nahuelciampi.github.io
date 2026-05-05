// Main JavaScript for Jekyll Midnight Site

document.addEventListener('DOMContentLoaded', function () {

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ── Add copy button to code blocks ──
  document.querySelectorAll('pre').forEach(function (block) {
    const btn = document.createElement('button');
    btn.textContent = 'Copy';
    btn.style.cssText = [
      'position:absolute', 'top:8px', 'right:8px',
      'padding:3px 8px', 'font-size:11px',
      'background:rgba(255,255,255,0.15)', 'color:#eee',
      'border:none', 'border-radius:3px', 'cursor:pointer',
      'opacity:0', 'transition:opacity 0.2s'
    ].join(';');

    block.style.position = 'relative';
    block.appendChild(btn);

    block.addEventListener('mouseenter', function () { btn.style.opacity = '1'; });
    block.addEventListener('mouseleave', function () { btn.style.opacity = '0'; });

    btn.addEventListener('click', function () {
      const code = block.querySelector('code');
      const text = code ? code.textContent : block.textContent;
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = 'Copy'; }, 2000);
      });
    });
  });

  // ── Estimated read time ──
  const postContent = document.querySelector('.post-content');
  if (postContent) {
    const words = postContent.textContent.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.round(words / 200));
    const metaEl = document.querySelector('.post-meta');
    if (metaEl && !metaEl.textContent.includes('min read')) {
      metaEl.textContent += ' · ' + minutes + ' min read';
    }
  }

});
