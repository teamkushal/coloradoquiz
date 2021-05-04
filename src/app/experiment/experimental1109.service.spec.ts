import { TestBed } from '@angular/core/testing';

import { Experimental1109Service } from './experimental1109.service';

describe('Experimental1109Service', () => {
  let service: Experimental1109Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1109Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
