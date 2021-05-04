import { TestBed } from '@angular/core/testing';

import { Experimental1038Service } from './experimental1038.service';

describe('Experimental1038Service', () => {
  let service: Experimental1038Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1038Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
