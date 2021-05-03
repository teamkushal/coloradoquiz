import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent256Component } from './test-component256.component';

describe('TestComponent256Component', () => {
  let component: TestComponent256Component;
  let fixture: ComponentFixture<TestComponent256Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent256Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
