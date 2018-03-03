function factorial(n) {
  if (n <= 1) return n
  else return n * factorial(n - 1)
}
document.write('<table>')
document.write('<tr><th>n</th><th>n!</th></tr>')
for (var i = 1; i <= 10; i++) {
  document.write('<tr><td>' + i + '</td><td> ' + factorial(i) + '</td><tr>')
}
document.write('</table>')
document.write('Generated at: ' + new Date())
