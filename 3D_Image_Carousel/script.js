(function () {
  var cfg = window.SITE_CONFIG || {};
  var ANIM_MS = 500;        // 切换动画时长
  var CLONES = 5;           // 左右各补几张副本，用来做无缝循环
  var IMG_DIR = './asset/image/';

  // ---------- 1. 读取并规范化配置 ----------
  function titleFromUrl(url) {
    try {
      var seg = decodeURIComponent(url.split('?')[0].replace(/\/+$/, '').split('/').pop());
      return seg || url;
    } catch (e) { return url; }
  }
  function imageSrc(img) {
    if (!img) return '';
    return /^(https?:|data:|\.{0,2}\/)/.test(img) ? img : IMG_DIR + img;
  }
  function normalize(a) {
    if (typeof a === 'string') a = { url: a };
    if (!a || !a.url) return null;
    return {
      url: a.url,
      title: a.title || titleFromUrl(a.url),
      image: imageSrc(a.image)
    };
  }

  var items = (cfg.articles || []).map(normalize).filter(Boolean);
  var N = items.length;
  var banner = document.getElementById('banner');
  var btnGroup = document.querySelector('.btn-group');
  var track = document.querySelector('.track');
  if (!N) { banner.style.display = 'none'; btnGroup.style.display = 'none'; return; }

  if (cfg.shuffle !== false) {
    for (var i = N - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = items[i]; items[i] = items[j]; items[j] = t;
    }
  }

  // ---------- 2. 生成卡片（前后各补副本实现无限循环） ----------
  function hueOf(str) {
    var h = 0;
    for (var i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 360;
    return h;
  }
  function mod(n, m) { return ((n % m) + m) % m; }

  function makeBox(item, isClone) {
    var a = document.createElement('a');
    a.className = 'img-box';
    a.href = item.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    if (isClone) { a.tabIndex = -1; a.setAttribute('aria-hidden', 'true'); }

    function placeholder() {
      a.classList.add('no-img');
      a.style.background = 'linear-gradient(135deg, hsl(' + hueOf(item.url) + ',45%,55%), hsl(' +
        ((hueOf(item.url) + 40) % 360) + ',45%,35%))';
      var im = a.querySelector('img'); if (im) im.remove();
    }

    if (item.image) {
      var img = document.createElement('img');
      img.alt = item.title;
      img.draggable = false;
      img.onerror = placeholder;
      img.src = item.image;
      a.appendChild(img);
    } else {
      placeholder();
    }

    var info = document.createElement('div');
    info.className = 'info';
    var h3 = document.createElement('h3');
    h3.textContent = item.title;
    info.appendChild(h3);
    a.appendChild(info);
    return a;
  }

  for (var p = -CLONES; p < N + CLONES; p++) {
    var real = p >= 0 && p < N;
    track.appendChild(makeBox(items[mod(p, N)], !real));
  }

  // ---------- 3. 轮播 ----------
  var index = 0, busy = false;

  function setPos() {
    track.style.transform = 'translateX(calc(var(--step) * ' + (-(CLONES + index)) + '))';
  }
  function go(dir) {
    if (busy) return;
    busy = true;
    index += dir;
    track.style.transition = 'transform ' + ANIM_MS + 'ms ease';
    setPos();
    setTimeout(function () {
      // 滑到副本区后，悄悄跳回等价的真实位置（内容相同，肉眼无感）
      index = mod(index, N);
      track.style.transition = 'none';
      setPos();
      void track.offsetWidth;   // 强制重排，使上面的 none 立即生效
      busy = false;
    }, ANIM_MS);
  }

  track.style.transition = 'none';
  setPos();
  document.querySelector('.next').onclick = function () { go(1); };
  document.querySelector('.last').onclick = function () { go(-1); };

  // 按钮延迟浮现（沿用原效果）
  setTimeout(function () {
    btnGroup.style.opacity = '1';
    btnGroup.style.bottom = '5%';
  }, ANIM_MS);
})();
