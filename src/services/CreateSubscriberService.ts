import prismaClient from '../prisma'

interface SubscriberType {
    name: string,
    email: string
}

class CreateSubscriberService {
    async execute(
        name: string, 
        email: string, 
        company: string, 
        website: string, 
        marketing: boolean, 
        police: boolean) {

        const subscribe = await prismaClient.subscribe.create({
            data: {
                name,
                email,
                company,
                website,
                marketing,
                police
            }
        })

        // const infoWS = {
        //     name:  subscribe.name,
        //     email: subscribe.email,
        //     company: subscribe.company,
        //     website: subscribe.website,
        //     marketing: subscribe.marketing,
        //     police: subscribe.police
        // }
        
        return subscribe
    }
}

export { CreateSubscriberService }