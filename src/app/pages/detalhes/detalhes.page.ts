import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvService } from 'src/app/provides/tv.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  constructor(public route: ActivatedRoute, public tv: TvService) { }
  id = null;
  session = null;
  qtdSessoes: number;
  imagem = null;
  nome = null;
  summary = null;
  dados = null;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.tv.getDetalhes(this.id)
      .subscribe((dados:[{}]) => {
        this.dados = dados;
        this.nome = dados['name'];
        this.imagem = dados['image']['original'];
        this.summary = dados['summary'];
      });

    this.tv.getSession(this.id)
    .subscribe((dados: [{}]) => {
      this.session = dados;
      this.qtdSessoes = dados.length;
    })
  }

}
