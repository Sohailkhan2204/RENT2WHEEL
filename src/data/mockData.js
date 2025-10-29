import { faker } from '@faker-js/faker';

export const featuredCars = [
  {
    id: 1,
    name: 'BMW X5',
    type: 'SUV',
    year: '2022',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    location: 'Los Angeles',
    price: 100,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/d5c2/616f/853add84ce8f822b4ddbd4c5c30bed70?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iIySwdV4Ysh-XjxSz-OOXxPAmREeNqZaXzZsae7Thftpf8z8HKrnNYpcE8tW~2Q4ei7MUJQJOKz37aoVwYPK8MXp0dqP5P3-YjsaesaRvfaZtRu9XJw6dU7dIomnlnaxKnH-du7ZIV-x2FGi6d-3pqfaMgfdKxXcLYFcr2UHG0MuBVVjrBX~40-aayL7VFQOuCUGKwp496lI5VX8z-Cl5wq3N8m-9rR0YQjrXTuQRxacrM8Skpeh1EmD-xNXgUs95AkKnYWNkJ2XohNjSVgw71Oah7Vpm3YloOiaG~ZttXWfDeK48ga0S04etGKpURo11XZQjIO7Mu7tiaFpZIfv3g__',
    available: true,
  },
  {
    id: 2,
    name: 'Audi A6',
    type: 'Sedan',
    year: '2023',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    location: 'New York',
    price: 120,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/97e8/bcfa/da8180cd23dd98b4c87fc0dc71c3c0ba?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hLBYu6ZrCDAC6IDyStHCZ4kjOeS~WNZaAv83xORAI1CVxvmi6Vi4-yQSiHwJeVtMmHR4YX1iY~qPIo~Oq5gUvdUfNRts8E49SiNeNq3vMNhfa7z25VaV-1Ig0Ie01jqVTMvCPVkDLieRXMiZFmYVi99PnrTyPiX6vHbiD9kfXMXwEHiKjfU5eTOLmsitjDM68PRhXAzcsK63qdgkouuFDoWvEVqrBEKxF4jt93OeTbQW9-YbgZrnHJPkxaZg1e5bJLzzO72TVktq7L2P0AK9uUt0EYniFqQtK5KHglYdUG8Dx8A6k2pi2mruYSZRd5JWZw~o76IPgSFYw0-SzDZFXw__',
    available: true,
  },
  {
    id: 3,
    name: 'Tesla Model S',
    type: 'Electric',
    year: '2024',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Electric',
    location: 'San Francisco',
    price: 150,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/639c/9950/56b910883a6a372a07b3cd891038207b?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PpkkutpjxYB2XyMFf-A07wBz8n5ePmo2w4SfWyx9UVB8oouSti-xTNAMkhunXRdPzcd9JFl5d0PkdRSfSM3c2afMpHMEpaCmvNrL2UXr0nm-S4U8ZdFJsk5Iybjx9EM-UMHWpPBH3uBiFqSb7KPIr6ap8YL9yGFqveRXMkQDcZj9W5Z4M0hq6zt2TSNjMK3gdG2fZYGT8pcJf70K0YAGPCiOG3YHO7fbGR799SDcgBOoMtokJduvtU0GqjLDK2-LBKhxYLCEWHkCVIVtMMlrA2fFzwsXD8eYmX9W17S9ZwIkrBtD2pQa8cmYAeaTz07kpcxFK87oOjYkPgeS-kdxYA__',
    available: true,
  },
  {
    id: 4,
    name: 'Mercedes-Benz G-Class',
    type: 'SUV',
    year: '2023',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    location: 'Miami',
    price: 250,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/d5c2/616f/853add84ce8f822b4ddbd4c5c30bed70?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iIySwdV4Ysh-XjxSz-OOXxPAmREeNqZaXzZsae7Thftpf8z8HKrnNYpcE8tW~2Q4ei7MUJQJOKz37aoVwYPK8MXp0dqP5P3-YjsaesaRvfaZtRu9XJw6dU7dIomnlnaxKnH-du7ZIV-x2FGi6d-3pqfaMgfdKxXcLYFcr2UHG0MuBVVjrBX~40-aayL7VFQOuCUGKwp496lI5VX8z-Cl5wq3N8m-9rR0YQjrXTuQRxacrM8Skpeh1EmD-xNXgUs95AkKnYWNkJ2XohNjSVgw71Oah7Vpm3YloOiaG~ZttXWfDeK48ga0S04etGKpURo11XZQjIO7Mu7tiaFpZIfv3g__',
    available: true,
  },
  {
    id: 5,
    name: 'Porsche 911',
    type: 'Sports Car',
    year: '2024',
    seats: 4,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    location: 'Chicago',
    price: 300,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/97e8/bcfa/da8180cd23dd98b4c87fc0dc71c3c0ba?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hLBYu6ZrCDAC6IDyStHCZ4kjOeS~WNZaAv83xORAI1CVxvmi6Vi4-yQSiHwJeVtMmHR4YX1iY~qPIo~Oq5gUvdUfNRts8E49SiNeNq3vMNhfa7z25VaV-1Ig0Ie01jqVTMvCPVkDLieRXMiZFmYVi99PnrTyPiX6vHbiD9kfXMXwEHiKjfU5eTOLmsitjDM68PRhXAzcsK63qdgkouuFDoWvEVqrBEKxF4jt93OeTbQW9-YbgZrnHJPkxaZg1e5bJLzzO72TVktq7L2P0AK9uUt0EYniFqQtK5KHglYdUG8Dx8A6k2pi2mruYSZRd5JWZw~o76IPgSFYw0-SzDZFXw__',
    available: false,
  },
  {
    id: 6,
    name: 'Range Rover',
    type: 'SUV',
    year: '2023',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Diesel',
    location: 'Las Vegas',
    price: 220,
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/639c/9950/56b910883a6a372a07b3cd891038207b?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PpkkutpjxYB2XyMFf-A07wBz8n5ePmo2w4SfWyx9UVB8oouSti-xTNAMkhunXRdPzcd9JFl5d0PkdRSfSM3c2afMpHMEpaCmvNrL2UXr0nm-S4U8ZdFJsk5Iybjx9EM-UMHWpPBH3uBiFqSb7KPIr6ap8YL9yGFqveRXMkQDcZj9W5Z4M0hq6zt2TSNjMK3gdG2fZYGT8pcJf70K0YAGPCiOG3YHO7fbGR799SDcgBOoMtokJduvtU0GqjLDK2-LBKhxYLCEWHkCVIVtMMlrA2fFzwsXD8eYmX9W17S9ZwIkrBtD2pQa8cmYAeaTz07kpcxFK87oOjYkPgeS-kdxYA__',
    available: true,
  },
];

