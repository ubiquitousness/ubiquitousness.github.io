window.MathJax = {
  tex: {
    tags: "ams",
    packages: {'[+]': ['physics']},
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  },
  loader: {load: ['[tex]/physics']},
  chtml: {
    mtextInheritFont: true
  }
}; 
