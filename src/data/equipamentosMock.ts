import type { Equipamento } from "../types/Equipamento";

export const equipamentosMock: Equipamento[] = [
  {
    id: 1,
    nome: "Prensa Hidraulica 01",
    setor: "Linha de Producao A",
    status: "ATIVO",
    temperaturaAtual: 72.5,
    dataUltimaManutencao: "2026-05-10",
  },
  {
    id: 2,
    nome: "Esteira Transportadora 02",
    setor: "Expedicao",
    status: "MANUTENCAO",
    temperaturaAtual: 49.3,
    dataUltimaManutencao: "2026-05-04",
  },
  {
    id: 3,
    nome: "Compressor Industrial 03",
    setor: "Utilidades",
    status: "INATIVO",
    temperaturaAtual: 18.9,
    dataUltimaManutencao: "2026-04-22",
  },
];
