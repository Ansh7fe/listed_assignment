export default function handler (req, res) {
    const data = [
        { name: 'Basics Tee', value: 55, color: '#98D89E' },
        { name: 'Custom Short Pants', value: 31, color: '#EE8484' },
        { name: 'Super Hoodies', value: 14, color: '#F7DC7D' },
    ];

    res.status(200).json(data);
}