/* Estilos gerais */
body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }
  
  /* Header */
  header {
    background-color: #f0f0f0;
    padding: 20px;
  }
  
  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  nav li {
    display: inline;
    margin-right: 20px;
  }
  
  /* Seções */
  section {
    padding: 40px;
  }
  
  #home {
    text-align: center;
  }
  
  /* Portfolio */
  .projeto {
    display: inline-block;
    margin: 20px;
  }
  
  /* Responsividade */
  @media (max-width: 768px) {
    .projeto {
      display: block;
      margin: 20px 0;
    }
  }