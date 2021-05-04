import { TestBed } from '@angular/core/testing';

import { Experimental1515Service } from './experimental1515.service';

describe('Experimental1515Service', () => {
  let service: Experimental1515Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1515Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
