// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    id: 1, word: 'Google', description: "Redesigning Google Homepage was too easy." 
  },)
}
