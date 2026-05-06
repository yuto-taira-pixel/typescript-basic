type Post = {
 id: number;          // id
 title: string;       // タイトル
 body: string;        // 本文
 published: boolean;  // 公開済みかどうか
};

type EditingTask = Partial<Post>;

type SummaryTask = Pick<Post, "id" | "title">;

type CompletedTask = Readonly<Post>;