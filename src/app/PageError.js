import React,{useState} from "react"

export default function PageError(props){
    const [visible, setVisible] = useState(false);
    const { onFetch, children } = props;
    const handleClick = () => {
      if (!onFetch) return;
      setVisible(true);
      onFetch();
    };
    if (visible) {
      return (
        <div className="loading">
          <span >。。。</span>
        </div>
      );
    }
    return <ul onClick={handleClick}>{children || "系统异常，请稍后重试"}</ul>;
}
