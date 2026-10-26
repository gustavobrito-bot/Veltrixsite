import { CalendarCheck, Check, Flame, MapPin, MessageCircle, Minus, Plus, Star, Utensils } from "lucide-react"
import s from "./reserve-animation.module.css"

const days = [
  { d: "QUI", n: "12" },
  { d: "SEX", n: "13" },
  { d: "SÁB", n: "14" },
  { d: "DOM", n: "15" },
]
const times = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30"]

/**
 * Ilustração animada do hero: um celular faz uma reserva em um restaurante
 * fictício ("Brasa & Co."), recebe a confirmação, pula e desliza para dentro
 * do site do restaurante. Só CSS, em loop. Com movimento reduzido, mostra o
 * quadro final parado.
 */
export default function ReserveAnimation() {
  return (
    <div className={s.wrap} aria-hidden="true">
      <div className={s.stage}>
        <div className={s.glow} />

        {/* Site do restaurante */}
        <div className={s.browser}>
          <div className={s.chrome}>
            <span />
            <span />
            <span />
            <div className={s.url}>brasaeco.com.br</div>
          </div>
          <div className={s.viewport}>
            <div className={s.page}>
              <div className={s.nav}>
                <span className={s.brand}>
                  <Flame className="size-3.5" /> Brasa &amp; Co.
                </span>
                <span className={s.navLinks}>Cardápio · Sobre · Contato</span>
                <span className={s.navBtn}>Reservar</span>
              </div>
              <div className={s.heroBlock}>
                <div className={s.heroText}>
                  <small>CHURRASCARIA · SÃO PAULO</small>
                  <strong>Fogo, carne e mesa cheia.</strong>
                  <span className={s.heroBtn}>
                    <CalendarCheck className="size-3" /> Reserve sua mesa
                  </span>
                </div>
                <div className={s.heroArt}>
                  <Utensils className="size-8" />
                </div>
              </div>
              <div className={s.cards}>
                {["Picanha na brasa", "Costela 12h", "Caipirinha da casa"].map((t, i) => (
                  <div key={t} className={s.card}>
                    <div className={`${s.cardImg} ${s[`tone${i}`]}`} />
                    <b>{t}</b>
                    <span>Ver no cardápio →</span>
                  </div>
                ))}
              </div>
              <div className={s.strip}>
                <span>
                  <Star className="size-3" /> 4,9 no Google
                </span>
                <span>
                  <MapPin className="size-3" /> Zona Leste · SP
                </span>
              </div>
              <div className={s.footer} />
            </div>
          </div>
          <div className={s.badge}>
            <CalendarCheck className="size-3.5" /> +1 reserva hoje
          </div>
        </div>

        {/* Celular */}
        <div className={s.phone}>
          <div className={s.screen}>
            <div className={s.notch} />
            <div className={s.appHead}>
              <span className={s.appBrand}>
                <Flame className="size-3" /> Brasa &amp; Co.
              </span>
              <b>Reserve sua mesa</b>
            </div>

            <div className={s.label}>DIA</div>
            <div className={s.days}>
              {days.map((x, i) => (
                <div key={x.n} className={`${s.day} ${i === 2 ? s.daySel : ""}`}>
                  <small>{x.d}</small>
                  {x.n}
                </div>
              ))}
            </div>

            <div className={s.label}>HORÁRIO</div>
            <div className={s.times}>
              {times.map((t, i) => (
                <div key={t} className={`${s.time} ${i === 2 ? s.timeSel : ""}`}>
                  {t}
                </div>
              ))}
            </div>

            <div className={s.label}>PESSOAS</div>
            <div className={s.people}>
              <span>
                <Minus className="size-3" />
              </span>
              <b>
                <i className={s.n2}>2</i>
                <i className={s.n3}>3</i>
                <i className={s.n4}>4</i>
              </b>
              <span>
                <Plus className="size-3" />
              </span>
            </div>

            <div className={s.cta}>Confirmar reserva</div>
            <div className={s.hint}>
              <MessageCircle className="size-3" /> Confirmação pelo WhatsApp
            </div>

            <div className={s.toast}>
              <span className={s.toastIcon}>
                <Check className="size-3" />
              </span>
              <div>
                <b>Reserva confirmada!</b>
                <small>Sáb, 14 · 20:00 · 4 pessoas</small>
              </div>
            </div>

            <div className={s.tap} />
          </div>
        </div>
      </div>
    </div>
  )
}
