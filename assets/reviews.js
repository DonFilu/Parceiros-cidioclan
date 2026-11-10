// Componente público de avaliações. Sem autenticação e banco, nenhuma nota é salva.
export function mountReviews(root,partner){
  const section=document.createElement('section');section.className='reviews-section panel';
  section.innerHTML='<div class="reviews-header"><div><h2>Avaliações e comentários</h2><p>Veja o que a comunidade acha deste parceiro.</p></div><button class="review-button" type="button">☆ Avaliar</button></div><div class="rating-summary"><div class="rating-score">— <span>/ 5</span></div><div><div class="rating-stars">☆☆☆☆☆</div><div class="rating-count">0 avaliações • Ainda não há notas publicadas</div></div></div><div class="reviews-empty">Seja a primeira pessoa a avaliar este parceiro quando o login estiver disponível.</div>';
  root.append(section);
  const modal=document.createElement('dialog');modal.className='auth-dialog';modal.setAttribute('aria-labelledby','auth-title');modal.innerHTML='<div class="dialog-top"><span class="discord-mark">★</span><button type="button" class="dialog-close" aria-label="Fechar">✕</button></div><h2 id="auth-title">Precisa logar para avaliar</h2><p>Para dar de 1 a 5 estrelas e escrever sua avaliação, você precisará entrar com sua conta do Discord.</p><div class="preview-rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div><button type="button" class="discord-button">Entrar com Discord</button><p class="auth-soon" role="status">Login pelo Discord em breve. Nenhuma avaliação será enviada agora.</p>';
  document.body.append(modal);
  section.querySelector('.review-button').addEventListener('click',()=>modal.showModal());
  modal.querySelector('.dialog-close').addEventListener('click',()=>modal.close());
  modal.addEventListener('click',event=>{if(event.target===modal)modal.close()});
  modal.querySelector('.discord-button').addEventListener('click',()=>{modal.querySelector('.auth-soon').textContent='O login com Discord ainda não está disponível. Voltaremos a ativar este botão após integrar a autenticação.'});
}
