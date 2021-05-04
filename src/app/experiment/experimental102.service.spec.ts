import { TestBed } from '@angular/core/testing';

import { Experimental102Service } from './experimental102.service';

describe('Experimental102Service', () => {
  let service: Experimental102Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental102Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
