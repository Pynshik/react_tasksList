import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';
function EditTask({updateTask, editableTask}) {
  const {t, i18n} = useTranslation();

  function HandleEditBtn(event) {
    event.preventDefault();
    const task =
        {
          id: editableTask.id,
          name: event.target['name'].value,
          surname: event.target['surname'].value,
          email: event.target['email'].value,
          from: new Date(event.target['from'].value),
          to: event.target['to'].value,
          type: event.target['type'].value,
          report: event.target['report'].checked,
          comment: event.target['comment'].value,
        };
    updateTask(task);
  }
  return (
    <div>
      <form className="form-1" onSubmit={HandleEditBtn}>
        <label>{t('description.first_name')}:
          <input name="name" defaultValue={editableTask.name}></input>
        </label>
        <label>{t('description.last_name')}:
          <input name="surname" defaultValue={editableTask.surname}></input>
        </label>
        <label>{t('description.email')}:
          <input type="email" name="email" defaultValue={editableTask.email} />
        </label>
        <label>{t('description.from')}:
          <input type="date" name="from" defaultValue={editableTask.from ? editableTask.from.toJSON().substring(0, 10) : new Date().toISOString().split('T')[0]} />
        </label>
        <label>{t('description.to')}:
          <input type="date" name="to" defaultValue={editableTask.to || new Date().toISOString().split('T')[0]} />
        </label>
        <label>{t('description.type')}:&nbsp;
          <select name="type" defaultValue={editableTask.type || '1'}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <label className="checkbox">
          <input type="checkbox" name="report" defaultValue={editableTask.report || 'false'} />
          <div className="checkbox__text">{t('description.make_report')}</div>
        </label>
        <label>{t('description.comment')}:
          <textarea name="comment" defaultValue={editableTask.comment || 'no comment'} />
        </label>

        <input className="inputBtn" type="submit" value={t('description.save')} />
      </form>
    </div>
  );
}

export default EditTask;

EditTask.propTypes = {
  updateTask: PropTypes.func,
  editableTask: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.string,
  report: PropTypes.string,
  comment: PropTypes.string,
};
