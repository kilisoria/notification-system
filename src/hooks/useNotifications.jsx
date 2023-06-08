import { useEffect, useMemo, useState } from 'react';

import { addPost as serviceAddPost, getNotifications, getPostsSelected, getPostByTitle } from '../actions/notifications';

const usePosts = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        return setNotifications(getNotifications());
    }, []);

    // const postsSelected = useMemo(() => {
    //     return getPostsSelected();
    // }, []);

    // const redirectToPostView = (title) => {
    //     const post = getPostByTitle(title);
    //     if (!post) {
    //         // TODO: Shows an error message.
    //         return;
    //     }

    //     window.location.replace(`/post/${post.id}/view`);
    // };

    // const addNotification = (post) => {
    //     serviceAddPost(post);
    // };
    

    return {
        // addNotification,
        notifications,
        // postsSelected,
        // redirectToPostView
    }
};

export default usePosts;
