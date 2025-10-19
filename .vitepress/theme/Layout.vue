<template>
  <div>
    <!-- This will render all the default content that we have -->
    <DefaultTheme.Layout />

    <!-- custom footer goes here, AFTER the default layout -->
    <footer class="custom-footer">
      <div class="footer-content">
        <div class="footer-section about">
          <h4>Prep Notes</h4>
          <p>
            Your one-stop resource for mastering Computer Science fundamentals.
            Designed for students and professionals to excel in interviews and
            build a strong foundation in tech.
          </p>
        </div>
        <div class="footer-section links">
          <h4>Categories</h4>
          <ul>
            <li><a href="/Prep/DSA/">DSA</a></li>
            <li><a href="/Prep/LLD/">Low Level Design</a></li>
            <li><a href="/Prep/OS/">Operating Systems</a></li>
            <li><a href="/Prep/DB/">DBMS</a></li>
            <li><a href="/Prep/CN/">Computer Networks</a></li>
            <li><a href="/Prep/Java%20with%20OOP/">Java with OOP</a></li>
            <li><a href="/Prep/c++/">C++</a></li>
            <li><a href="/Prep/SQL/">SQL</a></li>
            <li><a href="/Prep/Interview/">Interview Prep</a></li>
          </ul>
        </div>
        <div class="footer-section connect">
          <h4>Connect</h4>
          <ul>
            <li>
              <a
                href="https://github.com/raj8664/Prep"
                target="_blank"
                rel="noopener noreferrer"
                >GitHub</a
              >
            </li>
            <li>
              <a
                href="https://github.com/raj8664/Prep/graphs/contributors"
                target="_blank"
                rel="noopener noreferrer"
                >Contributors</a
              >
            </li>
            <li>
              <a
                href="https://github.com/raj8664/Prep/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                >Report an Issue</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Prep Notes. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
</script>

<style scoped>
.custom-footer {
  background-color: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
  padding: 3rem 1.5rem;
  margin-top: 2rem;
  color: var(--vp-c-text-2);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
}

.footer-section h4 {
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--vp-c-brand);
  font-weight: 600;
}

.footer-section p {
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-section a:hover {
  color: var(--vp-c-brand);
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-3);
  font-size: 0.9rem;
}
</style>
