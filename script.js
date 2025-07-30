function watchVideo() {
  const btn = document.getElementById('downloadBtn');
  const progressBar = document.getElementById('progressBar');
  const progressFill = document.getElementById('progressFill');
  const statusText = document.getElementById('statusText');
  
  // Disable button and show progress
  btn.disabled = true;
  btn.innerHTML = '<span class="video-icon">⏳</span> در حال بارگذاری...';
  progressBar.style.display = 'block';
  statusText.textContent = 'در حال آماده‌سازی پخش‌کننده ویدیو...';
  
  // Google Drive video link for online viewing
  const googleDriveUrl = 'https://drive.google.com/file/d/18tPCrqvDY1-l8f3urOHrp3Ze1Abxb5pJ/view?usp=sharing';
  
  // Simulate loading progress
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 20;
    if (progress > 100) progress = 100;
    
    progressFill.style.width = progress + '%';
    
    if (progress >= 100) {
      clearInterval(interval);
      statusText.textContent = 'ویدیو با موفقیت باز شد!';
      
      // Open Google Drive video in new tab for online viewing
      const link = document.createElement('a');
      link.href = googleDriveUrl;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Reset button after a delay
      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = '<span class="video-icon">🎥</span> مشاهده ویدیو طرز تهیه معجون';
        progressBar.style.display = 'none';
        progressFill.style.width = '0%';
        statusText.textContent = '';
      }, 2000);
    } else {
      statusText.textContent = `در حال بارگذاری ویدیو... ${Math.round(progress)}%`;
    }
  }, 150);
} 
