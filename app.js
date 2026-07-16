/* ================== ICONS ================== */
const ICON_CHECK = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#7C9473"/><path d="M4.5 8.2L6.8 10.5L11.5 5.5" stroke="#F2EEDF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ARROW = `<svg class="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const WEAVE = `<svg class="weave-divider" viewBox="0 0 400 26" preserveAspectRatio="none"><path d="M0 13 Q 12.5 2 25 13 T 50 13 T 75 13 T 100 13 T 125 13 T 150 13 T 175 13 T 200 13 T 225 13 T 250 13 T 275 13 T 300 13 T 325 13 T 350 13 T 375 13 T 400 13" stroke="#8A5A34" stroke-width="1.4" fill="none"/></svg>`;

/* ================== RENDER HELPERS ================== */
function productCard(p, withIndex=true){
  return `
  <div class="p-card" data-goto="product/${p.slug}">
    <div class="thumb">
      ${withIndex ? `<span class="idx">${String(p.id).padStart(2,'0')}</span>` : ''}
      <img src="${p.img}" alt="${p.name}" loading="lazy">
    </div>
    <div class="body">
      <h3>${p.name}</h3>
      <p>${p.short}</p>
      <span class="view-link">Xem chi tiết ${ARROW}</span>
    </div>
  </div>`;
}

function renderHome(){
  const featured = PRODUCTS.slice(0,6);
  return `
  <section class="hero">
    <div class="wrap">
      <div>
        <span class="eyebrow">Eco2go Vietnam · Xuất khẩu từ 2017</span>
        <h1>Chất liệu <em>thiên nhiên</em><br>từ gáo dừa &amp; xơ dừa Việt Nam</h1>
        <p class="lead">Chúng tôi chế tác và xuất khẩu các sản phẩm bền vững từ dừa, xơ dừa và tre — từ vật dụng nhà bếp đến giải pháp làm vườn — cho khách hàng trên toàn thế giới.</p>
        <div class="hero-ctas">
          <a href="#products" class="btn btn-primary">Khám phá sản phẩm ${ARROW}</a>
          <a href="#contact" class="btn btn-ghost">Nhận báo giá</a>
        </div>
      </div>
      <div class="hero-figure">
        <img class="husk-frame" src="assets/hero-lifestyle.jpg" alt="Sản phẩm chén gáo dừa Eco2go Vietnam">
        <div class="ring-badge"><strong>10+</strong><span>Năm xuất khẩu</span></div>
      </div>
    </div>
    <div class="trust-bar">
      <div class="wrap">
        <div class="trust-item"><strong>13</strong><span>Dòng sản phẩm</span></div>
        <div class="trust-item"><strong>100%</strong><span>Nguyên liệu tự nhiên</span></div>
        <div class="trust-item"><strong>2017</strong><span>Năm thành lập</span></div>
        <div class="trust-item"><strong>Global</strong><span>Xuất khẩu quốc tế</span></div>
      </div>
    </div>
  </section>

  <section id="about">
    <div class="wrap about-grid">
      <div>
        <span class="eyebrow">Về chúng tôi</span>
        <h2>Tinh hoa dừa Việt, gửi đi khắp thế giới</h2>
        <p>Eco2go Vietnam, thành lập năm 2017, là công ty hàng đầu trong lĩnh vực xuất khẩu sản phẩm thiên nhiên từ Việt Nam. Với 10 năm kinh nghiệm xuất khẩu, chúng tôi hiện cung cấp đa dạng sản phẩm bao gồm chậu gáo dừa, cọc tre, viên nén xơ dừa và nhiều hơn nữa.</p>
        <a href="#products" class="btn btn-primary">Xem toàn bộ danh mục ${ARROW}</a>
      </div>
      <div class="img-col">
        <img class="husk-frame" src="assets/p9-coir-mulch-mat.jpg" alt="Sản phẩm xơ dừa tự nhiên">
      </div>
    </div>
  </section>

  <section class="alt">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Vì sao chọn chúng tôi</span>
        <h2>Bốn giá trị cốt lõi</h2>
      </div>
      <div class="why-grid">
        <div class="why-card"><div class="why-num">01</div><h4>Cam kết bền vững</h4><p>Sự bền vững là kim chỉ nam của chúng tôi — luôn cung cấp giải pháp thân thiện môi trường, góp phần bảo vệ hệ sinh thái.</p></div>
        <div class="why-card"><div class="why-num">02</div><h4>Danh mục đa dạng</h4><p>Eco2go Vietnam cung cấp danh mục sản phẩm và dịch vụ thân thiện môi trường phong phú, đáp ứng nhiều nhu cầu khác nhau.</p></div>
        <div class="why-card"><div class="why-num">03</div><h4>Cộng đồng &amp; hợp tác</h4><p>Thay đổi tích cực hiệu quả nhất khi được thực hiện cùng nhau. Chọn chúng tôi là bạn tham gia cộng đồng bảo vệ môi trường.</p></div>
        <div class="why-card"><div class="why-num">04</div><h4>Lấy khách hàng làm trung tâm</h4><p>Chúng tôi lắng nghe nhu cầu và mối quan tâm của khách hàng, mang đến giải pháp phù hợp với giá trị của bạn.</p></div>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="grid-head-row section-head" style="margin-bottom:0">
        <div>
          <span class="eyebrow">Danh mục nổi bật</span>
          <h2>Sản phẩm được ưa chuộng</h2>
        </div>
      </div>
      <div class="product-grid">
        ${featured.map(p=>productCard(p)).join('')}
      </div>
      <div class="see-all-wrap">
        <a href="#products" class="btn btn-ghost">Xem tất cả 13 sản phẩm ${ARROW}</a>
      </div>
    </div>
  </section>

  <section class="alt" id="contact">
    <div class="wrap" style="text-align:center; max-width:640px">
      <span class="eyebrow">Kết nối với chúng tôi</span>
      <h2>Sẵn sàng nhập khẩu sản phẩm thiên nhiên?</h2>
      <p>Liên hệ để nhận báo giá, catalogue chi tiết hoặc mẫu sản phẩm cho đơn hàng xuất khẩu của bạn.</p>
      <div class="hero-ctas" style="justify-content:center">
        <a href="tel:+84911585628" class="btn btn-primary">Gọi +84 911 585 628</a>
        <a href="mailto:jeny@eco2go.vn" class="btn btn-ghost">jeny@eco2go.vn</a>
      </div>
    </div>
  </section>
  `;
}

