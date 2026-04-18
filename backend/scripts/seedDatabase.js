require('dotenv').config();
const mongoose = require('mongoose');
const Article = require('../models/Article');

const articles = [

  // ── ONBOARDING ──────────────────────────────────────────────────

  {
    title: 'Bienvenida y Sueño Mexicano',
    slug: 'bienvenida-sueno-mexicano',
    section: 'onboarding',
    subsection: null,
    order: 1,
    tags: ['bienvenida', 'onboarding', 'sueño mexicano', 'estados unidos', 'mercado'],
    content: `
<p>En Estados Unidos viven más de <strong>60 millones de latinos</strong> que sueñan con poseer una propiedad de retiro y patrimonio. El mercado potencial es GIGANTE.</p>

<div class="data-card">
  <span class="data-card-title">¿Por qué invertir en México?</span>
  <p>Diversificar tu portafolio de inversiones es clave; y cuando de bienes raíces se trata, la ubicación lo es todo: <strong>Ubicación, Ubicación, Ubicación.</strong></p>
</div>

<div class="stats-grid">
  <div class="stat-item">
    <span class="stat-value gold">+60M</span>
    <span class="stat-label">Latinos en USA con potencial de compra</span>
  </div>
  <div class="stat-item">
    <span class="stat-value gold">+1M</span>
    <span class="stat-label">Americanos con propiedades en México</span>
  </div>
  <div class="stat-item">
    <span class="stat-value gold">2025</span>
    <span class="stat-label">Año récord de personas que cumplen 65 años en USA</span>
  </div>
</div>

<p>México es el <strong>principal socio comercial de Estados Unidos</strong>. Además de fronteras compartimos culturas. La economía mexicana ha tenido crecimiento estable los últimos diez años debido al aumento en inversión extranjera, mercado sólido interno, tasas bajas de desempleo y remesas en aumento.</p>

<div class="note-box">
  México se ha convertido en el <strong>socio manufacturero y tecnológico número uno</strong> de Estados Unidos.
</div>
`
  },

  {
    title: 'Presencia de Ciudad Maderas',
    slug: 'presencia-ciudad-maderas',
    section: 'onboarding',
    subsection: null,
    order: 2,
    tags: ['presencia', 'oficinas', 'México', 'USA', 'desarrollos', 'ciudades'],
    content: `
<div class="two-col-grid">
  <div class="data-card">
    <span class="data-card-title">Estados Unidos de América</span>
    <ul>
      <li>San Diego, California</li>
      <li>Houston, Texas</li>
      <li>Miami, Florida</li>
    </ul>
  </div>
  <div class="data-card">
    <span class="data-card-title">México — Desarrollos activos</span>
    <ul>
      <li>Monterrey · Aguascalientes · Puebla</li>
      <li>Querétaro · San Luis Potosí · Cancún</li>
      <li>Mérida · Guanajuato</li>
    </ul>
  </div>
</div>

<h3>Oficinas Regionales</h3>
<table>
  <thead><tr><th>Ciudad</th><th>Dirección</th></tr></thead>
  <tbody>
    <tr><td><strong>Houston</strong></td><td>1801 Main Street, Suite 1210 ZC 7700, USA<br>1395 SW 134TH AVE SUITE 206 ZC 33186</td></tr>
    <tr><td><strong>San Diego</strong></td><td>651 Palomar St # 17, Chula Vista, CA 91911, USA</td></tr>
    <tr><td><strong>Miami</strong></td><td>2001 NW 107th Ave, Suite 450. Doral, FL, 33172, USA</td></tr>
    <tr><td><strong>Tijuana</strong></td><td>Boulevard Salinas 10650, Col Aviación CP 22010</td></tr>
    <tr><td><strong>Monterrey</strong></td><td>Calz. del Valle 406, Del Valle, 66220 San Pedro Garza García, N.L.</td></tr>
    <tr><td><strong>Chicago</strong></td><td>5129 W Fullerton Ave, Chicago, IL 60639, USA</td></tr>
  </tbody>
</table>
`
  },

  {
    title: 'Qué producto vamos a vender',
    slug: 'que-producto-vender',
    section: 'onboarding',
    subsection: null,
    order: 3,
    tags: ['producto', 'lotes', 'residencial', 'comercial', 'casas', 'inventario', 'plusvalía', 'family club'],
    content: `
<p>Nuestra misión es llevar la oportunidad del crecimiento patrimonial a todos. Sin importar el historial crediticio, <strong>todas las familias deberían poder ser dueñas de una propiedad.</strong></p>

<div class="note-box">
  En Ciudad Maderas construimos "ciudades" en regiones estratégicas del país. Desde lanzamiento a entrega, los clientes obtienen <strong>plusvalías promedio del 93% en 36 meses.</strong>
</div>

<h3>Nuestros Tres Productos</h3>

<div class="data-card">
  <span class="data-card-title">1 · Lotes Residenciales Premium</span>
  <p>El <strong>90% del inventario</strong>. Servicios a pie de calle, vialidades, calles adoquinadas, accesos con seguridad 24/7 y amenidades estilo "Resort". Poca competencia por la alta inversión de urbanización requerida.</p>
</div>

<div class="data-card">
  <span class="data-card-title">2 · Lotes Comerciales y de Usos Mixtos</span>
  <p>El <strong>5% del inventario</strong>. Para entretenimiento, gastronomía y servicios. Potencial de rentas por locales comerciales o departamentos (hasta 3 pisos de usos mixtos).</p>
  <div class="stats-grid">
    <div class="stat-item">
      <span class="stat-value gold">$900</span>
      <span class="stat-label">USD / mes promedio del cliente</span>
    </div>
  </div>
</div>

<div class="data-card">
  <span class="data-card-title">3 · Casas de Nivel Medio Residencial</span>
  <p>Modelos <strong>Aura</strong> y <strong>Stella</strong>. Preventa en etapa muy temprana. Tiempos de entrega de 3 a 4 años. Financiamiento directo hasta 20 años. Ideal para destinos turísticos como Cancún y Mérida con renta garantizada (Airbnb).</p>
  <div class="stats-grid">
    <div class="stat-item">
      <span class="stat-value gold">$950</span>
      <span class="stat-label">USD / mes promedio del cliente</span>
    </div>
  </div>
</div>

<div class="data-card">
  <span class="data-card-title">Family Club — Amenidad Insignia</span>
  <p>Más de <strong>20 amenidades</strong> para toda la familia: alberca semiolímpica, canchas de tenis, básquetbol y fútbol, gimnasio, salón de fiestas y muchas más.</p>
</div>

<div class="stats-grid">
  <div class="stat-item">
    <span class="stat-value gold">40+</span>
    <span class="stat-label">Años de experiencia</span>
  </div>
  <div class="stat-item">
    <span class="stat-value gold">50,000+</span>
    <span class="stat-label">Lotes urbanizados</span>
  </div>
  <div class="stat-item">
    <span class="stat-value gold">31</span>
    <span class="stat-label">Desarrollos inmobiliarios</span>
  </div>
  <div class="stat-item">
    <span class="stat-value gold">100,000+</span>
    <span class="stat-label">Clientes</span>
  </div>
</div>
`
  },

  {
    title: 'Ventajas competitivas de Ciudad Maderas',
    slug: 'ventajas-competitivas',
    section: 'onboarding',
    subsection: null,
    order: 4,
    tags: ['ventajas', 'competitivas', 'diferenciadores', 'comisiones', 'pagos', 'dólares', 'crédito'],
    content: `
<p>Lo que nos distingue de cualquier otro desarrollador mexicano:</p>

<div class="data-card">
  <span class="data-card-title">Nuestras 7 Ventajas Competitivas</span>
  <ol>
    <li>Somos el <strong>único desarrollador mexicano</strong> con oficinas de atención fijas en USA en la costa oeste, centro y costa este.</li>
    <li>Aceptamos <strong>pagos con tarjetas de crédito y débito americanas</strong> en nuestro sitio web, ligas de pago y terminales físicas.</li>
    <li>Pagamos <strong>comisiones en dólares</strong> directo en tu cuenta bancaria americana, una vez por mes.</li>
    <li>Damos <strong>crédito a todos tus clientes extranjeros</strong> — varios planes de enganches, hasta 30 años, sin avales, sin revisión ni impacto en historial de crédito (FICO Score).</li>
    <li><strong>Track record de 40 años</strong> desarrollando, con miles de clientes satisfechos y lotes urbanizados.</li>
    <li>Tus clientes pueden <strong>viajar a conocer físicamente</strong> los desarrollos y ver su inversión.</li>
    <li><strong>Servicio de post-venta</strong> por teléfono y WhatsApp a clientes extranjeros.</li>
  </ol>
</div>
`
  },

  {
    title: 'Qué necesito para comenzar a vender',
    slug: 'como-comenzar-a-vender',
    section: 'onboarding',
    subsection: null,
    order: 5,
    tags: ['comenzar', 'requisitos', 'alta', 'asesor', 'capacitación', 'primera venta'],
    content: `
<div class="data-card">
  <span class="data-card-title">Requisitos para comenzar</span>
  <ul>
    <li><strong>Visión de crecimiento.</strong> Lo que más buscamos es compromiso para crecer juntos a largo plazo.</li>
    <li><strong>No requieres licencia</strong> de bienes raíces en México ni en USA para promover propiedades en MX.</li>
    <li>Tu <strong>primera venta activa tu cuenta</strong> de Agente de Ventas.</li>
    <li>Llevar a cabo la <strong>primera capacitación</strong> (videollamada o Universidad Maderas).</li>
  </ul>
</div>

<h3>Para darte de alta necesitas:</h3>
<div class="stats-grid">
  <div class="stat-item">
    <span class="stat-value">ID</span>
    <span class="stat-label">Identificación oficial vigente</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">$</span>
    <span class="stat-label">Cuenta bancaria</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">@</span>
    <span class="stat-label">Correo electrónico</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">Tel</span>
    <span class="stat-label">Teléfono celular</span>
  </div>
</div>
`
  },

  {
    title: 'Esquema de comisiones',
    slug: 'esquema-de-comisiones',
    section: 'onboarding',
    subsection: null,
    order: 6,
    tags: ['comisiones', 'asesor', 'team leader', 'gerente', 'porcentaje', 'ingreso', 'dólares'],
    content: `
<p>En Estados Unidos contratamos bajo el modelo de <strong>Independent Contractors</strong> con comisiones fijas estipuladas en contrato.</p>

<div class="data-card">
  <span class="data-card-title">Porcentajes Base</span>
  <div class="stats-grid">
    <div class="stat-item">
      <span class="stat-value gold">5%</span>
      <span class="stat-label">Agentes de Ventas</span>
    </div>
    <div class="stat-item">
      <span class="stat-value gold">2%</span>
      <span class="stat-label">Team Leader</span>
    </div>
    <div class="stat-item">
      <span class="stat-value gold">2%</span>
      <span class="stat-label">Gerentes de Ventas</span>
    </div>
  </div>
</div>

<h3>Arranque Rápido — Proyección mensual</h3>
<table>
  <thead>
    <tr><th>Concepto</th><th>Mes 1</th><th>Mes 2</th><th>Mes 3+</th></tr>
  </thead>
  <tbody>
    <tr><td>Prospectos</td><td>50</td><td>50</td><td>50</td></tr>
    <tr><td>Citas</td><td>10</td><td>10</td><td>10</td></tr>
    <tr><td>Ventas</td><td>2</td><td>2</td><td>3</td></tr>
    <tr><td>Producción mensual</td><td>$110,000 USD</td><td>$190,000 USD</td><td>$200,000 USD</td></tr>
    <tr class="highlight-row"><td><strong>Comisión Total</strong></td><td><strong>$5,500 USD</strong></td><td><strong>$9,500 USD</strong></td><td><strong>$10,000 USD</strong></td></tr>
  </tbody>
</table>

<h3>Team Leader — Replica tu éxito</h3>
<table>
  <thead>
    <tr><th>Etapa</th><th>Agentes</th><th>Producción mensual</th><th>Comisión</th></tr>
  </thead>
  <tbody>
    <tr><td>Mes 1–4</td><td>5</td><td>$500,000 USD</td><td class="gold-text">$10,000 USD</td></tr>
    <tr><td>Mes 4–8</td><td>8</td><td>$750,000 USD</td><td class="gold-text">$15,000 USD</td></tr>
    <tr><td>Mes 8+</td><td>10</td><td>$1,000,000 USD</td><td class="gold-text">$20,000 USD</td></tr>
  </tbody>
</table>

<h3>Gerente de Ventas — Construye un Imperio</h3>
<table>
  <thead>
    <tr><th>Etapa</th><th>Agentes en gerencia</th><th>Producción</th><th>Comisión</th></tr>
  </thead>
  <tbody>
    <tr><td>Mes 1–4</td><td>50</td><td>$1,000,000 USD</td><td class="gold-text">$20,000 USD</td></tr>
    <tr><td>Mes 4+</td><td>80</td><td>$1,500,000 USD</td><td class="gold-text">$30,000 USD</td></tr>
  </tbody>
</table>

<div class="note-box">
  Escenarios basados en experiencias reales. No garantizamos este ingreso ni estamos ofreciendo una oportunidad de empleo garantizada. Cada agente tiene un tiempo de madurez diferente.
</div>
`
  },

  {
    title: 'Esquema de comisiones - Asesores México',
    slug: 'esquema-comisiones-mexico',
    section: 'onboarding',
    subsection: null,
    order: 7,
    tags: ['comisiones', 'asesor junior', 'asesor senior', 'asesor master', 'méxico', 'pesos'],
    content: `
<div class="data-card">
  <span class="data-card-title">Asesor Junior</span>
  <p>Objetivo mensual: <strong>$1,500,000 pesos</strong> (3 terrenos aprox.)</p>
  <div class="stats-grid">
    <div class="stat-item">
      <span class="stat-value">$600,000</span>
      <span class="stat-label">40% con enganche del 10%</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">$900,000</span>
      <span class="stat-label">60% con enganche del 1%</span>
    </div>
  </div>
  <div class="stats-grid">
    <div class="stat-item">
      <span class="stat-value gold">$20,000</span>
      <span class="stat-label">Gana tus primeros (pesos)</span>
    </div>
    <div class="stat-item">
      <span class="stat-value gold">$30,000</span>
      <span class="stat-label">Construye tus primeros (pesos)</span>
    </div>
  </div>
</div>

<div class="data-card">
  <span class="data-card-title">Asesor Senior</span>
  <p>Objetivo mensual: <strong>$3,000,000 pesos</strong> (6 terrenos aprox.)</p>
  <div class="stats-grid">
    <div class="stat-item">
      <span class="stat-value">$1,200,000</span>
      <span class="stat-label">40% con enganche del 10%</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">$1,800,000</span>
      <span class="stat-label">60% con enganche del 1%</span>
    </div>
  </div>
  <div class="stats-grid">
    <div class="stat-item">
      <span class="stat-value gold">$42,000</span>
      <span class="stat-label">Gana tus primeros (pesos)</span>
    </div>
    <div class="stat-item">
      <span class="stat-value gold">$60,000</span>
      <span class="stat-label">Construye tus primeros (pesos)</span>
    </div>
  </div>
</div>

<div class="data-card">
  <span class="data-card-title">Asesor Master</span>
  <p>Objetivo mensual: <strong>$5,000,000 pesos</strong> (10 terrenos aprox.)</p>
  <div class="stats-grid">
    <div class="stat-item">
      <span class="stat-value">$2,000,000</span>
      <span class="stat-label">40% con enganche del 10%</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">$3,000,000</span>
      <span class="stat-label">60% con enganche del 1%</span>
    </div>
  </div>
  <div class="stats-grid">
    <div class="stat-item">
      <span class="stat-value gold">$70,000</span>
      <span class="stat-label">Gana tus primeros (pesos)</span>
    </div>
    <div class="stat-item">
      <span class="stat-value gold">$100,000</span>
      <span class="stat-label">Construye tus primeros (pesos)</span>
    </div>
  </div>
</div>
`
  },

  {
    title: 'Esquema de comisiones USA - Asesor Junior',
    slug: 'esquema-comisiones-usa-junior',
    section: 'onboarding',
    subsection: null,
    order: 8,
    tags: ['comisiones', 'usa', 'dólares', 'asesor junior', 'enganche', 'mensualidad'],
    content: `
<p>Valores en dólares americanos.</p>

<div class="data-card">
  <span class="data-card-title">Asesor Junior — Objetivo Mensual</span>
  <div class="stats-grid">
    <div class="stat-item">
      <span class="stat-value gold">$75,000</span>
      <span class="stat-label">USD objetivo mensual (3 terrenos aprox.)</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">$30,000</span>
      <span class="stat-label">40% con enganche del 10%</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">$45,000</span>
      <span class="stat-label">60% con enganche del 1%</span>
    </div>
  </div>
</div>

<h3>Desglose por venta</h3>
<div class="data-card">
  <span class="data-card-title">Comisión por cada terreno vendido</span>
  <div class="stats-grid">
    <div class="stat-item">
      <span class="stat-value gold">$900.00</span>
      <span class="stat-label">Enganche (mes del cierre)</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">$168.75</span>
      <span class="stat-label">Residual mes 1 (sin enganche)</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">$69.61</span>
      <span class="stat-label">Residual meses siguientes</span>
    </div>
  </div>
</div>

<h3>Total acumulado proyectado (12 meses)</h3>
<table>
  <thead>
    <tr><th>Mes</th><th>Total mensual acumulado</th></tr>
  </thead>
  <tbody>
    <tr><td>Mes 1</td><td>$1,068.75</td></tr>
    <tr><td>Mes 2</td><td>$1,138.36</td></tr>
    <tr><td>Mes 3</td><td>$1,207.97</td></tr>
    <tr><td>Mes 4</td><td>$1,277.58</td></tr>
    <tr><td>Mes 5</td><td>$1,347.19</td></tr>
    <tr><td>Mes 6</td><td>$1,416.80</td></tr>
    <tr><td>Mes 7</td><td>$1,486.41</td></tr>
    <tr><td>Mes 8</td><td>$1,556.02</td></tr>
    <tr><td>Mes 9</td><td>$1,625.63</td></tr>
    <tr><td>Mes 10</td><td>$1,695.24</td></tr>
    <tr><td>Mes 11</td><td>$1,764.85</td></tr>
    <tr class="highlight-row"><td><strong>Mes 12</strong></td><td><strong>$1,834.45</strong></td></tr>
  </tbody>
</table>

<div class="stats-grid">
  <div class="stat-item">
    <span class="stat-value gold">$1,000</span>
    <span class="stat-label">Gana tus primeros (USD)</span>
  </div>
  <div class="stat-item">
    <span class="stat-value gold">$1,500</span>
    <span class="stat-label">Promedio mensual proyectado (USD)</span>
  </div>
</div>
`
  },

  {
    title: 'Herramientas que ofrece Ciudad Maderas',
    slug: 'herramientas-ciudad-maderas',
    section: 'onboarding',
    subsection: null,
    order: 9,
    tags: ['herramientas', 'materiales', 'capacitación', 'CRM', 'ARIA', 'eventos'],
    content: `
<div class="data-card">
  <span class="data-card-title">Lo que Ciudad Maderas pone a tu disposición</span>
  <ul>
    <li><strong>Oficinas</strong> para uso comercial y atención al cliente en Houston, Miami y San Diego.</li>
    <li><strong>Materiales impresos</strong>: brochures, promocionales y volantes.</li>
    <li><strong>Materiales digitales</strong>: videos de venta, testimonios, sitio web y redes sociales.</li>
    <li><strong>Capacitación continua</strong>: entrenamiento presencial y en línea con e-learning de primer nivel (Crehana).</li>
    <li><strong>Sistema de ventas</strong>: inventario disponible, cotizaciones, apartados, expedientes y panel de comisiones.</li>
    <li><strong>ARIA</strong>: CRM para cotizaciones, planes de ventas, procesos y reportes estadísticos.</li>
    <li><strong>Eventos</strong>: activaciones, expos y conferencias para generar prospectos.</li>
    <li><strong>Red de apoyo</strong>: cada Gerencia de Ventas te apoya en habilidades, procesos administrativos y comisionar rápido.</li>
  </ul>
</div>
`
  },

  {
    title: 'Bootcamp, Viajes y Premios',
    slug: 'bootcamp-viajes-premios',
    section: 'onboarding',
    subsection: null,
    order: 10,
    tags: ['bootcamp', 'viajes', 'premios', 'fiesta', 'fin de año', 'experiencia maderas'],
    content: `
<h3>Viajes Anuales</h3>
<div class="stats-grid">
  <div class="stat-item">
    <span class="stat-value gold">1°</span>
    <span class="stat-label">UK · Reino Unido</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">2°</span>
    <span class="stat-label">Sudeste Asiático</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">3°</span>
    <span class="stat-label">Canadá</span>
  </div>
</div>

<div class="data-card">
  <span class="data-card-title">Experiencia Maderas — Viajes a Desarrollos</span>
  <p>Cada <strong>dos meses</strong> vamos a un desarrollo en México para que lo conozcas y puedas promoverlo con mayor confianza. Incluye la experiencia regional completa: gastronomía, cultura y entretenimiento.</p>
</div>

<div class="data-card">
  <span class="data-card-title">Fiesta de Fin de Año</span>
  <p>En <strong>diciembre</strong> en Querétaro, con más de <strong>3,000 personas</strong>. Nuestro fundador, el Lic. Gastón Jury, presenta la visión del año y se realiza un sorteo donde puedes ganar <strong>terrenos, casas, autos y productos de tecnología</strong>.</p>
</div>

<div class="data-card">
  <span class="data-card-title">Bootcamp</span>
  <p>Evento educativo y de networking, <strong>una vez al año</strong>. Este año en <strong>septiembre en la Ciudad de México</strong>. Conferencistas y capacitadores internacionales en ventas, desarrollo personal y marketing. La empresa cubre la mayor parte de la inversión.</p>
</div>
`
  },

  // ── VENTAS ──────────────────────────────────────────────────────

  {
    title: 'Cuentas para depositar',
    slug: 'cuentas-para-depositar',
    section: 'ventas',
    subsection: 'Apartados y caja',
    order: 1,
    tags: ['cuentas', 'depositar', 'banco', 'BBVA', 'BanBajío', 'BanRegio', 'CLABE', 'transferencia'],
    content: `
<div class="note-box">
  Verifica siempre el desarrollo correcto antes de realizar cualquier transferencia. Solo se reciben depósitos desde cuenta del comprador.
</div>

<h3>Querétaro y Montaña Querétaro</h3>
<p class="subtitle">FRACCIONADORA LA ROMITA S.A DE C.V</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>011 3386 503</td><td>0126 8000 1133 8650 37</td><td>—</td></tr>
    <tr><td>BANREGIO</td><td>1659 9437 0021</td><td>0586 8000 0000 6336 90</td><td>—</td></tr>
    <tr><td>BANBAJÍO</td><td>9721 0440 0201</td><td>0302 2590 0000 9967 13</td><td>1025</td></tr>
  </tbody>
</table>

<h3>Bosques Querétaro</h3>
<p class="subtitle">INMOBILIARIA PLAZA QUERÉTARO S.A DE C.V</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>011 8449 473</td><td>0126 8000 1184 4947 32</td><td>—</td></tr>
    <tr><td>BANBAJÍO</td><td>0354 7424 6020 1</td><td>0306 8090 0030 2118 09</td><td>2738</td></tr>
  </tbody>
</table>

<h3>Hacienda Norte Querétaro</h3>
<p class="subtitle">INMOBILIARIA PLAZA QUERÉTARO S.A de C.V</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>0118 4494 73</td><td>0126 8000 1184 4947 32</td><td>—</td></tr>
    <tr><td>BANBAJÍO</td><td>385467760201</td><td>0306 8090 0033 9052 06</td><td>—</td></tr>
  </tbody>
</table>

<h3>Hacienda Sur Querétaro</h3>
<p class="subtitle">VALLE DE LOS MEZQUITES S.A DE C.V</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>0113386619</td><td>0126 8000 1133 8661 91</td><td>—</td></tr>
    <tr><td>BANBAJÍO</td><td>3835 7828 0201</td><td>0306 8090 0033 6465 78</td><td>2901</td></tr>
  </tbody>
</table>

<h3>Corregidora y Privada Corregidora</h3>
<p class="subtitle">PROMOCIONES HABITACIONALES DEL CENTRO DE MÉXICO S.A DE C.V</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>011 3342 840</td><td>0126 8000 1133 4284 03</td><td>—</td></tr>
    <tr><td>BANBAJÍO</td><td>2317 3941 0201</td><td>0306 8090 0015 8796 35</td><td>2080</td></tr>
    <tr><td>BANREGIO</td><td>165931780017</td><td>0586 8000 0007 1603 44</td><td>—</td></tr>
  </tbody>
</table>

<h3>Querétaro Norte</h3>
<p class="subtitle">INMOBILIARIA PLAZA QUERÉTARO S.A DE C.V</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>011 8449 473</td><td>0126 8000 1184 4947 32</td><td>—</td></tr>
    <tr><td>BANBAJÍO</td><td>3157 7364 0201</td><td>0306 8090 0025 6790 29</td><td>2604</td></tr>
  </tbody>
</table>

<h3>Querétaro Sur I</h3>
<p class="subtitle">CENTRO INMOBILIARIO DEL BAJÍO S.A. DE C.V.</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>011 3278 433</td><td>0126 8000 1132 7843 39</td><td>—</td></tr>
    <tr><td>BANREGIO</td><td>1650 0169 0018</td><td>0586 80 0000 0108 0200</td><td>—</td></tr>
  </tbody>
</table>

<h3>Querétaro Sur II</h3>
<p class="subtitle">VALLE DE LOS MEZQUITES S.A DE C.V</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>011 3386 619</td><td>0126 8000 1133 8661 91</td><td>—</td></tr>
    <tr><td>BANREGIO</td><td>1659 6828 0014</td><td>0586 8000 0001 4901 46</td><td>—</td></tr>
  </tbody>
</table>

<h3>San Juan del Río</h3>
<p class="subtitle">VALLE DE LOS MEZQUITES S.A DE C.V</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>011 3386 619</td><td>0126 8000 1133 8661 91</td><td>—</td></tr>
    <tr><td>BANBAJÍO</td><td>4012 2962 0201</td><td>0306 8090 0035 7236 80</td><td>—</td></tr>
    <tr><td>BANREGIO</td><td>1659 6828 0014</td><td>0586 8000 0001 4901 46</td><td>—</td></tr>
  </tbody>
</table>

<h3>Caribe</h3>
<p class="subtitle">PROMOCIONES HABITACIONALES DEL CENTRO DE MEXICO S.A DE C.V</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>011 3342 840</td><td>0126 8000 1133 4284 03</td><td>—</td></tr>
    <tr><td>BANREGIO</td><td>165931780017</td><td>0586 8000 0007 1603 44</td><td>—</td></tr>
    <tr><td>BANBAJÍO</td><td>33855990</td><td>0306 8090 0028 3235 76</td><td>2691</td></tr>
  </tbody>
</table>

<h3>Península</h3>
<p class="subtitle">CENTRO INMOBILIARIO DEL BAJÍO S.A DE C.V</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>0113278433</td><td>0126 8000 1132 7843 39</td><td>—</td></tr>
    <tr><td>BANREGIO</td><td>1650 0169 0018</td><td>0586 8000 0001 8661 52</td><td>—</td></tr>
    <tr><td>BANBAJÍO</td><td>255029070201</td><td>0306 8090 0018 5720 65</td><td>2166</td></tr>
  </tbody>
</table>

<h3>Privada y Hacienda Península</h3>
<p class="subtitle">CENTRO INMOBILIARIO DEL BAJÍO S.A DE C.V</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>0113278433</td><td>0126 8000 1132 7843 39</td><td>—</td></tr>
    <tr><td>BANBAJÍO</td><td>03359 7592</td><td>0306 8090 0028 0225 89</td><td>2676</td></tr>
  </tbody>
</table>

<h3>Monterrey</h3>
<p class="subtitle">VALLE DE LOS MEZQUITES SA DE CV</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>0113 3866 19</td><td>0126 8000 1133 8661 91</td><td>—</td></tr>
    <tr><td>BAJÍO</td><td>401229620201</td><td>030680900035723680</td><td>2991</td></tr>
    <tr><td>INVEX</td><td>365747210201</td><td>030680900031664989</td><td>2808</td></tr>
  </tbody>
</table>

<h3>León</h3>
<p class="subtitle">FRACCIONADORA LA ROMITA S.A DE C.V</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BANREGIO</td><td>1659 9437 0307</td><td>0586 8000 0001 8661 52</td><td>—</td></tr>
    <tr><td>BBVA</td><td>011 3386 503</td><td>0126 8000 1133 8650 37</td><td>—</td></tr>
    <tr><td>BANBAJÍO</td><td>9241 1590 201</td><td>0302 2590 0000 4947 07</td><td>1000</td></tr>
  </tbody>
</table>

<h3>Montaña León</h3>
<p class="subtitle">FRACCIONADORA LA ROMITA S.A DE C.V</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>011 3386 503</td><td>0126 8000 1133 8650 37</td><td>—</td></tr>
    <tr><td>BANREGIO</td><td>1659 9437 0021</td><td>0586 8000 0000 6336 90</td><td>—</td></tr>
    <tr><td>BANBAJÍO</td><td>9721 0440 0201</td><td>0302 2590 0000 9967 13</td><td>1025</td></tr>
  </tbody>
</table>

<h3>Cañada León</h3>
<p class="subtitle">VALLE DE LOS MEZQUITES S.A DE C.V</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>011 3386 619</td><td>0126 8000 1133 8661 91</td><td>—</td></tr>
    <tr><td>BANBAJÍO</td><td>3181 2746 0201</td><td>0306 8090 00 2594 9652</td><td>2605</td></tr>
  </tbody>
</table>

<h3>Norte León</h3>
<p class="subtitle">CENTRO INMOBILIARIO DEL BAJÍO S.A DE C.V</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>011 3278 433</td><td>0126 8000 1132 7843 39</td><td>—</td></tr>
    <tr><td>BANBAJÍO</td><td>3831 1049 0201</td><td>0306 8090 0033 5856 84</td><td>2900</td></tr>
  </tbody>
</table>

<h3>Aguascalientes</h3>
<p class="subtitle">VALLE DE LOS MEZQUITES S.A DE C.V</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>0 113386503</td><td>0126 8000 1133 8650 37</td><td>—</td></tr>
    <tr><td>BANBAJÍO</td><td>365738060201</td><td>0306 8090 0031 6651 24</td><td>—</td></tr>
    <tr><td>BANCO DEL BAJÍO</td><td>42241547</td><td>0306 8090 0038 1575 12</td><td>—</td></tr>
  </tbody>
</table>

<h3>San Luis Potosí y Montaña SLP</h3>
<p class="subtitle">FRACCIONADORA LA ROMITA S.A DE C.V</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>011 3386 503</td><td>0126 8000 1133 8650 37</td><td>—</td></tr>
    <tr><td>BANREGIO</td><td>1659 9437 0102</td><td>0586 8000 0001 2493 97</td><td>—</td></tr>
    <tr><td>BANBAJÍO</td><td>1605 7465 0201</td><td>0302 2590 0007 8837 64</td><td>1596</td></tr>
  </tbody>
</table>

<h3>Sierra San Luis Potosí</h3>
<p class="subtitle">FRACCIONADORA LA ROMITA S.A DE C.V</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BBVA</td><td>011 3386 503</td><td>0126 8000 1133 8650 37</td><td>—</td></tr>
    <tr><td>BANBAJÍO</td><td>3683 6666 0201</td><td>0306 8090 0031 8378 55</td><td>2804</td></tr>
  </tbody>
</table>

<h3>Casas Mérida</h3>
<p class="subtitle">MPS PAYMENT SYSTEMS S.C.</p>
<table>
  <thead><tr><th>Banco</th><th>Cuenta</th><th>CLABE</th><th>Servicio</th></tr></thead>
  <tbody>
    <tr><td>BANBAJÍO</td><td>0342551580201</td><td>030680900028792644</td><td>—</td></tr>
  </tbody>
</table>

<h3>Transferencias Internacionales — Desde USA (Dólares)</h3>
<div class="data-card">
  <table>
    <tbody>
      <tr><td><strong>Banco intermediario</strong></td><td>Standard Chartered Bank, Nueva York</td></tr>
      <tr><td><strong>ABA</strong></td><td>026002561</td></tr>
      <tr><td><strong>SWIFT</strong></td><td>SCBLUS33</td></tr>
      <tr><td><strong>Banco beneficiario</strong></td><td>Banco del Bajío SA</td></tr>
      <tr><td><strong>Cuenta</strong></td><td>3544032457001</td></tr>
      <tr><td><strong>CLABE</strong></td><td>030680900028792644</td></tr>
      <tr><td><strong>SWIFT Bajío</strong></td><td>BJIOMXMLXXX</td></tr>
      <tr><td><strong>Beneficiario</strong></td><td>MPS PAYMENT SYSTEMS SC</td></tr>
    </tbody>
  </table>
</div>

<h3>Transferencias Internacionales — Desde el Resto del Mundo</h3>
<div class="data-card">
  <table>
    <tbody>
      <tr><td><strong>Banco intermediario</strong></td><td>Standard Chartered Bank, Frankfurt, Alemania</td></tr>
      <tr><td><strong>SWIFT</strong></td><td>SCBLDEFXXXX</td></tr>
      <tr><td><strong>Banco beneficiario</strong></td><td>Banco del Bajío SA</td></tr>
      <tr><td><strong>IBAN</strong></td><td>DE74512305000018097504</td></tr>
      <tr><td><strong>CLABE</strong></td><td>030680900028792644</td></tr>
      <tr><td><strong>Beneficiario</strong></td><td>MPS PAYMENT SYSTEMS SC</td></tr>
    </tbody>
  </table>
</div>
`
  },

  {
    title: 'Links de pago con tarjeta',
    slug: 'links-pago-tarjeta',
    section: 'ventas',
    subsection: 'Apartados y caja',
    order: 2,
    tags: ['links', 'pago', 'tarjeta', 'crédito', 'débito', 'apartado', 'enganche', 'mensualidad', 'USA'],
    content: `
<h3>México — Pagos con Tarjeta</h3>

<div class="data-card">
  <span class="data-card-title">Apartado de solo $5,000 pesos</span>
  <p><a href="https://pagosciudadmaderas.com/apartado/index.html">pagosciudadmaderas.com/apartado/index.html</a></p>
  <ol>
    <li>Llenar el formulario con los datos del cliente</li>
    <li>Seleccionar el Desarrollo, Condominio y Lote</li>
    <li>Seleccionar el nombre del asesor</li>
    <li>Ingresar los datos de pago</li>
    <li>Mandar comprobante de pago al asesor</li>
  </ol>
  <p class="note">*Recuerda habilitar las pantallas emergentes en tu navegador</p>
</div>

<div class="data-card">
  <span class="data-card-title">Apartado y/o Liquidación de Enganche (cualquier cantidad)</span>
  <p><a href="https://pagosciudadmaderas.com/enganche/">pagosciudadmaderas.com/enganche/</a></p>
  <ol>
    <li>Seleccionar el proyecto (desarrollo)</li>
    <li>Poner el número de referencia del lote (del CRM → inventario disponible)</li>
    <li>Seleccionar nombre del asesor</li>
    <li>Ingresar los datos de pago</li>
    <li>Mandar comprobante de pago al asesor</li>
  </ol>
</div>

<div class="data-card">
  <span class="data-card-title">Pago de Mensualidad</span>
  <p><a href="https://pagosciudadmaderas.com/pago/index.html">pagosciudadmaderas.com/pago/index.html</a></p>
  <div class="note-box">El primer pago de mensualidad debe hacerse por transferencia o en efectivo en caja / practi-caja.</div>
  <p>A partir de la segunda mensualidad:</p>
  <ol>
    <li>Seleccionar desarrollo, condominio y lote</li>
    <li>Ingresar tu nombre o apellido</li>
    <li>Ingresar los datos para pago</li>
    <li>Guardar tu comprobante de pago</li>
  </ol>
</div>

<h3>USA — Transferencias Bancarias</h3>
<p class="note-box">Solo se reciben transferencias desde la cuenta del comprador. No se aceptan depósitos en efectivo.</p>

<div class="two-col-grid">
  <div class="data-card">
    <span class="data-card-title">Bank of America</span>
    <table>
      <tbody>
        <tr><td><strong>Titular</strong></td><td>Wood City LLC</td></tr>
        <tr><td><strong>Cuenta</strong></td><td>4881 1729 9805</td></tr>
        <tr><td><strong>ACH Routing</strong></td><td>111000025</td></tr>
        <tr><td><strong>Zelle</strong></td><td>yolanda.velazquez@ciudadmaderas.com</td></tr>
        <tr><td><strong>Dirección</strong></td><td>1801 Main St suite 1200, Houston TX 77002</td></tr>
      </tbody>
    </table>
  </div>
  <div class="data-card">
    <span class="data-card-title">PNC Bank</span>
    <table>
      <tbody>
        <tr><td><strong>Titular</strong></td><td>Wood City LLC</td></tr>
        <tr><td><strong>Cuenta</strong></td><td>4743732454</td></tr>
        <tr><td><strong>ACH Routing</strong></td><td>071921891</td></tr>
        <tr><td><strong>Zelle</strong></td><td>accounting@woodcity.us</td></tr>
        <tr><td><strong>Dirección</strong></td><td>1801 Main St Ste 1210, Houston TX 77002</td></tr>
      </tbody>
    </table>
  </div>
</div>

<h3>USA — Ligas de Pago con Tarjeta</h3>
<div class="data-card">
  <span class="data-card-title">Solo para clientes de USA</span>
  <ul>
    <li><strong>Apartado / Enganche:</strong> <a href="https://pagosciudadmaderas.com/enganche_usa/index.html">pagosciudadmaderas.com/enganche_usa/index.html</a></li>
    <li><strong>Mensualidad:</strong> <a href="https://pagosciudadmaderas.com/pago/index.php?locale=en">pagosciudadmaderas.com/pago/index.php?locale=en</a></li>
  </ul>
</div>

<p>Valida el precio del dólar en: <a href="https://dof.gob.mx/indicadores.php">dof.gob.mx/indicadores.php</a></p>
`
  },

  {
    title: 'Estatus en el sistema de contratación',
    slug: 'estatus-sistema-contratacion',
    section: 'ventas',
    subsection: null,
    order: 3,
    tags: ['estatus', 'contratación', 'proceso', 'expediente', 'contrato', 'tiempos'],
    content: `
<p>Flujo completo del proceso de contratación con responsable y tiempo estimado por etapa.</p>

<table>
  <thead>
    <tr><th>#</th><th>Estatus</th><th>Responsable</th><th>Tiempo</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Lote Apartado</td><td>Caja</td><td>—</td></tr>
    <tr><td>2</td><td>Integración de Expediente</td><td>Asesor</td><td>7 días</td></tr>
    <tr><td>3</td><td>Revisión · Venta de Particulares</td><td>Postventa</td><td>1 día</td></tr>
    <tr><td>5</td><td>Revisión 100%</td><td>Contraloría</td><td>1 día</td></tr>
    <tr><td>6</td><td>Corrida Elaborada</td><td>Contraloría</td><td>2 días</td></tr>
    <tr><td>7</td><td>Contrato Elaborado</td><td>Jurídico</td><td>3 días</td></tr>
    <tr><td>8</td><td>Contrato entregado a Asesor para firma del Cliente</td><td>Asistentes</td><td>14 días</td></tr>
    <tr><td>11</td><td>Validación de Enganche</td><td>Administración</td><td>1 día</td></tr>
    <tr><td>9</td><td>Contrato recibido para firma de Cliente</td><td>Contraloría</td><td>1 día</td></tr>
    <tr><td>10</td><td>Contrato en Firma de RL</td><td>—</td><td>—</td></tr>
    <tr><td>13</td><td>Contrato Listo y Entregado a Asesores</td><td>Contraloría</td><td>1 día</td></tr>
    <tr><td>14</td><td>Firma de Acuse Cliente</td><td>Asistente de Gerente</td><td>7 días</td></tr>
    <tr class="highlight-row"><td>15</td><td><strong>Acuse Entregado — Proceso Terminado</strong></td><td>Contraloría</td><td>1 día</td></tr>
  </tbody>
</table>
`
  },

  {
    title: 'Documentación de persona moral',
    slug: 'documentacion-persona-moral',
    section: 'ventas',
    subsection: 'Ingreso de expediente',
    order: 4,
    tags: ['persona moral', 'empresa', 'documentación', 'acta constitutiva', 'representante legal', 'RFC'],
    content: `
<div class="data-card">
  <span class="data-card-title">Persona Moral Mexicana o Extranjera</span>
  <ul>
    <li>Depósito de seriedad</li>
    <li>Identificación oficial vigente del Representante Legal o Apoderados</li>
    <li>Comprobante de domicilio a nombre de la empresa o de alguno de los socios</li>
    <li>Acta constitutiva y/o asamblea con datos de protocolización e inscripción al Registro Público de la Propiedad y del Comercio</li>
    <li>Poder del RL inscrito (si se hizo en escritura diferente a la constitutiva)</li>
    <li>Inscripción al RFC</li>
  </ul>
</div>

<div class="note-box">
  Si el Acta Constitutiva y poder se encuentran en <strong>inglés</strong>, se debe presentar la traducción y los documentos deben estar <strong>apostillados o legalizados</strong>.
</div>
`
  },

  {
    title: 'Tabla de plazo de crédito',
    slug: 'tabla-plazo-credito',
    section: 'ventas',
    subsection: 'Depósito de seriedad',
    order: 5,
    tags: ['plazo', 'crédito', 'edad', 'años', 'meses', 'financiamiento'],
    content: `
<p>El plazo se determina por la <strong>edad del cliente a la fecha de apartado</strong>.</p>

<table>
  <thead>
    <tr><th>Edad del Cliente</th><th>Años de Crédito</th><th>Meses</th></tr>
  </thead>
  <tbody>
    <tr><td>50 años</td><td>30</td><td>360</td></tr>
    <tr><td>51 años</td><td>29</td><td>348</td></tr>
    <tr><td>52 años</td><td>28</td><td>336</td></tr>
    <tr><td>53 años</td><td>27</td><td>324</td></tr>
    <tr><td>54 años</td><td>26</td><td>312</td></tr>
    <tr><td>55 años</td><td>25</td><td>300</td></tr>
    <tr><td>56 años</td><td>24</td><td>288</td></tr>
    <tr><td>57 años</td><td>23</td><td>276</td></tr>
    <tr><td>58 años</td><td>22</td><td>264</td></tr>
    <tr><td>59 años</td><td>21</td><td>252</td></tr>
    <tr><td>60 años</td><td>20</td><td>240</td></tr>
    <tr><td>61 años</td><td>19</td><td>228</td></tr>
    <tr><td>62 años</td><td>18</td><td>216</td></tr>
    <tr><td>63 años</td><td>17</td><td>204</td></tr>
    <tr><td>64 años</td><td>16</td><td>192</td></tr>
    <tr><td>65 años</td><td>15</td><td>180</td></tr>
    <tr><td>66 años</td><td>14</td><td>168</td></tr>
    <tr><td>67 años</td><td>13</td><td>156</td></tr>
    <tr><td>68 años</td><td>12</td><td>144</td></tr>
    <tr><td>69 años</td><td>11</td><td>132</td></tr>
    <tr><td>70 años</td><td>10</td><td>120</td></tr>
    <tr><td>71 años</td><td>9</td><td>108</td></tr>
    <tr><td>72 años</td><td>8</td><td>96</td></tr>
    <tr><td>73 años</td><td>7</td><td>84</td></tr>
    <tr><td>74 años</td><td>6</td><td>72</td></tr>
    <tr><td>75 años</td><td>5</td><td>60</td></tr>
    <tr><td>76 años</td><td>4</td><td>48</td></tr>
    <tr><td>77 años</td><td>3</td><td>36</td></tr>
    <tr><td>78 años</td><td>2</td><td>24</td></tr>
    <tr><td>79 años</td><td>1</td><td>12</td></tr>
    <tr><td>80 años</td><td>0</td><td>0</td></tr>
  </tbody>
</table>
`
  },

  {
    title: 'Firma del contrato - Parámetros',
    slug: 'firma-contrato-parametros',
    section: 'ventas',
    subsection: null,
    order: 6,
    tags: ['firma', 'contrato', 'parámetros', 'coincidencia', 'mensualidad', 'internacional'],
    content: `
<p>Las firmas deben coincidir con la identificación presentada. Si no se parecen en un 80%, se ofrece la opción de segunda mensualidad; si no se acepta, se solicita reimpresión.</p>

<table>
  <thead>
    <tr><th>Coincidencia de Firma</th><th>Resultado</th></tr>
  </thead>
  <tbody>
    <tr><td>100%</td><td>Pago en la <strong>primera</strong> mensualidad</td></tr>
    <tr><td>79%</td><td>Pago en la <strong>segunda</strong> mensualidad</td></tr>
    <tr><td>50%</td><td>Pago en la <strong>tercera</strong> mensualidad</td></tr>
    <tr><td>Menos del 50%</td><td><strong>Reimpresión</strong></td></tr>
  </tbody>
</table>

<div class="data-card">
  <span class="data-card-title">Requisitos adicionales</span>
  <ul>
    <li>El enganche debe estar cubierto (adjuntar recibo comprobante del complemento en copia).</li>
    <li>Para envíos internacionales: guía autorizada por el subdirector.</li>
    <li>Para <strong>clientes extranjeros</strong>: video obligatorio donde el cliente confirme que está contratando, mencionando nombre completo, desarrollo, clúster y número de lote.</li>
  </ul>
</div>
`
  },

  {
    title: 'Inicio de mensualidad - Fechas',
    slug: 'inicio-mensualidad-fechas',
    section: 'ventas',
    subsection: null,
    order: 7,
    tags: ['mensualidad', 'inicio', 'fechas', 'enganche', 'calendario'],
    content: `
<div class="data-card">
  <span class="data-card-title">Regla general</span>
  <div class="stats-grid">
    <div class="stat-item">
      <span class="stat-value gold">1 mes</span>
      <span class="stat-label">después del apartado con enganche del 1%</span>
    </div>
    <div class="stat-item">
      <span class="stat-value gold">2 meses</span>
      <span class="stat-label">después del apartado con enganche del 5% o 10%</span>
    </div>
  </div>
</div>

<h3>Calendario de inicio de mensualidad</h3>
<table>
  <thead>
    <tr><th>Fecha de Apartado</th><th>Enganche 1%</th><th>Enganche 5% y 10%</th></tr>
  </thead>
  <tbody>
    <tr><td>Enero</td><td>Febrero</td><td>Marzo</td></tr>
    <tr><td>Febrero</td><td>Marzo</td><td>Abril</td></tr>
    <tr><td>Marzo</td><td>Abril</td><td>Mayo</td></tr>
    <tr><td>Abril</td><td>Mayo</td><td>Junio</td></tr>
    <tr><td>Mayo</td><td>Junio</td><td>Julio</td></tr>
    <tr><td>Junio</td><td>Julio</td><td>Agosto</td></tr>
    <tr><td>Julio</td><td>Agosto</td><td>Septiembre</td></tr>
    <tr><td>Agosto</td><td>Septiembre</td><td>Octubre</td></tr>
    <tr><td>Septiembre</td><td>Octubre</td><td>Noviembre</td></tr>
    <tr><td>Octubre</td><td>Noviembre</td><td>Diciembre</td></tr>
    <tr><td>Noviembre</td><td>Diciembre</td><td>Enero</td></tr>
    <tr><td>Diciembre</td><td>Enero</td><td>Febrero</td></tr>
  </tbody>
</table>

<div class="note-box">
  Se puede recorrer el inicio de mensualidad dentro del mismo mes con <strong>autorización de subdirección</strong>. Más allá del mes correspondiente requiere <strong>autorización de dirección general</strong>.
</div>
`
  },

  {
    title: 'Calendario de Comisiones 2025 - México',
    slug: 'calendario-comisiones-mexico',
    section: 'ventas',
    subsection: null,
    order: 8,
    tags: ['calendario', 'comisiones', 'México', 'pago', 'dispersión', 'contraloría'],
    content: `
<div class="data-card">
  <span class="data-card-title">Flujo semanal de comisiones — México</span>
  <ol>
    <li>Corte de recepción de comisiones (SISTEMA) — <strong>Martes 2:00 pm</strong></li>
    <li>Corte de acuses — <strong>2:00 pm</strong></li>
    <li>Resguardos — <strong>Martes 2:00 pm</strong></li>
    <li>CONTRALORÍA: Validación de comisiones en sistema</li>
    <li>Límite de aclaraciones (TICKET) — <strong>hasta 6:00 pm</strong></li>
    <li>Inicio de Dispersión de pagos (INTERNOMEX)</li>
    <li>Aclaración de TICKETS NO RESUELTOS (reabrir Ticket)</li>
    <li>Se avanzan comisiones en sistema (tickets no resueltos)</li>
    <li>2do Corte de ticket — <strong>hasta 2:00 pm</strong></li>
  </ol>
</div>

<div class="note-box">
  <ul>
    <li>La comisión del anticipo se dispersa hasta que el contrato ingrese a contraloría (<strong>estatus 9</strong>).</li>
    <li>Si el día de pago cae en día inhábil, se paga al <strong>primer hábil siguiente</strong>.</li>
    <li>Pago de remanente, factura y monedero: <strong>1 a 2 días hábiles</strong> después del calendario.</li>
    <li>El 2do Corte se paga una semana después: <strong>miércoles o jueves</strong>.</li>
    <li>Primeros 5 días hábiles del mes: asesores firman carta de donantes con Capital Humano.</li>
    <li>Las comisiones se trabajan sobre <strong>mes vencido</strong> (pagos hasta el día 20 del mes anterior).</li>
  </ul>
</div>
`
  },

  {
    title: 'Calendario de Comisiones 2025 - Extranjeros',
    slug: 'calendario-comisiones-extranjeros',
    section: 'ventas',
    subsection: null,
    order: 9,
    tags: ['calendario', 'comisiones', 'extranjeros', 'USA', 'Wood City', 'dispersión'],
    content: `
<div class="data-card">
  <span class="data-card-title">Flujo semanal de comisiones — USA / Extranjeros</span>
  <ol>
    <li>Corte de recepción de comisiones (SISTEMA) — <strong>Martes 2:00 pm</strong></li>
    <li>Corte de acuses — <strong>2:00 pm</strong></li>
    <li>Resguardos — <strong>Martes 2:00 pm</strong></li>
    <li>CONTRALORÍA: Validación de comisiones en sistema</li>
    <li>Límite de aclaraciones (TICKET) — <strong>hasta 6:00 pm</strong></li>
    <li>Inicio de Dispersión de pagos (INTERNOMEX)</li>
    <li>Inicio de Dispersión de pagos (WOOD CITY) — <strong>Asesores extranjeros</strong></li>
    <li>Aclaración de TICKETS NO RESUELTOS (reabrir Ticket)</li>
    <li>Se avanzan comisiones en sistema (tickets no resueltos)</li>
    <li>2do Corte de ticket — <strong>hasta 2:00 pm</strong></li>
  </ol>
</div>

<div class="note-box">
  <ul>
    <li>La comisión del anticipo se dispersa hasta que el contrato ingrese a contraloría (<strong>estatus 9</strong>).</li>
    <li>Si el día de pago cae en día inhábil, se paga al <strong>primer hábil siguiente</strong>.</li>
    <li>Pago de remanente, factura y monedero: <strong>1 a 2 días hábiles</strong> después del calendario.</li>
    <li>El 2do Corte se paga una semana después: <strong>miércoles o jueves</strong>.</li>
    <li>Las comisiones se trabajan sobre <strong>mes vencido</strong> (pagos hasta el día 20 del mes anterior).</li>
  </ul>
</div>
`
  },

  {
    title: 'Reglamento de ventas',
    slug: 'reglamento-ventas',
    section: 'ventas',
    subsection: null,
    order: 10,
    tags: ['reglamento', 'ventas', 'plantilla', 'contratación', 'baja', 'cambio equipo', 'coordinadores', 'territorialidad', 'malas prácticas', 'controversias'],
    content: `
<p>Objetivo: Establecer orden y lineamientos de trabajo de toda la estructura de ventas de Ciudad Maderas a nivel nacional, propiciando un ambiente laboral sano y un proceso justo para todos los equipos.</p>

<h3>Plantilla Autorizada</h3>
<div class="data-card">
  <p>Límite superior por Gerencia: <strong>10 coordinadores</strong> con <strong>20 asesores internos</strong> y sin límite de asesores comodín (externos).</p>
  <ul>
    <li>El directorio interno es el archivo base para evaluar la estructura semana a semana.</li>
    <li>El asistente revisa semanalmente sistema vs. directorio. Discrepancias: multa de <strong>$50 pesos por error</strong>.</li>
    <li>Desfase por más de 1 mes sin autorización → bloqueo de CRM para nuevos ingresos. Reincidencia → Acta Administrativa al Gerente.</li>
  </ul>
</div>

<h3>Contratación y Recontratación</h3>
<div class="data-card">
  <ol>
    <li>Sin documentación en <strong>45 días hábiles</strong> tras activar CRM → baja directa.</li>
    <li>Baja puede ser recontratada por otro gerente después de <strong>3 meses</strong> (excepto boletinados por insubordinación).</li>
    <li>Baja por productividad — recontratación escalonada:
      <ul>
        <li>1ª baja: 1 mes como externo + 1 venta para reactivar</li>
        <li>2ª baja: 3 meses como externo + 1 venta</li>
        <li>3ª baja: 6 meses como externo + 1 venta</li>
      </ul>
    </li>
    <li>No se permite <strong>familia directa o parejas</strong> en estructura vertical.</li>
  </ol>
</div>

<h3>Cambios de Equipo — Asesores</h3>
<div class="data-card">
  <ul>
    <li>Cambio permitido después de <strong>4 meses</strong> con el primer gerente.</li>
    <li>Promedio mínimo de venta para solicitar cambio: <strong>$800,000 pesos</strong> durante los últimos 3 meses.</li>
    <li>Venta mínima para mantenerse como interno: <strong>$500,000 mensuales</strong>.</li>
    <li>Solicitud por correo electrónico al subdirector de la plaza.</li>
  </ul>
</div>

<h3>Cambios de Equipo — Coordinadores</h3>
<div class="data-card">
  <ul>
    <li>Cambio permitido: <strong>1 vez cada 6 meses</strong> entre gerencias.</li>
    <li>Meta mínima para mantenerse en el puesto: <strong>$7.5 MDP</strong>.</li>
    <li>Nuevo coordinador externo debe venir con equipo mínimo de <strong>8 asesores</strong>.</li>
  </ul>
</div>

<h3>Territorialidad</h3>
<div class="data-card">
  <p>El asesor debe pertenecer a la plaza que le corresponde por domicilio cuando exista estructura activa en ese territorio.</p>
  <p>Penalización por incumplimiento: <strong>0.10% de comisiones</strong> por asesor fuera de territorio (máximo <strong>0.50%</strong>, equivale a 5 asesores).</p>
</div>

<h3>Controversias de Ventas — Ponderación</h3>
<table>
  <thead>
    <tr><th>Criterio</th><th>Peso</th><th>Descripción</th></tr>
  </thead>
  <tbody>
    <tr><td>Registro</td><td class="gold-text"><strong>30%</strong></td><td>Primer registro válido en CRM (vigencia 90 días, requiere nombre, apellido y teléfono)</td></tr>
    <tr><td>Seguimiento</td><td class="gold-text"><strong>50%</strong></td><td>Mejor contacto e intercambio bilateral de información con el cliente</td></tr>
    <tr><td>Cierre</td><td class="gold-text"><strong>20%</strong></td><td>Quien logra el apartado y dirige la contratación</td></tr>
  </tbody>
</table>

<h3>Factor Tiempo (desde fecha del recibo de apartado)</h3>
<table>
  <thead>
    <tr><th>Días naturales</th><th>% que recibe quien reclama</th></tr>
  </thead>
  <tbody>
    <tr><td>1 a 7 días</td><td class="gold-text">100%</td></tr>
    <tr><td>7 a 14 días</td><td>50%</td></tr>
    <tr><td>15 a 30 días</td><td>25%</td></tr>
    <tr><td>Más de 30 días</td><td>0%</td></tr>
  </tbody>
</table>

<h3>Malas Prácticas — Causan baja o acta administrativa</h3>
<div class="data-card">
  <ol>
    <li>Invitar a asesores de otros equipos ofreciendo incentivos adicionales.</li>
    <li>Insubordinación dentro de los equipos.</li>
    <li>Faltar al respeto a compañeros o líderes.</li>
    <li>Desinterés por pertenecer a la empresa (no presentarse a juntas, etc.).</li>
    <li>Mala praxis: falsificar documentación, firmar por otra persona, robar clientes en eventos, registrar clientes con alevosía.</li>
  </ol>
</div>

<div class="note-box">
  Reglamento vigente desde el <strong>11 de septiembre de 2023</strong>. Sujeto a modificaciones.
</div>
`
  },

  {
    title: 'Multas y penalizaciones',
    slug: 'multas-penalizaciones',
    section: 'ventas',
    subsection: null,
    order: 11,
    tags: ['multas', 'penalizaciones', 'guardia', 'asesor', 'coordinador', 'gerente', 'subdirector'],
    content: `
<h3>Por faltar a guardia</h3>
<table>
  <thead>
    <tr><th>Estructura</th><th>Monto</th></tr>
  </thead>
  <tbody>
    <tr><td>Asesor</td><td>$4,500.00</td></tr>
    <tr><td>Coordinador</td><td>$4,500.00</td></tr>
    <tr><td>Gerente</td><td>$4,500.00</td></tr>
    <tr><td>Subdirector</td><td>$1,500.00</td></tr>
    <tr><td>Dir. Regional</td><td>$1,500.00</td></tr>
    <tr><td>Dir. Comercial</td><td>$1,500.00</td></tr>
    <tr class="highlight-row"><td><strong>Total por evento</strong></td><td><strong>$18,000.00</strong></td></tr>
  </tbody>
</table>

<div class="note-box">
  La única manera de evitar el descuento es avisar en el <strong>CHAT de MKT</strong> que el asesor se ausentará momentáneamente. Se tiene un máximo de <strong>20 minutos</strong> a partir del aviso. Se recomienda hacer guardias <strong>de dos en dos</strong> cuando la plaza lo permita.
</div>
`
  },

  {
    title: 'Metas para viajes',
    slug: 'metas-para-viajes',
    section: 'ventas',
    subsection: null,
    order: 12,
    tags: ['metas', 'viajes', 'UK', 'Canadá', 'premios', 'gerentes', 'coordinadores', 'asesores'],
    content: `
<div class="stats-grid">
  <div class="stat-item">
    <span class="stat-value gold">1°</span>
    <span class="stat-label">UK · Reino Unido</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">2°</span>
    <span class="stat-label">Sudeste Asiático</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">3°</span>
    <span class="stat-label">Canadá</span>
  </div>
</div>

<p class="note-box">Montos en millones de pesos</p>

<h3>Sede Tijuana / San Diego</h3>
<table>
  <thead>
    <tr><th>Lugar</th><th>Gerentes Anual</th><th>Gerentes Mensual</th><th>Coords. Anual</th><th>Coords. Mensual</th><th>Asesores Anual</th><th>Asesores Mensual</th></tr>
  </thead>
  <tbody>
    <tr><td>1°</td><td>$210 M</td><td>$17.50 M</td><td>$47.00 M</td><td>$3.92 M</td><td>$24.00 M</td><td>$2.00 M</td></tr>
    <tr><td>2°</td><td>$180 M</td><td>$15.00 M</td><td>$42.00 M</td><td>$3.50 M</td><td>$21.00 M</td><td>$1.75 M</td></tr>
    <tr><td>3°</td><td>$150 M</td><td>$12.50 M</td><td>$37.50 M</td><td>$3.13 M</td><td>$18.00 M</td><td>$1.50 M</td></tr>
  </tbody>
</table>

<h3>Sede Ciudad Juárez / Houston</h3>
<table>
  <thead>
    <tr><th>Lugar</th><th>Gerentes Anual</th><th>Gerentes Mensual</th><th>Coords. Anual</th><th>Coords. Mensual</th><th>Asesores Anual</th><th>Asesores Mensual</th></tr>
  </thead>
  <tbody>
    <tr><td>1°</td><td>$204 M</td><td>$17.00 M</td><td>$42.50 M</td><td>$3.54 M</td><td>$24.00 M</td><td>$2.00 M</td></tr>
    <tr><td>2°</td><td>$168 M</td><td>$14.00 M</td><td>$37.80 M</td><td>$3.15 M</td><td>$21.00 M</td><td>$1.75 M</td></tr>
    <tr><td>3°</td><td>$135 M</td><td>$11.25 M</td><td>$33.70 M</td><td>$2.81 M</td><td>$18.00 M</td><td>$1.50 M</td></tr>
  </tbody>
</table>

<h3>Sede Florida</h3>
<table>
  <thead>
    <tr><th>Lugar</th><th>Gerentes Anual</th><th>Gerentes Mensual</th><th>Coords. Anual</th><th>Coords. Mensual</th><th>Asesores Anual</th><th>Asesores Mensual</th></tr>
  </thead>
  <tbody>
    <tr><td>1°</td><td>$180 M</td><td>$15.00 M</td><td>$37.63 M</td><td>$3.14 M</td><td>$24.00 M</td><td>$2.00 M</td></tr>
    <tr><td>2°</td><td>$150 M</td><td>$12.50 M</td><td>$33.60 M</td><td>$2.80 M</td><td>$21.00 M</td><td>$1.75 M</td></tr>
    <tr><td>3°</td><td>$120 M</td><td>$10.00 M</td><td>$30.00 M</td><td>$2.50 M</td><td>$18.00 M</td><td>$1.50 M</td></tr>
  </tbody>
</table>
`
  },

  // ── POSTVENTA ───────────────────────────────────────────────────

  {
    title: 'Manual del cliente - Introducción',
    slug: 'manual-cliente-introduccion',
    section: 'postventa',
    subsection: 'Manual del cliente',
    order: 1,
    tags: ['manual', 'cliente', 'bienvenida', 'misión', 'visión', 'quiénes somos'],
    content: `
<p>Ciudad Maderas agradece su confianza al invertir con nosotros. Nuestro mayor compromiso es brindarle urbanización con los más altos estándares de calidad, garantizando el crecimiento de su inversión.</p>

<div class="two-col-grid">
  <div class="data-card">
    <span class="data-card-title">Quiénes Somos</span>
    <p>Somos creadores de ciudades con más de <strong>35 años de experiencia</strong> en construcción, presentes en las ciudades con mayor crecimiento del país. Empresa socialmente responsable, generadora de empleos y calidad de vida.</p>
  </div>
  <div class="data-card">
    <span class="data-card-title">Nuestra Misión</span>
    <p>Generar mejores estilos de vida basados en innovación, garantía de plusvalía, crédito directo y seguridad de inversión en todos nuestros proyectos.</p>
  </div>
</div>

<div class="data-card">
  <span class="data-card-title">Nuestra Visión</span>
  <p>Ser innovadores permanentes de desarrollo urbano e inmobiliario.</p>
</div>
`
  },

  {
    title: 'Manual del cliente - Formas de pago y venta del lote',
    slug: 'manual-cliente-formas-pago',
    section: 'postventa',
    subsection: 'Manual del cliente',
    order: 2,
    tags: ['formas de pago', 'depósito', 'transferencia', 'letrero', 'venta', 'estados de cuenta'],
    content: `
<h3>Formas de Pago</h3>
<div class="data-card">
  <ul>
    <li>Antes de realizar pagos en efectivo, consulte el límite permitido en la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita.</li>
    <li>Pagos por depósito, transferencia, cheques o tarjetas: la cuenta debe estar <strong>a nombre del titular del contrato</strong>.</li>
    <li>Conserve los estados de cuenta bancarios — son requisito indispensable al momento de escriturar.</li>
  </ul>
</div>

<h3>Venta del Lote — Requisitos para colocar letrero</h3>
<div class="data-card">
  <ol>
    <li>Estar al corriente en pagos de lote, agua, mantenimiento y predial.</li>
    <li>Medidas del letrero: <strong>0.60 x 0.90 m</strong> con 2 postes de <strong>1.50 m</strong> de altura, color blanco.</li>
    <li>Tipografía: <strong>Arial Black</strong>, colores negro, blanco y azul.</li>
    <li>Colocarse al centro del frente del terreno, <strong>dentro de la propiedad</strong> (no sobre la banqueta).</li>
    <li>El frente del terreno debe estar despalmado para buena visibilidad.</li>
  </ol>
</div>
`
  },

  {
    title: 'Escrituración',
    slug: 'escrituracion',
    section: 'postventa',
    subsection: 'Manual del cliente',
    order: 3,
    tags: ['escrituración', 'notario', 'transmisión', 'propiedad', 'registro', 'requisitos', 'costos'],
    content: `
<div class="note-box">
  Una vez liquidado el lote, la transmisión de propiedad se realiza en escritura pública ante notario. La inscripción en el Registro Público de la Propiedad legitima al adquiriente como propietario.
</div>

<h3>Procedimiento</h3>
<div class="data-card">
  <ol>
    <li>El lote debe estar <strong>liquidado en su totalidad</strong>.</li>
    <li>El cliente solicita presupuesto en Atención a Clientes.</li>
    <li>En <strong>3 días hábiles</strong> se envía el presupuesto por correo.</li>
    <li>El cliente acepta el presupuesto e inicia el proceso.</li>
    <li>Con documentación completa, firma se programa en <strong>8 días hábiles</strong>.</li>
  </ol>
</div>

<h3>Requisitos</h3>
<div class="two-col-grid">
  <div class="data-card">
    <span class="data-card-title">Titular</span>
    <ol>
      <li>Identificación oficial</li>
      <li>Comprobante de domicilio</li>
      <li>RFC</li>
      <li>Acta de nacimiento</li>
      <li>CURP</li>
      <li>Comprobantes de pago</li>
      <li>Carta de no adeudo de mantenimiento y agua</li>
      <li>Boleta Predial al corriente</li>
    </ol>
  </div>
  <div class="data-card">
    <span class="data-card-title">Si es casado — adicional del cónyuge</span>
    <ul>
      <li>Acta de matrimonio</li>
      <li>Identificación oficial</li>
      <li>Comprobante de domicilio</li>
      <li>RFC</li>
      <li>Acta de nacimiento</li>
      <li>CURP</li>
    </ul>
  </div>
</div>

<h3>Costos</h3>
<table>
  <thead>
    <tr><th>Concepto</th><th>Descripción</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Derechos</strong></td><td>Costos cobrados por el Estado (certificados, inscripción RPP, autorizaciones)</td></tr>
    <tr><td><strong>Traslado de Dominio</strong></td><td>Impuesto municipal. El monto más significativo. Varía por valor comercial o catastral.</td></tr>
    <tr><td><strong>ISR por Adquisición</strong></td><td>Impuesto sobre ganancia obtenida cuando el valor de operación es menor al valor fiscal</td></tr>
    <tr><td><strong>Avalúo</strong></td><td>Requisito legal para determinar valores fiscales del terreno</td></tr>
    <tr><td><strong>Honorarios</strong></td><td>Pago al notario por certeza jurídica de la operación</td></tr>
  </tbody>
</table>

<div class="note-box">*Los requisitos y proceso pueden variar de acuerdo a las reformas y actualizaciones de la Ley.</div>
`
  },

  {
    title: 'Fideicomiso',
    slug: 'fideicomiso',
    section: 'postventa',
    subsection: 'Manual del cliente',
    order: 4,
    tags: ['fideicomiso', 'construcción', 'licencias', 'permisos', 'costos', 'lote habitacional', 'comercial'],
    content: `
<div class="note-box">
  Instrumento jurídico para edificar sobre un terreno <strong>sin haber liquidado el lote en su totalidad</strong>. Las licencias, permisos y planos salen a nombre de la fiduciaria. Protege a ambas partes.
</div>

<h3>Procedimiento</h3>
<div class="data-card">
  <ul>
    <li>El lote debe estar <strong>al corriente en sus pagos</strong>.</li>
    <li>Solicitar presupuesto: <strong>postventa@ciudadmaderas.com</strong></li>
    <li>En <strong>3 días hábiles</strong> se envía el presupuesto.</li>
    <li>Con documentación completa, firma se programa en <strong>8 días hábiles</strong>.</li>
  </ul>
</div>

<h3>Requisitos</h3>
<div class="two-col-grid">
  <div class="data-card">
    <span class="data-card-title">Titular Actual</span>
    <ol>
      <li>Carta instrucción de trámite (www.ciudadmaderas.com)</li>
      <li>Identificación oficial</li>
      <li>Carta de no adeudo de mantenimiento (condominios@gph.mx)</li>
      <li>Boleta Predial al corriente</li>
    </ol>
    <p>Si es casado: ambos cónyuges + identificación + acta de matrimonio.</p>
  </div>
  <div class="data-card">
    <span class="data-card-title">Nuevo Cliente</span>
    <ol>
      <li>Comprobante de domicilio</li>
      <li>Identificación oficial</li>
      <li>Depósito de seriedad</li>
      <li>Comprobante de pago del trámite</li>
      <li>Comprobante de pago de aportaciones a la fecha</li>
      <li>Comprobante de mantenimiento 1 mes adelantado</li>
    </ol>
  </div>
</div>

<h3>Costos</h3>
<table>
  <thead>
    <tr><th>Tipo de Lote</th><th>Concepto</th><th>Costo</th></tr>
  </thead>
  <tbody>
    <tr><td>Habitacional</td><td>Familiares (padres, hijos, hermanos)</td><td>$30,000.00</td></tr>
    <tr><td>Habitacional</td><td>No familiar</td><td>$20,000.00</td></tr>
    <tr><td>Comercial</td><td>Familiares (padres, hijos, hermanos)</td><td>$75,000.00</td></tr>
    <tr><td>Comercial</td><td>No familiar</td><td>$45,000.00</td></tr>
  </tbody>
</table>
<div class="note-box">Costos más IVA. Pueden variar sin previo aviso.</div>
`
  },

  {
    title: 'Disolución de propiedad',
    slug: 'disolucion-propiedad',
    section: 'postventa',
    subsection: 'Manual del cliente',
    order: 5,
    tags: ['disolución', 'copropiedad', 'cambio titular', 'contrato', 'nuevo cliente'],
    content: `
<div class="note-box">
  Aplica cuando un contrato está a nombre de dos o más personas y desean cambiar o quitar a alguno de los titulares, <strong>conservando las mismas condiciones del contrato</strong>.
</div>

<h3>Procedimiento</h3>
<div class="data-card">
  <ol>
    <li>Todos los copropietarios acuden a Atención a Clientes.</li>
    <li>El nuevo cliente paga la misma cantidad que ya aportó cada copropietario, más una mensualidad adelantada.</li>
    <li>En <strong>8 días hábiles</strong>: primera firma de rescisión y nuevo contrato.</li>
    <li>Se entrega cheque al cliente actual con las aportaciones cubiertas por el nuevo cliente.</li>
    <li>Se firman <strong>3 juegos</strong> de contrato y rescisión, se envían al Representante Legal.</li>
    <li>En <strong>8 días hábiles adicionales</strong>: entrega del contrato y rescisión firmados por el RL.</li>
  </ol>
</div>

<h3>Requisitos</h3>
<div class="two-col-grid">
  <div class="data-card">
    <span class="data-card-title">Copropietarios</span>
    <ol>
      <li>Carta instrucción de trámite firmada por todos</li>
      <li>Identificación oficial de cada copropietario</li>
      <li>Carta de no adeudo de mantenimiento (condominios@gph.mx)</li>
      <li>Boleta Predial al corriente</li>
    </ol>
    <p>Si son casados: cónyuge + identificación + acta de matrimonio.</p>
  </div>
  <div class="data-card">
    <span class="data-card-title">Nuevo Cliente</span>
    <ol>
      <li>Comprobante de domicilio</li>
      <li>Identificación oficial</li>
      <li>Depósito de seriedad</li>
      <li>Comprobante de pago del trámite</li>
      <li>Comprobante de aportaciones a la fecha</li>
      <li>Comprobante de mantenimiento 1 mes adelantado</li>
    </ol>
  </div>
</div>

<h3>Costos</h3>
<table>
  <thead>
    <tr><th>Tipo de Lote</th><th>Concepto</th><th>Costo</th></tr>
  </thead>
  <tbody>
    <tr><td>Habitacional</td><td>Familiares (padres, hijos, hermanos)</td><td>$30,000.00</td></tr>
    <tr><td>Habitacional</td><td>No familiar</td><td>$20,000.00</td></tr>
    <tr><td>Comercial</td><td>Familiares (padres, hijos, hermanos)</td><td>$75,000.00</td></tr>
    <tr><td>Comercial</td><td>No familiar</td><td>$45,000.00</td></tr>
  </tbody>
</table>
<div class="note-box">Costos más IVA. La firma es presencial en Atención a Clientes. El cheque solo se entrega al beneficiario del mismo.</div>
`
  },

  {
    title: 'Cancelación de contrato',
    slug: 'cancelacion-contrato',
    section: 'postventa',
    subsection: 'Manual del cliente',
    order: 6,
    tags: ['cancelación', 'rescisión', 'baja', 'devolución', 'penalización'],
    content: `
<div class="note-box">
  Aplica cuando el cliente solicita terminar la relación comercial por motivos personales, de salud, trabajo, etc.
</div>

<h3>Procedimiento</h3>
<div class="data-card">
  <ol>
    <li>El cliente contacta <strong>antes del vencimiento</strong> de su siguiente mensualidad:
      <ul>
        <li>Correo: <strong>postventa@ciudadmaderas.com</strong></li>
        <li>O presencial en oficinas</li>
      </ul>
    </li>
    <li>Con documentación completa se elabora la rescisión y se solicita la devolución (diferencia entre aportado y penalización).</li>
    <li>En <strong>30 días naturales</strong> se firman el convenio de terminación.</li>
    <li>Se entrega cheque para abono a cuenta del titular.</li>
    <li>Se firman <strong>3 juegos</strong> y se envían al Representante Legal.</li>
    <li>En <strong>8 días hábiles</strong> se entrega el documento original al cliente.</li>
  </ol>
</div>

<h3>Requisitos</h3>
<div class="data-card">
  <ol>
    <li>Carta original con datos del lote, motivo y monto a devolver (formato en www.ciudadmaderas.com)</li>
    <li>Identificación oficial</li>
  </ol>
  <p>Si el titular es casado: ambos + identificación + acta de matrimonio.</p>
</div>

<div class="data-card">
  <span class="data-card-title">Costo</span>
  <p>Varía de acuerdo al <strong>historial crediticio</strong> del cliente.</p>
</div>

<div class="note-box">La firma es presencial en Atención a Clientes. El cheque solo se entrega al beneficiario del mismo. *Los requisitos pueden variar según reformas a la Ley.</div>
`
  },

  {
    title: 'Proceso de contratación - Fuerza de ventas México',
    slug: 'proceso-contratacion-fv-mexico',
    section: 'postventa',
    subsection: 'Proceso de contratación FV',
    order: 7,
    tags: ['contratación', 'CRM', 'asesor', 'documentos', 'contrato', 'primera venta', 'Capital Humano'],
    content: `
<h3>Creación del CRM sin documentos completos</h3>
<div class="data-card">
  <ul>
    <li>Solo <strong>Factor Humano</strong> puede solicitar la creación del CRM.</li>
    <li>Se solicita por correo con el formato <em>"solicitud de CRM"</em>. El ejecutivo tiene <strong>24 hrs</strong> para procesarlo.</li>
    <li>El asesor tendrá acceso al sistema pero <strong>no podrá cobrar comisiones</strong> hasta firmar contrato.</li>
    <li>Plazo máximo para entregar documentación completa: <strong>60 días</strong>. Al día 61 se desactiva el CRM.</li>
  </ul>
</div>

<div class="note-box">
  Las firmas de contrato se realizan <strong>todos los días</strong>, con corte a la <strong>1:00 pm</strong>.
</div>

<h3>Documentos para firma de contrato</h3>
<div class="data-card">
  <ul>
    <li>Recibo de primera venta</li>
    <li>Candidatura de ingreso llena y firmada</li>
    <li>Acta de nacimiento</li>
    <li>Identificación oficial (INE ambos lados o Pasaporte vigente)</li>
    <li>CURP</li>
    <li>Comprobante de domicilio no mayor a 2 meses (agua, luz o predial)</li>
    <li>Constancia de Situación Fiscal — máximo 3 meses (no se acepta acuse de movimiento del SAT)</li>
    <li>IAS: Ingresos Asimilables a Salarios</li>
    <li>Carátula bancaria con nombre de la institución, nombre del titular y CLABE interbancaria</li>
  </ul>
</div>

<h3>Documentos que se firman</h3>
<div class="data-card">
  <ul>
    <li>Normas internas</li>
    <li>Anexo 1</li>
    <li>Formato de contrato</li>
    <li>Autorización de descuento de ISR</li>
    <li>Convenio de confidencialidad</li>
    <li>Hojas de seguridad</li>
    <li>Autorización de uso de imagen</li>
  </ul>
</div>
`
  },

  {
    title: 'Proceso de contratación - Fuerza de ventas USA',
    slug: 'proceso-contratacion-fv-usa',
    section: 'postventa',
    subsection: 'Proceso de contratación FV USA',
    order: 8,
    tags: ['contratación', 'USA', 'Wood City', 'W9', 'void check', 'Capital Humano'],
    content: `
<h3>Flujo del proceso</h3>
<div class="data-card">
  <ol>
    <li><strong>Asistente de gerencia</strong> envía solicitud de firma con documentos adjuntos a Capital Humano — lunes a jueves antes de las <strong>13:00 hrs</strong>.</li>
    <li><strong>Capital Humano</strong> revisa documentación y brinda retroalimentación por correo.</li>
    <li><strong>Capital Humano</strong> genera contratos — viernes antes de las <strong>4:00 pm</strong>. Los envía a Lic. Vanessa Moreno.</li>
    <li><strong>Asesores</strong> tienen solo <strong>2 días hábiles</strong> para firma (lunes y martes).</li>
    <li><strong>Capital Humano</strong> revisa firmas los miércoles y manda relación a contraloría el jueves antes de las <strong>6:00 pm</strong>.</li>
  </ol>
</div>

<h3>Directorio Capital Humano</h3>
<table>
  <thead>
    <tr><th>Zona</th><th>Contacto</th><th>Correo</th></tr>
  </thead>
  <tbody>
    <tr><td>Texas</td><td>Yazmin Medina</td><td>capitalhumano.cdjuarez@ciudadmaderas.com</td></tr>
    <tr><td>Florida / San Diego</td><td>Sergio Delgado</td><td>capitalhumano.tijuana@ciudadmaderas.com</td></tr>
    <tr><td>Gerencia CH Norte (CC siempre)</td><td>Viridiana Marín</td><td>capitalhumano.mty@ciudadmaderas.com</td></tr>
  </tbody>
</table>

<h3>Firma</h3>
<div class="note-box">
  Se firman <strong>tres tantos</strong> del Contrato de Prestación de Servicios con <strong>Wood City LLC</strong>.
</div>

<h3>Documentos requeridos (USA)</h3>
<div class="data-card">
  <ol>
    <li><strong>W9</strong> — nombre, dirección, número de seguro social o EIN</li>
    <li><strong>VOID CHECK / Estado de cuenta</strong> — número de ruta, número de cuenta y banco</li>
    <li><strong>Identificación oficial</strong></li>
  </ol>
</div>
`
  },

];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/la-biblia');
    console.log('✅ Connected to MongoDB');

    await Article.deleteMany({});
    console.log('🗑  Cleared existing articles');

    await Article.insertMany(articles);
    console.log(`✅ Seeded ${articles.length} articles`);

    await mongoose.disconnect();
    console.log('🔌 Disconnected');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed error:', err);
    process.exit(1);
  }
}

seed();