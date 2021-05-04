import { TestBed } from '@angular/core/testing';

import { Experimental3565Service } from './experimental3565.service';

describe('Experimental3565Service', () => {
  let service: Experimental3565Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3565Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
