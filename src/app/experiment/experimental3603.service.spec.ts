import { TestBed } from '@angular/core/testing';

import { Experimental3603Service } from './experimental3603.service';

describe('Experimental3603Service', () => {
  let service: Experimental3603Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3603Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
