/**
 * CampusMarket - Authentication JavaScript
 * Handles interactive behaviors, validation, and simulated auth
 */

document.addEventListener('DOMContentLoaded', () => {
  // Password Visibility Toggle
  const passwordInput = document.getElementById('password');
  const togglePasswordBtn = document.getElementById('togglePassword');
  const eyeIcon = document.getElementById('eyeIcon');

  if (togglePasswordBtn && passwordInput && eyeIcon) {
    togglePasswordBtn.addEventListener('click', () => {
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
      
      // Update icon FontAwesome class
      if (isPassword) {
        eyeIcon.className = 'fa-regular fa-eye-slash';
        togglePasswordBtn.setAttribute('aria-label', 'Hide password');
      } else {
        eyeIcon.className = 'fa-regular fa-eye';
        togglePasswordBtn.setAttribute('aria-label', 'Show password');
      }
    });
  }

  // Load Saved Email if "Remember Me" was checked previously
  const emailInput = document.getElementById('email');
  const rememberCheckbox = document.getElementById('rememberMe');
  const savedEmail = localStorage.getItem('cm_remembered_email');
  
  if (savedEmail && emailInput && rememberCheckbox) {
    emailInput.value = savedEmail;
    rememberCheckbox.checked = true;
  }

  // Sign In Form Submission
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = emailInput ? emailInput.value.trim() : '';
      const password = passwordInput ? passwordInput.value : '';

      if (!email) {
        showToast('Please enter your campus email address', 'error');
        emailInput?.focus();
        return;
      }

      if (!password) {
        showToast('Please enter your password', 'error');
        passwordInput?.focus();
        return;
      }

      // Save or clear remembered email
      if (rememberCheckbox && rememberCheckbox.checked) {
        localStorage.setItem('cm_remembered_email', email);
      } else {
        localStorage.removeItem('cm_remembered_email');
      }

      // Simulate sign in
      const submitBtn = document.getElementById('signInBtn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <i class="fa-solid fa-circle-notch fa-spin"></i>
          Signing in...
        `;
      }

      setTimeout(() => {
        showToast('Welcome back! Signed in successfully.', 'success');
        // Store current user session in localStorage
        const userProfile = {
          name: email.split('@')[0].replace('.', ' '),
          email: email,
          isLoggedIn: true,
          campus: 'Centurion University'
        };
        localStorage.setItem('cm_current_user', JSON.stringify(userProfile));

        setTimeout(() => {
          // If home page exists, redirect or navigate
          if (window.location.pathname.includes('/pages/auth/')) {
            window.location.href = '../home/HomePage.html';
          } else {
            window.location.href = 'pages/home/HomePage.html';
          }
        }, 800);
      }, 1000);
    });
  }

  // Google Student ID Button Action
  const googleBtn = document.getElementById('googleSignInBtn');
  if (googleBtn) {
    googleBtn.addEventListener('click', () => {
      showToast('Connecting to Student Google ID service...', 'success');
      setTimeout(() => {
        const studentUser = {
          name: 'Alex Smith',
          email: 'alex.smith@college.edu',
          isLoggedIn: true,
          campus: 'University Campus'
        };
        localStorage.setItem('cm_current_user', JSON.stringify(studentUser));
        if (window.location.pathname.includes('/pages/auth/')) {
          window.location.href = '../home/HomePage.html';
        } else {
          window.location.href = 'pages/home/HomePage.html';
        }
      }, 900);
    });
  }

  // Toast Helper
  function showToast(message, type = 'success') {
    let toast = document.getElementById('authToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'authToast';
      toast.className = 'auth-toast';
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.className = `auth-toast show ${type}`;

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
});

