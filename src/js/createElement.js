export default function createElem() {
  document.body.innerHTML = `<div class="container">
      <h3>Проверьте номер вашей кредитной карты</h3>
      <ul class="cards">
        <li class="card visa" title="Visa">Visa</li>
        <li class="card master" title="Mastercard">Mastercard</li>
        <li class="card amex" title="American Express">American Express</li>
        <li class="card discover" title="Discover">Discover</li>
        <li class="card jcb" title="JCB">JCB</li>
        <li class="card diners_club" title="Diners Club">Diners Club</li>
        <li class="card mir" title="Mir">Mir</li>
      </ul>
      <form id="form" class="form-inline" novalidate="novalidate">
          <input
            class="form-control"
            id="card_number"
            name="card_number"
            type="text"
            placeholder="Номер кредитной карты"
          >
          <button id="submitform" class="btn btn-success">Подтвердить</button>
      </form>
    </div>`;

  console.log('Test: createElem.js!');
}
