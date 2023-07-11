const termsAndCondition = document.querySelector('.terms--and--conditions'),
    acceptTerms = document.querySelector('.accept');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting === true) {
            acceptTerms.setAttribute('data-disabled', false);
        } else {
            acceptTerms.setAttribute('data-disabled', true);
        }
    });
});

observer.observe(acceptTerms);

acceptTerms.addEventListener('click', () => {
    alert('You have accepted the terms and conditions.');
});
