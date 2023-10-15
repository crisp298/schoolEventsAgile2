interface Event {
    eventId: number;
    eventLocation: string;
    maxNumberOfparticipants: number;
    hoursOfDuration:number;
    typeOfEvent: string;
    eventHost: new EventHost.id{};
    participants: new ListOfParticipants{};

    emitCertificate(participants: string)?
}

class ListOfParticipants {
    id: number;
    name: string;
    surname: string;
    isParticipantRegistered: string;
    isParticipantPresent: string;

    constructor(id: number,
                name: string,
                surname: string,
                isParticipantPresent: string,
                isParticipantRegistered: string){
                    this.id = id;
                    this.name = name;
                    this.surname = surname;
                    this.isParticipantPresent = isParticipantPresent;
                    this.isParticipantRegistered = isParticipantRegistered;
                }

    emitCertificate(isParticipantPresent: string, isParticipantRegistered: string){
        if (isParticipantPresent == isParticipantRegistered){
            console.log("Print certificate on link");
        } else {
            console.log("registration not confirmed or absent participant - no certificate created");
        };
    }

}