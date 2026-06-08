"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;

// ── THEME ────────────────────────────────────────────────────────────
var T = {
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
  white: "#FFFFFF"
};

// ── STORAGE ──────────────────────────────────────────────────────────
function useLS(key, initial) {
  var _useState = useState(function () {
      try {
        var s = localStorage.getItem(key);
        return s ? JSON.parse(s) : initial;
      } catch (_unused) {
        return initial;
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  var set = function set(v) {
    var next = typeof v === "function" ? v(val) : v;
    setVal(next);
    try {
      localStorage.setItem(key, JSON.stringify(next));
    } catch (_unused2) {}
  };
  return [val, set];
}

// ── ICONS ────────────────────────────────────────────────────────────
var Ico = function Ico(_ref) {
  var n = _ref.n,
    _ref$s = _ref.s,
    s = _ref$s === void 0 ? 20 : _ref$s,
    c = _ref.c;
  var paths = {
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })),
    family: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "3",
      width: "20",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 21h8M12 17v4"
    })),
    chart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "20",
      x2: "18",
      y2: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "20",
      x2: "12",
      y2: "4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "20",
      x2: "6",
      y2: "14"
    })),
    tasks: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "9 11 12 14 22 4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
    })),
    money: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 8v8M8 12h8"
    })),
    plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    })),
    x: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })),
    trash: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "3 6 5 6 21 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 6l-1 14H6L5 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 11v6M14 11v6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 6V4h6v2"
    })),
    check: /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    }),
    edit: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
    })),
    download: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "7 10 12 15 17 10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3"
    })),
    bag: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 10a4 4 0 0 1-8 0"
    })),
    import: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
      points: "16 16 12 12 8 16"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "12",
      x2: "12",
      y2: "21"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c || "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, paths[n]);
};

// ── SHARED COMPONENTS ────────────────────────────────────────────────
var inp = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 10,
  border: "1.5px solid ".concat(T.border),
  fontSize: 14,
  color: T.text,
  background: T.white,
  outline: "none",
  marginBottom: 8,
  boxSizing: "border-box",
  fontFamily: "inherit"
};
var btnP = {
  width: "100%",
  padding: "11px 0",
  borderRadius: 10,
  border: "none",
  background: T.primary,
  color: "#fff",
  fontSize: 14,
  fontWeight: 700,
  cursor: "pointer",
  marginTop: 4
};
var btnI = {
  background: "transparent",
  border: "none",
  color: T.muted,
  cursor: "pointer",
  padding: 4,
  borderRadius: 6,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
var lbl = {
  display: "block",
  fontSize: 11,
  color: T.muted,
  fontWeight: 700,
  marginBottom: 3,
  textTransform: "uppercase",
  letterSpacing: 0.5
};
function Card(_ref2) {
  var children = _ref2.children,
    style = _ref2.style;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      background: T.white,
      borderRadius: 16,
      border: "1px solid ".concat(T.border),
      padding: "14px 16px",
      marginBottom: 10
    }, style)
  }, children);
}
function StatBox(_ref3) {
  var label = _ref3.label,
    value = _ref3.value,
    color = _ref3.color,
    small = _ref3.small;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.white,
      borderRadius: 12,
      border: "1px solid ".concat(T.border),
      padding: small ? "8px 6px" : "10px 12px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: small ? 18 : 22,
      fontWeight: 800,
      color: color,
      fontFamily: "'Playfair Display', serif"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: small ? 9 : 11,
      color: T.muted,
      fontWeight: 600
    }
  }, label));
}
function Empty(_ref4) {
  var text = _ref4.text;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px 20px",
      color: T.muted,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      marginBottom: 8
    }
  }, "\u2728"), text);
}
function SectionHeader(_ref5) {
  var title = _ref5.title,
    onAdd = _ref5.onAdd,
    _ref5$addLabel = _ref5.addLabel,
    addLabel = _ref5$addLabel === void 0 ? "+" : _ref5$addLabel;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: T.primaryDark,
      fontFamily: "'Playfair Display', serif",
      fontSize: 20,
      margin: 0
    }
  }, title), onAdd && /*#__PURE__*/React.createElement("button", {
    onClick: onAdd,
    style: {
      background: T.primary,
      color: "#fff",
      border: "none",
      borderRadius: 50,
      width: 34,
      height: 34,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "plus",
    s: 16
  })));
}

