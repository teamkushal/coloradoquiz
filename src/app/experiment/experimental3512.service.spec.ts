import { TestBed } from '@angular/core/testing';

import { Experimental3512Service } from './experimental3512.service';

describe('Experimental3512Service', () => {
  let service: Experimental3512Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3512Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
