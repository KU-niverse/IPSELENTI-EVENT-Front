import Header from '../components/Header';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// convertToRaw: editorState 객체가 주어지면 원시 JS 구조로 변환.
import { EditorState, convertToRaw, ContentState, convertFromRaw } from 'draft-js';
// convertToRaw로 변환시켜준 원시 JS 구조를 HTML로 변환.
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import axios from 'axios';
import HtmlToWiki from '../components/Wiki/HtmlToWiki';


const editorStyle = {
    cursor: "pointer",
	width: "100%",
	minHeight: "20rem",
	border: "2px solid rgba(209, 213, 219, 0.3)",
};



function WikiEditContent() {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [wiki, setWiki] = useState('');
    const [version, setVersion] = useState(null);

    const onEditorStateChange = (editorState) => {
    // editorState에 값 설정
        setEditorState(editorState);
    };

    const toolbarOptions = {
        options: ['inline'],
        inline: {
          options: ['bold', 'italic', 'strikethrough',],
        },
      };

    

    useEffect(() => {
        const getWiki = async () => {
            try{
                const result = await axios.get('http://localhost:8080/wiki/contents/5'); //{index} 가져올 방법 생각
                setWiki(result.data['title']+'\n'+result.data['content']);
                setVersion(result.data.version);
            } catch (error) {
                console.error(error);
            }
        };

        getWiki();
        
    }, []);


    const editorToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent())); //편집기에 담긴 내용을 html로 바꿈 

    // const parser = new DOMParser();
    // const parsedHtml = parser.parseFromString(editorToHtml, 'text/html');
    const wikiMarkup = HtmlToWiki(editorToHtml);
    
    const navigate = useNavigate();

    const addWikiEdit = async (editContent) => {
        try {
            const result = await axios.post('http://localhost:8080/wiki/contents/5', {
                version: version,
                newContent: editContent,
            });
            if (result.status === 200){
                navigate('/입실렌티');
            }
        } catch(error){console.log(error)};
        
    };
    
    useEffect(() => {
        if (wiki) {
          const contentState = ContentState.createFromText(wiki);
          const editorState = EditorState.createWithContent(contentState);
          setEditorState(editorState);
        }
      }, [wiki]);
    
    return (
        <div className="container">
            <div className="mobile-view">
                <div className="header">
                    <Header />
                </div>
                <div className="wikiedit">
                    <h3>Wiki를 편집해주세요</h3>
                    <div style={editorStyle}>
                        <Editor
                            // 에디터와 툴바 모두에 적용되는 클래스
                            wrapperClassName="wrapper-class"
                            // 에디터 주변에 적용된 클래스
                            editorClassName="editor"
                            // 툴바 주위에 적용된 클래스
                            toolbarClassName="toolbar-class"
                            // 툴바 설정
                            toolbar={toolbarOptions} 
                            placeholder="내용을 작성해주세요."
                            // 한국어 설정
                            localization={{
                              locale: 'ko',
                            }}
                            // 초기값 설정
                            editorState={editorState}
                            // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
                            onEditorStateChange={onEditorStateChange}
                        />
                    </div>
                    <button onClick={() => addWikiEdit(wikiMarkup)}>submit</button>
                    <div
                        // dangerouslySetInnerHTML={{__html: editorToHtml}}
                        
                    ></div>

                </div>
            </div>
        </div>

    );
}


export default WikiEditContent;