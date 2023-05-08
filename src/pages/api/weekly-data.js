export default function handler (req, res) {
    const data = [{ "name": "Week 1", "user": 400, "guest": 240, "amt": 240 }, { "name": "Week 2", "user": 300, "guest": 139, "amt": 221 }, { "name": "Week 3", "user": 200, "guest": 980, "amt": 229 }, { "name": "Week 4", "user": 278, "guest": 390, "amt": 200 }, { "name": "Week 5", "user": 189, "guest": 480, "amt": 218 }];

    res.status(200).json(data);
}
