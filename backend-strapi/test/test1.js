(function (e) {
  function t(t) {
    for (var s, o, a = t[0], c = t[1], u = t[2], l = 0, d = []; l < a.length; l++) o = a[l], Object.prototype.hasOwnProperty.call(r, o) && r[o] && d.push(r[o][0]), r[o] = 0;
    for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (e[s] = c[s]);
    p && p(t);
    while (d.length) d.shift()();
    return i.push.apply(i, u || []), n()
  }

  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], s = !0, o = 1; o < n.length; o++) {
        var a = n[o];
        0 !== r[a] && (s = !1)
      }
      s && (i.splice(t--, 1), e = c(c.s = n[0]))
    }
    return e
  }
  var s = {},
    o = {
      app: 0
    },
    r = {
      app: 0
    },
    i = [];

  function a(e) {
    return c.p + "js/" + ({} [e] || e) + "." + {
      "chunk-0fc38cb1": "608b9823",
      "chunk-2d22c835": "4c164239",
      "chunk-61b82165": "5024ed62",
      "chunk-62c736ae": "3aa05e65",
      "chunk-7725ab50": "3438c031",
      "chunk-62e88db2": "f6c1a960",
      "chunk-7a488d70": "8f26510f",
      "chunk-e851e89e": "eab2a8bf",
      "chunk-14850ca4": "d8df99d8",
      "chunk-c01d9b5e": "b7613bac",
      "chunk-169fd126": "3b471e69",
      "chunk-3561117c": "136506be",
      "chunk-2d0c7e34": "48a7f8d2",
      "chunk-419789de": "89e69ea5",
      "chunk-e429b4ea": "9eaaf987",
      "chunk-2d0b20f8": "5566ee22",
      "chunk-8f9c2c82": "a4fd7881"
    } [e] + ".js"
  }

  function c(t) {
    if (s[t]) return s[t].exports;
    var n = s[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports
  }
  c.e = function (e) {
    var t = [],
      n = {
        "chunk-0fc38cb1": 1,
        "chunk-61b82165": 1,
        "chunk-62c736ae": 1,
        "chunk-7725ab50": 1,
        "chunk-62e88db2": 1,
        "chunk-7a488d70": 1,
        "chunk-e851e89e": 1,
        "chunk-14850ca4": 1,
        "chunk-c01d9b5e": 1,
        "chunk-169fd126": 1,
        "chunk-3561117c": 1,
        "chunk-419789de": 1,
        "chunk-e429b4ea": 1,
        "chunk-8f9c2c82": 1
      };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise((function (t, n) {
      for (var s = "css/" + ({} [e] || e) + "." + {
          "chunk-0fc38cb1": "84eb4c08",
          "chunk-2d22c835": "31d6cfe0",
          "chunk-61b82165": "4496a72f",
          "chunk-62c736ae": "f44fd4c3",
          "chunk-7725ab50": "84eb4c08",
          "chunk-62e88db2": "9deb4d24",
          "chunk-7a488d70": "f44fd4c3",
          "chunk-e851e89e": "f1996782",
          "chunk-14850ca4": "b5a94018",
          "chunk-c01d9b5e": "c309eb75",
          "chunk-169fd126": "af984da9",
          "chunk-3561117c": "cd5fc475",
          "chunk-2d0c7e34": "31d6cfe0",
          "chunk-419789de": "0d2fcfbf",
          "chunk-e429b4ea": "84eb4c08",
          "chunk-2d0b20f8": "31d6cfe0",
          "chunk-8f9c2c82": "af984da9"
        } [e] + ".css", r = c.p + s, i = document.getElementsByTagName("link"), a = 0; a < i.length; a++) {
        var u = i[a],
          l = u.getAttribute("data-href") || u.getAttribute("href");
        if ("stylesheet" === u.rel && (l === s || l === r)) return t()
      }
      var d = document.getElementsByTagName("style");
      for (a = 0; a < d.length; a++) {
        u = d[a], l = u.getAttribute("data-href");
        if (l === s || l === r) return t()
      }
      var p = document.createElement("link");
      p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function (t) {
        var s = t && t.target && t.target.src || r,
          i = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
        i.code = "CSS_CHUNK_LOAD_FAILED", i.request = s, delete o[e], p.parentNode.removeChild(p), n(i)
      }, p.href = r;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(p)
    })).then((function () {
      o[e] = 0
    })));
    var s = r[e];
    if (0 !== s)
      if (s) t.push(s[2]);
      else {
        var i = new Promise((function (t, n) {
          s = r[e] = [t, n]
        }));
        t.push(s[2] = i);
        var u, l = document.createElement("script");
        l.charset = "utf-8", l.timeout = 120, c.nc && l.setAttribute("nonce", c.nc), l.src = a(e);
        var d = new Error;
        u = function (t) {
          l.onerror = l.onload = null, clearTimeout(p);
          var n = r[e];
          if (0 !== n) {
            if (n) {
              var s = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src;
              d.message = "Loading chunk " + e + " failed.\n(" + s + ": " + o + ")", d.name = "ChunkLoadError", d.type = s, d.request = o, n[1](d)
            }
            r[e] = void 0
          }
        };
        var p = setTimeout((function () {
          u({
            type: "timeout",
            target: l
          })
        }), 12e4);
        l.onerror = l.onload = u, document.head.appendChild(l)
      } return Promise.all(t)
  }, c.m = e, c.c = s, c.d = function (e, t, n) {
    c.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    })
  }, c.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, c.t = function (e, t) {
    if (1 & t && (e = c(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (c.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var s in e) c.d(n, s, function (t) {
        return e[t]
      }.bind(null, s));
    return n
  }, c.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"]
    } : function () {
      return e
    };
    return c.d(t, "a", t), t
  }, c.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, c.p = "/learnjs/", c.oe = function (e) {
    throw console.error(e), e
  };
  var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
    l = u.push.bind(u);
  u.push = t, u = u.slice();
  for (var d = 0; d < u.length; d++) t(u[d]);
  var p = l;
  i.push([0, "chunk-vendors"]), n()
})({
  0: function (e, t, n) {
    e.exports = n("56d7")
  },
  "08d9": function (e, t, n) {
    e.exports = n.p + "img/learnJS.9ffd2c54.png"
  },
  "199c": function (e, t) {},
  "1bf9": function (e, t, n) {
    "use strict";
    n("b273")
  },
  "23be": function (e, t, n) {
    "use strict";
    var s = n("199c"),
      o = n.n(s);
    t["default"] = o.a
  },
  2905: function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("99af"),
      core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__),
      core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4160"),
      core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__),
      core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("caad"),
      core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__),
      core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("c975"),
      core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__),
      core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("d81d"),
      core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__),
      core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a434"),
      core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__),
      core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("a9e3"),
      core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__),
      core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ac1f"),
      core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__),
      core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("2532"),
      core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__),
      core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("1276"),
      core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9__),
      core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("159b"),
      core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__),
      C_Users_ricar_OneDrive_Ambiente_de_Trabalho_REPOS_ljs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("2909"),
      C_Users_ricar_OneDrive_Ambiente_de_Trabalho_REPOS_ljs_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("53ca"),
      C_Users_ricar_OneDrive_Ambiente_de_Trabalho_REPOS_ljs_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("5530"),
      vuex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("2f62");
    __webpack_exports__["a"] = {
      props: {
        resource: Object
      },
      data: function () {
        return {
          dialog: !1,
          dialogDelete: !1,
          headers: [{
            text: "Input",
            align: "start",
            sortable: !0,
            value: "input"
          }, {
            text: "Output",
            value: "output"
          }, {
            text: "Expected",
            value: "expected"
          }, {
            text: "Actions",
            value: "actions",
            sortable: !1
          }],
          editedIndex: -1,
          editedItem: {
            input: "",
            output: "",
            expected: ""
          },
          defaultItem: {
            input: "",
            output: "",
            expected: ""
          },
          code: ""
        }
      },
      computed: Object(C_Users_ricar_OneDrive_Ambiente_de_Trabalho_REPOS_ljs_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_13__["a"])({
        formTitle: function () {
          return -1 === this.editedIndex ? "New Test" : "Edit Test"
        },
        tests: function () {
          return this.resource.tests
        }
      }, Object(vuex__WEBPACK_IMPORTED_MODULE_14__["b"])(["getCode"])),
      watch: {
        dialog: function (e) {
          e || this.close()
        },
        dialogDelete: function (e) {
          e || this.closeDelete()
        }
      },
      methods: {
        initialize: function () {
          this.tests = this.resource.tests
        },
        run: function run() {
          var _this = this;
          this.code = this.getCode, this.tests.forEach((function (test) {
            var res;
            if ("expression" == test.type) try {
              console.log(eval("".concat(_this.code))), res = eval("".concat(_this.code, "\n").concat(test.input)), res = "undefined" === typeof res ? "No assigned value" : res, console.log(Object(C_Users_ricar_OneDrive_Ambiente_de_Trabalho_REPOS_ljs_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_12__["a"])(res))
            } catch (error) {
              res = error.message
            } else if ("metric" == test.type) switch (test.input) {
              case "lines":
                res = eval("".concat(_this.code.split("\n").length, " ").concat(test.expected)), console.log("->" + "".concat(_this.code.split("\n").length, " ").concat(test.expected)), console.log("->" + res);
                break;
              case "push":
                res = _this.code.includes("push"), console.log("->" + res);
                break;
              default:
                break
            } else {
              var fct = eval("(".concat(_this.code, ")")),
                arr = test.input.split(" ").map(Number);
              res = fct.call.apply(fct, [null].concat(Object(C_Users_ricar_OneDrive_Ambiente_de_Trabalho_REPOS_ljs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__["a"])(arr)))
            }
            test.output = String(res)
          }))
        },
        getColor: function (e) {
          return "" == e.output ? "white" : e.output == e.expected || "metric" == e.type && "true" == e.output ? "green" : "red"
        },
        editItem: function (e) {
          this.editedIndex = this.tests.indexOf(e), this.editedItem = Object.assign({}, e), this.dialog = !0
        },
        deleteItem: function (e) {
          this.editedIndex = this.tests.indexOf(e), this.editedItem = Object.assign({}, e), this.dialogDelete = !0
        },
        deleteItemConfirm: function () {
          this.tests.splice(this.editedIndex, 1), this.closeDelete()
        },
        close: function () {
          var e = this;
          this.dialog = !1, this.$nextTick((function () {
            e.editedItem = Object.assign({}, e.defaultItem), e.editedIndex = -1
          }))
        },
        closeDelete: function () {
          var e = this;
          this.dialogDelete = !1, this.$nextTick((function () {
            e.editedItem = Object.assign({}, e.defaultItem), e.editedIndex = -1
          }))
        },
        save: function () {
          this.editedIndex > -1 ? Object.assign(this.tests[this.editedIndex], this.editedItem) : this.tests.push(this.editedItem), this.close()
        }
      }
    }
  },
  "2a71": function (e, t, n) {
    "use strict";
    n.r(t);
    var s = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", {
          attrs: {
            id: "resource"
          }
        }, [n(e.getComponent, {
          tag: "component",
          attrs: {
            resource: e.resource
          }
        })], 1)
      },
      o = [],
      r = (n("99af"), n("fb6a"), n("d3b7"), {
        name: "Resource",
        props: {
          resource: {
            type: Object,
            default: function () {
              return null
            }
          }
        },
        computed: {
          getComponent: function () {
            var e = this,
              t = this.resource.type.charAt(0).toUpperCase() + this.resource.type.slice(1);
            return function () {
              return n("e0b0")("./".concat(e.resource.type, "/").concat(t))
            }
          }
        }
      }),
      i = r,
      a = n("2877"),
      c = Object(a["a"])(i, s, o, !1, null, null, null);
    t["default"] = c.exports
  },
  "3dfd": function (e, t, n) {
    "use strict";
    var s = n("80c9"),
      o = n("23be"),
      r = n("2877"),
      i = Object(r["a"])(o["default"], s["a"], s["b"], !1, null, "ae86fd50", null);
    t["default"] = i.exports
  },
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "bus", (function () {
      return Te
    }));
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var s = n("2b0e"),
      o = n("3dfd"),
      r = n("8c4f"),
      i = (n("4de4"), n("7db0"), n("4160"), n("caad"), n("d81d"), n("45fc"), n("b0c0"), n("2532"), n("159b"), n("2909")),
      a = n("2f62"),
      c = [{
        id: 1,
        name: "Introduction",
        resources: [7, 8, 9],
        objectives: ["To know what is JavaScript,its specification and how it is update", "To identify the necessary tools to create the right development environment", "To prepare and create a basic Web app"]
      }, {
        id: 2,
        name: "JavaScript Fundamentals",
        resources: [10, 11, 12, 13, 14, 15, 40, 41, 48, 49, 55, 56, 67]
      }, {
        id: 3,
        name: "DOM",
        resources: [68, 69, 77, 78]
      }, {
        id: 4,
        name: "Objects",
        resources: []
      }, {
        id: 5,
        name: "Classes",
        resources: []
      }, {
        id: 6,
        name: "Advanced Topics",
        resources: []
      }],
      u = (n("99af"), [{
        id: 16,
        name: "Hello World",
        description: "Create a statement that print 'Hello World' in the console.",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "console.log('Hello World')",
        tests: [{
          input: "log",
          output: "",
          expected: "Hello World",
          type: "log"
        }, {
          input: "lines",
          output: "",
          expected: "== 1",
          type: "metric",
          subtype: "lines"
        }]
      }, {
        id: 17,
        name: "Playing with variables",
        description: "Declare two variables: <code>admin</code> and <code>name</code>. Assign the value <code>'John'</code> to the variable <code>name</code>. Copy the value from <code>name</code> to <code>admin</code>. Print the value of <code>admin</code> in the console.",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "let admin, name\nname = 'John'\nadmin = name\nconsole.log(admin)",
        tests: [{
          input: "name",
          output: "",
          expected: "John",
          type: "expression"
        }, {
          input: "admin==name",
          output: "",
          expected: "true",
          type: "expression"
        }, {
          input: "occurrences:'John'",
          output: "",
          expected: "1",
          type: "metric",
          subtype: "occurrences"
        }, {
          input: "log",
          output: "",
          expected: "John",
          type: "log"
        }]
      }, {
        id: 18,
        name: "The PI value",
        description: "Define variables PI and WHITE_COLOR to store the PI and the white color hexadecimal values.",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "const PI = 3.14\nconst WHITE_COLOR = '#FFFFFF'",
        tests: [{
          input: "typeof(PI)",
          output: "",
          expected: "number",
          type: "expression"
        }, {
          input: "typeof(WHITE_COLOR)",
          output: "",
          expected: "string",
          type: "expression"
        }, {
          input: "PI.toFixed(2)",
          output: "",
          expected: "3.14",
          type: "expression"
        }, {
          input: "WHITE_COLOR",
          output: "",
          expected: "#FFFFFF",
          type: "expression"
        }, {
          input: "PI=1",
          output: "",
          expected: "error",
          type: "expression",
          subtype: "error"
        }]
      }, {
        id: 19,
        name: "Quiz about variables!",
        type: "quiz",
        subtype: "quiz",
        quizId: 1
      }, {
        id: 20,
        name: "Numbers and Strings",
        description: "Define a variable <code>school</code> with a string at your choice. Then, define a variable <code>age</code> with a number at your choice. Try to do all in the same line!",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "let school = 'esmad';\nlet age = 23;\n",
        tests: [{
          input: "typeof(school)",
          output: "",
          expected: "string",
          type: "expression"
        }, {
          input: "typeof(age)",
          output: "",
          expected: "number",
          type: "expression"
        }, {
          input: "lines",
          output: "",
          expected: "== 1",
          type: "metric",
          subtype: "lines"
        }]
      }, {
        id: 21,
        name: "Sum two numbers",
        description: "Define a variable <code>a</code> with the value <code>2</code>. Then, define a variable <code>b</code> with the value <code>3</code>. Finally, create a variable <code>c</code> with the sum of the two previous variables.",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "let a = 2;\nlet b = 3;\nlet c = a + b;",
        tests: [{
          input: "a",
          output: "",
          expected: "2",
          type: "expression"
        }, {
          input: "b",
          output: "",
          expected: "3",
          type: "expression"
        }, {
          input: "c",
          output: "",
          expected: "5",
          type: "expression"
        }, {
          input: "occurrences:5",
          output: "",
          expected: "0",
          type: "metric",
          subtype: "occurrences"
        }]
      }, {
        id: 22,
        name: "Backsticks",
        description: "Using <strong>backsticks</strong> present the sentence <code>My name is NAME. I'm AGE years old!</code> through <code>console.log</code> where NAME e AGE should be replaced by the variables <code>name</code> and <code>age</code>, respectively.",
        type: "code",
        subtype: "skeleton",
        skeleton: "// Variables\nlet name = 'Rui';\nlet age = 33;\n",
        code: "// Variables\nlet name = 'Rui';\nlet age = 33;\nconsole.log(`My name is ${name}. I'm ${age} years old!`)",
        tests: [{
          input: "name",
          output: "",
          expected: "Rui",
          type: "expression"
        }, {
          input: "age",
          output: "",
          expected: "33",
          type: "expression"
        }, {
          input: "occurrences:Rui",
          output: "",
          expected: "1",
          type: "metric",
          subtype: "occurrences"
        }, {
          input: "log",
          output: "",
          expected: "My name is Rui. I'm 33 years old!",
          type: "log"
        }]
      }, {
        id: 23,
        name: "Type of variables",
        description: "Declare a variable with the name <code>isOpen</code> and assign a boolean value. Print in the console its type using the right operator.",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "let isOpen = true;\nconsole.log(typeof isOpen);",
        tests: [{
          input: "typeof(isOpen)",
          output: "",
          expected: "boolean",
          type: "expression"
        }, {
          input: "log",
          output: "",
          expected: "boolean",
          type: "log"
        }, {
          input: "occurrences:typeof",
          output: "",
          expected: "1",
          type: "metric",
          subtype: "occurrences"
        }]
      }, {
        id: 24,
        name: "Quiz on data types",
        type: "quiz",
        subtype: "quiz",
        quizId: 2
      }, {
        id: 25,
        name: "Division of two numbers",
        description: "Calculate the division of these strings (<code>num1</code> and <code>num2</code>) and put the result in a variable called <code>res</code>. Then output the value of the variable using <code>console.log</code>. The result should have 2 decimal places.",
        type: "code",
        subtype: "skeleton",
        skeleton: "// Variables\nlet num1 = '7';\nlet num2 = '3';\n",
        code: "let num1 = '7';\nlet num2 = '3';\nlet res = num1 / num2;\nconsole.log(res.toFixed(2));",
        tests: [{
          input: "num1",
          output: "",
          expected: "7",
          type: "expression"
        }, {
          input: "num2",
          output: "",
          expected: "3",
          type: "expression"
        }, {
          input: "res",
          output: "",
          expected: "2.3333333333333335",
          type: "expression"
        }, {
          input: "log",
          output: "",
          expected: "2.33",
          type: "log"
        }, {
          input: "occurrences:toFixed",
          output: "",
          expected: "1",
          type: "metric",
          subtype: "occurrences"
        }]
      }, {
        id: 26,
        name: "Find the operator",
        description: "Use the correct assignment operator that will result in <code>x</code> being 64.",
        type: "code",
        subtype: "skeleton",
        skeleton: "// Variables\nlet x = 4;\nlet y = 3;\nx = x  y;\nconsole.log(x);",
        code: "let x = 4;\nlet y = 3;\nx = x  ** y;\nconsole.log(x);",
        tests: [{
          input: "x",
          output: "",
          expected: "64",
          type: "expression"
        }, {
          input: "y",
          output: "",
          expected: "3",
          type: "expression"
        }, {
          input: "log",
          output: "",
          expected: "64",
          type: "log"
        }, {
          input: "occurrences:\\*\\*",
          output: "",
          expected: "1",
          type: "metric",
          subtype: "occurrences"
        }]
      }, {
        id: 27,
        name: "Quiz on operators",
        type: "quiz",
        subtype: "quiz",
        quizId: 3
      }, {
        id: 28,
        name: "Help me with this variable!",
        description: "Correct this code in order to have the value of variable <code>x</code> correctly output.",
        type: "code",
        subtype: "buggy",
        skeleton: "// Correct the next code\nlet x;\nX = 4;\nconsole.log(x);",
        code: "let x;\nx = 4;\nconsole.log(x);",
        tests: [{
          input: "x",
          output: "",
          expected: "4",
          type: "expression"
        }, {
          input: "log",
          output: "",
          expected: "4",
          type: "log"
        }]
      }, {
        id: 29,
        name: "What is your age?",
        description: "Declare a variable called <code>age</code> and assign your age to it.",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "let age = 18;",
        tests: [{
          input: "typeof(age)",
          output: "",
          expected: "number",
          type: "expression"
        }]
      }, {
        id: 42,
        name: "Can I see the movie?",
        description: "Declare a variable called <code>age</code> and assign the value 19. Then create a conditional that logs 'You can see the movie' if age is bigger than 18",
        type: "code",
        subtype: "blank",
        skeleton: "let age = 19;\n",
        code: "let age = 19;\nif(age > 18) {\n&nbsp;&nbsp;console.log('You can see the movie')\n}",
        readonly: [1],
        tests: [{
          input: "typeof(age)",
          output: "",
          expected: "number",
          type: "expression"
        }, {
          input: "age",
          output: "",
          expected: "19",
          type: "expression"
        }, {
          input: "log",
          output: "",
          expected: "You can see the movie",
          type: "log"
        }, {
          input: "occurrences:if",
          output: "",
          expected: "1",
          type: "metric",
          subtype: "occurrences"
        }, {
          input: "occurrences:>",
          output: "",
          expected: "1",
          type: "metric",
          subtype: "occurrences"
        }]
      }, {
        id: 43,
        name: "Buy a cake",
        description: "John has 20 cents in is pocket. Mary has the double. Define variables <code>johnMoney</code> and <code>maryMoney</code> for both budgets. Calculate the total money of the two friends and store it in a variable called <code>totalMoney</code>. Then, log in the console 'YES' if they have sufficient money based on the value of <code>CAKE_COST</code>, and 'NO', otherwise.",
        type: "code",
        subtype: "blank",
        skeleton: "const CAKE_COST = 65\n",
        code: "const CAKE_COST = 65;\nlet johnMoney = 20;\nlet maryMoney = johnMoney * 2;\nlet totalMoney = johnMoney + maryMoney;\nif(totalMoney >= CAKE_COST) {\nconsole.log('YES');\n} else {\nconsole.log('NO');\n}\n",
        readonly: [1],
        tests: [{
          input: "typeof(johnMoney)",
          output: "",
          expected: "number",
          type: "expression"
        }, {
          input: "typeof(maryMoney)",
          output: "",
          expected: "number",
          type: "expression"
        }, {
          input: "maryMoney == johnMoney * 2",
          output: "",
          expected: "true",
          type: "expression"
        }, {
          input: "CAKE_COST",
          output: "",
          expected: "65",
          type: "expression"
        }, {
          input: "log",
          output: "",
          expected: "NO",
          type: "log"
        }, {
          input: "occurrences:if",
          output: "",
          expected: "1",
          type: "metric",
          subtype: "occurrences"
        }, {
          input: "occurrences:else",
          output: "",
          expected: "1",
          type: "metric",
          subtype: "occurrences"
        }, {
          input: "occurrences:40",
          output: "",
          expected: "0",
          type: "metric",
          subtype: "occurrences"
        }]
      }, {
        id: 44,
        name: "Are we in 2021?",
        description: "Feed a variable called <code>is2021</code>, based on the value of the constant <code>currentYear</code>, with the value 'YES' if we are in 2021, or 'NO' otherwise. You must use the ternary operator!",
        type: "code",
        subtype: "blank",
        skeleton: "const currentYear = new Date().getFullYear();\n",
        code: "const currentYear = new Date().getFullYear();\nlet is2021 = currentYear == 2021 ? 'YES' : 'NO';\n",
        readonly: [1],
        tests: [{
          input: "typeof(is2021)",
          output: "",
          expected: "string",
          type: "expression"
        }, {
          input: "is2021",
          output: "",
          expected: "YES",
          type: "expression"
        }, {
          input: "occurrences:\\?",
          output: "",
          expected: "1",
          type: "metric",
          subtype: "occurrences"
        }, {
          input: "lines",
          output: "",
          expected: "== 2",
          type: "metric",
          subtype: "lines"
        }]
      }, {
        id: 45,
        name: "Grades",
        description: "Claire got 8 at Algorithms. Store the grade in a variable called <code>claireGrade</code>. Help Claire to know its status regarding this course. In Algorithms course any grade below 7, the student is 'DISAPPROVED'. Grades equals or greater than 7 and less than 10 the student goes to an 'ORAL'. Any grade equal or greater than 10 the student is 'APPROVED'. Store the Claire's final status in a variable called <code>claireStatus</code> and print it in the console.",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "const claireGrade = 8;\nlet claireStatus;\nif(claireGrade < 7) {\nclaireStatus = 'DISAPPROVED';\n }else if(claireGrade < 10) {\nclaireStatus = 'ORAL';\n} else {\nclaireStatus = 'APPROVED';\n}\nconsole.log(claireStatus);\n",
        readonly: [1],
        tests: [{
          input: "typeof(claireStatus)",
          output: "",
          expected: "string",
          type: "expression"
        }, {
          input: "claireStatus",
          output: "",
          expected: "ORAL",
          type: "expression"
        }, {
          input: "log",
          output: "",
          expected: "ORAL",
          type: "log"
        }, {
          input: "occurrences:else if",
          output: "",
          expected: "1",
          type: "metric",
          subtype: "occurrences"
        }]
      }, {
        id: 46,
        name: "Go to the Cinema!",
        description: "Anne and Peter went to the cinema. They need to pay 12 euros (<code>totalPrice</code>) for the tickets. If any of them has a cinema card they got a discount of 20% in the total price.Ana doesn't have it, but Pedro has it. Define both variables <code>hasAnneCard</code> and <code>hasPeterCard</code> to represent this.Then using a conditional block calculate the final value that they must pay to go to the cinema and store it in <code>totalPrice</code> variable.",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "let totalPrice = 12;\nconst discount = 0.2;\nconst hasAnneCard = false;\nlet hasPeterCard = true;\nif(hasAnneCard || hasPeterCard) {\ntotalPrice -= totalPrice * discount;\n}\n",
        readonly: [1],
        tests: [{
          input: "typeof(hasAnneCard)",
          output: "",
          expected: "boolean",
          type: "expression"
        }, {
          input: "hasAnneCard",
          output: "",
          expected: "false",
          type: "expression"
        }, {
          input: "typeof(hasPeterCard)",
          output: "",
          expected: "boolean",
          type: "expression"
        }, {
          input: "hasPeterCard",
          output: "",
          expected: "true",
          type: "expression"
        }, {
          input: "totalPrice",
          output: "",
          expected: "9.6",
          type: "expression"
        }]
      }, {
        id: 47,
        name: "Quiz on conditionals",
        type: "quiz",
        subtype: "quiz",
        quizId: 4
      }, {
        id: 50,
        name: "One to Nine",
        description: "Feed a string variable <code>numbers</code> with the values from 1 to 9 using the keyword <code>while</code>. Finally, log the variable in the console",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "let numbers = '';\nlet i=1;\nwhile(i<10) {\nnumbers = numbers + i;\ni++\n}\nconsole.log(numbers);\n",
        readonly: [1],
        tests: [{
          input: "typeof(numbers)",
          output: "",
          expected: "string",
          type: "expression"
        }, {
          input: "numbers",
          output: "",
          expected: "123456789",
          type: "expression"
        }, {
          input: "log",
          output: "",
          expected: "123456789",
          type: "log"
        }, {
          input: "occurrences:while",
          output: "",
          expected: "1",
          type: "metric",
          subtype: "occurrences"
        }]
      }, {
        id: 51,
        name: "Even numbers",
        description: "Calculate the sum of the even numbers between <code>n1</code> and <code>n2</code> and store it in a variable <code>sumEvenNumbers</code>.",
        type: "code",
        subtype: "blank",
        skeleton: "const n1 = 7;\nconst n2 = 22;\n",
        code: "const n1 = 7;\nconst n2 = 22;\nlet sumEvenNumbers = 0;\nfor(let i=n1;i<=n2;i++) {\n  if(i % 2 == 0) {\n    sumEvenNumbers += i;\n  }\n}\n",
        readonly: [1],
        tests: [{
          input: "n1",
          output: "",
          expected: "7",
          type: "expression"
        }, {
          input: "n2",
          output: "",
          expected: "22",
          type: "expression"
        }, {
          input: "sumEvenNumbers",
          output: "",
          expected: "120",
          type: "expression"
        }, {
          input: "occurrences:for",
          output: "",
          expected: "1",
          type: "metric",
          subtype: "occurrences"
        }]
      }, {
        id: 52,
        name: "Descendants",
        description: "Calculate the sum of all the descendants of the number stored in <code>n</code>, store the sum in a variable <code>sum</code> and print it in the console.",
        type: "code",
        subtype: "buggy",
        skeleton: "const n1 = 7;\nlet sum = 0;\nfor(let i = n1 - 1; i >= 1; i++) {\n  sum += i;\n}\n",
        code: "const n1 = 7;\nlet sum = 0;\nfor(let i = n1 - 1; i >= 1; i--) {\n  sum += i;\n}\n",
        readonly: [1],
        tests: [{
          input: "n1",
          output: "",
          expected: "7",
          type: "expression"
        }, {
          input: "sum",
          output: "",
          expected: "21",
          type: "expression"
        }, {
          input: "occurrences:for",
          output: "",
          expected: "1",
          type: "metric",
          subtype: "occurrences"
        }]
      }, {
        id: 53,
        name: "Let's write symbols",
        description: "Complete the code so given a number <code>n</code> and a symbol <code>s</code> it prints in the console <code>s</code>, <code>n</code> times.",
        type: "code",
        subtype: "skeleton",
        skeleton: "const n = 7;\nconst s = '#';\nfor(let i = ; i < ; i++) {\n  console.log();\n}\n",
        code: "const n = 7;\nconst s = '#';\nfor(let i = 1; i <= n ; i++) {\n  console.log(s);\n}\n",
        readonly: [1],
        tests: [{
          input: "n",
          output: "",
          expected: "7",
          type: "expression"
        }, {
          input: "s",
          output: "",
          expected: "#",
          type: "expression"
        }, {
          input: "log",
          output: "",
          expected: "#######",
          type: "log"
        }, {
          input: "occurrences:for",
          output: "",
          expected: "1",
          type: "metric",
          subtype: "occurrences"
        }]
      }, {
        id: 54,
        name: "Quiz on loops",
        type: "quiz",
        subtype: "quiz",
        quizId: 5
      }, {
        id: 57,
        name: "Sum two numbers",
        description: "Create a function called <code>sum</code>that receives two numbers and return their sum.",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "function sum(num1, num2) {\n&nbsp;&nbsp;return num1 + num2;\n}\n",
        readonly: [1],
        tests: [{
          input: "7 8",
          output: "",
          expected: "15",
          type: "function"
        }, {
          input: "-1 1",
          output: "",
          expected: "0",
          type: "function"
        }, {
          input: "typeof(sum)",
          output: "",
          expected: "function",
          type: "expression"
        }]
      }, {
        id: 58,
        name: "Sum N numbers",
        description: "Create a function called <code>sum</code>that receives several numbers and return their sum.",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "function sum(...nums) {\n&nbsp;&nbsp;let result = 0;\n&nbsp;&nbsp;for(let num of nums) {\n&nbsp;&nbsp;&nbsp;&nbsp;result += num;\n&nbsp;&nbsp;}\n&nbsp;&nbsp;return result;\n}\n",
        readonly: [1],
        tests: [{
          input: "-1",
          output: "",
          expected: "-1",
          type: "function"
        }, {
          input: "-1 1 2",
          output: "",
          expected: "2",
          type: "function"
        }, {
          input: " 1 2 3 4 5",
          output: "",
          expected: "15",
          type: "function"
        }, {
          input: "typeof(sum)",
          output: "",
          expected: "function",
          type: "expression"
        }]
      }, {
        id: 59,
        name: "How many arguments?",
        description: "Create a function called <code>getNumArguments</code>that returns the number or arguments passed to the function.",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "function getNumArguments() {\n&nbsp;&nbsp;return arguments.length;\n}\n",
        readonly: [1],
        tests: [{
          input: "-1",
          output: "",
          expected: "1",
          type: "function"
        }, {
          input: "-1 1 2",
          output: "",
          expected: "3",
          type: "function"
        }, {
          input: "",
          output: "",
          expected: "0",
          type: "function"
        }, {
          input: "typeof(getNumArguments)",
          output: "",
          expected: "function",
          type: "expression"
        }]
      }, {
        id: 60,
        name: "Arrow Cube!",
        description: "Create an arrow function <code>calcCube</code> that receives a number and return its cube.",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "const calcCube = (num) => num ** 3;\n",
        readonly: [1],
        tests: [{
          input: "calcCube(4)",
          output: "",
          expected: "64",
          type: "expression"
        }, {
          input: "calcCube(0)",
          output: "",
          expected: "0",
          type: "expression"
        }, {
          input: "calcCube(-2)",
          output: "",
          expected: "-8",
          type: "expression"
        }, {
          input: "typeof(calcCube)",
          output: "",
          expected: "function",
          type: "expression"
        }, {
          input: "occurrences:=>",
          output: "",
          expected: "1",
          type: "metric",
          subtype: "occurrences"
        }]
      }, {
        id: 61,
        name: "Up up and away!",
        description: "Create a function <code>isGrowing</code> that receives three numbers number and returns true if the numbers are in ascending order. Otherwise, the function should return false",
        type: "code",
        subtype: "skeleton",
        skeleton: "function isGrowing(num1, num2, num3) {\n  if() {\n\n  } else {\n\n  }\n}\n",
        code: "function isGrowing(num1, num2, num3) {\n  if(num1 <= num2 && num2 <= num3) {\n    return true;  \n  } else {\n    return false;\n  }\n}\n",
        readonly: [1],
        tests: [{
          input: "3 6 5",
          output: "",
          expected: "false",
          type: "function"
        }, {
          input: "1 1 1",
          output: "",
          expected: "true",
          type: "function"
        }, {
          input: "-5 -2 0",
          output: "",
          expected: "true",
          type: "function"
        }]
      }, {
        id: 62,
        name: "The smallest",
        description: "Create a function <code>getSmallest</code> that receives several numbers and returns the smallest number.",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "function getSmallest(...nums) {\n  let small = +Infinity\n  for(let num of nums) {\n    if(num < small) {\n      small = num\n    }\n  }\n  return small\n}  \n",
        readonly: [1],
        tests: [{
          input: "3 6 5",
          output: "",
          expected: "3",
          type: "function"
        }, {
          input: "1 1 1 12 4",
          output: "",
          expected: "1",
          type: "function"
        }, {
          input: "0",
          output: "",
          expected: "0",
          type: "function"
        }]
      }, {
        id: 63,
        name: "Count vogals",
        description: "Create a function <code>getNumberVogals</code> that receives a string and returns the number of vogals in it.",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "function getNumberVogals(str) {\n  let sum = 0\n  str = str.toLowerCase()\n  for(let s of str) {\n    if(s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u') {\n      sum++\n    }\n  }\n  return sum\n}  \n",
        readonly: [1],
        tests: [{
          input: "getNumberVogals('ESMAD')",
          output: "",
          expected: "2",
          type: "expression"
        }, {
          input: "getNumberVogals('I lOve PoRtugal!')",
          output: "",
          expected: "6",
          type: "expression"
        }, {
          input: "getNumberVogals('grrrrrr')",
          output: "",
          expected: "0",
          type: "expression"
        }, {
          input: "getNumberVogals('')",
          output: "",
          expected: "0",
          type: "expression"
        }]
      }, {
        id: 64,
        name: "Factorial",
        description: "Create a function <code>calcFactorial</code> that receives a number and returs its factorial.",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "function calcFactorial(number) {\n  let sum = 1\n  for(let i = 1; i <= number; i++) {\n    sum = sum * i\n  }\n  return sum\n}  \n",
        readonly: [1],
        tests: [{
          input: "calcFactorial(4)",
          output: "",
          expected: "24",
          type: "expression"
        }, {
          input: "calcFactorial(0)",
          output: "",
          expected: "1",
          type: "expression"
        }, {
          input: "calcFactorial(1)",
          output: "",
          expected: "1",
          type: "expression"
        }, {
          input: "calcFactorial(6)",
          output: "",
          expected: "720",
          type: "expression"
        }]
      }, {
        id: 65,
        name: "The sum of the digits!",
        description: "Create a function <code>getDigitsSum</code> that receives a number and returs the sum of its digits.",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "function getDigitsSum(number) {\n  let sum = 0\n  while(number) {\n    sum += number % 10\n    number = Math.floor(number / 10)     \n  }\n  return sum\n}  \n",
        readonly: [1],
        tests: [{
          input: "getDigitsSum(123)",
          output: "",
          expected: "6",
          type: "expression"
        }, {
          input: "getDigitsSum(7)",
          output: "",
          expected: "7",
          type: "expression"
        }, {
          input: "getDigitsSum(37437)",
          output: "",
          expected: "24",
          type: "expression"
        }]
      }, {
        id: 66,
        name: "Reverse",
        description: "Create a function <code>getNumberReverse</code> that receives a number and returs its reverse.",
        type: "code",
        subtype: "blank",
        skeleton: "",
        code: "function getNumberReverse(number) {\n  let str = ''\n  while(number) {\n    str += number % 10\n    number = Math.floor(number / 10)     \n  }\n  return +str\n}  \n",
        readonly: [1],
        tests: [{
          input: "getNumberReverse(43)",
          output: "",
          expected: "34",
          type: "expression"
        }, {
          input: "getNumberReverse(7)",
          output: "",
          expected: "7",
          type: "expression"
        }, {
          input: "getNumberReverse(2021)",
          output: "",
          expected: "1202",
          type: "expression"
        }]
      }, {
        id: 70,
        name: "Find and Log",
        description: "Using the method <code>getElementById</code> find and fill the text from paragraph <code>myP1</code> to paragraph <code>myP2</code>",
        type: "code",
        html: "<p id='myP1'>Hello World!</p><p id='myP2'></p>",
        subtype: "blank",
        skeleton: "",
        code: "\n  const myP1 = document.getElementById('myP1').innerHTML;\n  document.getElementById('myP2').innerHTML = myP1;\n    ",
        readonly: [1],
        tests: [{
          input: "docFragment.getElementById('myP2').innerHTML",
          alias: "myP2",
          output: "",
          expected: "Hello World!",
          type: "expression"
        }, {
          input: "occurrences:getElementById",
          output: "",
          expected: "2",
          type: "metric",
          subtype: "occurrences"
        }]
      }, {
        id: 71,
        name: "Count rows!",
        description: "Using the method <code>querySelectorAll</code> fill the paragraph <code>myP</code> with the number of rows of the table <code>myTable</code>",
        type: "code",
        html: "<table id='myTable'>\n<tr><td>John</td></tr>\n<tr><td>Mary</td></tr>\n<tr><td>Anne</td></tr>\n</table>\n<p id='myP'></p>",
        subtype: "blank",
        skeleton: "",
        code: "\n  const numberRows = document.querySelectorAll('tr').length;\n  document.getElementById('myP').innerHTML = numberRows;\n    ",
        readonly: [1],
        tests: [{
          input: "docFragment.getElementById('myP').innerHTML",
          alias: "myP",
          output: "",
          expected: "3",
          type: "expression"
        }, {
          input: "occurrences:querySelectorAll",
          output: "",
          expected: "1",
          type: "metric",
          subtype: "occurrences"
        }]
      }, {
        id: 72,
        name: "Change ESMAD link",
        description: "Change the ESMAD link to 'http://www.esmad.ipp.pt/'",
        type: "code",
        html: "<a href='http://www.isep.ipp.pt'>ISEP</a>\n<a href='http://www.esmad.pt'>Go to the site of ESMAD</a>\n<a href='http://www.iscap.ipp.pt'>ISCAP</a>",
        subtype: "blank",
        skeleton: "",
        code: "\n  const elemA = document.querySelector('a:nth-of-type(2)')\n  elemA.href = \"http://www.esmad.ipp.pt/\";\n    ",
        readonly: [1],
        tests: [{
          input: "docFragment.querySelector('a:nth-of-type(2)').href",
          alias: "a",
          output: "",
          expected: "http://www.esmad.ipp.pt/",
          type: "expression"
        }]
      }, {
        id: 73,
        name: "Paint Paint Paint",
        description: "Paint all the background of paragraphs of red for those that belong to the class <code>paint</code>.",
        type: "code",
        html: "<p class='paint'>Let's rock!</p>\n<p class='nopaint'>I'm too old for that!</p>\n<p class='paint'>I'm in!</p>\n<p class='paint'>Where will be?</p>\n<p class='nopaint'>I'm not interested!</p>",
        subtype: "blank",
        skeleton: "",
        code: "\n  const ps = document.querySelectorAll('p.paint')\n  for(let p of ps) {\n    p.style.backgroundColor = 'red'\n  }\n    ",
        readonly: [1],
        tests: [{
          input: "docFragment.querySelectorAll('p.paint')[0].style.backgroundColor",
          alias: "firstParagraph",
          output: "",
          expected: "red",
          type: "expression"
        }, {
          input: "docFragment.querySelectorAll('p.paint')[1].style.backgroundColor",
          alias: "secondParagraph",
          output: "",
          expected: "red",
          type: "expression"
        }, {
          input: "docFragment.querySelectorAll('p.paint')[2].style.backgroundColor",
          alias: "thirdParagraph",
          output: "",
          expected: "red",
          type: "expression"
        }, {
          input: "occurrences:querySelectorAll",
          output: "",
          expected: "1",
          type: "metric",
          subtype: "occurrences"
        }]
      }, {
        id: 74,
        name: "Move text among paragraphs",
        description: "Include the text from the paragraph inside of the div element into the begining of the paragraph outside the div element.",
        type: "code",
        html: "<div>\n<p>Hello</p>\n</div>\n<p id='final'>World</p>",
        subtype: "blank",
        skeleton: "",
        code: "\n  const p1 = document.querySelector('div p')\n  const p2 = document.querySelector('p#final')  \n  p2.innerHTML = p1.innerHTML + ' ' + p2.innerHTML\n  ",
        readonly: [1],
        tests: [{
          input: "docFragment.querySelector('p#final').innerHTML",
          alias: "secondParagraph",
          output: "",
          expected: "Hello World",
          type: "expression"
        }, {
          input: "occurrences:querySelector",
          output: "",
          expected: "2",
          type: "metric",
          subtype: "occurrences"
        }]
      }, {
        id: 75,
        name: "Add a row",
        description: "Create a new row based on the predefined data.",
        type: "code",
        html: "<table id='myTable'>\n<tr><th>Name</th><th>Age</th></tr>\n<tr><td>John</td><td>23</td></tr>\n<tr><td>Mary</td><td>13</td></tr>\n<tr><td>Anne</td><td>45</td></tr>\n</table>",
        subtype: "skeleton",
        skeleton: "let newName = 'Alfred';\nlet newAge = 18",
        code: "let newName = 'Alfred';\nlet newAge = 18;\ndocument.querySelector('table').innerHTML += `<tr><td>${newName}</td><td>${newAge}</td></tr>`",
        readonly: [1],
        tests: [{
          input: "docFragment.querySelectorAll('tr').length",
          alias: "countRows",
          output: "",
          expected: "5",
          type: "expression"
        }]
      }, {
        id: 76,
        name: "Put a border",
        description: "Set a border with 5px, solid and with color red, around elements with a <code>href</code> attribute containing the word 'ipp'",
        type: "code",
        html: "<a href='www.fc.up.pt'>FCUP</a>\n<a href='www.esmad.ipp.pt'>ESMAD</a>\n<a href='www.fe.up.pt'>FEUP</a>",
        subtype: "blank",
        skeleton: "",
        code: '\n  const as = document.querySelectorAll(\'[href*="ipp"]\')\n  for(let a of as) {\n    a.style.border = "5px solid red"\n  } \n    ',
        readonly: [1],
        tests: [{
          input: "docFragment.querySelectorAll('[href*=\"ipp\"]')[0].style.border",
          alias: "checkBorder",
          output: "",
          expected: "5px solid red",
          type: "expression"
        }]
      }, {
        id: 79,
        name: "Click and go!",
        description: "Create a click listener for a button that will show in the paragraph the text included in the input field.",
        type: "code",
        html: "<input type='text' value=''>\n<button>CLICK ME</button>\n<p></p>",
        subtype: "blank",
        skeleton: "",
        code: "\n  const p1 = document.querySelector('button').addEventListener('click', function () {\n    const input = document.querySelector('input')  \n    document.querySelector('p').innerHTML = input.value  \n  })\n  ",
        readonly: [1],
        tests: [{
          input: "docFragment.querySelector('input').value='ESMAD'; docFragment.querySelector('button').click(); docFragment.querySelector('p').innerHTML",
          alias: "write something in the input",
          output: "",
          expected: "ESMAD",
          type: "expression",
          options: {
            showExpected: !1
          }
        }]
      }]),
      l = [{
        id: 7,
        name: "1. Introduction to JavaScript",
        description: "About the JavaScript language and the environment to develop with it.",
        type: "pdf",
        url: "static/pdfs/r1.pdf",
        milestones: [{
          index: 1,
          label: "Start"
        }, {
          index: 3,
          label: "Introdution to JavaScript"
        }, {
          index: 6,
          label: "Specification and Manuals"
        }, {
          index: 11,
          label: "Code Editors"
        }, {
          index: 14,
          label: "Developer Console"
        }, {
          index: 15,
          label: "End"
        }]
      }, {
        id: 8,
        name: "2. The Dev Environment",
        type: "pdf",
        url: "static/pdfs/r2.pdf",
        milestones: [{
          index: 1,
          label: "Start"
        }, {
          index: 3,
          label: "Visual Studio Code"
        }, {
          index: 10,
          label: "Visual Studio Code (themes)"
        }, {
          index: 15,
          label: "Visual Studio Code (icons)"
        }, {
          index: 16,
          label: "Visual Studio Code (extensions)"
        }, {
          index: 35,
          label: "Git"
        }, {
          index: 37,
          label: "GitHub"
        }, {
          index: 38,
          label: "Integration VSC<->GitHub"
        }, {
          index: 49,
          label: "End"
        }]
      }, {
        id: 9,
        name: "3. My First Application",
        type: "pdf",
        url: "static/pdfs/r3.pdf",
        milestones: [{
          index: 1,
          label: "Start"
        }, {
          index: 3,
          label: "The script tag"
        }, {
          index: 8,
          label: "Comments"
        }, {
          index: 15,
          label: "Logging"
        }, {
          index: 16,
          label: "Interaction"
        }, {
          index: 21,
          label: "Hello World!"
        }, {
          index: 22,
          label: "End"
        }]
      }, {
        id: 10,
        name: "1. Variables",
        type: "pdf",
        url: "static/pdfs/r4.pdf",
        milestones: [{
          index: 1,
          label: "Start"
        }, {
          index: 3,
          label: "Declaration and Assignment"
        }, {
          index: 8,
          label: "Constants"
        }, {
          index: 12,
          label: "Naming"
        }, {
          index: 17,
          label: "Scope"
        }, {
          index: 22,
          label: "End"
        }]
      }, {
        id: 11,
        name: "2. Work on Variables",
        description: "This exercise sheet consist in several exercises whose main goal is to understand the use of variables.",
        type: "sheet",
        exercises: [16, 29, 18, 28, 17, 19]
      }, {
        id: 12,
        name: "3. Data Types",
        type: "pdf",
        url: "static/pdfs/r5.pdf",
        milestones: [{
          index: 1,
          label: "Start"
        }, {
          index: 6,
          label: "Number"
        }, {
          index: 9,
          label: "BigInt"
        }, {
          index: 11,
          label: "String"
        }, {
          index: 14,
          label: "Boolean"
        }, {
          index: 16,
          label: "Null and Undefined"
        }, {
          index: 19,
          label: "Object and Symbol"
        }, {
          index: 23,
          label: "Convert to String"
        }, {
          index: 24,
          label: "Convert to Number"
        }, {
          index: 27,
          label: "Convert to Boolean"
        }, {
          index: 27,
          label: "End"
        }]
      }, {
        id: 13,
        name: "4. Work on Data Types",
        description: "This exercise sheet consist in several exercises whose main goal is to understand the use of data types and conversion between types.",
        type: "sheet",
        exercises: [20, 22, 23, 24]
      }, {
        id: 14,
        name: "5. Operators",
        type: "pdf",
        url: "static/pdfs/r6.pdf",
        milestones: [{
          index: 1,
          label: "Start"
        }, {
          index: 5,
          label: "Operator precedence"
        }, {
          index: 6,
          label: "Arithmetic"
        }, {
          index: 8,
          label: "Concatenation"
        }, {
          index: 10,
          label: "Assignment"
        }, {
          index: 12,
          label: "Rest and Exponentiation"
        }, {
          index: 14,
          label: "Increment/Decrement"
        }, {
          index: 18,
          label: "Comparison"
        }, {
          index: 23,
          label: "Logic"
        }, {
          index: 30,
          label: "End"
        }]
      }, {
        id: 15,
        name: "6. Work on Operators",
        description: "This exercise sheet consist in several exercises whose main goal is to understand the use of variables and operators.",
        type: "sheet",
        exercises: [21, 25, 26, 27]
      }, {
        id: 40,
        name: "6. Conditionals",
        type: "pdf",
        url: "static/pdfs/r7.pdf",
        milestones: [{
          index: 1,
          label: "Start"
        }, {
          index: 3,
          label: "IF statement"
        }, {
          index: 7,
          label: "ELSE statement"
        }, {
          index: 9,
          label: "IF...ELSE statement"
        }, {
          index: 11,
          label: "? Ternary operator"
        }, {
          index: 14,
          label: "SWITCH statement"
        }, {
          index: 16,
          label: "End"
        }]
      }, {
        id: 41,
        name: "7. Work on Conditionals",
        description: "This exercise sheet consist in several exercises whose main goal is to understand the use of conditionals.",
        type: "sheet",
        exercises: [42, 43, 44, 45, 46, 47]
      }, {
        id: 48,
        name: "8. Loops",
        type: "pdf",
        url: "static/pdfs/r8.pdf",
        milestones: [{
          index: 1,
          label: "Start"
        }, {
          index: 3,
          label: "WHILE statement"
        }, {
          index: 5,
          label: "DO...WHILE statement"
        }, {
          index: 8,
          label: "FOR statement"
        }, {
          index: 13,
          label: "End"
        }]
      }, {
        id: 49,
        name: "9. Work on Loops",
        description: "This exercise sheet consist in several exercises whose main goal is to understand the use of loops.",
        type: "sheet",
        exercises: [50, 51, 52, 53, 54]
      }, {
        id: 55,
        name: "10. Functions",
        type: "pdf",
        url: "static/pdfs/r9.pdf",
        milestones: [{
          index: 1,
          label: "Start"
        }, {
          index: 4,
          label: "Function declaration"
        }, {
          index: 9,
          label: "Function naming"
        }, {
          index: 11,
          label: "Local and global variables"
        }, {
          index: 17,
          label: "Parameters"
        }, {
          index: 25,
          label: "Function return"
        }, {
          index: 29,
          label: "Function expressions"
        }, {
          index: 35,
          label: "Arrow functions"
        }, {
          index: 42,
          label: "End"
        }]
      }, {
        id: 56,
        name: "11. Work on Functions",
        description: "This exercise sheet consist in several exercises whose main goal is to understand the use of functions.",
        type: "sheet",
        exercises: [57, 58, 59, 60, 61, 62, 63, 64, 65, 66]
      }, {
        id: 67,
        name: "12. Debugging",
        type: "pdf",
        url: "static/pdfs/r10.pdf",
        milestones: [{
          index: 1,
          label: "Start"
        }, {
          index: 6,
          label: "Debugging in Chrome"
        }, {
          index: 28,
          label: "Debugging in Visual Studio Code"
        }, {
          index: 35,
          label: "End"
        }]
      }, {
        id: 68,
        name: "13. Introduction to DOM",
        type: "pdf",
        url: "static/pdfs/r11.pdf",
        milestones: [{
          index: 1,
          label: "Start"
        }, {
          index: 4,
          label: "Document Object Model"
        }, {
          index: 7,
          label: "DOM tree"
        }, {
          index: 10,
          label: "Search"
        }, {
          index: 17,
          label: "Edit"
        }, {
          index: 22,
          label: "Navigation"
        }, {
          index: 31,
          label: "Node management"
        }, {
          index: 37,
          label: "Browser Object Model"
        }, {
          index: 44,
          label: "End"
        }]
      }, {
        id: 69,
        name: "14. Work on DOM",
        description: "This exercise sheet consist in several exercises whose main goal is to understand the use of DOM.",
        type: "sheet",
        exercises: [70, 71, 72, 73, 74, 75, 76]
      }, {
        id: 77,
        name: "14. Events",
        type: "pdf",
        url: "static/pdfs/r12.pdf",
        milestones: [{
          index: 1,
          label: "Start"
        }, {
          index: 4,
          label: "Introduction to Events"
        }, {
          index: 8,
          label: "Method addEventListener"
        }, {
          index: 14,
          label: "Type of Events"
        }, {
          index: 20,
          label: "Forms"
        }, {
          index: 31,
          label: "End"
        }]
      }, {
        id: 78,
        name: "15. Work on Events",
        description: "This exercise sheet consist in several exercises whose main goal is to understand the use of Events.",
        type: "sheet",
        exercises: [79]
      }].concat(Object(i["a"])(u)),
      d = [{
        id: 1,
        name: "Variables",
        description: "All about variables...",
        questions: [{
          id: 1,
          question: "Whick keyword use to define a block scope variable?",
          image: "",
          answers: ["let", "var", "dim", "set"],
          correctAnswer: 1
        }, {
          id: 2,
          question: "Declaring a variable without assigning any value gives the variable the value of?",
          image: "",
          answers: ["null", "NaN", "''", "undefined"],
          correctAnswer: 4
        }, {
          id: 3,
          question: "Which is the keyword to declare constants?",
          image: "",
          answers: ["constant", "var", "const", "let"],
          correctAnswer: 3
        }, {
          id: 4,
          question: "Which operator we should use to perform an assignment of a variable?",
          image: "",
          answers: ["====", "===", "=", "=="],
          correctAnswer: 3
        }, {
          id: 5,
          question: "What is the best name to store the name of a user?",
          image: "",
          answers: ["username", "userName", "name", "nameOfTheUser"],
          correctAnswer: 2
        }, {
          id: 6,
          question: "What value will be printed on the console?<br><br>\n              <samp>\n                let name = 'Richard'<br>\n                name = 3<br>\n                console.log(name)\n              </samp>\n            ",
          image: "",
          answers: ["Richard", "Richard3", "3", "undefined"],
          correctAnswer: 3
        }, {
          id: 7,
          question: "What is the only statement correct?<br><br>\n              <samp>\n                let name = 'Richard'<br>\n                let my-name = 'John'<br>\n                let 1person = 'Charles'<br>\n                let while = 1\n              </samp>\n            ",
          image: "",
          answers: ["First", "Second", "Third", "Fourth"],
          correctAnswer: 1
        }, {
          id: 8,
          question: "What type of error occurs with these statements?<br><br>\n              <samp>\n                {<br>\n                &nbsp;&nbsp;let school = 'ESEIG'<br>\n                &nbsp;&nbsp;let school = 'ESMAD'<br>\n                }\n              </samp>\n            ",
          image: "",
          answers: ["No error", "Identifier 'school' has already been declared", "Assignments require '=='", "Duplication of names for the same variable"],
          correctAnswer: 2
        }, {
          id: 9,
          question: "Which variable doesn't follow camelCase naming convention?",
          image: "",
          answers: ["name", "schoolName", "SchoolDepartmentName", "schoolDepartmentFirstName"],
          correctAnswer: 3
        }, {
          id: 10,
          question: "What will be the output of this code?<br><br>\n            <samp>\n              let x = 2<br>\n              {<br>\n              &nbsp;&nbsp;let x = 3<br>\n              }<br>\n              console.log(x)\n            </samp>\n            ",
          image: "",
          answers: ["2", "3", "23", "error"],
          correctAnswer: 1
        }]
      }, {
        id: 2,
        name: "Data types",
        description: "Quiz on Data Types",
        questions: [{
          id: 1,
          question: "What is the output of the following script?<br><br>\n            <samp>\n            &nbsp;&nbsp;let name = 'Ilya';<br>\n            &nbsp;&nbsp;console.log(`hello ${'name'}`); \n            </samp>  \n          ",
          image: "",
          answers: ["hello name", "hello Ilya", "hello", "error"],
          correctAnswer: 1
        }, {
          id: 2,
          question: "What is the result of this expression?<br><br>\n            <samp>\n            &nbsp;&nbsp;console.log('' + 1 + 0) \n            </samp>\n            ",
          image: "",
          answers: ["010", "1", "0", "10"],
          correctAnswer: 4
        }, {
          id: 3,
          question: "What is the result of this expression?<br><br>\n            <samp>\n            &nbsp;&nbsp;console.log('' - 1 + 0) \n            </samp>\n            ",
          image: "",
          answers: ["-10", "-1", "-0", "-Infinity"],
          correctAnswer: 2
        }, {
          id: 4,
          question: "What is the result of this expression?<br><br>\n          <samp>\n          &nbsp;&nbsp;console.log(true + false) \n          </samp>\n          ",
          image: "",
          answers: ["true", "false", "0", "1"],
          correctAnswer: 4
        }, {
          id: 5,
          question: 'What is the result of this expression?<br><br>\n          <samp>\n          &nbsp;&nbsp;console.log(6 / "3") \n          </samp>\n          ',
          image: "",
          answers: ["2", "NaN", "63", "error"],
          correctAnswer: 1
        }, {
          id: 6,
          question: 'What is the result of this expression?<br><br>\n          <samp>\n          &nbsp;&nbsp;console.log(" -9  " + 5) \n          </samp>\n          ',
          image: "",
          answers: ["-4", " -9  5", "-95", "14"],
          correctAnswer: 2
        }, {
          id: 7,
          question: 'What is the result of this expression?<br><br>\n          <samp>\n          &nbsp;&nbsp;console.log(" -9  " - 5) \n          </samp>\n          ',
          image: "",
          answers: ["14", "4", "-14", " -9  -5"],
          correctAnswer: 3
        }, {
          id: 8,
          question: "What is the result of this expression?<br><br>\n          <samp>\n          &nbsp;&nbsp;console.log(null + 1) \n          </samp>\n          ",
          image: "",
          answers: ["null1", "NaN", "1", "null"],
          correctAnswer: 3
        }, {
          id: 9,
          question: "What is the result of this expression?<br><br>\n          <samp>\n          &nbsp;&nbsp;console.log(undefined + 1) \n          </samp>\n          ",
          image: "",
          answers: ["undefined1", "NaN", "1", "undefined"],
          correctAnswer: 2
        }, {
          id: 10,
          question: 'What is the result of this expression?<br><br>\n          <samp>\n          &nbsp;&nbsp;console.log(4 + 5 + "px") \n          </samp>\n          ',
          image: "",
          answers: ["45px", "NaN", "9px", "error"],
          correctAnswer: 3
        }]
      }, {
        id: 3,
        name: "Operators",
        description: "Quiz on Operators",
        questions: [{
          id: 1,
          question: "What will be the value of variable res?<br><br>\n            <samp>\n            &nbsp;&nbsp;let res = '2' === 2 \n            </samp>  \n          ",
          image: "",
          answers: ["false", "true", "4", "error"],
          correctAnswer: 1
        }, {
          id: 2,
          question: "What is the result of this expression?<br><br>\n            <samp>\n            &nbsp;&nbsp;console.log(2 + 3 * 4 / 6) \n            </samp>\n            ",
          image: "",
          answers: ["3.33", "2.33", "4", "NaN"],
          correctAnswer: 3
        }, {
          id: 3,
          question: "What is the final value of variable a?<br><br>\n            <samp>\n            &nbsp;&nbsp;let a = 3<br>\n            &nbsp;&nbsp;let b = 5<br>\n            &nbsp;&nbsp;a += b<br>\n            &nbsp;&nbsp;a *= 2 \n            </samp>\n            ",
          image: "",
          answers: ["10", "8", "64", "16"],
          correctAnswer: 4
        }, {
          id: 4,
          question: "What is the final value of variable a?<br><br>\n          <samp>\n          &nbsp;&nbsp;let a = +'2a'<br>\n          &nbsp;&nbsp;a += 1<br>           \n          </samp>\n          ",
          image: "",
          answers: ["NaN", "undefined", "2a1", "1a"],
          correctAnswer: 4
        }, {
          id: 5,
          question: "What are the values of a and x after the code below?<br><br>\n          <samp>\n          &nbsp;&nbsp;let a = 2;<br>\n          &nbsp;&nbsp;let x = 1 + (a *= 2)\n          </samp>\n          ",
          image: "",
          answers: ["a=4 and x=5", "a=2 and x=3", "a=2 and c=5", "error"],
          correctAnswer: 1
        }, {
          id: 6,
          question: "What are the final values of variables a, b, c and c after the code below?<br><br>\n          <samp>\n          &nbsp;&nbsp;let a = 1, b = 1;<br>\n          &nbsp;&nbsp;let c = ++a;<br>\n          &nbsp;&nbsp;let d = b++;            \n          </samp>\n          ",
          image: "",
          answers: ["a=1 and b=1 and c=2 and d=2", "a=1 and b=2 and c=2 and d=1", "a=2 and b=2 and c=2 and d=1", "a=2 and b=2 and c=1 and d=2"],
          correctAnswer: 3
        }, {
          id: 7,
          question: 'What is the output of this expression?<br><br>\n          <samp>\n          &nbsp;&nbsp;console.log("ESMAD" > "ESEIG") \n          </samp>\n          ',
          image: "",
          answers: ["false", "true", "1", "0"],
          correctAnswer: 1
        }, {
          id: 8,
          question: "What is the output of this expression?<br><br>\n          <samp>\n          &nbsp;&nbsp;console.log(null || 0) \n          </samp>\n          ",
          image: "",
          answers: ["null", "0", "true", "false"],
          correctAnswer: 2
        }, {
          id: 9,
          question: 'What is the output of this expression?<br><br>\n          <samp>\n          &nbsp;&nbsp;console.log("esmad" && "eseig") \n          </samp>\n          ',
          image: "",
          answers: ["esmad", "esmadeseig", "eseig", "true"],
          correctAnswer: 3
        }, {
          id: 10,
          question: 'What is the output of this expression?<br><br>\n          <samp>\n          &nbsp;&nbsp;console.log(!!"js") \n          </samp>\n          ',
          image: "",
          answers: ["false", "true", "!!js", "error"],
          correctAnswer: 2
        }]
      }, {
        id: 4,
        name: "Conditionals",
        description: "Quiz on Conditionals",
        questions: [{
          id: 1,
          question: "Will the log be shown in the console?<br><br>\n            <samp>\n            if (\"0\") {<br>\n            &nbsp;&nbsp;console.log('Hello');<br>\n            }             \n            </samp>  \n          ",
          image: "",
          answers: ["Yes", "No", "Error", "Sometimes"],
          correctAnswer: 1
        }, {
          id: 2,
          question: "What will be the value of x?<br><br>\n            <samp>\n            let x = null || 2 || undefined \n            </samp>\n            ",
          image: "",
          answers: ["null", "2", "undefined", "null2undefined"],
          correctAnswer: 2
        }, {
          id: 3,
          question: "What will be the value of y?<br><br>\n            <samp>\n            let y = undefined || null \n            </samp>\n            ",
          image: "",
          answers: ["undefined", "null", "undefinednull", "false"],
          correctAnswer: 2
        }, {
          id: 4,
          question: 'What will be the value of z?<br><br>\n          <samp>\n          let z = 33 && true && false && "ESMAD"           \n          </samp>\n          ',
          image: "",
          answers: ["33", "true", "false", "ESMAD"],
          correctAnswer: 3
        }, {
          id: 5,
          question: "The variable b will store what value?<br><br>\n          <samp>\n          let a = 2;<br>\n          let b = typeof(a) == 'number' ? a += 2: a-=2\n          </samp>\n          ",
          image: "",
          answers: ["-2", "0", "2", "4"],
          correctAnswer: 4
        }, {
          id: 6,
          question: "What will be the value of fullName?<br><br>\n          <samp>\n          let name = '';<br>\n          let fullName = name || 'John'          \n          </samp>\n          ",
          image: "",
          answers: ["nameJohn", "name", "John", "''"],
          correctAnswer: 3
        }, {
          id: 7,
          question: "For what value of <code>a</code> do you get the print in the console?<br><br>\n          <samp>\n          if(a < 10 && (a > 8 && a < 15)) {<br>\n          &nbsp;&nbsp;console.log('YES')<br>\n          } \n          </samp>\n          ",
          image: "",
          answers: ["11", "15", "7", "9"],
          correctAnswer: 4
        }, {
          id: 8,
          question: "If <code>b=9</code> do you get the print in the console?<br><br>\n          <samp>\n          if(b > 10 || (b > 8 && b < 10)) {<br>\n          &nbsp;&nbsp;console.log('YES')<br>\n          } \n          </samp>\n          ",
          image: "",
          answers: ["Yes", "No", "error", "warning"],
          correctAnswer: 1
        }, {
          id: 9,
          question: 'What is the output of this expression?<br><br>\n          <samp>\n          console.log("esmad" > "eseig") \n          </samp>\n          ',
          image: "",
          answers: ["error", "true", "false", "0"],
          correctAnswer: 2
        }, {
          id: 10,
          question: "What is the output of this expression?<br><br>\n          <samp>\n          console.log(undefined == null) \n          </samp>\n          ",
          image: "",
          answers: ["false", "true", "warning", "error"],
          correctAnswer: 2
        }]
      }, {
        id: 5,
        name: "Loops",
        description: "Quiz on Loops",
        questions: [{
          id: 1,
          question: "What are the logs of this code?<br><br>\n            <samp>\n            let i = 3;<br>\n            while (i) {<br>\n            &nbsp;&nbsp;console.log(i--);<br>\n            }            \n            </samp>  \n          ",
          image: "",
          answers: ["3 2 1", "2 1 0", "2 1", "Infinite Cycle"],
          correctAnswer: 1
        }, {
          id: 2,
          question: "What are the logs of this code?<br><br>\n            <samp>\n            let i = 0;<br>\n            while (++i < 5) console.log( i ); \n            </samp>\n            ",
          image: "",
          answers: ["0 1 2 3 4", "1 2 3 4 5", "0 1 2 3 4 5", "1 2 3 4"],
          correctAnswer: 4
        }, {
          id: 3,
          question: "What will be the log of this code?<br><br>\n            <samp>\n            for(i = 0; i < 1; i++) {<br>\n            &nbsp;&nbsp;console.log(i)<br>\n            } \n            </samp>\n            ",
          image: "",
          answers: ["0", "0 1", "1", "Error: i is not defined"],
          correctAnswer: 2
        }, {
          id: 4,
          question: "What will be the log of this code?<br><br>\n          <samp>\n          let i = j = 1;<br>\n          do {<br>\n          &nbsp;&nbsp;console.log(i*j)<br>\n          &nbsp;&nbsp;j++<br>\n          } while (i < 3)           \n          </samp>\n          ",
          image: "",
          answers: ["1 4 9", "1 4", "Infinite cycle", "1"],
          correctAnswer: 3
        }, {
          id: 5,
          question: "The variable sum will be logged with what value?<br><br>\n          <samp>\n          let sum = 0<br>\n          for(let i = 0; i < 5; i++) {<br>\n          &nbsp;&nbsp;sum = i<br>\n          }<br>\n          console.log(sum)\n          </samp>\n          ",
          image: "",
          answers: ["0", "4", "5", "Error: sum not declared"],
          correctAnswer: 2
        }, {
          id: 6,
          question: "The variable sum will be logged with what value?<br><br>\n          <samp>\n          let sum = ''<br>\n          for(let i = 'a'; i < 'z'; i++) {<br>\n          &nbsp;&nbsp;sum += i<br>\n          }<br>\n          console.log(sum)          \n          </samp>\n          ",
          image: "",
          answers: ["abc...z", "34", "a", "''"],
          correctAnswer: 3
        }, {
          id: 7,
          question: "What values will be printed in the console?<br><br>\n          <samp>\n          for (let i = 0; i < 10; i++) {<br>\n          &nbsp;&nbsp;if (i % 2 == 0) continue;<br>\n          &nbsp;&nbsp;console.log(i); <br>\n          }\n          </samp>\n          ",
          image: "",
          answers: ["1 3 5 7 9", "0 2 4 6 8", "0 1 2 3 4 5 6 7 8 9", "0"],
          correctAnswer: 1
        }, {
          id: 8,
          question: "What will be printed in the console?<br><br>\n          <samp>\n          while(!true) { console.log('ESMAD') }\n          </samp>\n          ",
          image: "",
          answers: ["Infinite Cycle", "ESMAD", "''", "Error"],
          correctAnswer: 1
        }, {
          id: 9,
          question: "What is the output of this code?<br><br>\n          <samp>\n          let j = 0<br>\n          do {<br>\n          &nbsp;&nbsp;j += 1;<br>\n          &nbsp;&nbsp;console.log(j);<br>\n          } while (j < 5); \n          </samp>\n          ",
          image: "",
          answers: ["0 1 2 3 4", "1 2 3 4", "1 2 3 4 5", "0 1 2 3 4 5"],
          correctAnswer: 3
        }, {
          id: 10,
          question: "What is the output of this code?<br><br>\n          <samp>\n          for(let i = 0; i < 3; i++) {<br>\n          &nbsp;&nbsp;for(let j = 0; j < 3; j++) {<br>\n          &nbsp;&nbsp;&nbsp;&nbsp;console.log (i * j)<br>\n          &nbsp;&nbsp;}<br>\n          } \n          </samp>\n          ",
          image: "",
          answers: ["1 2 3 4 5 6 7 8 9", "0 0 0 2 2 2 4 4 4", "0 0 0 1 1 1 2 2 2", "0 0 0 0 1 2 0 2 4"],
          correctAnswer: 4
        }]
      }];
    s["a"].use(a["a"]);
    var p = new a["a"].Store({
        state: {
          login: !1,
          resourceId: 0,
          course: Object(i["a"])(c),
          resources: Object(i["a"])(l),
          quizzes: Object(i["a"])(d),
          progress: localStorage.progress ? JSON.parse(localStorage.progress) : [],
          code: ""
        },
        getters: {
          isLogged: function (e) {
            return e.login
          },
          getCourse: function (e, t) {
            var n = [{
              id: 0,
              name: "POO course",
              file: "course",
              children: []
            }];
            return e.course.forEach((function (e) {
              var s = {
                id: e.id,
                name: e.name,
                children: []
              };
              null !== e && void 0 !== e && e.resources && (e.resources.forEach((function (e) {
                var n = t.getResourceById(e);
                s.children.push({
                  id: e,
                  name: n.name,
                  file: n.type
                })
              })), n[0].children.push(s))
            })), n
          },
          getModules: function (e) {
            return e.modules
          },
          getModuleByResourceId: function (e) {
            return function (t) {
              var n = e.course.find((function (e) {
                return e.resources.includes(t)
              }));
              if ("undefined" === typeof n) {
                var s = e.resources.find((function (e) {
                  if (e.exercises) return e.exercises.includes(t)
                }));
                n = e.course.find((function (e) {
                  return e.resources.includes(s.id)
                }))
              }
              return n
            }
          },
          getModuleNameByResourceId: function (e) {
            return function (t) {
              return e.course.find((function (e) {
                return e.resources.includes(t)
              })).name
            }
          },
          getSheets: function (e) {
            return e.resources.filter((function (e) {
              return "sheet" == e.type
            }))
          },
          getSheetByResourceId: function (e) {
            return function (t) {
              return e.resources.find((function (e) {
                if (e.exercises) return e.exercises.includes(t)
              }))
            }
          },
          getCompletationStatusBySheetId: function (e, t) {
            return function (n) {
              var s = 0,
                o = t.getResourceById(n).exercises;
              if (console.log(o), "undefined" !== typeof o) return o.forEach((function (t) {
                var n, o = null === (n = e.progress.find((function (e) {
                  return e.id == t
                }))) || void 0 === n ? void 0 : n.status;
                console.log("xxx" + o), "undefined" !== typeof o && (s += +o)
              })), console.log(s + "-" + o.length), isNaN(s) ? 0 : s / o.length
            }
          },
          getResourceId: function (e) {
            return e.resourceId
          },
          getResourcesByModuleId: function (e) {
            return function (t) {
              return e.resources.filter((function (e) {
                return e.moduleId == t
              }))
            }
          },
          getResourceById: function (e) {
            return function (t) {
              return e.resources.find((function (e) {
                return e.id == t
              }))
            }
          },
          getCode: function (e) {
            return e.code
          },
          getQuizByResourceId: function (e) {
            return function (t) {
              return e.quizzes.find((function (e) {
                return e.id == t
              }))
            }
          },
          getProgressFromResourceId: function (e) {
            return function (t) {
              return e.progress.find((function (e) {
                return e.id == t
              }))
            }
          }
        },
        mutations: {
          setResourceId: function (e, t) {
            e.resourceId = t
          },
          setCode: function (e, t) {
            e.code = t
          },
          setProgress: function (e, t) {
            e.progress.some((function (e) {
              return e.id == t.id
            })) ? e.progress.map((function (e) {
              e.id == t.id && (e.code = t.code || e.code, e.status = t.status || e.status)
            })) : e.progress.push({
              id: t.id,
              code: t.code,
              status: 0
            }), localStorage.progress = JSON.stringify(e.progress)
          },
          setLogin: function (e) {
            e.login = !0
          }
        },
        actions: {},
        modules: {}
      }),
      m = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s("v-app", [s("v-main", {
          staticClass: "parent"
        }, [s("v-container", {
          attrs: {
            fluid: ""
          }
        }, [s("v-img", {
          attrs: {
            src: n("08d9")
          }
        }), s("v-btn", {
          staticClass: "ma-2",
          attrs: {
            outlined: "",
            color: "black"
          },
          on: {
            click: e.login
          }
        }, [e._v(" LOGIN "), s("v-icon", {
          attrs: {
            dark: "",
            right: ""
          }
        }, [e._v(" mdi-login-variant ")])], 1), s("v-btn", {
          staticClass: "ma-2",
          attrs: {
            outlined: "",
            color: "black"
          },
          on: {
            click: e.go
          }
        }, [e._v(" GITHUB "), s("v-icon", {
          attrs: {
            dark: "",
            right: ""
          }
        }, [e._v(" mdi-github ")])], 1)], 1)], 1)], 1)
      },
      b = [],
      h = {
        name: "App",
        methods: {
          login: function () {
            this.$router.push({
              name: "Login"
            })
          },
          go: function () {
            location.href = "https://github.com/rqueiros/learnjs"
          }
        }
      },
      _ = h,
      f = (n("1bf9"), n("2877")),
      y = n("6544"),
      g = n.n(y),
      x = n("7496"),
      v = n("8336"),
      w = n("a523"),
      k = n("132d"),
      E = n("adda"),
      C = n("f6c4"),
      O = Object(f["a"])(_, m, b, !1, null, "56e594c4", null),
      A = O.exports;
    g()(O, {
      VApp: x["a"],
      VBtn: v["a"],
      VContainer: w["a"],
      VIcon: k["a"],
      VImg: E["a"],
      VMain: C["a"]
    });
    var I = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", {
          attrs: {
            id: "app"
          }
        }, [n("v-app", [n("v-dialog", {
          attrs: {
            persistent: "",
            "max-width": "600px",
            "min-width": "360px"
          },
          model: {
            value: e.dialog,
            callback: function (t) {
              e.dialog = t
            },
            expression: "dialog"
          }
        }, [n("div", [n("v-tabs", {
          attrs: {
            "show-arrows": "",
            "background-color": "pink accent-4",
            "icons-and-text": "",
            dark: "",
            grow: ""
          },
          model: {
            value: e.tab,
            callback: function (t) {
              e.tab = t
            },
            expression: "tab"
          }
        }, [n("v-tabs-slider", {
          attrs: {
            color: "purple darken-4"
          }
        }), e._l(e.tabs, (function (t) {
          return n("v-tab", {
            key: t
          }, [n("v-icon", {
            attrs: {
              large: ""
            }
          }, [e._v(e._s(t.icon))]), n("div", {
            staticClass: "caption py-1"
          }, [e._v(e._s(t.name))])], 1)
        })), n("v-tab-item", [n("v-card", {
          staticClass: "px-4"
        }, [n("v-card-text", [n("v-form", {
          ref: "loginForm",
          attrs: {
            "lazy-validation": ""
          },
          model: {
            value: e.valid,
            callback: function (t) {
              e.valid = t
            },
            expression: "valid"
          }
        }, [n("v-row", [n("v-col", {
          attrs: {
            cols: "12"
          }
        }, [n("v-text-field", {
          attrs: {
            disabled: "",
            rules: e.loginEmailRules,
            label: "E-mail",
            required: ""
          },
          model: {
            value: e.loginEmail,
            callback: function (t) {
              e.loginEmail = t
            },
            expression: "loginEmail"
          }
        })], 1), n("v-col", {
          attrs: {
            cols: "12"
          }
        }, [n("v-text-field", {
          attrs: {
            disabled: "",
            "append-icon": e.show1 ? "eye" : "eye-off",
            rules: [e.rules.required, e.rules.min],
            type: e.show1 ? "text" : "password",
            name: "input-10-1",
            label: "Password",
            hint: "At least 8 characters",
            counter: ""
          },
          on: {
            "click:append": function (t) {
              e.show1 = !e.show1
            }
          },
          model: {
            value: e.loginPassword,
            callback: function (t) {
              e.loginPassword = t
            },
            expression: "loginPassword"
          }
        })], 1), n("v-col", {
          staticClass: "d-flex",
          attrs: {
            cols: "12",
            sm: "6",
            xsm: "12"
          }
        }), n("v-spacer"), n("v-col", {
          staticClass: "d-flex",
          attrs: {
            cols: "12",
            sm: "3",
            xsm: "12",
            "align-end": ""
          }
        }, [n("v-btn", {
          staticClass: "ma-2",
          attrs: {
            outlined: "",
            color: "black",
            disabled: !e.valid
          },
          on: {
            click: e.validate
          }
        }, [e._v(" LOGIN "), n("v-icon", {
          attrs: {
            dark: "",
            right: ""
          }
        }, [e._v(" mdi-login-variant ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1), n("v-tab-item", [n("v-card", {
          staticClass: "px-4"
        }, [n("v-card-text", [n("v-form", {
          ref: "registerForm",
          attrs: {
            "lazy-validation": ""
          },
          model: {
            value: e.valid,
            callback: function (t) {
              e.valid = t
            },
            expression: "valid"
          }
        }, [n("v-row", [n("v-col", {
          attrs: {
            cols: "12",
            sm: "6",
            md: "6"
          }
        }, [n("v-text-field", {
          attrs: {
            rules: [e.rules.required],
            label: "First Name",
            maxlength: "20",
            required: ""
          },
          model: {
            value: e.firstName,
            callback: function (t) {
              e.firstName = t
            },
            expression: "firstName"
          }
        })], 1), n("v-col", {
          attrs: {
            cols: "12",
            sm: "6",
            md: "6"
          }
        }, [n("v-text-field", {
          attrs: {
            rules: [e.rules.required],
            label: "Last Name",
            maxlength: "20",
            required: ""
          },
          model: {
            value: e.lastName,
            callback: function (t) {
              e.lastName = t
            },
            expression: "lastName"
          }
        })], 1), n("v-col", {
          attrs: {
            cols: "12"
          }
        }, [n("v-text-field", {
          attrs: {
            rules: e.emailRules,
            label: "E-mail",
            required: ""
          },
          model: {
            value: e.email,
            callback: function (t) {
              e.email = t
            },
            expression: "email"
          }
        })], 1), n("v-col", {
          attrs: {
            cols: "12"
          }
        }, [n("v-text-field", {
          attrs: {
            "append-icon": e.show1 ? "mdi-eye" : "mdi-eye-off",
            rules: [e.rules.required, e.rules.min],
            type: e.show1 ? "text" : "password",
            name: "input-10-1",
            label: "Password",
            hint: "At least 8 characters",
            counter: ""
          },
          on: {
            "click:append": function (t) {
              e.show1 = !e.show1
            }
          },
          model: {
            value: e.password,
            callback: function (t) {
              e.password = t
            },
            expression: "password"
          }
        })], 1), n("v-col", {
          attrs: {
            cols: "12"
          }
        }, [n("v-text-field", {
          attrs: {
            block: "",
            "append-icon": e.show1 ? "mdi-eye" : "mdi-eye-off",
            rules: [e.rules.required, e.passwordMatch],
            type: e.show1 ? "text" : "password",
            name: "input-10-1",
            label: "Confirm Password",
            counter: ""
          },
          on: {
            "click:append": function (t) {
              e.show1 = !e.show1
            }
          },
          model: {
            value: e.verify,
            callback: function (t) {
              e.verify = t
            },
            expression: "verify"
          }
        })], 1), n("v-spacer"), n("v-col", {
          staticClass: "d-flex ml-auto",
          attrs: {
            cols: "12",
            sm: "3",
            xsm: "12"
          }
        }, [n("v-btn", {
          attrs: {
            outlined: "",
            color: "black",
            disabled: ""
          },
          on: {
            click: e.validate
          }
        }, [e._v(" REGISTER "), n("v-icon", {
          attrs: {
            dark: "",
            right: ""
          }
        }, [e._v(" mdi-login-variant ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 2)], 1)])], 1)], 1)
      },
      P = [],
      S = {
        computed: {
          passwordMatch: function () {
            var e = this;
            return function () {
              return e.password === e.verify || "Password must match"
            }
          }
        },
        methods: {
          validate: function () {
            this.$refs.loginForm.validate() && (this.$store.commit("setLogin"), this.$router.push({
              name: "Home"
            }))
          },
          reset: function () {
            this.$refs.form.reset()
          },
          resetValidation: function () {
            this.$refs.form.resetValidation()
          }
        },
        data: function () {
          return {
            dialog: !0,
            tab: 0,
            tabs: [{
              name: "Login",
              icon: "mdi-account"
            }, {
              name: "Register",
              icon: "mdi-account-outline"
            }],
            valid: !0,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            verify: "",
            loginPassword: "12345678",
            loginEmail: "guest@esmad.ipp.pt",
            loginEmailRules: [function (e) {
              return !!e || "Required"
            }, function (e) {
              return /.+@.+\..+/.test(e) || "E-mail must be valid"
            }],
            emailRules: [function (e) {
              return !!e || "Required"
            }, function (e) {
              return /.+@.+\..+/.test(e) || "E-mail must be valid"
            }],
            show1: !1,
            rules: {
              required: function (e) {
                return !!e || "Required."
              },
              min: function (e) {
                return e && e.length >= 8 || "Min 8 characters"
              }
            }
          }
        }
      },
      D = S,
      M = n("b0af"),
      q = n("99d9"),
      j = n("62ad"),
      T = n("169a"),
      R = n("4bd4"),
      W = n("0fd9"),
      L = n("2fa4"),
      N = n("71a3"),
      V = n("c671"),
      B = n("fe57"),
      F = n("9a96"),
      U = n("8654"),
      z = Object(f["a"])(D, I, P, !1, null, null, null),
      K = z.exports;
    g()(z, {
      VApp: x["a"],
      VBtn: v["a"],
      VCard: M["a"],
      VCardText: q["b"],
      VCol: j["a"],
      VDialog: T["a"],
      VForm: R["a"],
      VIcon: k["a"],
      VRow: W["a"],
      VSpacer: L["a"],
      VTab: N["a"],
      VTabItem: V["a"],
      VTabs: B["a"],
      VTabsSlider: F["a"],
      VTextField: U["a"]
    });
    var H = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("v-app", {
          attrs: {
            id: "inspire"
          }
        }, [n("v-system-bar", {
          attrs: {
            app: ""
          }
        }, [n("v-spacer"), n("div", {
          staticClass: "mr-2"
        }, [n("v-icon", [e._v("mdi-school")]), e._v("learnJS v0.7.7")], 1)], 1), n("v-main", [n("Menu", {
          on: {
            onResourceClicked: e.setResource
          }
        }), e.resource ? n("Resource", {
          attrs: {
            resource: e.resource
          }
        }) : n("div", [0 != e.isResource ? n("Profile") : e._e()], 1)], 1)], 1)
      },
      G = [],
      $ = n("5530"),
      J = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("v-navigation-drawer", {
          attrs: {
            app: "",
            width: "360"
          }
        }, [n("v-sheet", {
          staticClass: "pa-4",
          attrs: {
            color: "grey lighten-4"
          }
        }, [n("v-avatar", {
          staticClass: "profile",
          attrs: {
            color: "red"
          },
          on: {
            click: function (t) {
              return e.selectResource(-1)
            }
          }
        }, [n("v-icon", {
          attrs: {
            dark: ""
          }
        }, [e._v(" mdi-card-account-details ")])], 1), n("div", [e._v("guest@esmad.ipp.pt")])], 1), n("v-divider"), n("v-treeview", {
          attrs: {
            "return-object": "",
            items: e.items,
            "item-key": e.id,
            hoverable: "",
            activatable: "",
            "selected-color": "primary",
            color: "error",
            "open-on-click": ""
          },
          on: {
            "update:active": e.selectResource,
            "update:open": e.selectResource
          },
          scopedSlots: e._u([{
            key: "prepend",
            fn: function (t) {
              var s = t.item,
                o = t.open;
              return ["course" == s.file ? n("v-icon", {
                attrs: {
                  color: "black"
                }
              }, [e._v(" " + e._s("mdi-cloud-braces") + " ")]) : s.file ? n("v-icon", {
                attrs: {
                  color: "gray"
                }
              }, [e._v(" " + e._s(e.files[s.file]) + " ")]) : n("v-icon", {
                attrs: {
                  color: "red"
                }
              }, [e._v(" " + e._s(o ? "mdi-folder-open" : "mdi-folder") + " ")]), e._v(" " + e._s(s.file ? "" : "M" + s.id + ". ") + " ")]
            }
          }, {
            key: "append",
            fn: function (t) {
              var s = t.item;
              return [n("v-icon", {
                attrs: {
                  color: "green"
                }
              }, [e._v(" " + e._s(e.getCompletationStatus(s)) + " ")])]
            }
          }])
        })], 1)
      },
      Y = [],
      Q = {
        name: "Menu",
        data: function () {
          return {
            files: {
              video: "mdi-video",
              code: "mdi-nodejs",
              quiz: "mdi-head-question-outline",
              course: "mdi-cloud-braces",
              pdf: "mdi-file-pdf",
              sheet: "mdi-file-document-outline"
            },
            items: []
          }
        },
        created: function () {
          this.items = this.getCourse
        },
        methods: {
          getCompletationStatus: function (e) {
            if ("sheet" == e.file) return console.log(e.id), 100 == this.getCompletationStatusBySheetId(e.id) ? "mdi-book-check" : ""
          },
          selectResource: function (e) {
            var t;
            t = -1 == e ? e : e.length > 0 ? e[0].id : 0, this.$emit("onResourceClicked", t)
          }
        },
        computed: Object($["a"])({}, Object(a["b"])(["getCourse", "getCompletationStatusBySheetId"]))
      },
      X = Q,
      Z = (n("860c"), n("8212")),
      ee = n("ce7e"),
      te = n("f774"),
      ne = n("8dd9"),
      se = n("eb2a"),
      oe = Object(f["a"])(X, J, Y, !1, null, "408653ee", null),
      re = oe.exports;
    g()(oe, {
      VAvatar: Z["a"],
      VDivider: ee["a"],
      VIcon: k["a"],
      VNavigationDrawer: te["a"],
      VSheet: ne["a"],
      VTreeview: se["a"]
    });
    var ie = n("2a71"),
      ae = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", {
          attrs: {
            id: "profile"
          }
        }, [n("v-container", {
          attrs: {
            fluid: ""
          }
        }, [n("v-row", [n("v-col", {
          attrs: {
            cols: "7"
          }
        }, [n("v-card", {
          staticClass: "mx-auto mb-2",
          attrs: {
            "max-width": "100%",
            outlined: ""
          }
        }, [n("div", {
          attrs: {
            id: "header"
          }
        }, [n("v-list-item", [n("v-list-item-content", [n("v-list-item-title", {
          staticClass: "display-1"
        }, [e._v(" GUEST ")]), n("v-list-item-subtitle", {
          staticClass: "title"
        }, [e._v("guest@esmad.ipp.pt")])], 1), n("v-list-item-avatar", {
          attrs: {
            tile: "",
            size: "80",
            color: "red"
          }
        }, [n("v-icon", {
          attrs: {
            large: "",
            color: "white"
          }
        }, [e._v(" mdi-card-account-details ")])], 1)], 1), n("v-card-text", [n("code", [e._v("User data will appear here in future versions")])])], 1)]), n("v-card", {
          staticClass: "mx-auto",
          attrs: {
            "max-width": "100%",
            outlined: ""
          }
        }, [n("div", {
          attrs: {
            id: "header"
          }
        }, [n("v-list-item", [n("v-list-item-content", [n("v-list-item-title", {
          staticClass: "display-1"
        }, [e._v(" COURSE PROGRESSION ")]), n("v-list-item-subtitle", [e._v("Status on the course exercises sheets")])], 1), n("v-list-item-avatar", {
          attrs: {
            tile: "",
            size: "80",
            color: "blue"
          }
        }, [n("v-icon", {
          attrs: {
            large: "",
            color: "white"
          }
        }, [e._v(" mdi-rocket-launch ")])], 1)], 1)], 1), n("div", {
          attrs: {
            id: "exercises"
          }
        }, [n("v-data-table", {
          staticClass: "elevation-1 exercise",
          attrs: {
            headers: e.headers,
            items: e.sheets
          },
          on: {
            "click:row": e.play2
          },
          scopedSlots: e._u([{
            key: "item.name",
            fn: function (t) {
              var n = t.item;
              return [e._v(" " + e._s(n.name) + " ")]
            }
          }, {
            key: "item.type",
            fn: function (t) {
              var s = t.item;
              return [n("v-icon", [e._v(" " + e._s(e.getIcon(s.type)) + " ")])]
            }
          }, {
            key: "item.status",
            fn: function (t) {
              var s = t.item;
              return [n("v-chip", {
                attrs: {
                  color: e.getColor(s.status),
                  dark: ""
                }
              }, [e._v(" " + e._s(s.status) + "% ")])]
            }
          }, {
            key: "item.action",
            fn: function (t) {
              var s = t.item;
              return [n("v-btn", {
                attrs: {
                  icon: ""
                },
                on: {
                  click: function (t) {
                    return e.play(s.rid)
                  }
                }
              }, [n("v-icon", [e._v("mdi-clipboard-play")])], 1)]
            }
          }])
        })], 1)])], 1), n("v-col", {
          attrs: {
            cols: "5"
          }
        }, [n("Gamification")], 1)], 1)], 1)], 1)
      },
      ce = [],
      ue = (n("c975"), n("b680"), function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("v-card", {
          staticClass: "mx-auto",
          attrs: {
            outlined: ""
          }
        }, [n("v-list-item", [n("v-list-item-content", [n("v-list-item-title", {
          staticClass: "display-1"
        }, [e._v(" GAMIFICATION ")]), n("v-list-item-subtitle", [e._v("Leaderboards, badges and much more!")])], 1), n("v-list-item-avatar", {
          attrs: {
            tile: "",
            size: "80",
            color: "green"
          }
        }, [n("v-icon", {
          attrs: {
            large: "",
            color: "white"
          }
        }, [e._v(" mdi-gamepad-variant ")])], 1)], 1), n("v-card-text", [n("code", [e._v("Gamification data will appear here in future versions")])])], 1)
      }),
      le = [],
      de = n("2905"),
      pe = de["a"],
      me = n("da13"),
      be = n("8270"),
      he = n("5d23"),
      _e = Object(f["a"])(pe, ue, le, !1, null, null, null),
      fe = _e.exports;
    g()(_e, {
      VCard: M["a"],
      VCardText: q["b"],
      VIcon: k["a"],
      VListItem: me["a"],
      VListItemAvatar: be["a"],
      VListItemContent: he["a"],
      VListItemSubtitle: he["b"],
      VListItemTitle: he["c"]
    });
    var ye = {
        name: "Profile",
        components: {
          Gamification: fe
        },
        created: function () {
          var e = this;
          this.getSheets.forEach((function (t) {
            var n = t.name.substr(0, t.name.indexOf(".")),
              s = t.id,
              o = t.name.substr(t.name.indexOf(".") + 1),
              r = e.getCompletationStatusBySheetId(t.id).toFixed(0);
            e.sheets.push({
              id: n,
              rid: s,
              name: o,
              status: r
            })
          }))
        },
        data: function () {
          return {
            headers: [{
              text: "#",
              align: "start",
              sortable: !0,
              value: "id"
            }, {
              text: "Name",
              value: "name"
            }, {
              text: "Solving status (%)",
              value: "status"
            }, {
              text: "Actions",
              value: "action"
            }],
            sheets: []
          }
        },
        methods: {
          getColor: function (e) {
            return e = +e, 0 == e ? "red" : e < 100 ? "orange" : "green"
          },
          play: function (e) {
            Te.$emit("changeIt", e)
          },
          play2: function (e) {
            Te.$emit("changeIt", e.rid)
          }
        },
        computed: Object($["a"])({}, Object(a["b"])(["getSheets", "getCompletationStatusBySheetId"]))
      },
      ge = ye,
      xe = n("cc20"),
      ve = n("8fea"),
      we = Object(f["a"])(ge, ae, ce, !1, null, null, null),
      ke = we.exports;
    g()(we, {
      VBtn: v["a"],
      VCard: M["a"],
      VCardText: q["b"],
      VChip: xe["a"],
      VCol: j["a"],
      VContainer: w["a"],
      VDataTable: ve["a"],
      VIcon: k["a"],
      VListItem: me["a"],
      VListItemAvatar: be["a"],
      VListItemContent: he["a"],
      VListItemSubtitle: he["b"],
      VListItemTitle: he["c"],
      VRow: W["a"]
    });
    var Ee = {
        components: {
          Menu: re,
          Resource: ie["default"],
          Profile: ke
        },
        data: function () {
          return {
            resource: null,
            isResource: 0
          }
        },
        methods: {
          setResource: function (e) {
            this.resource = null, this.isResource = e, e > 0 && (this.resource = this.getResourceById(e))
          }
        },
        created: function () {
          var e = this;
          Te.$on("changeIt", (function (t) {
            e.setResource(t)
          }))
        },
        computed: Object($["a"])({}, Object(a["b"])(["getResourceById"]))
      },
      Ce = Ee,
      Oe = n("afd9"),
      Ae = Object(f["a"])(Ce, H, G, !1, null, null, null),
      Ie = Ae.exports;
    g()(Ae, {
      VApp: x["a"],
      VIcon: k["a"],
      VMain: C["a"],
      VSpacer: L["a"],
      VSystemBar: Oe["a"]
    }), s["a"].use(r["a"]);
    var Pe = [{
        path: "/",
        name: "Index",
        component: A
      }, {
        path: "/login",
        name: "Login",
        component: K
      }, {
        path: "/home",
        name: "Home",
        component: Ie,
        meta: {
          requiresAuth: !0
        }
      }],
      Se = new r["a"]({
        mode: "history",
        base: "/learnjs/",
        routes: Pe
      });
    Se.beforeEach((function (e, t, n) {
      e.meta.requiresAuth && !p.getters.isLogged ? n({
        name: "Login"
      }) : n()
    }));
    var De = Se,
      Me = n("f309");
    s["a"].use(Me["a"]);
    var qe = new Me["a"]({}),
      je = n("709e");
    s["a"].use(je["a"], {
      width: "100%",
      height: "400px",
      loadComponent: !0
    }), s["a"].config.productionTip = !1;
    var Te = new s["a"];
    new s["a"]({
      router: De,
      store: p,
      vuetify: qe,
      render: function (e) {
        return e(o["default"])
      }
    }).$mount("#app")
  },
  "80c9": function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
      return s
    })), n.d(t, "b", (function () {
      return o
    }));
    var s = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("router-view")
      },
      o = []
  },
  "860c": function (e, t, n) {
    "use strict";
    n("f248")
  },
  b273: function (e, t, n) {},
  e0b0: function (e, t, n) {
    var s = {
      "./Header": ["7797", "chunk-62e88db2"],
      "./Header.vue": ["7797", "chunk-62e88db2"],
      "./Resource": ["2a71"],
      "./Resource.vue": ["2a71"],
      "./Timeline": ["273a", "chunk-0fc38cb1"],
      "./Timeline.vue": ["273a", "chunk-0fc38cb1"],
      "./code/Code": ["650c", "chunk-e851e89e", "chunk-61b82165", "chunk-419789de", "chunk-8f9c2c82"],
      "./code/Code.vue": ["650c", "chunk-e851e89e", "chunk-61b82165", "chunk-419789de", "chunk-8f9c2c82"],
      "./code/Editor": ["4693", "chunk-e851e89e", "chunk-419789de"],
      "./code/Editor.vue": ["4693", "chunk-e851e89e", "chunk-419789de"],
      "./code/Tests": ["c3ed", "chunk-e851e89e", "chunk-169fd126"],
      "./code/Tests.vue": ["c3ed", "chunk-e851e89e", "chunk-169fd126"],
      "./pdf/Pdf": ["aaf5", "chunk-e851e89e", "chunk-61b82165", "chunk-14850ca4", "chunk-e429b4ea"],
      "./pdf/Pdf.vue": ["aaf5", "chunk-e851e89e", "chunk-61b82165", "chunk-14850ca4", "chunk-e429b4ea"],
      "./pdf/Player": ["cd29", "chunk-e851e89e", "chunk-14850ca4", "chunk-c01d9b5e"],
      "./pdf/Player.vue": ["cd29", "chunk-e851e89e", "chunk-14850ca4", "chunk-c01d9b5e"],
      "./quiz/Quiz": ["2301", "chunk-e851e89e", "chunk-61b82165", "chunk-3561117c", "chunk-2d0b20f8"],
      "./quiz/Quiz.vue": ["2301", "chunk-e851e89e", "chunk-61b82165", "chunk-3561117c", "chunk-2d0b20f8"],
      "./quiz/Quizzer": ["8ebc", "chunk-e851e89e", "chunk-3561117c", "chunk-2d0c7e34"],
      "./quiz/Quizzer.vue": ["8ebc", "chunk-e851e89e", "chunk-3561117c", "chunk-2d0c7e34"],
      "./sheet/Exercises": ["4d85", "chunk-7a488d70"],
      "./sheet/Exercises.vue": ["4d85", "chunk-7a488d70"],
      "./sheet/Sheet": ["d4fb", "chunk-61b82165", "chunk-62c736ae"],
      "./sheet/Sheet.vue": ["d4fb", "chunk-61b82165", "chunk-62c736ae"],
      "./video/Player": ["f40a", "chunk-2d22c835"],
      "./video/Player.vue": ["f40a", "chunk-2d22c835"],
      "./video/Video": ["b761", "chunk-61b82165", "chunk-7725ab50"],
      "./video/Video.vue": ["b761", "chunk-61b82165", "chunk-7725ab50"]
    };

    function o(e) {
      if (!n.o(s, e)) return Promise.resolve().then((function () {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t
      }));
      var t = s[e],
        o = t[0];
      return Promise.all(t.slice(1).map(n.e)).then((function () {
        return n(o)
      }))
    }
    o.keys = function () {
      return Object.keys(s)
    }, o.id = "e0b0", e.exports = o
  },
  f248: function (e, t, n) {}
});
//# sourceMappingURL=app.cd1ddb0f.js.map
