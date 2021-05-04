import { TestBed } from '@angular/core/testing';

import { Experimental1190Service } from './experimental1190.service';

describe('Experimental1190Service', () => {
  let service: Experimental1190Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1190Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
