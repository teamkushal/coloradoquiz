import { TestBed } from '@angular/core/testing';

import { Experimental3244Service } from './experimental3244.service';

describe('Experimental3244Service', () => {
  let service: Experimental3244Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3244Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
