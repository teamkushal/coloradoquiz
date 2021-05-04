import { TestBed } from '@angular/core/testing';

import { Experimental381Service } from './experimental381.service';

describe('Experimental381Service', () => {
  let service: Experimental381Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental381Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
