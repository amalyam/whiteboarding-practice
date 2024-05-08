function isBalanced(s) {
  if (s.length % 2 === 1) {
    return "NO";
  } else {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
        stack.push(s[i]);
      } else {
        switch (s[i]) {
          case "}":
            if (stack[stack.length - 1] !== "{") {
              return "NO";
            } else {
              stack.pop();
            }
            break;
          case "]":
            if (stack[stack.length - 1] !== "[") {
              return "NO";
            } else {
              stack.pop();
            }
            break;
          case ")":
            if (stack[stack.length - 1] !== "(") {
              return "NO";
            } else {
              stack.pop();
            }
            break;
        }
      }
    }
    if (stack.length > 0) return "NO";
    return "YES";
  }
}

// console.log(isBalanced("{[()]}")); // YES
// console.log(isBalanced("{[(])}")); // NO
// console.log(isBalanced("{{[[(())]]}}")); // YES
// console.log(isBalanced("{{)[](}}")); // NO
// console.log(isBalanced("{(([])[])[]}")); // YES
// console.log(isBalanced("{(([])[])[]]}")); // NO
// console.log(isBalanced("{(([])[])[]}[]")); // YES

// Test #4
// // set A
// console.log(isBalanced("[()][{}()][](){}([{}(())([[{}]])][])[]([][])(){}{{}{[](){}}}()[]({})[{}{{}([{}][])}]")); // YES
// console.log(isBalanced("[()][{}[{}[{}]]][]{}[]{}[]{{}({}(){({{}{}[([[]][[]])()]})({}{{}})())}")); // YES
// console.log(isBalanced("(])[{{{][)[)])(]){(}))[{(})][[{)(}){[(]})[[{}(])}({)(}[[()}{}}]{}{}}()}{({}](]{{[}}(([{]")); // NO
// console.log(isBalanced("){[]()})}}]{}[}}})}{]{](]](()][{))})(}]}))(}[}{{)}{[[}[]")); // NO
// console.log(isBalanced("}(]}){")); // NO
// console.log(isBalanced("((]()(]([({]}({[)){}}[}({[{])(]{()[]}}{)}}]]{({)[}{(")); // NO
// console.log(isBalanced("{}{({{}})}[][{{}}]{}{}(){{}[]}{}([[][{}]]())")); // YES
// console.log(isBalanced("(){}[()[][]]{}(())()[[([])][()]{}{}(({}[]()))()[()[{()}]][]]")); // YES
// console.log(isBalanced("()([]({}[]){}){}{()}[]{}[]()(()([[]]()))()()()[]()(){{}}()({[{}][]}[[{{}({({({})})})}]])")); // YES
// console.log(isBalanced("[]([{][][)(])}()([}[}(})}])}))]](}{}})[]({{}}))[])(}}[[{]{}]()[(][])}({]{}[[))[[}[}{(]})()){{(]]){][")); // NO
// console.log(isBalanced("{()({}[[{}]]()(){[{{}{[[{}]{}((({[]}{}()[])))]((()()))}(()[[[]]])((()[[](({([])()}))[]]))}]})")); // YES
// console.log(isBalanced("()(){{}}[()()]{}{}")); // YES
// console.log(isBalanced("{}()([[]])({}){({[][[][[()]]{{}[[]()]}]})}[](())((())[{{}}])")); // YES
// console.log(isBalanced("{}(((){}){[]{{()()}}()})[]{{()}{(){()(){}}}}{()}({()(()({}{}()((()((([])){[][{()}{}]})))))})")); // YES
// console.log(isBalanced("][[{)())))}[)}}}}[{){}()]([][]){{{{{[)}]]{([{)()][({}[){]({{")); // NO
// console.log(isBalanced("{{}(")); // NO
// console.log(isBalanced("{[{((({}{({({()})()})[]({()[[][][]]}){}}))){}}]}{}{({((){{}[][]{}[][]{}}[{}])(())}[][])}")); // YES
// console.log(isBalanced("()[[][()[]][]()](([[[(){()[[]](([]))}]]]))")); // YES
// console.log(isBalanced("()[]({}{})(()){{{}}()()}({[]()}())[](){}(({()}[{}[{({{}}){({}){({})((({()})))}}}]]))")); // YES
// console.log(isBalanced("}[{){({}({)})]([}{[}}{[(([])[(}){[]])([]]}(]]]]{][[{]{[{(){[}{}(([(]}])(){[[}(]){(})))}}{{)}}{}][({(}))]}({)"); // NO

