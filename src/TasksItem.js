import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';
import {useState} from 'react';

function TaskItem({edit, deleteTask, index, task}) {
  const {t, i18n} = useTranslation();

  const date = new Date();
  const today = `${date.getFullYear()}-${(date.getMonth() + 1)<=9 ? '0'+(date.getMonth() + 1) : (date.getMonth() + 1)}-${(date.getDate())<=9 ? '0'+(date.getDate()) : (date.getDate())}`;

  const [OtherFieldsVisible, SetOtherFieldsVisible] = useState(true);

  function moreInfo(event) {
    SetOtherFieldsVisible(!OtherFieldsVisible);
  };

  return (
    <li className="item" key={task.id}>
      <strong>{index + 1} {task.name} {task.surname}</strong>
      <div>{task.email}</div>
          &nbsp;
      <input type="button" value={t('description.more_info')} onClick={moreInfo} />

      <div hidden={OtherFieldsVisible}>

        <div>{t('description.from')}: <i>{ task.from ? task.from.toJSON().substring(0, 10) : today}</i></div>
        <div>{t('description.to')}: <i>{task.to ? task.to : today}</i></div>
        <div>{t('description.type')}: <i>{task.type ? task.type : 1}</i></div>
        <div>{t('description.make_report')}: <i>{task.report ? t('description.true') : t('description.false')}</i></div>
        <div>{t('description.comment')}: <i>{task.comment ? task.comment : t('description.no_comment')}</i></div>
      </div>

      <input type="button" onClick={() => edit(task.id)} value={t('description.edit')} />
      <input className="rm" type="button" onClick={() => deleteTask(task.id)} value="&times;" />
    </li>
  );
}

export default TaskItem;

TaskItem.propTypes = {
  edit: PropTypes.func,
  deleteTask: PropTypes.func,
  index: PropTypes.number,
  task: PropTypes.object,
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.string,
  report: PropTypes.string,
  comment: PropTypes.string,
};
