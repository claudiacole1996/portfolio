// COMPLETE!  get data from webpage and add to an array
// COMPLETE!  import sample data to test functions
// COMPLETE!  total price of truck order
// COMPLETE!  append truck price to the webpage
// COMPLETE!  style appended div
// COMPLETE!  fix extension to run when ALL tab is active
// run function when item is updated on page
// use google api to create real time json file
// get data from pdf recent invoice
// add update function to update googe sheet file
// style update button
// bug test extension for any missing errors

//get json file (temporarily hard coded)
let data = [
  {
    "wren number" : "29009",
    "price/case" : "$18.64"
  },
  {
    "wren number" : "6043009",
    "price/case" : "$21.97"
  },
  {
    "wren number" : "7495014",
    "price/case" : "$38.38"
  },
  {
    "wren number" : "18645029",
    "price/case" : "$99.47"
  },
  {
    "wren number" : "18645030",
    "price/case" : "$99.47"
  },
  {
    "wren number" : "19115000",
    "price/case" : "$99.47"
  },
  {
    "wren number" : "19186000",
    "price/case" : "$99.47"
  },
  {
    "wren number" : "19265000",
    "price/case" : "$99.47"
  },
  {
    "wren number" : "13334028",
    "price/case" : "$56.62"
  },
  {
   "wren number" : "1869",
   "price/case" : "$8.70"
  },
  {
    "wren number" : "2678",
    "price/case" : "$10.02"
  },
  {
    "wren number" : "3659",
    "price/case" : "$5.53"
  },
  {
    "wren number" : "4849",
    "price/case" : "$32.50"
  },
  {
    "wren number" : "5086",
    "price/case" : "$122.73"
  },
  {
    "wren number" : "6465",
    "price/case" : "$53.98"
  },
  {
    "wren number" : "8044",
    "price/case" : "$81.50"
  },
  {
    "wren number" : "9304",
    "price/case" : "$57.86"
  },
  {
    "wren number" : "13297",
    "price/case" : "$89.73"
  },
  {
    "wren number" : "14219",
    "price/case" : "$10.83"
  },
  {
    "wren number" : "15100",
    "price/case" : "$63.00"
  },
  {
    "wren number" : "16160",
    "price/case" : "$35.87"
  },
  {
    "wren number" : "18022",
    "price/case" : "$27.16"
  },
  {
    "wren number" : "19008",
    "price/case" : "$581.90"
  },
  {"wren number" : 
    
    "21086",
    "price/case" : "$40.84"
  },
  {"wren number" : 
    
    "23117",
    "price/case" : "$46.15"
  },
  {"wren number" : 
    
    "26041",
    "price/case" : "$23.00"
  },
  {"wren number" : 
    
    "28246",
    "price/case" : "$19.41"
  },
  {"wren number" : 
    
    "29198",
    "price/case" : "$18.38"
  },
  {"wren number" : 
    
    "33079",
    "price/case" : "$21.17"
  },
  {"wren number" : 
    
    "35100",
    "price/case" : "$54.30"
  },
  {"wren number" : 
    
    "37021",
    "price/case" : "$24.88"
  },
  {"wren number" : 
    
    "38054",
    "price/case" : "$31.36"
  },
  {"wren number" : 
    
    "42002",
    "price/case" : "$38.14"
  },
  {"wren number" : 
    
    "43126",
    "price/case" : "$17.40"
  },
  {"wren number" : 
    
    "44026",
    "price/case" : "$26.40"
  },
  {"wren number" : 
    
    "45237",
    "price/case" : "$31.75"
  },
  {"wren number" : 
    
    "46048",
    "price/case" : "$12.69"
  },
  {"wren number" : 
    
    "47065",
    "price/case" : "$24.59"
  },
  {"wren number" : 
    
    "49000",
    "price/case" : "$22.79"
  },
  {"wren number" : 
    
    "55332",
    "price/case" : "$59.82"
  },
  {"wren number" : 
    
    "56000",
    "price/case" : "$59.15"
  },
  {"wren number" : 
    
    "60134",
    "price/case" : "$41.28"
  },
  {"wren number" : 
    
    "61170",
    "price/case" : "$52.68"
  },
  {"wren number" : 
    
    "62190",
    "price/case" : "$83.80"
  },
  {"wren number" : 
    
    "63053",
    "price/case" : "$29.46"
  },
  {"wren number" : 
    
    "65109",
    "price/case" : "$59.39"
  },
  {"wren number" : 
    
    "69108",
    "price/case" : "$53.68"
  },
  {"wren number" : 
    
    "70189",
    "price/case" : "$25.98"
  },
  {"wren number" : 
    
    "71126",
    "price/case" : "$63.96"
  },
  {"wren number" : 
    
    "97236",
    "price/case" : "$30.60"
  },
  {"wren number" : 
    
    "97271",
    "price/case" : "$31.59"
  },
  {"wren number" : 
    
    "116221",
    "price/case" : "$31.08"
  },
  {"wren number" : 
    
    "125109",
    "price/case" : "$93.25"
  },
  {"wren number" : 
    
    "127828",
    "price/case" : "$44.00"
  },
  {"wren number" : 
    
    "141482",
    "price/case" : "$50.01"
  },
  {"wren number" : 
    
    "168002",
    "price/case" : "$40.39"
  },
  {"wren number" : 
    
    "182015",
    "price/case" : "$37.32"
  },
  {"wren number" : 
    
    "193522",
    "price/case" : "$41.76"
  },
  {"wren number" : 
    
    "223058",
    "price/case" : "$65.53"
  },
  {"wren number" : 
    
    "255012",
    "price/case" : "$20.66"
  },
  {"wren number" : 
    
    "258023",
    "price/case" : "$57.68"
  },
  {"wren number" : 
    
    "258118",
    "price/case" : "$68.15"
  },
  {"wren number" : 
    
    "261126",
    "price/case" : "$47.26"
  },
  {"wren number" : 
    
    "261266",
    "price/case" : "$47.04"
  },
  {"wren number" : 
    
    "268293",
    "price/case" : "$36.98"
  },
  {"wren number" : 
    
    "269005",
    "price/case" : "$24.60"
  },
  {"wren number" : 
    
    "284956",
    "price/case" : "$31.80"
  },
  {"wren number" : 
    
    "285808",
    "price/case" : "$50.00"
  },
  {"wren number" : 
    
    "289527",
    "price/case" : "$52.26"
  },
  {"wren number" : 
    
    "295824",
    "price/case" : "$66.43"
  },
  {"wren number" : 
    
    "295932",
    "price/case" : "$59.68"
  },
  {"wren number" : 
    
    "297179",
    "price/case" : "$48.75"
  },
  {"wren number" : 
    
    "297190",
    "price/case" : "$54.28"
  },
  {"wren number" : 
    
    "297193",
    "price/case" : "$48.88"
  },
  {"wren number" : 
    
    "301192",
    "price/case" : "$31.46"
  },
  {"wren number" : 
    
    "311233",
    "price/case" : "$59.48"
  },
  {"wren number" : 
    
    "394031",
    "price/case" : "$54.72"
  },
  {"wren number" : 
    
    "395070",
    "price/case" : "$41.76"
  },
  {"wren number" : 
    
    "396103",
    "price/case" : "$53.00"
  },
  {"wren number" : 
    
    "397083",
    "price/case" : "$24.84"
  },
  {"wren number" : 
    
    "406025",
    "price/case" : "$32.80"
  },
  {"wren number" : 
    
    "407902",
    "price/case" : "$79.23"
  },
  {"wren number" : 
    
    "408280",
    "price/case" : "$27.93"
  },
  {"wren number" : 
    
    "409239",
    "price/case" : "$28.19"
  },
  {"wren number" : 
    
    "410065",
    "price/case" : "$21.44"
  },
  {"wren number" : 
    
    "411101",
    "price/case" : "$63.24"
  },
  {"wren number" : 
    
    "419008",
    "price/case" : "$15.57"
  },
  {"wren number" : 
    
    "457039",
    "price/case" : "$19.38"
  },
  {"wren number" : 
    
    "486002",
    "price/case" : "$31.01"
  },
  {"wren number" : 
    
    "507009",
    "price/case" : "$204.14"
  },
  {"wren number" : 
    
    "510189",
    "price/case" : "$22.16"
  },
  {"wren number" : 
    
    "555072",
    "price/case" : "$37.84"
  },
  {"wren number" : 
    
    "723036",
    "price/case" : "$19.85"
  },
  {"wren number" : 
    
    "730051",
    "price/case" : "$24.00"
  },
  {"wren number" : 
    
    "731658",
    "price/case" : "$70.08"
  },
  {"wren number" : 
    
    "758006",
    "price/case" : "$9.67"
  },
  {"wren number" : 
    
    "968030",
    "price/case" : "$23.14"
  },
  {"wren number" : 
    
    "1000027",
    "price/case" : "$143.76"
  },
  {"wren number" : 
    
    "1004066",
    "price/case" : "$17.57"
  },
  {"wren number" : 
    
    "1116366",
    "price/case" : "$55.85"
  },
  {"wren number" : 
    
    "1637095",
    "price/case" : "$73.47"
  },
  {"wren number" : 
    
    "1659029",
    "price/case" : "$33.59"
  },
  {"wren number" : 
    
    "1665040",
    "price/case" : "$44.93"
  },
  {"wren number" : 
    
    "1762000",
    "price/case" : "$43.60"
  },
  {"wren number" : 
    
    "1823000",
    "price/case" : "$47.92"
  },
  {"wren number" : 
    
    "1887003",
    "price/case" : "$93.96"
  },
  {"wren number" : 
    
    "1945015",
    "price/case" : "$85.59"
  },
  {"wren number" : 
    
    "2113096",
    "price/case" : "$55.58"
  },
  {"wren number" : 
    
    "2232027",
    "price/case" : "$87.90"
  },
  {"wren number" : 
    
    "2335024",
    "price/case" : "$28.85"
  },
  {"wren number" : 
    
    "2335025",
    "price/case" : "$26.30"
  },
  {"wren number" : 
    
    "2373015",
    "price/case" : "$15.06"
  },
  {"wren number" : 
    
    "2380000",
    "price/case" : "$36.33"
  },
  {"wren number" : 
    
    "2393055",
    "price/case" : "$29.10"
  },
  {"wren number" : 
    
    "2400012",
    "price/case" : "$39.81"
  },
  {"wren number" : 
    
    "2407009",
    "price/case" : "$27.45"
  },
  {"wren number" : 
    
    "2448048",
    "price/case" : "$52.50"
  },
  {"wren number" : 
    
    "2481108",
    "price/case" : "$0.00"
  },
  {"wren number" : 
    
    "2545000",
    "price/case" : "$27.99"
  },
  {"wren number" : 
    
    "2562036",
    "price/case" : "$50.43"
  },
  {"wren number" : 
    
    "2563021",
    "price/case" : "$32.60"
  },
  {"wren number" : 
    
    "2599060",
    "price/case" : "$21.92"
  },
  {"wren number" : 
    
    "2601106",
    "price/case" : "$24.85"
  },
  {"wren number" : 
    
    "2601114",
    "price/case" : "$25.92"
  },
  {"wren number" : 
    
    "2603103",
    "price/case" : "$0.00"
  },
  {"wren number" : 
    
    "2603106",
    "price/case" : "$49.56"
  },
  {"wren number" : 
    
    "2649016",
    "price/case" : "$82.69"
  },
  {"wren number" : 
    
    "2656012",
    "price/case" : "$31.65"
  },
  {"wren number" : 
    
    "2679243",
    "price/case" : "$20.71"
  },
  {"wren number" : 
    
    "2760012",
    "price/case" : "$28.08"
  },
  {"wren number" : 
    
    "2816015",
    "price/case" : "$17.32"
  },
  {"wren number" : 
    
    "2861064",
    "price/case" : "$29.93"
  },
  {"wren number" : 
    
    "2896051",
    "price/case" : "$69.17"
  },
  {"wren number" : 
    
    "2913033",
    "price/case" : "$29.45"
  },
  {"wren number" : 
    
    "3001036",
    "price/case" : "$26.80"
  },
  {"wren number" : 
    
    "3096000",
    "price/case" : "$26.19"
  },
  {"wren number" : 
    
    "3114143",
    "price/case" : "$30.70"
  },
  {"wren number" : 
    
    "3168048",
    "price/case" : "$30.87"
  },
  {"wren number" : 
    
    "3210064",
    "price/case" : "$78.91"
  },
  {"wren number" : 
    
    "3222000",
    "price/case" : "$83.05"
  },
  {"wren number" : 
    
    "3268000",
    "price/case" : "$50.62"
  },
  {"wren number" : 
    
    "3399015",
    "price/case" : "$18.33"
  },
  {"wren number" : 
    
    "3467142",
    "price/case" : "$38.46"
  },
  {"wren number" : 
    
    "3470015",
    "price/case" : "$84.59"
  },
  {"wren number" : 
    
    "3471028",
    "price/case" : "$37.66"
  },
  {"wren number" : 
    
    "3490087",
    "price/case" : "$64.18"
  },
  {"wren number" : 
    
    "3496098",
    "price/case" : "$56.95"
  },
  {"wren number" : 
    
    "3569093",
    "price/case" : "$43.48"
  },
  {"wren number" : 
    
    "3594733",
    "price/case" : "$40.04"
  },
  {"wren number" : 
    
    "3761164",
    "price/case" : "$43.57"
  },
  {"wren number" : 
    
    "3761272",
    "price/case" : "$43.56"
  },
  {"wren number" : 
    
    "3910050",
    "price/case" : "$36.60"
  },
  {"wren number" : 
    
    "3952102",
    "price/case" : "$71.63"
  },
  {"wren number" : 
    
    "4306003",
    "price/case" : "$33.50"
  },
  {"wren number" : 
    
    "4331012",
    "price/case" : "$27.88"
  },
  {"wren number" : 
    
    "4332009",
    "price/case" : "$31.25"
  },
  {"wren number" : 
    
    "4334006",
    "price/case" : "$38.75"
  },
  {"wren number" : 
    
    "4393012",
    "price/case" : "$45.18"
  },
  {"wren number" : 
    
    "4463131",
    "price/case" : "$66.49"
  },
  {"wren number" : 
    
    "4463146",
    "price/case" : "$66.99"
  },
  {"wren number" : 
    
    "4463147",
    "price/case" : "$69.55"
  },
  {"wren number" : 
    
    "4463148",
    "price/case" : "$67.07"
  },
  {"wren number" : 
    
    "4463151",
    "price/case" : "$82.09"
  },
  {"wren number" : 
    
    "4463152",
    "price/case" : "$79.94"
  },
  {"wren number" : 
    
    "4463157",
    "price/case" : "$82.67"
  },
  {"wren number" : 
    
    "4498072",
    "price/case" : "$26.50"
  },
  {"wren number" : 
    
    "4498076",
    "price/case" : "$27.29"
  },
  {"wren number" : 
    
    "4502014",
    "price/case" : "$25.00"
  },
  {"wren number" : 
    
    "4502016",
    "price/case" : "$25.45"
  },
  {"wren number" : 
    
    "4568121",
    "price/case" : "$69.04"
  },
  {"wren number" : 
    
    "4568128",
    "price/case" : "$83.59"
  },
  {"wren number" : 
    
    "4568134",
    "price/case" : "$83.47"
  },
  {"wren number" : 
    
    "4569139",
    "price/case" : "$90.09"
  },
  {"wren number" : 
    
    "4569148",
    "price/case" : "$78.73"
  },
  {"wren number" : 
    
    "4569153",
    "price/case" : "$93.04"
  },
  {"wren number" : 
    
    "4569156",
    "price/case" : "$90.09"
  },
  {"wren number" : 
    
    "4569159",
    "price/case" : "$93.14"
  },
  {"wren number" : 
    
    "4645003",
    "price/case" : "$26.93"
  },
  {"wren number" : 
    
    "4843021",
    "price/case" : "$24.85"
  },
  {"wren number" : 
    
    "4952101",
    "price/case" : "$14.40"
  },
  {"wren number" : 
    
    "5054000",
    "price/case" : "$35.35"
  },
  {"wren number" : 
    
    "5116063",
    "price/case" : "$120.75"
  },
  {"wren number" : 
    
    "5175001",
    "price/case" : "$94.22"
  },
  {"wren number" : 
    
    "5255060",
    "price/case" : "$30.71"
  },
  {"wren number" : 
    
    "5358013",
    "price/case" : "$28.42"
  },
  {"wren number" : 
    
    "5370012",
    "price/case" : "$29.64"
  },
  {"wren number" : 
    
    "5429596",
    "price/case" : "$18.60"
  },
  {"wren number" : 
    
    "5429609",
    "price/case" : "$18.30"
  },
  {"wren number" : 
    
    "5478016",
    "price/case" : "$25.20"
  },
  {"wren number" : 
    
    "5565362",
    "price/case" : "$58.95"
  },
  {"wren number" : 
    
    "5582226",
    "price/case" : "$51.57"
  },
  {"wren number" : 
    
    "5582261",
    "price/case" : "$51.68"
  },
  {"wren number" : 
    
    "5582266",
    "price/case" : "$51.58"
  },
  {"wren number" : 
    
    "5582273",
    "price/case" : "$51.78"
  },
  {"wren number" : 
    
    "5776003",
    "price/case" : "$27.35"
  },
  {"wren number" : 
    
    "5792103",
    "price/case" : "$13.92"
  },
  {"wren number" : 
    
    "5906009",
    "price/case" : "$55.57"
  },
  {"wren number" : 
    
    "6008009",
    "price/case" : "$45.24"
  },
  {"wren number" : 
    
    "6048009",
    "price/case" : "$20.64"
  },
  {"wren number" : 
    
    "6070080",
    "price/case" : "$13.57"
  },
  {"wren number" : 
    
    "6294054",
    "price/case" : "$33.82"
  },
  {"wren number" : 
    
    "6691861",
    "price/case" : "$35.38"
  },
  {"wren number" : 
    
    "6691879",
    "price/case" : "$35.17"
  },
  {"wren number" : 
    
    "6842107",
    "price/case" : "$12.80"
  },
  {"wren number" : 
    
    "7083068",
    "price/case" : "$42.73"
  },
  {"wren number" : 
    
    "7084000",
    "price/case" : "$25.75"
  },
  {"wren number" : 
    
    "7087023",
    "price/case" : "$15.04"
  },
  {"wren number" : 
    
    "7312058",
    "price/case" : "$32.32"
  },
  {"wren number" : 
    
    "7312061",
    "price/case" : "$31.10"
  },
  {"wren number" : 
    
    "7312064",
    "price/case" : "$31.20"
  },
  {"wren number" : 
    
    "7353064",
    "price/case" : "$52.52"
  },
  {"wren number" : 
    
    "7421079",
    "price/case" : "$43.24"
  },
  {"wren number" : 
    
    "7500112",
    "price/case" : "$40.40"
  },
  {"wren number" : 
    
    "7554070",
    "price/case" : "$59.07"
  },
  {"wren number" : 
    
    "7559107",
    "price/case" : "$20.09"
  },
  {"wren number" : 
    
    "7633074",
    "price/case" : "$70.00"
  },
  {"wren number" : 
    
    "7634339",
    "price/case" : "$49.51"
  },
  {"wren number" : 
    
    "7778030",
    "price/case" : "$30.29"
  },
  {"wren number" : 
    
    "7812076",
    "price/case" : "$29.57"
  },
  {"wren number" : 
    
    "8200113",
    "price/case" : "$46.90"
  },
  {"wren number" : 
    
    "8226012",
    "price/case" : "$108.90"
  },
  {"wren number" : 
    
    "8235106",
    "price/case" : "$46.53"
  },
  {"wren number" : 
    
    "8235116",
    "price/case" : "$46.53"
  },
  {"wren number" : 
    
    "8235117",
    "price/case" : "$46.69"
  },
  {"wren number" : 
    
    "8257018",
    "price/case" : "$27.61"
  },
  {"wren number" : 
    
    "8498022",
    "price/case" : "$89.05"
  },
  {"wren number" : 
    
    "8549020",
    "price/case" : "$31.56"
  },
  {"wren number" : 
    
    "8551000",
    "price/case" : "$23.40"
  },
  {"wren number" : 
    
    "8731041",
    "price/case" : "$29.69"
  },
  {"wren number" : 
    
    "8759009",
    "price/case" : "$14.42"
  },
  {"wren number" : 
    
    "10195003",
    "price/case" : "$58.77"
  },
  {"wren number" : 
    
    "10195005",
    "price/case" : "$58.52"
  },
  {"wren number" : 
    
    "10368024",
    "price/case" : "$48.54"
  },
  {"wren number" : 
    
    "10454015",
    "price/case" : "$28.80"
  },
  {"wren number" : 
    
    "10726000",
    "price/case" : "$39.11"
  },
  {"wren number" : 
    
    "10826007",
    "price/case" : "$87.63"
  },
  {"wren number" : 
    
    "10935001",
    "price/case" : "$36.10"
  },
  {"wren number" : 
    
    "10958742",
    "price/case" : "$22.70"
  },
  {"wren number" : 
    
    "10958713",
    "price/case" : "$25.90"
  },
  {"wren number" : 
    
    "10979009",
    "price/case" : "$99.22"
  },
  {"wren number" : 
    
    "10989013",
    "price/case" : "$56.50"
  },
  {"wren number" : 
    
    "11671049",
    "price/case" : "$126.86"
  },
  {"wren number" : 
    
    "11671051",
    "price/case" : "$128.27"
  },
  {"wren number" : 
    
    "11765077",
    "price/case" : "$80.98"
  },
  {"wren number" : 
    
    "11765100",
    "price/case" : "$80.81"
  },
  {"wren number" : 
    
    "11765102",
    "price/case" : "$85.59"
  },
  {"wren number" : 
    
    "11766098",
    "price/case" : "$73.94"
  },
  {"wren number" : 
    
    "11766116",
    "price/case" : "$101.38"
  },
  {"wren number" : 
    
    "11766119",
    "price/case" : "$73.90"
  },
  {"wren number" : 
    
    "11766120",
    "price/case" : "$77.56"
  },
  {"wren number" : 
    
    "11767084",
    "price/case" : "$78.49"
  },
  {"wren number" : 
    
    "11767102",
    "price/case" : "$78.60"
  },
  {"wren number" : 
    
    "11767103",
    "price/case" : "$81.91"
  },
  {"wren number" : 
    
    "11859009",
    "price/case" : "$52.03"
  },
  {"wren number" : 
    
    "11859011",
    "price/case" : "$44.59"
  },
  {"wren number" : 
    
    "12197000",
    "price/case" : "$116.31"
  },
  {"wren number" : 
    
    "12793001",
    "price/case" : "$66.59"
  },
  {"wren number" : 
    
    "12910004",
    "price/case" : "$26.18"
  },
  {"wren number" : 
    
    "12911003",
    "price/case" : "$27.75"
  },
  {"wren number" : 
    
    "12944006",
    "price/case" : "$23.42"
  },
  {"wren number" : 
    
    "13229425",
    "price/case" : "$0.00"
  },
  {"wren number" : 
    
    "13229529",
    "price/case" : "$35.35"
  },
  {"wren number" : 
    
    "13229517",
    "price/case" : "$38.50"
  },
  {"wren number" : 
    
    "13257001",
    "price/case" : "$116.98"
  },
  {"wren number" : 
    
    "13825006",
    "price/case" : "$23.89"
  },
  {"wren number" : 
    
    "13826005",
    "price/case" : "$55.07"
  },
  {"wren number" : 
    
    "13826001",
    "price/case" : "$55.02"
  },
  {"wren number" : 
    
    "14633000",
    "price/case" : "$24.61"
  },
  {"wren number" : 
    
    "14762000",
    "price/case" : "$56.34"
  },
  {"wren number" : 
    
    "14894009",
    "price/case" : "$68.02"
  },
  {"wren number" : 
    
    "15423007",
    "price/case" : "$45.04"
  },
  {"wren number" : 
    
    "15610000",
    "price/case" : "$18.89"
  },
  {"wren number" : 
    
    "15635004",
    "price/case" : "$0.00"
  },
  {"wren number" : 
    
    "15737008",
    "price/case" : "$0.00"
  },
  {"wren number" : 
    
    "15737022",
    "price/case" : "$110.13"
  },
  {"wren number" : 
    
    "15737023",
    "price/case" : "$90.77"
  },
  {"wren number" : 
    
    "15737024",
    "price/case" : "$108.08"
  },
  {"wren number" : 
    
    "15737027",
    "price/case" : "$108.24"
  },
  {"wren number" : 
    
    "15737028",
    "price/case" : "$110.04"
  },
  {"wren number" : 
    
    "15757000",
    "price/case" : "$0.00"
  },
  {"wren number" : 
    
    "15833002",
    "price/case" : "$81.31"
  },
  {"wren number" : 
    
    "15833004",
    "price/case" : "$68.37"
  },
  {"wren number" : 
    
    "15833006",
    "price/case" : "$83.66"
  },
  {"wren number" : 
    
    "15849065",
    "price/case" : "$38.50"
  },
  {"wren number" : 
    
    "15849109",
    "price/case" : "$41.70"
  },
  {"wren number" : 
    
    "15886002",
    "price/case" : "$50.50"
  },
  {"wren number" : 
    
    "16552002",
    "price/case" : "$0.00"
  },
  {"wren number" : 
    
    "16635022",
    "price/case" : "$90.28"
  },
  {"wren number" : 
    
    "16635023",
    "price/case" : "$0.00"
  },
  {"wren number" : 
    
    "16635024",
    "price/case" : "$0.00"
  },
  {"wren number" : 
    
    "16635027",
    "price/case" : "$90.23"
  },
  {"wren number" : 
    
    "17440000",
    "price/case" : "$23.81"
  },
  {"wren number" : 
    
    "17675146",
    "price/case" : "$0.00"
  },
  {"wren number" : 
    
    "17863000",
    "price/case" : "$60.20"
  },
  {"wren number" : 
    
    "17937142",
    "price/case" : "$0.00"
  },
  {"wren number" : 
    
    "17965038",
    "price/case" : "$35.28"
  },
  {"wren number" : 
    
    "18162397",
    "price/case" : "$0.00"
  },
  {"wren number" : 
    
    "18171249",
    "price/case" : "$0.00"
  },
  {"wren number" : 
    
    "18171251",
    "price/case" : "$99.71"
  },
  {"wren number" : 
    
    "18171252",
    "price/case" : "$0.00"
  },
  {"wren number" : 
    
    "18171253",
    "price/case" : "$99.75"
  },
  {"wren number" : 
    
    "18395000",
    "price/case" : "$35.08"
  },
  {"wren number" : 
    
    "18456000",
    "price/case" : "$0.00"
  },
  {"wren number" : 
    
    "18464000",
    "price/case" : "$60.58"
  },
  {"wren number" : 
    
    "18573053",
    "price/case" : "$0.00"
  },
  {"wren number" : 
    
    "18573054",
    "price/case" : "$99.52"
  },
  {"wren number" : 
    
    "18573055",
    "price/case" : "$99.56"
  },
  {"wren number" : 
    
    "18573056",
    "price/case" : "$0.00"
  },
  {"wren number" : 
    
    "18573057",
    "price/case" : "$99.56"
  },
  {"wren number" : 
    
    "18573058",
    "price/case" : "$99.47"
  },
  {"wren number" : 
    
    "18868000",
    "price/case" : "$99.38"
  },
  {"wren number" : 
    
    "18868001",
    "price/case" : "$99.23"
  },
  {"wren number" : 
    
    "18868002",
    "price/case" : "$99.38"
  },
  {"wren number" : 
    
    "18868003",
    "price/case" : "$99.23"
  },
  {"wren number" : 
    
    "18868004",
    "price/case" : "$99.23"
  },
  {"wren number" : 
    
    "18868006",
    "price/case" : "$106.68"
  },
  {"wren number" : 
    
    "18980000",
    "price/case" : "$35.39"
  },
  {
    "wren number" : "19025001",
    "price/case" : "$35.20"
  },
  {
    "wren number" : "19067000",
    "price/case" : "$34.97"
  }
]
//checking to see if on correct page