// // Set B
// console.log(isBalanced(")})[(]{][[())]{[]{{}}[)[)}[]){}](}({](}}}[}{({()]]")); // NO
// console.log(isBalanced("[[[({[]}({[][[[[][[{(()[][])}()[][]][]{}]]]]}))][(()){}]]]()[{}([]{}){}{{}}]")); // YES
// console.log(isBalanced("({[]({[]})}())[][{}[{{(({{{([{}])}}}))}}]")); // YES
// console.log(isBalanced("([((()))()])[][][]{}()(([]))[]()[]((){}[]){}(){{}[]}[[{[]}]]")); // YES
// console.log(isBalanced("[[[(((({}{[]{}()}){}{{}}){({[]{[{}]{(){}(((){()}))}()}}[[]]()()[()])[[{}{}]()]}))]]{}[]{}({({{}})})")); // YES
// console.log(isBalanced("(]{()}((")); // NO
// console.log(isBalanced("[][(())[({{{()[]}}{[[][[][[[]{{{[()]{{{{}{[]}[][]}}}}}}]]]]}})]]")); // YES
// console.log(isBalanced("}[})})}[)]{}{)")); // NO
// console.log(isBalanced("({(}{})))}(}[)[}{)}}[)[{][{(}{{}]({}{[(})[{[({{[}{(]]}))")); // NO
// console.log(isBalanced("]}})[]))]{][])[}(])]({[]}[]([)")); // NO
// console.log(isBalanced("[{{}{[{{[}[[}([)")); // NO
// console.log(isBalanced("[([]){}][({})({[(([])[][])][[{}{([{{}{(()){{{({}{{}}())}}[]}}()[()[{{{([](()){[[[]]]})}}}]]}])}]]})]")); // YES
// console.log(isBalanced("]{}{(}))}](})[{]]()(]([}]([}][}{]{[])}{{{]([][()){{})[{({{{[}{}](]}}")); // NO
// console.log(isBalanced("{[{}}){(}[][)(}[}][)({[[{]}[(()[}}){}{)([)]}(()))]{)(}}}][")); // NO
// console.log(isBalanced("[)]{}{(}}}[)[)); // NO
// console.log(isBalanced("[]{}{[[]]}([{}]{}[]){{(())}}")); // YES
// console.log(isBalanced("[)([{(][(){)[)}{)]]}}([((][[}}(]{}]]}]][(({{{))[[){}{]][))[]{]][)[{{}{()]){)])))){{{[(]}[}}{}]")); // NO
// console.log(isBalanced("{({(){[[[][]{}[[([]{})]{}]][[]()()]]}})}[{}{{}}]")); // YES
// console.log(isBalanced(")}][(})){))[{}[}")); // NO
// console.log(isBalanced("{[]{({]}[}}[{([([)([){{}{(}}[]}}[[{[}[[()(])[}[]")); // NO
// console.log(isBalanced("()()()[]")); // YES
// console.log(isBalanced("((){}])][]][}{]{)]]}][{]}[)(])[}[({(")); // NO
// console.log(isBalanced(")[((])(]]]]((]){{{{())]}]}(}{([}(({}]])[[{){[}]{{}})[){(")); // NO
// console.log(isBalanced("}][[{[((}{[]){}}[[[)({[)}]]}(]]{[)[]}{}(){}}][{()]))})]][(((}}")); // NO
// console.log(isBalanced("([]){}{{}{}}()([([{}{[[]()([(([]()))()[[]]])]}])])")); // YES
// console.log(isBalanced("[()[[]{{[]}()([])}[]][][]][]()[]{}{}[][]{}{}[()(){}]")); // YES
// console.log(isBalanced("{[{){]({(((({](]{([])([{{([])[}(){(]](]{[{[]}}())[){})}))[{})))[")); // NO
// console.log(isBalanced("{}[()[]][]{}{}[[{{[[({})]()[[()]]]}}]]")); // YES

