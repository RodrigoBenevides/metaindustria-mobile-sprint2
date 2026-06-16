import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { equipamentosMock } from "./src/data/equipamentosMock";
import { CadastroEquipamentoScreen } from "./src/screens/CadastroEquipamentoScreen";
import { DetalheEquipamentoScreen } from "./src/screens/DetalheEquipamentoScreen";
import { ListaEquipamentosScreen } from "./src/screens/ListaEquipamentosScreen";
import type { Equipamento } from "./src/types/Equipamento";

type Tela = "lista" | "cadastro" | "detalhe";

export default function App() {
  const [equipamentos, setEquipamentos] = useState<Equipamento[]>(equipamentosMock);
  const [telaAtual, setTelaAtual] = useState<Tela>("lista");
  const [equipamentoSelecionado, setEquipamentoSelecionado] =
    useState<Equipamento | null>(null);

  const abrirLista = () => {
    setTelaAtual("lista");
    setEquipamentoSelecionado(null);
  };

  const abrirCadastro = () => {
    setTelaAtual("cadastro");
  };

  const abrirDetalhe = (equipamento: Equipamento) => {
    setEquipamentoSelecionado(equipamento);
    setTelaAtual("detalhe");
  };

  const salvarEquipamento = (dados: Omit<Equipamento, "id">) => {
    const novoEquipamento: Equipamento = {
      id: equipamentos.length + 1,
      ...dados,
    };

    setEquipamentos((estadoAtual) => [...estadoAtual, novoEquipamento]);
    setTelaAtual("lista");
  };

  const renderizarTela = () => {
    if (telaAtual === "cadastro") {
      return (
        <CadastroEquipamentoScreen
          onCancelar={abrirLista}
          onSalvar={salvarEquipamento}
        />
      );
    }

    if (telaAtual === "detalhe" && equipamentoSelecionado) {
      return (
        <DetalheEquipamentoScreen
          equipamento={equipamentoSelecionado}
          onVoltar={abrirLista}
        />
      );
    }

    return (
      <ListaEquipamentosScreen
        equipamentos={equipamentos}
        onAbrirCadastro={abrirCadastro}
        onSelecionarEquipamento={abrirDetalhe}
      />
    );
  };

  return <View style={styles.container}>{renderizarTela()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101828",
  },
});