export const testimonials = [
    {
        id: 1,
        name: 'Emma Rodriguez',
        location: 'Barcelona, Spain',
        quote: '"I\'ve used many booking platforms before, but none compare to the personalized experience and attention to detail that CarRental provides."',
        image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/0d6b/f2e0/e5066cc662cc46546fbc11e62286d114?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=naMt1GIX2K5h6JDT8nh1AvZKUQWfx4WQP0DXSb5bR3hi9-CzURrE9usIjBEvB9iA6NtSra4r88RX4~YPFFKaum7aAE8T4T6MiXOso5NP3LZfY1IQfP59q-oC5S8rzvce6LGrH288ArEx2bL63T9O87~qt2~6lt1L5lP8ZZ0bhQ0QwIafoL-vCsG5Zo1l75cQRXyrGjY6RR1RqMXh3jCC-0m47O0IuXi0AkJtHUJ73R1Cp8d4m~OEmBEuS5hAHMUzlqdginN14kZ2f4k~TCQVNgu~RZ83IIK7dx2hEt9H5FuPfqJld9tOCUmsUwzCgH~knt56wqrK5VntAcpF6wwOHQ__',
        rating: 5,
    },
    {
        id: 2,
        name: 'James Chen',
        location: 'Kyoto, Japan',
        quote: '"The selection of cars is impeccable, and the service is top-notch. Renting a luxury car for our trip was seamless and truly elevated our experience."',
        image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/b5da/ff74/99461bd2a689af8a3fa35f028d52de32?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CCIxEKf2CJciDJwytnCXzz5appCfrr4USCW-GVLJIVZ2etEHRq~ay3l8z6TeCaxUSRM~Njh9oDvy~OEVK-hUnBKCua-cE3RUpzQmsEZLRP6OQjNICogEzOSwxsp9WvHw3A4g1F91Xhh-cjdijzumT3vP3WESXTYZdIqQDyEfCDMNMcrD5ks5f5X-nQ29FE3dDclB9weK6mYyF~jnEr9PL7WsIzGn7VaJJWW~POtzK7WWpPwDNry6kWkI5oiH5QKQVjQIM5ZYQ3lVoGyEwp2FJNk2CWSJKMwsqbuyX0FANIgien4GKEAs95uIr58o3LVrp-jhmTRurWRY~abaECLvmw__',
        rating: 5,
    },
    {
        id: 3,
        name: 'Sophia Williams',
        location: 'Sydney, Australia',
        quote: '"From booking to drop-off, everything was handled with professionalism. The car was pristine. Highly recommend CarRental for any luxury car needs."',
        image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/b5da/ff74/99461bd2a689af8a3fa35f028d52de32?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CCIxEKf2CJciDJwytnCXzz5appCfrr4USCW-GVLJIVZ2etEHRq~ay3l8z6TeCaxUSRM~Njh9oDvy~OEVK-hUnBKCua-cE3RUpzQmsEZLRP6OQjNICogEzOSwxsp9WvHw3A4g1F91Xhh-cjdijzumT3vP3WESXTYZdIqQDyEfCDMNMcrD5ks5f5X-nQ29FE3dDclB9weK6mYyF~jnEr9PL7WsIzGn7VaJJWW~POtzK7WWpPwDNry6kWkI5oiH5QKQVjQIM5ZYQ3lVoGyEwp2FJNk2CWSJKMwsqbuyX0FANIgien4GKEAs95uIr58o3LVrp-jhmTRurWRY~abaECLvmw__',
        rating: 5,
    }
];

