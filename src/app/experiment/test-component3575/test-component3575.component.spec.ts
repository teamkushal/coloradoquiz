import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3575Component } from './test-component3575.component';

describe('TestComponent3575Component', () => {
  let component: TestComponent3575Component;
  let fixture: ComponentFixture<TestComponent3575Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3575Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
