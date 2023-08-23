import { Component, OnInit } from '@angular/core';
import { Templates } from '../models/Template.model';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-mural-template',
  templateUrl: './mural-template.component.html',
  styleUrls: ['./mural-template.component.css']
})
export class MuralTemplateComponent implements OnInit {

  public template: Templates[] = [];

  constructor(private _templateService: TemplateService) { }

  ngOnInit(): void {
    this.listarTemplate();
  }

  listarTemplate() {
    this._templateService.getTemplate()
      .subscribe(
        retornaTemplate => {
          this.template = retornaTemplate.map(
            item => {
              return new Templates(
                item.id,
                item.nome,
                item.foto,
                item.descricao1,
                item.descricao2,
                item.descricao3,
                item.salario
              );
            }
          )
        }
      )
  }
}
