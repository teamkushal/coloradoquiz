import { TestBed } from '@angular/core/testing';

import { Experimental1114Service } from './experimental1114.service';

describe('Experimental1114Service', () => {
  let service: Experimental1114Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1114Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
