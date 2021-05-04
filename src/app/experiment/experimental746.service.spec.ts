import { TestBed } from '@angular/core/testing';

import { Experimental746Service } from './experimental746.service';

describe('Experimental746Service', () => {
  let service: Experimental746Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental746Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
