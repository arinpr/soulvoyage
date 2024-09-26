function getTokenEmailUsername() {
    console.log(localStorage)
    const token = localStorage.getItem('SavedToken');
    const email = localStorage.getItem('SavedEmail');
    const username = localStorage.getItem('SavedUserName');
    return { token, email, username };
}

export { getTokenEmailUsername };