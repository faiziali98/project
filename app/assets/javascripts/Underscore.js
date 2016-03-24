<!DOCTYPE html>
<!-- saved from url=(0024)http://underscorejs.org/ -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  
  <meta http-equiv="X-UA-Compatible" content="chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="viewport" content="target-densitydpi=device-dpi">
  <meta name="HandheldFriendly" content="true">
  <link rel="canonical" href="http://underscorejs.org/">
  <link rel="shortcut icon" href="http://underscorejs.org/favicon.ico" type="image/x-icon">
  <title>Underscore.js</title>
  <style>
    body {
      font-size: 14px;
      line-height: 22px;
      background: #f4f4f4 url(docs/images/background.png);
      color: #000;
      font-family: Helvetica Neue, Helvetica, Arial;
    }
    .interface {
      font-family: "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, sans-serif !important;
    }
    div#sidebar {
      background: #fff;
      position: fixed;
      top: 0; left: 0; bottom: 0;
      width: 200px;
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      padding: 15px 0 30px 30px;
      border-right: 1px solid #bbb;
      box-shadow: 0 0 20px #ccc; -webkit-box-shadow: 0 0 20px #ccc; -moz-box-shadow: 0 0 20px #ccc;
    }
    a.toc_title, a.toc_title:visited {
      display: block;
      color: black;
      font-weight: bold;
      margin-top: 15px;
    }
      a.toc_title:hover {
        text-decoration: underline;
      }
      #sidebar .version {
        font-size: 10px;
        font-weight: normal;
      }
    ul.toc_section {
      font-size: 11px;
      line-height: 14px;
      margin: 5px 0 0 0;
      padding-left: 0px;
      list-style-type: none;
      font-family: Lucida Grande;
    }
      .toc_section li {
        cursor: pointer;
        margin: 0 0 3px 0;
      }
        .toc_section li a {
          text-decoration: none;
          color: black;
        }
          .toc_section li a:hover {
            text-decoration: underline;
          }
    div.container {
      width: 550px;
      margin: 40px 0 50px 260px;
    }
    img#logo {
      width: 396px;
      height: 69px;
    }
    div.warning {
      margin-top: 15px;
      font: bold 11px Arial;
      color: #770000;
    }
    p {
      margin: 20px 0;
      width: 550px;
    }
    a, a:visited {
      color: #444;
    }
    a:active, a:hover {
      color: #000;
    }
    h1, h2, h3, h4, h5, h6 {
      padding-top: 20px;
    }
      h2 {
        font-size: 20px;
      }
    b.header {
      font-size: 16px;
      line-height: 30px;
    }
    span.alias {
      font-size: 14px;
      font-style: italic;
      margin-left: 20px;
    }
    table, tr, td {
      margin: 0; padding: 0;
    }
      td {
        padding: 2px 12px 2px 0;
      }
      table .rule {
        height: 1px;
        background: #ccc;
        margin: 5px 0;
      }
    ul {
      list-style-type: circle;
      padding: 0 0 0 20px;
    }
      li {
        margin-bottom: 10px;
      }
      code, pre, tt {
        font-family: Monaco, Consolas, "Lucida Console", monospace;
        font-size: 12px;
        line-height: 18px;
        font-style: normal;
      }
        tt {
          padding: 0px 3px;
          background: #fff;
          border: 1px solid #ddd;
          zoom: 1;
        }
        code {
          margin-left: 20px;
        }
        pre {
          font-size: 12px;
          padding: 2px 0 2px 15px;
          border-left: 5px solid #bbb;
          margin: 0px 0 30px;
        }
    @media only screen and (-webkit-min-device-pixel-ratio: 1.5) and (max-width: 640px),
          only screen and (-o-min-device-pixel-ratio: 3/2) and (max-width: 640px),
          only screen and (min-device-pixel-ratio: 1.5) and (max-width: 640px) {
      img {
        max-width: 100%;
      }
      div#sidebar {
        -webkit-overflow-scrolling: initial;
        position: relative;
        width: 90%;
        height: 120px;
        left: 0;
        top: -7px;
        padding: 10px 0 10px 30px;
        border: 0;
      }
      img#logo {
        width: auto;
        height: auto;
      }
      div.container {
        margin: 0;
        width: 100%;
      }
      p, div.container ul {
        max-width: 98%;
        overflow-x: scroll;
      }
      pre {
        overflow: scroll;
      }
    }
  </style>
