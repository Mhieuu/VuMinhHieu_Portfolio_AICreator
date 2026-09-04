const projects = [
  { number: "01", title: "Maia Hồ Tràm", type: "Resort film / AI compositing", description: "Một nhịp kể khoáng đạt, nơi kiến trúc nghỉ dưỡng hòa vào đường chân trời và cảnh quan ven biển.", video: "/media/maia.mp4", poster: "/media/maia.jpg", year: "2025" },
  { number: "02", title: "Noble Palace", type: "Architecture / AI lifestyle series", description: "Chuỗi lát cắt giàu chi tiết về không gian sống, tiện ích và những trải nghiệm được thiết kế chỉn chu.", video: "/media/noble.mp4", poster: "/media/noble.jpg", year: "2025" },
  { number: "03", title: "Andora City", type: "Property film / AI showcase", description: "Một thế giới đô thị mới được mở ra bằng chuyển động điện ảnh, chiều sâu không gian và nhịp dựng dứt khoát.", video: "/media/andora.mp4", poster: "/media/andora.jpg", year: "2024" },
  { number: "04", title: "An Maison", type: "Teaser / Brand launch", description: "Bản giới thiệu cô đọng, cân bằng giữa tinh thần thương hiệu và sức hút thị giác của một dự án mới.", video: "/media/an-maison.mp4", poster: "/media/an-maison.jpg", year: "2024" },
  { number: "05", title: "Maison Stories", type: "Short-form / AI visual narrative", description: "Những câu chuyện ngắn được xây bằng ánh sáng, chất liệu và chuyển động — vừa đủ để lưu lại một cảm giác.", video: "/media/maison.mp4", poster: "/media/maison.jpg", year: "2024" },
];

