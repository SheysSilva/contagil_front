<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ['COD_VER', 'COD_FIN', 'DT_INI', 'DT_FIN', 'NOME', 'CNPJ', 'UF', 'IE', 'COD_MUN', 'SUFRAMA', 'IND_PERFIL', 'IND_ATIV'],
        items: [
          { COD_VER: 2029382, COD_FIN: 2029382, DT_INI: '20/09/2019', DT_FIN: '20/09/2019', NOME: 'Contagil', CNPJ: 1234443443, UF: 'PB', IE: 'mvklgfn', COD_MUN: 28328438483, SUFRAMA: 'mvklgfn', IND_PERFIL: 'mvklgfn', IND_ATIV: 'mvklgfn'},
          { COD_VER: 2029382, COD_FIN: 2029382, DT_INI: '20/09/2019', DT_FIN: '20/09/2019', NOME: 'Contagil', CNPJ: 1234443443, UF: 'PB', IE: 'mvklgfn', COD_MUN: 28328438483, SUFRAMA: 'mvklgfn', IND_PERFIL: 'mvklgfn', IND_ATIV: 'mvklgfn'},
          { COD_VER: 2029382, COD_FIN: 2029382, DT_INI: '20/09/2019', DT_FIN: '20/09/2019', NOME: 'Contagil', CNPJ: 1234443443, UF: 'PB', IE: 'mvklgfn', COD_MUN: 28328438483, SUFRAMA: 'mvklgfn', IND_PERFIL: 'mvklgfn', IND_ATIV: 'mvklgfn'},
          { COD_VER: 2029382, COD_FIN: 2029382, DT_INI: '20/09/2019', DT_FIN: '20/09/2019', NOME: 'Contagil', CNPJ: 1234443443, UF: 'PB', IE: 'mvklgfn', COD_MUN: 28328438483, SUFRAMA: 'mvklgfn', IND_PERFIL: 'mvklgfn', IND_ATIV: 'mvklgfn'}
        ]
      }
    }
  }
</script>
