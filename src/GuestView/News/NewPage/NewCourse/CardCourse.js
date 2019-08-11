import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const CardCourse = ({card}) => {
    const {color, title, image} = card;
    return (
        <Card centered>
            <Image 
                src={image}
                label={{'color': color, 'content': 'NEW', 'ribbon': true}}
            />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                từ tháng 10 năm nay, trường sẽ mở thêm 2 lớp cho các bạn nhỏ từ 3 tới 6 tuổi với chương trình ket 1, 2, 3
            </Card.Content>
        </Card>
    )
}

export default CardCourse;