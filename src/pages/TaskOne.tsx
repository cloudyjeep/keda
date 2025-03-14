import { CodeTester } from "@components/CodeTest";

function TaskOne() {
  const questions: Array<Parameters<typeof CodeTester>[0]> = [
    {
      height: 260,

      question: `Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
Input : [1, 2, 4, 3, 5, 3, 2, 1]			Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]`,

      defaultCodeInput: `
function sortDesc(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // jika lebih kecil, geser ke next index
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}`,
      defaultCodeTest: `
describe("Sort descending", function () {
  let input = [1, 2, 4, 3, 5, 3, 2, 1];
  let output = [5, 4, 3, 3, 2, 2, 1, 1];

  it(\`\${JSON.stringify(input)} should be \${JSON.stringify(output)}\`, function () {
    expect(sortDesc(input)).to.deep.equal(output);
  });
})`,
    },

    {
      height: 360,
      question: `Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
    Input : ([100, 200, 300, 400], 2)               Expected Output : 700 		// didapatkan dari 300 + 400
    Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)     Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
    Input : ([-3, 4, 0, -2, 6, -1], 2)			    Expected Output : 5 		// didapatkan dari 6 + -1`,
      defaultCodeInput: `
function maxSubArray(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  // Hitung jumlah awal
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  // Geser poin kanan, tambahkan pos baru dan kurangi pos lama
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}`,
      defaultCodeTest: `
describe("Max sub array", function () {
  const test = [
    {
      input: { data: [100, 200, 300, 400], max: 2 },
      output: 700,
    },
    {
      input: { data: [1, 4, 2, 10, 23, 3, 1, 0, 20], max: 4 },
      output: 39,
    },
    {
      input: { data: [-3, 4, 0, -2, 6, -1], max: 2 },
      output: 5,
    },
  ];
  test.map(({ input, output }) => {
    it(\`(arr: \${JSON.stringify(input.data)}, max: \${input.max}) should be \${output}\`, function () {
      expect(maxSubArray(input.data, input.max)).to.equal(output);
    });
  });
})`,
    },

    {
      height: 320,
      question: `Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
Input :
{
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}
Output: 6
 
Input:
{
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 4}, ee: 'car'}
};
Output: 12`,
      defaultCodeInput: `
function totalEvenNumbers(obj) {
  let sum = 0;
  let stack = [obj]; // stack untuk iteratif

  while (stack.length > 0) {
    let current = stack.pop(); // get elemen terakhir dari stack

    for (let key in current) {
      let value = current[key];

      if (typeof value === "number" && value % 2 === 0) {
        sum += value; // Tambahkan jika genap
      } else if (typeof value === "object" && value !== null) {
        stack.push(value); // Jika objek, tambahkan ke stack untuk diproses
      }
    }
  }

  return sum;
}`,
      defaultCodeTest: `
describe("Total of even numbers", function () {
  it("should be return 6", function () {
    expect(
      totalEvenNumbers({
        outer: 2,
        obj: {
          inner: 2,
          otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup",
          },
        },
      })
    ).to.equal(6);
  });

  it("should be return 12", function () {
    expect(
      totalEvenNumbers({
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: "ball", ccc: 5 },
        d: 1,
        e: { e: { e: 4 }, ee: "car" },
      })
    ).to.equal(12);
  });
})`,
    },
  ];

  return (
    <div className="space-y-3 p-2.5 pb-24 ">
      <a href="/" className="flex gap-2">
        <span
          dangerouslySetInnerHTML={{
            __html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="28px" width="28px" version="1.1" id="Capa_1" viewBox="0 0 471.2 471.2" xml:space="preserve"><g><g><path d="M396.7,0H74.5C33.4,0,0,33.4,0,74.5v322.2c0,41.1,33.4,74.5,74.5,74.5h322.2c41.1,0,74.5-33.4,74.5-74.5V74.5    C471.2,33.5,437.7,0,396.7,0z M444.2,396.7c0,26.2-21.3,47.5-47.5,47.5H74.5c-26.2,0-47.5-21.3-47.5-47.5V74.5    C27,48.3,48.3,27,74.5,27h322.2c26.2,0,47.5,21.3,47.5,47.5V396.7z"/><path d="M344.6,222.1H159.2l47.4-47.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0L117,226c-5.3,5.3-5.3,13.8,0,19.1l70.6,70.5    c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L159.1,249h185.5c7.5,0,13.5-6,13.5-13.5S352.1,222.1,344.6,222.1z"/></g></g></svg>`,
          }}
        />
        {"Home"}
      </a>
      {questions.map((item, i) => (
        <CodeTester key={i} {...item} no={i + 1} />
      ))}
    </div>
  );
}

export default TaskOne;