// ── CONVIDADOS ───────────────────────────────────────────────────────
var PAYER_AGE = 8;
var isPayer = function isPayer(g) {
  return g.type === "adulto" || Number(g.age) >= PAYER_AGE;
};
var emptyGuest = {
  name: "",
  family: "",
  type: "adulto",
  gender: "feminino",
  age: "",
  confirmed: "pendente",
  notes: ""
};
function ConvidadosTab(_ref6) {
  var guests = _ref6.guests,
    setGuests = _ref6.setGuests;
  var _useState3 = useState(emptyGuest),
    _useState4 = _slicedToArray(_useState3, 2),
    form = _useState4[0],
    setForm = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showForm = _useState6[0],
    setShowForm = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showImport = _useState8[0],
    setShowImport = _useState8[1];
  var _useState9 = useState(""),
    _useState0 = _slicedToArray(_useState9, 2),
    importText = _useState0[0],
    setImportText = _useState0[1];
  var _useState1 = useState("todos"),
    _useState10 = _slicedToArray(_useState1, 2),
    filter = _useState10[0],
    setFilter = _useState10[1];
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    editId = _useState12[0],
    setEditId = _useState12[1];
  var save = function save() {
    if (!form.name.trim()) return;
    if (editId) {
      setGuests(guests.map(function (g) {
        return g.id === editId ? _objectSpread(_objectSpread({}, form), {}, {
          id: editId,
          age: form.age ? Number(form.age) : ""
        }) : g;
      }));
      setEditId(null);
    } else {
      setGuests([].concat(_toConsumableArray(guests), [_objectSpread(_objectSpread({}, form), {}, {
        id: Date.now(),
        age: form.age ? Number(form.age) : ""
      })]));
    }
    setForm(emptyGuest);
    setShowForm(false);
  };
  var startEdit = function startEdit(g) {
    setForm(_objectSpread({}, g));
    setEditId(g.id);
    setShowForm(true);
    setShowImport(false);
  };
  var remove = function remove(id) {
    return setGuests(guests.filter(function (g) {
      return g.id !== id;
    }));
  };
  var setStatus = function setStatus(id, v) {
    return setGuests(guests.map(function (g) {
      return g.id === id ? _objectSpread(_objectSpread({}, g), {}, {
        confirmed: v
      }) : g;
    }));
  };
  var importGuests = function importGuests() {
    var lines = importText.trim().split("\n").filter(function (l) {
      return l.trim();
    });
    var parsed = lines.map(function (l) {
      try {
        return _objectSpread(_objectSpread({}, JSON.parse(l)), {}, {
          id: Date.now() + Math.random()
        });
      } catch (_unused3) {
        return null;
      }
    }).filter(Boolean);
    if (parsed.length) {
      setGuests(function (prev) {
        return [].concat(_toConsumableArray(prev), _toConsumableArray(parsed));
      });
      setImportText("");
      setShowImport(false);
    }
  };
  var active = guests.filter(function (g) {
    return g.confirmed !== "recusado";
  });
  var stats = {
    total: guests.length,
    confirmados: guests.filter(function (g) {
      return g.confirmed === "confirmado";
    }).length,
    pagantes: active.filter(isPayer).length,
    naoPag: active.filter(function (g) {
      return !isPayer(g);
    }).length,
    mulheres: active.filter(function (g) {
      return g.type === "adulto" && g.gender === "feminino";
    }).length,
    homens: active.filter(function (g) {
      return g.type === "adulto" && g.gender === "masculino";
    }).length,
    meninas: active.filter(function (g) {
      return g.type === "crianca" && g.gender === "feminino";
    }).length,
    meninos: active.filter(function (g) {
      return g.type === "crianca" && g.gender === "masculino";
    }).length
  };
  var statusColors = {
    confirmado: T.green,
    pendente: T.primary,
    recusado: T.red
  };
  var filtered = filter === "todos" ? guests : filter === "pagante" ? guests.filter(isPayer) : filter === "naopagante" ? guests.filter(function (g) {
    return !isPayer(g);
  }) : guests.filter(function (g) {
    return g.confirmed === filter;
  });
  var emojiMap = {
    adulto: {
      feminino: "👩",
      masculino: "👨"
    },
    crianca: {
      feminino: "👧",
      masculino: "👦"
    }
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: T.primaryDark,
      fontFamily: "'Playfair Display', serif",
      fontSize: 20,
      margin: 0
    }
  }, "\uD83D\uDC65 Convidados"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setShowImport(!showImport);
      setShowForm(false);
      setEditId(null);
    },
    title: "Importar",
    style: {
      background: T.primaryDark,
      color: "#fff",
      border: "none",
      borderRadius: 50,
      width: 34,
      height: 34,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "import",
    s: 15
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setShowForm(!showForm);
      setShowImport(false);
      if (showForm) {
        setForm(emptyGuest);
        setEditId(null);
      }
    },
    style: {
      background: T.primary,
      color: "#fff",
      border: "none",
      borderRadius: 50,
      width: 34,
      height: 34,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: showForm ? "x" : "plus",
    s: 16
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 6,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(StatBox, {
    label: "Total",
    value: stats.total,
    color: T.primaryDark
  }), /*#__PURE__*/React.createElement(StatBox, {
    label: "Confirmados",
    value: stats.confirmados,
    color: T.green
  }), /*#__PURE__*/React.createElement(StatBox, {
    label: "Pagantes",
    value: stats.pagantes,
    color: T.primary
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: 6,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(StatBox, {
    label: "N\xE3o pag.",
    value: stats.naoPag,
    color: T.muted,
    small: true
  }), /*#__PURE__*/React.createElement(StatBox, {
    label: "Mulheres",
    value: stats.mulheres,
    color: T.pink,
    small: true
  }), /*#__PURE__*/React.createElement(StatBox, {
    label: "Homens",
    value: stats.homens,
    color: "#5080C0",
    small: true
  }), /*#__PURE__*/React.createElement(StatBox, {
    label: "Meninas",
    value: stats.meninas,
    color: "#D080B0",
    small: true
  }), /*#__PURE__*/React.createElement(StatBox, {
    label: "Meninos",
    value: stats.meninos,
    color: "#6090D0",
    small: true
  })), showImport && /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.surfaceAlt,
      borderRadius: 16,
      padding: 16,
      marginBottom: 14,
      border: "2px dashed ".concat(T.primary)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: T.primaryDark,
      fontSize: 14,
      marginBottom: 4
    }
  }, "\uD83D\uDCCB Importar convidados"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: T.muted,
      marginBottom: 8
    }
  }, "Cole aqui o c\xF3digo gerado pelo Claude."), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Cole o c\xF3digo aqui...",
    value: importText,
    onChange: function onChange(e) {
      return setImportText(e.target.value);
    },
    style: _objectSpread(_objectSpread({}, inp), {}, {
      height: 90,
      resize: "none",
      fontFamily: "monospace",
      fontSize: 11
    })
  }), /*#__PURE__*/React.createElement("button", {
    onClick: importGuests,
    style: btnP
  }, "Importar")), showForm && /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.surfaceAlt,
      borderRadius: 16,
      padding: 16,
      marginBottom: 14,
      border: "1px solid ".concat(T.border)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: T.primaryDark,
      marginBottom: 10
    }
  }, editId ? "✏️ Editar convidado" : "➕ Novo convidado"), /*#__PURE__*/React.createElement("input", {
    placeholder: "Nome *",
    value: form.name,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        name: e.target.value
      }));
    },
    style: inp
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Fam\xEDlia (ex: Fam\xEDlia Silva)",
    value: form.family,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        family: e.target.value
      }));
    },
    style: inp
  }), /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Tipo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 8
    }
  }, [["adulto", "👤 Adulto"], ["crianca", "🧒 Criança"]].map(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
      v = _ref8[0],
      l = _ref8[1];
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: function onClick() {
        return setForm(_objectSpread(_objectSpread({}, form), {}, {
          type: v
        }));
      },
      style: {
        flex: 1,
        padding: "8px 0",
        borderRadius: 8,
        border: "2px solid ".concat(form.type === v ? T.primary : T.border),
        background: form.type === v ? T.primaryLight : "transparent",
        color: form.type === v ? T.primaryDark : T.muted,
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer"
      }
    }, l);
  })), /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "G\xEAnero"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 8
    }
  }, [["feminino", "♀ Feminino"], ["masculino", "♂ Masculino"]].map(function (_ref9) {
    var _ref0 = _slicedToArray(_ref9, 2),
      v = _ref0[0],
      l = _ref0[1];
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: function onClick() {
        return setForm(_objectSpread(_objectSpread({}, form), {}, {
          gender: v
        }));
      },
      style: {
        flex: 1,
        padding: "8px 0",
        borderRadius: 8,
        border: "2px solid ".concat(form.gender === v ? T.pink : T.border),
        background: form.gender === v ? T.pinkLight : "transparent",
        color: form.gender === v ? T.pink : T.muted,
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer"
      }
    }, l);
  })), form.type === "crianca" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Idade"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "0",
    max: "17",
    placeholder: "Ex: 6",
    value: form.age,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        age: e.target.value
      }));
    },
    style: inp
  }), form.age !== "" && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      marginBottom: 8,
      color: Number(form.age) >= PAYER_AGE ? T.green : T.primary,
      fontWeight: 600
    }
  }, Number(form.age) >= PAYER_AGE ? "✅ Pagante" : "🎁 Não pagante")), /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Status"), /*#__PURE__*/React.createElement("select", {
    value: form.confirmed,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        confirmed: e.target.value
      }));
    },
    style: inp
  }, /*#__PURE__*/React.createElement("option", {
    value: "pendente"
  }, "\u23F3 Pendente"), /*#__PURE__*/React.createElement("option", {
    value: "confirmado"
  }, "\u2705 Confirmado"), /*#__PURE__*/React.createElement("option", {
    value: "recusado"
  }, "\u274C Recusado")), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Observa\xE7\xF5es",
    value: form.notes,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        notes: e.target.value
      }));
    },
    style: _objectSpread(_objectSpread({}, inp), {}, {
      height: 56,
      resize: "none"
    })
  }), /*#__PURE__*/React.createElement("button", {
    onClick: save,
    style: btnP
  }, editId ? "Salvar alterações" : "Adicionar")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      marginBottom: 12,
      flexWrap: "wrap"
    }
  }, [["todos", "Todos"], ["confirmado", "✅"], ["pendente", "⏳"], ["pagante", "💰 Pag."], ["naopagante", "🎁 N.Pag."]].map(function (_ref1) {
    var _ref10 = _slicedToArray(_ref1, 2),
      v = _ref10[0],
      l = _ref10[1];
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: function onClick() {
        return setFilter(v);
      },
      style: {
        padding: "4px 10px",
        borderRadius: 20,
        border: "1.5px solid ".concat(filter === v ? T.primary : T.border),
        background: filter === v ? T.primary : "transparent",
        color: filter === v ? "#fff" : T.muted,
        fontSize: 11,
        fontWeight: 600,
        cursor: "pointer"
      }
    }, l);
  })), filtered.length === 0 && /*#__PURE__*/React.createElement(Empty, {
    text: "Nenhum convidado aqui"
  }), filtered.map(function (g) {
    var _emojiMap$g$type;
    var payer = isPayer(g);
    return /*#__PURE__*/React.createElement(Card, {
      key: g.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16
      }
    }, (_emojiMap$g$type = emojiMap[g.type]) === null || _emojiMap$g$type === void 0 ? void 0 : _emojiMap$g$type[g.gender]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: T.text,
        fontSize: 15
      }
    }, g.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        padding: "2px 7px",
        borderRadius: 10,
        background: payer ? T.greenLight : T.primaryLight,
        color: payer ? T.green : T.primaryDark,
        fontWeight: 700
      }
    }, payer ? "Pagante" : "Não pag.")), g.family && /*#__PURE__*/React.createElement("div", {
      style: {
        color: T.muted,
        fontSize: 12,
        marginLeft: 22
      }
    }, g.family), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: T.muted,
        marginTop: 2,
        marginLeft: 22
      }
    }, g.type === "crianca" ? "Crian\xE7a".concat(g.age !== "" ? " \xB7 ".concat(g.age, " anos") : "") : "Adulto", " \xB7 ", g.gender === "feminino" ? "Feminino" : "Masculino"), g.notes && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: T.muted,
        marginTop: 2,
        marginLeft: 22,
        fontStyle: "italic"
      }
    }, g.notes)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("select", {
      value: g.confirmed,
      onChange: function onChange(e) {
        return setStatus(g.id, e.target.value);
      },
      style: {
        fontSize: 11,
        borderRadius: 8,
        border: "1.5px solid ".concat(statusColors[g.confirmed]),
        color: statusColors[g.confirmed],
        padding: "3px 5px",
        background: statusColors[g.confirmed] + "15",
        cursor: "pointer",
        outline: "none"
      }
    }, /*#__PURE__*/React.createElement("option", {
      value: "pendente"
    }, "\u23F3"), /*#__PURE__*/React.createElement("option", {
      value: "confirmado"
    }, "\u2705"), /*#__PURE__*/React.createElement("option", {
      value: "recusado"
    }, "\u274C")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return startEdit(g);
      },
      style: btnI
    }, /*#__PURE__*/React.createElement(Ico, {
      n: "edit",
      s: 14
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return remove(g.id);
      },
      style: _objectSpread(_objectSpread({}, btnI), {}, {
        color: T.red
      })
    }, /*#__PURE__*/React.createElement(Ico, {
      n: "trash",
      s: 14
    })))));
  }));
}

