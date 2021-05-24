abstract class Department {
  static fiscalYear = 2020;
  // private id: string;
  // name: string;
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name: name };
  }

  // ショートカット構文
  // readonly で読み取り専用にする
  constructor(protected readonly id: string, public name: string) {}

  // thisで値の参照先のヒントを与える
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    // console.log(this.employees.length);
    // console.log(this.employees);
    console.log(Department.fiscalYear);
  }
}

class ITDepartment extends Department {
  constructor(id: string, protected admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  describe() {
    console.log('IT部門 - id :' + this.id);
  }
}

class AcccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('レポートが見つかりません。');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('正しい値を設定して下さい');
    }
    this.addReports(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  describe() {
    console.log('会計部門 - id :' + this.id);
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

// インスタンス作成
const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// 代替手段でいれられてしまう
// addEmployeeのみだけ値を追加するのを許可したい
// it.employees[2] = 'Anna';

it.describe();
it.printEmployeeInformation();

// describeに対してオブジェクトを定義している
// クラスを基づいて作成したものではない
// it.describeの関数自体を渡している
// 参照しているオブジェクトにはnameプロパティが存在しないのでundefindになる
// const itCopy = { name: 'DUMMY', describe: it.describe };

// // name が存在すればDepartmentと同じオブジェクトと認識できる
// itCopy.describe();

console.log(it);

const accounting = new AcccountingDepartment('d2', []);

accounting.mostRecentReport = '通気会計レポート';

accounting.addReports('Something');
console.log(accounting.mostRecentReport);

// accounting.printReports();

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe();

// オーバーライドしたメソッドがあるのでMaxは表示されない
// accounting.printEmployeeInformation();
