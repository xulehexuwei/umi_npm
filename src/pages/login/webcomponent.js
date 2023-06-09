class Modal extends HTMLElement {
    constructor() {
      super();
      // 获取模板内容
      let template = document.getElementById('modal_tpl');
      let templateContent = template.content;
  
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const wrap = document.createElement('div');
      const modal = document.createElement('div');
      const header = document.createElement('header');
      const btnClose = document.createElement('span');
      const mask = document.createElement('div');
      const footer = document.createElement('footer');
      const btnCancel = document.createElement('xu-button');
      const btnOk = document.createElement('xu-button');
  
      // wrap
      wrap.setAttribute('class', 'wrap');
  
      // modal
      modal.setAttribute('class', 'xu-modal');
  
      // header
      let title = this.getAttribute('title');
      header.textContent = title;
      btnClose.setAttribute('class', 'xu-close');
      btnClose.textContent = 'x';
      header.appendChild(btnClose);
      modal.appendChild(header);
  
      btnClose.addEventListener('click', () => {
        wrap.style.display = 'none';
      })
  
      // content
      modal.appendChild(templateContent.cloneNode(true));
  
      // footer
      btnOk.setAttribute('type', 'primary');
      const slot1 = document.createElement('span');
      slot1.setAttribute('slot', 'btn-content');
      slot1.textContent = '确认';
      btnOk.appendChild(slot1);
  
      const slot2 = document.createElement('span');
      slot2.setAttribute('slot', 'btn-content');
      slot2.textContent = '取消';
      btnCancel.appendChild(slot2);
  
      footer.appendChild(btnCancel);
      footer.appendChild(btnOk);
      modal.appendChild(footer);
  
      // mask
      mask.setAttribute('class', 'mask');
      wrap.appendChild(mask);
      wrap.appendChild(modal);
  
      // 创建样式
      const style = document.createElement('style');
      const width = this.getAttribute('width');
      const isVisible = this.getAttribute('visible');
      // 为shadow Dom添加样式
      style.textContent = `
        .wrap {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          display: ${isVisible === 'true' ? 'block' : 'none'}
        }
        .xu-modal {
          position: absolute;
          z-index: 500;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: ${width};
          box-shadow: 0 0 20px rgba(0,0,0, .2);
          background: #fff;
          border-radius: 3px;
        }
        header {
          padding: 10px 20px;
          border-bottom: 1px solid #f0f0f0;
          font-weight: bold;
          background: #f0f0f0;
        }
        .xu-close {
          float: right;
          color: #ccc;
          cursor: pointer;
        }
        footer {
          margin-top: 20px;
          border-top: 1px solid #f0f0f0;
          padding: 10px 20px;
          text-align: right;
        }
        .mask {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          background: rgba(0,0,0, .3);
          z-index: 100;
        }
      `
      shadowRoot.appendChild(style);
      shadowRoot.appendChild(wrap);
    }
    connectedCallback(el) {
      console.log('insert dom', el)
    }
    disconnectedCallback() {
      console.log('Custom square element removed from page.');
    }
    adoptedCallback() {
      console.log('Custom square element moved to new page.');
    }
    attributeChangedCallback(name, oldValue, newValue) {
      if(oldValue) {
        const childrenNodes = this.shadowRoot.childNodes;
        for(let i = 0; i < childrenNodes.length; i++) {
          if(childrenNodes[i].nodeName === 'DIV' && childrenNodes[i].className === 'wrap') {
            if(newValue === 'true') {
              childrenNodes[i].style.display = 'block';
            }else {
              childrenNodes[i].style.display = 'none';
            }
          }
        }
      }
    }
    // 如果需要在元素属性变化后，触发 attributeChangedCallback()回调函数，
    // 你必须监听这个属性。这可以通过定义observedAttributes() get函数来实现
    static get observedAttributes() {
      return ['visible']; 
    }
  }
  customElements.define('xu-modal', Modal);