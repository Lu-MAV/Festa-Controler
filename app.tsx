const { useState, useEffect } = React;


// ── THEME ────────────────────────────────────────────────────────────
const T = {
  bg: "#F7F0FB",
  surface: "#FFFFFF",
  surfaceAlt: "#EEE4F7",
  primary: "#0ABAB5",
  primaryDark: "#088A86",
  primaryLight: "#B2EEEC",
  pink: "#E87FA0",
  pinkLight: "#FAD6E4",
  gold: "#C9963A",
  goldLight: "#F5E6C8",
  green: "#3AAB72",
  greenLight: "#C8EDD9",
  red: "#D95555",
  redLight: "#FAD6D6",
  text: "#1A1A2E",
  muted: "#7A6E8A",
  border: "#D9CCE8",
  white: "#FFFFFF",
};

// ── STORAGE ──────────────────────────────────────────────────────────
function useLS(key, initial) {
  const [val, setVal] = useState(() => {
    try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : initial; } catch { return initial; }
  });
  const set = (v) => {
    const next = typeof v === "function" ? v(val) : v;
    setVal(next);
    try { localStorage.setItem(key, JSON.stringify(next)); } catch {}
  };
  return [val, set];
}

// ── ICONS ────────────────────────────────────────────────────────────
const Ico = ({ n, s = 20, c }) => {
  const paths = {
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    family: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>,
    chart: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    tasks: <><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></>,
    money: <><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></>,
    plus: <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    x: <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    trash: <><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></>,
    check: <polyline points="20 6 9 17 4 12"/>,
    edit: <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>,
    bag: <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></>,
    import: <><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></>,
  };
  return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{paths[n]}</svg>;
};

// ── SHARED COMPONENTS ────────────────────────────────────────────────
const inp = {
  width: "100%", padding: "10px 12px", borderRadius: 10,
  border: `1.5px solid ${T.border}`, fontSize: 14, color: T.text,
  background: T.white, outline: "none", marginBottom: 8,
  boxSizing: "border-box", fontFamily: "inherit",
};
const btnP = {
  width: "100%", padding: "11px 0", borderRadius: 10, border: "none",
  background: T.primary, color: "#fff", fontSize: 14, fontWeight: 700,
  cursor: "pointer", marginTop: 4,
};
const btnI = {
  background: "transparent", border: "none", color: T.muted,
  cursor: "pointer", padding: 4, borderRadius: 6,
  display: "flex", alignItems: "center", justifyContent: "center",
};
const lbl = { display: "block", fontSize: 11, color: T.muted, fontWeight: 700, marginBottom: 3, textTransform: "uppercase", letterSpacing: 0.5 };

function Card({ children, style }) {
  return <div style={{ background: T.white, borderRadius: 16, border: `1px solid ${T.border}`, padding: "14px 16px", marginBottom: 10, ...style }}>{children}</div>;
}

function StatBox({ label, value, color, small }) {
  return (
    <div style={{ background: T.white, borderRadius: 12, border: `1px solid ${T.border}`, padding: small ? "8px 6px" : "10px 12px", textAlign: "center" }}>
      <div style={{ fontSize: small ? 18 : 22, fontWeight: 800, color, fontFamily: "'Playfair Display', serif" }}>{value}</div>
      <div style={{ fontSize: small ? 9 : 11, color: T.muted, fontWeight: 600 }}>{label}</div>
    </div>
  );
}

function Empty({ text }) {
  return <div style={{ textAlign: "center", padding: "40px 20px", color: T.muted, fontSize: 14 }}><div style={{ fontSize: 32, marginBottom: 8 }}>✨</div>{text}</div>;
}