// // Set C
// console.log(isBalanced("{[{}[][]]}[((()))][]({})[]{}{()}")); // YES
// console.log(isBalanced("(){[{({})}]})")); // YES
// console.log(isBalanced("([]])][{)]({)[]))}]())[}]))][}{}}})){]}]{[)}(][})[[(")); // NO
// console.log(isBalanced("((({{}(([{}(())]))[()]{[[[]()]]}})))")); // YES
// console.log(isBalanced("}()))}(}]]{{})}][{](]][{]{[[]]]}]]}([)({([))[[(]}])}[}(([{)[)]]([[](]}]}{]{{})[]){]}{])(")); // NO
// console.log(isBalanced("{}{}{}{[[()]][]}")); // YES
// console.log(isBalanced(")]}]({{})[[[{]{{{}}][))]{")); // NO
// console.log(isBalanced("))){({}])}])}}]{)()(}(]}([")); // NO
// console.log(isBalanced("([[]][])[[]()][]()(([[]]{[()[]{[][{}]}[()]]{}{[]}}{{}()}(()[([][]{})[[{}][]]{}[]])))")); // YES
// console.log(isBalanced("]{[({}[){)))}]{[{}][({[({[]))}[}]}{()(([]{]()}})}[]{[)](((]]])([]}}]){)(([]]}[[}[")); // NO
// console.log(isBalanced("([[]])({}(([(){{}[{}]}]){[{}]}))[][{}{}]{}")); // YES
// console.log(isBalanced("[][][][][][([])][]{({()}[[()()]{([(){[]{}}{(())}{[](){}()({}())}[({}[[]()])][]])}])}")); // YES
// console.log(isBalanced("}[{{(}})}}(((())()({]{([]((][(({)[({[]]}[])}]{][{{}]{)][}(])}}}))}}}")); // NO
// console.log(isBalanced("[]({})()[]{}{}[]({}{})[]{([])()[()][{()({})[{}{[[()]{}[]][]}(({{[]{()()()}{}[]()}[]}){{}{}})]}]")); // YES
// console.log(isBalanced("[]({})()[]{}{}[]({}{})[]{([])()[()][{()({})[{}{[[()]{}[]][]}(({{[]{()()()}{}[]()}[]}){{}{}})]}]}")); // YES
// console.log(isBalanced("{{(([{)]{}({][{](){({([[[][)}[)})(")); // NO
// console.log(isBalanced("[{}]{[()({[{}]})]}")); // YES
// console.log(isBalanced("[[{}]]")); // YES

// Set D
console.log(
  isBalanced(
    "]{{({[{]}[[)]]}{}))}{){({]]}{]([)({{[]){)]{}){){}()})(]]{{])(])[]}][[()()}"
  )
); // NO
console.log(
  isBalanced(
    "{[([}[[{{(]]][}()())]{){(){)]]){})}]{][][(}[]())[}[)})})[][{[)[})()][]))}[[}"
  )
); // NO
console.log(
  isBalanced(
    "]()])}[}}}{]]{)[}(}]]])])}{(}{([{]({)]}])(})[{}[)]])]}[]{{)){}{()}]}((}}{({])[}])[]}"
  )
); // NO
console.log(isBalanced("(]}[{}{{][}))){{{([)([[])([]{[")); // NO
console.log(isBalanced("{(()[]){}}(){[]}({{}(()())})([]){}{}(())()[()]{}()")); // YES
console.log(
  isBalanced(
    "{{}[{}[{}[]]]}{}({{[]}})[[(){}][]]{}(([]{[][]()()}{{{()()}{[]}({}[]{()})}{()}[[]][()]}))"
  )
); // YES
console.log(isBalanced("{[][]}[{}[](){}]{{}{[][{}]}}")); // YES
console.log(isBalanced("()(){}(){((){}[])([[]]())}")); // YES
console.log(isBalanced("{}[[{[((}[(}[[]{{]([(}]][[")); // NO
console.log(isBalanced("{}[([{[{{}()}]{}}([[{}[]]({}{{()}[][][]})])])]")); // YES
console.log(isBalanced("{[](}([)(])[]]})()]){[({]}{{{)({}(][{{[}}(]{")); // NO
console.log(isBalanced("[][]{{}[](())}{}({[()]}())[][[][({}([{}]))]]")); // YES
console.log(
  isBalanced(
    "((()))[]{[(()({[()({[]}{})]}))]}{[]}{{({}{})[{}{}]{()([()])[{()}()[[]{}()]{}{}[]()]}[[]{[]}([])]}}"
  )
); // YES
