import Image from "next/image";

const fetchComments = async (id) => {
  // await new Promise(resolve => setTimeout(resolve, 3000))
  // throw new Error('Error al cargar los comentarios')

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function Post({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{ background: '#444', fontSize: '10px' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image width='50' height='50' src={`https://avatars.dicebear.com/api/adventurer/${comment.email}.svg`} alt={comment.name} />
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
          <small>For: {comment.email}</small>
        </li>
      ))}
    </ul>
  )
}
