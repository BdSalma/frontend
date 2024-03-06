import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chatbot-dialog',
  templateUrl: './chatbot-dialog.component.html',
  styleUrls: ['./chatbot-dialog.component.css']
})
export class ChatbotDialogComponent {

  isChatVisible: boolean = false;
  messages: { text: string, sender: 'user' | 'bot', suggestions?: string[] }[] = [];
  @Output() closeChatbot = new EventEmitter<void>();
  userInput: string = '';

  toggleChatVisibility() {
    this.isChatVisible = !this.isChatVisible;
  }
  


  sendMessage(message: string) {
    if (!message) return;
    this.messages.push({ text: message, sender: 'user' });
    this.processMessage(message);
    this.userInput = '';
  }



  
  processMessage(message: string) {
    let response = 'Je ne comprends pas la question.';
    let suggestions: string[] = [];
    message = message.toLowerCase();

    // Conditions for responding to user messages
    if (message.includes("quand")) {
      response = "Le forum d'entreprise aura lieu le 25 Octobre 2024.";suggestions = [
        "Quand aura lieu le forum d'entreprise ?",
        "OÃ¹ se dÃ©roulera le forum ?",
        "Quel est le thÃ¨me du forum cette annÃ©e ?",
        "Comment puis-je m'inscrire ?",
      ];
    } else if (message.includes("oÃ¹")) {
      response = "Il se dÃ©roulera au Centre de Conventions Internationales, Paris.";
      suggestions = [
        "Quand aura lieu le forum d'entreprise ?",
        "OÃ¹ se dÃ©roulera le forum ?",
        "Quel est le thÃ¨me du forum cette annÃ©e ?",
        "Comment puis-je m'inscrire ?",
      ];
    } else if (message.includes('salut') || message.includes('bonjour')) {
      response = 'Salut ! Comment puis-je vous aider ?';
      suggestions = [
        "Quand aura lieu le forum d'entreprise ?",
        "OÃ¹ se dÃ©roulera le forum ?",
        "Quel est le thÃ¨me du forum cette annÃ©e ?",
        "Comment puis-je m'inscrire ?",
      ];
    } else if (message.includes("thÃ¨me") || message.includes("sujet")) {
      response = "Le thÃ¨me de notre forum d'entreprise cette annÃ©e est 'Innovation et Collaboration'.";
      suggestions = [
        "Qui sont les intervenants ?",
        "Comment s'inscrire ?",
      ];
    }  else if (message.includes("accessibilitÃ©")) {
      response = "Le lieu est entiÃ¨rement accessible aux personnes Ã  mobilitÃ© rÃ©duite.";
    } else if (message.includes("transport") || message.includes("parking")) {
      response = "Des informations sur le transport et le parking sont disponibles sur notre site.";
    } else if (message.includes("hÃ©bergement")) {
      response = "Nous avons des partenariats avec des hÃ´tels Ã  proximitÃ©. Plus de dÃ©tails sur notre site.";
    } else if (message.includes("application mobile")) {
      response = "TÃ©lÃ©chargez notre application mobile pour rester informÃ© pendant l'Ã©vÃ©nement.";
    } else if (message.includes("sÃ©curitÃ©")) {
      response = "Nous suivons des protocoles de sÃ©curitÃ© stricts pour assurer le bien-Ãªtre de tous les participants.";
    } // Continuez Ã  ajouter des conditions pour les autres points...
    else if (message.includes('comment') && message.includes('inscrire')) {
      response = "Pour vous inscrire, veuillez visiter notre page d'inscription sur notre site web et remplir le formulaire. Si vous avez besoin d'aide supplÃ©mentaire, n'hÃ©sitez pas Ã  nous contacter.";
      // Vous pouvez Ã©galement ajouter des suggestions ici si nÃ©cessaire, par exemple :
      suggestions = ["Quel est le coÃ»t de l'inscription ?", "Quels documents sont nÃ©cessaires pour l'inscription ?"];
    }
    // Exemple d'ajout pour tous les points mentionnÃ©s
    // ...
    else if (message.includes("rÃ©seaux sociaux")) {
      response = "Suivez-nous sur les rÃ©seaux sociaux et partagez votre expÃ©rience avec #NotreHashtag.";
    } else if (message.includes("vente de produits") || message.includes("merchandising")) {
      response = "Des produits officiels de l'Ã©vÃ©nement sont disponibles Ã  notre stand de merchandising.";
    } else if (message.includes("sessions virtuelles")) {
      response = "Des sessions virtuelles sont disponibles pour les participants ne pouvant pas assister en personne.";
    } else if (message.includes("politique d'annulation")) {
      response = "Consultez notre politique d'annulation sur notre site web pour plus d'informations.";
    } else if (message.includes("sessions q&a")) {
      response = "Les sessions de questions-rÃ©ponses auront lieu aprÃ¨s chaque confÃ©rence. Ne les manquez pas !";
    } else if (message.includes("opportunitÃ©s de sponsorisation")) {
      response = "IntÃ©ressÃ© par des opportunitÃ©s de sponsorisation ? Contactez-nous pour en savoir plus.";
    } else if (message.includes("Ã©vÃ©nements sociaux")) {
      response = "Ne manquez pas nos Ã©vÃ©nements sociaux pour un networking de qualitÃ©.";
    } else if (message.includes("galerie photo") || message.includes("galerie vidÃ©o")) {
      response = "Retrouvez les photos et vidÃ©os de l'Ã©vÃ©nement sur notre galerie en ligne aprÃ¨s l'Ã©vÃ©nement.";
    } else {
      response = "DÃ©solÃ©, je n'ai pas de rÃ©ponse Ã  votre question pour le moment. Veuillez reformuler ou poser une autre question.";
    }

    this.messages.push({ text: response, sender: 'bot', suggestions: suggestions });
  }

  onSuggestionClick(suggestion: string) {
    this.sendMessage(suggestion);
  }
  compileDiscussion(): string {
    return this.messages.map(message => {
      const sender = message.sender === 'user' ? 'Vous' : 'Chatbot';
      return `${sender}: ${message.text}\n`;
    }).join('');
  }

  downloadDiscussion(): void {
    const discussion = this.compileDiscussion();
    const blob = new Blob([discussion], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = 'discussion-chatbot.txt'; // Nom du fichier Ã  tÃ©lÃ©charger
    document.body.appendChild(a);
    a.click();
    
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
  

  close() {
    this.closeChatbot.emit();
  }
}
