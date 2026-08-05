const projects = [
  { number: "01", title: "Maia Hồ Tràm", type: "Resort film · AI compositing", description: "Một nhịp kể khoáng đạt, nơi kiến trúc nghỉ dưỡng hòa vào đường chân trời và cảnh quan ven biển.", video: "/media/maia.mp4", poster: "/media/maia.jpg", tone: "sand" },
  { number: "02", title: "Noble Palace", type: "Architecture · AI lifestyle series", description: "Chuỗi lát cắt giàu chi tiết về không gian sống, tiện ích và những trải nghiệm được thiết kế chỉn chu.", video: "/media/noble.mp4", poster: "/media/noble.jpg", tone: "forest" },
  { number: "03", title: "Andora City", type: "Property film · AI showcase", description: "Một thế giới đô thị mới được mở ra bằng chuyển động điện ảnh, chiều sâu không gian và nhịp dựng dứt khoát.", video: "/media/andora.mp4", poster: "/media/andora.jpg", tone: "clay" },
  { number: "04", title: "An Maison", type: "Teaser · Brand launch", description: "Bản giới thiệu cô đọng, cân bằng giữa tinh thần thương hiệu và sức hút thị giác của một dự án mới.", video: "/media/an-maison.mp4", poster: "/media/an-maison.jpg", tone: "ink" },
  { number: "05", title: "Maison Stories", type: "Short-form · AI visual narrative", description: "Những câu chuyện ngắn được xây bằng ánh sáng, chất liệu và chuyển động — vừa đủ để lưu lại một cảm giác.", video: "/media/maison.mp4", poster: "/media/maison.jpg", tone: "plum" },
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

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Vũ Minh Hiếu — về đầu trang">VŨ MINH HIẾU<span>.</span></a>
        <nav aria-label="Điều hướng chính">
          <a href="#work">Dự án</a><a href="#about">Về tôi</a>
          <a className="nav-cta" href="#contact">Trao đổi dự án <Arrow /></a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-kicker reveal-up"><span>Independent AI Creator</span><span>Architecture · Lifestyle · Motion</span></div>
        <h1 id="hero-title" className="reveal-up delay-1">Vũ Minh Hiếu<br /><em>AI Creator.</em></h1>
        <p className="hero-intro reveal-up delay-1">Tạo nên những thế giới thị giác giàu cảm xúc bằng AI, chuyển động và tư duy điện ảnh.</p>
        <div className="hero-media reveal-up delay-2">
          <img src="/media/maia.jpg" alt="Khung cảnh nghỉ dưỡng do Vũ Minh Hiếu thực hiện" />
          <video autoPlay muted loop playsInline preload="metadata" poster="/media/maia.jpg" aria-hidden="true"><source src="/media/maia.mp4" type="video/mp4" /></video>
          <div className="hero-media-label"><span>Featured visual</span><strong>Maia Hồ Tràm</strong></div>
          <div className="scroll-cue" aria-hidden="true">Khám phá portfolio <span>↓</span></div>
        </div>
      </section>

      <section className="manifesto" id="about" aria-labelledby="about-title">
        <p className="section-label">01 / About</p>
        <div className="manifesto-copy">
          <h2 id="about-title">Tôi biến ý tưởng thành<br />những khung hình <em>có cảm giác.</em></h2>
          <p>Tôi là Vũ Minh Hiếu — AI Creator tập trung vào bất động sản, hospitality và lifestyle. Tôi kết hợp công cụ AI với visual direction, compositing và motion để tạo ra hình ảnh có thể kể chuyện, truyền tải không khí và giúp một dự án được cảm nhận trước khi nó hiện hữu.</p>
        </div>
        <div className="studio-notes" aria-label="Portfolio của Vũ Minh Hiếu">
          <div><strong>05</strong><span>Bộ dự án chính</span></div>
          <div><strong>50+</strong><span>Cảnh phim &amp; thử nghiệm</span></div>
          <div><strong>01</strong><span>AI Creator · End-to-end</span></div>
        </div>
      </section>

      <section className="visual-feed" aria-labelledby="feed-title">
        <div className="feed-heading"><p className="section-label">02 / Visual feed</p><h2 id="feed-title">Nhiều hơn một<br /><em>khung hình.</em></h2><p>Một dòng chuyển động liên tục từ các dự án, thử nghiệm và thế giới hình ảnh tôi đã tạo ra.</p></div>
        <div className="feed-grid">
          {showcase.map((item, index) => (
            <article className={`feed-card feed-card-${(index % 6) + 1}`} key={item.slug}>
              <img src={`/media/showcase/${item.slug}.jpg`} alt={`${item.title} — ${item.project}`} loading="lazy" />
              <video autoPlay muted loop playsInline preload="none" poster={`/media/showcase/${item.slug}.jpg`} aria-hidden="true"><source src={`/media/showcase/${item.slug}.mp4`} type="video/mp4" /></video>
              <div className="feed-caption"><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{item.title}</strong><small>{item.project}</small></div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="work-heading">
          <p className="section-label">03 / Case studies</p><h2 id="work-title">Dự án chọn lọc</h2>
          <p>Năm bộ dự án cho thấy cách tôi phát triển một ngôn ngữ hình ảnh xuyên suốt — từ ý tưởng đến chuyển động cuối.</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className={`project ${index % 2 ? "project-reverse" : ""}`} key={project.title}>
              <div className={`project-media tone-${project.tone}`}>
                <img src={project.poster} alt={`Hình ảnh dự án ${project.title}`} loading="lazy" />
                <video autoPlay muted loop playsInline preload="none" poster={project.poster} aria-hidden="true"><source src={project.video} type="video/mp4" /></video>
                <span className="project-index">{project.number}</span>
              </div>
              <div className="project-copy">
                <p>{project.type}</p><h3>{project.title}</h3><div className="project-rule" />
                <p className="project-description">{project.description}</p>
                <span className="project-link" aria-hidden="true">Xem chuyển động <Arrow /></span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services" aria-labelledby="services-title">
        <p className="section-label">04 / Capabilities</p>
        <div className="services-grid">
          <h2 id="services-title">Một creator.<br />Trọn hành trình.</h2>
          <ol>
            <li><span>01</span> AI Visual Development</li><li><span>02</span> Creative &amp; Visual Direction</li>
            <li><span>03</span> Image, Film &amp; Motion</li><li><span>04</span> Compositing &amp; Finishing</li>
          </ol>
        </div>
      </section>

      <footer id="contact">
        <div className="contact-copy">
          <p className="section-label">05 / Start a project</p><h2>Cùng tạo nên<br />một thế giới <em>mới.</em></h2>
          <a href="mailto:?subject=Trao đổi dự án cùng Vũ Minh Hiếu">Gửi brief cho Hiếu <Arrow /></a>
        </div>
        <div className="footer-bottom">
          <a className="wordmark wordmark-large" href="#top" aria-label="Vũ Minh Hiếu — về đầu trang">MINH HIẾU<span>.</span></a>
          <div><span>AI Creator</span><span>Vietnam · 2026</span></div>
        </div>
      </footer>
    </main>
  );
}
