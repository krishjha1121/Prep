<style>
/* 📱 Responsive grid and card size adjustments */
@media (max-width: 768px) {
  /* Make the grid 1 column on mobile */
  div[style*="grid-template-columns"] {
    grid-template-columns: 1fr !important;
    gap: 3rem !important;
    max-width: 95% !important;
    margin: 1rem auto !important;
  }

  /* Shrink ElectricCard size on mobile */
  .main-card {
    width: 280px !important;
    height: 350px !important;
  }

  /* Optional: smaller text & padding for better fit */
  .title {
    font-size: 22px !important;
  }
  .description {
    font-size: 14px !important;
  }
  .scrollbar-glass {
    font-size: 12px !important;
    padding: 6px 12px !important;
  }
}
</style>

# Contributors

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem; margin: 2rem auto; max-width: 900px;">

<ElectricCard
  badge="Maintainer"
  image="./images/raj-cse.jpg"
  title="Raj Roy"
  role="Lead Developer"
  description="Founder and Vue expert."
  :links='[
    { "label": "GitHub", "url": "https://github.com/john" },
    { "label": "LinkedIn", "url": "https://linkedin.com/in/john" },
    { "label": "Leetcode", "url": "mailto:john@example.com" }
  ]'
/>

<ElectricCard
  badge="Contributor"
  image="./images/kanika.png"   
  title="Kanika punia"
  role="Lead Developer"
  description="Founder and Vue expert."
  :links='[
    { "label": "GitHub", "url": "https://github.com/john" },
    { "label": "LinkedIn", "url": "https://linkedin.com/in/john" },
    { "label": "Leetcode", "url": "mailto:john@example.com" }
  ]'
/>

<ElectricCard
  badge="Contributor"
  image="./images/nikhil.jpg"
  title="Nikhil sahani"
  role="Lead Developer"
  description="Founder and Vue expert."
  :links='[
    { "label": "GitHub", "url": "https://github.com/john" },
    { "label": "LinkedIn", "url": "https://linkedin.com/in/john" },
    { "label": "Leetcode", "url": "mailto:john@example.com" }
  ]'
/>

<ElectricCard
  badge="Contributor"
  image="./images/anil.jpg"
  title="Anil Kumar"
  role=" Developer "
  description="Building tomorrow’s technology!"
  :links='[
    { "label": "GitHub", "url": "https://github.com/Aniljangir89" },
    { "label": "LinkedIn", "url": "https://www.linkedin.com/in/anil-kumar-364b7b280" },
    { "label": "Leetcode", "url": "https://leetcode.com/u/anilkumar89" }
  ]'
/>

</div>
