import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { EquipamentoCard } from "../components/EquipamentoCard";
import type { Equipamento } from "../types/Equipamento";

type ListaEquipamentosScreenProps = {
  equipamentos: Equipamento[];
  onAbrirCadastro: () => void;
  onSelecionarEquipamento: (equipamento: Equipamento) => void;
};

export function ListaEquipamentosScreen({
  equipamentos,
  onAbrirCadastro,
  onSelecionarEquipamento,
}: ListaEquipamentosScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.appLabel}>Metaindustria Mobile</Text>
        <Text style={styles.title}>Monitoramento de Equipamentos</Text>
        <Text style={styles.subtitle}>
          Dados simulados para a Sprint 2, sem integracao com backend.
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={onAbrirCadastro}
          activeOpacity={0.85}
        >
          <Text style={styles.primaryButtonText}>Cadastrar equipamento</Text>
        </TouchableOpacity>

        <FlatList
          data={equipamentos}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <EquipamentoCard
              equipamento={item}
              onPress={() => onSelecionarEquipamento(item)}
            />
          )}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateTitle}>Nenhum equipamento cadastrado.</Text>
              <Text style={styles.emptyStateText}>
                Use o botao acima para adicionar um novo registro local.
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#101828",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  appLabel: {
    color: "#60A5FA",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.8,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  title: {
    color: "#F8FAFC",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    color: "#CBD5E1",
    fontSize: 15,
    lineHeight: 21,
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: "#2563EB",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 18,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  listContent: {
    paddingBottom: 24,
  },
  emptyState: {
    backgroundColor: "#F8FAFC",
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: "#D0D5DD",
  },
  emptyStateTitle: {
    color: "#0F172A",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  emptyStateText: {
    color: "#475467",
    fontSize: 14,
    lineHeight: 20,
  },
});
