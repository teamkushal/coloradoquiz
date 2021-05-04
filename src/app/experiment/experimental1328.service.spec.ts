import { TestBed } from '@angular/core/testing';

import { Experimental1328Service } from './experimental1328.service';

describe('Experimental1328Service', () => {
  let service: Experimental1328Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1328Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
