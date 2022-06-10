import PrismaClient from '$lib/db/client';

export async function get() {
	const prisma = new PrismaClient();
	const questions = await prisma.pollQuestion.findMany();
	console.log(questions);

	return {
		body: { questions }
	};
}
