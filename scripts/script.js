const modal = {
    open (){
        //Abrir Modal || Adicionar a classe ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
        
    },
    close (){
        //Fechar o modal || Remover a classe do modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}