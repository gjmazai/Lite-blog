import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    // Сортировка => сравниваем значения у двух элементов по title или body 
    // (a(selectedSort) - и есть сравнение по полю)
    const sortedPost = useMemo(() => {
        if (sort) {
            return ([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
        }
        else {
            return posts;
        }
    }, [sort, posts]);

    return sortedPost;
}


export const usePosts = (posts, sort, query) => {
    const sortedPost = useSortedPosts(posts, sort);

    // Поиск => с помощью фильтра + includes(строка поиска)
    const sortedAndSearchPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(query));
    }, [query, sortedPost]);

    return sortedAndSearchPosts;
}