<style type="text/css"></style></head>
<body>

  <div id="sidebar" class="interface">

    <a class="toc_title" href="http://underscorejs.org/#">
      Underscore.js <span class="version">(1.8.3)</span>
    </a>
    <ul class="toc_section">
      <li>» <a href="https://github.com/jashkenas/underscore">GitHub Repository</a></li>
      <li>» <a href="http://underscorejs.org/docs/underscore.html">Annotated Source</a></li>
      <li>» <a href="http://documentcloud.github.io/underscore-contrib/">Underscore-contrib</a></li>
    </ul>

    <a class="toc_title" href="http://underscorejs.org/#">
      Introduction
    </a>

    <a class="toc_title" href="http://underscorejs.org/#collections">
      Collections
    </a>
    <ul class="toc_section">
      <li>- <a href="http://underscorejs.org/#each">each</a></li>
      <li>- <a href="http://underscorejs.org/#map">map</a></li>
      <li>- <a href="http://underscorejs.org/#reduce">reduce</a></li>
      <li>- <a href="http://underscorejs.org/#reduceRight">reduceRight</a></li>
      <li>- <a href="http://underscorejs.org/#find">find</a></li>
      <li>- <a href="http://underscorejs.org/#filter">filter</a></li>
      <li>- <a href="http://underscorejs.org/#where">where</a></li>
      <li>- <a href="http://underscorejs.org/#findWhere">findWhere</a></li>
      <li>- <a href="http://underscorejs.org/#reject">reject</a></li>
      <li>- <a href="http://underscorejs.org/#every">every</a></li>
      <li>- <a href="http://underscorejs.org/#some">some</a></li>
      <li>- <a href="http://underscorejs.org/#contains">contains</a></li>
      <li>- <a href="http://underscorejs.org/#invoke">invoke</a></li>
      <li>- <a href="http://underscorejs.org/#pluck">pluck</a></li>
      <li>- <a href="http://underscorejs.org/#max">max</a></li>
      <li>- <a href="http://underscorejs.org/#min">min</a></li>
      <li>- <a href="http://underscorejs.org/#sortBy">sortBy</a></li>
      <li>- <a href="http://underscorejs.org/#groupBy">groupBy</a></li>
      <li>- <a href="http://underscorejs.org/#indexBy">indexBy</a></li>
      <li>- <a href="http://underscorejs.org/#countBy">countBy</a></li>
      <li>- <a href="http://underscorejs.org/#shuffle">shuffle</a></li>
      <li>- <a href="http://underscorejs.org/#sample">sample</a></li>
      <li>- <a href="http://underscorejs.org/#toArray">toArray</a></li>
      <li>- <a href="http://underscorejs.org/#size">size</a></li>
      <li>- <a href="http://underscorejs.org/#partition">partition</a></li>
    </ul>

    <a class="toc_title" href="http://underscorejs.org/#arrays">
      Arrays
    </a>
    <ul class="toc_section">
      <li>- <a href="http://underscorejs.org/#first">first</a></li>
      <li>- <a href="http://underscorejs.org/#initial">initial</a></li>
      <li>- <a href="http://underscorejs.org/#last">last</a></li>
      <li>- <a href="http://underscorejs.org/#rest">rest</a></li>
      <li>- <a href="http://underscorejs.org/#compact">compact</a></li>
      <li>- <a href="http://underscorejs.org/#flatten">flatten</a></li>
      <li>- <a href="http://underscorejs.org/#without">without</a></li>
      <li>- <a href="http://underscorejs.org/#union">union</a></li>
      <li>- <a href="http://underscorejs.org/#intersection">intersection</a></li>
      <li>- <a href="http://underscorejs.org/#difference">difference</a></li>
      <li>- <a href="http://underscorejs.org/#uniq">uniq</a></li>
      <li>- <a href="http://underscorejs.org/#zip">zip</a></li>
      <li>- <a href="http://underscorejs.org/#unzip">unzip</a></li>
      <li>- <a href="http://underscorejs.org/#object">object</a></li>
      <li>- <a href="http://underscorejs.org/#indexOf">indexOf</a></li>
      <li>- <a href="http://underscorejs.org/#lastIndexOf">lastIndexOf</a></li>
      <li>- <a href="http://underscorejs.org/#sortedIndex">sortedIndex</a></li>
      <li>- <a href="http://underscorejs.org/#findIndex">findIndex</a></li>
      <li>- <a href="http://underscorejs.org/#findLastIndex">findLastIndex</a></li>
      <li>- <a href="http://underscorejs.org/#range">range</a></li>
    </ul>

    <a class="toc_title" href="http://underscorejs.org/#functions">
      Functions
    </a>
    <ul class="toc_section">
      <li>- <a href="http://underscorejs.org/#bind">bind</a></li>
      <li>- <a href="http://underscorejs.org/#bindAll">bindAll</a></li>
      <li>- <a href="http://underscorejs.org/#partial">partial</a></li>
      <li>- <a href="http://underscorejs.org/#memoize">memoize</a></li>
      <li>- <a href="http://underscorejs.org/#delay">delay</a></li>
      <li>- <a href="http://underscorejs.org/#defer">defer</a></li>
      <li>- <a href="http://underscorejs.org/#throttle">throttle</a></li>
      <li>- <a href="http://underscorejs.org/#debounce">debounce</a></li>
      <li>- <a href="http://underscorejs.org/#once">once</a></li>
      <li>- <a href="http://underscorejs.org/#after">after</a></li>
      <li>- <a href="http://underscorejs.org/#before">before</a></li>
      <li>- <a href="http://underscorejs.org/#wrap">wrap</a></li>
      <li>- <a href="http://underscorejs.org/#negate">negate</a></li>
      <li>- <a href="http://underscorejs.org/#compose">compose</a></li>
    </ul>

    <a class="toc_title" href="http://underscorejs.org/#objects">
      Objects
    </a>
    <ul class="toc_section">
      <li>- <a href="http://underscorejs.org/#keys">keys</a></li>
      <li>- <a href="http://underscorejs.org/#allKeys">allKeys</a></li>
      <li>- <a href="http://underscorejs.org/#values">values</a></li>
      <li>- <a href="http://underscorejs.org/#mapObject">mapObject</a></li>
      <li>- <a href="http://underscorejs.org/#pairs">pairs</a></li>
      <li>- <a href="http://underscorejs.org/#invert">invert</a></li>
      <li>- <a href="http://underscorejs.org/#create">create</a></li>
      <li>- <a href="http://underscorejs.org/#object-functions">functions</a></li>
      <li>- <a href="http://underscorejs.org/#findKey">findKey</a></li>
      <li>- <a href="http://underscorejs.org/#extend">extend</a></li>
      <li>- <a href="http://underscorejs.org/#extendOwn">extendOwn</a></li>
      <li>- <a href="http://underscorejs.org/#pick">pick</a></li>
      <li>- <a href="http://underscorejs.org/#omit">omit</a></li>
      <li>- <a href="http://underscorejs.org/#defaults">defaults</a></li>
      <li>- <a href="http://underscorejs.org/#clone">clone</a></li>
      <li>- <a href="http://underscorejs.org/#tap">tap</a></li>
      <li>- <a href="http://underscorejs.org/#has">has</a></li>
      <li>- <a href="http://underscorejs.org/#matcher">matcher</a></li>
      <li>- <a href="http://underscorejs.org/#property">property</a></li>
      <li>- <a href="http://underscorejs.org/#propertyOf">propertyOf</a></li>
      <li>- <a href="http://underscorejs.org/#isEqual">isEqual</a></li>
      <li>- <a href="http://underscorejs.org/#isMatch">isMatch</a></li>
      <li>- <a href="http://underscorejs.org/#isEmpty">isEmpty</a></li>
      <li>- <a href="http://underscorejs.org/#isElement">isElement</a></li>
      <li>- <a href="http://underscorejs.org/#isArray">isArray</a></li>
      <li>- <a href="http://underscorejs.org/#isObject">isObject</a></li>
      <li>- <a href="http://underscorejs.org/#isArguments">isArguments</a></li>
      <li>- <a href="http://underscorejs.org/#isFunction">isFunction</a></li>
      <li>- <a href="http://underscorejs.org/#isString">isString</a></li>
      <li>- <a href="http://underscorejs.org/#isNumber">isNumber</a></li>
      <li>- <a href="http://underscorejs.org/#isFinite">isFinite</a></li>
      <li>- <a href="http://underscorejs.org/#isBoolean">isBoolean</a></li>
      <li>- <a href="http://underscorejs.org/#isDate">isDate</a></li>
      <li>- <a href="http://underscorejs.org/#isRegExp">isRegExp</a></li>
      <li>- <a href="http://underscorejs.org/#isError">isError</a></li>
      <li>- <a href="http://underscorejs.org/#isNaN">isNaN</a></li>
      <li>- <a href="http://underscorejs.org/#isNull">isNull</a></li>
      <li>- <a href="http://underscorejs.org/#isUndefined">isUndefined</a></li>
    </ul>

    <a class="toc_title" href="http://underscorejs.org/#utility">
      Utility
    </a>
    <ul class="toc_section">
      <li>- <a href="http://underscorejs.org/#noConflict">noConflict</a></li>
      <li>- <a href="http://underscorejs.org/#identity">identity</a></li>
      <li>- <a href="http://underscorejs.org/#constant">constant</a></li>
      <li>- <a href="http://underscorejs.org/#noop">noop</a></li>
      <li>- <a href="http://underscorejs.org/#times">times</a></li>
      <li>- <a href="http://underscorejs.org/#random">random</a></li>
      <li>- <a href="http://underscorejs.org/#mixin">mixin</a></li>
      <li>- <a href="http://underscorejs.org/#iteratee">iteratee</a></li>
      <li>- <a href="http://underscorejs.org/#uniqueId">uniqueId</a></li>
      <li>- <a href="http://underscorejs.org/#escape">escape</a></li>
      <li>- <a href="http://underscorejs.org/#unescape">unescape</a></li>
      <li>- <a href="http://underscorejs.org/#result">result</a></li>
      <li>- <a href="http://underscorejs.org/#now">now</a></li>
      <li>- <a href="http://underscorejs.org/#template">template</a></li>
    </ul>

    <a class="toc_title" href="http://underscorejs.org/#oop">
      OOP Style
    </a>
    <a class="toc_title" href="http://underscorejs.org/#chaining">
      Chaining
    </a>
    <ul class="toc_section">
      <li>- <a href="http://underscorejs.org/#chain">chain</a></li>
      <li>- <a href="http://underscorejs.org/#value">value</a></li>
    </ul>

    <a class="toc_title" href="http://underscorejs.org/#links">
      Links
    </a>

    <a class="toc_title" href="http://underscorejs.org/#changelog">
      Change Log
    </a>

  </div>

  <div class="container">

    <p id="introduction">
      <img id="logo" src="./Underscore_files/underscore.png" alt="Underscore.js">
    </p>

    <p>
      <a href="http://github.com/jashkenas/underscore/">Underscore</a>
      is a JavaScript library that provides a whole mess of useful functional
      programming helpers without extending any built-in objects.
      It’s the answer to the question: “If I sit down in front of a
      blank HTML page, and want to start being productive immediately, what do I need?”
      … and the tie to go along with
      <a href="http://jquery.com/">jQuery</a>'s tux and
      <a href="http://backbonejs.org/">Backbone</a>'s suspenders.
    </p>

    <p>
      Underscore provides over 100 functions that support both your favorite
      workaday functional helpers: <b>map</b>, <b>filter</b>, <b>invoke</b> —
      as well as more specialized goodies: function binding, javascript
      templating, creating quick indexes, deep equality testing, and so on.
    </p>

    <p>
      A complete <a href="http://underscorejs.org/test/">Test Suite</a>
      is included for your perusal.
    </p>

    <p>
      You may also read through the <a href="http://underscorejs.org/docs/underscore.html">annotated source code</a>.
    </p>

    <p>
      Enjoying Underscore, and want to <i>turn it up to 11?</i> Try <a href="http://documentcloud.github.io/underscore-contrib/">Underscore-contrib</a>.
    </p>

    <p>
      The project is
      <a href="https://github.com/jashkenas/underscore">hosted on GitHub</a>.
      You can report bugs and discuss features on the
      <a href="https://github.com/jashkenas/underscore/issues">issues page</a>, or
      on Freenode in the <tt>#documentcloud</tt> channel.
    </p>

    <p>
      <i>Underscore is an open-source component of <a href="http://documentcloud.org/">DocumentCloud</a>.</i>
    </p>

    <h2>Downloads <i style="padding-left: 12px; font-size:12px;">(Right-click, and use "Save As")</i></h2>

    <table>
      <tbody><tr>
        <td><a href="./Underscore_files/underscore.js">Development Version (1.8.3)</a></td>
        <td><i>52kb, Uncompressed with Plentiful Comments</i></td>
      </tr>
      <tr>
        <td><a href="http://underscorejs.org/underscore-min.js">Production Version (1.8.3)</a></td>
        <td>
          <i>5.7kb, Minified and Gzipped</i>
          &nbsp;<small>(<a href="http://underscorejs.org/underscore-min.map">Source Map</a>)</small>
        </td>
      </tr>
      <tr>
        <td colspan="2"><div class="rule"></div></td>
      </tr>
      <tr>
        <td><a href="https://raw.github.com/jashkenas/underscore/master/underscore.js">Edge Version</a></td>
        <td><i>Unreleased, current <tt>master</tt>, use at your own risk</i></td>
      </tr>
    </tbody></table>

    <h2>Installation</h2>

    <ul>
      <li>
        <b>Node.js</b> <tt>npm install underscore</tt>
      </li>
      <li>
        <b>Meteor.js</b> <tt>meteor add underscore</tt>
      </li>
      <li>
        <b>Require.js</b> <tt>require(["underscore"], ...</tt>
      </li>
      <li>
        <b>Bower</b> <tt>bower install underscore</tt>
      </li>
      <li>
        <b>Component</b> <tt>component install jashkenas/underscore</tt>
      </li>
    </ul>

    <div id="documentation">

      <h2 id="collections">Collection Functions (Arrays or Objects)</h2>

      <p id="each">
        <b class="header">each</b><code>_.each(list, iteratee, [context])</code>
        <span class="alias">Alias: <b>forEach</b></span>
        <br>
        Iterates over a <b>list</b> of elements, yielding each in turn to an <b>iteratee</b>
        function. The <b>iteratee</b> is bound to the <b>context</b> object, if one is
        passed. Each invocation of <b>iteratee</b> is called with three arguments:
        <tt>(element, index, list)</tt>. If <b>list</b> is a JavaScript object, <b>iteratee</b>'s
        arguments will be <tt>(value, key, list)</tt>. Returns the <b>list</b> for chaining.
      </p>
      <pre>_.each([1, 2, 3], alert);
=&gt; alerts each number in turn...
_.each({one: 1, two: 2, three: 3}, alert);
=&gt; alerts each number value in turn...</pre>

      <p>
        <i>
          Note: Collection functions work on arrays, objects, and
          array-like objects such as</i> <tt>arguments</tt>, <tt>NodeList</tt><i>
          and similar. But it works by duck-typing, so avoid passing objects with
          a numeric <tt>length</tt> property. It's also good to note that an
          <tt>each</tt> loop cannot be broken out of — to break, use <b>_.find</b>
          instead.
        </i>
      </p>

      <p id="map">
        <b class="header">map</b><code>_.map(list, iteratee, [context])</code>
        <span class="alias">Alias: <b>collect</b></span>
        <br>
        Produces a new array of values by mapping each value in <b>list</b>
        through a transformation function (<b>iteratee</b>). The <tt>iteratee</tt>
        is passed three arguments: the <tt>value</tt>, then the <tt>index</tt>
        (or <tt>key</tt>) of the iteration, and finally a reference to the entire
        <tt>list</tt>.
      </p>
      <pre>_.map([1, 2, 3], function(num){ return num * 3; });
=&gt; [3, 6, 9]
_.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
=&gt; [3, 6, 9]
_.map([[1, 2], [3, 4]], _.first);
=&gt; [1, 3]</pre>

      <p id="reduce">
        <b class="header">reduce</b><code>_.reduce(list, iteratee, [memo], [context])</code>
        <span class="alias">Aliases: <b>inject, foldl</b></span>
        <br>
        Also known as <b>inject</b> and <b>foldl</b>, reduce boils down a <b>list</b> of values into a single value.
        <b>Memo</b> is the initial state of the reduction, and each successive step of it should be returned by
        <b>iteratee</b>. The iteratee is passed four arguments: the <tt>memo</tt>, then the <tt>value</tt> and
        <tt>index</tt> (or key) of the iteration, and finally a reference to the entire <tt>list</tt>.
      </p>
      <p>
        If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element
        of the list. The first element is instead passed as the memo in the invocation of the iteratee on the next
        element in the list.
      </p>
      <pre>var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
=&gt; 6
</pre>

      <p id="reduceRight">
        <b class="header">reduceRight</b><code>_.reduceRight(list, iteratee, memo, [context])</code>
        <span class="alias">Alias: <b>foldr</b></span>
        <br>
        The right-associative version of <b>reduce</b>. <b>Foldr</b>
        is not as useful in JavaScript as it would be in a language with lazy
        evaluation.
      </p>
      <pre>var list = [[0, 1], [2, 3], [4, 5]];
var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
=&gt; [4, 5, 2, 3, 0, 1]
</pre>

      <p id="find">
        <b class="header">find</b><code>_.find(list, predicate, [context])</code>
        <span class="alias">Alias: <b>detect</b></span>
        <br>
        Looks through each value in the <b>list</b>, returning the first one that
        passes a truth test (<b>predicate</b>), or <tt>undefined</tt> if no value
        passes the test. The function returns as
        soon as it finds an acceptable element, and doesn't traverse the
        entire list.
      </p>
      <pre>var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=&gt; 2
</pre>

      <p id="filter">
        <b class="header">filter</b><code>_.filter(list, predicate, [context])</code>
        <span class="alias">Alias: <b>select</b></span>
        <br>
        Looks through each value in the <b>list</b>, returning an array of all
        the values that pass a truth test (<b>predicate</b>).
      </p>
      <pre>var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=&gt; [2, 4, 6]
</pre>

      <p id="where">
        <b class="header">where</b><code>_.where(list, properties)</code>
        <br>
        Looks through each value in the <b>list</b>, returning an array of all
        the values that contain all of the key-value pairs listed in <b>properties</b>.
      </p>
      <pre>_.where(listOfPlays, {author: "Shakespeare", year: 1611});
=&gt; [{title: "Cymbeline", author: "Shakespeare", year: 1611},
    {title: "The Tempest", author: "Shakespeare", year: 1611}]
</pre>

      <p id="findWhere">
        <b class="header">findWhere</b><code>_.findWhere(list, properties)</code>
        <br>
        Looks through the <b>list</b> and returns the <i>first</i> value that matches
        all of the key-value pairs listed in <b>properties</b>.
      </p>
      <p>
        If no match is found, or if <b>list</b> is empty, <i>undefined</i> will be
        returned.
      </p>
      <pre>_.findWhere(publicServicePulitzers, {newsroom: "The New York Times"});
=&gt; {year: 1918, newsroom: "The New York Times",
  reason: "For its public service in publishing in full so many official reports,
  documents and speeches by European statesmen relating to the progress and
  conduct of the war."}
</pre>

      <p id="reject">
        <b class="header">reject</b><code>_.reject(list, predicate, [context])</code>
        <br>
        Returns the values in <b>list</b> without the elements that the truth
        test (<b>predicate</b>) passes. The opposite of <b>filter</b>.
      </p>
      <pre>var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=&gt; [1, 3, 5]
</pre>

      <p id="every">
        <b class="header">every</b><code>_.every(list, [predicate], [context])</code>
        <span class="alias">Alias: <b>all</b></span>
        <br>
        Returns <i>true</i> if all of the values in the <b>list</b> pass the
        <b>predicate</b> truth test. Short-circuits and stops traversing the list
        if a false element is found.
      </p>
      <pre>_.every([2, 4, 5], function(num) { return num % 2 == 0; });
=&gt; false
</pre>

      <p id="some">
        <b class="header">some</b><code>_.some(list, [predicate], [context])</code>
        <span class="alias">Alias: <b>any</b></span>
        <br>
        Returns <i>true</i> if any of the values in the <b>list</b> pass the
        <b>predicate</b> truth test. Short-circuits and stops traversing the list
        if a true element is found.
      </p>
      <pre>_.some([null, 0, 'yes', false]);
=&gt; true
</pre>

      <p id="contains">
        <b class="header">contains</b><code>_.contains(list, value, [fromIndex])</code>
        <span class="alias">Alias: <b>includes</b></span>
        <br>
        Returns <i>true</i> if the <b>value</b> is present in the <b>list</b>.
        Uses <b>indexOf</b> internally, if <b>list</b> is an Array.
        Use <b>fromIndex</b> to start your search at a given index.
      </p>
      <pre>_.contains([1, 2, 3], 3);
=&gt; true
</pre>

      <p id="invoke">
        <b class="header">invoke</b><code>_.invoke(list, methodName, *arguments)</code>
        <br>
        Calls the method named by <b>methodName</b> on each value in the <b>list</b>.
        Any extra arguments passed to <b>invoke</b> will be forwarded on to the
        method invocation.
      </p>
      <pre>_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
=&gt; [[1, 5, 7], [1, 2, 3]]
</pre>

      <p id="pluck">
        <b class="header">pluck</b><code>_.pluck(list, propertyName)</code>
        <br>
        A convenient version of what is perhaps the most common use-case for
        <b>map</b>: extracting a list of property values.
      </p>
      <pre>var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.pluck(stooges, 'name');
=&gt; ["moe", "larry", "curly"]
</pre>

      <p id="max">
        <b class="header">max</b><code>_.max(list, [iteratee], [context])</code>
        <br>
        Returns the maximum value in <b>list</b>. If an <b>iteratee</b>
        function is provided, it will be used on each value to generate the
        criterion by which the value is ranked. <i>-Infinity</i> is returned
        if <b>list</b> is empty, so an <a href="http://underscorejs.org/#isEmpty">isEmpty</a> guard
        may be required.
      </p>
      <pre>var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.max(stooges, function(stooge){ return stooge.age; });
=&gt; {name: 'curly', age: 60};
</pre>

      <p id="min">
        <b class="header">min</b><code>_.min(list, [iteratee], [context])</code>
        <br>
        Returns the minimum value in <b>list</b>. If an <b>iteratee</b>
        function is provided, it will be used on each value to generate the
        criterion by which the value is ranked. <i>Infinity</i> is returned
        if <b>list</b> is empty, so an <a href="http://underscorejs.org/#isEmpty">isEmpty</a> guard
        may be required.
      </p>
      <pre>var numbers = [10, 5, 100, 2, 1000];
_.min(numbers);
=&gt; 2
</pre>

      <p id="sortBy">
        <b class="header">sortBy</b><code>_.sortBy(list, iteratee, [context])</code>
        <br>
        Returns a (stably) sorted copy of <b>list</b>, ranked in ascending
        order by the results of running each value through <b>iteratee</b>.
        iteratee may also be the string name of the property to sort by (eg.
        <tt>length</tt>).
      </p>
      <pre>_.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
=&gt; [5, 4, 6, 3, 1, 2]

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.sortBy(stooges, 'name');
=&gt; [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];
</pre>
      <p id="groupBy">
        <b class="header">groupBy</b><code>_.groupBy(list, iteratee, [context])</code>
        <br>
        Splits a collection into sets, grouped by the result of running each
        value through <b>iteratee</b>. If <b>iteratee</b> is a string instead of
        a function, groups by the property named by <b>iteratee</b> on each of
        the values.
      </p>
      <pre>_.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
=&gt; {1: [1.3], 2: [2.1, 2.4]}

_.groupBy(['one', 'two', 'three'], 'length');
=&gt; {3: ["one", "two"], 5: ["three"]}
</pre>

      <p id="indexBy">
        <b class="header">indexBy</b><code>_.indexBy(list, iteratee, [context])</code>
        <br>
        Given a <b>list</b>, and an <b>iteratee</b> function that returns a
        key for each element in the list (or a property name),
        returns an object with an index of each item.
        Just like <a href="http://underscorejs.org/#groupBy">groupBy</a>, but for when you know your
        keys are unique.
      </p>
      <pre>var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.indexBy(stooges, 'age');
=&gt; {
  "40": {name: 'moe', age: 40},
  "50": {name: 'larry', age: 50},
  "60": {name: 'curly', age: 60}
}
</pre>

      <p id="countBy">
        <b class="header">countBy</b><code>_.countBy(list, iteratee, [context])</code>
        <br>
        Sorts a list into groups and returns a count for the number of objects
        in each group.
        Similar to <tt>groupBy</tt>, but instead of returning a list of values,
        returns a count for the number of values in that group.
      </p>
      <pre>_.countBy([1, 2, 3, 4, 5], function(num) {
  return num % 2 == 0 ? 'even': 'odd';
});
=&gt; {odd: 3, even: 2}
</pre>

      <p id="shuffle">
        <b class="header">shuffle</b><code>_.shuffle(list)</code>
        <br>
        Returns a shuffled copy of the <b>list</b>, using a version of the
        <a href="http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle">Fisher-Yates shuffle</a>.
      </p>
      <pre>_.shuffle([1, 2, 3, 4, 5, 6]);
=&gt; [4, 1, 6, 3, 5, 2]
</pre>

      <p id="sample">
        <b class="header">sample</b><code>_.sample(list, [n])</code>
        <br>
        Produce a random sample from the <b>list</b>. Pass a number to
        return <b>n</b> random elements from the list. Otherwise a single random
        item will be returned.
      </p>
      <pre>_.sample([1, 2, 3, 4, 5, 6]);
=&gt; 4

_.sample([1, 2, 3, 4, 5, 6], 3);
=&gt; [1, 6, 2]
</pre>

      <p id="toArray">
        <b class="header">toArray</b><code>_.toArray(list)</code>
        <br>
        Creates a real Array from the <b>list</b> (anything that can be
        iterated over).  Useful for transmuting the <b>arguments</b> object.
      </p>
      <pre>(function(){ return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
=&gt; [2, 3, 4]
</pre>

      <p id="size">
        <b class="header">size</b><code>_.size(list)</code>
        <br>
        Return the number of values in the <b>list</b>.
      </p>
      <pre>_.size({one: 1, two: 2, three: 3});
=&gt; 3
</pre>

      <p id="partition">
        <b class="header">partition</b><code>_.partition(array, predicate)</code>
        <br>
        Split <b>array</b> into two arrays: one whose elements all satisfy
        <b>predicate</b> and one whose elements all do not satisfy <b>predicate</b>.
      </p>
      <pre>_.partition([0, 1, 2, 3, 4, 5], isOdd);
=&gt; [[1, 3, 5], [0, 2, 4]]
</pre>

      <h2 id="arrays">Array Functions</h2>

      <p>
        <i>
          Note: All array functions will also work on the <b>arguments</b> object.
          However, Underscore functions are not designed to work on "sparse" arrays.
        </i>
      </p>

      <p id="first">
        <b class="header">first</b><code>_.first(array, [n])</code>
        <span class="alias">Alias: <b>head</b>, <b>take</b></span>
        <br>
        Returns the first element of an <b>array</b>. Passing <b>n</b> will
        return the first <b>n</b> elements of the array.
      </p>
      <pre>_.first([5, 4, 3, 2, 1]);
=&gt; 5
</pre>

      <p id="initial">
        <b class="header">initial</b><code>_.initial(array, [n])</code>
        <br>
        Returns everything but the last entry of the array. Especially useful on
        the arguments object. Pass <b>n</b> to exclude the last <b>n</b> elements
        from the result.
      </p>
      <pre>_.initial([5, 4, 3, 2, 1]);
=&gt; [5, 4, 3, 2]
</pre>

      <p id="last">
        <b class="header">last</b><code>_.last(array, [n])</code>
        <br>
        Returns the last element of an <b>array</b>. Passing <b>n</b> will return
        the last <b>n</b> elements of the array.
      </p>
      <pre>_.last([5, 4, 3, 2, 1]);
=&gt; 1
</pre>

      <p id="rest">
        <b class="header">rest</b><code>_.rest(array, [index])</code>
        <span class="alias">Alias: <b>tail, drop</b></span>
        <br>
        Returns the <b>rest</b> of the elements in an array. Pass an <b>index</b>
        to return the values of the array from that index onward.
      </p>
      <pre>_.rest([5, 4, 3, 2, 1]);
=&gt; [4, 3, 2, 1]
</pre>

      <p id="compact">
        <b class="header">compact</b><code>_.compact(array)</code>
        <br>
        Returns a copy of the <b>array</b> with all falsy values removed.
        In JavaScript, <i>false</i>, <i>null</i>, <i>0</i>, <i>""</i>,
        <i>undefined</i> and <i>NaN</i> are all falsy.
      </p>
      <pre>_.compact([0, 1, false, 2, '', 3]);
=&gt; [1, 2, 3]
</pre>

      <p id="flatten">
        <b class="header">flatten</b><code>_.flatten(array, [shallow])</code>
        <br>
        Flattens a nested <b>array</b> (the nesting can be to any depth). If you
        pass <b>shallow</b>, the array will only be flattened a single level.
      </p>
      <pre>_.flatten([1, [2], [3, [[4]]]]);
=&gt; [1, 2, 3, 4];

_.flatten([1, [2], [3, [[4]]]], true);
=&gt; [1, 2, 3, [[4]]];
</pre>

      <p id="without">
        <b class="header">without</b><code>_.without(array, *values)</code>
        <br>
        Returns a copy of the <b>array</b> with all instances of the <b>values</b>
        removed.
      </p>
      <pre>_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
=&gt; [2, 3, 4]
</pre>

      <p id="union">
        <b class="header">union</b><code>_.union(*arrays)</code>
        <br>
        Computes the union of the passed-in <b>arrays</b>: the list of unique items,
        in order, that are present in one or more of the <b>arrays</b>.
      </p>
      <pre>_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
=&gt; [1, 2, 3, 101, 10]
</pre>

      <p id="intersection">
        <b class="header">intersection</b><code>_.intersection(*arrays)</code>
        <br>
        Computes the list of values that are the intersection of all the <b>arrays</b>.
        Each value in the result is present in each of the <b>arrays</b>.
      </p>
      <pre>_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
=&gt; [1, 2]
</pre>

      <p id="difference">
        <b class="header">difference</b><code>_.difference(array, *others)</code>
        <br>
        Similar to <b>without</b>, but returns the values from <b>array</b> that
        are not present in the <b>other</b> arrays.
      </p>
      <pre>_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
=&gt; [1, 3, 4]
</pre>

      <p id="uniq">
        <b class="header">uniq</b><code>_.uniq(array, [isSorted], [iteratee])</code>
        <span class="alias">Alias: <b>unique</b></span>
        <br>
        Produces a duplicate-free version of the <b>array</b>, using <i>===</i> to test
        object equality. In particular only the first occurence of each value is kept.
        If you know in advance that the <b>array</b> is sorted,
        passing <i>true</i> for <b>isSorted</b> will run a much faster algorithm.
        If you want to compute unique items based on a transformation, pass an
        <b>iteratee</b> function.
      </p>
      <pre>_.uniq([1, 2, 1, 4, 1, 3]);
=&gt; [1, 2, 4, 3]
</pre>

      <p id="zip">
        <b class="header">zip</b><code>_.zip(*arrays)</code>
        <br>
        Merges together the values of each of the <b>arrays</b> with the
        values at the corresponding position. Useful when you have separate
        data sources that are coordinated through matching array indexes.
        Use with <tt>apply</tt> to pass in an array of arrays.
        If you're working with a matrix of nested arrays, this can be used to
        transpose the matrix.
      </p>
      <pre>_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
=&gt; [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]

</pre>

<p id="unzip">
        <b class="header">unzip</b><code>_.unzip(array)</code>
        <br>
        The opposite of <a href="http://underscorejs.org/#zip">zip</a>. Given an <b>array</b> of arrays, returns a
        series of new arrays, the first of which contains all of the first elements
        in the input arrays, the second of which contains all of the second elements,
        and so on.
      </p>
      <pre>_.unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]);
=&gt; [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]
</pre>

      <p id="object">
        <b class="header">object</b><code>_.object(list, [values])</code>
        <br>
        Converts arrays into objects. Pass either a single list of
        <tt>[key, value]</tt> pairs, or a list of keys, and a list of values.
        If duplicate keys exist, the last value wins.
      </p>
      <pre>_.object(['moe', 'larry', 'curly'], [30, 40, 50]);
=&gt; {moe: 30, larry: 40, curly: 50}

_.object([['moe', 30], ['larry', 40], ['curly', 50]]);
=&gt; {moe: 30, larry: 40, curly: 50}
</pre>

      <p id="indexOf">
        <b class="header">indexOf</b><code>_.indexOf(array, value, [isSorted])</code>
        <br>
        Returns the index at which <b>value</b> can be found in the <b>array</b>,
        or <i>-1</i> if value is not present in the <b>array</b>. If you're working with a
        large array, and you know that the array is already sorted, pass <tt>true</tt>
        for <b>isSorted</b> to use a faster binary search ... or, pass a number as
        the third argument in order to look for the first matching value in the
        array after the given index.
      </p>
      <pre>_.indexOf([1, 2, 3], 2);
=&gt; 1
</pre>

      <p id="lastIndexOf">
        <b class="header">lastIndexOf</b><code>_.lastIndexOf(array, value, [fromIndex])</code>
        <br>
        Returns the index of the last occurrence of <b>value</b> in the <b>array</b>,
        or <i>-1</i> if value is not present. Pass <b>fromIndex</b> to start your search at a
        given index.
      </p>
      <pre>_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
=&gt; 4
</pre>

      <p id="sortedIndex">
        <b class="header">sortedIndex</b><code>_.sortedIndex(list, value, [iteratee], [context])</code>
        <br>
        Uses a binary search to determine the index at which the <b>value</b>
        <i>should</i> be inserted into the <b>list</b> in order to maintain the <b>list</b>'s
        sorted order. If an <b>iteratee</b> function is provided, it will be used to compute
        the sort ranking of each value, including the <b>value</b> you pass.
        The iteratee may also be the string name of the property to sort by (eg. <tt>length</tt>).
      </p>
      <pre>_.sortedIndex([10, 20, 30, 40, 50], 35);
=&gt; 3

var stooges = [{name: 'moe', age: 40}, {name: 'curly', age: 60}];
_.sortedIndex(stooges, {name: 'larry', age: 50}, 'age');
=&gt; 1
</pre>

      <p id="findIndex">
        <b class="header">findIndex</b><code>_.findIndex(array, predicate, [context])</code>
        <br>
        Similar to <a href="http://underscorejs.org/#indexOf"><tt>_.indexOf</tt></a>, returns the first index
        where the <strong>predicate</strong> truth test passes; otherwise returns <i>-1</i>.
      </p>
      <pre>_.findIndex([4, 6, 8, 12], isPrime);
=&gt; -1 // not found
_.findIndex([4, 6, 7, 12], isPrime);
=&gt; 2
</pre>

      <p id="findLastIndex">
        <b class="header">findLastIndex</b><code>_.findLastIndex(array, predicate, [context])</code>
        <br>
        Like <a href="http://underscorejs.org/#findIndex"><tt>_.findIndex</tt></a> but iterates the array in reverse,
        returning the index closest to the end where the <strong>predicate</strong> truth test
        passes.
      </p>
      <pre>var users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
             {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Frank', 'last': 'James'},
             {'id': 4, 'name': 'Ted', 'last': 'Jones'}];
_.findLastIndex(users, {
  name: 'Ted'
});
=&gt; 3
</pre>

      <p id="range">
        <b class="header">range</b><code>_.range([start], stop, [step])</code>
        <br>
        A function to create flexibly-numbered lists of integers, handy for
        <tt>each</tt> and <tt>map</tt> loops. <b>start</b>, if omitted, defaults
        to <i>0</i>; <b>step</b> defaults to <i>1</i>. Returns a list of integers
        from <b>start</b> (inclusive) to <b>stop</b> (exclusive), incremented (or decremented) by <b>step</b>,
        exclusive. Note that ranges that <b>stop</b> before they <b>start</b>
        are considered to be zero-length instead of negative — if you'd like a
        negative range, use a negative <b>step</b>.
      </p>
      <pre>_.range(10);
=&gt; [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
_.range(1, 11);
=&gt; [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
_.range(0, 30, 5);
=&gt; [0, 5, 10, 15, 20, 25]
_.range(0, -10, -1);
=&gt; [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
_.range(0);
=&gt; []
</pre>

      <h2 id="functions">Function (uh, ahem) Functions</h2>

      <p id="bind">
        <b class="header">bind</b><code>_.bind(function, object, *arguments)</code>
        <br>
        Bind a <b>function</b> to an <b>object</b>, meaning that whenever
        the function is called, the value of <i>this</i> will be the <b>object</b>.
        Optionally, pass <b>arguments</b> to the <b>function</b> to pre-fill them,
        also known as <b>partial application</b>. For partial application without
        context binding, use <a href="http://underscorejs.org/#partial">partial</a>.
      </p>
      <pre>var func = function(greeting){ return greeting + ': ' + this.name };
func = _.bind(func, {name: 'moe'}, 'hi');
func();
=&gt; 'hi: moe'
</pre>

      <p id="bindAll">
        <b class="header">bindAll</b><code>_.bindAll(object, *methodNames)</code>
        <br>
        Binds a number of methods on the <b>object</b>, specified by
        <b>methodNames</b>, to be run in the context of that object whenever they
        are invoked. Very handy for binding functions that are going to be used
        as event handlers, which would otherwise be invoked with a fairly useless
        <i>this</i>. <b>methodNames</b> are required.
      </p>
      <pre>var buttonView = {
  label  : 'underscore',
  onClick: function(){ alert('clicked: ' + this.label); },
  onHover: function(){ console.log('hovering: ' + this.label); }
};
_.bindAll(buttonView, 'onClick', 'onHover');
// When the button is clicked, this.label will have the correct value.
jQuery('#underscore_button').on('click', buttonView.onClick);
</pre>

      <p id="partial">
        <b class="header">partial</b><code>_.partial(function, *arguments)</code>
        <br>
        Partially apply a function by filling in any number of its <b>arguments</b>,
        <i>without</i> changing its dynamic <tt>this</tt> value. A close cousin
        of <a href="http://underscorejs.org/#bind">bind</a>. You may pass <tt>_</tt> in your list of
        <b>arguments</b> to specify an argument that should not be pre-filled, but
        left open to supply at call-time.
      </p>
      <pre>var subtract = function(a, b) { return b - a; };
sub5 = _.partial(subtract, 5);
sub5(20);
=&gt; 15

// Using a placeholder
subFrom20 = _.partial(subtract, _, 20);
subFrom20(5);
=&gt; 15
</pre>

      <p id="memoize">
        <b class="header">memoize</b><code>_.memoize(function, [hashFunction])</code>
        <br>
        Memoizes a given <b>function</b> by caching the computed result. Useful
        for speeding up slow-running computations. If passed an optional
        <b>hashFunction</b>, it will be used to compute the hash key for storing
        the result, based on the arguments to the original function. The default
        <b>hashFunction</b> just uses the first argument to the memoized function
        as the key. The cache of memoized values is available as the <tt>cache</tt>
        property on the returned function.
      </p>
      <pre>var fibonacci = _.memoize(function(n) {
  return n &lt; 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
});
</pre>

      <p id="delay">
        <b class="header">delay</b><code>_.delay(function, wait, *arguments)</code>
        <br>
        Much like <b>setTimeout</b>, invokes <b>function</b> after <b>wait</b>
        milliseconds. If you pass the optional <b>arguments</b>, they will be
        forwarded on to the <b>function</b> when it is invoked.
      </p>
      <pre>var log = _.bind(console.log, console);
_.delay(log, 1000, 'logged later');
=&gt; 'logged later' // Appears after one second.
</pre>

      <p id="defer">
        <b class="header">defer</b><code>_.defer(function, *arguments)</code>
        <br>
        Defers invoking the <b>function</b> until the current call stack has cleared,
        similar to using <b>setTimeout</b> with a delay of 0. Useful for performing
        expensive computations or HTML rendering in chunks without blocking the UI thread
        from updating. If you pass the optional <b>arguments</b>, they will be
        forwarded on to the <b>function</b> when it is invoked.
      </p>
      <pre>_.defer(function(){ alert('deferred'); });
// Returns from the function before the alert runs.
</pre>

      <p id="throttle">
        <b class="header">throttle</b><code>_.throttle(function, wait, [options])</code>
        <br>
        Creates and returns a new, throttled version of the passed function,
        that, when invoked repeatedly, will only actually call the original function
        at most once per every <b>wait</b>
        milliseconds. Useful for rate-limiting events that occur faster than you
        can keep up with.
      </p>
      <p>
        By default, <b>throttle</b> will execute the function as soon as you call it
        for the first time, and, if you call it again any number of times
        during the <b>wait</b> period, as soon as that period is over.
        If you'd like to disable the leading-edge
        call, pass <tt>{leading: false}</tt>, and if you'd like to disable the
        execution on the trailing-edge, pass <br> <tt>{trailing: false}</tt>.
      </p>
      <pre>var throttled = _.throttle(updatePosition, 100);
$(window).scroll(throttled);
</pre>

      <p id="debounce">
        <b class="header">debounce</b><code>_.debounce(function, wait, [immediate])</code>
        <br>
        Creates and returns a new debounced version of the passed function which
        will postpone its execution until after
        <b>wait</b> milliseconds have elapsed since the last time it
        was invoked. Useful for implementing behavior that should only happen
        <i>after</i> the input has stopped arriving. For example: rendering a
        preview of a Markdown comment, recalculating a layout after the window
        has stopped being resized, and so on.
      </p>

      <p>
        At the end of the <b>wait</b> interval, the function will be called
        with the arguments that were passed <i>most recently</i> to the
        debounced function.
      </p>

      <p>
        Pass <tt>true</tt> for the <b>immediate</b> argument to cause
        <b>debounce</b> to trigger the function on the leading instead of the
        trailing edge of the <b>wait</b> interval. Useful in circumstances like
        preventing accidental double-clicks on a "submit" button from firing a
        second time.
      </p>

      <pre>var lazyLayout = _.debounce(calculateLayout, 300);
$(window).resize(lazyLayout);
</pre>

      <p id="once">
        <b class="header">once</b><code>_.once(function)</code>
        <br>
        Creates a version of the function that can only be called one time.
        Repeated calls to the modified function will have no effect, returning
        the value from the original call. Useful for initialization functions,
        instead of having to set a boolean flag and then check it later.
      </p>
      <pre>var initialize = _.once(createApplication);
initialize();
initialize();
// Application is only created once.
</pre>

      <p id="after">
        <b class="header">after</b><code>_.after(count, function)</code>
        <br>
        Creates a version of the function that will only be run after first
        being called <b>count</b> times. Useful for grouping asynchronous responses,
        where you want to be sure that all the async calls have finished, before
        proceeding.
      </p>
      <pre>var renderNotes = _.after(notes.length, render);
_.each(notes, function(note) {
  note.asyncSave({success: renderNotes});
});
// renderNotes is run once, after all notes have saved.
</pre>

      <p id="before">
        <b class="header">before</b><code>_.before(count, function)</code>
        <br>
        Creates a version of the function that can be called no more than
        <b>count</b> times. The result of the last function call is memoized and
        returned when <b>count</b> has been reached.
      </p>
      <pre>var monthlyMeeting = _.before(3, askForRaise);
monthlyMeeting();
monthlyMeeting();
monthlyMeeting();
// the result of any subsequent calls is the same as the second call
</pre>

      <p id="wrap">
        <b class="header">wrap</b><code>_.wrap(function, wrapper)</code>
        <br>
        Wraps the first <b>function</b> inside of the <b>wrapper</b> function,
        passing it as the first argument. This allows the <b>wrapper</b> to
        execute code before and after the <b>function</b> runs, adjust the arguments,
        and execute it conditionally.
      </p>
      <pre>var hello = function(name) { return "hello: " + name; };
hello = _.wrap(hello, function(func) {
  return "before, " + func("moe") + ", after";
});
hello();
=&gt; 'before, hello: moe, after'
</pre>

      <p id="negate">
        <b class="header">negate</b><code>_.negate(predicate)</code>
        <br>
        Returns a new negated version of the <b>predicate</b> function.
      </p>
      <pre>var isFalsy = _.negate(Boolean);
_.find([-2, -1, 0, 1, 2], isFalsy);
=&gt; 0
</pre>

      <p id="compose">
        <b class="header">compose</b><code>_.compose(*functions)</code>
        <br>
        Returns the composition of a list of <b>functions</b>, where each function
        consumes the return value of the function that follows. In math terms,
        composing the functions <i>f()</i>, <i>g()</i>, and <i>h()</i> produces
        <i>f(g(h()))</i>.
      </p>
      <pre>var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
var welcome = _.compose(greet, exclaim);
welcome('moe');
=&gt; 'hi: MOE!'
</pre>

      <h2 id="objects">Object Functions</h2>

      <p id="keys">
        <b class="header">keys</b><code>_.keys(object)</code>
        <br>
        Retrieve all the names of the <b>object</b>'s own enumerable properties.
      </p>
      <pre>_.keys({one: 1, two: 2, three: 3});
=&gt; ["one", "two", "three"]
</pre>

      <p id="allKeys">
        <b class="header">allKeys</b><code>_.allKeys(object)</code>
        <br>
        Retrieve <i>all</i> the names of <b>object</b>'s own and inherited properties.
      </p>
      <pre>function Stooge(name) {
  this.name = name;
}
Stooge.prototype.silly = true;
_.allKeys(new Stooge("Moe"));
=&gt; ["name", "silly"]
</pre>

      <p id="values">
        <b class="header">values</b><code>_.values(object)</code>
        <br>
        Return all of the values of the <b>object</b>'s own properties.
      </p>
      <pre>_.values({one: 1, two: 2, three: 3});
=&gt; [1, 2, 3]
</pre>

<p id="mapObject">
        <b class="header">mapObject</b><code>_.mapObject(object, iteratee, [context])</code>
        <br>
        Like <a href="http://underscorejs.org/#map">map</a>, but for objects. Transform the value
        of each property in turn.
      </p>
      <pre>_.mapObject({start: 5, end: 12}, function(val, key) {
  return val + 5;
});
=&gt; {start: 10, end: 17}
</pre>

      <p id="pairs">
        <b class="header">pairs</b><code>_.pairs(object)</code>
        <br>
        Convert an object into a list of <tt>[key, value]</tt> pairs.
      </p>
      <pre>_.pairs({one: 1, two: 2, three: 3});
=&gt; [["one", 1], ["two", 2], ["three", 3]]
</pre>

      <p id="invert">
        <b class="header">invert</b><code>_.invert(object)</code>
        <br>
        Returns a copy of the <b>object</b> where the keys have become the values
        and the values the keys. For this to work, all of your object's values
        should be unique and string serializable.
      </p>
      <pre>_.invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});
=&gt; {Moses: "Moe", Louis: "Larry", Jerome: "Curly"};
</pre>

      <p id="create">
        <b class="header">create</b><code>_.create(prototype, props)</code>
        <br>
        Creates a new object with the given prototype, optionally attaching
        <b>props</b> as <i>own</i> properties. Basically, <tt>Object.create</tt>,
        but without all of the property descriptor jazz.
      </p>
      <pre>var moe = _.create(Stooge.prototype, {name: "Moe"});
</pre>

      <p id="object-functions">
        <b class="header">functions</b><code>_.functions(object)</code>
        <span class="alias">Alias: <b>methods</b></span>
        <br>
        Returns a sorted list of the names of every method in an object —
        that is to say, the name of every function property of the object.
      </p>
      <pre>_.functions(_);
=&gt; ["all", "any", "bind", "bindAll", "clone", "compact", "compose" ...
</pre>

      <p id="findKey">
        <b class="header">findKey</b><code>_.findKey(object, predicate, [context])</code>
        <br>
        Similar to <a href="http://underscorejs.org/#findIndex"><tt>_.findIndex</tt></a> but for keys in objects.
        Returns the <i>key</i> where the <b>predicate</b> truth test
        passes or <i>undefined</i>.
      </p>

      <p id="extend">
        <b class="header">extend</b><code>_.extend(destination, *sources)</code>
        <br>
        Copy all of the properties <strong>in</strong> the <b>source</b> objects over to the
        <b>destination</b> object, and return the <b>destination</b> object.
        It's in-order, so the last source will override properties of the same
        name in previous arguments.
      </p>
      <pre>_.extend({name: 'moe'}, {age: 50});
=&gt; {name: 'moe', age: 50}
</pre>

      <p id="extendOwn">
        <b class="header">extendOwn</b><code>_.extendOwn(destination, *sources)</code>
        <span class="alias">Alias: <b>assign</b></span>
        <br>
        Like <b>extend</b>, but only copies <i>own</i> properties over to the
        destination object.
      </p>

      <p id="pick">
        <b class="header">pick</b><code>_.pick(object, *keys)</code>
        <br>
        Return a copy of the <b>object</b>, filtered to only have values for
        the whitelisted <b>keys</b> (or array of valid keys).  Alternatively
        accepts a predicate indicating which keys to pick.
      </p>
      <pre>_.pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age');
=&gt; {name: 'moe', age: 50}
_.pick({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
  return _.isNumber(value);
});
=&gt; {age: 50}
</pre>

      <p id="omit">
        <b class="header">omit</b><code>_.omit(object, *keys)</code>
        <br>
        Return a copy of the <b>object</b>, filtered to omit the blacklisted
        <b>keys</b> (or array of keys).  Alternatively accepts a predicate
        indicating which keys to omit.
      </p>
      <pre>_.omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid');
=&gt; {name: 'moe', age: 50}
_.omit({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
  return _.isNumber(value);
});
=&gt; {name: 'moe', userid: 'moe1'}
</pre>

      <p id="defaults">
        <b class="header">defaults</b><code>_.defaults(object, *defaults)</code>
        <br>
        Fill in <tt>undefined</tt> properties in <b>object</b> with the first
        value present in the following list of <b>defaults</b> objects.
      </p>
      <pre>var iceCream = {flavor: "chocolate"};
_.defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
=&gt; {flavor: "chocolate", sprinkles: "lots"}
</pre>

      <p id="clone">
        <b class="header">clone</b><code>_.clone(object)</code>
        <br>
        Create a shallow-copied clone of the provided <i>plain</i> <b>object</b>.
        Any nested objects or arrays will be copied by reference, not duplicated.
      </p>
      <pre>_.clone({name: 'moe'});
=&gt; {name: 'moe'};
</pre>

      <p id="tap">
        <b class="header">tap</b><code>_.tap(object, interceptor)</code>
        <br>
        Invokes <b>interceptor</b> with the <b>object</b>, and then returns <b>object</b>.
        The primary purpose of this method is to "tap into" a method chain, in order to perform operations on intermediate results within the chain.
      </p>
      <pre>_.chain([1,2,3,200])
  .filter(function(num) { return num % 2 == 0; })
  .tap(alert)
  .map(function(num) { return num * num })
  .value();
=&gt; // [2, 200] (alerted)
=&gt; [4, 40000]
</pre>

      <p id="has">
        <b class="header">has</b><code>_.has(object, key)</code>
        <br>
        Does the object contain the given key? Identical to
        <tt>object.hasOwnProperty(key)</tt>, but uses a safe reference to the
        <tt>hasOwnProperty</tt> function, in case it's been
        <a href="http://www.devthought.com/2012/01/18/an-object-is-not-a-hash/">overridden accidentally</a>.
      </p>
      <pre>_.has({a: 1, b: 2, c: 3}, "b");
=&gt; true
</pre>

      <p id="property">
        <b class="header">property</b><code>_.property(key)</code>
        <br>
        Returns a function that will itself return the <tt>key</tt>
        property of any passed-in object.
      </p>
      <pre>var stooge = {name: 'moe'};
'moe' === _.property('name')(stooge);
=&gt; true
</pre>

      <p id="propertyOf">
        <b class="header">propertyOf</b><code>_.propertyOf(object)</code>
        <br>
        Inverse of <tt>_.property</tt>. Takes an object and returns a function
        which will return the value of a provided property.
      </p>
      <pre>var stooge = {name: 'moe'};
_.propertyOf(stooge)('name');
=&gt; 'moe'</pre>

      <p id="matcher">
        <b class="header">matcher</b><code>_.matcher(attrs)</code>
        <span class="alias">Alias: <b>matches</b></span>
        <br>
        Returns a predicate function that will tell you if a passed in object
        contains all of the key/value properties present in <b>attrs</b>.
      </p>
      <pre>var ready = _.matcher({selected: true, visible: true});
var readyToGoList = _.filter(list, ready);</pre>

      <p id="isEqual">
        <b class="header">isEqual</b><code>_.isEqual(object, other)</code>
        <br>
        Performs an optimized deep comparison between the two objects, to determine
        if they should be considered equal.
      </p>
      <pre>var stooge = {name: 'moe', luckyNumbers: [13, 27, 34]};
var clone  = {name: 'moe', luckyNumbers: [13, 27, 34]};
stooge == clone;
=&gt; false
_.isEqual(stooge, clone);
=&gt; true
</pre>

      <p id="isMatch">
        <b class="header">isMatch</b><code>_.isMatch(object, properties)</code>
        <br>
        Tells you if the keys and values in <b>properties</b> are contained
        in <b>object</b>.
      </p>
      <pre>var stooge = {name: 'moe', age: 32};
_.isMatch(stooge, {age: 32});
=&gt; true
</pre>

      <p id="isEmpty">
        <b class="header">isEmpty</b><code>_.isEmpty(object)</code>
        <br>
        Returns <i>true</i> if an enumerable <b>object</b> contains no
        values (no enumerable own-properties). For strings and array-like
        objects <tt>_.isEmpty</tt> checks if the length property is 0.
      </p>
      <pre>_.isEmpty([1, 2, 3]);
=&gt; false
_.isEmpty({});
=&gt; true
</pre>

      <p id="isElement">
        <b class="header">isElement</b><code>_.isElement(object)</code>
        <br>
        Returns <i>true</i> if <b>object</b> is a DOM element.
      </p>
      <pre>_.isElement(jQuery('body')[0]);
=&gt; true
</pre>

      <p id="isArray">
        <b class="header">isArray</b><code>_.isArray(object)</code>
        <br>
        Returns <i>true</i> if <b>object</b> is an Array.
      </p>
      <pre>(function(){ return _.isArray(arguments); })();
=&gt; false
_.isArray([1,2,3]);
=&gt; true
</pre>

      <p id="isObject">
        <b class="header">isObject</b><code>_.isObject(value)</code>
        <br>
        Returns <i>true</i> if <b>value</b> is an Object. Note that JavaScript
        arrays and functions are objects, while (normal) strings and numbers are not.
      </p>
      <pre>_.isObject({});
=&gt; true
_.isObject(1);
=&gt; false
</pre>

      <p id="isArguments">
        <b class="header">isArguments</b><code>_.isArguments(object)</code>
        <br>
        Returns <i>true</i> if <b>object</b> is an Arguments object.
      </p>
      <pre>(function(){ return _.isArguments(arguments); })(1, 2, 3);
=&gt; true
_.isArguments([1,2,3]);
=&gt; false
</pre>

      <p id="isFunction">
        <b class="header">isFunction</b><code>_.isFunction(object)</code>
        <br>
        Returns <i>true</i> if <b>object</b> is a Function.
      </p>
      <pre>_.isFunction(alert);
=&gt; true
</pre>

      <p id="isString">
        <b class="header">isString</b><code>_.isString(object)</code>
        <br>
        Returns <i>true</i> if <b>object</b> is a String.
      </p>
      <pre>_.isString("moe");
=&gt; true
</pre>

      <p id="isNumber">
        <b class="header">isNumber</b><code>_.isNumber(object)</code>
        <br>
        Returns <i>true</i> if <b>object</b> is a Number (including <tt>NaN</tt>).
      </p>
      <pre>_.isNumber(8.4 * 5);
=&gt; true
</pre>

      <p id="isFinite">
        <b class="header">isFinite</b><code>_.isFinite(object)</code>
        <br>
        Returns <i>true</i> if <b>object</b> is a finite Number.
      </p>
      <pre>_.isFinite(-101);
=&gt; true

_.isFinite(-Infinity);
=&gt; false
</pre>

      <p id="isBoolean">
        <b class="header">isBoolean</b><code>_.isBoolean(object)</code>
        <br>
        Returns <i>true</i> if <b>object</b> is either <i>true</i> or <i>false</i>.
      </p>
      <pre>_.isBoolean(null);
=&gt; false
</pre>

      <p id="isDate">
        <b class="header">isDate</b><code>_.isDate(object)</code>
        <br>
        Returns <i>true</i> if <b>object</b> is a Date.
      </p>
      <pre>_.isDate(new Date());
=&gt; true
</pre>

      <p id="isRegExp">
        <b class="header">isRegExp</b><code>_.isRegExp(object)</code>
        <br>
        Returns <i>true</i> if <b>object</b> is a RegExp.
      </p>
      <pre>_.isRegExp(/moe/);
=&gt; true
</pre>

      <p id="isError">
        <b class="header">isError</b><code>_.isError(object)</code>
        <br>
        Returns <i>true</i> if <b>object</b> inherits from an Error.
      </p>
      <pre>try {
  throw new TypeError("Example");
} catch (o_O) {
  _.isError(o_O);
}
=&gt; true
</pre>

      <p id="isNaN">
        <b class="header">isNaN</b><code>_.isNaN(object)</code>
        <br>
        Returns <i>true</i> if <b>object</b> is <i>NaN</i>.<br> Note: this is not
        the same as the native <b>isNaN</b> function, which will also return
        true for many other not-number values, such as <tt>undefined</tt>.
      </p>
      <pre>_.isNaN(NaN);
=&gt; true
isNaN(undefined);
=&gt; true
_.isNaN(undefined);
=&gt; false
</pre>

      <p id="isNull">
        <b class="header">isNull</b><code>_.isNull(object)</code>
        <br>
        Returns <i>true</i> if the value of <b>object</b> is <i>null</i>.
      </p>
      <pre>_.isNull(null);
=&gt; true
_.isNull(undefined);
=&gt; false
</pre>

      <p id="isUndefined">
        <b class="header">isUndefined</b><code>_.isUndefined(value)</code>
        <br>
        Returns <i>true</i> if <b>value</b> is <i>undefined</i>.
      </p>
      <pre>_.isUndefined(window.missingVariable);
=&gt; true
</pre>

      <h2 id="utility">Utility Functions</h2>

      <p id="noConflict">
        <b class="header">noConflict</b><code>_.noConflict()</code>
        <br>
        Give control of the <tt>_</tt> variable back to its previous owner. Returns
        a reference to the <b>Underscore</b> object.
      </p>
      <pre>var underscore = _.noConflict();
</pre>

      <p id="identity">
        <b class="header">identity</b><code>_.identity(value)</code>
        <br>
        Returns the same value that is used as the argument. In math:
        <tt>f(x) = x</tt><br>
        This function looks useless, but is used throughout Underscore as
        a default iteratee.
      </p>
      <pre>var stooge = {name: 'moe'};
stooge === _.identity(stooge);
=&gt; true
</pre>

      <p id="constant">
        <b class="header">constant</b><code>_.constant(value)</code>
        <br>
        Creates a function that returns the same value that is used as the
        argument of <tt>_.constant</tt>.
      </p>
      <pre>var stooge = {name: 'moe'};
stooge === _.constant(stooge)();
=&gt; true</pre>

      <p id="noop">
        <b class="header">noop</b><code>_.noop()</code>
        <br>
        Returns <tt>undefined</tt> irrespective of the arguments passed to it.
        Useful as the default for optional callback arguments.
      </p>
      <pre>obj.initialize = _.noop;
</pre>

      <p id="times">
        <b class="header">times</b><code>_.times(n, iteratee, [context])</code>
        <br>
        Invokes the given iteratee function <b>n</b> times. Each invocation of
        <b>iteratee</b> is called with an <tt>index</tt> argument. Produces an
        array of the returned values.
        <br>
        <i>Note: this example uses the <a href="http://underscorejs.org/#oop">object-oriented syntax</a></i>.
      </p>
      <pre>_(3).times(function(n){ genie.grantWishNumber(n); });</pre>

      <p id="random">
        <b class="header">random</b><code>_.random(min, max)</code>
        <br>
        Returns a random integer between <b>min</b> and <b>max</b>, inclusive.
        If you only pass one argument, it will return a number between <tt>0</tt>
        and that number.
      </p>
      <pre>_.random(0, 100);
=&gt; 42</pre>

      <p id="mixin">
        <b class="header">mixin</b><code>_.mixin(object)</code>
        <br>
        Allows you to extend Underscore with your own utility functions. Pass
        a hash of <tt>{name: function}</tt> definitions to have your functions
        added to the Underscore object, as well as the OOP wrapper.
      </p>
      <pre>_.mixin({
  capitalize: function(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  }
});
_("fabio").capitalize();
=&gt; "Fabio"
</pre>

      <p id="iteratee">
        <b class="header">iteratee</b><code>_.iteratee(value, [context])</code>
        <br>
        Generates a callback that can be applied to each element in
        a collection. <tt>_.iteratee</tt> supports a number of shorthand
        syntaxes for common callback use cases. Depending <tt>value</tt>'s type
        <tt>_.iteratee</tt> will return:
      </p>
      <pre>// No value
_.iteratee();
=&gt; _.identity()

// Function
_.iteratee(function(n) { return n * 2; });
=&gt; function(n) { return n * 2; }

// Object
_.iteratee({firstName: 'Chelsea'});
=&gt; _.matcher({firstName: 'Chelsea'});

// Anything else
_.iteratee('firstName');
=&gt; _.property('firstName');</pre>

      <p>
        The following Underscore methods transform their predicates through
        <tt>_.iteratee</tt>: <tt>countBy</tt>, <tt>every</tt>,
        <tt>filter</tt>, <tt>find</tt>, <tt>findIndex</tt>, <tt>findKey</tt>,
        <tt>findLastIndex</tt>, <tt>groupBy</tt>, <tt>indexBy</tt>,
        <tt>map</tt>, <tt>mapObject</tt>, <tt>max</tt>, <tt>min</tt>,
        <tt>partition</tt>, <tt>reject</tt>, <tt>some</tt>, <tt>sortBy</tt>,
        <tt>sortedIndex</tt>, and <tt>uniq</tt>
      </p>

      <p id="uniqueId">
        <b class="header">uniqueId</b><code>_.uniqueId([prefix])</code>
        <br>
        Generate a globally-unique id for client-side models or DOM elements
        that need one. If <b>prefix</b> is passed, the id will be appended to it.
      </p>
      <pre>_.uniqueId('contact_');
=&gt; 'contact_104'</pre>

      <p id="escape">
        <b class="header">escape</b><code>_.escape(string)</code>
        <br>
        Escapes a string for insertion into HTML, replacing
        <tt>&amp;</tt>, <tt>&lt;</tt>, <tt>&gt;</tt>, <tt>"</tt>, <tt>`</tt>, and <tt>'</tt> characters.
      </p>
      <pre>_.escape('Curly, Larry &amp; Moe');
=&gt; "Curly, Larry &amp;amp; Moe"</pre>

      <p id="unescape">
        <b class="header">unescape</b><code>_.unescape(string)</code>
        <br>
        The opposite of <a href="http://underscorejs.org/#escape"><b>escape</b></a>, replaces
        <tt>&amp;amp;</tt>, <tt>&amp;lt;</tt>, <tt>&amp;gt;</tt>,
        <tt>&amp;quot;</tt>, <tt>&amp;#96;</tt> and <tt>&amp;#x27;</tt>
        with their unescaped counterparts.
      </p>
      <pre>_.unescape('Curly, Larry &amp;amp; Moe');
=&gt; "Curly, Larry &amp; Moe"</pre>

      <p id="result">
        <b class="header">result</b><code>_.result(object, property, [defaultValue])</code>
        <br>
        If the value of the named <b>property</b> is a function then invoke it
        with the <b>object</b> as context; otherwise, return it. If a default value
        is provided and the property doesn't exist or is undefined then the default
        will be returned. If <tt>defaultValue</tt> is a function its result will be returned.
      </p>
      <pre>var object = {cheese: 'crumpets', stuff: function(){ return 'nonsense'; }};
_.result(object, 'cheese');
=&gt; "crumpets"
_.result(object, 'stuff');
=&gt; "nonsense"
_.result(object, 'meat', 'ham');
=&gt; "ham"
</pre>

      <p id="now">
        <b class="header">now</b><code>_.now()</code>
        <br>
        Returns an integer timestamp for the current time, using the fastest
        method available in the runtime. Useful for implementing timing/animation
        functions.
      </p>
      <pre>_.now();
=&gt; 1392066795351
</pre>

      <p id="template">
        <b class="header">template</b><code>_.template(templateString, [settings])</code>
        <br>
        Compiles JavaScript templates into functions that can be evaluated
        for rendering. Useful for rendering complicated bits of HTML from JSON
        data sources. Template functions can both interpolate values, using
        <tt>&lt;%= … %&gt;</tt>, as well as execute arbitrary JavaScript code, with
        <tt>&lt;% … %&gt;</tt>. If you wish to interpolate a value, and have
        it be HTML-escaped, use <tt>&lt;%- … %&gt;</tt>. When you evaluate a
        template function, pass in a <b>data</b> object that has properties
        corresponding to the template's free variables. The <b>settings</b> argument
        should be a hash containing any <tt>_.templateSettings</tt> that should be overridden.
      </p>

      <pre>var compiled = _.template("hello: &lt;%= name %&gt;");
compiled({name: 'moe'});
=&gt; "hello: moe"

var template = _.template("&lt;b&gt;&lt;%- value %&gt;&lt;/b&gt;");
template({value: '&lt;script&gt;'});
=&gt; "&lt;b&gt;&amp;lt;script&amp;gt;&lt;/b&gt;"</pre>

      <p>
        You can also use <tt>print</tt> from within JavaScript code.  This is
        sometimes more convenient than using <tt>&lt;%= ... %&gt;</tt>.
      </p>

      <pre>var compiled = _.template("&lt;% print('Hello ' + epithet); %&gt;");
compiled({epithet: "stooge"});
=&gt; "Hello stooge"</pre>

      <p>
        If ERB-style delimiters aren't your cup of tea, you can change Underscore's
        template settings to use different symbols to set off interpolated code.
        Define an <b>interpolate</b> regex to match expressions that should be
        interpolated verbatim, an <b>escape</b> regex to match expressions that should
        be inserted after being HTML-escaped, and an <b>evaluate</b> regex to match
        expressions that should be evaluated without insertion into the resulting
        string. You may define or omit any combination of the three.
        For example, to perform
        <a href="https://github.com/janl/mustache.js#readme">Mustache.js</a>-style
        templating:
      </p>

      <pre>_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var template = _.template("Hello {{ name }}!");
template({name: "Mustache"});
=&gt; "Hello Mustache!"</pre>

      <p>
        By default, <b>template</b> places the values from your data in the local scope
        via the <tt>with</tt> statement. However, you can specify a single variable name
        with the <b>variable</b> setting. This can significantly improve the speed
        at which a template is able to render.
      </p>

      <pre>_.template("Using 'with': &lt;%= data.answer %&gt;", {variable: 'data'})({answer: 'no'});
=&gt; "Using 'with': no"</pre>

      <p>
        Precompiling your templates can be a big help when debugging errors you can't
        reproduce. This is because precompiled templates can provide line numbers and
        a stack trace, something that is not possible when compiling templates on the client.
        The <b>source</b> property is available on the compiled template
        function for easy precompilation.
      </p>

      <pre>&lt;script&gt;
  JST.project = &lt;%= _.template(jstText).source %&gt;;
&lt;/script&gt;</pre>


      <h2 id="oop">Object-Oriented Style</h2>

      <p>
        You can use Underscore in either an object-oriented or a functional style,
        depending on your preference. The following two lines of code are
        identical ways to double a list of numbers.
      </p>

    <pre>_.map([1, 2, 3], function(n){ return n * 2; });
_([1, 2, 3]).map(function(n){ return n * 2; });</pre>

      <h2 id="chaining">Chaining</h2>

      <p>
        Calling <tt>chain</tt> will cause all future method calls to return
        wrapped objects. When you've finished the computation, call
        <tt>value</tt> to retrieve the final value. Here's an example of chaining
        together a <b>map/flatten/reduce</b>, in order to get the word count of
        every word in a song.
      </p>

<pre>var lyrics = [
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

=&gt; {lumberjack: 2, all: 4, night: 2 ... }</pre>

      <p>
        In addition, the
        <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/prototype">Array prototype's methods</a>
        are proxied through the chained Underscore object, so you can slip a
        <tt>reverse</tt> or a <tt>push</tt> into your chain, and continue to
        modify the array.
      </p>

      <p id="chain">
        <b class="header">chain</b><code>_.chain(obj)</code>
        <br>
        Returns a wrapped object. Calling methods on this object will continue
        to return wrapped objects until <tt>value</tt> is called.
      </p>
      <pre>var stooges = [{name: 'curly', age: 25}, {name: 'moe', age: 21}, {name: 'larry', age: 23}];
var youngest = _.chain(stooges)
  .sortBy(function(stooge){ return stooge.age; })
  .map(function(stooge){ return stooge.name + ' is ' + stooge.age; })
  .first()
  .value();
=&gt; "moe is 21"
</pre>

      <p id="value">
        <b class="header">value</b><code>_.chain(obj).value()</code>
        <br>
        Extracts the value of a wrapped object.
      </p>
      <pre>_.chain([1, 2, 3]).reverse().value();
=&gt; [3, 2, 1]
</pre>

      <h2 id="links">Links &amp; Suggested Reading</h2>

      <p>
        The Underscore documentation is also available in
        <a href="http://learning.github.io/underscore/">Simplified Chinese</a>.
      </p>

      <p>
        <a href="http://mirven.github.io/underscore.lua/">Underscore.lua</a>,
        a Lua port of the functions that are applicable in both languages.
        Includes OOP-wrapping and chaining.
        (<a href="https://github.com/mirven/underscore.lua">source</a>)
      </p>

      <p>
        <a href="http://www.dollarswift.org/">Dollar.swift</a>, a Swift port
        of many of the Underscore.js functions and more.
        (<a href="https://github.com/ankurp/Dollar.swift">source</a>)
      </p>

      <p>
        <a href="http://underscorem.org/">Underscore.m</a>, an Objective-C port
        of many of the Underscore.js functions, using a syntax that encourages
        chaining.
        (<a href="https://github.com/robb/Underscore.m">source</a>)
      </p>

      <p>
        <a href="http://kmalakoff.github.io/_.m/">_.m</a>, an alternative
        Objective-C port that tries to stick a little closer to the original
        Underscore.js API.
        (<a href="https://github.com/kmalakoff/_.m">source</a>)
      </p>

      <p>
        <a href="https://github.com/bdelespierre/underscore.php">Underscore.php</a>,
        a PHP port of the functions that are applicable in both languages.
        Tailored for PHP 5.4 and made with data-type tolerance in mind.
        (<a href="https://github.com/bdelespierre/underscore.php">source</a>)
      </p>

      <p>
        <a href="http://vti.github.io/underscore-perl/">Underscore-perl</a>,
        a Perl port of many of the Underscore.js functions,
        aimed at on Perl hashes and arrays.
        (<a href="https://github.com/vti/underscore-perl">source</a>)
      </p>

      <p>
        <a href="http://russplaysguitar.github.io/UnderscoreCF/">Underscore.cfc</a>,
        a Coldfusion port of many of the Underscore.js functions.
        (<a href="https://github.com/russplaysguitar/underscorecf">source</a>)
      </p>

      <p>
        <a href="http://epeli.github.io/underscore.string/">Underscore.string</a>,
        an Underscore extension that adds functions for string-manipulation:
        <tt>trim</tt>, <tt>startsWith</tt>, <tt>contains</tt>, <tt>capitalize</tt>,
        <tt>reverse</tt>, <tt>sprintf</tt>, and more.
      </p>

      <p>
        <a href="http://javadev.github.io/underscore-java/">Underscore-java</a>,
        a java port of the functions that are applicable in both languages.
        Includes OOP-wrapping and chaining.
        (<a href="https://github.com/javadev/underscore-java">source</a>)
      </p>

      <p>
        Ruby's <a href="http://ruby-doc.org/core/classes/Enumerable.html">Enumerable</a> module.
      </p>

      <p>
        <a href="http://prototypejs.org/">Prototype.js</a>, which provides
        JavaScript with collection functions in the manner closest to Ruby's Enumerable.
      </p>

      <p>
        Oliver Steele's
        <a href="http://osteele.com/sources/javascript/functional/">Functional JavaScript</a>,
        which includes comprehensive higher-order function support as well as string lambdas.
      </p>

      <p>
        Michael Aufreiter's <a href="https://github.com/substance/data">Data.js</a>,
        a data manipulation + persistence library for JavaScript.
      </p>

      <p>
        Python's <a href="http://docs.python.org/library/itertools.html">itertools</a>.
      </p>

      <p>
        <a href="http://toolz.readthedocs.org/">PyToolz</a>, a Python port
        that extends itertools and functools to include much of the
        Underscore API.
      </p>

      <p>
        <a href="https://github.com/Suor/funcy">Funcy</a>, a practical
        collection of functional helpers for Python, partially inspired by Underscore.
      </p>

      <h2 id="changelog">Change Log</h2>

      <p id="1.8.3">
        <b class="header">1.8.3</b> — <small><i>April 2, 2015</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.8.2...1.8.3">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.8.3/index.html">Docs</a><br>
        </p><ul>
          <li>
            Adds an <tt>_.create</tt> method, as a slimmed down version of
            <tt>Object.create</tt>.
          </li>
          <li>
            Works around an iOS bug that can improperly cause <tt>isArrayLike</tt>
            to be JIT-ed. Also fixes a bug when passing <tt>0</tt> to <tt>isArrayLike</tt>.
          </li>
        </ul>
      <p></p>

      <p id="1.8.2">
        <b class="header">1.8.2</b> — <small><i>Feb. 22, 2015</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.8.1...1.8.2">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.8.2/index.html">Docs</a><br>
        </p><ul>
          <li>
            Restores the previous old-Internet-Explorer edge cases changed in
            1.8.1.
          </li>
          <li>
            Adds a <tt>fromIndex</tt> argument to <tt>_.contains</tt>.
          </li>
        </ul>
      <p></p>

      <p id="1.8.1">
        <b class="header">1.8.1</b> — <small><i>Feb. 19, 2015</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.8.0...1.8.1">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.8.1/index.html">Docs</a><br>
        </p><ul>
          <li>
            Fixes/changes some old-Internet Explorer and related edge case
            behavior. Test your app with Underscore 1.8.1 in an old IE and let
            us know how it's doing...
          </li>
        </ul>
      <p></p>

      <p id="1.8.0">
        <b class="header">1.8.0</b> — <small><i>Feb. 19, 2015</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.7.0...1.8.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.8.0/index.html">Docs</a><br>
        </p><ul>
          <li>
            Added <tt>_.mapObject</tt>, which is similar to <tt>_.map</tt>, but just
            for the values in your object. (A real crowd pleaser.)
          </li>
          <li>
            Added <tt>_.allKeys</tt> which returns <i>all</i> the enumerable property
            names on an object.
          </li>
          <li>
            Reverted a 1.7.0 change where <tt>_.extend</tt> only copied "own"
            properties. Hopefully this will un-break you — if it breaks you
            again, I apologize.
          </li>
          <li>
            Added <tt>_.extendOwn</tt> — a less-useful form of <tt>_.extend</tt> that
            only copies over "own" properties.
          </li>
          <li>
            Added <tt>_.findIndex</tt> and <tt>_.findLastIndex</tt> functions,
            which nicely complement their twin-twins <tt>_.indexOf</tt> and <tt>_.lastIndexOf</tt>.
          </li>
          <li>
            Added an <tt>_.isMatch</tt> predicate function that tells you if an
            object matches key-value properties. A kissing cousin of
            <tt>_.isEqual</tt> and <tt>_.matcher</tt>.
          </li>
          <li>
            Added an <tt>_.isError</tt> function.
          </li>
          <li>
            Restored the <tt>_.unzip</tt> function as the inverse of <tt>zip</tt>.
            Flip-flopping. I know.
          </li>
          <li>
            <tt>_.result</tt> now takes an optional fallback value (or function
            that provides the fallback value).
          </li>
          <li>
            Added the <tt>_.propertyOf</tt> function generator as a mirror-world
            version of <tt>_.property</tt>.
          </li>
          <li>
            Deprecated <tt>_.matches</tt>. It's now known by a more harmonious
            name — <tt>_.matcher</tt>.
          </li>
          <li>
            Various and diverse code simplifications, changes for improved
            cross-platform compatibility, and edge case bug fixes.
          </li>
        </ul>
      <p></p>

      <p id="1.7.0">
        <b class="header">1.7.0</b> — <small><i>August 26, 2014</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.6.0...1.7.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.7.0/index.html">Docs</a><br>
        </p><ul>
          <li>
            For consistency and speed across browsers, Underscore now ignores
            native array methods for <tt>forEach</tt>, <tt>map</tt>, <tt>reduce</tt>,
            <tt>reduceRight</tt>, <tt>filter</tt>, <tt>every</tt>, <tt>some</tt>,
            <tt>indexOf</tt>, and <tt>lastIndexOf</tt>. "Sparse" arrays are
            officially dead in Underscore.
          </li>
          <li>
            Added <tt>_.iteratee</tt> to customize the iterators used by collection
            functions. Many Underscore methods will take a string argument for easier
            <tt>_.property</tt>-style lookups, an object for <tt>_.where</tt>-style
            filtering, or a function as a custom callback.
          </li>
          <li>
            Added <tt>_.before</tt> as a counterpart to <tt>_.after</tt>.
          </li>
          <li>
            Added <tt>_.negate</tt> to invert the truth value of a passed-in
            predicate.
          </li>
          <li>
            Added <tt>_.noop</tt> as a handy empty placeholder function.
          </li>
          <li>
            <tt>_.isEmpty</tt> now works with <tt>arguments</tt> objects.
          </li>
          <li>
            <tt>_.has</tt> now guards against nullish objects.
          </li>
          <li>
            <tt>_.omit</tt> can now take an iteratee function.
          </li>
          <li>
            <tt>_.partition</tt> is now called with <tt>index</tt> and <tt>object</tt>.
          </li>
          <li>
            <tt>_.matches</tt> creates a shallow clone of your object and only iterates
            over own properties.
          </li>
          <li>
            Aligning better with the forthcoming ECMA6 <tt>Object.assign</tt>,
            <tt>_.extend</tt> only iterates over the object's own properties.
          </li>
          <li>
            Falsey guards are no longer needed in <tt>_.extend</tt> and
            <tt>_.defaults</tt>—if the passed in argument isn't a JavaScript
            object it's just returned.
          </li>
          <li>
            Fixed a few edge cases in <tt>_.max</tt> and <tt>_.min</tt> to
            handle arrays containing <tt>NaN</tt> (like strings or other objects)
            and <tt>Infinity</tt> and <tt>-Infinity</tt>.
          </li>
          <li>
            Override base methods like <tt>each</tt> and <tt>some</tt>
            and they'll be used internally by other Underscore functions too.
          </li>
          <li>
            The escape functions handle backticks (<tt>`</tt>), to deal with an
            IE ≤ 8 bug.
          </li>
          <li>
            For consistency, <tt>_.union</tt> and <tt>_.difference</tt> now
            only work with arrays and not variadic args.
          </li>
          <li>
            <tt>_.memoize</tt> exposes the cache of memoized values as a property
            on the returned function.
          </li>
          <li>
            <tt>_.pick</tt> accepts <tt>iteratee</tt> and <tt>context</tt>
            arguments for a more advanced callback.
          </li>
          <li>
            Underscore templates no longer accept an initial <tt>data</tt> object.
            <tt>_.template</tt> always returns a function now.
          </li>
          <li>
            Optimizations and code cleanup aplenty.
          </li>
        </ul>
      <p></p>

      <p id="1.6.0">
        <b class="header">1.6.0</b> — <small><i>February 10, 2014</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.5.2...1.6.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.6.0/index.html">Docs</a><br>
        </p><ul>
          <li>
            Underscore now registers itself for AMD (Require.js), Bower and Component,
            as well as being a CommonJS module and a regular (Java)Script.
            An ugliness, but perhaps a necessary one.
          </li>
          <li>
            Added <tt>_.partition</tt>, a way to split a collection into two lists
            of results — those that pass and those that fail a particular predicate.
          </li>
          <li>
            Added <tt>_.property</tt>, for easy creation of iterators that pull
            specific properties from objects. Useful in conjunction with other
            Underscore collection functions.
          </li>
          <li>
            Added <tt>_.matches</tt>, a function that will give you a predicate
            that can be used to tell if a given object matches a list of specified
            key/value properties.
          </li>
          <li>
            Added <tt>_.constant</tt>, as a higher-order <tt>_.identity</tt>.
          </li>
          <li>
            Added <tt>_.now</tt>, an optimized way to get a timestamp — used
            internally to speed up <tt>debounce</tt> and <tt>throttle</tt>.
          </li>
          <li>
            The <tt>_.partial</tt> function may now be used to partially apply
            any of its arguments, by passing <tt>_</tt> wherever you'd like a
            placeholder variable, to be filled-in later.
          </li>
          <li>
            The <tt>_.each</tt> function now returns a reference to the list for chaining.
          </li>
          <li>
            The <tt>_.keys</tt> function now returns an empty array for
            non-objects instead of throwing.
          </li>
          <li>
            … and more miscellaneous refactoring.
          </li>
        </ul>
      <p></p>

      <p id="1.5.2">
        <b class="header">1.5.2</b> — <small><i>September 7, 2013</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.5.1...1.5.2">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.5.2/index.html">Docs</a><br>
        </p><ul>
          <li>
            Added an <tt>indexBy</tt> function, which fits in alongside its
            cousins, <tt>countBy</tt> and <tt>groupBy</tt>.
          </li>
          <li>
            Added a <tt>sample</tt> function, for sampling random elements from
            arrays.
          </li>
          <li>
            Some optimizations relating to functions that can be implemented
            in terms of <tt>_.keys</tt> (which includes, significantly,
            <tt>each</tt> on objects). Also for <tt>debounce</tt> in a tight loop.
          </li>
          <li>
            The <tt>_.escape</tt> function no longer escapes '/'.
          </li>
        </ul>
      <p></p>

      <p id="1.5.1">
        <b class="header">1.5.1</b> — <small><i>July 8, 2013</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.5.0...1.5.1">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.5.1/index.html">Docs</a><br>
        </p><ul>
          <li>
            Removed <tt>unzip</tt>, as it's simply the application of <tt>zip</tt>
            to an array of arguments. Use <tt>_.zip.apply(_, list)</tt> to
            transpose instead.
          </li>
        </ul>
      <p></p>

      <p id="1.5.0">
        <b class="header">1.5.0</b> — <small><i>July 6, 2013</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.4.4...1.5.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.5.0/index.html">Docs</a><br>
        </p><ul>
          <li>
            Added a new <tt>unzip</tt> function, as the inverse of <tt>_.zip</tt>.
          </li>
          <li>
            The <tt>throttle</tt> function now takes an <tt>options</tt> argument,
            allowing you to disable execution of the throttled function on either
            the <b>leading</b> or <b>trailing</b> edge.
          </li>
          <li>
            A source map is now supplied for easier debugging of the minified
            production build of Underscore.
          </li>
          <li>
            The <tt>defaults</tt> function now only overrides <tt>undefined</tt>
            values, not <tt>null</tt> ones.
          </li>
          <li>
            Removed the ability to call <tt>_.bindAll</tt> with no method name
            arguments. It's pretty much always wiser to white-list the names of
            the methods you'd like to bind.
          </li>
          <li>
            Removed the ability to call <tt>_.after</tt> with an invocation count
            of zero. The minimum number of calls is (naturally) now <tt>1</tt>.
          </li>
        </ul>
      <p></p>

      <p id="1.4.4">
        <b class="header">1.4.4</b> — <small><i>January 30, 2013</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.4.3...1.4.4">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.4.4/index.html">Docs</a><br>
        </p><ul>
          <li>
            Added <tt>_.findWhere</tt>, for finding the first element in a list
            that matches a particular set of keys and values.
          </li>
          <li>
            Added <tt>_.partial</tt>, for partially applying a function <i>without</i>
            changing its dynamic reference to <tt>this</tt>.
          </li>
          <li>
            Simplified <tt>bind</tt> by removing some edge cases involving
            constructor functions. In short: don't <tt>_.bind</tt> your
            constructors.
          </li>
          <li>
            A minor optimization to <tt>invoke</tt>.
          </li>
          <li>
            Fix bug in the minified version due to the minifier incorrectly
            optimizing-away <tt>isFunction</tt>.
          </li>
        </ul>
      <p></p>

      <p id="1.4.3">
        <b class="header">1.4.3</b> — <small><i>December 4, 2012</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.4.2...1.4.3">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.4.3/index.html">Docs</a><br>
        </p><ul>
          <li>
            Improved Underscore compatibility with Adobe's JS engine that can be
            used to script Illustrator, Photoshop, and friends.
          </li>
          <li>
            Added a default <tt>_.identity</tt> iterator to <tt>countBy</tt> and
            <tt>groupBy</tt>.
          </li>
          <li>
            The <tt>uniq</tt> function can now take <tt>array, iterator, context</tt>
            as the argument list.
          </li>
          <li>
            The <tt>times</tt> function now returns the mapped array of iterator
            results.
          </li>
          <li>
            Simplified and fixed bugs in <tt>throttle</tt>.
          </li>
        </ul>
      <p></p>

      <p id="1.4.2">
        <b class="header">1.4.2</b> — <small><i>October 6, 2012</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.4.1...1.4.2">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.4.2/index.html">Docs</a><br>
        </p><ul>
          <li>
            For backwards compatibility, returned to pre-1.4.0 behavior when
            passing <tt>null</tt> to iteration functions. They now become no-ops
            again.
          </li>
        </ul>
      <p></p>

      <p id="1.4.1">
        <b class="header">1.4.1</b> — <small><i>October 1, 2012</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.4.0...1.4.1">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.4.1/index.html">Docs</a><br>
        </p><ul>
          <li>
            Fixed a 1.4.0 regression in the <tt>lastIndexOf</tt> function.
          </li>
        </ul>
      <p></p>

      <p id="1.4.0">
        <b class="header">1.4.0</b> — <small><i>September 27, 2012</i></small>  — <a href="https://github.com/jashkenas/underscore/compare/1.3.3...1.4.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.4.0/index.html">Docs</a><br>
        </p><ul>
          <li>
            Added a <tt>pairs</tt> function, for turning a JavaScript object
            into <tt>[key, value]</tt> pairs ... as well as an <tt>object</tt>
            function, for converting an array of <tt>[key, value]</tt> pairs
            into an object.
          </li>
          <li>
            Added a <tt>countBy</tt> function, for counting the number of objects
            in a list that match a certain criteria.
          </li>
          <li>
            Added an <tt>invert</tt> function, for performing a simple inversion
            of the keys and values in an object.
          </li>
          <li>
            Added a <tt>where</tt> function, for easy cases of filtering a list
            for objects with specific values.
          </li>
          <li>
            Added an <tt>omit</tt> function, for filtering an object to remove
            certain keys.
          </li>
          <li>
            Added a <tt>random</tt> function, to return a random number in a
            given range.
          </li>
          <li>
            <tt>_.debounce</tt>'d functions now return their last updated value,
            just like <tt>_.throttle</tt>'d functions do.
          </li>
          <li>
            The <tt>sortBy</tt> function now runs a stable sort algorithm.
          </li>
          <li>
            Added the optional <tt>fromIndex</tt> option to <tt>indexOf</tt> and
            <tt>lastIndexOf</tt>.
          </li>
          <li>
            "Sparse" arrays are no longer supported in Underscore iteration
            functions. Use a <tt>for</tt> loop instead (or better yet, an object).
          </li>
          <li>
            The <tt>min</tt> and <tt>max</tt> functions may now be called on
            <i>very</i> large arrays.
          </li>
          <li>
            Interpolation in templates now represents <tt>null</tt> and
            <tt>undefined</tt> as the empty string.
          </li>
          <li>
            <del>Underscore iteration functions no longer accept <tt>null</tt> values
            as a no-op argument. You'll get an early error instead.</del>
          </li>
          <li>
            A number of edge-cases fixes and tweaks, which you can spot in the
            <a href="https://github.com/jashkenas/underscore/compare/1.3.3...1.4.0">diff</a>.
            Depending on how you're using Underscore, <b>1.4.0</b> may be more
            backwards-incompatible than usual — please test when you upgrade.
          </li>
        </ul>
      <p></p>

      <p id="1.3.3">
        <b class="header">1.3.3</b> — <small><i>April 10, 2012</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.3.1...1.3.3">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.3.3/index.html">Docs</a><br>
        </p><ul>
          <li>
            Many improvements to <tt>_.template</tt>, which now provides the
            <tt>source</tt> of the template function as a property, for potentially
            even more efficient pre-compilation on the server-side. You may now
            also set the <tt>variable</tt> option when creating a template,
            which will cause your passed-in data to be made available under the
            variable you named, instead of using a <tt>with</tt> statement —
            significantly improving the speed of rendering the template.
          </li>
          <li>
            Added the <tt>pick</tt> function, which allows you to filter an
            object literal with a whitelist of allowed property names.
          </li>
          <li>
            Added the <tt>result</tt> function, for convenience when working
            with APIs that allow either functions or raw properties.
          </li>
          <li>
            Added the <tt>isFinite</tt> function, because sometimes knowing that
            a value is a number just ain't quite enough.
          </li>
          <li>
            The <tt>sortBy</tt> function may now also be passed the string name
            of a property to use as the sort order on each object.
          </li>
          <li>
            Fixed <tt>uniq</tt> to work with sparse arrays.
          </li>
          <li>
            The <tt>difference</tt> function now performs a shallow flatten
            instead of a deep one when computing array differences.
          </li>
          <li>
            The <tt>debounce</tt> function now takes an <tt>immediate</tt>
            parameter, which will cause the callback to fire on the leading
            instead of the trailing edge.
          </li>
        </ul>
      <p></p>

      <p id="1.3.1">
        <b class="header">1.3.1</b> — <small><i>January 23, 2012</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.3.0...1.3.1">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.3.1/index.html">Docs</a><br>
        </p><ul>
          <li>
            Added an <tt>_.has</tt> function, as a safer way to use <tt>hasOwnProperty</tt>.
          </li>
          <li>
            Added <tt>_.collect</tt> as an alias for <tt>_.map</tt>. Smalltalkers, rejoice.
          </li>
          <li>
            Reverted an old change so that <tt>_.extend</tt> will correctly copy
            over keys with undefined values again.
          </li>
          <li>
            Bugfix to stop escaping slashes within interpolations in <tt>_.template</tt>.
          </li>
        </ul>
      <p></p>

      <p id="1.3.0">
        <b class="header">1.3.0</b> — <small><i>January 11, 2012</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.2.4...1.3.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.3.0/index.html">Docs</a><br>
        </p><ul>
          <li>
            Removed AMD (RequireJS) support from Underscore. If you'd like to use
            Underscore with RequireJS, you can load it as a normal script, wrap
            or patch your copy, or download a forked version.
          </li>
        </ul>
      <p></p>

      <p id="1.2.4">
        <b class="header">1.2.4</b> — <small><i>January 4, 2012</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.2.3...1.2.4">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.2.4/index.html">Docs</a><br>
        </p><ul>
          <li>
            You now can (and probably should, as it's simpler)
            write <tt>_.chain(list)</tt>
            instead of <tt>_(list).chain()</tt>.
          </li>
          <li>
            Fix for escaped characters in Underscore templates, and for supporting
            customizations of <tt>_.templateSettings</tt> that only define one or
            two of the required regexes.
          </li>
          <li>
            Fix for passing an array as the first argument to an <tt>_.wrap</tt>'d function.
          </li>
          <li>
            Improved compatibility with ClojureScript, which adds a <tt>call</tt>
            function to <tt>String.prototype</tt>.
          </li>
        </ul>
      <p></p>

      <p id="1.2.3">
        <b class="header">1.2.3</b> — <small><i>December 7, 2011</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.2.2...1.2.3">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.2.3/index.html">Docs</a><br>
        </p><ul>
          <li>
            Dynamic scope is now preserved for compiled <tt>_.template</tt> functions,
            so you can use the value of <tt>this</tt> if you like.
          </li>
          <li>
            Sparse array support of <tt>_.indexOf</tt>, <tt>_.lastIndexOf</tt>.
          </li>
          <li>
            Both <tt>_.reduce</tt> and <tt>_.reduceRight</tt> can now be passed an
            explicitly <tt>undefined</tt> value. (There's no reason why you'd
            want to do this.)
          </li>
        </ul>
      <p></p>

      <p id="1.2.2">
        <b class="header">1.2.2</b> — <small><i>November 14, 2011</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.2.1...1.2.2">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.2.1/index.html">Docs</a><br>
        </p><ul>
          <li>
            Continued tweaks to <tt>_.isEqual</tt> semantics. Now JS primitives are
            considered equivalent to their wrapped versions, and arrays are compared
            by their numeric properties only <small>(#351)</small>.
          </li>
          <li>
            <tt>_.escape</tt> no longer tries to be smart about not double-escaping
            already-escaped HTML entities. Now it just escapes regardless <small>(#350)</small>.
          </li>
          <li>
            In <tt>_.template</tt>, you may now leave semicolons out of evaluated
            statements if you wish: <tt>&lt;% }) %&gt;</tt> <small>(#369)</small>.
          </li>
          <li>
            <tt>_.after(callback, 0)</tt> will now trigger the callback immediately,
            making "after" easier to use with asynchronous APIs <small>(#366)</small>.
          </li>
        </ul>
      <p></p>

      <p id="1.2.1">
        <b class="header">1.2.1</b> — <small><i>October 24, 2011</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.2.0...1.2.1">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.2.1/index.html">Docs</a><br>
        </p><ul>
          <li>
            Several important bug fixes for <tt>_.isEqual</tt>, which should now
            do better on mutated Arrays, and on non-Array objects with
            <tt>length</tt> properties. <small>(#329)</small>
          </li>
          <li>
            <a href="https://github.com/jrburke">James Burke</a>
            contributed Underscore exporting for AMD module loaders, and
            <a href="https://github.com/tonylukasavage">Tony Lukasavage</a>
            for Appcelerator Titanium.
            <small>(#335, #338)</small>
          </li>
          <li>
            You can now <tt>_.groupBy(list, 'property')</tt> as a shortcut for
            grouping values by a particular common property.
          </li>
          <li>
            <tt>_.throttle</tt>'d functions now fire immediately upon invocation,
            and are rate-limited thereafter <small>(#170, #266)</small>.
          </li>
          <li>
            Most of the <tt>_.is[Type]</tt> checks no longer ducktype.
          </li>
          <li>
            The <tt>_.bind</tt> function now also works on constructors, a-la
            ES5 ... but you would never want to use <tt>_.bind</tt> on a
            constructor function.
          </li>
          <li>
            <tt>_.clone</tt> no longer wraps non-object types in Objects.
          </li>
          <li>
            <tt>_.find</tt> and <tt>_.filter</tt> are now the preferred names for
            <tt>_.detect</tt> and <tt>_.select</tt>.
          </li>
        </ul>
      <p></p>

      <p id="1.2.0">
        <b class="header">1.2.0</b> — <small><i>October 5, 2011</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.1.7...1.2.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.2.0/index.html">Docs</a><br>
        </p><ul>
          <li>
            The <tt>_.isEqual</tt> function now
            supports true deep equality comparisons, with checks for cyclic structures,
            thanks to Kit Cambridge.
          </li>
          <li>
            Underscore templates now support HTML escaping interpolations, using
            <tt>&lt;%- ... %&gt;</tt> syntax.
          </li>
          <li>
            Ryan Tenney contributed <tt>_.shuffle</tt>, which uses a modified
            Fisher-Yates to give you a shuffled copy of an array.
          </li>
          <li>
            <tt>_.uniq</tt> can now be passed an optional iterator, to determine by
            what criteria an object should be considered unique.
          </li>
          <li>
            <tt>_.last</tt> now takes an optional argument which will return the last
            N elements of the list.
          </li>
          <li>
            A new <tt>_.initial</tt> function was added, as a mirror of <tt>_.rest</tt>,
            which returns all the initial values of a list (except the last N).
          </li>
        </ul>
      <p></p>

      <p id="1.1.7">
        <b class="header">1.1.7</b> — <small><i>July 13, 2011</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.1.6...1.1.7">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.1.7/index.html">Docs</a><br>
        Added <tt>_.groupBy</tt>, which aggregates a collection into groups of like items.
        Added <tt>_.union</tt> and <tt>_.difference</tt>, to complement the
        (re-named) <tt>_.intersection</tt>.
        Various improvements for support of sparse arrays.
        <tt>_.toArray</tt> now returns a clone, if directly passed an array.
        <tt>_.functions</tt> now also returns the names of functions that are present
        in the prototype chain.
      </p>

      <p id="1.1.6">
        <b class="header">1.1.6</b> — <small><i>April 18, 2011</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.1.5...1.1.6">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.1.6/index.html">Docs</a><br>
        Added <tt>_.after</tt>, which will return a function that only runs after
        first being called a specified number of times.
        <tt>_.invoke</tt> can now take a direct function reference.
        <tt>_.every</tt> now requires an iterator function to be passed, which
        mirrors the ES5 API.
        <tt>_.extend</tt> no longer copies keys when the value is undefined.
        <tt>_.bind</tt> now errors when trying to bind an undefined value.
      </p>

      <p id="1.1.5">
        <b class="header">1.1.5</b> — <small><i>March 20, 2011</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.1.4...1.1.5">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.1.5/index.html">Docs</a><br>
        Added an <tt>_.defaults</tt> function, for use merging together JS objects
        representing default options.
        Added an <tt>_.once</tt> function, for manufacturing functions that should
        only ever execute a single time.
        <tt>_.bind</tt> now delegates to the native ES5 version,
        where available.
        <tt>_.keys</tt> now throws an error when used on non-Object values, as in
        ES5.
        Fixed a bug with <tt>_.keys</tt> when used over sparse arrays.
      </p>

      <p id="1.1.4">
        <b class="header">1.1.4</b> — <small><i>January 9, 2011</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.1.3...1.1.4">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.1.4/index.html">Docs</a><br>
        Improved compliance with ES5's Array methods when passing <tt>null</tt>
        as a value. <tt>_.wrap</tt> now correctly sets <tt>this</tt> for the
        wrapped function. <tt>_.indexOf</tt> now takes an optional flag for
        finding the insertion index in an array that is guaranteed to already
        be sorted. Avoiding the use of <tt>.callee</tt>, to allow <tt>_.isArray</tt>
        to work properly in ES5's strict mode.
      </p>

      <p id="1.1.3">
        <b class="header">1.1.3</b> — <small><i>December 1, 2010</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.1.2...1.1.3">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.1.3/index.html">Docs</a><br>
        In CommonJS, Underscore may now be required with just: <br>
        <tt>var _ = require("underscore")</tt>.
        Added <tt>_.throttle</tt> and <tt>_.debounce</tt> functions.
        Removed <tt>_.breakLoop</tt>, in favor of an ES5-style un-<i>break</i>-able
        each implementation — this removes the try/catch, and you'll now have
        better stack traces for exceptions that are thrown within an Underscore iterator.
        Improved the <b>isType</b> family of functions for better interoperability
        with Internet Explorer host objects.
        <tt>_.template</tt> now correctly escapes backslashes in templates.
        Improved <tt>_.reduce</tt> compatibility with the ES5 version:
        if you don't pass an initial value, the first item in the collection is used.
        <tt>_.each</tt> no longer returns the iterated collection, for improved
        consistency with ES5's <tt>forEach</tt>.
      </p>

      <p id="1.1.2">
        <b class="header">1.1.2</b> — <small><i>October 15, 2010</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.1.1...1.1.2">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.1.2/index.html">Docs</a><br>
        Fixed <tt>_.contains</tt>, which was mistakenly pointing at
        <tt>_.intersect</tt> instead of <tt>_.include</tt>, like it should
        have been. Added <tt>_.unique</tt> as an alias for <tt>_.uniq</tt>.
      </p>

      <p id="1.1.1">
        <b class="header">1.1.1</b> — <small><i>October 5, 2010</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.1.0...1.1.1">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.1.1/index.html">Docs</a><br>
        Improved the speed of <tt>_.template</tt>, and its handling of multiline
        interpolations. Ryan Tenney contributed optimizations to many Underscore
        functions. An annotated version of the source code is now available.
      </p>

      <p id="1.1.0">
        <b class="header">1.1.0</b> — <small><i>August 18, 2010</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.0.4...1.1.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.1.0/index.html">Docs</a><br>
        The method signature of <tt>_.reduce</tt> has been changed to match
        the ES5 signature, instead of the Ruby/Prototype.js version.
        This is a backwards-incompatible change. <tt>_.template</tt> may now be
        called with no arguments, and preserves whitespace. <tt>_.contains</tt>
        is a new alias for <tt>_.include</tt>.
      </p>

      <p id="1.0.4">
        <b class="header">1.0.4</b> — <small><i>June 22, 2010</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.0.3...1.0.4">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.0.4/index.html">Docs</a><br>
        <a href="http://themoell.com/">Andri Möll</a> contributed the <tt>_.memoize</tt>
        function, which can be used to speed up expensive repeated computations
        by caching the results.
      </p>

      <p id="1.0.3">
        <b class="header">1.0.3</b> — <small><i>June 14, 2010</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.0.2...1.0.3">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.0.3/index.html">Docs</a><br>
        Patch that makes <tt>_.isEqual</tt> return <tt>false</tt> if any property
        of the compared object has a <tt>NaN</tt> value. Technically the correct
        thing to do, but of questionable semantics. Watch out for NaN comparisons.
      </p>

      <p id="1.0.2">
        <b class="header">1.0.2</b> — <small><i>March 23, 2010</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.0.1...1.0.2">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.0.2/index.html">Docs</a><br>
        Fixes <tt>_.isArguments</tt> in recent versions of Opera, which have
        arguments objects as real Arrays.
      </p>

      <p id="1.0.1">
        <b class="header">1.0.1</b> — <small><i>March 19, 2010</i></small> — <a href="https://github.com/jashkenas/underscore/compare/1.0.0...1.0.1">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.0.1/index.html">Docs</a><br>
        Bugfix for <tt>_.isEqual</tt>, when comparing two objects with the same
        number of undefined keys, but with different names.
      </p>

      <p id="1.0.0">
        <b class="header">1.0.0</b> — <small><i>March 18, 2010</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.6.0...1.0.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/1.0.0/index.html">Docs</a><br>
        Things have been stable for many months now, so Underscore is now
        considered to be out of beta, at <b>1.0</b>. Improvements since <b>0.6</b>
        include <tt>_.isBoolean</tt>, and the ability to have <tt>_.extend</tt>
        take multiple source objects.
      </p>

      <p id="0.6.0">
        <b class="header">0.6.0</b> — <small><i>February 24, 2010</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.5.8...0.6.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.6.0/index.html">Docs</a><br>
        Major release. Incorporates a number of
        <a href="https://github.com/ratbeard">Mile Frawley's</a> refactors for
        safer duck-typing on collection functions, and cleaner internals. A new
        <tt>_.mixin</tt> method that allows you to extend Underscore with utility
        functions of your own. Added <tt>_.times</tt>, which works the same as in
        Ruby or Prototype.js. Native support for ES5's <tt>Array.isArray</tt>,
        and <tt>Object.keys</tt>.
      </p>

      <p id="0.5.8">
        <b class="header">0.5.8</b> — <small><i>January 28, 2010</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.5.7...0.5.8">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.5.8/index.html">Docs</a><br>
        Fixed Underscore's collection functions to work on
        <a href="https://developer.mozilla.org/En/DOM/NodeList">NodeLists</a> and
        <a href="https://developer.mozilla.org/En/DOM/HTMLCollection">HTMLCollections</a>
        once more, thanks to
        <a href="https://github.com/JustinTulloss">Justin Tulloss</a>.
      </p>

      <p id="0.5.7">
        <b class="header">0.5.7</b> — <small><i>January 20, 2010</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.5.6...0.5.7">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.5.7/index.html">Docs</a><br>
        A safer implementation of <tt>_.isArguments</tt>, and a
        faster <tt>_.isNumber</tt>,<br>thanks to
        <a href="http://jedschmidt.com/">Jed Schmidt</a>.
      </p>

      <p id="0.5.6">
        <b class="header">0.5.6</b> — <small><i>January 18, 2010</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.5.5...0.5.6">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.5.6/index.html">Docs</a><br>
        Customizable delimiters for <tt>_.template</tt>, contributed by
        <a href="https://github.com/iamnoah">Noah Sloan</a>.
      </p>

      <p id="0.5.5">
        <b class="header">0.5.5</b> — <small><i>January 9, 2010</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.5.4...0.5.5">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.5.5/index.html">Docs</a><br>
        Fix for a bug in MobileSafari's OOP-wrapper, with the arguments object.
      </p>

      <p id="0.5.4">
        <b class="header">0.5.4</b> — <small><i>January 5, 2010</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.5.2...0.5.4">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.5.4/index.html">Docs</a><br>
        Fix for multiple single quotes within a template string for
        <tt>_.template</tt>. See:
        <a href="http://www.west-wind.com/Weblog/posts/509108.aspx">Rick Strahl's blog post</a>.
      </p>

      <p id="0.5.2">
        <b class="header">0.5.2</b> — <small><i>January 1, 2010</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.5.1...0.5.2">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.5.2/index.html">Docs</a><br>
        New implementations of <tt>isArray</tt>, <tt>isDate</tt>, <tt>isFunction</tt>,
        <tt>isNumber</tt>, <tt>isRegExp</tt>, and <tt>isString</tt>, thanks to
        a suggestion from
        <a href="http://www.broofa.com/">Robert Kieffer</a>.
        Instead of doing <tt>Object#toString</tt>
        comparisons, they now check for expected properties, which is less safe,
        but more than an order of magnitude faster. Most other Underscore
        functions saw minor speed improvements as a result.
        <a href="http://dolzhenko.org/">Evgeniy Dolzhenko</a>
        contributed <tt>_.tap</tt>,
        <a href="http://ruby-doc.org/core-1.9/classes/Object.html#M000191">similar to Ruby 1.9's</a>,
        which is handy for injecting side effects (like logging) into chained calls.
      </p>

      <p id="0.5.1">
        <b class="header">0.5.1</b> — <small><i>December 9, 2009</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.5.0...0.5.1">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.5.1/index.html">Docs</a><br>
        Added an <tt>_.isArguments</tt> function. Lots of little safety checks
        and optimizations contributed by
        <a href="https://github.com/iamnoah">Noah Sloan</a> and
        <a href="http://themoell.com/">Andri Möll</a>.
      </p>

      <p id="0.5.0">
        <b class="header">0.5.0</b> — <small><i>December 7, 2009</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.4.7...0.5.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.5.0/index.html">Docs</a><br>
        <b>[API Changes]</b> <tt>_.bindAll</tt> now takes the context object as
        its first parameter. If no method names are passed, all of the context
        object's methods are bound to it, enabling chaining and easier binding.
        <tt>_.functions</tt> now takes a single argument and returns the names
        of its Function properties. Calling <tt>_.functions(_)</tt> will get you
        the previous behavior.
        Added <tt>_.isRegExp</tt> so that <tt>isEqual</tt> can now test for RegExp equality.
        All of the "is" functions have been shrunk down into a single definition.
        <a href="https://github.com/grayrest">Karl Guertin</a> contributed patches.
      </p>

      <p id="0.4.7">
        <b class="header">0.4.7</b> — <small><i>December 6, 2009</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.4.6...0.4.7">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.4.7/index.html">Docs</a><br>
        Added <tt>isDate</tt>, <tt>isNaN</tt>, and <tt>isNull</tt>, for completeness.
        Optimizations for <tt>isEqual</tt> when checking equality between Arrays
        or Dates. <tt>_.keys</tt> is now <small><i><b>25%–2X</b></i></small> faster (depending on your
        browser) which speeds up the functions that rely on it, such as <tt>_.each</tt>.
      </p>

      <p id="0.4.6">
        <b class="header">0.4.6</b> — <small><i>November 30, 2009</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.4.5...0.4.6">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.4.6/index.html">Docs</a><br>
        Added the <tt>range</tt> function, a port of the
        <a href="http://docs.python.org/library/functions.html#range">Python
        function of the same name</a>, for generating flexibly-numbered lists
        of integers. Original patch contributed by
        <a href="https://github.com/kylichuku">Kirill Ishanov</a>.
      </p>

      <p id="0.4.5">
        <b class="header">0.4.5</b> — <small><i>November 19, 2009</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.4.4...0.4.5">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.4.5/index.html">Docs</a><br>
        Added <tt>rest</tt> for Arrays and arguments objects, and aliased
        <tt>first</tt> as <tt>head</tt>, and <tt>rest</tt> as <tt>tail</tt>,
        thanks to <a href="https://github.com/lukesutton">Luke Sutton</a>'s patches.
        Added tests ensuring that all Underscore Array functions also work on
        <i>arguments</i> objects.
      </p>

      <p id="0.4.4">
        <b class="header">0.4.4</b> — <small><i>November 18, 2009</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.4.3...0.4.4">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.4.4/index.html">Docs</a><br>
        Added <tt>isString</tt>, and <tt>isNumber</tt>, for consistency. Fixed
        <tt>_.isEqual(NaN, NaN)</tt> to return <i>true</i> (which is debatable).
      </p>

      <p id="0.4.3">
        <b class="header">0.4.3</b> — <small><i>November 9, 2009</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.4.2...0.4.3">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.4.3/index.html">Docs</a><br>
        Started using the native <tt>StopIteration</tt> object in browsers that support it.
        Fixed Underscore setup for CommonJS environments.
      </p>

      <p id="0.4.2">
        <b class="header">0.4.2</b> — <small><i>November 9, 2009</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.4.1...0.4.2">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.4.2/index.html">Docs</a><br>
        Renamed the unwrapping function to <tt>value</tt>, for clarity.
      </p>

      <p id="0.4.1">
        <b class="header">0.4.1</b> — <small><i>November 8, 2009</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.4.0...0.4.1">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.4.1/index.html">Docs</a><br>
        Chained Underscore objects now support the Array prototype methods, so
        that you can perform the full range of operations on a wrapped array
        without having to break your chain. Added a <tt>breakLoop</tt> method
        to <b>break</b> in the middle of any Underscore iteration. Added an
        <tt>isEmpty</tt> function that works on arrays and objects.
      </p>

      <p id="0.4.0">
        <b class="header">0.4.0</b> — <small><i>November 7, 2009</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.3.3...0.4.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.4.0/index.html">Docs</a><br>
        All Underscore functions can now be called in an object-oriented style,
        like so: <tt>_([1, 2, 3]).map(...);</tt>. Original patch provided by
        <a href="http://macournoyer.com/">Marc-André Cournoyer</a>.
        Wrapped objects can be chained through multiple
        method invocations. A <a href="http://underscorejs.org/#object-functions"><tt>functions</tt></a> method
        was added, providing a sorted list of all the functions in Underscore.
      </p>

      <p id="0.3.3">
        <b class="header">0.3.3</b> — <small><i>October 31, 2009</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.3.2...0.3.3">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.3.3/index.html">Docs</a><br>
        Added the JavaScript 1.8 function <tt>reduceRight</tt>. Aliased it
        as <tt>foldr</tt>, and aliased <tt>reduce</tt> as <tt>foldl</tt>.
      </p>

      <p id="0.3.2">
        <b class="header">0.3.2</b> — <small><i>October 29, 2009</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.3.1...0.3.2">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.3.2/index.html">Docs</a><br>
        Now runs on stock <a href="http://www.mozilla.org/rhino/">Rhino</a>
        interpreters with: <tt>load("underscore.js")</tt>.
        Added <a href="http://underscorejs.org/#identity"><tt>identity</tt></a> as a utility function.
      </p>

      <p id="0.3.1">
        <b class="header">0.3.1</b> — <small><i>October 29, 2009</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.3.0...0.3.1">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.3.1/index.html">Docs</a><br>
        All iterators are now passed in the original collection as their third
        argument, the same as JavaScript 1.6's <b>forEach</b>. Iterating over
        objects is now called with <tt>(value, key, collection)</tt>, for details
        see <a href="http://underscorejs.org/#each"><tt>_.each</tt></a>.
      </p>

      <p id="0.3.0">
        <b class="header">0.3.0</b> — <small><i>October 29, 2009</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.2.0...0.3.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.3.0/index.html">Docs</a><br>
        Added <a href="https://github.com/DmitryBaranovskiy">Dmitry Baranovskiy</a>'s
        comprehensive optimizations, merged in
        <a href="https://github.com/kriskowal">Kris Kowal</a>'s patches to make Underscore
        <a href="http://wiki.commonjs.org/wiki/CommonJS">CommonJS</a> and
        <a href="http://narwhaljs.org/">Narwhal</a> compliant.
      </p>

      <p id="0.2.0">
        <b class="header">0.2.0</b> — <small><i>October 28, 2009</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.1.1...0.2.0">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.2.0/index.html">Docs</a><br>
        Added <tt>compose</tt> and <tt>lastIndexOf</tt>, renamed <tt>inject</tt> to
        <tt>reduce</tt>, added aliases for <tt>inject</tt>, <tt>filter</tt>,
        <tt>every</tt>, <tt>some</tt>, and <tt>forEach</tt>.
      </p>

      <p id="0.1.1">
        <b class="header">0.1.1</b> — <small><i>October 28, 2009</i></small> — <a href="https://github.com/jashkenas/underscore/compare/0.1.0...0.1.1">Diff</a> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.1.1/index.html">Docs</a><br>
        Added <tt>noConflict</tt>, so that the "Underscore" object can be assigned to
        other variables.
      </p>

      <p id="0.1.0">
        <b class="header">0.1.0</b> — <small><i>October 28, 2009</i></small> — <a href="https://cdn.rawgit.com/jashkenas/underscore/0.1.1/index.html">Docs</a><br>
        Initial release of Underscore.js.
      </p>

      <p>
        <a href="http://documentcloud.org/" title="A DocumentCloud Project" style="background:none;">
          <img src="./Underscore_files/a_documentcloud_project.png" alt="A DocumentCloud Project">
        </a>
      </p>

    </div>

  </div>

  <!-- Include Underscore, so you can play with it in the console. -->
  <script type="text/javascript" src="./Underscore_files/underscore.js"></script>



</body></html>