// ── FAMÍLIAS ─────────────────────────────────────────────────────────
function FamiliasTab(_ref11) {
  var guests = _ref11.guests,
    setGuests = _ref11.setGuests;
  var families = {};
  guests.forEach(function (g) {
    var key = g.family || "Sem família";
    if (!families[key]) families[key] = [];
    families[key].push(g);
  });
  var _useState13 = useState({}),
    _useState14 = _slicedToArray(_useState13, 2),
    expanded = _useState14[0],
    setExpanded = _useState14[1];
  var toggle = function toggle(k) {
    return setExpanded(function (e) {
      return _objectSpread(_objectSpread({}, e), {}, _defineProperty({}, k, !e[k]));
    });
  };
  var remove = function remove(id) {
    return setGuests(guests.filter(function (g) {
      return g.id !== id;
    }));
  };
  var setStatus = function setStatus(id, v) {
    return setGuests(guests.map(function (g) {
      return g.id === id ? _objectSpread(_objectSpread({}, g), {}, {
        confirmed: v
      }) : g;
    }));
  };
  var statusColors = {
    confirmado: T.green,
    pendente: T.primary,
    recusado: T.red
  };
  var emojiMap = {
    adulto: {
      feminino: "👩",
      masculino: "👨"
    },
    crianca: {
      feminino: "👧",
      masculino: "👦"
    }
  };
  var familyKeys = Object.keys(families).sort();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67 Fam\xEDlias"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: T.muted,
      marginBottom: 14
    }
  }, familyKeys.length, " grupo", familyKeys.length !== 1 ? "s" : "", " \xB7 ", guests.length, " pessoa", guests.length !== 1 ? "s" : ""), familyKeys.length === 0 && /*#__PURE__*/React.createElement(Empty, {
    text: "Nenhuma fam\xEDlia cadastrada ainda"
  }), familyKeys.map(function (key) {
    var members = families[key];
    var confirmed = members.filter(function (g) {
      return g.confirmed === "confirmado";
    }).length;
    var pagantes = members.filter(isPayer).length;
    var isOpen = expanded[key];
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      style: {
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return toggle(key);
      },
      style: {
        background: T.surfaceAlt,
        borderRadius: isOpen ? "14px 14px 0 0" : 14,
        border: "1px solid ".concat(T.border),
        padding: "12px 16px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: T.primaryDark,
        fontSize: 15
      }
    }, key), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: T.muted,
        marginTop: 2
      }
    }, members.length, " pessoa", members.length !== 1 ? "s" : "", " \xB7 ", confirmed, " confirmado", confirmed !== 1 ? "s" : "", " \xB7 ", pagantes, " pagante", pagantes !== 1 ? "s" : "")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: T.primary,
        fontWeight: 700
      }
    }, isOpen ? "▲" : "▼"))), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid ".concat(T.border),
        borderTop: "none",
        borderRadius: "0 0 14px 14px",
        overflow: "hidden"
      }
    }, members.map(function (g, i) {
      var _emojiMap$g$type2;
      return /*#__PURE__*/React.createElement("div", {
        key: g.id,
        style: {
          padding: "10px 16px",
          borderTop: i > 0 ? "1px solid ".concat(T.border) : "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: T.white
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 16
        }
      }, (_emojiMap$g$type2 = emojiMap[g.type]) === null || _emojiMap$g$type2 === void 0 ? void 0 : _emojiMap$g$type2[g.gender]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 600,
          fontSize: 14,
          color: T.text
        }
      }, g.name), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11,
          color: T.muted
        }
      }, g.type === "crianca" ? "".concat(g.age ? g.age + " anos" : "criança") : "adulto", " \xB7 ", isPayer(g) ? "pagante" : "não pag."))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 4,
          alignItems: "center"
        }
      }, /*#__PURE__*/React.createElement("select", {
        value: g.confirmed,
        onChange: function onChange(e) {
          return setStatus(g.id, e.target.value);
        },
        style: {
          fontSize: 11,
          borderRadius: 8,
          border: "1.5px solid ".concat(statusColors[g.confirmed]),
          color: statusColors[g.confirmed],
          padding: "3px 5px",
          background: statusColors[g.confirmed] + "15",
          cursor: "pointer",
          outline: "none"
        }
      }, /*#__PURE__*/React.createElement("option", {
        value: "pendente"
      }, "\u23F3"), /*#__PURE__*/React.createElement("option", {
        value: "confirmado"
      }, "\u2705"), /*#__PURE__*/React.createElement("option", {
        value: "recusado"
      }, "\u274C")), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return remove(g.id);
        },
        style: _objectSpread(_objectSpread({}, btnI), {}, {
          color: T.red
        })
      }, /*#__PURE__*/React.createElement(Ico, {
        n: "trash",
        s: 13
      }))));
    })));
  }));
}

