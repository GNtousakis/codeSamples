const _ = require('underscore');
_.each([1, 2, 3], (a) => console.log(a));
_.map([1, 2, 3], function(num){ return num * 3; });
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
var list = [[0, 1], [2, 3], [4, 5]];
var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
_.findWhere({newsroom: "The New York Times"}, {newsroom: "The New York Times"});
_.where({author: "Shakespeare", year: 1611}, {author: "Shakespeare", year: 1611});
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
_.every([2, 4, 5], function(num) { return num % 2 == 0; });
_.some([null, 0, 'yes', false]);
_.contains([1, 2, 3], 3);
_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.pluck(stooges, 'name');
_.max(stooges, function(stooge){ return stooge.age; });
var numbers = [10, 5, 100, 2, 1000];
_.min(numbers);
_.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
_.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.indexBy(stooges, 'age');
_.countBy([1, 2, 3, 4, 5], function(num) {
      return num % 2 == 0 ? 'even': 'odd';
});
_.shuffle([1, 2, 3, 4, 5, 6]);
_.sample([1, 2, 3, 4, 5, 6]);
(function(){ return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
_.size([1, 2, 3, 4, 5]);
_.partition([0, 1, 2, 3, 4, 5], (a) => a%2);
_.compact([0, 1, false, 2, '', 3]);
_.first([5, 4, 3, 2, 1]);
_.initial([5, 4, 3, 2, 1]);
_.last([5, 4, 3, 2, 1]);
_.rest([5, 4, 3, 2, 1]);
_.flatten([1, [2], [3, [[4]]]]);
_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
_.uniq([1, 2, 1, 4, 1, 3]);
_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
_.unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]);
_.object(['moe', 'larry', 'curly'], [30, 40, 50]);
var partners = _.chunk(_.shuffle([1, 2, 3, 4, 5, 6]), 2);
_.indexOf([1, 2, 3], 2);
_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
_.sortedIndex([10, 20, 30, 40, 50], 35);
_.findIndex([4, 6, 8, 12], a => a%2);
var users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
      {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Frank', 'last': 'James'},
             {'id': 4, 'name': 'Ted', 'last': 'Jones'}];
_.findLastIndex(users, {
  name: 'Ted'
});
_.range(10);
var func = function(greeting){ return greeting + ': ' + this.name };
func = _.bind(func, {name: 'moe'}, 'hi');
func();

var subtract = function(a, b) { return b - a; };
sub5 = _.partial(subtract, 5);
sub5(20);

var fibonacci = _.memoize(function(n) {
      return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
});
var log = _.bind(console.log, console);
_.delay(log, 1000, 'logged later');
var throttled = _.throttle(() => console.log('a'), 100);
var lazyLayout = _.debounce(() => console.log('a'), 300);
var initialize = _.once(() => console.log('a'));
initialize();
initialize();

var monthlyMeeting = _.before(3, console.log('a'));

var hello = function(name) { return "hello: " + name; };
hello = _.wrap(hello, function(func) {
      return "before, " + func("moe") + ", after";
    });
    hello();

var isFalsy = _.negate(Boolean);
_.find([-2, -1, 0, 1, 2], isFalsy);

var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
var welcome = _.compose(greet, exclaim);
welcome('moe');

var raceResults = _.restArguments(function(gold, silver, bronze, everyoneElse) {
      _.each(everyoneElse, sendConsolations);
});

_.keys({one: 1, two: 2, three: 3});
function Stooge(name) {
      this.name = name;
}
Stooge.prototype.silly = true;
_.allKeys(new Stooge("Moe"));

_.values({one: 1, two: 2, three: 3});

_.mapObject({start: 5, end: 12}, function(val, key) {
      return val + 5;
});

_.pairs({one: 1, two: 2, three: 3});

_.invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});

var moe = _.create(Stooge.prototype, {name: "Moe"});

_.functions(_);

_.extend({name: 'moe'}, {age: 50});

_.pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age');

_.omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid');

var iceCream = {flavor: "chocolate"};
_.defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});

_.clone({name: 'moe'});
_.chain([1,2,3,200])
.filter(function(num) { return num % 2 == 0; })
.map(function(num) { return num * num })
.value();

_.has({a: 1, b: 2, c: 3}, "b");
var stooge = {name: 'moe'};
'moe' === _.property('name')(stooge);

var stooge = {name: 'moe'};
_.propertyOf(stooge)('name');

var ready = _.matcher({selected: true, visible: true});
var readyToGoList = _.filter(list, ready);

var stooge = {name: 'moe', luckyNumbers: [13, 27, 34]};
_.isMatch(stooge, {age: 32});

var clone  = {name: 'moe', luckyNumbers: [13, 27, 34]};
stooge == clone;

var stooge = {name: 'moe', age: 32};
_.isEmpty([1, 2, 3]);
(function(){ return _.isArray(arguments); })();
_.isObject({});
(function(){ return _.isArguments(arguments); })(1, 2, 3);
_.isFunction(console.log);
_.isString("moe");
_.isNumber(8.4 * 5);
_.isFinite(-101);
_.isBoolean(null);
_.isDate(new Date());
_.isRegExp(/moe/);
try {
      throw new TypeError("Example");
    } catch (o_O) {
      _.isError(o_O);
}_.isSymbol(Symbol());

_.isMap(new Map());
_.isWeakMap(new WeakMap());
_.isSet(new Set());
_.isWeakSet( new WeakSet());
_.isNaN(NaN);
_.isNull(null);
var stooge = {name: 'moe'};

stooge === _.identity(stooge);

var stooge = {name: 'moe'};
stooge === _.constant(stooge)();

_.random(0, 100);

_.mixin({
      capitalize: function(string) {
        return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
      }
});_.uniqueId('contact_');
_("fabio").capitalize();

// Support `RegExp` predicate shorthand.
var builtinIteratee = _.iteratee;
_.iteratee = function(value, context) {
  if (_.isRegExp(value)) return function(obj) { return value.test(obj) };
  return builtinIteratee(value, context);
};

_.uniqueId('contact_');
_.escape('Curly, Larry &amp; Moe');
_.unescape('Curly, Larry &amp;amp; Moe');

var object = {cheese: 'crumpets', stuff: function(){ return 'nonsense'; }};
_.result(object, 'cheese');

_.now();
var compiled = _.template("hello: &lt;%= name %&gt;");
compiled({name: 'moe'});

_.map([1, 2, 3], function(n){ return n * 2; });
_([1, 2, 3]).map(function(n){ return n * 2; });

var lyrics = [
      {line: 1, words: "I'm a lumberjack and I'm okay"},
      {line: 2, words: "I sleep all night and I work all day"},
      {line: 3, words: "He's a lumberjack and he's okay"},
      {line: 4, words: "He sleeps all night and he works all day"}
    ];
    
    _.chain(lyrics)
      .map(function(line) { return line.words.split(' '); })
      .flatten()
      .reduce(function(counts, word) {
        counts[word] = (counts[word] || 0) + 1;
        return counts;
      }, {})
.value();
    
var stooges = [{name: 'curly', age: 25}, {name: 'moe', age: 21}, {name: 'larry', age: 23}];
var youngest = _.chain(stooges)
  .sortBy(function(stooge){ return stooge.age; })
  .map(function(stooge){ return stooge.name + ' is ' + stooge.age; })
  .first()
  .value();

_.chain([1, 2, 3]).reverse().value();

