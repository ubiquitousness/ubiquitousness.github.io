window.MathJax = {
  tex: {
    tags: "ams",
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    packages: {'[+]': ['physics2']}
  },
  loader: {load: ['[tex]/physics2']},
  chtml: {
    mtextInheritFont: true
  }
}; 
