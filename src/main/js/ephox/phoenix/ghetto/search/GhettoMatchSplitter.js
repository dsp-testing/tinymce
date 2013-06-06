define(
  'ephox.phoenix.ghetto.search.GhettoMatchSplitter',

  [
    'ephox.compass.Arr',
    'ephox.peanut.Fun',
    'ephox.phoenix.ghetto.search.GhettoListSplitter',
    'ephox.phoenix.ghetto.search.GhettoSplitter',
    'ephox.phoenix.util.arr.PositionArray'
  ],

  function (Arr, Fun, GhettoListSplitter, GhettoSplitter, PositionArray) {
    var separate = function (universe, list, matches) {
      var splitter = function (offset, item) {
        return GhettoSplitter.split(universe, offset, item);
      };

      var allPositions = Arr.bind(matches, function (match) {
        return [ match.start(), match.finish() ];
      });


      var logList = function (label, plist) {
        console.log(label, Arr.map(plist, function (unit) {
          return unit.start() + '->' + unit.finish();
        }).join(', '));
      };

      var structure = GhettoListSplitter.yipes(universe, list, allPositions);
      // logList('Yipes: ', structure);

      // var structure = list;
      return Arr.map(matches, function (y) {
        // structure = PositionArray.splitAt(structure, y.start(), y.finish(), splitter, splitter);
        var sub = PositionArray.sub(structure, y.start(), y.finish());
        var elements = Arr.map(sub, function (s) {
          return s.element();
        });

        var exact = Arr.map(elements, universe.property().getText).join('');
        return {
          elements: Fun.constant(elements),
          word: y.word,
          exact: Fun.constant(exact)
        };
      });
    };

    return {
      separate: separate
    };

  }
);
