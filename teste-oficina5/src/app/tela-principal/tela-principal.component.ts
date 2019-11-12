import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tela-principal',
    templateUrl: './tela-principal.component.html',
    styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    items = [
        {
            "product": {
                "id": 2321312,
                "name": "Smartphone Apple iPhone 7 128GB",
                "images": [
                    "../../assets/images/smartphone.jpg"
                ],
                "price": {
                    "value": 3509.10,
                    "installments": 10,
                    "installmentValue": 389.90
                }
            }
        },
        {
            "product": {
                "id": 9971,
                "name": "Smart TV Samsung Série 4 UN32J4300AG 32 polegadas LED Plana",
                "images": ["../../assets/images/__400x400-PU95547_2_c.jpg"],
                "price": {
                    "value": 1139.90,
                    "installments": 10,
                    "installmentValue": 134.11
                }
            }
        },
        {
            "product": {
                "id": 6717132,
                "name": "Câmera Digital Canon EOS Rebel T5i 18.0 Megapixels",
                "images": [
                    "../../assets/images/camera.jpg"
                ],
                "price": {
                    "value": 1999.20,
                    "installments": 10,
                    "installmentValue": 235.20
                }
            }
        },
        {
            "product": {
                "id": 6717131,
                "name": "Lenovo IdeaPad 310 80UH0004BR Intel Core i7-6500U 2.5 GHz 8192 MB 1024 GB",
                "images": [
                    "../../assets/images/notebook.jpg"
                ],
                "price": {
                    "value": 2599.00,
                    "installments": 10,
                    "installmentValue": 259.90
                }
            }
        }
    ];

    itensCarrinho = [];
    total = 0
    parcial = 0

    adicionarCarrinho(id) {
        let obj;
        let cont = 0

        this.items.filter(d => { if (d.product.id == id) obj = d });
        this.itensCarrinho.filter(d => { if (d.product.id == id) cont = id })
        if (cont != id) {
            this.itensCarrinho.push(obj)
        } else {
            this.itensCarrinho.push(obj)
            console.log(obj);
        }
        this.total = this.total + obj.product.price.value
        this.parcial = this.parcial + obj.product.price.installmentValue
    }
    verificaId(id) {
        
    }
    abrirCarrinho() {
        this.itensCarrinho;
    }

    apagaItemCarrinho(id) {

        let arrayAux = []
        let parar = false;
        
        for (let i = 0; i <= this.itensCarrinho.length - 1; i++) {

            if (id != this.itensCarrinho[i].product.id) {
                arrayAux.push(this.itensCarrinho[i])
            } else {
                //diminui os valores do subtotal
                this.total = this.total - this.itensCarrinho[i].product.price.value
                this.parcial = this.parcial - this.itensCarrinho[i].product.price.installmentValue
            }
        }

        this.itensCarrinho = arrayAux;

    }

    apagaCarrinho() {
        this.itensCarrinho = []
        this.total = 0
        this.parcial = 0
        return this.itensCarrinho, this.total, this.parcial

    }

}
   


        
    