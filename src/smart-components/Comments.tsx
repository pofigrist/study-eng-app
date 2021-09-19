import {Comment, List} from 'antd';
import {IComment} from "../store/reducers/types";

export const Comments = ({data}: { data: IComment[] }) => {
    return <List
        className="comment-list"
        header={`${data.length} replies`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item: IComment) => (
            <li>
                <Comment
                    author={item.author}
                    avatar={item.avatar || 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                    content={item.content}
                />
            </li>
        )}
    />
}
