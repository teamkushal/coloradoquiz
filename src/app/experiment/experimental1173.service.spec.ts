import { TestBed } from '@angular/core/testing';

import { Experimental1173Service } from './experimental1173.service';

describe('Experimental1173Service', () => {
  let service: Experimental1173Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1173Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
