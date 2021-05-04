import { TestBed } from '@angular/core/testing';

import { Experimental3365Service } from './experimental3365.service';

describe('Experimental3365Service', () => {
  let service: Experimental3365Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3365Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
