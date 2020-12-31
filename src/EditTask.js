// function editTask() {
//   return (
//     <div>
//       <div>
//         <label>
//               First name:
//           <input
//             style={styles.input}
//             type="text"
//             name="firstName"
//             value={Task.firstName}
//             onChange={handleInputChange}
//           />
//         </label>
//         {Object.keys(firstNameErr).map((key)=>{
//           return <div style={{color: 'red'}}>{firstNameErr[key]}</div>;
//         })}
//         <label>
//               Last name:
//           <input
//             style={styles.input}
//             type="text"
//             name="lastName"
//             value={Task.lastName}
//             onChange={handleInputChange}
//           />
//         </label>
//         {Object.keys(lastNameErr).map((key)=>{
//           return <div style={{color: 'red'}}>{lastNameErr[key]}</div>;
//         })}
//         <label>
//               Email:
//           <input
//             style={styles.input}
//             type="email"
//             name="email"
//             value={Task.email}
//             onChange={handleInputChange}
//           />
//         </label>
//         {Object.keys(emailErr).map((key)=>{
//           return <div style={{color: 'red'}}>{emailErr[key]}</div>;
//         })}
//         <label>
//               from:
//           <input
//             style={styles.input}
//             type="date"
//             name="fromDate"
//             checked={Task.fromDate}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//               to:
//           <input
//             style={styles.input}
//             type="date"
//             name="toDate"
//             value={Task.toDate}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//               type:&nbsp;
//           <select
//             style={styles.select}
//             name="type"
//             value={Task.type}
//             onChange={handleInputChange}>
//             <option defaultValue value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//           </select>
//         </label>

//         <input type="button" value="more" onClick={moreInfo} />

//         <div hidden={OtherFieldsVisible}>
//           <div>
//             <input style={styles.report}
//               type="checkbox"
//               name="report"
//               value={Task.report}
//               onClick={handleInputChange} />
//                   make report
//           </div>
//           <label>
//                 Comment:
//             <textarea style={styles.input}
//               // ref={textareaInput}
//               name="comment"
//               value={Task.comment}
//               onChange={handleInputChange}
//             />
//           </label>
//         </div>
//         <input type="button" onClick={addTaskOrEdit} value={IsEdit ? 'Save' : 'Add'} />
//       </div>
//     </div>
//   );
// }