export const myBookings = [
  {
    id: 1,
    bookingId: 'Booking #1',
    carId: 4, 
    status: 'confirmed',
    rentalPeriod: '4/10/2025 - 4/15/2025',
    pickupLocation: 'Airport Terminal 1',
    returnLocation: 'Downtown Office',
    totalPrice: 475,
    bookedOn: '4/1/2025',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/d5c2/616f/853add84ce8f822b4ddbd4c5c30bed70?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iIySwdV4Ysh-XjxSz-OOXxPAmREeNqZaXzZsae7Thftpf8z8HKrnNYpcE8tW~2Q4ei7MUJQJOKz37aoVwYPK8MXp0dqP5P3-YjsaesaRvfaZtRu9XJw6dU7dIomnlnaxKnH-du7ZIV-x2FGi6d-3pqfaMgfdKxXcLYFcr2UHG0MuBVVjrBX~40-aayL7VFQOuCUGKwp496lI5VX8z-Cl5wq3N8m-9rR0YQjrXTuQRxacrM8Skpeh1EmD-xNXgUs95AkKnYWNkJ2XohNjSVgw71Oah7Vpm3YloOiaG~ZttXWfDeK48ga0S04etGKpURo11XZQjIO7Mu7tiaFpZIfv3g__',
  },
  {
    id: 2,
    bookingId: 'Booking #2',
    carId: 5, 
    status: 'confirmed',
    rentalPeriod: '4/10/2025 - 4/15/2025',
    pickupLocation: 'Airport Terminal 1',
    returnLocation: 'Downtown Office',
    totalPrice: 475,
    bookedOn: '4/1/2025',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/4321/0c9d/52d337f5fdc0f4b7d5067277def4131c?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IydDK9AGcTP0xTAykmL3-59xqLRz8ZjB3Q5i6rBLHege2nWgSQr1ksSlg6m54OthUJFTOOAWSblNbngnMOUw-coN00iKyYBnGYLYmF~YMPG8HSo-ml66VKeVGxx7si7rOyn31DWfF1x-mxqhpdmFd6UNniPAA6D5abSzLK~s0klIhveCBRa-v8jhjB52Tmd5ajU41adGJoRV8g5HedSdCoAHPzoKBndOLMX1Xz1N6klUpUww4Zefp2gxRJ5wRuLtXFiQIq5FgrhHftK9GRSK~3IMe0ua5F006QVXC2a1lET3SXpFvmYM1TMrJ7YZLevD5dlVsZ1F~wFp8aXjP5tzuQ__',
  },
  {
    id: 3,
    bookingId: 'Booking #3',
    carId: 6, 
    status: 'confirmed',
    rentalPeriod: '4/10/2025 - 4/15/2025',
    pickupLocation: 'Airport Terminal 1',
    returnLocation: 'Downtown Office',
    totalPrice: 475,
    bookedOn: '4/1/2025',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/639c/9950/56b910883a6a372a07b3cd891038207b?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PpkkutpjxYB2XyMFf-A07wBz8n5ePmo2w4SfWyx9UVB8oouSti-xTNAMkhunXRdPzcd9JFl5d0PkdRSfSM3c2afMpHMEpaCmvNrL2UXr0nm-S4U8ZdFJsk5Iybjx9EM-UMHWpPBH3uBiFqSb7KPIr6ap8YL9yGFqveRXMkQDcZj9W5Z4M0hq6zt2TSNjMK3gdG2fZYGT8pcJf70K0YAGPCiOG3YHO7fbGR799SDcgBOoMtokJduvtU0GqjLDK2-LBKhxYLCEWHkCVIVtMMlrA2fFzwsXD8eYmX9W17S9ZwIkrBtD2pQa8cmYAeaTz07kpcxFK87oOjYkPgeS-kdxYA__',
  },
  {
    id: 4,
    bookingId: 'Booking #4',
    carId: 1, 
    status: 'confirmed',
    rentalPeriod: '4/10/2025 - 4/15/2025',
    pickupLocation: 'Airport Terminal 1',
    returnLocation: 'Downtown Office',
    totalPrice: 475,
    bookedOn: '4/1/2025',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/97e8/bcfa/da8180cd23dd98b4c87fc0dc71c3c0ba?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hLBYu6ZrCDAC6IDyStHCZ4kjOeS~WNZaAv83xORAI1CVxvmi6Vi4-yQSiHwJeVtMmHR4YX1iY~qPIo~Oq5gUvdUfNRts8E49SiNeNq3vMNhfa7z25VaV-1Ig0Ie01jqVTMvCPVkDLieRXMiZFmYVi99PnrTyPiX6vHbiD9kfXMXwEHiKjfU5eTOLmsitjDM68PRhXAzcsK63qdgkouuFDoWvEVqrBEKxF4jt93OeTbQW9-YbgZrnHJPkxaZg1e5bJLzzO72TVktq7L2P0AK9uUt0EYniFqQtK5KHglYdUG8Dx8A6k2pi2mruYSZRd5JWZw~o76IPgSFYw0-SzDZFXw__',
  },
];

