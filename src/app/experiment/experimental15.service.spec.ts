import { TestBed } from '@angular/core/testing';

import { Experimental15Service } from './experimental15.service';

describe('Experimental15Service', () => {
  let service: Experimental15Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental15Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
