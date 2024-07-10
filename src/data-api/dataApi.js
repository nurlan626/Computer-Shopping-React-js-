import { users } from "./database.js"

let userId = null;

export function initData() {
    localStorage.clear();
    localStorage.setItem("userId", userId);
    localStorage.setItem("users", JSON.stringify(users));
}

export function getUser() {
    let id = JSON.parse(localStorage.getItem("userId"));
    if (!id) {
        return null;
    }
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find((user) => user.id === id);
    console.log('wee');
    return user ? user : null;
}

export function getAllProducts() {
    // Реализация функции
}

export function getUserData() {
    const user = {
        id: 1,
        username: "user1",
        password: "123",
        name: "Timur Timurov",
        tel: "055-898-5555",
        computers: [
            {
                id: 1,
                category: "lenova",
                name: "lenovo a3 ultra",
                description: "lenovo laptop for office",
                price: 500,
                new: "yes",
                img: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MjgzOTAxfGltYWdlL3BuZ3xoNTYvaDk5Lzk5MTQ4MzE0MDUwODYucG5nfDdkZTZiMjM3ZTA2YmM5NTc0ZTRjMzcyMDhmZTU5N2NjZjE1NTg0MzhjZjQ2MDU4ODMwMzVmYzAwMmQ2YjU5MDE/lenovo-thinkpad-x390-yoga-hero.png",
                ram: 16,
                cpu: "Intel i7",
                rom: 512,
                romType: "ssd",
                operatingSystem: "Windows",
                videoCard: "Nvidea",
            },
            {
                id: 2,
                category: "acer",
                name: "Acer Aspire 5",
                description: "Affordable Acer laptop",
                price: 450,
                new: "yes",
                img: "https://strgimgr.umico.az/sized/1680/362936-fbf212a2e3e5d6784ce2b864899d9baf.jpg",
                ram: 8,
                cpu: "AMD Ryzen 5",
                rom: 256,
                romType: "ssd",
                operatingSystem: "Windows",
                videoCard: "NVIDIA GeForce MX350",
            },
            {
                id: 3,
                category: "hp",
                name: "HP Pavilion",
                description: "HP laptop for everyday use",
                price: 55,
                new: "yes",
                img: "https://amazoncomp.az/wp-content/uploads/2021/07/1401678_v01_b.jpg",
                ram: 12,
                cpu: "Intel i5",
                rom: 512,
                romType: "ssd",

                operatingSystem: "Windows",
                videoCard: "Intel UHD Graphics",
            },
            {
                id: 4,
                category: "dell",
                name: "Dell Inspiron",
                description: "Dell laptop with a touchscreen",
                price: 700,
                new: "yes",
                img: "https://www.bakuelectronics.az/assets/images/products/92883/ezgifcom-gif-maker-1.jpg",
                ram: 16,
                cpu: "Intel i7",
                rom: 512,
                romType: "ssd",

                operatingSystem: "Windows",
                videoCard: "NVIDIA GeForce GTX 1650",
            },
            {
                id: 5,
                category: "asus",
                name: "Asus ROG Zephyrus",
                description: "Gaming laptop with high performance",
                price: 1200,
                new: "yes",
                img: "https://amazoncomp.az/wp-content/uploads/2023/06/ASUS-ROG-Zephyrus-M16-GU603-1.jpg",
                ram: 32,
                cpu: "AMD Ryzen 9",
                rom: 256,
                romType: "ssd",

                operatingSystem: "Windows",
                videoCard: "NVIDIA GeForce RTX 3080",
            },
        ],
    }

    return user;
}