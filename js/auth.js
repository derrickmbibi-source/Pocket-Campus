//SignUP

async function signUp() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await _supabase.auth.signUp({ email, password })

  if (error) {
    console.error(error.message)
  } else {
    alert('Check your email to confirm your account!')
  }
}

//SignIN
async function signIn() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await _supabase.auth.signInWithPassword({ email, password })

  if (error) {
    console.error(error.message)
  } else {
    console.log('Logged in:', data.user)
  }
}

//SignOUT
async function signOut() {
  const { error } = await _supabase.auth.signOut()
  if (!error) {
    console.log('Signed out')
  }
}