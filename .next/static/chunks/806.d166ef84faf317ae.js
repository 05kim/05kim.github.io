'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [806],
  {
    8806: function (e, t, n) {
      n.r(t)
      var r = n(7320),
        a = n(1720),
        c = n(425),
        s = n(1576),
        u = n.n(s)
      t.default = function (e) {
        var t = e.issueTerm,
          n = (0, a.useState)(!0),
          s = n[0],
          i = n[1],
          m = (0, c.F)(),
          o = m.theme,
          l = m.resolvedTheme,
          d =
            'dark' === o || 'dark' === l
              ? u().comment.utterancesConfig.darkTheme
              : u().comment.utterancesConfig.theme,
          f = 'comments-container',
          b = (0, a.useCallback)(
            function () {
              i(!1)
              var e = document.createElement('script')
              ;(e.src = 'https://utteranc.es/client.js'),
                e.setAttribute('repo', u().comment.utterancesConfig.repo),
                e.setAttribute('issue-term', t),
                e.setAttribute('label', u().comment.utterancesConfig.label),
                e.setAttribute('theme', d),
                e.setAttribute('crossorigin', 'anonymous'),
                (e.async = !0)
              var n = document.getElementById(f)
              return (
                n && n.appendChild(e),
                function () {
                  var e = document.getElementById(f)
                  e && (e.innerHTML = '')
                }
              )
            },
            [d, t]
          )
        return (
          (0, a.useEffect)(
            function () {
              document.querySelector('iframe.utterances-frame') && b()
            },
            [b]
          ),
          (0, r.BX)('div', {
            className: 'pt-6 pb-6 text-center text-gray-700 dark:text-gray-300',
            children: [
              s && (0, r.tZ)('button', { onClick: b, children: 'Load Comments' }),
              (0, r.tZ)('div', { className: 'utterances-frame relative', id: f }),
            ],
          })
        )
      }
    },
  },
])