// ── RESUMO ────────────────────────────────────────────────────────────
function ResumoTab(_ref12) {
  var guests = _ref12.guests,
    financeiro = _ref12.financeiro;
  var active = guests.filter(function (g) {
    return g.confirmed !== "recusado";
  });
  var stats = {
    total: guests.length,
    confirmados: guests.filter(function (g) {
      return g.confirmed === "confirmado";
    }).length,
    pendentes: guests.filter(function (g) {
      return g.confirmed === "pendente";
    }).length,
    recusados: guests.filter(function (g) {
      return g.confirmed === "recusado";
    }).length,
    pagantes: active.filter(isPayer).length,
    naoPag: active.filter(function (g) {
      return !isPayer(g);
    }).length,
    mulheres: active.filter(function (g) {
      return g.type === "adulto" && g.gender === "feminino";
    }).length,
    homens: active.filter(function (g) {
      return g.type === "adulto" && g.gender === "masculino";
    }).length,
    meninas: active.filter(function (g) {
      return g.type === "crianca" && g.gender === "feminino";
    }).length,
    meninos: active.filter(function (g) {
      return g.type === "crianca" && g.gender === "masculino";
    }).length,
    criancas: active.filter(function (g) {
      return g.type === "crianca";
    }).length,
    adultos: active.filter(function (g) {
      return g.type === "adulto";
    }).length
  };
  var totalGasto = financeiro.reduce(function (s, f) {
    return s + (Number(f.valor) || 0);
  }, 0);
  var totalOrc = financeiro.reduce(function (s, f) {
    return s + (Number(f.orcamento) || 0);
  }, 0);
  var fmt = function fmt(v) {
    return v.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  };
  var exportExcel = function exportExcel() {
    var headers = ["Nome", "Família", "Tipo", "Gênero", "Idade", "Status", "Pagante", "Observações"];
    var rows = guests.map(function (g) {
      return [g.name, g.family, g.type === "adulto" ? "Adulto" : "Criança", g.gender === "feminino" ? "Feminino" : "Masculino", g.age || "", g.confirmed, isPayer(g) ? "Sim" : "Não", g.notes || ""];
    });
    var csv = [headers].concat(_toConsumableArray(rows)).map(function (r) {
      return r.map(function (c) {
        return "\"".concat(String(c).replace(/"/g, '""'), "\"");
      }).join(",");
    }).join("\n");
    var BOM = "\uFEFF";
    var blob = new Blob([BOM + csv], {
      type: "text/csv;charset=utf-8;"
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "convidados-livia.csv";
    a.click();
    URL.revokeObjectURL(url);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: T.primaryDark,
      fontFamily: "'Playfair Display', serif",
      fontSize: 20,
      margin: 0
    }
  }, "\uD83D\uDCCA Resumo"), /*#__PURE__*/React.createElement("button", {
    onClick: exportExcel,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      background: T.green,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      padding: "8px 14px",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "download",
    s: 14
  }), " Excel")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.surfaceAlt,
      borderRadius: 14,
      padding: 14,
      marginBottom: 14,
      border: "1px solid ".concat(T.border)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: T.primaryDark,
      marginBottom: 10,
      fontSize: 14
    }
  }, "\uD83D\uDC65 Convidados"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(StatBox, {
    label: "Total",
    value: stats.total,
    color: T.primaryDark
  }), /*#__PURE__*/React.createElement(StatBox, {
    label: "Confirmados",
    value: stats.confirmados,
    color: T.green
  }), /*#__PURE__*/React.createElement(StatBox, {
    label: "Pendentes",
    value: stats.pendentes,
    color: T.primary
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(StatBox, {
    label: "Recusados",
    value: stats.recusados,
    color: T.red
  }), /*#__PURE__*/React.createElement(StatBox, {
    label: "Adultos",
    value: stats.adultos,
    color: T.primaryDark
  }), /*#__PURE__*/React.createElement(StatBox, {
    label: "Crian\xE7as",
    value: stats.criancas,
    color: T.pink
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(StatBox, {
    label: "Pagantes",
    value: stats.pagantes,
    color: T.green,
    small: true
  }), /*#__PURE__*/React.createElement(StatBox, {
    label: "N\xE3o pag.",
    value: stats.naoPag,
    color: T.muted,
    small: true
  }), /*#__PURE__*/React.createElement(StatBox, {
    label: "Mulheres",
    value: stats.mulheres,
    color: T.pink,
    small: true
  }), /*#__PURE__*/React.createElement(StatBox, {
    label: "Homens",
    value: stats.homens,
    color: "#5080C0",
    small: true
  }), /*#__PURE__*/React.createElement(StatBox, {
    label: "Meninas",
    value: stats.meninas,
    color: "#D080B0",
    small: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(1,1fr)",
      gap: 6,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(StatBox, {
    label: "Meninos",
    value: stats.meninos,
    color: "#6090D0",
    small: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.surfaceAlt,
      borderRadius: 14,
      padding: 14,
      border: "1px solid ".concat(T.border)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: T.primaryDark,
      marginBottom: 10,
      fontSize: 14
    }
  }, "\uD83D\uDCB0 Financeiro"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(StatBox, {
    label: "Or\xE7amento total",
    value: fmt(totalOrc),
    color: T.primaryDark
  }), /*#__PURE__*/React.createElement(StatBox, {
    label: "Gasto total",
    value: fmt(totalGasto),
    color: totalGasto > totalOrc ? T.red : T.green
  })), totalOrc > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: T.muted,
      marginBottom: 4
    }
  }, "Utilizado: ", Math.round(totalGasto / totalOrc * 100), "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.border,
      borderRadius: 10,
      height: 10,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "".concat(Math.min(100, totalGasto / totalOrc * 100), "%"),
      background: totalGasto > totalOrc ? T.red : T.primary,
      height: "100%",
      borderRadius: 10,
      transition: "width 0.5s"
    }
  })))));
}

