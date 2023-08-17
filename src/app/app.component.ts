import { Component, OnInit } from '@angular/core';
import * as intlTelInput from 'intl-tel-input';
import { localizedCountries } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private iti?: intlTelInput.Plugin;


  ngOnInit(): void {
    // OBS: Não explorei tudo: https://github.com/jackocnr/intl-tel-input
    // acho que tem outras opções que podem deixar ainda melhor isso
    const input = document.querySelector('#phone');
    if (input) {
      this.iti = intlTelInput(input, {
        customContainer: 'phone-container', // estilizações customizadas
        initialCountry: 'br',
        preferredCountries: ["br"],
        separateDialCode: true, // para ficar igual ao ux 
        localizedCountries, // aqui vai o objeto com as traduções
        utilsScript:
          'https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js',
      });

      this.iti?.setNumber("+5588998164029") // para um possivel update
    }
  }

  submit() {
    // Aqui pega o número de telefone
    // Porem não consegui algo solido para validação
    const phone = this.iti?.getNumber();
    console.log(phone);
  }
}
