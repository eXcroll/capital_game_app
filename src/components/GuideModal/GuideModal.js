import React from 'react';

export function GuideModal({onClose = () => {}}) {

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-close" onClick={() => onClose()}>
          <img src={process.env.PUBLIC_URL + '/images/close.png'} alt="Close" />
        </div>
        <h2>Добро пожаловать!</h2>
        <div>
          <ul>
            <li>Нажмите на значок лимона, чтобы начать зарабатывать.</li>
            <li>Попробуйте сделать это вручную, чтобы увеличить доход.</li>
            <li>Когда у вас будет достаточно денег, вы сможете открыть больше предприятий и менеджеров!</li>
            <li>Нанимайте менеджеров, которые помогут вам вести бизнес автоматически!</li>
          </ul>
          <h3 className="text-center">Удачной игры!</h3>
        </div>
      </div>
    </div>
  );
}
