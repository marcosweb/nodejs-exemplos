/**
 * Tarefas agendadas com Temporizador equivalente ao CRON JOB
 */

// Pacote do Node com temporizador
const schedule = require('node-schedule')

/**
 * primeira tarefa temporizada:
 * 
 * - executa de 5 em 5 segundos, 
 * - a qualquer minuto, 
 * - as 12h, 
 * - qquer dia do mês, 
 * - qquer mês, 
 * - as terças-feiras
 */
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', () => {
    console.log('Executando tarefa 1:', new Date().getSeconds())
})

// temporizador nativo do JS que cancela a 'tarefa 1' (acima) após 20 segundos
setTimeout(() => {
    tarefa1.cancel(); 
    console.log('Cancelando tarefa 1')
}, 20000)

/**
 * criando tarefa recorrente:
 * - de segunda a sexta feira (1, 5)
 * - 12 horas
 * - 30 minutos
 */
const rule = new schedule.RecurrenceRule()

rule.dayOfWeek = [new schedule.Range(1, 5)]
rule.hour = 12
rule.second = 30

const tarefa2 = schedule.scheduleJob(rule, () => {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})