// ── TAREFAS ───────────────────────────────────────────────────────────
var defaultTasks = [{
  id: 1,
  text: "Contratar fotógrafo",
  done: false,
  section: "festa"
}, {
  id: 2,
  text: "Contratar decoração",
  done: false,
  section: "festa"
}, {
  id: 3,
  text: "Comprar lembrancinhas meninas",
  done: false,
  section: "festa"
}, {
  id: 4,
  text: "Comprar lembrancinhas meninos",
  done: false,
  section: "festa"
}, {
  id: 5,
  text: "Comprar lembrancinhas mulheres",
  done: false,
  section: "festa"
}, {
  id: 6,
  text: "Vestido da Lívia",
  done: false,
  section: "festa"
}, {
  id: 7,
  text: "Agendar cabeleireiro do dia",
  done: false,
  section: "festa"
}, {
  id: 8,
  text: "Confirmar buffet",
  done: false,
  section: "festa"
}, {
  id: 9,
  text: "Bolo",
  done: false,
  section: "festa"
}, {
  id: 10,
  text: "Vestido da aniversariante",
  done: false,
  section: "dia"
}, {
  id: 11,
  text: "Lembrancinhas",
  done: false,
  section: "dia"
}, {
  id: 12,
  text: "Lista de músicas",
  done: false,
  section: "dia"
}, {
  id: 13,
  text: "Carregador de celular",
  done: false,
  section: "dia"
}, {
  id: 14,
  text: "Documentos e convites",
  done: false,
  section: "dia"
}, {
  id: 15,
  text: "Maquiagem e acessórios",
  done: false,
  section: "dia"
}];
function TarefasTab() {
  var _useLS = useLS("livia-tasks", defaultTasks),
    _useLS2 = _slicedToArray(_useLS, 2),
    tasks = _useLS2[0],
    setTasks = _useLS2[1];
  var _useState15 = useState(""),
    _useState16 = _slicedToArray(_useState15, 2),
    newText = _useState16[0],
    setNewText = _useState16[1];
  var _useState17 = useState("festa"),
    _useState18 = _slicedToArray(_useState17, 2),
    newSection = _useState18[0],
    setNewSection = _useState18[1];
  var _useState19 = useState(null),
    _useState20 = _slicedToArray(_useState19, 2),
    editId = _useState20[0],
    setEditId = _useState20[1];
  var _useState21 = useState(""),
    _useState22 = _slicedToArray(_useState21, 2),
    editText = _useState22[0],
    setEditText = _useState22[1];
  var add = function add() {
    if (!newText.trim()) return;
    setTasks(function (t) {
      return [].concat(_toConsumableArray(t), [{
        id: Date.now(),
        text: newText,
        done: false,
        section: newSection
      }]);
    });
    setNewText("");
  };
  var toggle = function toggle(id) {
    return setTasks(function (t) {
      return t.map(function (x) {
        return x.id === id ? _objectSpread(_objectSpread({}, x), {}, {
          done: !x.done
        }) : x;
      });
    });
  };
  var remove = function remove(id) {
    return setTasks(function (t) {
      return t.filter(function (x) {
        return x.id !== id;
      });
    });
  };
  var saveEdit = function saveEdit(id) {
    setTasks(function (t) {
      return t.map(function (x) {
        return x.id === id ? _objectSpread(_objectSpread({}, x), {}, {
          text: editText
        }) : x;
      });
    });
    setEditId(null);
  };
  var render = function render(section, title, icon) {
    var items = tasks.filter(function (t) {
      return t.section === section;
    });
    var done = items.filter(function (t) {
      return t.done;
    }).length;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: T.primaryDark,
        fontSize: 15
      }
    }, icon, " ", title), /*#__PURE__*/React.createElement("span", {
      style: {
        background: T.primaryLight,
        color: T.primaryDark,
        borderRadius: 20,
        padding: "2px 10px",
        fontSize: 12,
        fontWeight: 700
      }
    }, done, "/", items.length)), items.map(function (t) {
      return /*#__PURE__*/React.createElement("div", {
        key: t.id,
        style: {
          background: T.white,
          borderRadius: 12,
          padding: "10px 12px",
          marginBottom: 6,
          border: "1px solid ".concat(T.border),
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return toggle(t.id);
        },
        style: {
          width: 22,
          height: 22,
          borderRadius: 6,
          border: "2px solid ".concat(t.done ? T.green : T.border),
          background: t.done ? T.green : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          flexShrink: 0,
          color: "#fff"
        }
      }, t.done && /*#__PURE__*/React.createElement(Ico, {
        n: "check",
        s: 12,
        c: "#fff"
      })), editId === t.id ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
        value: editText,
        onChange: function onChange(e) {
          return setEditText(e.target.value);
        },
        onKeyDown: function onKeyDown(e) {
          return e.key === "Enter" && saveEdit(t.id);
        },
        style: _objectSpread(_objectSpread({}, inp), {}, {
          margin: 0,
          flex: 1,
          padding: "6px 10px"
        }),
        autoFocus: true
      }), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return saveEdit(t.id);
        },
        style: _objectSpread(_objectSpread({}, btnI), {}, {
          color: T.green
        })
      }, /*#__PURE__*/React.createElement(Ico, {
        n: "check",
        s: 14
      })), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setEditId(null);
        },
        style: btnI
      }, /*#__PURE__*/React.createElement(Ico, {
        n: "x",
        s: 14
      }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          fontSize: 14,
          color: T.text,
          textDecoration: t.done ? "line-through" : "none",
          opacity: t.done ? 0.5 : 1
        }
      }, t.text), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          setEditId(t.id);
          setEditText(t.text);
        },
        style: btnI
      }, /*#__PURE__*/React.createElement(Ico, {
        n: "edit",
        s: 13
      })), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return remove(t.id);
        },
        style: _objectSpread(_objectSpread({}, btnI), {}, {
          color: T.red
        })
      }, /*#__PURE__*/React.createElement(Ico, {
        n: "trash",
        s: 13
      }))));
    }));
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "\u2705 Tarefas"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.surfaceAlt,
      borderRadius: 14,
      padding: 12,
      marginBottom: 16,
      border: "1px solid ".concat(T.border)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 8
    }
  }, [["festa", "📋 Festa"], ["dia", "🎒 Levar no dia"]].map(function (_ref13) {
    var _ref14 = _slicedToArray(_ref13, 2),
      v = _ref14[0],
      l = _ref14[1];
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: function onClick() {
        return setNewSection(v);
      },
      style: {
        flex: 1,
        padding: "7px 0",
        borderRadius: 8,
        border: "2px solid ".concat(newSection === v ? T.primary : T.border),
        background: newSection === v ? T.primaryLight : "transparent",
        color: newSection === v ? T.primaryDark : T.muted,
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer"
      }
    }, l);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Nova tarefa...",
    value: newText,
    onChange: function onChange(e) {
      return setNewText(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === "Enter" && add();
    },
    style: _objectSpread(_objectSpread({}, inp), {}, {
      margin: 0,
      flex: 1
    })
  }), /*#__PURE__*/React.createElement("button", {
    onClick: add,
    style: _objectSpread(_objectSpread({}, btnP), {}, {
      margin: 0,
      width: "auto",
      padding: "0 16px"
    })
  }, "+"))), render("festa", "Preparativos da Festa", "📋"), render("dia", "O que levar no dia", "🎒"));
}

