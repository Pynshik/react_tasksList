import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';
import {useState} from 'react';

const AddTask = ({createTask}) => {
  const [OtherFieldsVisible, SetOtherFieldsVisible] = useState(true);

  const {t, i18n} = useTranslation();

  function HandleAddBtn(event) {
    event.preventDefault();
    const task =
      {
        id: Date.now().toString(),
        name: event.target['name'].value,
        surname: event.target['surname'].value,
        email: event.target['email'].value,
        from: new Date(event.target['from'].value),
        to: event.target['to'].value,
        type: event.target['type'].value,
        report: event.target['report'].checked,
        comment: event.target['comment'].value,
      };
    createTask(task);
  };

  function moreInfo(event) {
    SetOtherFieldsVisible(!OtherFieldsVisible);
  };

  return (
    <div>
      <form className="form-1" onSubmit={HandleAddBtn}>
        <label>{t('description.first_name')}:
          <input name="name" required></input>
        </label>
        <label>{t('description.last_name')}:
          <input name="surname" required></input>
        </label>
        <label>{t('description.email')}:
          <input type="email" name="email" required />
        </label>
        <label>{t('description.from')}:
          <input defaultValue={new Date().toISOString().split('T')[0]} type="date" name="from" />
        </label>
        <label>{t('description.to')}:
          <input defaultValue={new Date().toISOString().split('T')[0]} type="date" name="to" />
        </label>
        <label>{t('description.type')}:&nbsp;
          <select name="type">
            <option defaultValue value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>

        <input className="inputBtn" type="button" value={t('description.more_info')} onClick={moreInfo} />

        <div hidden={OtherFieldsVisible}>
          <label className="checkbox">
            <input type="checkbox" name="report" />
            <div className="checkbox__text">{t('description.make_report')}</div>
          </label>
          <label>{t('description.comment')}:
            <textarea name="comment" />
          </label>
        </div>
        <input className="inputBtn" type="submit" value={t('description.add')} />
      </form>
    </div>
  );
};

export default AddTask;

AddTask.propTypes = {
  createTask: PropTypes.func,
};
