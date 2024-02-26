import { ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema';
import { ArticleDetailsPageRecommendationsSchema } from './ArticleDetailsPageRecommendationsSchema';

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentSchema
  recommendations: ArticleDetailsPageRecommendationsSchema
}
