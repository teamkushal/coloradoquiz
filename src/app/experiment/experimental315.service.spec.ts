import { TestBed } from '@angular/core/testing';

import { Experimental315Service } from './experimental315.service';

describe('Experimental315Service', () => {
  let service: Experimental315Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental315Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
