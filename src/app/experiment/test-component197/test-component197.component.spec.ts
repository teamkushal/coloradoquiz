import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent197Component } from './test-component197.component';

describe('TestComponent197Component', () => {
  let component: TestComponent197Component;
  let fixture: ComponentFixture<TestComponent197Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent197Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
