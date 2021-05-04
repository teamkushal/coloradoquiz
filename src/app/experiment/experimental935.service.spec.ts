import { TestBed } from '@angular/core/testing';

import { Experimental935Service } from './experimental935.service';

describe('Experimental935Service', () => {
  let service: Experimental935Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental935Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
