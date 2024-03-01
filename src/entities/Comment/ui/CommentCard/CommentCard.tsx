import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { HStack, VStack } from 'shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack gap="16" className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
        <HStack gap="16" className={cls.header}>
          <Skeleton className={cls.avatar} width={30} height={30} border="50%" />
          <Skeleton className={cls.title} width={100} height={16} />
        </HStack>
        <Skeleton className={cls.text} width="100%" height={50} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack gap="8" max className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
        <HStack gap="8">
          {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
          <Text title={comment.user.username} />
        </HStack>
      </AppLink>
      <Text text={comment.text} className={cls.text} />
    </VStack>
  );
});