function SectionHeader({ title, onAdd, addLabel = "+" }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
      <h2 style={{ color: T.primaryDark, fontFamily: "'Playfair Display', serif", fontSize: 20, margin: 0 }}>{title}</h2>
      {onAdd && <button onClick={onAdd} style={{ background: T.primary, color: "#fff", border: "none", borderRadius: 50, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><Ico n="plus" s={16} /></button>}
    </div>
  );
}

// ── CONVIDADOS ───────────────────────────────────────────────────────
const PAYER_AGE = 8;
const isPayer = (g) => g.type === "adulto" || Number(g.age) >= PAYER_AGE;
const emptyGuest = { name: "", family: "", type: "adulto", gender: "feminino", age: "", confirmed: "pendente", notes: "" };

function ConvidadosTab({ guests, setGuests }) {
  const [form, setForm] = useState(emptyGuest);
  const [showForm, setShowForm] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [importText, setImportText] = useState("");
  const [filter, setFilter] = useState("todos");
  const [editId, setEditId] = useState(null);

  const save = () => {
    if (!form.name.trim()) return;
    if (editId) {
      setGuests(guests.map(g => g.id === editId ? { ...form, id: editId, age: form.age ? Number(form.age) : "" } : g));
      setEditId(null);
    } else {
      setGuests([...guests, { ...form, id: Date.now(), age: form.age ? Number(form.age) : "" }]);
    }
    setForm(emptyGuest); setShowForm(false);
  };

  const startEdit = (g) => { setForm({ ...g }); setEditId(g.id); setShowForm(true); setShowImport(false); };
  const remove = (id) => setGuests(guests.filter(g => g.id !== id));
  const setStatus = (id, v) => setGuests(guests.map(g => g.id === id ? { ...g, confirmed: v } : g));

  const importGuests = () => {
    const lines = importText.trim().split("\n").filter(l => l.trim());
    const parsed = lines.map(l => { try { return { ...JSON.parse(l), id: Date.now() + Math.random() }; } catch { return null; } }).filter(Boolean);
    if (parsed.length) { setGuests(prev => [...prev, ...parsed]); setImportText(""); setShowImport(false); }
  };

  const active = guests.filter(g => g.confirmed !== "recusado");
  const stats = {
    total: guests.length,
    confirmados: guests.filter(g => g.confirmed === "confirmado").length,
    pagantes: active.filter(isPayer).length,
    naoPag: active.filter(g => !isPayer(g)).length,
    mulheres: active.filter(g => g.type === "adulto" && g.gender === "feminino").length,
    homens: active.filter(g => g.type === "adulto" && g.gender === "masculino").length,
    meninas: active.filter(g => g.type === "crianca" && g.gender === "feminino").length,
    meninos: active.filter(g => g.type === "crianca" && g.gender === "masculino").length,
  };

  const statusColors = { confirmado: T.green, pendente: T.primary, recusado: T.red };
  const filtered = filter === "todos" ? guests
    : filter === "pagante" ? guests.filter(isPayer)
    : filter === "naopagante" ? guests.filter(g => !isPayer(g))
    : guests.filter(g => g.confirmed === filter);

  const emojiMap = { adulto: { feminino: "👩", masculino: "👨" }, crianca: { feminino: "👧", masculino: "👦" } };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <h2 style={{ color: T.primaryDark, fontFamily: "'Playfair Display', serif", fontSize: 20, margin: 0 }}>👥 Convidados</h2>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => { setShowImport(!showImport); setShowForm(false); setEditId(null); }} title="Importar" style={{ background: T.primaryDark, color: "#fff", border: "none", borderRadius: 50, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><Ico n="import" s={15} /></button>
          <button onClick={() => { setShowForm(!showForm); setShowImport(false); if (showForm) { setForm(emptyGuest); setEditId(null); } }} style={{ background: T.primary, color: "#fff", border: "none", borderRadius: 50, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><Ico n={showForm ? "x" : "plus"} s={16} /></button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginBottom: 6 }}>
        <StatBox label="Total" value={stats.total} color={T.primaryDark} />
        <StatBox label="Confirmados" value={stats.confirmados} color={T.green} />
        <StatBox label="Pagantes" value={stats.pagantes} color={T.primary} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6, marginBottom: 14 }}>
        <StatBox label="Não pag." value={stats.naoPag} color={T.muted} small />
        <StatBox label="Mulheres" value={stats.mulheres} color={T.pink} small />
        <StatBox label="Homens" value={stats.homens} color="#5080C0" small />
        <StatBox label="Meninas" value={stats.meninas} color="#D080B0" small />
        <StatBox label="Meninos" value={stats.meninos} color="#6090D0" small />
      </div>

      {showImport && (
        <div style={{ background: T.surfaceAlt, borderRadius: 16, padding: 16, marginBottom: 14, border: `2px dashed ${T.primary}` }}>
          <div style={{ fontWeight: 700, color: T.primaryDark, fontSize: 14, marginBottom: 4 }}>📋 Importar convidados</div>
          <div style={{ fontSize: 12, color: T.muted, marginBottom: 8 }}>Cole aqui o código gerado pelo Claude.</div>
          <textarea placeholder="Cole o código aqui..." value={importText} onChange={e => setImportText(e.target.value)} style={{ ...inp, height: 90, resize: "none", fontFamily: "monospace", fontSize: 11 }} />
          <button onClick={importGuests} style={btnP}>Importar</button>
        </div>
      )}

      {showForm && (
        <div style={{ background: T.surfaceAlt, borderRadius: 16, padding: 16, marginBottom: 14, border: `1px solid ${T.border}` }}>
          <div style={{ fontWeight: 700, color: T.primaryDark, marginBottom: 10 }}>{editId ? "✏️ Editar convidado" : "➕ Novo convidado"}</div>
          <input placeholder="Nome *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inp} />
          <input placeholder="Família (ex: Família Silva)" value={form.family} onChange={e => setForm({ ...form, family: e.target.value })} style={inp} />
          <label style={lbl}>Tipo</label>
          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            {[["adulto", "👤 Adulto"], ["crianca", "🧒 Criança"]].map(([v, l]) => (
              <button key={v} onClick={() => setForm({ ...form, type: v })} style={{ flex: 1, padding: "8px 0", borderRadius: 8, border: `2px solid ${form.type === v ? T.primary : T.border}`, background: form.type === v ? T.primaryLight : "transparent", color: form.type === v ? T.primaryDark : T.muted, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>{l}</button>
            ))}
          </div>
          <label style={lbl}>Gênero</label>
          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            {[["feminino", "♀ Feminino"], ["masculino", "♂ Masculino"]].map(([v, l]) => (
              <button key={v} onClick={() => setForm({ ...form, gender: v })} style={{ flex: 1, padding: "8px 0", borderRadius: 8, border: `2px solid ${form.gender === v ? T.pink : T.border}`, background: form.gender === v ? T.pinkLight : "transparent", color: form.gender === v ? T.pink : T.muted, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>{l}</button>
            ))}
          </div>
          {form.type === "crianca" && (
            <>
              <label style={lbl}>Idade</label>
              <input type="number" min="0" max="17" placeholder="Ex: 6" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} style={inp} />
              {form.age !== "" && <div style={{ fontSize: 12, marginBottom: 8, color: Number(form.age) >= PAYER_AGE ? T.green : T.primary, fontWeight: 600 }}>{Number(form.age) >= PAYER_AGE ? "✅ Pagante" : "🎁 Não pagante"}</div>}
            </>
          )}
          <label style={lbl}>Status</label>
          <select value={form.confirmed} onChange={e => setForm({ ...form, confirmed: e.target.value })} style={inp}>
            <option value="pendente">⏳ Pendente</option>
            <option value="confirmado">✅ Confirmado</option>
            <option value="recusado">❌ Recusado</option>
          </select>
          <textarea placeholder="Observações" value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} style={{ ...inp, height: 56, resize: "none" }} />
          <button onClick={save} style={btnP}>{editId ? "Salvar alterações" : "Adicionar"}</button>
        </div>
      )}

      {/* Filters */}
      <div style={{ display: "flex", gap: 5, marginBottom: 12, flexWrap: "wrap" }}>
        {[["todos","Todos"],["confirmado","✅"],["pendente","⏳"],["pagante","💰 Pag."],["naopagante","🎁 N.Pag."]].map(([v,l]) => (
          <button key={v} onClick={() => setFilter(v)} style={{ padding: "4px 10px", borderRadius: 20, border: `1.5px solid ${filter === v ? T.primary : T.border}`, background: filter === v ? T.primary : "transparent", color: filter === v ? "#fff" : T.muted, fontSize: 11, fontWeight: 600, cursor: "pointer" }}>{l}</button>
        ))}
      </div>

      {filtered.length === 0 && <Empty text="Nenhum convidado aqui" />}
      {filtered.map(g => {
        const payer = isPayer(g);
        return (
          <Card key={g.id}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 16 }}>{emojiMap[g.type]?.[g.gender]}</span>
                  <span style={{ fontWeight: 700, color: T.text, fontSize: 15 }}>{g.name}</span>
                  <span style={{ fontSize: 10, padding: "2px 7px", borderRadius: 10, background: payer ? T.greenLight : T.primaryLight, color: payer ? T.green : T.primaryDark, fontWeight: 700 }}>{payer ? "Pagante" : "Não pag."}</span>
                </div>
                {g.family && <div style={{ color: T.muted, fontSize: 12, marginLeft: 22 }}>{g.family}</div>}
                <div style={{ fontSize: 12, color: T.muted, marginTop: 2, marginLeft: 22 }}>
                  {g.type === "crianca" ? `Criança${g.age !== "" ? ` · ${g.age} anos` : ""}` : "Adulto"} · {g.gender === "feminino" ? "Feminino" : "Masculino"}
                </div>
                {g.notes && <div style={{ fontSize: 12, color: T.muted, marginTop: 2, marginLeft: 22, fontStyle: "italic" }}>{g.notes}</div>}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <select value={g.confirmed} onChange={e => setStatus(g.id, e.target.value)} style={{ fontSize: 11, borderRadius: 8, border: `1.5px solid ${statusColors[g.confirmed]}`, color: statusColors[g.confirmed], padding: "3px 5px", background: statusColors[g.confirmed] + "15", cursor: "pointer", outline: "none" }}>
                  <option value="pendente">⏳</option>
                  <option value="confirmado">✅</option>
                  <option value="recusado">❌</option>
                </select>
                <button onClick={() => startEdit(g)} style={btnI}><Ico n="edit" s={14} /></button>
                <button onClick={() => remove(g.id)} style={{ ...btnI, color: T.red }}><Ico n="trash" s={14} /></button>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

// ── FAMÍLIAS ─────────────────────────────────────────────────────────
function FamiliasTab({ guests, setGuests }) {
  const families = {};
  guests.forEach(g => {
    const key = g.family || "Sem família";
    if (!families[key]) families[key] = [];
    families[key].push(g);
  });

  const [expanded, setExpanded] = useState({});
  const toggle = (k) => setExpanded(e => ({ ...e, [k]: !e[k] }));
  const remove = (id) => setGuests(guests.filter(g => g.id !== id));
  const setStatus = (id, v) => setGuests(guests.map(g => g.id === id ? { ...g, confirmed: v } : g));

  const statusColors = { confirmado: T.green, pendente: T.primary, recusado: T.red };
  const emojiMap = { adulto: { feminino: "👩", masculino: "👨" }, crianca: { feminino: "👧", masculino: "👦" } };

  const familyKeys = Object.keys(families).sort();

  return (
    <div>
      <SectionHeader title="👨‍👩‍👧 Famílias" />
      <div style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>
        {familyKeys.length} grupo{familyKeys.length !== 1 ? "s" : ""} · {guests.length} pessoa{guests.length !== 1 ? "s" : ""}
      </div>

      {familyKeys.length === 0 && <Empty text="Nenhuma família cadastrada ainda" />}
      {familyKeys.map(key => {
        const members = families[key];
        const confirmed = members.filter(g => g.confirmed === "confirmado").length;
        const pagantes = members.filter(isPayer).length;
        const isOpen = expanded[key];
        return (
          <div key={key} style={{ marginBottom: 10 }}>
            <div onClick={() => toggle(key)} style={{ background: T.surfaceAlt, borderRadius: isOpen ? "14px 14px 0 0" : 14, border: `1px solid ${T.border}`, padding: "12px 16px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 700, color: T.primaryDark, fontSize: 15 }}>{key}</div>
                <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>
                  {members.length} pessoa{members.length !== 1 ? "s" : ""} · {confirmed} confirmado{confirmed !== 1 ? "s" : ""} · {pagantes} pagante{pagantes !== 1 ? "s" : ""}
                </div>
              </div>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 13, color: T.primary, fontWeight: 700 }}>{isOpen ? "▲" : "▼"}</span>
              </div>
            </div>
            {isOpen && (
              <div style={{ border: `1px solid ${T.border}`, borderTop: "none", borderRadius: "0 0 14px 14px", overflow: "hidden" }}>
                {members.map((g, i) => (
                  <div key={g.id} style={{ padding: "10px 16px", borderTop: i > 0 ? `1px solid ${T.border}` : "none", display: "flex", justifyContent: "space-between", alignItems: "center", background: T.white }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 16 }}>{emojiMap[g.type]?.[g.gender]}</span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14, color: T.text }}>{g.name}</div>
                        <div style={{ fontSize: 11, color: T.muted }}>
                          {g.type === "crianca" ? `${g.age ? g.age + " anos" : "criança"}` : "adulto"} · {isPayer(g) ? "pagante" : "não pag."}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                      <select value={g.confirmed} onChange={e => setStatus(g.id, e.target.value)} style={{ fontSize: 11, borderRadius: 8, border: `1.5px solid ${statusColors[g.confirmed]}`, color: statusColors[g.confirmed], padding: "3px 5px", background: statusColors[g.confirmed] + "15", cursor: "pointer", outline: "none" }}>
                        <option value="pendente">⏳</option>
                        <option value="confirmado">✅</option>
                        <option value="recusado">❌</option>
                      </select>
                      <button onClick={() => remove(g.id)} style={{ ...btnI, color: T.red }}><Ico n="trash" s={13} /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── RESUMO ────────────────────────────────────────────────────────────
function ResumoTab({ guests, financeiro }) {
  const active = guests.filter(g => g.confirmed !== "recusado");
  const stats = {
    total: guests.length, confirmados: guests.filter(g => g.confirmed === "confirmado").length,
    pendentes: guests.filter(g => g.confirmed === "pendente").length,
    recusados: guests.filter(g => g.confirmed === "recusado").length,
    pagantes: active.filter(isPayer).length, naoPag: active.filter(g => !isPayer(g)).length,
    mulheres: active.filter(g => g.type === "adulto" && g.gender === "feminino").length,
    homens: active.filter(g => g.type === "adulto" && g.gender === "masculino").length,
    meninas: active.filter(g => g.type === "crianca" && g.gender === "feminino").length,
    meninos: active.filter(g => g.type === "crianca" && g.gender === "masculino").length,
    criancas: active.filter(g => g.type === "crianca").length,
    adultos: active.filter(g => g.type === "adulto").length,
  };

  const totalGasto = financeiro.reduce((s, f) => s + (Number(f.valor) || 0), 0);
  const totalOrc = financeiro.reduce((s, f) => s + (Number(f.orcamento) || 0), 0);
  const fmt = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const exportExcel = () => {
    const headers = ["Nome","Família","Tipo","Gênero","Idade","Status","Pagante","Observações"];
    const rows = guests.map(g => [
      g.name, g.family, g.type === "adulto" ? "Adulto" : "Criança",
      g.gender === "feminino" ? "Feminino" : "Masculino",
      g.age || "", g.confirmed, isPayer(g) ? "Sim" : "Não", g.notes || ""
    ]);
    const csv = [headers, ...rows].map(r => r.map(c => `"${String(c).replace(/"/g,'""')}"`).join(",")).join("\n");
    const BOM = "\uFEFF";
    const blob = new Blob([BOM + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "convidados-livia.csv"; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <h2 style={{ color: T.primaryDark, fontFamily: "'Playfair Display', serif", fontSize: 20, margin: 0 }}>📊 Resumo</h2>
        <button onClick={exportExcel} style={{ display: "flex", alignItems: "center", gap: 6, background: T.green, color: "#fff", border: "none", borderRadius: 10, padding: "8px 14px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
          <Ico n="download" s={14} /> Excel
        </button>
      </div>

      <div style={{ background: T.surfaceAlt, borderRadius: 14, padding: 14, marginBottom: 14, border: `1px solid ${T.border}` }}>
        <div style={{ fontWeight: 700, color: T.primaryDark, marginBottom: 10, fontSize: 14 }}>👥 Convidados</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 8 }}>
          <StatBox label="Total" value={stats.total} color={T.primaryDark} />
          <StatBox label="Confirmados" value={stats.confirmados} color={T.green} />
          <StatBox label="Pendentes" value={stats.pendentes} color={T.primary} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 8 }}>
          <StatBox label="Recusados" value={stats.recusados} color={T.red} />
          <StatBox label="Adultos" value={stats.adultos} color={T.primaryDark} />
          <StatBox label="Crianças" value={stats.criancas} color={T.pink} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6 }}>
          <StatBox label="Pagantes" value={stats.pagantes} color={T.green} small />
          <StatBox label="Não pag." value={stats.naoPag} color={T.muted} small />
          <StatBox label="Mulheres" value={stats.mulheres} color={T.pink} small />
          <StatBox label="Homens" value={stats.homens} color="#5080C0" small />
          <StatBox label="Meninas" value={stats.meninas} color="#D080B0" small />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(1,1fr)", gap: 6, marginTop: 6 }}>
          <StatBox label="Meninos" value={stats.meninos} color="#6090D0" small />
        </div>
      </div>

      <div style={{ background: T.surfaceAlt, borderRadius: 14, padding: 14, border: `1px solid ${T.border}` }}>
        <div style={{ fontWeight: 700, color: T.primaryDark, marginBottom: 10, fontSize: 14 }}>💰 Financeiro</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <StatBox label="Orçamento total" value={fmt(totalOrc)} color={T.primaryDark} />
          <StatBox label="Gasto total" value={fmt(totalGasto)} color={totalGasto > totalOrc ? T.red : T.green} />
        </div>
        {totalOrc > 0 && (
          <div style={{ marginTop: 10 }}>
            <div style={{ fontSize: 12, color: T.muted, marginBottom: 4 }}>Utilizado: {Math.round((totalGasto / totalOrc) * 100)}%</div>
            <div style={{ background: T.border, borderRadius: 10, height: 10, overflow: "hidden" }}>
              <div style={{ width: `${Math.min(100, (totalGasto / totalOrc) * 100)}%`, background: totalGasto > totalOrc ? T.red : T.primary, height: "100%", borderRadius: 10, transition: "width 0.5s" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── TAREFAS ───────────────────────────────────────────────────────────
const defaultTasks = [
  { id: 1, text: "Contratar fotógrafo", done: false, section: "festa" },
  { id: 2, text: "Contratar decoração", done: false, section: "festa" },
  { id: 3, text: "Comprar lembrancinhas meninas", done: false, section: "festa" },
  { id: 4, text: "Comprar lembrancinhas meninos", done: false, section: "festa" },
  { id: 5, text: "Comprar lembrancinhas mulheres", done: false, section: "festa" },
  { id: 6, text: "Vestido da Lívia", done: false, section: "festa" },
  { id: 7, text: "Agendar cabeleireiro do dia", done: false, section: "festa" },
  { id: 8, text: "Confirmar buffet", done: false, section: "festa" },
  { id: 9, text: "Bolo", done: false, section: "festa" },
  { id: 10, text: "Vestido da aniversariante", done: false, section: "dia" },
  { id: 11, text: "Lembrancinhas", done: false, section: "dia" },
  { id: 12, text: "Lista de músicas", done: false, section: "dia" },
  { id: 13, text: "Carregador de celular", done: false, section: "dia" },
  { id: 14, text: "Documentos e convites", done: false, section: "dia" },
  { id: 15, text: "Maquiagem e acessórios", done: false, section: "dia" },
];

function TarefasTab() {
  const [tasks, setTasks] = useLS("livia-tasks", defaultTasks);
  const [newText, setNewText] = useState("");
  const [newSection, setNewSection] = useState("festa");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const add = () => {
    if (!newText.trim()) return;
    setTasks(t => [...t, { id: Date.now(), text: newText, done: false, section: newSection }]);
    setNewText("");
  };

  const toggle = (id) => setTasks(t => t.map(x => x.id === id ? { ...x, done: !x.done } : x));
  const remove = (id) => setTasks(t => t.filter(x => x.id !== id));
  const saveEdit = (id) => { setTasks(t => t.map(x => x.id === id ? { ...x, text: editText } : x)); setEditId(null); };

  const render = (section, title, icon) => {
    const items = tasks.filter(t => t.section === section);
    const done = items.filter(t => t.done).length;
    return (
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div style={{ fontWeight: 700, color: T.primaryDark, fontSize: 15 }}>{icon} {title}</div>
          <span style={{ background: T.primaryLight, color: T.primaryDark, borderRadius: 20, padding: "2px 10px", fontSize: 12, fontWeight: 700 }}>{done}/{items.length}</span>
        </div>
        {items.map(t => (
          <div key={t.id} style={{ background: T.white, borderRadius: 12, padding: "10px 12px", marginBottom: 6, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", gap: 10 }}>
            <button onClick={() => toggle(t.id)} style={{ width: 22, height: 22, borderRadius: 6, border: `2px solid ${t.done ? T.green : T.border}`, background: t.done ? T.green : "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, color: "#fff" }}>
              {t.done && <Ico n="check" s={12} c="#fff" />}
            </button>
            {editId === t.id ? (
              <>
                <input value={editText} onChange={e => setEditText(e.target.value)} onKeyDown={e => e.key === "Enter" && saveEdit(t.id)} style={{ ...inp, margin: 0, flex: 1, padding: "6px 10px" }} autoFocus />
                <button onClick={() => saveEdit(t.id)} style={{ ...btnI, color: T.green }}><Ico n="check" s={14} /></button>
                <button onClick={() => setEditId(null)} style={btnI}><Ico n="x" s={14} /></button>
              </>
            ) : (
              <>
                <span style={{ flex: 1, fontSize: 14, color: T.text, textDecoration: t.done ? "line-through" : "none", opacity: t.done ? 0.5 : 1 }}>{t.text}</span>
                <button onClick={() => { setEditId(t.id); setEditText(t.text); }} style={btnI}><Ico n="edit" s={13} /></button>
                <button onClick={() => remove(t.id)} style={{ ...btnI, color: T.red }}><Ico n="trash" s={13} /></button>
              </>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <SectionHeader title="✅ Tarefas" />
      <div style={{ background: T.surfaceAlt, borderRadius: 14, padding: 12, marginBottom: 16, border: `1px solid ${T.border}` }}>
        <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
          {[["festa","📋 Festa"],["dia","🎒 Levar no dia"]].map(([v,l]) => (
            <button key={v} onClick={() => setNewSection(v)} style={{ flex: 1, padding: "7px 0", borderRadius: 8, border: `2px solid ${newSection === v ? T.primary : T.border}`, background: newSection === v ? T.primaryLight : "transparent", color: newSection === v ? T.primaryDark : T.muted, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>{l}</button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <input placeholder="Nova tarefa..." value={newText} onChange={e => setNewText(e.target.value)} onKeyDown={e => e.key === "Enter" && add()} style={{ ...inp, margin: 0, flex: 1 }} />
          <button onClick={add} style={{ ...btnP, margin: 0, width: "auto", padding: "0 16px" }}>+</button>
        </div>
      </div>
      {render("festa", "Preparativos da Festa", "📋")}
      {render("dia", "O que levar no dia", "🎒")}
    </div>
  );
}

// ── FINANCEIRO ────────────────────────────────────────────────────────
const defaultCats = [
  { id: 1, categoria: "Buffet", orcamento: "", valor: "", pago: false, notes: "" },
  { id: 2, categoria: "Decoração", orcamento: "", valor: "", pago: false, notes: "" },
  { id: 3, categoria: "Bolo", orcamento: "", valor: "", pago: false, notes: "" },
  { id: 4, categoria: "Lembrancinhas", orcamento: "", valor: "", pago: false, notes: "" },
  { id: 5, categoria: "Fotógrafo", orcamento: "", valor: "", pago: false, notes: "" },
  { id: 6, categoria: "Vestido", orcamento: "", valor: "", pago: false, notes: "" },
  { id: 7, categoria: "Cabeleireiro", orcamento: "", valor: "", pago: false, notes: "" },
];

function FinanceiroTab({ financeiro, setFinanceiro }) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ categoria: "", orcamento: "", valor: "", pago: false, notes: "" });
  const [editId, setEditId] = useState(null);

  const save = () => {
    if (!form.categoria.trim()) return;
    if (editId) {
      setFinanceiro(f => f.map(x => x.id === editId ? { ...form, id: editId } : x));
      setEditId(null);
    } else {
      setFinanceiro(f => [...f, { ...form, id: Date.now() }]);
    }
    setForm({ categoria: "", orcamento: "", valor: "", pago: false, notes: "" });
    setShowForm(false);
  };

  const startEdit = (item) => { setForm({ ...item }); setEditId(item.id); setShowForm(true); };
  const remove = (id) => setFinanceiro(f => f.filter(x => x.id !== id));
  const togglePago = (id) => setFinanceiro(f => f.map(x => x.id === id ? { ...x, pago: !x.pago } : x));

  const totalOrc = financeiro.reduce((s, f) => s + (Number(f.orcamento) || 0), 0);
  const totalVal = financeiro.reduce((s, f) => s + (Number(f.valor) || 0), 0);
  const totalPago = financeiro.filter(f => f.pago).reduce((s, f) => s + (Number(f.valor) || 0), 0);
  const fmt = (v) => v ? Number(v).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : "—";

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <h2 style={{ color: T.primaryDark, fontFamily: "'Playfair Display', serif", fontSize: 20, margin: 0 }}>💰 Financeiro</h2>
        <button onClick={() => { setShowForm(!showForm); if (showForm) { setForm({ categoria: "", orcamento: "", valor: "", pago: false, notes: "" }); setEditId(null); } }} style={{ background: T.primary, color: "#fff", border: "none", borderRadius: 50, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <Ico n={showForm ? "x" : "plus"} s={16} />
        </button>
      </div>

      {/* Totals */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
        <div style={{ background: T.white, borderRadius: 12, border: `1px solid ${T.border}`, padding: "10px 8px", textAlign: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: T.primaryDark }}>{fmt(totalOrc)}</div>
          <div style={{ fontSize: 10, color: T.muted, fontWeight: 600 }}>Orçamento</div>
        </div>
        <div style={{ background: T.white, borderRadius: 12, border: `1px solid ${T.border}`, padding: "10px 8px", textAlign: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: totalVal > totalOrc && totalOrc > 0 ? T.red : T.green }}>{fmt(totalVal)}</div>
          <div style={{ fontSize: 10, color: T.muted, fontWeight: 600 }}>Gasto</div>
        </div>
        <div style={{ background: T.white, borderRadius: 12, border: `1px solid ${T.border}`, padding: "10px 8px", textAlign: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: T.gold }}>{fmt(totalPago)}</div>
          <div style={{ fontSize: 10, color: T.muted, fontWeight: 600 }}>Pago</div>
        </div>
      </div>

      {showForm && (
        <div style={{ background: T.surfaceAlt, borderRadius: 16, padding: 16, marginBottom: 14, border: `1px solid ${T.border}` }}>
          <div style={{ fontWeight: 700, color: T.primaryDark, marginBottom: 10 }}>{editId ? "✏️ Editar item" : "➕ Novo item"}</div>
          <input placeholder="Categoria *" value={form.categoria} onChange={e => setForm({ ...form, categoria: e.target.value })} style={inp} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            <div>
              <label style={lbl}>Orçamento (R$)</label>
              <input type="number" placeholder="0,00" value={form.orcamento} onChange={e => setForm({ ...form, orcamento: e.target.value })} style={inp} />
            </div>
            <div>
              <label style={lbl}>Valor gasto (R$)</label>
              <input type="number" placeholder="0,00" value={form.valor} onChange={e => setForm({ ...form, valor: e.target.value })} style={inp} />
            </div>
          </div>
          <textarea placeholder="Observações (fornecedor, contato, etc.)" value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} style={{ ...inp, height: 56, resize: "none" }} />
          <button onClick={save} style={btnP}>{editId ? "Salvar" : "Adicionar"}</button>
        </div>
      )}

      {financeiro.map(item => {
        const orc = Number(item.orcamento) || 0;
        const val = Number(item.valor) || 0;
        const over = orc > 0 && val > orc;
        return (
          <Card key={item.id}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontWeight: 700, color: T.text, fontSize: 15 }}>{item.categoria}</span>
                  {item.pago && <span style={{ fontSize: 10, padding: "2px 7px", borderRadius: 10, background: T.greenLight, color: T.green, fontWeight: 700 }}>Pago ✅</span>}
                  {over && <span style={{ fontSize: 10, padding: "2px 7px", borderRadius: 10, background: T.redLight, color: T.red, fontWeight: 700 }}>Acima do orç.</span>}
                </div>
                <div style={{ display: "flex", gap: 16, marginTop: 6 }}>
                  {item.orcamento && <div style={{ fontSize: 12, color: T.muted }}>Orç: <span style={{ fontWeight: 700, color: T.primaryDark }}>{fmt(item.orcamento)}</span></div>}
                  {item.valor && <div style={{ fontSize: 12, color: T.muted }}>Gasto: <span style={{ fontWeight: 700, color: over ? T.red : T.green }}>{fmt(item.valor)}</span></div>}
                </div>
                {item.notes && <div style={{ fontSize: 12, color: T.muted, marginTop: 4, fontStyle: "italic" }}>{item.notes}</div>}
              </div>
              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <button onClick={() => togglePago(item.id)} title={item.pago ? "Marcar como não pago" : "Marcar como pago"} style={{ ...btnI, color: item.pago ? T.green : T.muted }}><Ico n="check" s={15} /></button>
                <button onClick={() => startEdit(item)} style={btnI}><Ico n="edit" s={14} /></button>
                <button onClick={() => remove(item.id)} style={{ ...btnI, color: T.red }}><Ico n="trash" s={14} /></button>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

// ── APP ───────────────────────────────────────────────────────────────
const TABS = [
  { id: "convidados", label: "Convidados", icon: "users" },
  { id: "familias", label: "Famílias", icon: "family" },
  { id: "resumo", label: "Resumo", icon: "chart" },
  { id: "tarefas", label: "Tarefas", icon: "tasks" },
  { id: "financeiro", label: "Finanças", icon: "money" },
];

function App() {
  const [tab, setTab] = useState("convidados");
  const [guests, setGuests] = useLS("livia-guests", []);
  const [financeiro, setFinanceiro] = useLS("livia-financeiro", defaultCats);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: T.bg, fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column", maxWidth: 480, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ background: `linear-gradient(135deg, ${T.primaryDark} 0%, ${T.primary} 100%)`, padding: "20px 20px 16px", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ color: T.primaryLight, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 2 }}>🎉 Festa da</div>
        <div style={{ color: T.white, fontFamily: "'Playfair Display', serif", fontSize: 28, lineHeight: 1.1 }}>Lívia ✨</div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "18px 14px 90px", overflowY: "auto" }}>
        {tab === "convidados" && <ConvidadosTab guests={guests} setGuests={setGuests} />}
        {tab === "familias" && <FamiliasTab guests={guests} setGuests={setGuests} />}
        {tab === "resumo" && <ResumoTab guests={guests} financeiro={financeiro} />}
        {tab === "tarefas" && <TarefasTab />}
        {tab === "financeiro" && <FinanceiroTab financeiro={financeiro} setFinanceiro={setFinanceiro} />}
      </div>

      {/* Bottom Nav */}
      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 480, background: T.white, borderTop: `1px solid ${T.border}`, display: "flex", zIndex: 20 }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{ flex: 1, padding: "10px 0 8px", background: "transparent", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, color: tab === t.id ? T.primary : T.muted }}>
            <Ico n={t.icon} s={20} />
            <span style={{ fontSize: 9, fontWeight: tab === t.id ? 700 : 500 }}>{t.label}</span>
            {tab === t.id && <div style={{ width: 4, height: 4, borderRadius: "50%", background: T.primary, marginTop: -1 }} />}
          </button>
        ))}
      </div>
    </div>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
