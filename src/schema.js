export const typeDefs = `
type Channel {
    id: ID!                # "!" 为必填
    name: String
 }
 type Query {
    channels: [Channel]    # "[]" 意味着这是频道列表
 }
 `;