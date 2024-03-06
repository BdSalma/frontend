import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chatbot-dialog',
  templateUrl: './chatbot-dialog.component.html',
  styleUrls: ['./chatbot-dialog.component.css']
})
export class ChatbotDialogComponent {

  isChatVisible: boolean = true;
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
        "Où se déroulera le forum ?",
        "Quel est le thème du forum cette année ?",
        "Comment puis-je m'inscrire ?",
      ];
    } else if (message.includes("où")) {
      response = "Il se déroulera au Centre de Conventions Internationales, Paris.";
      suggestions = [
        "Quand aura lieu le forum d'entreprise ?",
        "Où se déroulera le forum ?",
        "Quel est le thème du forum cette année ?",
        "Comment puis-je m'inscrire ?",
      ];
    } else if (message.includes('salut') || message.includes('bonjour')) {
      response = 'Salut ! Comment puis-je vous aider ?';
      suggestions = [
        "Quand aura lieu le forum d'entreprise ?",
        "Où se déroulera le forum ?",
        "Quel est le thème du forum cette année ?",
        "Comment puis-je m'inscrire ?",
      ];
    } else if (message.includes("thème") || message.includes("sujet")) {
      response = "Le thème de notre forum d'entreprise cette année est 'Innovation et Collaboration'.";
      suggestions = [
        "Qui sont les intervenants ?",
        "Comment s'inscrire ?",
      ];
    }  else if (message.includes("accessibilité")) {
      response = "Le lieu est entièrement accessible aux personnes à mobilité réduite.";
    } else if (message.includes("transport") || message.includes("parking")) {
      response = "Des informations sur le transport et le parking sont disponibles sur notre site.";
    } else if (message.includes("hébergement")) {
      response = "Nous avons des partenariats avec des hôtels à proximité. Plus de détails sur notre site.";
    } else if (message.includes("application mobile")) {
      response = "Téléchargez notre application mobile pour rester informé pendant l'événement.";
    } else if (message.includes("sécurité")) {
      response = "Nous suivons des protocoles de sécurité stricts pour assurer le bien-être de tous les participants.";
    } // Continuez à ajouter des conditions pour les autres points...
    else if (message.includes('comment') && message.includes('inscrire')) {
      response = "Pour vous inscrire, veuillez visiter notre page d'inscription sur notre site web et remplir le formulaire. Si vous avez besoin d'aide supplémentaire, n'hésitez pas à nous contacter.";
      // Vous pouvez également ajouter des suggestions ici si nécessaire, par exemple :
      suggestions = ["Quel est le coût de l'inscription ?", "Quels documents sont nécessaires pour l'inscription ?"];
    }
    // Exemple d'ajout pour tous les points mentionnés
    // ...
    else if (message.includes("réseaux sociaux")) {
      response = "Suivez-nous sur les réseaux sociaux et partagez votre expérience avec #NotreHashtag.";
    } else if (message.includes("vente de produits") || message.includes("merchandising")) {
      response = "Des produits officiels de l'événement sont disponibles à notre stand de merchandising.";
    } else if (message.includes("sessions virtuelles")) {
      response = "Des sessions virtuelles sont disponibles pour les participants ne pouvant pas assister en personne.";
    } else if (message.includes("politique d'annulation")) {
      response = "Consultez notre politique d'annulation sur notre site web pour plus d'informations.";
    } else if (message.includes("sessions q&a")) {
      response = "Les sessions de questions-réponses auront lieu après chaque conférence. Ne les manquez pas !";
    } else if (message.includes("opportunités de sponsorisation")) {
      response = "Intéressé par des opportunités de sponsorisation ? Contactez-nous pour en savoir plus.";
    } else if (message.includes("événements sociaux")) {
      response = "Ne manquez pas nos événements sociaux pour un networking de qualité.";
    } else if (message.includes("galerie photo") || message.includes("galerie vidéo")) {
      response = "Retrouvez les photos et vidéos de l'événement sur notre galerie en ligne après l'événement.";
    } else {
      response = "Désolé, je n'ai pas de réponse à votre question pour le moment. Veuillez reformuler ou poser une autre question.";
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
