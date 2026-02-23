// Login page logic moved from login.html

// Show/hide password toggle
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const togglePasswordIcon = document.getElementById('togglePasswordIcon');
if (togglePassword) {
	togglePassword.addEventListener('click', function() {
		const type = passwordInput.type === 'password' ? 'text' : 'password';
		passwordInput.type = type;
		togglePasswordIcon.className = type === 'password' ? 'bi bi-eye-slash' : 'bi bi-eye';
	});
	togglePassword.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			togglePassword.click();
		}
	});
}

// Login feedback and fake validation
const loginForm = document.getElementById('loginForm');
const loginFeedback = document.getElementById('loginFeedback');
if (loginForm) {
	loginForm.addEventListener('submit', function(e) {
		e.preventDefault();
		loginFeedback.style.display = 'none';
		loginFeedback.textContent = '';
		// Simulate loading
		showLoadingSpinner();
		setTimeout(() => {
			hideLoadingSpinner();
			// Fake validation: accept if password is 'nutridart'
			const identifier = document.getElementById('identifier').value;
			const password = passwordInput.value;
			if (password === 'nutridart') {
				loginFeedback.style.display = 'block';
				loginFeedback.style.color = '#008514';
				loginFeedback.textContent = 'Login successful! Redirecting...';
				setTimeout(() => window.location.href = 'index.html', 1200);
			} else {
				loginFeedback.style.display = 'block';
				loginFeedback.style.color = '#d32f2f';
				loginFeedback.textContent = 'Invalid credentials. Please try again.';
			}
		}, 1200);
	});
}

// Loading spinner
function showLoadingSpinner() {
	let spinner = document.getElementById('loginSpinner');
	if (!spinner) {
		spinner = document.createElement('div');
		spinner.id = 'loginSpinner';
		spinner.className = 'login-spinner';
		spinner.innerHTML = '<div class="spinner"></div>';
		loginForm.appendChild(spinner);
	}
	spinner.style.display = 'flex';
}
function hideLoadingSpinner() {
	const spinner = document.getElementById('loginSpinner');
	if (spinner) spinner.style.display = 'none';
}

