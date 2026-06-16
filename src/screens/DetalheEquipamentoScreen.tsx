import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import type { Equipamento } from "../types/Equipamento";

type DetalheEquipamentoScreenProps = {
  equipamento: Equipamento;
  onVoltar: () => void;
};

const statusStyles = {
  ATIVO: {
    backgroundColor: "#DCFCE7",
    color: "#166534",
  },
  MANUTENCAO: {
    backgroundColor: "#FEF3C7",
    color: "#92400E",
  },
  INATIVO: {
    backgroundColor: "#FEE2E2",
    color: "#991B1B",
  },
} as const;

export function DetalheEquipamentoScreen({
  equipamento,
  onVoltar,
}: DetalheEquipamentoScreenProps) {
  const badgeStyle = statusStyles[equipamento.status];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.sectionLabel}>Detalhes do equipamento</Text>
        <Text style={styles.title}>{equipamento.nome}</Text>
        <Text style={styles.subtitle}>
          Consulte os dados simulados do equipamento selecionado.
        </Text>

        <View style={styles.card}>
          <View style={[styles.badge, { backgroundColor: badgeStyle.backgroundColor }]}>
            <Text style={[styles.badgeText, { color: badgeStyle.color }]}>
              {equipamento.status}
            </Text>
          </View>

          <View style={styles.infoGroup}>
            <Text style={styles.label}>Nome</Text>
            <Text style={styles.value}>{equipamento.nome}</Text>
          </View>

          <View style={styles.infoGroup}>
            <Text style={styles.label}>Setor</Text>
            <Text style={styles.value}>{equipamento.setor}</Text>
          </View>

          <View style={styles.infoGroup}>
            <Text style={styles.label}>Temperatura atual</Text>
            <Text style={styles.value}>{equipamento.temperaturaAtual.toFixed(1)} °C</Text>
          </View>

          <View style={styles.infoGroup}>
            <Text style={styles.label}>Data da ultima manutencao</Text>
            <Text style={styles.value}>{equipamento.dataUltimaManutencao}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={onVoltar}
          activeOpacity={0.85}
        >
          <Text style={styles.primaryButtonText}>Voltar para a lista</Text>
        </TouchableOpacity>
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
    padding: 20,
  },
  sectionLabel: {
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
  card: {
    backgroundColor: "#F8FAFC",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#D0D5DD",
    marginBottom: 20,
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 18,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
  },
  infoGroup: {
    marginBottom: 16,
  },
  label: {
    color: "#475467",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  value: {
    color: "#101828",
    fontSize: 17,
  },
  primaryButton: {
    backgroundColor: "#2563EB",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
