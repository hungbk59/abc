const logout = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch("http://localhost:8000/api/logout", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
    localStorage.removeItem("access_token")
    console.warn("Bạn đã đăng suất")
  }

export default logout