function renderProducts(filter=''){
  const q = filter.trim().toLowerCase();
  const list = PRODUCTS.filter(p => !q || p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
  return `
  <div class="page-header wrap">
    <span class="eyebrow">Danh mục 2026</span>
    <h1>Toàn bộ sản phẩm</h1>
    <p style="max-width:56ch">13 dòng sản phẩm thiên nhiên từ gáo dừa, xơ dừa và tre — sẵn sàng cho đơn hàng xuất khẩu số lượng lớn.</p>
    <div class="search-row">
      <input type="text" id="searchInput" placeholder="Tìm sản phẩm, ví dụ: chậu, lưới, cọc..." value="${filter.replace(/"/g,'')}">
    </div>
  </div>
  <section>
    <div class="wrap">
      <div class="product-grid" id="productGrid">
        ${list.length ? list.map(p=>productCard(p)).join('') : `<p style="grid-column:1/-1">Không tìm thấy sản phẩm phù hợp.</p>`}
      </div>
    </div>
  </section>
  `;
}

function renderProductDetail(slug){
  const p = PRODUCTS.find(x=>x.slug===slug);
  if(!p){ return `<div class="wrap" style="padding:80px 0"><p>Không tìm thấy sản phẩm.</p><a href="#products" class="btn btn-primary">Về danh sách sản phẩm</a></div>`; }
  const idx = PRODUCTS.findIndex(x=>x.slug===slug);
  const related = PRODUCTS.filter((_,i)=> i!==idx).slice(0,4);
  return `
  <div class="detail-top wrap">
    <a href="#products" class="back-link">&larr; Danh sách sản phẩm</a>
  </div>
  <div class="wrap detail-grid">
    <div>
      <img class="husk-frame" src="${p.img}" alt="${p.name}">
    </div>
    <div>
      <span class="detail-num">${String(p.id).padStart(2,'0')} / 13</span>
      <h1>${p.name}</h1>
      <p style="color:var(--husk); font-weight:700; margin-bottom:14px">${p.tagline}</p>
      <p class="detail-desc">${p.desc}</p>
      <div class="adv-title">Ưu điểm nổi bật</div>
      <ul class="adv-list">
        ${p.advantages.map(a=>`<li>${ICON_CHECK}<span>${a}</span></li>`).join('')}
      </ul>
      <div class="detail-ctas">
        <a href="mailto:jeny@eco2go.vn?subject=Báo giá ${encodeURIComponent(p.name)}" class="btn btn-primary">Yêu cầu báo giá</a>
        <a href="tel:+84911585628" class="btn btn-ghost">Gọi tư vấn</a>
      </div>
    </div>
  </div>

  <div class="wrap">${WEAVE}</div>

  <section class="specs-section">
    <div class="wrap">
      <div class="section-head" style="margin-bottom:26px">
        <span class="eyebrow">Thông số kỹ thuật</span>
        <h2>Quy cách sản phẩm</h2>
      </div>
      <div class="specs-card">
        <table>
          <thead><tr><th>Thông số</th><th>Chi tiết</th></tr></thead>
          <tbody>
            ${p.specs.map(([k,v])=>`<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
      <p class="specs-note">Kích thước và quy cách có thể tùy chỉnh theo yêu cầu đơn hàng. Liên hệ để nhận bảng giá theo số lượng.</p>
    </div>
  </section>

  <section class="alt">
    <div class="wrap">
      <h3 class="related-title">Sản phẩm liên quan</h3>
      <div class="related-strip">
        ${related.map(r=>productCard(r,false)).join('')}
      </div>
    </div>
  </section>
  `;
}

/* ================== ROUTER ================== */
const app = document.getElementById('app');

function setActiveNav(name){
  document.querySelectorAll('nav.links a').forEach(a=>{
    a.classList.toggle('on', a.dataset.nav === name);
  });
}

function route(){
  const hash = location.hash.replace('#','') || 'home';
  const parts = hash.split('/');
  window.scrollTo(0,0);

  if(parts[0] === 'home' || parts[0] === ''){
    app.innerHTML = renderHome();
    setActiveNav('home');
  } else if(parts[0] === 'products'){
    app.innerHTML = renderProducts();
    setActiveNav('products');
    bindSearch();
  } else if(parts[0] === 'product' && parts[1]){
    app.innerHTML = renderProductDetail(parts[1]);
    setActiveNav('products');
  } else if(parts[0] === 'about'){
    app.innerHTML = renderHome();
    setActiveNav('about');
    setTimeout(()=>{ document.getElementById('about')?.scrollIntoView({behavior:'smooth'}); }, 30);
  } else if(parts[0] === 'contact'){
    app.innerHTML = renderHome();
    setActiveNav('contact');
    setTimeout(()=>{ document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}); }, 30);
  } else {
    app.innerHTML = renderHome();
    setActiveNav('home');
  }
  bindCardClicks();
}

function bindCardClicks(){
  document.querySelectorAll('[data-goto]').forEach(el=>{
    el.addEventListener('click', ()=>{ location.hash = el.dataset.goto; });
  });
}

function filteredCardsHTML(filter){
  const q = filter.trim().toLowerCase();
  const list = PRODUCTS.filter(p => !q || p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
  return list.length ? list.map(p=>productCard(p)).join('') : `<p style="grid-column:1/-1">Không tìm thấy sản phẩm phù hợp.</p>`;
}

function bindSearch(){
  const input = document.getElementById('searchInput');
  if(!input) return;
  input.addEventListener('input', (e)=>{
    const grid = document.getElementById('productGrid');
    grid.innerHTML = filteredCardsHTML(e.target.value);
    bindCardClicks();
  });
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);