import { TestBed } from '@angular/core/testing';

import { Experimental3148Service } from './experimental3148.service';

describe('Experimental3148Service', () => {
  let service: Experimental3148Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3148Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
