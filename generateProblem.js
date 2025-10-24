import fs from "fs";
import fetch from "node-fetch";

async function main() {
	try {
		const res = await fetch("https://leetcode.com/api/problems/all/");
		const json = await res.json();

		const problems = {};

		json.stat_status_pairs.forEach((p) => {
			const id = p.stat.question_id;
			const slug = p.stat.question__title_slug;
			const difficulty =
				["easy", "medium", "hard"][p.difficulty.level - 1] || "medium";
			problems[id] = { slug, difficulty };
		});

		if (!fs.existsSync("./public/data")) fs.mkdirSync("./public/data");

		fs.writeFileSync(
			"./public/data/problems.json",
			JSON.stringify(problems, null, 2),
		);
		console.log("✅ problems.json generated successfully!");
	} catch (err) {
		console.error("❌ Failed to generate problems.json:", err);
	}
}

main();
