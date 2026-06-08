const { useState, useEffect, useCallback } = React;

const SUPABASE_URL = "https://nfuatpojarerrclrivyf.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mdWF0cG9qYXJlcnJjbHJpdnlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4NjE5MDcsImV4cCI6MjA5NjQzNzkwN30.7-GlhugtmU4WtE7LUSavZ_TD4yeuqByw7ITUvbU-jSk";

const db = {
  async get(table) {
    try {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/${table}?order=created_at`, {
        headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }
      });
      return await r.json();
    } catch(e) { return []; }
  },
  async insert(table, data) {
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
        method: "POST",
        headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, "Content-Type": "application/json", Prefer: "return=minimal" },
        body: JSON.stringify(data)
      });
    } catch(e) {}
  },
  async update(table, id, data) {
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
        method: "PATCH",
        headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
    } catch(e) {}
  },
  async remove(table, id) {
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
        method: "DELETE",
        headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }
      });
    } catch(e) {}
  }
};

const T = {
  bg:"#F7F0FB",surface:"#FFFFFF",surfaceAlt:"#EEE4F7",
  primary:"#0ABAB5",primaryDark:"#088A86",primaryLight:"#B2EEEC",
  pink:"#E87FA0",pinkLight:"#FAD6E4",green:"#3AAB72",greenLight:"#C8EDD9",
  red:"#D95555",redLight:"#FAD6D6",gold:"#C9963A",
  text:"#1A1A2E",muted:"#7A6E8A",border:"#D9CCE8",white:"#FFFFFF",
};

const s = {
  inp:{ width:"100%",padding:"10px 12px",borderRadius:10,border:`1.5px solid ${T.border}`,fontSize:14,color:T.text,background:T.white,outline:"none",marginBottom:8,boxSizing:"border-box",fontFamily:"inherit" },
  btn:{ width:"100%",padding:"11px 0",borderRadius:10,border:"none",background:T.primary,color:"#fff",fontSize:14,fontWeight:700,cursor:"pointer",marginTop:4 },
  ico:{ background:"transparent",border:"none",color:T.muted,cursor:"pointer",padding:4,borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center" },
  lbl:{ display:"block",fontSize:11,color:T.muted,fontWeight:700,marginBottom:3,textTransform:"uppercase",letterSpacing:0.5 },
};

function Spin() {
  return React.createElement("div",{style:{textAlign:"center",padding:"40px 20px",color:T.muted}},
    React.createElement("div",{style:{fontSize:32}},"⏳"),
    React.createElement("div",{style:{marginTop:8,fontSize:14}},"Carregando...")
  );
}

function Empty({text}) {
  return React.createElement("div",{style:{textAlign:"center",padding:"40px 20px",color:T.muted,fontSize:14}},
    React.createElement("div",{style:{fontSize:32,marginBottom:8}},"✨"), text
  );
}

function StatBox({label,value,color,small}) {
  return React.createElement("div",{style:{background:T.white,borderRadius:12,border:`1px solid ${T.border}`,padding:small?"8px 4px":"10px 12px",textAlign:"center"}},
    React.createElement("div",{style:{fontSize:small?16:20,fontWeight:800,color}},value),
    React.createElement("div",{style:{fontSize:small?9:11,color:T.muted,fontWeight:600}},label)
  );
}

const PAYER_AGE = 8;
const isPayer = g => g.type==="adulto" || Number(g.age)>=PAYER_AGE;
const emptyG = {name:"",family:"",type:"adulto",gender:"feminino",age:"",confirmed:"pendente",notes:""};

const defaultTasks = [
  {id:1,text:"Contratar fotógrafo",done:false,section:"festa"},
  {id:2,text:"Contratar decoração",done:false,section:"festa"},
  {id:3,text:"Comprar lembrancinhas meninas",done:false,section:"festa"},
  {id:4,text:"Comprar lembrancinhas meninos",done:false,section:"festa"},
  {id:5,text:"Comprar lembrancinhas mulheres",done:false,section:"festa"},
  {id:6,text:"Vestido da Lívia",done:false,section:"festa"},
  {id:7,text:"Agendar cabeleireiro do dia",done:false,section:"festa"},
  {id:8,text:"Confirmar buffet",done:false,section:"festa"},
  {id:9,text:"Bolo",done:false,section:"festa"},
  {id:10,text:"Vestido da aniversariante",done:false,section:"dia"},
  {id:11,text:"Lembrancinhas",done:false,section:"dia"},
  {id:12,text:"Lista de músicas",done:false,section:"dia"},
  {id:13,text:"Carregador de celular",done:false,section:"dia"},
  {id:14,text:"Documentos e convites",done:false,section:"dia"},
  {id:15,text:"Maquiagem e acessórios",done:false,section:"dia"},
];

const defaultFin = [
  {id:101,categoria:"Buffet",orcamento:0,valor:0,pago:false,notes:""},
  {id:102,categoria:"Decoração",orcamento:0,valor:0,pago:false,notes:""},
  {id:103,categoria:"Bolo",orcamento:0,valor:0,pago:false,notes:""},
  {id:104,categoria:"Lembrancinhas",orcamento:0,valor:0,pago:false,notes:""},
  {id:105,categoria:"Fotógrafo",orcamento:0,valor:0,pago:false,notes:""},
  {id:106,categoria:"Vestido",orcamento:0,valor:0,pago:false,notes:""},
  {id:107,categoria:"Cabeleireiro",orcamento:0,valor:0,pago:false,notes:""},
];

// ── CONVIDADOS ───────────────────────────────────────────────────────
function ConvidadosTab({guests,setGuests,loading}) {
  const [form,setForm] = useState(emptyG);
  const [showForm,setShowForm] = useState(false);
  const [showImport,setShowImport] = useState(false);
  const [importText,setImportText] = useState("");
  const [filter,setFilter] = useState("todos");
  const [editId,setEditId] = useState(null);
  const [saving,setSaving] = useState(false);

  const save = async () => {
    if(!form.name.trim()) return;
    setSaving(true);
    const data = {...form, age: form.age?Number(form.age):null};
    if(editId) {
      await db.update("guests",editId,data);
      setGuests(g=>g.map(x=>x.id===editId?{...data,id:editId}:x));
      setEditId(null);
    } else {
      const id = Date.now();
      await db.insert("guests",{...data,id});
      setGuests(g=>[...g,{...data,id}]);
    }
    setForm(emptyG); setShowForm(false); setSaving(false);
  };

  const startEdit = g => { setForm({...g,age:g.age||""}); setEditId(g.id); setShowForm(true); setShowImport(false); };
  const remove = async id => { await db.remove("guests",id); setGuests(g=>g.filter(x=>x.id!==id)); };
  const setStatus = async (id,v) => { await db.update("guests",id,{confirmed:v}); setGuests(g=>g.map(x=>x.id===id?{...x,confirmed:v}:x)); };

  const importGuests = async () => {
    const lines = importText.trim().split("\n").filter(l=>l.trim());
    const parsed = lines.map(l=>{try{return JSON.parse(l);}catch{return null;}}).filter(Boolean);
    if(parsed.length) {
      setSaving(true);
      const newOnes = parsed.map(p=>({...p,id:Date.now()+Math.floor(Math.random()*10000)}));
      for(const g of newOnes) await db.insert("guests",g);
      setGuests(prev=>[...prev,...newOnes]);
      setImportText(""); setShowImport(false); setSaving(false);
    }
  };

  const active = guests.filter(g=>g.confirmed!=="recusado");
  const stats = {
    total:guests.length,
    confirmados:guests.filter(g=>g.confirmed==="confirmado").length,
    pagantes:active.filter(isPayer).length,
    naoPag:active.filter(g=>!isPayer(g)).length,
    mulheres:active.filter(g=>g.type==="adulto"&&g.gender==="feminino").length,
    homens:active.filter(g=>g.type==="adulto"&&g.gender==="masculino").length,
    meninas:active.filter(g=>g.type==="crianca"&&g.gender==="feminino").length,
    meninos:active.filter(g=>g.type==="crianca"&&g.gender==="masculino").length,
  };

  const scMap = {confirmado:T.green,pendente:T.primary,recusado:T.red};
  const filtered = filter==="todos"?guests:filter==="pagante"?guests.filter(isPayer):filter==="naopagante"?guests.filter(g=>!isPayer(g)):guests.filter(g=>g.confirmed===filter);
  const em = {adulto:{feminino:"👩",masculino:"👨"},crianca:{feminino:"👧",masculino:"👦"}};

  const toggleBtn = (val,cur,setVal,label) =>
    React.createElement("button",{onClick:()=>setVal(val),style:{flex:1,padding:"8px 0",borderRadius:8,border:`2px solid ${cur===val?T.primary:T.border}`,background:cur===val?T.primaryLight:"transparent",color:cur===val?T.primaryDark:T.muted,fontSize:13,fontWeight:600,cursor:"pointer"}},label);

  return React.createElement("div",null,
    // Header
    React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}},
      React.createElement("h2",{style:{color:T.primaryDark,fontSize:20,margin:0}},"👥 Convidados"),
      React.createElement("div",{style:{display:"flex",gap:8}},
        React.createElement("button",{onClick:()=>{setShowImport(!showImport);setShowForm(false);},style:{background:T.primaryDark,color:"#fff",border:"none",borderRadius:50,width:34,height:34,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:16}},"📋"),
        React.createElement("button",{onClick:()=>{setShowForm(!showForm);setShowImport(false);if(showForm){setForm(emptyG);setEditId(null);}},style:{background:T.primary,color:"#fff",border:"none",borderRadius:50,width:34,height:34,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:20}},showForm?"×","+")
      )
    ),
    // Stats
    React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:6}},
      React.createElement(StatBox,{label:"Total",value:stats.total,color:T.primaryDark}),
      React.createElement(StatBox,{label:"Confirmados",value:stats.confirmados,color:T.green}),
      React.createElement(StatBox,{label:"Pagantes",value:stats.pagantes,color:T.primary}),
    ),
    React.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:6,marginBottom:14}},
      React.createElement(StatBox,{label:"Não pag.",value:stats.naoPag,color:T.muted,small:true}),
      React.createElement(StatBox,{label:"Mulheres",value:stats.mulheres,color:T.pink,small:true}),
      React.createElement(StatBox,{label:"Homens",value:stats.homens,color:"#5080C0",small:true}),
      React.createElement(StatBox,{label:"Meninas",value:stats.meninas,color:"#D080B0",small:true}),
      React.createElement(StatBox,{label:"Meninos",value:stats.meninos,color:"#6090D0",small:true}),
    ),
    // Import
    showImport && React.createElement("div",{style:{background:T.surfaceAlt,borderRadius:16,padding:16,marginBottom:14,border:`2px dashed ${T.primary}`}},
      React.createElement("div",{style:{fontWeight:700,color:T.primaryDark,marginBottom:4}},"📋 Importar convidados"),
      React.createElement("div",{style:{fontSize:12,color:T.muted,marginBottom:8}},"Cole aqui o código gerado pelo Claude."),
      React.createElement("textarea",{placeholder:"Cole o código aqui...",value:importText,onChange:e=>setImportText(e.target.value),style:{...s.inp,height:90,resize:"none",fontFamily:"monospace",fontSize:11}}),
      React.createElement("button",{onClick:importGuests,disabled:saving,style:{...s.btn,opacity:saving?0.7:1}},saving?"Importando...":"Importar")
    ),
    // Form
    showForm && React.createElement("div",{style:{background:T.surfaceAlt,borderRadius:16,padding:16,marginBottom:14,border:`1px solid ${T.border}`}},
      React.createElement("div",{style:{fontWeight:700,color:T.primaryDark,marginBottom:10}},editId?"✏️ Editar":"➕ Novo convidado"),
      React.createElement("input",{placeholder:"Nome *",value:form.name,onChange:e=>setForm({...form,name:e.target.value}),style:s.inp}),
      React.createElement("input",{placeholder:"Família",value:form.family,onChange:e=>setForm({...form,family:e.target.value}),style:s.inp}),
      React.createElement("label",{style:s.lbl},"Tipo"),
      React.createElement("div",{style:{display:"flex",gap:8,marginBottom:8}},
        toggleBtn("adulto",form.type,v=>setForm({...form,type:v}),"👤 Adulto"),
        toggleBtn("crianca",form.type,v=>setForm({...form,type:v}),"🧒 Criança"),
      ),
      React.createElement("label",{style:s.lbl},"Gênero"),
      React.createElement("div",{style:{display:"flex",gap:8,marginBottom:8}},
        React.createElement("button",{onClick:()=>setForm({...form,gender:"feminino"}),style:{flex:1,padding:"8px 0",borderRadius:8,border:`2px solid ${form.gender==="feminino"?T.pink:T.border}`,background:form.gender==="feminino"?T.pinkLight:"transparent",color:form.gender==="feminino"?T.pink:T.muted,fontSize:13,fontWeight:600,cursor:"pointer"}},"♀ Feminino"),
        React.createElement("button",{onClick:()=>setForm({...form,gender:"masculino"}),style:{flex:1,padding:"8px 0",borderRadius:8,border:`2px solid ${form.gender==="masculino"?"#5080C0":T.border}`,background:form.gender==="masculino"?"#E8F0FA":"transparent",color:form.gender==="masculino"?"#5080C0":T.muted,fontSize:13,fontWeight:600,cursor:"pointer"}},"♂ Masculino"),
      ),
      form.type==="crianca" && React.createElement("div",null,
        React.createElement("label",{style:s.lbl},"Idade"),
        React.createElement("input",{type:"number",min:"0",max:"17",placeholder:"Ex: 6",value:form.age,onChange:e=>setForm({...form,age:e.target.value}),style:s.inp}),
        form.age!=="" && React.createElement("div",{style:{fontSize:12,marginBottom:8,color:Number(form.age)>=PAYER_AGE?T.green:T.primary,fontWeight:600}},Number(form.age)>=PAYER_AGE?"✅ Pagante":"🎁 Não pagante"),
      ),
      React.createElement("label",{style:s.lbl},"Status"),
      React.createElement("select",{value:form.confirmed,onChange:e=>setForm({...form,confirmed:e.target.value}),style:s.inp},
        React.createElement("option",{value:"pendente"},"⏳ Pendente"),
        React.createElement("option",{value:"confirmado"},"✅ Confirmado"),
        React.createElement("option",{value:"recusado"},"❌ Recusado"),
      ),
      React.createElement("textarea",{placeholder:"Observações",value:form.notes,onChange:e=>setForm({...form,notes:e.target.value}),style:{...s.inp,height:56,resize:"none"}}),
      React.createElement("button",{onClick:save,disabled:saving,style:{...s.btn,opacity:saving?0.7:1}},saving?"Salvando...":editId?"Salvar":"Adicionar"),
    ),
    // Filters
    React.createElement("div",{style:{display:"flex",gap:5,marginBottom:12,flexWrap:"wrap"}},
      [["todos","Todos"],["confirmado","✅"],["pendente","⏳"],["pagante","💰 Pag."],["naopagante","🎁 N.Pag."]].map(([v,l])=>
        React.createElement("button",{key:v,onClick:()=>setFilter(v),style:{padding:"4px 10px",borderRadius:20,border:`1.5px solid ${filter===v?T.primary:T.border}`,background:filter===v?T.primary:"transparent",color:filter===v?"#fff":T.muted,fontSize:11,fontWeight:600,cursor:"pointer"}},l)
      )
    ),
    // List
    loading ? React.createElement(Spin,null) :
    filtered.length===0 ? React.createElement(Empty,{text:"Nenhum convidado aqui"}) :
    filtered.map(g => {
      const payer = isPayer(g);
      return React.createElement("div",{key:g.id,style:{background:T.white,borderRadius:14,border:`1px solid ${T.border}`,padding:"12px 14px",marginBottom:8}},
        React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}},
          React.createElement("div",{style:{flex:1}},
            React.createElement("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}},
              React.createElement("span",{style:{fontSize:16}},em[g.type]?.[g.gender]),
              React.createElement("span",{style:{fontWeight:700,color:T.text,fontSize:15}},g.name),
              React.createElement("span",{style:{fontSize:10,padding:"2px 7px",borderRadius:10,background:payer?T.greenLight:T.primaryLight,color:payer?T.green:T.primaryDark,fontWeight:700}},payer?"Pagante":"Não pag."),
            ),
            g.family && React.createElement("div",{style:{color:T.muted,fontSize:12,marginLeft:22}},g.family),
            React.createElement("div",{style:{fontSize:12,color:T.muted,marginTop:2,marginLeft:22}},
              (g.type==="crianca"?`Criança${g.age?` · ${g.age} anos`:""}` :"Adulto")+" · "+(g.gender==="feminino"?"Feminino":"Masculino")
            ),
            g.notes && React.createElement("div",{style:{fontSize:12,color:T.muted,marginTop:2,marginLeft:22,fontStyle:"italic"}},g.notes),
          ),
          React.createElement("div",{style:{display:"flex",alignItems:"center",gap:4}},
            React.createElement("select",{value:g.confirmed,onChange:e=>setStatus(g.id,e.target.value),style:{fontSize:11,borderRadius:8,border:`1.5px solid ${scMap[g.confirmed]}`,color:scMap[g.confirmed],padding:"3px 5px",background:scMap[g.confirmed]+"15",cursor:"pointer",outline:"none"}},
              React.createElement("option",{value:"pendente"},"⏳"),
              React.createElement("option",{value:"confirmado"},"✅"),
              React.createElement("option",{value:"recusado"},"❌"),
            ),
            React.createElement("button",{onClick:()=>startEdit(g),style:s.ico},"✏️"),
            React.createElement("button",{onClick:()=>remove(g.id),style:{...s.ico,color:T.red}},"🗑️"),
          )
        )
      );
    })
  );
}

// ── FAMÍLIAS ─────────────────────────────────────────────────────────
function FamiliasTab({guests,setGuests}) {
  const [expanded,setExpanded] = useState({});
  const toggle = k => setExpanded(e=>({...e,[k]:!e[k]}));
  const remove = async id => { await db.remove("guests",id); setGuests(g=>g.filter(x=>x.id!==id)); };
  const setStatus = async (id,v) => { await db.update("guests",id,{confirmed:v}); setGuests(g=>g.map(x=>x.id===id?{...x,confirmed:v}:x)); };

  const families = {};
  guests.forEach(g=>{ const k=g.family||"Sem família"; if(!families[k]) families[k]=[]; families[k].push(g); });
  const scMap = {confirmado:T.green,pendente:T.primary,recusado:T.red};
  const em = {adulto:{feminino:"👩",masculino:"👨"},crianca:{feminino:"👧",masculino:"👦"}};

  return React.createElement("div",null,
    React.createElement("h2",{style:{color:T.primaryDark,fontSize:20,marginBottom:14}},"👨‍👩‍👧 Famílias"),
    Object.keys(families).length===0 ? React.createElement(Empty,{text:"Nenhuma família cadastrada"}) :
    Object.keys(families).sort().map(key => {
      const members = families[key];
      const confirmed = members.filter(g=>g.confirmed==="confirmado").length;
      const isOpen = expanded[key];
      return React.createElement("div",{key,style:{marginBottom:10}},
        React.createElement("div",{onClick:()=>toggle(key),style:{background:T.surfaceAlt,borderRadius:isOpen?"14px 14px 0 0":14,border:`1px solid ${T.border}`,padding:"12px 16px",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"}},
          React.createElement("div",null,
            React.createElement("div",{style:{fontWeight:700,color:T.primaryDark,fontSize:15}},key),
            React.createElement("div",{style:{fontSize:12,color:T.muted,marginTop:2}},`${members.length} pessoa${members.length!==1?"s":""} · ${confirmed} confirmado${confirmed!==1?"s":""}`)
          ),
          React.createElement("span",{style:{color:T.primary,fontWeight:700}},isOpen?"▲":"▼")
        ),
        isOpen && React.createElement("div",{style:{border:`1px solid ${T.border}`,borderTop:"none",borderRadius:"0 0 14px 14px"}},
          members.map((g,i)=>
            React.createElement("div",{key:g.id,style:{padding:"10px 16px",borderTop:i>0?`1px solid ${T.border}`:"none",display:"flex",justifyContent:"space-between",alignItems:"center",background:T.white}},
              React.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},
                React.createElement("span",{style:{fontSize:16}},em[g.type]?.[g.gender]),
                React.createElement("div",null,
                  React.createElement("div",{style:{fontWeight:600,fontSize:14,color:T.text}},g.name),
                  React.createElement("div",{style:{fontSize:11,color:T.muted}},(g.type==="crianca"?(g.age?`${g.age} anos`:"criança"):"adulto")+" · "+(isPayer(g)?"pagante":"não pag."))
                )
              ),
              React.createElement("div",{style:{display:"flex",gap:4,alignItems:"center"}},
                React.createElement("select",{value:g.confirmed,onChange:e=>setStatus(g.id,e.target.value),style:{fontSize:11,borderRadius:8,border:`1.5px solid ${scMap[g.confirmed]}`,color:scMap[g.confirmed],padding:"3px 5px",background:scMap[g.confirmed]+"15",cursor:"pointer",outline:"none"}},
                  React.createElement("option",{value:"pendente"},"⏳"),
                  React.createElement("option",{value:"confirmado"},"✅"),
                  React.createElement("option",{value:"recusado"},"❌"),
                ),
                React.createElement("button",{onClick:()=>remove(g.id),style:{...s.ico,color:T.red}},"🗑️")
              )
            )
          )
        )
      );
    })
  );
}

// ── RESUMO ────────────────────────────────────────────────────────────
function ResumoTab({guests,financeiro}) {
  const active = guests.filter(g=>g.confirmed!=="recusado");
  const stats = {
    total:guests.length,
    confirmados:guests.filter(g=>g.confirmed==="confirmado").length,
    pendentes:guests.filter(g=>g.confirmed==="pendente").length,
    pagantes:active.filter(isPayer).length,
    naoPag:active.filter(g=>!isPayer(g)).length,
    mulheres:active.filter(g=>g.type==="adulto"&&g.gender==="feminino").length,
    homens:active.filter(g=>g.type==="adulto"&&g.gender==="masculino").length,
    meninas:active.filter(g=>g.type==="crianca"&&g.gender==="feminino").length,
    meninos:active.filter(g=>g.type==="crianca"&&g.gender==="masculino").length,
  };
  const totalGasto = financeiro.reduce((s,f)=>s+(Number(f.valor)||0),0);
  const totalOrc = financeiro.reduce((s,f)=>s+(Number(f.orcamento)||0),0);
  const fmt = v=>v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

  const exportCSV = () => {
    const h = ["Nome","Família","Tipo","Gênero","Idade","Status","Pagante","Obs"];
    const rows = guests.map(g=>[g.name,g.family,g.type==="adulto"?"Adulto":"Criança",g.gender==="feminino"?"Feminino":"Masculino",g.age||"",g.confirmed,isPayer(g)?"Sim":"Não",g.notes||""]);
    const csv = [h,...rows].map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(",")).join("\n");
    const a=document.createElement("a");a.href=URL.createObjectURL(new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8;"}));a.download="convidados.csv";a.click();
  };

  return React.createElement("div",null,
    React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}},
      React.createElement("h2",{style:{color:T.primaryDark,fontSize:20,margin:0}},"📊 Resumo"),
      React.createElement("button",{onClick:exportCSV,style:{background:T.green,color:"#fff",border:"none",borderRadius:10,padding:"8px 14px",fontSize:13,fontWeight:700,cursor:"pointer"}},"⬇️ Excel")
    ),
    React.createElement("div",{style:{background:T.surfaceAlt,borderRadius:14,padding:14,marginBottom:14,border:`1px solid ${T.border}`}},
      React.createElement("div",{style:{fontWeight:700,color:T.primaryDark,marginBottom:10,fontSize:14}},"👥 Convidados"),
      React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:8}},
        React.createElement(StatBox,{label:"Total",value:stats.total,color:T.primaryDark}),
        React.createElement(StatBox,{label:"Confirmados",value:stats.confirmados,color:T.green}),
        React.createElement(StatBox,{label:"Pendentes",value:stats.pendentes,color:T.primary}),
      ),
      React.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:6}},
        React.createElement(StatBox,{label:"Pagantes",value:stats.pagantes,color:T.green,small:true}),
        React.createElement(StatBox,{label:"Não pag.",value:stats.naoPag,color:T.muted,small:true}),
        React.createElement(StatBox,{label:"Mulheres",value:stats.mulheres,color:T.pink,small:true}),
        React.createElement(StatBox,{label:"Meninas",value:stats.meninas,color:"#D080B0",small:true}),
        React.createElement(StatBox,{label:"Meninos",value:stats.meninos,color:"#6090D0",small:true}),
      )
    ),
    React.createElement("div",{style:{background:T.surfaceAlt,borderRadius:14,padding:14,border:`1px solid ${T.border}`}},
      React.createElement("div",{style:{fontWeight:700,color:T.primaryDark,marginBottom:10,fontSize:14}},"💰 Financeiro"),
      React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}},
        React.createElement(StatBox,{label:"Orçamento",value:fmt(totalOrc),color:T.primaryDark}),
        React.createElement(StatBox,{label:"Gasto",value:fmt(totalGasto),color:totalGasto>totalOrc&&totalOrc>0?T.red:T.green}),
      ),
      totalOrc>0 && React.createElement("div",{style:{marginTop:10}},
        React.createElement("div",{style:{fontSize:12,color:T.muted,marginBottom:4}},`Utilizado: ${Math.round((totalGasto/totalOrc)*100)}%`),
        React.createElement("div",{style:{background:T.border,borderRadius:10,height:10}},
          React.createElement("div",{style:{width:`${Math.min(100,(totalGasto/totalOrc)*100)}%`,background:totalGasto>totalOrc?T.red:T.primary,height:"100%",borderRadius:10}})
        )
      )
    )
  );
}

// ── TAREFAS ───────────────────────────────────────────────────────────
function TarefasTab({tasks,setTasks,loading}) {
  const [newText,setNewText] = useState("");
  const [newSection,setNewSection] = useState("festa");
  const [editId,setEditId] = useState(null);
  const [editText,setEditText] = useState("");

  const add = async () => {
    if(!newText.trim()) return;
    const t={id:Date.now(),text:newText,done:false,section:newSection};
    await db.insert("tarefas",t);
    setTasks(prev=>[...prev,t]);
    setNewText("");
  };
  const toggle = async id => { const t=tasks.find(x=>x.id===id); await db.update("tarefas",id,{done:!t.done}); setTasks(prev=>prev.map(x=>x.id===id?{...x,done:!x.done}:x)); };
  const remove = async id => { await db.remove("tarefas",id); setTasks(prev=>prev.filter(x=>x.id!==id)); };
  const saveEdit = async id => { await db.update("tarefas",id,{text:editText}); setTasks(prev=>prev.map(x=>x.id===id?{...x,text:editText}:x)); setEditId(null); };

  const renderSection = (section,title) => {
    const items = tasks.filter(t=>t.section===section);
    const done = items.filter(t=>t.done).length;
    return React.createElement("div",{style:{marginBottom:20}},
      React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}},
        React.createElement("div",{style:{fontWeight:700,color:T.primaryDark,fontSize:15}},title),
        React.createElement("span",{style:{background:T.primaryLight,color:T.primaryDark,borderRadius:20,padding:"2px 10px",fontSize:12,fontWeight:700}},`${done}/${items.length}`)
      ),
      items.map(t=>
        React.createElement("div",{key:t.id,style:{background:T.white,borderRadius:12,padding:"10px 12px",marginBottom:6,border:`1px solid ${T.border}`,display:"flex",alignItems:"center",gap:10}},
          React.createElement("button",{onClick:()=>toggle(t.id),style:{width:22,height:22,borderRadius:6,border:`2px solid ${t.done?T.green:T.border}`,background:t.done?T.green:"transparent",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0,color:"#fff",fontSize:12}},t.done?"✓":""),
          editId===t.id ?
            React.createElement(React.Fragment,null,
              React.createElement("input",{value:editText,onChange:e=>setEditText(e.target.value),onKeyDown:e=>e.key==="Enter"&&saveEdit(t.id),style:{...s.inp,margin:0,flex:1,padding:"6px 10px"},autoFocus:true}),
              React.createElement("button",{onClick:()=>saveEdit(t.id),style:{...s.ico,color:T.green}},"✓"),
              React.createElement("button",{onClick:()=>setEditId(null),style:s.ico},"×"),
            ) :
            React.createElement(React.Fragment,null,
              React.createElement("span",{style:{flex:1,fontSize:14,color:T.text,textDecoration:t.done?"line-through":"none",opacity:t.done?0.5:1}},t.text),
              React.createElement("button",{onClick:()=>{setEditId(t.id);setEditText(t.text);},style:s.ico},"✏️"),
              React.createElement("button",{onClick:()=>remove(t.id),style:{...s.ico,color:T.red}},"🗑️"),
            )
        )
      )
    );
  };

  return React.createElement("div",null,
    React.createElement("h2",{style:{color:T.primaryDark,fontSize:20,marginBottom:14}},"✅ Tarefas"),
    React.createElement("div",{style:{background:T.surfaceAlt,borderRadius:14,padding:12,marginBottom:16,border:`1px solid ${T.border}`}},
      React.createElement("div",{style:{display:"flex",gap:6,marginBottom:8}},
        [["festa","📋 Festa"],["dia","🎒 Levar no dia"]].map(([v,l])=>
          React.createElement("button",{key:v,onClick:()=>setNewSection(v),style:{flex:1,padding:"7px 0",borderRadius:8,border:`2px solid ${newSection===v?T.primary:T.border}`,background:newSection===v?T.primaryLight:"transparent",color:newSection===v?T.primaryDark:T.muted,fontSize:12,fontWeight:600,cursor:"pointer"}},l)
        )
      ),
      React.createElement("div",{style:{display:"flex",gap:8}},
        React.createElement("input",{placeholder:"Nova tarefa...",value:newText,onChange:e=>setNewText(e.target.value),onKeyDown:e=>e.key==="Enter"&&add(),style:{...s.inp,margin:0,flex:1}}),
        React.createElement("button",{onClick:add,style:{...s.btn,margin:0,width:"auto",padding:"0 16px"}},"+")
      )
    ),
    loading ? React.createElement(Spin,null) : React.createElement(React.Fragment,null,
      renderSection("festa","📋 Preparativos da Festa"),
      renderSection("dia","🎒 O que levar no dia"),
    )
  );
}

// ── FINANCEIRO ────────────────────────────────────────────────────────
function FinanceiroTab({financeiro,setFinanceiro,loading}) {
  const [showForm,setShowForm] = useState(false);
  const [form,setForm] = useState({categoria:"",orcamento:"",valor:"",pago:false,notes:""});
  const [editId,setEditId] = useState(null);

  const save = async () => {
    if(!form.categoria.trim()) return;
    const data = {...form,orcamento:Number(form.orcamento)||0,valor:Number(form.valor)||0};
    if(editId) {
      await db.update("financeiro",editId,data);
      setFinanceiro(f=>f.map(x=>x.id===editId?{...data,id:editId}:x));
      setEditId(null);
    } else {
      const id = Date.now();
      await db.insert("financeiro",{...data,id});
      setFinanceiro(f=>[...f,{...data,id}]);
    }
    setForm({categoria:"",orcamento:"",valor:"",pago:false,notes:""}); setShowForm(false);
  };

  const startEdit = item => { setForm({...item}); setEditId(item.id); setShowForm(true); };
  const remove = async id => { await db.remove("financeiro",id); setFinanceiro(f=>f.filter(x=>x.id!==id)); };
  const togglePago = async id => { const item=financeiro.find(x=>x.id===id); await db.update("financeiro",id,{pago:!item.pago}); setFinanceiro(f=>f.map(x=>x.id===id?{...x,pago:!x.pago}:x)); };

  const totalOrc = financeiro.reduce((sum,f)=>sum+(Number(f.orcamento)||0),0);
  const totalVal = financeiro.reduce((sum,f)=>sum+(Number(f.valor)||0),0);
  const totalPago = financeiro.filter(f=>f.pago).reduce((sum,f)=>sum+(Number(f.valor)||0),0);
  const fmt = v=>v?Number(v).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}):"—";

  return React.createElement("div",null,
    React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}},
      React.createElement("h2",{style:{color:T.primaryDark,fontSize:20,margin:0}},"💰 Financeiro"),
      React.createElement("button",{onClick:()=>{setShowForm(!showForm);if(showForm){setForm({categoria:"",orcamento:"",valor:"",pago:false,notes:""});setEditId(null);}},style:{background:T.primary,color:"#fff",border:"none",borderRadius:50,width:34,height:34,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:20}},showForm?"×":"+")
    ),
    React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:14}},
      React.createElement("div",{style:{background:T.white,borderRadius:12,border:`1px solid ${T.border}`,padding:"10px 8px",textAlign:"center"}},
        React.createElement("div",{style:{fontSize:12,fontWeight:800,color:T.primaryDark}},fmt(totalOrc)),
        React.createElement("div",{style:{fontSize:10,color:T.muted,fontWeight:600}},"Orçamento")
      ),
      React.createElement("div",{style:{background:T.white,borderRadius:12,border:`1px solid ${T.border}`,padding:"10px 8px",textAlign:"center"}},
        React.createElement("div",{style:{fontSize:12,fontWeight:800,color:totalVal>totalOrc&&totalOrc>0?T.red:T.green}},fmt(totalVal)),
        React.createElement("div",{style:{fontSize:10,color:T.muted,fontWeight:600}},"Gasto")
      ),
      React.createElement("div",{style:{background:T.white,borderRadius:12,border:`1px solid ${T.border}`,padding:"10px 8px",textAlign:"center"}},
        React.createElement("div",{style:{fontSize:12,fontWeight:800,color:T.gold}},fmt(totalPago)),
        React.createElement("div",{style:{fontSize:10,color:T.muted,fontWeight:600}},"Pago")
      ),
    ),
    showForm && React.createElement("div",{style:{background:T.surfaceAlt,borderRadius:16,padding:16,marginBottom:14,border:`1px solid ${T.border}`}},
      React.createElement("input",{placeholder:"Categoria *",value:form.categoria,onChange:e=>setForm({...form,categoria:e.target.value}),style:s.inp}),
      React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}},
        React.createElement("div",null,React.createElement("label",{style:s.lbl},"Orçamento (R$)"),React.createElement("input",{type:"number",placeholder:"0",value:form.orcamento,onChange:e=>setForm({...form,orcamento:e.target.value}),style:s.inp})),
        React.createElement("div",null,React.createElement("label",{style:s.lbl},"Valor gasto (R$)"),React.createElement("input",{type:"number",placeholder:"0",value:form.valor,onChange:e=>setForm({...form,valor:e.target.value}),style:s.inp})),
      ),
      React.createElement("textarea",{placeholder:"Observações",value:form.notes,onChange:e=>setForm({...form,notes:e.target.value}),style:{...s.inp,height:56,resize:"none"}}),
      React.createElement("button",{onClick:save,style:s.btn},editId?"Salvar":"Adicionar")
    ),
    loading ? React.createElement(Spin,null) :
    financeiro.map(item=>{
      const orc=Number(item.orcamento)||0, val=Number(item.valor)||0, over=orc>0&&val>orc;
      return React.createElement("div",{key:item.id,style:{background:T.white,borderRadius:14,border:`1px solid ${T.border}`,padding:"12px 14px",marginBottom:8}},
        React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}},
          React.createElement("div",{style:{flex:1}},
            React.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}},
              React.createElement("span",{style:{fontWeight:700,color:T.text,fontSize:15}},item.categoria),
              item.pago && React.createElement("span",{style:{fontSize:10,padding:"2px 7px",borderRadius:10,background:T.greenLight,color:T.green,fontWeight:700}},"Pago ✅"),
              over && React.createElement("span",{style:{fontSize:10,padding:"2px 7px",borderRadius:10,background:T.redLight,color:T.red,fontWeight:700}},"Acima orç."),
            ),
            React.createElement("div",{style:{display:"flex",gap:16,marginTop:6}},
              item.orcamento ? React.createElement("div",{style:{fontSize:12,color:T.muted}},`Orç: `,React.createElement("b",{style:{color:T.primaryDark}},fmt(item.orcamento))) : null,
              item.valor ? React.createElement("div",{style:{fontSize:12,color:T.muted}},`Gasto: `,React.createElement("b",{style:{color:over?T.red:T.green}},fmt(item.valor))) : null,
            ),
            item.notes && React.createElement("div",{style:{fontSize:12,color:T.muted,marginTop:4,fontStyle:"italic"}},item.notes),
          ),
          React.createElement("div",{style:{display:"flex",gap:4,alignItems:"center"}},
            React.createElement("button",{onClick:()=>togglePago(item.id),style:{...s.ico,color:item.pago?T.green:T.muted}},"✓"),
            React.createElement("button",{onClick:()=>startEdit(item),style:s.ico},"✏️"),
            React.createElement("button",{onClick:()=>remove(item.id),style:{...s.ico,color:T.red}},"🗑️"),
          )
        )
      );
    })
  );
}

// ── APP ───────────────────────────────────────────────────────────────
const TABS = [
  {id:"convidados",label:"Convidados",emoji:"👥"},
  {id:"familias",label:"Famílias",emoji:"👨‍👩‍👧"},
  {id:"resumo",label:"Resumo",emoji:"📊"},
  {id:"tarefas",label:"Tarefas",emoji:"✅"},
  {id:"financeiro",label:"Finanças",emoji:"💰"},
];

function App() {
  const [tab,setTab] = useState("convidados");
  const [guests,setGuests] = useState([]);
  const [financeiro,setFinanceiro] = useState([]);
  const [tasks,setTasks] = useState([]);
  const [loading,setLoading] = useState(true);

  const loadAll = useCallback(async()=>{
    setLoading(true);
    try {
      const [g,f,t] = await Promise.all([db.get("guests"),db.get("financeiro"),db.get("tarefas")]);
      setGuests(Array.isArray(g)?g:[]);
      if(Array.isArray(f)&&f.length>0) setFinanceiro(f);
      else { for(const x of defaultFin) await db.insert("financeiro",x); setFinanceiro(defaultFin); }
      if(Array.isArray(t)&&t.length>0) setTasks(t);
      else { for(const x of defaultTasks) await db.insert("tarefas",x); setTasks(defaultTasks); }
    } catch(e){console.error(e);}
    setLoading(false);
  },[]);

  useEffect(()=>{loadAll();},[]);

  return React.createElement("div",{style:{minHeight:"100vh",background:T.bg,fontFamily:"system-ui,-apple-system,sans-serif",display:"flex",flexDirection:"column",maxWidth:480,margin:"0 auto"}},
    React.createElement("div",{style:{background:`linear-gradient(135deg,${T.primaryDark},${T.primary})`,padding:"20px 20px 16px",position:"sticky",top:0,zIndex:10}},
      React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}},
        React.createElement("div",null,
          React.createElement("div",{style:{color:T.primaryLight,fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:2}},"🎉 Festa da"),
          React.createElement("div",{style:{color:"#fff",fontSize:28,fontWeight:800}},"Lívia ✨")
        ),
        React.createElement("button",{onClick:loadAll,title:"Sincronizar",style:{background:"rgba(255,255,255,0.2)",border:"none",borderRadius:50,width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#fff",fontSize:18,marginTop:4}},"🔄")
      )
    ),
    React.createElement("div",{style:{flex:1,padding:"18px 14px 90px",overflowY:"auto"}},
      tab==="convidados" && React.createElement(ConvidadosTab,{guests,setGuests,loading}),
      tab==="familias" && React.createElement(FamiliasTab,{guests,setGuests}),
      tab==="resumo" && React.createElement(ResumoTab,{guests,financeiro}),
      tab==="tarefas" && React.createElement(TarefasTab,{tasks,setTasks,loading}),
      tab==="financeiro" && React.createElement(FinanceiroTab,{financeiro,setFinanceiro,loading}),
    ),
    React.createElement("div",{style:{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:480,background:T.white,borderTop:`1px solid ${T.border}`,display:"flex",zIndex:20}},
      TABS.map(t=>
        React.createElement("button",{key:t.id,onClick:()=>setTab(t.id),style:{flex:1,padding:"10px 0 8px",background:"transparent",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:3,color:tab===t.id?T.primary:T.muted}},
          React.createElement("span",{style:{fontSize:20}},t.emoji),
          React.createElement("span",{style:{fontSize:9,fontWeight:tab===t.id?700:500}},t.label),
          tab===t.id && React.createElement("div",{style:{width:4,height:4,borderRadius:"50%",background:T.primary}})
        )
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
