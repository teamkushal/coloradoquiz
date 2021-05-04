import { TestBed } from '@angular/core/testing';

import { Experimental1883Service } from './experimental1883.service';

describe('Experimental1883Service', () => {
  let service: Experimental1883Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1883Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
