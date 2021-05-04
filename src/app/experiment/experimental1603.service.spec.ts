import { TestBed } from '@angular/core/testing';

import { Experimental1603Service } from './experimental1603.service';

describe('Experimental1603Service', () => {
  let service: Experimental1603Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1603Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
