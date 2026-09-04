const films = [
  { number: "01", title: "Sơn Phúc Andora City", project: "Andora City", type: "Project overview film", duration: "04:24", driveId: "1ELRKwEJSYtOc0WX42fgpQwK-9aPIKYBa" },
  { number: "02", title: "Tà Xùa Cloud Village", project: "Cloud Village", type: "Brand & destination film", duration: "07:03", driveId: "1u6Xg3mtJOOEDAmL43h2e-YirR35VBecP" },
  { number: "03", title: "An Avenue", project: "An Maison", type: "AI visual film", duration: "01:00", driveId: "1vEKMpElKsPdDGDj7eEUzXaxUuesj7lHt" },
  { number: "04", title: "An Royale", project: "An Maison", type: "AI visual film", duration: "01:00", driveId: "1OvAlgHkeVfXDrX6CpLhOg75JXfLho6SR" },
  { number: "05", title: "An Garden", project: "An Maison", type: "AI visual film", duration: "01:00", driveId: "1RzLHwvQ6CinnmJ0Tn9LnM6uv0KHvYy-D" },
  { number: "06", title: "The First Lounge", project: "An Maison", type: "Lifestyle film", duration: "00:56", driveId: "1Nk17jCGT15cVxSB-kEyZ1coKt2Gb_Xm3" },
  { number: "07", title: "An Maison Teaser", project: "An Maison", type: "Brand teaser", duration: "00:34", driveId: "1IQ3g3FtxyFYvzAfnLQOnhK6FE1YiU9tn" },
  { number: "08", title: "Maia Hồ Tràm", project: "Maia Resort", type: "Campaign film", duration: "00:52", driveId: "1_bem_pQETI3eR-n3V7UdbDG8VuEHOKwM" },
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
        <nav aria-label="Điều hướng chính"><a href="#about">About</a><a href="#work">Films</a><a href="#contact">Contact</a></nav>
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
          <div className="hero-frame hero-frame-main"><img src={asset("/media/maia.jpg")} alt="Khung cảnh dự án Maia Hồ Tràm" /></div>
          <div className="hero-frame hero-frame-strip"><img src={asset("/media/showcase/noble-interior.jpg")} alt="Không gian nội thất Noble Palace" /></div>
          <div className="hero-frame hero-frame-small"><img src={asset("/media/showcase/maison-04.jpg")} alt="Khung hình Maison Stories" /></div>
          <span className="acid-block acid-block-one" aria-hidden="true" /><span className="acid-block acid-block-two" aria-hidden="true" /><Scribble className="hero-scribble" />
        </div>
        <div className="hero-bottom"><span>Selected films</span><span>Only works over 30 seconds</span><a href="#index">Scroll to index ↓</a></div>
      </section>

      <section className="index-panel" id="index" aria-labelledby="index-title">
        <div className="index-image"><img src={asset("/media/showcase/andora-cgi.jpg")} alt="Toàn cảnh kiến trúc dự án Andora City" /><div className="index-stamp"><h2 id="index-title">INDEX</h2><Scribble /></div><Barcode /></div>
        <div className="index-grid">
          <a href="#about"><span>01.</span><strong>About me</strong><small>Approach &amp; practice</small></a>
          <a href="#work"><span>02.</span><strong>Selected films</strong><small>8 completed works</small></a>
          <a href="#services"><span>03.</span><strong>Capabilities</strong><small>End-to-end creation</small></a>
          <a href="#contact"><span>04.</span><strong>Contact</strong><small>Start a project</small></a>
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <div className="section-topline"><span>01 / About</span><Barcode light /><span>Creator profile</span></div>
        <div className="about-copy"><p className="eyebrow">Storytelling beyond the prompt</p><h2 id="about-title">TÔI TẠO RA<br />NHỮNG KHUNG HÌNH<br /><span>CÓ CẢM GIÁC.</span></h2><p className="about-body">Tôi là Vũ Minh Hiếu — AI Creator làm việc đa lĩnh vực, từ thương hiệu, sản phẩm và thời trang đến kiến trúc, hospitality và văn hóa thị giác. Tôi kết hợp AI với visual direction, compositing và motion để mỗi ý tưởng không chỉ được nhìn thấy, mà còn được cảm nhận.</p></div>
        <div className="about-visuals">
          <figure className="about-image about-image-large"><img src={asset("/media/showcase/noble-park.jpg")} alt="Khung cảnh điện ảnh trong dự án Noble Palace" /></figure>
          <figure className="about-image about-image-small"><img src={asset("/media/showcase/maia-coast.jpg")} alt="Không gian ven biển Maia Hồ Tràm" /></figure>
          <div className="about-note"><span>08</span><p>Phim<br />được chọn</p></div><Scribble className="about-scribble" />
        </div>
        <div className="about-stats"><div><strong>08</strong><span>Selected films</span></div><div><strong>30s+</strong><span>Minimum duration</span></div><div><strong>∞</strong><span>Visual possibilities</span></div></div>
      </section>

      <section className="films" id="work" aria-labelledby="work-title">
        <div className="films-intro">
          <div><span>02 / Selected films</span><span>Curated long-form work</span></div>
          <h2 id="work-title">FILM<br /><span>SELECTION</span></h2>
          <p>Một tuyển chọn gọn và có chủ đích: chỉ những video hoàn chỉnh dài từ 30 giây trở lên, được sắp theo nhịp xem rõ ràng thay vì trải dàn như một thư viện clip.</p>
        </div>
        <div className="film-grid">
          {films.map((film, index) => (
            <article className={`film-card film-card-${index + 1}`} key={film.driveId}>
              <div className="film-player">
                <iframe src={`https://drive.google.com/file/d/${film.driveId}/preview`} title={`${film.title} — ${film.duration}`} loading="lazy" allow="autoplay; fullscreen" allowFullScreen />
                <span className="film-number">{film.number}</span>
              </div>
              <div className="film-caption">
                <div><p>{film.project}</p><h3>{film.title}</h3></div>
                <div><span>{film.type}</span><strong>{film.duration}</strong></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="services" aria-labelledby="services-title">
        <div className="section-topline"><span>03 / Capabilities</span><Barcode /><span>Creative process</span></div>
        <div className="services-layout"><div><p className="eyebrow">From idea to final frame</p><h2 id="services-title">MỘT CREATOR.<br /><span>TRỌN HÀNH TRÌNH.</span></h2></div><ol><li><span>01</span><strong>AI Visual Development</strong><small>Concept · Look development</small></li><li><span>02</span><strong>Creative Direction</strong><small>Story · Art direction</small></li><li><span>03</span><strong>Image, Film &amp; Motion</strong><small>Production · Animation</small></li><li><span>04</span><strong>Compositing &amp; Finishing</strong><small>Polish · Delivery</small></li></ol></div>
      </section>

      <footer id="contact"><div className="footer-rail" aria-hidden="true">PORTFOLIO</div><div className="footer-content"><p>04 / Start a project</p><h2>LET&apos;S MAKE<br /><span>SOMETHING</span><br />UNEXPECTED.</h2><a href="mailto:?subject=Trao đổi dự án cùng Vũ Minh Hiếu">Gửi brief cho Hiếu <Arrow /></a><div className="footer-meta"><span>Vũ Minh Hiếu · AI Creator</span><Barcode light /><span>Vietnam · 2026</span></div></div></footer>
    </main>
  );
}
