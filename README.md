# Cookie Dialog
結合 Cookie 和 `<dialog>` 的確認彈窗

## 展示

![screenshot](https://hackmd.io/_uploads/BkcytoJiT.jpg)

[Live Demo](https://nepikn.github.io/cookie-dialog/)

## 學習內容

### Cookie

```js
// example.com
document.cookie = "consent=true; samesite=lax; max-age=3600";
```

```HTTP
Set-Cookie: sessionId=0; HttpOnly
```

- `samesite=lax` 從 example.com 以外的網頁（或從記事本等軟體）訪問 example.com 所發送的請求將包含本 cookie；
- 無 `expires` 或 `max-age` 則隨 session 結束而被移除（關閉瀏覽器未必保證 session 結束：瀏覽器可能在重啟後復原 session），可 `expires=0` 來主動移除；
- `HttpOnly` 僅限伺服器設定來限制客戶端 JavaScript 讀取。

### Dialog

```html
<dialog>
  <form method="dialog">
    <p>為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的 Cookie。</p>
    <button class="deny">拒絕</button>
    <button autofocus class="consent">同意</button>
  </form>
</dialog>
```

```css
dialog::backdrop {
  backdrop-filter: blur(4px);
}
```

```js
if (Cookies.get("consent") != "true") {
  dialog.showModal();
}
```

- `<dialog>` 預設不顯示，顯示時將由瀏覽器顯示在長寬等同 viewport 的最頂層；
- `<dialog>::backdrop` 調整 `<dialog>` 外圍的樣式；
- `dialog.showModal()` 後用戶無法與 `<dialog>` 之外的元件互動，`dialog.show()` 則不限制互動；
- `<form method="dialog">` 不發送表單而是關閉包含 `<form>` 的 `<dialog>`。

## 相關資源

- [The Modern JavaScript Tutorial - Cookies, document.cookie](https://javascript.info/cookie)
- [MDN - Document: cookie property](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
- [MDN - Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)