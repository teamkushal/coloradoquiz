import { TestBed } from '@angular/core/testing';

import { Experimental1073Service } from './experimental1073.service';

describe('Experimental1073Service', () => {
  let service: Experimental1073Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1073Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
