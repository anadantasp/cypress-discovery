import SignupPage from '../pages/SignupPage'

describe('Cadastro', ()=>{

    before(function(){
        cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
    })

    beforeEach(function(){
        cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
    })

    after(function(){
        cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
    })

    afterEach(function(){
        cy.log('Tudo aqui é executado sempre DEPOIS de CADA caso de teste')
    })

    it('Usuário deve se tornar um entregador', ()=>{

        var deliver = {
            name: 'Ana Prado',
            cpf: "00000014141",
            email: 'anaprado@email.com',
            whatsapp: '11999999999',
            address:{
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Apto 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.modalContentShouldBe(expectedMessage)

    })

    it('CPF incorreto', ()=>{

        var deliver = {
            name: 'Ana Prado',
            cpf: "000000141AA",
            email: 'anaprado@email.com',
            whatsapp: '11999999999',
            address:{
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Apto 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        var signup = new SignupPage()

       signup.go()
       signup.fillForm(deliver)
       signup.submit()
       signup.alertMessageShouldBe('Oops! CPF inválido')
    })
})