const projects = [
  { number: "01", title: "Maia Hồ Tràm", type: "Resort film · CGI compositing", description: "Một nhịp kể khoáng đạt, nơi kiến trúc nghỉ dưỡng hòa vào đường chân trời và cảnh quan ven biển.", video: "/media/maia.mp4", poster: "/media/maia.jpg", tone: "sand" },
  { number: "02", title: "Noble Palace", type: "Architecture · Lifestyle series", description: "Chuỗi lát cắt giàu chi tiết về không gian sống, tiện ích và những trải nghiệm được thiết kế chỉn chu.", video: "/media/noble.mp4", poster: "/media/noble.jpg", tone: "forest" },
  { number: "03", title: "Andora City", type: "Property film · CGI showcase", description: "Một thế giới đô thị mới được mở ra bằng chuyển động điện ảnh, chiều sâu không gian và nhịp dựng dứt khoát.", video: "/media/andora.mp4", poster: "/media/andora.jpg", tone: "clay" },
  { number: "04", title: "An Maison", type: "Teaser · Brand launch", description: "Bản giới thiệu cô đọng, cân bằng giữa tinh thần thương hiệu và sức hút thị giác của một dự án mới.", video: "/media/an-maison.mp4", poster: "/media/an-maison.jpg", tone: "ink" },
  { number: "05", title: "Maison Stories", type: "Short-form · Visual narrative", description: "Những câu chuyện ngắn được xây bằng ánh sáng, chất liệu và chuyển động — vừa đủ để lưu lại một cảm giác.", video: "/media/maison.mp4", poster: "/media/maison.jpg", tone: "plum" },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="TAO Studio — về đầu trang">TAO<span>.</span></a>
        <nav aria-label="Điều hướng chính">
          <a href="#work">Dự án</a><a href="#about">Studio</a>
          <a className="nav-cta" href="#contact">Trao đổi dự án <Arrow /></a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-kicker reveal-up"><span>Visual direction</span><span>CGI · Film · Brand</span></div>
        <h1 id="hero-title" className="reveal-up delay-1">Kiến tạo hình ảnh<br />cho những không gian<br /><em>đáng sống.</em></h1>
        <div className="hero-media reveal-up delay-2">
          <img src="/media/maia.jpg" alt="Khung cảnh nghỉ dưỡng Maia Hồ Tràm" />
          <video autoPlay muted loop playsInline preload="metadata" poster="/media/maia.jpg" aria-hidden="true"><source src="/media/maia.mp4" type="video/mp4" /></video>
          <div className="hero-media-label"><span>Selected work</span><strong>Maia Hồ Tràm</strong></div>
          <div className="scroll-cue" aria-hidden="true">Kéo để khám phá <span>↓</span></div>
        </div>
      </section>

      <section className="manifesto" id="about" aria-labelledby="about-title">
        <p className="section-label">01 / Studio</p>
        <div className="manifesto-copy">
          <h2 id="about-title">Không chỉ mô tả một dự án.<br />Chúng tôi tạo ra <em>cảm giác</em> về nơi đó.</h2>
          <p>TAO phát triển ngôn ngữ hình ảnh cho bất động sản và hospitality — từ CGI, chuyển động đến phim thương hiệu. Mỗi khung hình được xây để biến không gian thành trải nghiệm, trước cả khi công trình hiện hữu.</p>
        </div>
        <div className="studio-notes" aria-label="Năng lực studio">
          <div><strong>05</strong><span>Bộ dự án chọn lọc</span></div>
          <div><strong>50+</strong><span>Cảnh phim &amp; thử nghiệm</span></div>
          <div><strong>03</strong><span>CGI · Film · Brand</span></div>
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="work-heading">
          <p className="section-label">02 / Selected work</p><h2 id="work-title">Dự án chọn lọc</h2>
          <p>Từ khu đô thị đến điểm đến nghỉ dưỡng — mỗi dự án có một nhịp kể riêng.</p>
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
        <p className="section-label">03 / Capabilities</p>
        <div className="services-grid">
          <h2 id="services-title">Từ ý tưởng đến khung hình cuối.</h2>
          <ol>
            <li><span>01</span> Creative &amp; Visual Direction</li><li><span>02</span> Architectural CGI</li>
            <li><span>03</span> Film &amp; Motion</li><li><span>04</span> Brand Launch Content</li>
          </ol>
        </div>
      </section>

      <footer id="contact">
        <div className="contact-copy">
          <p className="section-label">04 / Start a project</p><h2>Có một không gian<br />cần được <em>kể?</em></h2>
          <a href="mailto:?subject=Trao đổi dự án cùng TAO">Gửi brief dự án <Arrow /></a>
        </div>
        <div className="footer-bottom">
          <a className="wordmark wordmark-large" href="#top" aria-label="TAO Studio — về đầu trang">TAO<span>.</span></a>
          <div><span>Visual stories for spaces</span><span>Vietnam · 2026</span></div>
        </div>
      </footer>
    </main>
  );
}
