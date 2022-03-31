var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var node_vibrant_1 = __importDefault(require("node-vibrant"));
var cache = {};
function useVibrant(url) {
  var _a = react_1.default.useState({}),
    colors = _a[0],
    setColors = _a[1];
  var _b = react_1.default.useState(false),
    done = _b[0],
    setDone = _b[1];
  react_1.default.useEffect(
    function () {
      if (!url) {
        return;
      }
      var urlString = url.toString();
      if (cache[urlString]) {
        setColors(cache[urlString]);
        setDone(true);
        return;
      }
      node_vibrant_1.default
        .from(url)
        .getPalette()
        .then(function (palette) {
          setColors(palette);
          setDone(true);
          cache[urlString] = palette;
        });
    },
    [url]
  );
  return { colors: colors, done: done };
}
exports.default = useVibrant;
