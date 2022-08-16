

/** creating abstract class */
class JoiMessage {
  errNumber = '';
  errMessages = {};
  getMessage(){};

}

class JoiMessageDisplay extends JoiMessage {

  errMessages = { 'JoiMessageError': 'JoiMessageError' };
  getMessage () {
    return errMessages;
  }
}

const a = new JoiMessageDisplay();
a.getMessage();