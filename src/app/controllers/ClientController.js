import Client from '../models/Client'

class ClientController {
  async store (req, res) {
    const {
      nome, email, cpf,
      qtde_equipamentos, capacidade_oleo,	custo_litro,
	    custo_filtro,	intervalo_de_trocas, utilizacao_anual,
	    custo_operacional, custo_de_descarte
    } = req.body

    const C2 = qtde_equipamentos
    const C3 = capacidade_oleo
    const C4 = custo_litro
    const C5 = custo_filtro
    const	C6 = intervalo_de_trocas
    const C7 = utilizacao_anual
    const C8 = custo_operacional
    const C9 = custo_de_descarte
    const C10 = 40000
    const C11 = 2000
    const C12 = 130
    const C13 = 4
    const C14 = 0

    const custo_sistema_convencional = ((((C3 * C4) + C5 + C8 + (C3 * C9 * 0.85)) * (C7 / C6))) * C2
    const custo_smart = ((((C3 * C4) + C5 + C8 + (C3 * C9 * 0.85) + (C13 * C12)) * (C7 / C10))) * C2
    const economia_anual = custo_sistema_convencional - custo_smart
    let economia_perc
    const consumo_atual = (C7 / C6) * (C2 * C3)
    const consumo_com_filtro = (C7 / C10) * C3 * C2
    const economia_em_litros = consumo_atual - custo_filtro

    await Client.create({
      nome,
      email,
      cpf,
      qtde_equipamentos,
      capacidade_oleo,
      custo_litro,
      custo_filtro,
      intervalo_de_trocas,
      utilizacao_anual,
      custo_operacional,
      custo_de_descarte,
      custo_sistema_convencional,
      custo_smart,
      economia_anual,
      consumo_atual,
      consumo_com_filtro,
      economia_em_litros
    })
  }

  async update (req, res) {

  }
}

export default new ClientController()
