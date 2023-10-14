interface Destination {
  value: string
  label: string
}

interface DestinationTravel {
  img: string
  title: string
  price: string
  rating: string
  description: string
}

export const destinations:Destination[] = [
  {
    value: "paris, france",
    label: "Paris, France",
  },
  {
    value: "bali, indonesia",
    label: "Bali, Indonesia",
  },
  {
    value: "kyoto, japan",
    label: "Kyoto, Japan",
  },
  {
    value: "santorini, greece",
    label: "Santorini, Greece",
  },
  {
    value: "amsterdam, netherlands",
    label: "Amsterdam, Netherlands",
  },
  {
    value: "cape town, south africa",
    label: "Cape Town, South Africa",
  },
  {
    value: "new york city, usa",
    label: "New York City, USA",
  },
  {
    value: "barcelona, spain",
    label: "Barcelona, Spain",
  },
  {
    value: "dubai, united arab emirates",
    label: "Dubai, United Arab Emirates",
  }
]

export const destinationTravel:DestinationTravel[] = [
  {
    img: 'https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2104&q=80',
    title: 'Montmarte, France',
    price: '$450,000,00',
    rating: '4',
    description: 'Visiting the best tourist areas chosen by the audience'
  },
  {
    img: 'https://images.unsplash.com/photo-1589561454226-796a8aa89b05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
    title: 'Instanbul, Turkey',
    price: '$600,000,00',
    rating: '4',
    description: 'One of the best-selling tours to Turkey and visiting its regions..'
  },
  {
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'London, UK',
    price: '$360,000,00',
    rating: '4',
    description: 'London is one of the most beautiful places to visit that..'
  },
  {
    img: 'https://images.unsplash.com/photo-1534001265532-393289eb8ed3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    title: 'Barcelona, Spain',
    price: '$560,000,00',
    rating: '4',
    description: `Barcelona offers a captivating blend of breathtaking architecture, including Gaudi's masterpieces, and vibrant street life, with stunning beaches and a rich cultural scene, making it an ideal destination for a dynamic and culturally immersive tourist experience.`
  },
  {
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Dubai, UAE',
    price: '$660,000,00',
    rating: '4',
    description: `Saudi Arabia boasts a fascinating mix of ancient history and modern luxury, with iconic landmarks like Petra, the Red Sea's coral reefs, and the futuristic city of NEOM, providing a unique travel experience rich in culture and innovation`
  },
  {
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Dubai, UAE',
    price: '$660,000,00',
    rating: '4',
    description: `Saudi Arabia boasts a fascinating mix of ancient history and modern luxury, with iconic landmarks like Petra, the Red Sea's coral reefs, and the futuristic city of NEOM, providing a unique travel experience rich in culture and innovation`
  }
]