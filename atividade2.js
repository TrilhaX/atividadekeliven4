var tarefas = []

function novaTarefa(tarefaF, status){
    if (tarefaF && status){
        const tarefa = {
            tarefaF,
            status
        }
        tarefas.push(tarefa)
        console.log("Tarefa criada")
    } else {
        console.log("Sem descrição ou status da tarefa")
    }
}

function tarefasCadastradas(){
    if (tarefas.length !== 0){
        console.log("As tarefas criadas são:")
        tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa.tarefaF} - Status: ${tarefa.status}`)
        })
    } else {
        console.log("Nenhuma tarefa criada")
    }
}

function tarefasRemovidas(status){
    const tarefasParaRemover = tarefas.filter(tarefa => tarefa.status === status)

    if (tarefasParaRemover.length > 0){
        console.log("Tarefas removidas:")
        tarefasParaRemover.forEach((tarefa) => {
            console.log(`${tarefa.tarefaF} - Status: ${tarefa.status}`)
        })
        tarefas = tarefas.filter(tarefa => tarefa.status !== status)
    } else {
        console.log("Nenhuma Tarefa com esse status")
    }
}

function tarefasConcluidas(indice){
    if (indice >= 0 && indice < tarefas.length){
        tarefas[indice].status = "Concluída"
        console.log(`Tarefas concluidas: ${indice}`)
    } else {
        console.log("Índice inválido")
    }
}

novaTarefa("Limpar a Workspace", "Não Concluida")
tarefasCadastradas()
tarefasRemovidas()
tarefasConcluidas(0)