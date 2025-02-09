window.MathJax = {
  tex: {
    tags: "ams",
    inlineMath: [['$', '$'], ['\(', '\)']],
    packages: {'[+]': ['physics']}
  },
  loader: {load: ['[tex]/physics']},
  chtml: {
    mtextInheritFont: true
  }
}; 
