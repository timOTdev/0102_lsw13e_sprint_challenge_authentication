<!-- Answers to the Short Answer Essay Questions go here -->

## 1. What is the purpose of using _sessions_?

- A **session** is a server-side storage of information that is used to persist a user's data through a web application. The client keeps a cookie and a session id which then gets sent with every request to the server. The server verifies the session id and retrieves the applicable information from the server to provide a custom experience for the user.

## 2. What does bcrypt do to help us store passwords in a secure manner.

- **bcrypt** helps us hash our passwords, implements salting, and does multiple hashing rounds to better encrypt our password to be stored on the server. Instead of storing plain-text passwords on the server where hackers can directly utilize the information immediately, an unintelligible hash string can take a long time to decrypt.

## 3. What does bcrypt do to slow down attackers?

- Using **salting** to add additional text to the string and having **multiple hash rounds** also add an extra layer that adds the time layer to our password. Hashing 12 rounds is the recommended amount and higher is recommended. The difference between 10 routes and 12 rounds is significant.
- Hackers would now need more components to decrypt including having the hash, the algorithm, and the amount of hash rounds.

## 4. What are the three parts of the JSON Web Token?

- **JSON Web Tokens** has a header, payload, and signature which are combined into a long string separated by a dot.
- **header** has a type and the algorithm used which is then base 64 encoded.
- **payload** carries the information that we want to transmit in our token. Although it is not tamperable, it is still public for everyone to see, but caution is still a good approach. There are also multiple claim types: **registered claims** described as standard information types such as the iss, sub, aud, exp, and others, **public claims** such as information that we create, and **private claims** that the producer and consumer agree on.
- **signature** is a way to secure our token which includes the header, payload, and secret when it is encrypted. The server holds the secret and uses it to verify existing tokens coming from the user and assign new ones.
- A final JWT may look like this: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzY290Y2guaW8iLCJleHAiOjEzMDA4MTkzODAsIm5hbWUiOiJDaHJpcyBTZXZpbGxlamEiLCJhZG1pbiI6dHJ1ZX0.03f329983b86f7d9a9f5fef85305880101d5e302afafa20154d094b229f75773`
