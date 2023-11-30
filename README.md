# GitHub Kullanıcı Arama Uygulaması

Bu uygulama, GitHub kullanıcılarını aramanıza olanak tanır. Kullanıcı adı veya e-posta ile arama yapabilirsiniz.

## Nasıl Çalışır?

Uygulama, React ve GitHub API kullanılarak oluşturulmuştur. Kullanıcının girdiği değer, GitHub API'ye sorgu olarak gönderilir ve sonuçlar uygulamada gösterilir.

## Kod Açıklaması

```jsx
import { useState } from 'react'
import './styles.css'

function App() {
  const [value, setValue] = useState('')
  const [users, setUsers] = useState([])

  const handleSubmit = () => {
    const url = `https://api.github.com/search/users?q=${value}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers((prev) => [...prev, ...data.items])
        setValue('')
      })
  }
  // ...
}

export default App
```

Bu kod parçası, React kullanarak bir GitHub kullanıcısını aramak için basit bir uygulama oluşturur.

- `useState` hook'u, `value` ve `users` adında iki state oluşturur. `value`, kullanıcının girdiği arama değerini tutar. `users`, arama sonucunda dönen kullanıcıları tutar.

- `handleSubmit` fonksiyonu, kullanıcının girdiği değeri alır, bu değeri GitHub API'ye bir sorgu olarak gönderir, API'den dönen sonuçları `users` state'ine ekler ve `value` state'ini sıfırlar.

## Kullanım

Aramak istediğiniz kullanıcı adını veya e-postayı girin, ardından 'Search' butonuna tıklayın. Sonuçlar, uygulamanın alt kısmında gösterilir. Kullanıcı adına tıkladığınızda, GitHub profiline yönlendirilirsiniz.

## Notlar

- Uygulama, GitHub API'nin halka açık sürümünü kullanır. Belirli bir süre içinde belirli bir sayıdan fazla istek gönderemezsiniz. Bu limit aşıldığında, bir süreliğine daha fazla istek gönderemezsiniz.
- Uygulama, GitHub kullanıcılarını aramak için basit ve etkili bir yol sağlar. Daha karmaşık sorgular için GitHub API'nin gelişmiş özellikleri kullanılabilir.
- `fetch` fonksiyonu, GitHub API'ye GET isteği gönderir ve dönen sonuçları JSON formatına çevirir.
- Bu uygulama, GitHub API ile etkileşim kurmak için `fetch` fonksiyonunu kullanır. Daha gelişmiş uygulamalar için `axios` gibi bir HTTP istemcisini düşünebilirsiniz.
- Uygulama, kullanıcıların GitHub'da arama yapmasını sağlar. GitHub API'nin diğer özelliklerini kullanarak daha gelişmiş işlemler gerçekleştirebilirsiniz.

```

```