// ── FINANCEIRO ────────────────────────────────────────────────────────
var defaultCats = [{
  id: 1,
  categoria: "Buffet",
  orcamento: "",
  valor: "",
  pago: false,
  notes: ""
}, {
  id: 2,
  categoria: "Decoração",
  orcamento: "",
  valor: "",
  pago: false,
  notes: ""
}, {
  id: 3,
  categoria: "Bolo",
  orcamento: "",
  valor: "",
  pago: false,
  notes: ""
}, {
  id: 4,
  categoria: "Lembrancinhas",
  orcamento: "",
  valor: "",
  pago: false,
  notes: ""
}, {
  id: 5,
  categoria: "Fotógrafo",
  orcamento: "",
  valor: "",
  pago: false,
  notes: ""
}, {
  id: 6,
  categoria: "Vestido",
  orcamento: "",
  valor: "",
  pago: false,
  notes: ""
}, {
  id: 7,
  categoria: "Cabeleireiro",
  orcamento: "",
  valor: "",
  pago: false,
  notes: ""
}];
function FinanceiroTab(_ref15) {
  var financeiro = _ref15.financeiro,
    setFinanceiro = _ref15.setFinanceiro;
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    showForm = _useState24[0],
    setShowForm = _useState24[1];
  var _useState25 = useState({
      categoria: "",
      orcamento: "",
      valor: "",
      pago: false,
      notes: ""
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    form = _useState26[0],
    setForm = _useState26[1];
  var _useState27 = useState(null),
    _useState28 = _slicedToArray(_useState27, 2),
    editId = _useState28[0],
    setEditId = _useState28[1];
  var save = function save() {
    if (!form.categoria.trim()) return;
    if (editId) {
      setFinanceiro(function (f) {
        return f.map(function (x) {
          return x.id === editId ? _objectSpread(_objectSpread({}, form), {}, {
            id: editId
          }) : x;
        });
      });
      setEditId(null);
    } else {
      setFinanceiro(function (f) {
        return [].concat(_toConsumableArray(f), [_objectSpread(_objectSpread({}, form), {}, {
          id: Date.now()
        })]);
      });
    }
    setForm({
      categoria: "",
      orcamento: "",
      valor: "",
      pago: false,
      notes: ""
    });
    setShowForm(false);
  };
  var startEdit = function startEdit(item) {
    setForm(_objectSpread({}, item));
    setEditId(item.id);
    setShowForm(true);
  };
  var remove = function remove(id) {
    return setFinanceiro(function (f) {
      return f.filter(function (x) {
        return x.id !== id;
      });
    });
  };
  var togglePago = function togglePago(id) {
    return setFinanceiro(function (f) {
      return f.map(function (x) {
        return x.id === id ? _objectSpread(_objectSpread({}, x), {}, {
          pago: !x.pago
        }) : x;
      });
    });
  };
  var totalOrc = financeiro.reduce(function (s, f) {
    return s + (Number(f.orcamento) || 0);
  }, 0);
  var totalVal = financeiro.reduce(function (s, f) {
    return s + (Number(f.valor) || 0);
  }, 0);
  var totalPago = financeiro.filter(function (f) {
    return f.pago;
  }).reduce(function (s, f) {
    return s + (Number(f.valor) || 0);
  }, 0);
  var fmt = function fmt(v) {
    return v ? Number(v).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    }) : "—";
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: T.primaryDark,
      fontFamily: "'Playfair Display', serif",
      fontSize: 20,
      margin: 0
    }
  }, "\uD83D\uDCB0 Financeiro"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setShowForm(!showForm);
      if (showForm) {
        setForm({
          categoria: "",
          orcamento: "",
          valor: "",
          pago: false,
          notes: ""
        });
        setEditId(null);
      }
    },
    style: {
      background: T.primary,
      color: "#fff",
      border: "none",
      borderRadius: 50,
      width: 34,
      height: 34,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: showForm ? "x" : "plus",
    s: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.white,
      borderRadius: 12,
      border: "1px solid ".concat(T.border),
      padding: "10px 8px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      color: T.primaryDark
    }
  }, fmt(totalOrc)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: T.muted,
      fontWeight: 600
    }
  }, "Or\xE7amento")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.white,
      borderRadius: 12,
      border: "1px solid ".concat(T.border),
      padding: "10px 8px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      color: totalVal > totalOrc && totalOrc > 0 ? T.red : T.green
    }
  }, fmt(totalVal)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: T.muted,
      fontWeight: 600
    }
  }, "Gasto")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.white,
      borderRadius: 12,
      border: "1px solid ".concat(T.border),
      padding: "10px 8px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      color: T.gold
    }
  }, fmt(totalPago)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: T.muted,
      fontWeight: 600
    }
  }, "Pago"))), showForm && /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.surfaceAlt,
      borderRadius: 16,
      padding: 16,
      marginBottom: 14,
      border: "1px solid ".concat(T.border)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: T.primaryDark,
      marginBottom: 10
    }
  }, editId ? "✏️ Editar item" : "➕ Novo item"), /*#__PURE__*/React.createElement("input", {
    placeholder: "Categoria *",
    value: form.categoria,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        categoria: e.target.value
      }));
    },
    style: inp
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Or\xE7amento (R$)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    placeholder: "0,00",
    value: form.orcamento,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        orcamento: e.target.value
      }));
    },
    style: inp
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Valor gasto (R$)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    placeholder: "0,00",
    value: form.valor,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        valor: e.target.value
      }));
    },
    style: inp
  }))), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Observa\xE7\xF5es (fornecedor, contato, etc.)",
    value: form.notes,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        notes: e.target.value
      }));
    },
    style: _objectSpread(_objectSpread({}, inp), {}, {
      height: 56,
      resize: "none"
    })
  }), /*#__PURE__*/React.createElement("button", {
    onClick: save,
    style: btnP
  }, editId ? "Salvar" : "Adicionar")), financeiro.map(function (item) {
    var orc = Number(item.orcamento) || 0;
    var val = Number(item.valor) || 0;
    var over = orc > 0 && val > orc;
    return /*#__PURE__*/React.createElement(Card, {
      key: item.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: T.text,
        fontSize: 15
      }
    }, item.categoria), item.pago && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        padding: "2px 7px",
        borderRadius: 10,
        background: T.greenLight,
        color: T.green,
        fontWeight: 700
      }
    }, "Pago \u2705"), over && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        padding: "2px 7px",
        borderRadius: 10,
        background: T.redLight,
        color: T.red,
        fontWeight: 700
      }
    }, "Acima do or\xE7.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        marginTop: 6
      }
    }, item.orcamento && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: T.muted
      }
    }, "Or\xE7: ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: T.primaryDark
      }
    }, fmt(item.orcamento))), item.valor && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: T.muted
      }
    }, "Gasto: ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: over ? T.red : T.green
      }
    }, fmt(item.valor)))), item.notes && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: T.muted,
        marginTop: 4,
        fontStyle: "italic"
      }
    }, item.notes)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 4,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return togglePago(item.id);
      },
      title: item.pago ? "Marcar como não pago" : "Marcar como pago",
      style: _objectSpread(_objectSpread({}, btnI), {}, {
        color: item.pago ? T.green : T.muted
      })
    }, /*#__PURE__*/React.createElement(Ico, {
      n: "check",
      s: 15
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return startEdit(item);
      },
      style: btnI
    }, /*#__PURE__*/React.createElement(Ico, {
      n: "edit",
      s: 14
    })), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return remove(item.id);
      },
      style: _objectSpread(_objectSpread({}, btnI), {}, {
        color: T.red
      })
    }, /*#__PURE__*/React.createElement(Ico, {
      n: "trash",
      s: 14
    })))));
  }));
}