export const dashboardStats = {
  totalCars: 8,
  totalBookings: 8,
  pendingBookings: 8,
  completedBookings: 8,
  monthlyRevenue: 1060,
};

export const recentBookingsAdmin = [
    { id: 1, carName: 'BMW 3 Series', date: '4/1/2025', price: 475, status: 'confirmed' },
    { id: 2, carName: 'Ford Explorer', date: '3/1/2025', price: 425, status: 'completed' },
    { id: 3, carName: 'Toyota Corolla', date: '4/5/2025', price: 225, status: 'pending' },
    { id: 4, carName: 'Tesla Model 3', date: '4/6/2025', price: 360, status: 'confirmed' },
];

export const adminBookings = [
    {
        id: 1,
        carName: 'Toyota Corolla',
        carImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/97e8/bcfa/da8180cd23dd98b4c87fc0dc71c3c0ba?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hLBYu6ZrCDAC6IDyStHCZ4kjOeS~WNZaAv83xORAI1CVxvmi6Vi4-yQSiHwJeVtMmHR4YX1iY~qPIo~Oq5gUvdUfNRts8E49SiNeNq3vMNhfa7z25VaV-1Ig0Ie01jqVTMvCPVkDLieRXMiZFmYVi99PnrTyPiX6vHbiD9kfXMXwEHiKjfU5eTOLmsitjDM68PRhXAzcsK63qdgkouuFDoWvEVqrBEKxF4jt93OeTbQW9-YbgZrnHJPkxaZg1e5bJLzzO72TVktq7L2P0AK9uUt0EYniFqQtK5KHglYdUG8Dx8A6k2pi2mruYSZRd5JWZw~o76IPgSFYw0-SzDZFXw__',
        dateRange: '4/10/2025 To 4/15/2025',
        total: 447,
        status: 'Confirmed'
    },
    {
        id: 2,
        carName: 'Honda Civic',
        carImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/d5c2/616f/853add84ce8f822b4ddbd4c5c30bed70?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iIySwdV4Ysh-XjxSz-OOXxPAmREeNqZaXzZsae7Thftpf8z8HKrnNYpcE8tW~2Q4ei7MUJQJOKz37aoVwYPK8MXp0dqP5P3-YjsaesaRvfaZtRu9XJw6dU7dIomnlnaxKnH-du7ZIV-x2FGi6d-3pqfaMgfdKxXcLYFcr2UHG0MuBVVjrBX~40-aayL7VFQOuCUGKwp496lI5VX8z-Cl5wq3N8m-9rR0YQjrXTuQRxacrM8Skpeh1EmD-xNXgUs95AkKnYWNkJ2XohNjSVgw71Oah7Vpm3YloOiaG~ZttXWfDeK48ga0S04etGKpURo11XZQjIO7Mu7tiaFpZIfv3g__',
        dateRange: '4/10/2025 To 4/15/2025',
        total: 447,
        status: 'Completed'
    },
    {
        id: 3,
        carName: 'BMW 3 Series',
        carImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/639c/9950/56b910883a6a372a07b3cd891038207b?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PpkkutpjxYB2XyMFf-A07wBz8n5ePmo2w4SfWyx9UVB8oouSti-xTNAMkhunXRdPzcd9JFl5d0PkdRSfSM3c2afMpHMEpaCmvNrL2UXr0nm-S4U8ZdFJsk5Iybjx9EM-UMHWpPBH3uBiFqSb7KPIr6ap8YL9yGFqveRXMkQDcZj9W5Z4M0hq6zt2TSNjMK3gdG2fZYGT8pcJf70K0YAGPCiOG3YHO7fbGR799SDcgBOoMtokJduvtU0GqjLDK2-LBKhxYLCEWHkCVIVtMMlrA2fFzwsXD8eYmX9W17S9ZwIkrBtD2pQa8cmYAeaTz07kpcxFK87oOjYkPgeS-kdxYA__',
        dateRange: '4/10/2025 To 4/15/2025',
        total: 447,
        status: 'Pending'
    },
    {
        id: 4,
        carName: 'Tesla Model 3',
        carImage: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/4321/0c9d/52d337f5fdc0f4b7d5067277def4131c?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IydDK9AGcTP0xTAykmL3-59xqLRz8ZjB3Q5i6rBLHege2nWgSQr1ksSlg6m54OthUJFTOOAWSblNbngnMOUw-coN00iKyYBnGYLYmF~YMPG8HSo-ml66VKeVGxx7si7rOyn31DWfF1x-mxqhpdmFd6UNniPAA6D5abSzLK~s0klIhveCBRa-v8jhjB52Tmd5ajU41adGJoRV8g5HedSdCoAHPzoKBndOLMX1Xz1N6klUpUww4Zefp2gxRJ5wRuLtXFiQIq5FgrhHftK9GRSK~3IMe0ua5F006QVXC2a1lET3SXpFvmYM1TMrJ7YZLevD5dlVsZ1F~wFp8aXjP5tzuQ__',
        dateRange: '4/10/2025 To 4/15/2025',
        total: 447,
        status: 'Available'
    }
];
