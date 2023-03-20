'use strict';

// Vue 
const { createApp } = Vue

createApp({
    // Dati
    data() {
        return {
            userChat:0,
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Franco',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'Hai studiato bene Vue?',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Si certo',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Forza Roma allora',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Sofia',
                    avatar: './img/avatar_io.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'Hai ordinato la pizza ?',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'E se prendessimo sushi',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'E se prendessimo entrambi ?',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Paola',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'Vado al cinema ma non so a vedere cosa consigli?',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Vai sul sicuro con Natale in Perù',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah è uscito allora certo!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Anna',
                    avatar: './img/avatar_io.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'Sto inventando delle chat diverse ma ho finito le idee',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Un bel lorem ipsum e passa la paura',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah giusto che stupida',
                            status: 'received'
                        }
                    ],
                }

            ],
            newMsg:'',        
            searchText:''
        }
    },
    // Funzioni
    methods: {
        // Funzione per chat dinamica 
        clickUserChat(index) {
            this.userChat = index;
            console.log(index);
        },
        //Funzione per smistare i messaggi
         msgType(index) {
            if (index=== 'sent') {
                return 'sent';
            } else {
                return 'received';
        }        
        },
        //Nuovo Messaggio
        addMsg() {
            if (this.newMsg.trim() !== '') {
                this.contacts[this.userChat].messages.push({ message:this.newMsg, status: 'sent' });
                this.newMsg = '';
                setTimeout(this.msgAnswer,3000);
            }
        },
        msgAnswer(){
            this.contacts[this.userChat].messages.push({ message:'Ok se lo dici tu', status: 'received' });
            this.newMsg = '';
        },
        //Funzione per formattare date 
        getHour(date){
            var DateTime = luxon.DateTime;           
            const formatHour = DateTime.fromFormat(date,'dd/mm/yyyy hh:mm:ss')
            const hour = `${formatHour.hour}:${formatHour.minute}`;
            return hour
        },
        //Searchbar
        search(){
              this.contacts.name = this.contacts.name.filter(element => element.includes(this.searchText));
        },
        newChatList() {
            if (this.searchText !== '') {
                return this.contacts.name.filter(element => element.toLowerCase().includes(this.searchText.toLowerCase()));
            } else {
                return this.contacts.name;
            }
        }
    }
}).mount('#app');