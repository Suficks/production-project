import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: Comment
  isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton className={cls.avatar} width={30} height={30} border="50%" />
          <Skeleton className={cls.title} width={100} height={16} />
        </div>
        <Skeleton className={cls.text} width="100%" height={50} />
        <Text text={comment.text} className={cls.text} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
        <Text title={comment.user.username} />
      </div>
      <Text text={comment.text} className={cls.text} />
    </div>
  );
});