// ── APP ───────────────────────────────────────────────────────────────
var TABS = [{
  id: "convidados",
  label: "Convidados",
  icon: "users"
}, {
  id: "familias",
  label: "Famílias",
  icon: "family"
}, {
  id: "resumo",
  label: "Resumo",
  icon: "chart"
}, {
  id: "tarefas",
  label: "Tarefas",
  icon: "tasks"
}, {
  id: "financeiro",
  label: "Finanças",
  icon: "money"
}];
function App() {
  var _useState29 = useState("convidados"),
    _useState30 = _slicedToArray(_useState29, 2),
    tab = _useState30[0],
    setTab = _useState30[1];
  var _useLS3 = useLS("livia-guests", []),
    _useLS4 = _slicedToArray(_useLS3, 2),
    guests = _useLS4[0],
    setGuests = _useLS4[1];
  var _useLS5 = useLS("livia-financeiro", defaultCats),
    _useLS6 = _slicedToArray(_useLS5, 2),
    financeiro = _useLS6[0],
    setFinanceiro = _useLS6[1];
  useEffect(function () {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: T.bg,
      fontFamily: "'DM Sans', sans-serif",
      display: "flex",
      flexDirection: "column",
      maxWidth: 480,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, ".concat(T.primaryDark, " 0%, ").concat(T.primary, " 100%)"),
      padding: "20px 20px 16px",
      position: "sticky",
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: T.primaryLight,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 2
    }
  }, "\uD83C\uDF89 Festa da"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: T.white,
      fontFamily: "'Playfair Display', serif",
      fontSize: 28,
      lineHeight: 1.1
    }
  }, "L\xEDvia \u2728")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "18px 14px 90px",
      overflowY: "auto"
    }
  }, tab === "convidados" && /*#__PURE__*/React.createElement(ConvidadosTab, {
    guests: guests,
    setGuests: setGuests
  }), tab === "familias" && /*#__PURE__*/React.createElement(FamiliasTab, {
    guests: guests,
    setGuests: setGuests
  }), tab === "resumo" && /*#__PURE__*/React.createElement(ResumoTab, {
    guests: guests,
    financeiro: financeiro
  }), tab === "tarefas" && /*#__PURE__*/React.createElement(TarefasTab, null), tab === "financeiro" && /*#__PURE__*/React.createElement(FinanceiroTab, {
    financeiro: financeiro,
    setFinanceiro: setFinanceiro
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      maxWidth: 480,
      background: T.white,
      borderTop: "1px solid ".concat(T.border),
      display: "flex",
      zIndex: 20
    }
  }, TABS.map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: function onClick() {
        return setTab(t.id);
      },
      style: {
        flex: 1,
        padding: "10px 0 8px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        color: tab === t.id ? T.primary : T.muted
      }
    }, /*#__PURE__*/React.createElement(Ico, {
      n: t.icon,
      s: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontWeight: tab === t.id ? 700 : 500
      }
    }, t.label), tab === t.id && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 4,
        height: 4,
        borderRadius: "50%",
        background: T.primary,
        marginTop: -1
      }
    }));
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
