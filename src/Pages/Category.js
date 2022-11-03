import React from 'react';

const Category = ({name, src, onChangePage = f => f}) => {
    const categoryClick = ({id}) => {
        // 카테고리 클릭하면 클릭한 카테고리 이름 저장
        sessionStorage.saveData = id;
    }

    return (
        <div id={name} className="category" onClick={ () => {onChangePage(); categoryClick(this.id)} }>
            <img className="categoryImage" src={src} alt={name}/>
        </div>
    )
}

export default Category;