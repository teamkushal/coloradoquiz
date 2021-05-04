import { TestBed } from '@angular/core/testing';

import { Experimental1306Service } from './experimental1306.service';

describe('Experimental1306Service', () => {
  let service: Experimental1306Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1306Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