//allowing page to load all content before running
setTimeout(function() {
  //get tabset for event listener
  const tabSet = document.querySelector('.c-select-orders-tab');
  console.log(tabSet);
  const ul = tabSet.querySelector('ul');
  console.log(ul);
  const li = ul.getElementsByTagName('LI');
  console.log(li);
  //so div doesn't keep rendering
  let dataAppened = false;
  li[1].onclick = function() {
    //get table data
      const tab = document.querySelector('#tab-2');
      const table = tab.querySelector('table');
      const tableBody = table.querySelector('tbody');
      const rows = tableBody.getElementsByTagName('TR');

      //empty array for created object data
      let tableData = [];
      //empty array for missing wren numbers in data or no price
      let cantCompute = [];
      //money currency
      let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

      //function to get all rows into custom objects to add price to
      function appendData () {
          for (i=0; i<rows.length; i++) {
              let object = {};
              let row = rows[i].getElementsByTagName('TD');
              object.id = Number(row[1].textContent);
              object.qnt = Number(row[4].textContent);
              function getPrice() {
                let arr = data.map(a => Number(a["wren number"]));
                let result = 0;
                if (object.qnt > 0) {
                  if (arr.includes(object.id)) {
                    result = Number((data.find(x => x["wren number"] === row[1].textContent)["price/case"]).replace("$", ""));
                    if (result === 0) {
                      cantCompute.push(object.id);
                    }
                  } else {
                    cantCompute.push(object.id);
                  }
                }
                return result;
              }
              object.price = getPrice();
              object.priceTimesQnt = ((object.price * 100) * object.qnt) / 100;
              tableData.push(object);
          }
      }
      //call function to create array if hasn't already
      if (!dataAppened) {
        appendData();
      }

      //get total of truck cost by adding numbers
      function getTotal() {
        let result = 0;
        for (i=0; i<tableData.length; i++) {
          result += parseFloat(tableData[i].priceTimesQnt);
        }
        return USDollar.format(result);
      }
      const total = getTotal();
      console.log(total);

      //append all data to the DOM
      function addToDom () {
        const parentDiv = document.querySelector(".breadcrumb-wrapper");
        const appendedDiv = document.createElement('div');
        //style the appendedDiv
        appendedDiv.style.position = "relative";
        appendedDiv.style.float = "right";
        appendedDiv.style.top = "0";
        appendedDiv.style.right = "0";
        appendedDiv.style.width = "25%";
        //append div
        parentDiv.parentNode.insertBefore(appendedDiv, parentDiv.nextSibling);

        //truck price div
        const priceDiv = document.createElement('div');
        appendedDiv.appendChild(priceDiv);
        priceDiv.style.color = "white";
        //content for truck price div
        const h1 = document.createElement('h1');
        h1.textContent = "Total Price:"
        h1.style.fontSize = "18px"
        const h2 = document.createElement('h2');
        h2.classList.add('truck-total');
        h2.textContent = `${total}`;
        h2.style.fontSize = "20px";
        priceDiv.appendChild(h1);
        priceDiv.appendChild(h2);

        //missing wren number div
        const missingPriceDiv = document.createElement('div');
        missingPriceDiv.style.position = "relative";
        missingPriceDiv.style.display = "inline-block";
        appendedDiv.appendChild(missingPriceDiv);
        
        //dropdown button
        const dropDownButton = document.createElement('button');
        dropDownButton.textContent = "Missing Prices On Wren Numbers";
        dropDownButton.classList.add('dropdownBtn');
        dropDownButton.style.backgroundColor = "#0099FF";
        dropDownButton.style.padding = "10px";
        dropDownButton.style.border = "none";
        dropDownButton.style.position = "relative";
        dropDownButton.style.zIndex = "100";
        missingPriceDiv.appendChild(dropDownButton);
        //dropdown div
        const missingPriceDropdownDiv = document.createElement('div');
        missingPriceDiv.appendChild(missingPriceDropdownDiv);
        missingPriceDropdownDiv.classList.add('drop-content');
        missingPriceDropdownDiv.style.display = "none";
        missingPriceDropdownDiv.style.position = "absolute";
        missingPriceDropdownDiv.style.backgroundColor = "white";
        missingPriceDropdownDiv.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
        missingPriceDropdownDiv.style.zIndex = "1";
        missingPriceDropdownDiv.style.right = "0";
        missingPriceDropdownDiv.style.width = "50%";
        //drop down button function
        dropDownButton.onclick = function() {
          if (missingPriceDropdownDiv.style.display === "block") {
            missingPriceDropdownDiv.style.display = "none"
          } else {
            missingPriceDropdownDiv.style.display = "block";
          }
        };

        //add all wren numbers with no price or missing from data sheet
        for (i=0; i<cantCompute.length; i++) {
          let span = document.createElement('span');
          span.textContent = cantCompute[i];
          span.style.color = "black";
          span.style.padding = "5px 10px";
          span.style.display = "block";
          missingPriceDropdownDiv.appendChild(span);
        }
        dataAppened = true;
      }
      if (!dataAppened) {
        addToDom();
      }

      /*for (j=0; j<tableData.length; j++) {
            if (tableData[j].id === Number(row[1])) {
              tableData[j].qnt = Number(row[4]);
              let h2 = document.getElementsByClassName('truck-total');
              h2.textContent = `${total}`;
              console.log(total);
            }
          }*/
      function ael() {
        console.log("even listener added");
      }
      //update truck price when qnt changes
      for (i=0; i<rows.length; i++) {
        let row = rows[i].getElementsByTagName('TD');
        row[4].addEventListener = ("click", ael)
        }
      }

      window.onclick = function(e) {
        if (!e.target.matches('.dropdownBtn')) {
          let drop = document.getElementsByClassName('drop-content');
          for (i=0; i<drop.length;i++) {
            let openDrop = drop[i];
            if (openDrop.style.display === 'block') {
              openDrop.style.display = "none";
            }
          }
        }
      }
 
  
}, 5000);