import React from "react";
import { List, Card, Tag, Button, Divider } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";

function MovieListGrid({ movies, isStarred, toggleFavourite, handleCardClick }) {
  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={movies}
      renderItem={(item) => (
        <List.Item key={`${item.id}-${isStarred(item.id)}`}>
          <Card
            title={item.name}
            style={{
              width: "100%",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
            actions={[
              <Tag color="blue">{item.category}</Tag>,
              <Tag color="green">{item.budget}</Tag>,
              <Button
                icon={isStarred(item.id) ? <StarFilled /> : <StarOutlined />}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavourite(item.id);
                }}
                style={{
                  color: isStarred(item.id) ? "yellow" : "gray",
                  border: "none",
                }}
              />,
            ]}
            onClick={() => handleCardClick(item.id)}
          >
            <p>
              <strong>Title:</strong> {item.title}
            </p>
            <Divider />
            <p>
              <strong>Cast:</strong> {item.cast}
            </p>
            <Divider />
            <p>
              <strong>Release Date:</strong> {item.releaseDate}
            </p>
          </Card>
        </List.Item>
      )}
    />
  );
}

export default MovieListGrid;
