import { TestBed } from '@angular/core/testing';

import { Experimental1096Service } from './experimental1096.service';

describe('Experimental1096Service', () => {
  let service: Experimental1096Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1096Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
