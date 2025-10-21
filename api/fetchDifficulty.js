export default async function handler(req, res) {
	const titleSlug = req.query.titleSlug;

	const query = `
    query questionTitle($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        difficulty
      }
    }
  `;

	try {
		const response = await fetch("https://leetcode.com/graphql", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ query, variables: { titleSlug } }),
		});

		const data = await response.json();
		const difficulty =
			data?.data?.question?.difficulty?.toLowerCase() || "medium";
		res.status(200).json({ difficulty });
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch difficulty" });
	}
}
