'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [732],
  {
    732: function (t, e, a) {
      a.r(e)
      var n = a(7320),
        i = a(1720),
        r = a(425),
        s = a(1576),
        o = a.n(s)
      e.default = function (t) {
        var e = t.mapping,
          a = (0, i.useState)(!0),
          s = a[0],
          c = a[1],
          u = (0, r.F)(),
          d = u.theme,
          m = u.resolvedTheme,
          g =
            '' === o().comment.giscusConfig.themeURL
              ? 'dark' === d || 'dark' === m
                ? o().comment.giscusConfig.darkTheme
                : o().comment.giscusConfig.theme
              : o().comment.giscusConfig.themeURL,
          l = 'comments-container',
          p = (0, i.useCallback)(
            function () {
              var t
              c(!1)
              var a =
                  null === o() || void 0 === o() || null === (t = o().comment) || void 0 === t
                    ? void 0
                    : t.giscusConfig,
                n = a.repo,
                i = a.repositoryId,
                r = a.category,
                s = a.categoryId,
                u = a.reactions,
                d = a.metadata,
                m = a.inputPosition,
                p = a.lang,
                b = document.createElement('script')
              ;(b.src = 'https://giscus.app/client.js'),
                b.setAttribute('data-repo', n),
                b.setAttribute('data-repo-id', i),
                b.setAttribute('data-category', r),
                b.setAttribute('data-category-id', s),
                b.setAttribute('data-mapping', e),
                b.setAttribute('data-reactions-enabled', u),
                b.setAttribute('data-emit-metadata', d),
                b.setAttribute('data-input-position', m),
                b.setAttribute('data-lang', p),
                b.setAttribute('data-theme', g),
                b.setAttribute('crossorigin', 'anonymous'),
                (b.async = !0)
              var f = document.getElementById(l)
              return (
                f && f.appendChild(b),
                function () {
                  var t = document.getElementById(l)
                  t && (t.innerHTML = '')
                }
              )
            },
            [g, e]
          )
        return (
          (0, i.useEffect)(
            function () {
              document.querySelector('iframe.giscus-frame') && p()
            },
            [p]
          ),
          (0, n.BX)('div', {
            className: 'pt-6 pb-6 text-center text-gray-700 dark:text-gray-300',
            children: [
              s && (0, n.tZ)('button', { onClick: p, children: 'Load Comments' }),
              (0, n.tZ)('div', { className: 'giscus', id: l }),
            ],
          })
        )
      }
    },
  },
])
