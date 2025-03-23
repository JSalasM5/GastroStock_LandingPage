import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Layout title="GastroStock" description="Optimiza tu inventario con IA">

      <style>
        {`
          html, body {
            overflow-x: hidden;
            max-width: 100%;
            width: 100%;
          }

          .container {
            max-width: 100%;
            width: 100%;
            box-sizing: border-box;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}
      </style>

      <header className={styles.hero} style={{ paddingTop: '100px', paddingBottom: '150px', backgroundImage: 'url(/img/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container" data-aos="fade-up" style={{ textAlign: 'center' }}>
          <img src="/GastroStock_LandingPage/img/logo_letras.png" alt="Logo Letras GastroStock" style={{ maxWidth: '100%', height: 'auto' }} />
          <h1>Almacén en orden, ¡cocina en marcha! 🍽️📦</h1>
          <p>Optimiza tu inventario, reduce desperdicios y aumenta tus beneficios con GastroStock.</p>
          <div className={styles.buttons}>
            <a className="button button--primary" href="#contact">Solicita una demo</a>
          </div>
        </div>
      </header>

      <section className={styles.features} style={{ backgroundColor: '#a92e4f', color: 'white', textAlign: 'center', padding: '120px 0' }}>
        <div className="container">
          <h2 data-aos="fade-right">¿Por qué elegir GastroStock? 🤔</h2>
          <div className={styles.grid} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
            {[
              { title: "IA Predictiva", text: "Anticípate a la demanda y optimiza compras con inteligencia artificial.", img: "/GastroStock_LandingPage/img/ia.jpg" },
              { title: "TPV Integrado", text: "Gestión de cobros y stock en un solo lugar.", img: "/GastroStock_LandingPage/img/tpv.jpg" },
              { title: "Alertas Inteligentes", text: "Recibe avisos antes de que te quedes sin ingredientes clave.", img: "/GastroStock_LandingPage/img/alerta.jpg" }
            ].map((feature, index) => (
              <div key={index} className={styles.feature} data-aos="fade-up" style={{ flex: '1 1 300px', textAlign: 'center' }}>
                <img src={feature.img} alt={feature.title} style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.team} style={{ backgroundColor: '#ffffff', textAlign: 'center', padding: '120px 0' }}>
        <div className="container" data-aos="fade-up">
          <h2>👨‍💼 Nuestro Equipo</h2>
          <p>Conoce a las personas que hacen posible GastroStock</p>
          <div className={styles.teamGrid} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginTop: '40px' }}>
            {[
              {
                title: 'Project Manager 👔', members: [
                  { name: 'Raúl Toro', role: '', img: '/GastroStock_LandingPage/img/team/raul.jpg' }
                ]
              },
              {
                title: 'Relaciones Públicas 📞', members: [
                  { name: 'Jesús Salas', role: 'TM', img: '/GastroStock_LandingPage/img/team/jesus.jpg' },
                  { name: 'Alonso Portillo', role: '', img: '/GastroStock_LandingPage/img/team/alonso.jpg' },
                  { name: 'Alexis Molins', role: '', img: '/GastroStock_LandingPage/img/team/alexis.jpg' }
                ]
              },
              {
                title: 'Android 📱', members: [
                  { name: 'Carlos Martín de Prado', role: 'TM', img: '/GastroStock_LandingPage/img/team/carlos.jpg' },
                  { name: 'Óscar Menéndez', role: '', img: '/GastroStock_LandingPage/img/team/oscar.jpg' },
                  { name: 'Lidia Jiménez', role: '', img: '/GastroStock_LandingPage/img/team/lidia.jpg' },
                  { name: 'Álvaro Ruiz', role: '', img: '/GastroStock_LandingPage/img/team/alvaro.jpg' }
                ]
              },
              {
                title: 'QA/Testing 🧪', members: [
                  { name: 'Julio Solís', role: 'TM', img: '/GastroStock_LandingPage/img/team/julio.jpg' },
                  { name: 'Mario Zambrano', role: '', img: '/GastroStock_LandingPage/img/team/mario.jpg' }
                ]
              },
              {
                title: 'FullStack 💻', members: [
                  { name: 'Alejandro Vargas', role: 'TM', img: '/GastroStock_LandingPage/img/team/alejandro.jpg' },
                  { name: 'José Miguel Iborra', role: '', img: '/GastroStock_LandingPage/img/team/josibocon.jpg' },
                  { name: 'Ibai Pérez', role: '', img: '/GastroStock_LandingPage/img/team/ibai.jpg' },
                  { name: 'Francisco Manuel Sabido', role: '', img: '/GastroStock_LandingPage/img/team/fran.jpg' },
                  { name: 'David Vicente', role: '', img: '/GastroStock_LandingPage/img/team/david.jpg' }
                ]
              },
              {
                title: 'Inteligencia Artificial 🤖', members: [
                  { name: 'Pablo Rufián', role: 'TM', img: '/GastroStock_LandingPage/img/team/pablo.jpg' },
                  { name: 'Rafael Molina', role: '', img: '/GastroStock_LandingPage/img/team/rafa.jpg' }
                ]
              }
            ].map((department, deptIndex) => (
              <div key={deptIndex} style={{ width: '100%', marginBottom: '40px' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{department.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginTop: '20px' }}>
                  {department.members.map((member, index) => (
                    <div key={index} className={styles.teamMember} style={{ width: '200px', textAlign: 'center' }}>
                      <img src={member.img} alt={member.name} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%' }} />
                      <h4>{member.name}</h4>
                      <p>{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.testimonials} style={{ backgroundColor: '#a92e4f', color: 'white', textAlign: 'center', padding: '120px 0' }}>
        <div className="container" data-aos="fade-left"
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '30px' }}>

          {/* Mascota arriba en móviles */}
          <img src="/GastroStock_LandingPage/img/mascota.png"
            alt="Mascota GastroStock"
            className={styles.mascota}
            style={{ width: '250px', maxWidth: '100%' }} />

          {/* Contenido de testimonios */}
          <div style={{ maxWidth: '600px' }}>
            <h2>Lo que dicen nuestros clientes ⭐</h2>

            <div className={styles.testimonial} style={{ marginTop: '20px' }}>
              <p>"Desde que usamos GastroStock, nuestro desperdicio ha bajado un 30% y siempre sabemos qué comprar."</p>
              <h4>- Restaurante La Parrilla</h4>
            </div>

            <div className={styles.testimonial} style={{ marginTop: '20px' }}>
              <p>"El TPV integrado nos ha ahorrado mucho tiempo y nos permite controlar las ventas y el stock en tiempo real."</p>
              <h4>- Bar El Buen Sabor</h4>
            </div>
          </div>

        </div>
      </section>

      <section className={styles.comparisonSection} style={{ backgroundColor: '#ffffff', textAlign: 'center', padding: '120px 0' }}>
        <div className="container" data-aos="fade-up">
          <h2>📊 ¿En qué se diferencia GastroStock?</h2>
          <p>Beneficios exclusivos que ofrecemos a nuestros clientes.</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', marginTop: '40px' }}>

            {/* GastroStock Beneficios */}
            <div style={{
              background: '#a92e4f',
              color: 'white',
              padding: '20px',
              borderRadius: '10px',
              width: '350px',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}>
              <h3>✅ GastroStock</h3>
              <ul style={{ listStyle: 'none', padding: '0' }}>
                <li>✔ IA predictiva</li>
                <li>✔ Alertas personalizadas e inteligentes</li>
                <li>✔ Control sobre el reabastecimiento y control de pérdidas</li>
                <li>✔ Predicción de oferta y demanda y planificación de pedidos</li>
              </ul>
            </div>

            {/* Otras soluciones */}
            <div style={{
              background: '#666',
              color: 'white',
              padding: '20px',
              borderRadius: '10px',
              width: '350px',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}>
              <h3>❌ Otras Soluciones</h3>
              <ul style={{ listStyle: 'none', padding: '0' }}>
                <li>✖ Sin IA predictiva</li>
                <li>✖ Alertas personalizadas, pero básicas</li>
                <li>✖ Sin control eficiente de pérdidas y reabastecimiento</li>
                <li>✖ No predicen la demanda ni ayudan a planificar pedidos</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className={styles.pricing} style={{ backgroundColor: '#a92e4f', color: 'white', textAlign: 'center', padding: '120px 0' }}>
        <div className="container" data-aos="fade-up">
          <h2>💰 Elige tu plan</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
            <div style={{ background: 'white', color: '#000', padding: '30px', borderRadius: '10px', width: '300px' }}>
              <h3>FREE</h3>
              <p>💵 Gratis</p>
              <p><strong>✔ Gestión de stock básico</strong> → Permite registrar manualmente entradas y salidas de productos, ayudando a controlar el inventario sin automatización.</p>
              <p><strong>✔ Gestión de la oferta y demanda básico</strong> → Ofrece estadísticas básicas sobre consumo y disponibilidad de productos sin predicción avanzada.</p>
              <p><strong>✔ Gestión de la base de datos básico</strong> → Permite almacenar y consultar información esencial sobre productos y proveedores con funcionalidades limitadas.</p>
            </div>
            <div style={{ background: 'white', color: '#000', padding: '30px', borderRadius: '10px', width: '300px' }}>
              <h3>PREMIUM</h3>
              <p>💵 25€/mes</p>
              <p><strong>✔ Gestión de stock con implementación de IA</strong> → Automatiza el control del inventario, reduciendo desperdicios y optimizando las compras basándose en patrones de consumo.</p>
              <p><strong>✔ Gestión de proveedores</strong> → Permite registrar múltiples proveedores, gestionar pedidos y recibir alertas sobre los mejores momentos para abastecerse.</p>
              <p><strong>✔ Mejora significativa de las funciones FREE</strong> → Incluye herramientas avanzadas como informes detallados y recomendaciones de compra basado en predicción, todo ello con la mejora y ayuda de nuestra IA para maximizar la automatización y la optimización.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.social} style={{ backgroundColor: '#ffffff', textAlign: 'center', padding: '120px 0' }}>
        <div className="container" data-aos="fade-up">
          <h2>¡Síguenos en redes sociales! 📱</h2>
          <p>Conéctate con nosotros en Instagram y TikTok para más novedades.</p>
          <div className={styles.qrContainer} style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            marginTop: '40px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img src="/GastroStock_LandingPage/img/qr_insta.png" alt="QR Instagram" className={styles.qr} style={{ width: '120px', maxWidth: '100%' }} />
              <div className={styles.qrArrow}>
                <svg width="50" height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10h40l-5-5m5 5l-5 5" stroke="black" strokeWidth="3" fill="none" />
                </svg>
              </div>
              <p>Instagram</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img src="/GastroStock_LandingPage/img/qr_tiktok.png" alt="QR TikTok" className={styles.qr} style={{ width: '120px', maxWidth: '100%' }} />
              <div className={styles.qrArrow}>
                <svg width="50" height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10h40l-5-5m5 5l-5 5" stroke="black" strokeWidth="3" fill="none" />
                </svg>
              </div>
              <p>TikTok</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contact} style={{ backgroundColor: '#a92e4f', color: 'white', textAlign: 'center', padding: '120px 0' }}>
        <div className="container" data-aos="fade-up">
          <h2>📩 ¿Tienes dudas? Contáctanos</h2>
          <form style={{ maxWidth: '500px', margin: '0 auto' }}>
            <input type="text" placeholder="Tu nombre" required style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
            <input type="email" placeholder="Tu correo" required style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
            <textarea placeholder="Tu mensaje" required style={{ width: '100%', padding: '10px', marginBottom: '10px' }}></textarea>
            <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Enviar</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}