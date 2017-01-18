const CREATE_USER = 'CREATE_USER';
export const createUser = username => ({
  type: CREATE_USER,
  username
});

const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const submitAnswer = answer => ({
  type: SUBMIT_ANSWER,
  questions: [questions],
  score: score + 1
});

const SPACED_REP = 'SPACED_REP';
export const spacedRep = () => ({
  type: SPACED_REP
});

const french = [
  'bonjour', 'oui', 'non', 'sil vous plait', 'merci', 'chat', 'noir', 'rouge'
]

const english = [
  'hello', 'yes', 'no', 'please', 'thank you', 'cat', 'black', 'red'
]

const freq = [
  1, 1, 1, 1, 1, 1, 1, 1
]
