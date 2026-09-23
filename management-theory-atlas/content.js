// Add one object per entry. Keep source links on claims and verify bibliographic data.
// Kind describes the page. type describes the intellectual status of the item.
export const fields = [
  'Organization Theory', 'Organizational Behavior', 'Strategy',
  'Human Resource Management', 'Entrepreneurship', 'Innovation',
  'Technology and Organizations', 'Information Systems', 'Marketing',
  'Operations and Supply Chain', 'International Business',
  'Corporate Governance', 'Leadership', 'Decision Making',
  'Social Networks', 'Creativity', 'Organizational Learning',
  'Knowledge Management', 'Institutional and Societal Perspectives',
  'Diversity and Inclusion'
];

export const entries = [
  {
    id: 'weak-ties', kind: 'Theory', type: 'Theoretical perspective',
    title: 'The Strength of Weak Ties', japanese: '弱い紐帯の強さ',
    summary: '弱い紐帯が、密につながった集団の間を結ぶことで情報の伝播に関わるという視点。',
    question: '情報や機会は、どのように集団の境界を越えるのか。',
    fields: ['Social Networks', 'Organizational Behavior'],
    family: ['Network', 'Sociological'], levels: ['Individual', 'Dyad', 'Community'],
    tags: ['情報伝播', '紐帯', 'ブリッジ'],
    sections: [
      ['中核的な問い', '人と人のつながりの強さは、集団間の情報伝播にどう関わるか。'],
      ['前提とメカニズム', '親しい人のつながりには重複が生じやすい。重複の少ない人間関係は、異なる集団の情報を橋渡ししうる。'],
      ['境界条件と論点', '紐帯の強さだけで結果を説明しない。ネットワークの構造、情報の種類、制度的な文脈を併せて検討する。']
    ],
    related: ['granovetter-1973', 'structural-holes', 'strong-weak-debate'],
    sources: [{label: 'Granovetter (1973), American Journal of Sociology', url: 'https://doi.org/10.1086/225469'}]
  },
  {
    id: 'structural-holes', kind: 'Theory', type: 'Theory / concept',
    title: 'Structural Holes', japanese: '構造的空隙',
    summary: '互いにつながっていない人々の間に位置する仲介者と、その位置から生じうる利点を考える。',
    question: '異なる集団をつなぐ位置は、アイデアや成果にどう関わるのか。',
    fields: ['Social Networks', 'Innovation', 'Strategy'],
    family: ['Network', 'Sociological'], levels: ['Individual', 'Team', 'Organization'],
    tags: ['仲介', 'アイデア', 'ネットワーク構造'],
    sections: [
      ['中核的な問い', '周囲の人々が互いに直接つながっていない場合、仲介者は何を得るのか。'],
      ['前提とメカニズム', '異なる集団の間を結ぶ人は、重複しにくい情報や視点に触れうる。Burt (2004) は、構造的空隙をまたぐネットワークとアイデアの関係を論じた。'],
      ['境界条件と論点', '位置による潜在的な利点と、実際に関係を働かせる行為は区別して検討する。']
    ],
    related: ['burt-2004', 'brokerage', 'weak-ties'],
    sources: [{label: 'Burt (2004), American Journal of Sociology', url: 'https://doi.org/10.1086/421787'}]
  },
  {
    id: 'exploration-exploitation', kind: 'Theory', type: 'Conceptual framework',
    title: 'Exploration and Exploitation', japanese: '探索と活用',
    summary: '新しい可能性の探索と、既存の知識や能力の活用との配分を考える枠組み。',
    question: '組織は、新しいことへの試行と現在の強みの活用をどう両立するのか。',
    fields: ['Organizational Learning', 'Strategy', 'Innovation'],
    family: ['Behavioral', 'Evolutionary'], levels: ['Individual', 'Organization'],
    tags: ['学習', '適応', '配分'],
    sections: [
      ['中核的な問い', '短期の成果を得やすい活動と、長期の可能性を探る活動をどのように配分するか。'],
      ['前提とメカニズム', 'March (1991) は、新しい可能性の探索と既存の確実性の活用を区別し、組織学習における両者の関係を検討した。'],
      ['境界条件と論点', '探索と活用の意味は、対象となる活動や分析単位によって明示する必要がある。']
    ],
    related: ['march-1991', 'learning'],
    sources: [{label: 'March (1991), Organization Science', url: 'https://doi.org/10.1287/orsc.2.1.71'}]
  },
  {
    id: 'sensemaking', kind: 'Theory', type: 'Theoretical perspective',
    title: 'Sensemaking', japanese: '意味形成',
    summary: '人々が経験を振り返りながら、状況に意味を与えていく過程に着目する視点。',
    question: '曖昧な状況で、人々は何が起きているかをどう理解するのか。',
    fields: ['Organization Theory', 'Decision Making', 'Technology and Organizations'],
    family: ['Cognitive', 'Process'], levels: ['Individual', 'Team', 'Organization'],
    tags: ['解釈', '曖昧性', 'プロセス'],
    sections: [
      ['中核的な問い', '曖昧な出来事に対して、組織の人々はどのように説明を作るのか。'],
      ['前提とメカニズム', '意味は既成の答えを見つけるだけでなく、経験を振り返って解釈する過程でも形づくられる。'],
      ['境界条件と論点', '誰の解釈に注目するのか、解釈がどのような行動につながるのかを区別する。']
    ],
    related: ['weick-1995'],
    sources: [{label: 'Weick (1995), SAGE Publications', url: 'https://www.sagepub.com/shop/buy-a-book/sensemaking-in-organizations-1-4988'}]
  },
  {
    id: 'brokerage', kind: 'Concept', type: 'Concept',
    title: 'Brokerage', japanese: '仲介',
    summary: '互いに直接結びついていない人や集団の間を媒介する位置や行為。',
    question: '集団をまたぐつながりは、どのように働くのか。',
    fields: ['Social Networks', 'Innovation', 'Entrepreneurship'],
    family: ['Network'], levels: ['Individual', 'Team'], tags: ['仲介', '情報'],
    sections: [
      ['定義', '異なる関係の間を取り持つ位置や行為を指す。位置と実際の行為は分析上区別できる。'],
      ['測定と研究上の注意', 'ネットワークの構造を測る場合と、仲介の行為を観察する場合では、扱う現象が異なる。']
    ],
    related: ['structural-holes', 'burt-2004'],
    sources: [{label: 'Burt (2004), American Journal of Sociology', url: 'https://doi.org/10.1086/421787'}]
  },
  {
    id: 'learning', kind: 'Concept', type: 'Phenomenon',
    title: 'Organizational Learning', japanese: '組織学習',
    summary: '組織が経験や試行を通じて行動や知識を変化させる現象。',
    question: '組織の経験は、将来の行動にどう影響するのか。',
    fields: ['Organizational Learning', 'Strategy'],
    family: ['Behavioral'], levels: ['Organization'], tags: ['学習', '適応'],
    sections: [['この概念の位置づけ', '探索と活用は、組織学習を検討する際の重要な区別の一つ。']],
    related: ['exploration-exploitation', 'march-1991'],
    sources: [{label: 'March (1991), Organization Science', url: 'https://doi.org/10.1287/orsc.2.1.71'}]
  },
  {
    id: 'granovetter-1973', kind: 'Paper', type: 'Journal article',
    title: 'The Strength of Weak Ties', japanese: '弱い紐帯の強さ',
    summary: '社会ネットワークを通じて、ミクロとマクロの関係を考察する論文。',
    question: '紐帯の強さは情報の伝播にどう関わるか。',
    authors: 'Mark S. Granovetter', year: 1973, venue: 'American Journal of Sociology',
    doi: '10.1086/225469', fields: ['Social Networks'], family: ['Network'],
    levels: ['Individual', 'Dyad'], tags: ['紐帯', '情報伝播'],
    sections: [
      ['研究上の問い', '個人間の紐帯と、集団をまたぐ社会的な過程をどう結ぶか。'],
      ['理論的貢献', '紐帯の強さとネットワークの重複に着目し、ミクロな関係とマクロな構造を結ぶ説明を提示した。'],
      ['読書メモ', '本文の方法、結果、限界、正確な引用は未記入。原文確認後に追記する。']
    ],
    related: ['weak-ties', 'strong-weak-debate'],
    sources: [{label: '出版社の論文ページ', url: 'https://doi.org/10.1086/225469'}]
  },
  {
    id: 'burt-2004', kind: 'Paper', type: 'Journal article',
    title: 'Structural Holes and Good Ideas', japanese: '構造的空隙と優れたアイデア',
    summary: '構造的空隙をまたぐネットワークと、アイデアの関係を扱う論文。',
    question: '異なる集団を結ぶネットワークは、アイデアにどう関わるか。',
    authors: 'Ronald S. Burt', year: 2004, venue: 'American Journal of Sociology',
    doi: '10.1086/421787', fields: ['Social Networks', 'Creativity'], family: ['Network'],
    levels: ['Individual'], tags: ['構造的空隙', 'アイデア'],
    sections: [
      ['研究上の問い', '構造的空隙をまたぐ位置と、アイデアの創出はどう結びつくか。'],
      ['理論的貢献', '社会ネットワーク上の位置とアイデアとの関係を結びつけ、仲介の研究を創造的な成果に接続した。'],
      ['読書メモ', '本文の方法、結果、限界、正確な引用は未記入。原文確認後に追記する。']
    ],
    related: ['structural-holes', 'brokerage'],
    sources: [{label: '出版社の論文ページ', url: 'https://doi.org/10.1086/421787'}]
  },
  {
    id: 'march-1991', kind: 'Paper', type: 'Journal article',
    title: 'Exploration and Exploitation in Organizational Learning', japanese: '組織学習における探索と活用',
    summary: '新しい可能性の探索と、既存の確実性の活用の関係を考察する論文。',
    question: '組織は探索と活用をどのように配分するか。',
    authors: 'James G. March', year: 1991, venue: 'Organization Science',
    doi: '10.1287/orsc.2.1.71', fields: ['Organizational Learning', 'Strategy'],
    family: ['Behavioral'], levels: ['Organization'], tags: ['学習', '適応'],
    sections: [
      ['研究上の問い', '新しい可能性の探索と、既存の知識の活用はどのように関係するか。'],
      ['理論的貢献', '探索と活用を区別し、組織学習の資源配分と適応を検討する枠組みを提示した。'],
      ['読書メモ', '本文の方法、結果、限界、正確な引用は未記入。原文確認後に追記する。']
    ],
    related: ['exploration-exploitation', 'learning'],
    sources: [{label: '出版社の論文ページ', url: 'https://doi.org/10.1287/orsc.2.1.71'}]
  },
  {
    id: 'weick-1995', kind: 'Paper', type: 'Book',
    title: 'Sensemaking in Organizations', japanese: '組織における意味形成',
    summary: '組織における意味形成を体系的に論じた書籍。',
    question: '人々は経験をどう解釈し、組織を形づくるか。',
    authors: 'Karl E. Weick', year: 1995, venue: 'SAGE Publications',
    fields: ['Organization Theory', 'Decision Making'], family: ['Cognitive', 'Process'],
    levels: ['Individual', 'Organization'], tags: ['解釈', '意味形成'],
    sections: [
      ['中心的な問い', '組織の人々は出来事の意味をどのように形成するか。'],
      ['理論上の位置づけ', '意思決定だけに着目する見方を広げ、経験を振り返って状況を理解する過程を扱う。'],
      ['読書メモ', '章別の論点、正確な引用、批判的評価は未記入。原著確認後に追記する。']
    ],
    related: ['sensemaking'],
    sources: [{label: '出版社の書籍ページ', url: 'https://www.sagepub.com/shop/buy-a-book/sensemaking-in-organizations-1-4988'}]
  },
  {
    id: 'strong-weak-debate', kind: 'Debate', type: 'Research question',
    title: 'Strong ties / Weak ties', japanese: '強い紐帯と弱い紐帯',
    summary: '紐帯の強さと、ネットワークの橋渡しという二つの観点を区別して考えるための論点。',
    question: 'どのような情報や活動に、どのようなつながりが役立つのか。',
    fields: ['Social Networks', 'Innovation'], family: ['Network'],
    levels: ['Individual', 'Team'], tags: ['紐帯', '情報伝播'],
    sections: [
      ['立場と論点', '弱い紐帯と橋渡しの関係が重視される一方、紐帯の強さそれ自体とネットワーク構造は同じ概念ではない。'],
      ['未解決の問い', '必要な情報の性質や協働の段階が変わると、つながりに求められる役割はどう変わるか。'],
      ['編集上の注記', 'これは学習用の比較軸。文献上の「現在の合意」を確定したページではない。']
    ],
    related: ['weak-ties', 'granovetter-1973', 'structural-holes'],
    sources: [{label: 'Granovetter (1973), American Journal of Sociology', url: 'https://doi.org/10.1086/225469'}]
  }
];
