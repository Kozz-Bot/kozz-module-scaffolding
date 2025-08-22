"use strict";

var _kozzModuleMaker = require("kozz-module-maker");
var _jsxRuntime = require("kozz-module-maker/dist/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const defaultGatewayUrl = "ws://127.0.0.1:4521";
const products = [{
  id: "1",
  name: "Product 1",
  price: 19.99,
  description: "This is the first sample product"
}, {
  id: "2",
  name: "Product 2",
  price: 29.99,
  description: "This is the second sample product"
}, {
  id: "3",
  name: "Product 3",
  price: 39.99,
  description: "This is the third sample product"
}];
const ProductView = ({
  product
}) => {
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsxs)(_kozzModuleMaker.Line, {
      children: [(0, _jsxRuntime.jsx)(_kozzModuleMaker.Bold, {
        children: product.name
      }), " - R$", product.price.toLocaleString("pt-BR")]
    }), (0, _jsxRuntime.jsx)(_kozzModuleMaker.Line, {
      children: (0, _jsxRuntime.jsx)(_kozzModuleMaker.Italic, {
        children: product.description
      })
    })]
  });
};
const TestMessage = ({
  name
}) => (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
  children: [(0, _jsxRuntime.jsx)(_kozzModuleMaker.Line, {
    children: "Test"
  }), (0, _jsxRuntime.jsxs)(_kozzModuleMaker.Line, {
    children: [(0, _jsxRuntime.jsx)(_kozzModuleMaker.Bold, {
      children: name
    }), " is a great guy!"]
  }), (0, _jsxRuntime.jsx)(_kozzModuleMaker.ForEach, {
    data: products,
    render: product => (0, _jsxRuntime.jsx)(_kozzModuleMaker.List, {
      items: (0, _jsxRuntime.jsx)(ProductView, {
        product: product
      })
    })
  })]
});
(0, _kozzModuleMaker.createModule)({
  name: "test",
  address: defaultGatewayUrl,
  commands: {
    boundariesToHandle: ["*"],
    methods: _objectSpread({}, (0, _kozzModuleMaker.createMethod)("default", requester => {
      requester.reply((0, _jsxRuntime.jsx)(TestMessage, {
        name: "Tramonta"
      }));
    }))
  }
});