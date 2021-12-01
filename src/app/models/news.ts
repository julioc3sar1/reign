export interface News {
    author: string
    comment_text: string | null
    created_at: string
    created_at_i: number
    num_comments: number
    objectID: string
    parent_id: string | null
    points: number
    relevancy_score: number
    story_id: null
    story_text: string | null
    story_title: string | null
    story_url: string | null
    title: string
    url: string
}
