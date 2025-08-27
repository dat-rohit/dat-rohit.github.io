---
title: Resume Download
---

<script>
// Force download of the CV
function downloadCV() {
    const link = document.createElement('a');
    link.href = '/static/cv_datchanamourty_r.pdf';
    link.download = 'Rohit_Datchanamourty_CV.pdf';
    link.click();
    // Redirect back to home after download starts
    setTimeout(() => {
        window.location.href = '/';
    }, 500);
}

// Start download immediately when page loads
window.onload = downloadCV;
</script>

### [dat-rohit dot com](.)

# Resume Download

Your CV download should start automatically. If it doesn't, [click here to download](static/cv_datchanamourty_r.pdf).

[← Back to home](.)