const showcase = [
  { title: "Café arrival", project: "Noble Palace", slug: "noble-cafe" },
  { title: "Wellness ritual", project: "Noble Palace", slug: "noble-spa" },
  { title: "Living space", project: "Noble Palace", slug: "noble-interior" },
  { title: "Park journey", project: "Noble Palace", slug: "noble-park" },
  { title: "Coastal golf", project: "Maia Hồ Tràm", slug: "maia-golf" },
  { title: "Ocean frame", project: "Maia Hồ Tràm", slug: "maia-coast" },
  { title: "Resort landscape", project: "Maia Hồ Tràm", slug: "maia-landscape" },
  { title: "Maison Study 01", project: "Maison Stories", slug: "maison-01" },
  { title: "Maison Study 04", project: "Maison Stories", slug: "maison-04" },
  { title: "Maison Study 08", project: "Maison Stories", slug: "maison-08" },
  { title: "City vision", project: "Andora City", slug: "andora-cgi" },
  { title: "An Avenue", project: "An Maison", slug: "an-avenue" },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

function Arrow() { return <span aria-hidden="true">↗</span>; }
function Barcode({ light = false }: { light?: boolean }) { return <span className={`barcode${light ? " barcode-light" : ""}`} aria-hidden="true" />; }
function Scribble({ className = "" }: { className?: string }) {
  return <svg className={`scribble ${className}`} viewBox="0 0 190 88" aria-hidden="true"><path d="M5 63C38 26 76 15 117 22c28 5 53 19 66 37-27 17-71 24-116 19C34 74 13 65 5 51c20-18 63-29 109-25 26 2 48 11 62 24" /></svg>;
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Vũ Minh Hiếu — về đầu trang">VMH<span>®</span></a>
        <nav aria-label="Điều hướng chính"><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></nav>
        <a className="header-contact" href="mailto:?subject=Trao đổi dự án cùng Vũ Minh Hiếu">Let&apos;s talk <Arrow /></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="portfolio-rail" aria-hidden="true">PORTFOLIO</div>
        <div className="hero-meta"><span>AI image / Film / Motion</span><Barcode light /><span>Vietnam · 2026</span></div>
        <div className="hero-title-wrap">
          <p>Independent AI creator</p>
          <h1 id="hero-title">VŨ MINH<br /><span>HIẾU</span></h1>
          <p className="hero-role">Visual direction<br />&amp; film production</p>
        </div>
        <div className="hero-collage" aria-label="Hình ảnh nổi bật từ portfolio">
          <div className="hero-frame hero-frame-main"><img src={asset("/media/maia.jpg")} alt="Khung cảnh dự án Maia Hồ Tràm" /><video autoPlay muted loop playsInline preload="metadata" poster={asset("/media/maia.jpg")} aria-hidden="true"><source src={asset("/media/maia.mp4")} type="video/mp4" /></video></div>
          <div className="hero-frame hero-frame-strip"><img src={asset("/media/showcase/noble-interior.jpg")} alt="Không gian nội thất Noble Palace" /></div>
          <div className="hero-frame hero-frame-small"><img src={asset("/media/showcase/maison-04.jpg")} alt="Khung hình Maison Stories" /></div>
          <span className="acid-block acid-block-one" aria-hidden="true" /><span className="acid-block acid-block-two" aria-hidden="true" /><Scribble className="hero-scribble" />
        </div>
        <div className="hero-bottom"><span>Selected works</span><span>2024—2026</span><a href="#index">Scroll to index ↓</a></div>
      </section>

      <section className="index-panel" id="index" aria-labelledby="index-title">
        <div className="index-image"><img src={asset("/media/showcase/andora-cgi.jpg")} alt="Toàn cảnh kiến trúc dự án Andora City" /><div className="index-stamp"><h2 id="index-title">INDEX</h2><Scribble /></div><Barcode /></div>
        <div className="index-grid">
          <a href="#about"><span>01.</span><strong>About me</strong><small>Approach &amp; practice</small></a>
          <a href="#work"><span>02.</span><strong>Selected work</strong><small>Five case studies</small></a>
          <a href="#frames"><span>03.</span><strong>Visual frames</strong><small>Experiments &amp; details</small></a>
          <a href="#services"><span>04.</span><strong>Capabilities</strong><small>End-to-end creation</small></a>
          <a href="#contact"><span>05.</span><strong>Contact</strong><small>Start a project</small></a>
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <div className="section-topline"><span>01 / About</span><Barcode light /><span>Creator profile</span></div>
        <div className="about-copy"><p className="eyebrow">Storytelling beyond the prompt</p><h2 id="about-title">TÔI TẠO RA<br />NHỮNG KHUNG HÌNH<br /><span>CÓ CẢM GIÁC.</span></h2><p className="about-body">Tôi là Vũ Minh Hiếu — AI Creator làm việc đa lĩnh vực, từ thương hiệu, sản phẩm và thời trang đến kiến trúc, hospitality và văn hóa thị giác. Tôi kết hợp AI với visual direction, compositing và motion để mỗi ý tưởng không chỉ được nhìn thấy, mà còn được cảm nhận.</p></div>
        <div className="about-visuals">
          <figure className="about-image about-image-large"><img src={asset("/media/showcase/noble-park.jpg")} alt="Khung cảnh điện ảnh trong dự án Noble Palace" /></figure>
          <figure className="about-image about-image-small"><img src={asset("/media/showcase/maia-coast.jpg")} alt="Không gian ven biển Maia Hồ Tràm" /></figure>
          <div className="about-note"><span>05</span><p>Bộ dự án<br />chính</p></div><Scribble className="about-scribble" />
        </div>
        <div className="about-stats"><div><strong>50+</strong><span>Frames &amp; experiments</span></div><div><strong>01</strong><span>Creator · End-to-end</span></div><div><strong>∞</strong><span>Visual possibilities</span></div></div>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="work-intro"><div><span>02 / Selected work</span><span>Film production</span></div><h2 id="work-title">PROJECT<br /><span>ARCHIVE</span></h2><p>Năm bộ dự án thể hiện cách tôi xây dựng một ngôn ngữ hình ảnh xuyên suốt — từ ý tưởng, không khí đến chuyển động cuối.</p></div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className={`project project-${index + 1}`} key={project.title}>
              <div className="project-media"><img src={asset(project.poster)} alt={`Hình ảnh dự án ${project.title}`} loading="lazy" /><video autoPlay muted loop playsInline preload="none" poster={asset(project.poster)} aria-hidden="true"><source src={asset(project.video)} type="video/mp4" /></video><span className="project-number">{project.number}</span><span className="project-year">{project.year}</span></div>
              <div className="project-copy"><p>{project.type}</p><h3>{project.title}</h3><Scribble /><p className="project-description">{project.description}</p><span className="project-action">View motion <Arrow /></span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="frames" id="frames" aria-labelledby="frames-title">
        <div className="frames-heading"><p>03 / Visual frames</p><h2 id="frames-title">A VISUAL<br />CONTACT SHEET</h2><p>Những lát cắt nhỏ từ quá trình thử nghiệm ánh sáng, chất liệu, không gian và nhịp kể.</p></div>
        <div className="frame-grid">
          {showcase.map((item, index) => (
            <figure className={`frame-card frame-${(index % 6) + 1}`} key={item.slug}><img src={asset(`/media/showcase/${item.slug}.jpg`)} alt={`${item.title} — ${item.project}`} loading="lazy" /><video autoPlay muted loop playsInline preload="none" poster={asset(`/media/showcase/${item.slug}.jpg`)} aria-hidden="true"><source src={asset(`/media/showcase/${item.slug}.mp4`)} type="video/mp4" /></video><figcaption><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong><small>{item.project}</small></figcaption></figure>
          ))}
        </div>
      </section>

      <section className="services" id="services" aria-labelledby="services-title">
        <div className="section-topline"><span>04 / Capabilities</span><Barcode /><span>Creative process</span></div>
        <div className="services-layout"><div><p className="eyebrow">From idea to final frame</p><h2 id="services-title">MỘT CREATOR.<br /><span>TRỌN HÀNH TRÌNH.</span></h2></div><ol><li><span>01</span><strong>AI Visual Development</strong><small>Concept · Look development</small></li><li><span>02</span><strong>Creative Direction</strong><small>Story · Art direction</small></li><li><span>03</span><strong>Image, Film &amp; Motion</strong><small>Production · Animation</small></li><li><span>04</span><strong>Compositing &amp; Finishing</strong><small>Polish · Delivery</small></li></ol></div>
      </section>

      <footer id="contact"><div className="footer-rail" aria-hidden="true">PORTFOLIO</div><div className="footer-content"><p>05 / Start a project</p><h2>LET&apos;S MAKE<br /><span>SOMETHING</span><br />UNEXPECTED.</h2><a href="mailto:?subject=Trao đổi dự án cùng Vũ Minh Hiếu">Gửi brief cho Hiếu <Arrow /></a><div className="footer-meta"><span>Vũ Minh Hiếu · AI Creator</span><Barcode light /><span>Vietnam · 2026</span></div></div></footer>
    </main>
  );
}
