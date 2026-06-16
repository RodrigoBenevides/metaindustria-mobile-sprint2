# Metaindustria Mobile Sprint 2

Aplicativo mobile desenvolvido com React Native, Expo e TypeScript para simular o monitoramento e o cadastro de equipamentos industriais com dados mockados.

## Contexto da Sprint 2

Na Sprint 1, foi desenvolvido o backend Spring Boot da Metaindustria com a entidade `Equipamento`.

Nesta Sprint 2, o foco esta no frontend mobile, sem integracao com backend. O app usa apenas estado local e dados simulados para demonstrar o fluxo principal de lista, detalhe e cadastro de equipamentos.

## Entidade utilizada

O app foi construido com base na entidade `Equipamento`.

```ts
export type Equipamento = {
  id: number;
  nome: string;
  setor: string;
  status: "ATIVO" | "MANUTENCAO" | "INATIVO";
  temperaturaAtual: number;
  dataUltimaManutencao: string;
};
```

## Estrutura de pastas

```text
src/
  components/
    EquipamentoCard.tsx
  data/
    equipamentosMock.ts
  screens/
    CadastroEquipamentoScreen.tsx
    DetalheEquipamentoScreen.tsx
    ListaEquipamentosScreen.tsx
  types/
    Equipamento.ts
App.tsx
README.md
entrega.txt
```

## Como os dados estao mockados

Os dados foram definidos no arquivo `src/data/equipamentosMock.ts` e carregados no `App.tsx` com `useState`.

O app inicia com pelo menos 3 registros simulados:

- Prensa Hidraulica 01
- Esteira Transportadora 02
- Compressor Industrial 03

Os novos equipamentos cadastrados sao adicionados apenas ao estado local durante a execucao do app.

## Como rodar o projeto

```bash
npm install
npm start
```

Ou, se preferir:

```bash
npx expo start
```

## Fluxo demonstrado no app

- Abertura na tela de lista de equipamentos
- Visualizacao de equipamentos mockados
- Acesso a tela de detalhe ao tocar em um card
- Retorno para a lista
- Acesso a tela de cadastro
- Cadastro de novo equipamento com validacao simples
- Retorno automatico para a lista com o novo equipamento exibido

## Observacao importante

Este projeto ainda nao possui integracao com backend.

Nao sao utilizados:

- Axios
- fetch
- Firebase
- banco externo
- React Navigation
- AsyncStorage
- Redux, Zustand ou React Query

## Integrantes do grupo

- Rodrigo Caruzzo Benevides - RM 554665
- Gustavo Demeis Peres - RM 555143
- Caio Tadeu Da Silva Faraleski - RM 558795
- Pedro Alvarez Certo - RM 554603
- Eduardo do Nascimento Souza - RM 558819
