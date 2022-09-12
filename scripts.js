function restorePrevTheme(){
  let prevTheme = getCookie("prevTheme");
  if (prevTheme == "dark"){
    document.getElementById("style").setAttribute("href","./dark.css");
    document.getElementById("themeName").innerHTML = "light";
  }else if(prevTheme == "light"){
    document.getElementById("style").setAttribute("href","./styles.css");
    document.getElementById("themeName").innerHTML = "dark";
  }
}



var _pj;

function _pj_snippets(container) {
  function in_es6(left, right) {
    if (right instanceof Array || typeof right === "string") {
      return right.indexOf(left) > -1;
    } else {
      if (right instanceof Map || right instanceof Set || right instanceof WeakMap || right instanceof WeakSet) {
        return right.has(left);
      } else {
        return left in right;
      }
    }
  }

  container["in_es6"] = in_es6;
  return container;
}

_pj = {};

_pj_snippets(_pj);



function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  cvalue = cvalue.split('\n').join('\\');
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function checkCookie() {
  let prevInp = getCookie("prevText");
  prevInp = prevInp.split('\\').join('\n');
  document.getElementById("input_text").value = prevInp;
  english_to_arabic();
}



function english_to_arabic() {
  var inp = document.getElementById("input_text").value;

  setCookie("prevText", inp, 90);

  var arabic, arabic_prev, arabic_prev2, arabic_prev3, consonants, ginipig, i, idgaam_nun, next, next2, next3, next4, prev, prev2, prev3, qamariyya, sakinable;
  sakinable = ["b", "t", "c", "j", "H", "Q", "d", "z", "r", "Z", "s", "S", "C", "D", "T", "J", "`", "g", "f", "q", "K", "k", "l", "m", "n", "w", "h", "'", "\"", "|", "y"];
  consonants = ["*", "'", "\"", "|", "`", "a", "A", "E", "b", "c", "C", "d", "D", "f", "g", "h", "H", "j", "J", "k", "K", "l", "m", "n", "q", "Q", "r", "s", "S", "t", "T", "w", "W", "y", "Y", "z", "Z"];
  arabic = "";
  i = 0;


  while (i < inp.length) {
    next = "";
    next2 = "";
    next3 = "";
    next4 = "";
    prev = "";
    arabic_prev = "";
    prev2 = "";
    arabic_prev2 = "";
    prev3 = "";
    ginipig = inp[i];

    if (i + 1 < inp.length) {
      next = inp[i + 1];
    }

    if (i + 2 < inp.length) {
      next2 = inp[i + 2];
    }

    if (i + 3 < inp.length) {
      next3 = inp[i + 3];
    }

    if (i + 4 < inp.length) {
      next4 = inp[i + 4];
    }

    if (i !== 0) {
      prev = inp[i - 1];
    }

    if (i > 1) {
      prev2 = inp[i - 2];
    }

    if (i > 2) {
      prev3 = inp[i - 3];
    }

    if (arabic.length >= 1) {
      arabic_prev = arabic[arabic.length - 1];
    }

    if (arabic.length >= 2) {
      arabic_prev2 = arabic[arabic.length - 2];
    }

    if (arabic.length >= 3) {
      arabic_prev3 = arabic[arabic.length - 3];
    }

    if (ginipig === " ") {
      arabic += " ";
    } else {
      if (ginipig === "\n") {
        arabic += "\n";
      } else {
        if (ginipig === "1") {
          arabic += "\u0661";
        } else {
          if (ginipig === "2") {
            arabic += "\u0662";
          } else {
            if (ginipig === "3") {
              arabic += "\u0663";
            } else {
              if (ginipig === "4") {
                arabic += "\u0664";
              } else {
                if (ginipig === "5") {
                  arabic += "\u0665";
                } else {
                  if (ginipig === "6") {
                    arabic += "\u0666";
                  } else {
                    if (ginipig === "7") {
                      arabic += "\u0667";
                    } else {
                      if (ginipig === "8") {
                        arabic += "\u0668";
                      } else {
                        if (ginipig === "9") {
                          arabic += "\u0669";
                        } else {
                          if (ginipig === "0") {
                            arabic += "\u0660";
                          } else {
                            if (ginipig === "%") {
                              arabic += "\u066a";
                            } else {
                              if (ginipig === "?") {
                                arabic += "\u061f";
                              } else {
                                if (ginipig === "b") {
                                  arabic += "\u0628";
                                } else {
                                  if (ginipig === "t") {
                                    if (next !== "w") {
                                      arabic += "\u0629";
                                    } else {
                                      arabic += "\u0637";
                                      i += 1;

                                      if (i + 1 < inp.length) {
                                        next = inp[i + 1];
                                      }

                                      if (i + 2 < inp.length) {
                                        next2 = inp[i + 2];
                                      }

                                      if (i + 3 < inp.length) {
                                        next3 = inp[i + 3];
                                      }

                                      if (i + 4 < inp.length) {
                                        next4 = inp[i + 4];
                                      }
                                    }
                                  } else {
                                    if (ginipig === "T") {
                                      arabic += "\u062a";
                                    } else {
                                      if (ginipig === "c") {
                                        arabic += "\u062b";
                                      } else {
                                        if (ginipig === "j") {
                                          arabic += "\u062c";
                                        } else {
                                          if (ginipig === "H") {
                                            arabic += "\u062d";
                                          } else {
                                            if (ginipig === "Q") {
                                              arabic += "\u062e";
                                            } else {
                                              if (ginipig === "d") {
                                                arabic += "\u062f";
                                              } else {
                                                if (ginipig === "z") {
                                                  arabic += "\u0630";
                                                } else {
                                                  if (ginipig === "r") {
                                                    arabic += "\u0631";
                                                  } else {
                                                    if (ginipig === "Z") {
                                                      arabic += "\u0632";
                                                    } else {
                                                      if (ginipig === "s") {
                                                        arabic += "\u0633";
                                                      } else {
                                                        if (ginipig === "S") {
                                                          arabic += "\u0634";
                                                        } else {
                                                          if (ginipig === "C") {
                                                            arabic += "\u0635";
                                                          } else {
                                                            if (ginipig === "D") {
                                                              arabic += "\u0636";
                                                            } else {
                                                              if (ginipig === "J") {
                                                                arabic += "\u0638";
                                                              } else {
                                                                if (ginipig === "`") {
                                                                  arabic += "\u0639";
                                                                } else {
                                                                  if (ginipig === "g") {
                                                                    arabic += "\u063a";
                                                                  } else {
                                                                    if (ginipig === "f") {
                                                                      arabic += "\u0641";
                                                                    } else {
                                                                      if (_pj.in_es6(ginipig, ["q", "K"])) {
                                                                        arabic += "\u0642";
                                                                      } else {
                                                                        if (ginipig === "k") {
                                                                          arabic += "\u0643";
                                                                        } else {
                                                                          if (ginipig === "l") {
                                                                            arabic += "\u0644";
                                                                          } else {
                                                                            if (ginipig === "m") {
                                                                              arabic += "\u0645";
                                                                            } else {
                                                                              if (ginipig === "M") {
                                                                                arabic += "\u06d8";
                                                                              } else {
                                                                                if (ginipig === "n") {
                                                                                  arabic += "\u0646";
                                                                                } else {
                                                                                  if (ginipig === "w") {
                                                                                    arabic += "\u0648";
                                                                                  } else {
                                                                                    if (ginipig === "W") {
                                                                                      arabic += "\u0624";
                                                                                    } else {
                                                                                      if (ginipig === "h") {
                                                                                        arabic += "\u0647";
                                                                                      } else {
                                                                                        if (ginipig === "'" && prev !== "\\") {
                                                                                          if (!_pj.in_es6(next, ["", " ", "\n"]) && (!_pj.in_es6(next, ["a", "A", "u", "U", "i", "I"]) || !_pj.in_es6(next2, ["", " ", "\n"])) && (!_pj.in_es6(next, ["a", "i", "u"]) || next2 !== "N" || !_pj.in_es6(next3, ["", " ", "\n"]))) {
                                                                                            if (prev === "l") {
                                                                                              arabic += "\u0623";
                                                                                            } else {
                                                                                              if (arabic_prev === "\u0652" && arabic_prev2 !== "\u0648" && !_pj.in_es6(next, ["", " ", "\n"])) {
                                                                                                if (_pj.in_es6(next, ["u", "U"])) {
                                                                                                  arabic += "\u0624";
                                                                                                } else {
                                                                                                  if (_pj.in_es6(next, ["a", "A"])) {
                                                                                                    arabic += "\u0623";
                                                                                                  } else {
                                                                                                    if (_pj.in_es6(next, ["i", "I"])) {
                                                                                                      arabic += "\u0626";
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              } else {
                                                                                                if (arabic_prev === "\u0627" && arabic_prev2 === "\u064e" && _pj.in_es6(next, ["u"]) && next2 !== "w") {
                                                                                                  arabic += "\u0624";
                                                                                                } else {
                                                                                                  if (arabic_prev === "\u0652" && arabic_prev2 === "\u0648" && _pj.in_es6(arabic_prev3, ["\u0657", "\u064f", "\u0670", "\u064e"])) {
                                                                                                    arabic += "\u0621";
                                                                                                  } else {
                                                                                                    if (_pj.in_es6(arabic_prev, ["\u0650", "\u0656"]) || arabic_prev === "\u0652" && arabic_prev2 === "\u064a" || _pj.in_es6(next, ["i", "I"])) {
                                                                                                      arabic += "\u0626";
                                                                                                    } else {
                                                                                                      if (_pj.in_es6(arabic_prev, ["\u0657", "\u064f"])) {
                                                                                                        if (!_pj.in_es6(next, ["i", "I"])) {
                                                                                                          arabic += "\u0624";
                                                                                                        }
                                                                                                      } else {
                                                                                                        if (arabic_prev === "\u064e") {
                                                                                                          arabic += "\u0623";
                                                                                                        } else {
                                                                                                          arabic += "\u0621";
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          } else {
                                                                                            if (_pj.in_es6(prev, ["", " ", "\n"])) {
                                                                                              if (_pj.in_es6(next, ["a", "u", "A", "U"])) {
                                                                                                arabic += "\u0623";
                                                                                              } else {
                                                                                                if (_pj.in_es6(next, ["i", "I"])) {
                                                                                                  arabic += "\u0625";
                                                                                                } else {
                                                                                                  arabic += "\u0621";
                                                                                                }
                                                                                              }
                                                                                            } else {
                                                                                              if (_pj.in_es6(next, ["", " ", "\n"]) || _pj.in_es6(next, ["a", "A", "i", "I", "u", "U"]) && _pj.in_es6(next2, ["", " ", "\n"]) || _pj.in_es6(next, ["a", "i", "u"]) && next2 === "N" && _pj.in_es6(next3, ["", " ", "\n"])) {
                                                                                                if (_pj.in_es6(arabic_prev, ["\u0657", "\u064f"])) {
                                                                                                  arabic += "\u0624";
                                                                                                } else {
                                                                                                  if (_pj.in_es6(arabic_prev, ["\u064e", "\u0670"])) {
                                                                                                    arabic += "\u0623";
                                                                                                  } else {
                                                                                                    if (_pj.in_es6(arabic_prev, ["\u0656", "\u0650"])) {
                                                                                                      arabic += "\u0626";
                                                                                                    } else {
                                                                                                      arabic += "\u0621";
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              } else {
                                                                                                arabic += "\u0621";
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        } else {
                                                                                          if (ginipig === "|" && prev !== "\\") {
                                                                                            arabic += "\u0621";
                                                                                          } else {
                                                                                            if (ginipig === "\"" && prev !== "\\") {
                                                                                              arabic += "\u0626";
                                                                                            } else {
                                                                                              if (ginipig === "y") {
                                                                                                arabic += "\u064a";
                                                                                              } else {
                                                                                                if (ginipig === "Y") {
                                                                                                  arabic += "\u0649";
                                                                                                } else {
                                                                                                  if (ginipig === "a") {
                                                                                                    if (_pj.in_es6(prev, ["", " ", "\n"]) && next !== "~" || arabic_prev === "\u0650" && arabic_prev2 === "\u0628" || arabic_prev === "\u064e" && arabic_prev2 === "\u0641"  && prev3 !== "l") {
                                                                                                      arabic += "\u0671";
                                                                                                    } else {
                                                                                                      arabic += "\u0627";
                                                                                                    }
                                                                                                  } else {
                                                                                                    if (ginipig === "A") {
                                                                                                      arabic += "\u0623";

                                                                                                      if (next !== "a") {
                                                                                                        arabic += "\u064e";
                                                                                                      }
                                                                                                    } else {
                                                                                                      if (ginipig === "I") {
                                                                                                        arabic += "\u0625\u0650";
                                                                                                      } else {
                                                                                                        if (ginipig === "U") {
                                                                                                          arabic += "\u0623\u064f";
                                                                                                        } else {
                                                                                                          if (ginipig === "i") {
                                                                                                            arabic += "\u0671\u061a";
                                                                                                          } else {
                                                                                                            if (ginipig === "u") {
                                                                                                              arabic += "\u0671\u0619";
                                                                                                            } else {
                                                                                                              if (ginipig === "\\") {
                                                                                                                if (next === "\\") {
                                                                                                                  arabic += "\\";
                                                                                                                  i += 1;
                                                                                                                } else {
                                                                                                                  arabic += "";
                                                                                                                }
                                                                                                              } else {
                                                                                                                if (ginipig === "^") {
                                                                                                                  arabic += "\u0652";
                                                                                                                } else {
                                                                                                                  if (ginipig === "*") {
                                                                                                                    arabic += "\u0651";
                                                                                                                  } else {
                                                                                                                    if (ginipig === "~") {
                                                                                                                      arabic += "\u0653";
                                                                                                                    } else {
                                                                                                                      if (!_pj.in_es6(ginipig, ["N"])) {
                                                                                                                        if (!(ginipig === "_" && prev !== "\\")) {
                                                                                                                          arabic += ginipig;
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    if (_pj.in_es6(ginipig, sakinable) && (_pj.in_es6(next, sakinable) || _pj.in_es6(next, ["\n", " ", ""])) && ginipig !== next && !_pj.in_es6(prev, ["", " ", "\n", "\\"]) && arabic_prev !== "\u0652") {
      if (!_pj.in_es6(ginipig, ["l", "n", "m", "w"])) {
        arabic += "\u0652";
      } else {
        if (ginipig === "l") {
          qamariyya = ["b", "g", "H", "j", "k", "w", "Q", "f", "`", "q", "K", "'", "y", "m", "h"];

          if (_pj.in_es6(next, qamariyya) || next === " " && (_pj.in_es6(next2, qamariyya) || _pj.in_es6(next2, ["", " ", "\n"])) || _pj.in_es6(next, ["", "\n"])) {
            arabic += "\u0652";
          } else {
            arabic += "";
          }
        } else {
          if (ginipig === "n") {
            idgaam_nun = ["y", "Y", "r", "m", "l", "w", "n"];

            if (_pj.in_es6(next, idgaam_nun) || next === " " && _pj.in_es6(next2, idgaam_nun)) {
              if (_pj.in_es6(next, ["y", "w"]) && next2 === "a" && next3 === "N") {
                arabic += "\u0652";
              } else {
                arabic += "";
              }
            } else {
              if (next === "b" || next === " " && next2 === "b") {
                arabic += " \u06d8 ";
              } else {
                arabic += "\u0652";
              }
            }
          } else {
            if (ginipig === "m") {
              if (next === "m" || next === " " && next2 === "m") {
                arabic += "";
              } else {
                arabic += "\u0652";
              }
            } else {
              if (ginipig === "w") {
                if (_pj.in_es6(arabic_prev2, ["\u0623", "\u0627"]) && arabic_prev === "\u064f" && next === "l") {
                  arabic += "";
                } else {
                  arabic += "\u0652";
                }
              }
            }
          }
        }
      }
    }

    if (ginipig === next && !_pj.in_es6(" ", next) && !_pj.in_es6(next, ["", " ", "\n", "\\", "'", "a", "A", "E", "i", "u", "I", "U"]) && prev !== "\\") {
      if ((_pj.in_es6(prev2, ["", " ", "\n"]) && prev === "a" || prev2 === "a" && prev === "~") && ginipig === "l" && _pj.in_es6(next2, ["a", "A"]) && next3 === "h") {
        arabic += "\u0644";
        arabic += "\u0651";
        arabic += "\u0670";
        i += 2;
      } else {
        arabic += "\u0651";
        i += 1;

        if (i + 1 < inp.length) {
          next = inp[i + 1];
        }

        if (i + 2 < inp.length) {
          next2 = inp[i + 2];
        }
      }
    }

    if (!_pj.in_es6(ginipig, [" ", "\n"])) {
      if (_pj.in_es6(ginipig, consonants)) {
        if (next === "a") {
          if (next2 === "N") {
            arabic += "\u064b";

            if (_pj.in_es6(next3, ["", " ", "\n"]) && !_pj.in_es6(ginipig, ["t", "|"])) {
              arabic += "\u0627";
            }
          } else {
            arabic += "\u064e";
          }

          i += 1;
        } else {
          if (next === "A") {
            arabic += "\u0670";
            i += 1;
          } else {
            if (next === "i") {
              if (next2 === "N") {
                arabic += "\u064d";
              } else {
                arabic += "\u0650";
              }

              i += 1;
            } else {
              if (next === "I") {
                arabic += "\u0656";
                i += 1;
              } else {
                if (next === "u") {
                  if (next2 === "N") {
                    arabic += "\u064c";
                  } else {
                    arabic += "\u064f";
                  }

                  i += 1;
                } else {
                  if (next === "U") {
                    arabic += "\u0657";
                    i += 1;
                  }
                }
              }
            }
          }
        }
      }
    }

    if (_pj.in_es6(prev, ["", " ", "\n"]) && ginipig === "b" && next === "i" && next2 === next3 && next2 === "l" && _pj.in_es6(next4, ["a", "A"])) {
      arabic += "\u0671";
      arabic += "\u0644";
      arabic += "\u0644";
      arabic += "\u0651";
      arabic += "\u0670";
      i += 3;
    }
    
    i += 1;
  }

  document.getElementById("output").value = arabic;
  if (document.getElementById("output").value != ""){
    document.getElementById("output").setAttribute("Style","text-align: right; font-size: 35px;");
  }
  document.getElementById("output").scrollTop = document.getElementById("output").scrollHeight;
  
}




function copy(){
  // Get the text field
  var copyText = document.getElementById("output");

  // Select the text field
  copyText.select();
  // copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}

window.onkeydown = function(event){
    if ((event.ctrlKey && event.key=='c')) {
      copy();
      document.getElementById("output").setAttribute("Style", "text-align: right; font-size: 32px");
   }
}

window.onkeyup = function() {
  english_to_arabic();
  if(document.getElementById("output").value == ""){
    document.getElementById("output").setAttribute("Style","text-align: left; font-size: normal");
  }
}

function changeTheme() {
  var currentTheme = document.getElementById("style").getAttribute("href");

  if (currentTheme == "./styles.css"){
    document.getElementById("style").setAttribute("href","./dark.css");
    document.getElementById("themeName").innerHTML = "light";
    setCookie("prevTheme","dark",90);
  }
  else if (currentTheme == "./dark.css"){
    document.getElementById("style").setAttribute("href","./styles.css");
    document.getElementById("themeName").innerHTML = "dark";
    setCookie("prevTheme","light",90);
  }
}
